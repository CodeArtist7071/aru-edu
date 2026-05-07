import os
import sys
import json
import argparse
import fitz
from datetime import datetime

# Add project root to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from agents.detector import PDFTypeDetector
from agents.layout_agent import LayoutDetector
from agents.text_agent import TextExtractor
from utils.cleaner import TextCleaner
from agents.validator import QuestionValidator
from agents.structurer import AIQuestionStructurer
from agents.solution_agent import SolutionDetector
from agents.pusher import SupabasePusher

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEXT_OUTPUT_DIR = os.path.join(BASE_DIR, "storage", "extracted")
DEBUG_DIR = os.path.join(BASE_DIR, "debug_images")

import hashlib

class FullPipeline:
    def __init__(self):
        self.pdf_detector = PDFTypeDetector()
        self.layout_detector = LayoutDetector()
        self.text_extractor = TextExtractor()
        self.text_cleaner = TextCleaner()
        self.validator = QuestionValidator()
        self.structurer = AIQuestionStructurer()
        self.solution_detector = SolutionDetector()
        self.sb = SupabasePusher()
        self.hash_file = os.path.join(BASE_DIR, "storage", "processed_hashes.json")
        self.processed_hashes = self._load_hashes()
    
    def _load_hashes(self):
        if os.path.exists(self.hash_file):
            try:
                with open(self.hash_file, 'r') as f:
                    return set(json.load(f))
            except:
                return set()
        return set()

    def _save_hashes(self):
        try:
            with open(self.hash_file, 'w') as f:
                json.dump(list(self.processed_hashes), f)
        except:
            pass
    
    def run(self, pdf_path, start_page=1, end_page=10, use_text_only=False, push_to_db=True):
        print(f"\n{'='*60}")
        print(f"OPTIMIZED EXTRACTION PIPELINE: {os.path.basename(pdf_path)}")
        print(f"PAGES: {start_page} to {end_page}")
        print(f"{'='*60}")
        
        if not os.path.exists(pdf_path):
            print(f"[ERROR] PDF not found: {pdf_path}")
            return None
        
        type_result = self.pdf_detector.detect(pdf_path)
        print(f"\n[PDF TYPE] {type_result['type']}")
        
        doc = fitz.open(pdf_path)
        total_pages = len(doc)
        doc.close()
        
        end_idx = min(end_page, total_pages)
        pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
        
        pdf_id = self.sb.get_or_create_pdf_record(os.path.basename(pdf_path))
        subject_id, subject_name = self._resolve_subject(pdf_path)
        exam_id = self._resolve_exam()
        
        all_questions = []
        
        for page_num in range(start_page, end_idx + 1):
            print(f"\nPAGE {page_num}/{end_idx}")
            
            ocr_result = self.text_extractor.extract_page_text(pdf_path, page_num, pdf_type=type_result['type'])
            raw_text = ocr_result.get('text', '')
            cleaned_text = self.text_cleaner.clean(raw_text)
            
            if use_text_only:
                continue
            
            questions = []
            if cleaned_text and len(cleaned_text) > 50:
                page_type = self.solution_detector.detect_page_type(cleaned_text)
                solutions = self.solution_detector.extract_solutions(cleaned_text)
                
                # The optimized structurer handles splitting and logic-first parsing
                questions = self.structurer.structure_text_to_questions(
                    cleaned_text, 
                    page_num,
                    exam="CGL-Maths",
                    subject=subject_name,
                    page_type=page_type['type'],
                    solutions=solutions
                )
            else:
                # Still fallback to image for empty/complex pages
                doc = fitz.open(pdf_path)
                page = doc.load_page(page_num - 1)
                pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
                img_data = pix.tobytes("png")
                doc.close()
                
                questions = self.structurer.structure_image_to_questions(
                    img_data,
                    page_num,
                    exam="CGL-Maths", 
                    subject=subject_name
                )
            
            if questions:
                new_questions_on_page = 0
                for q in questions:
                    # DEDUPLICATION: Hash the question text to skip repeats
                    q_text = q.get('q', '').strip()
                    if not q_text: continue
                    
                    q_hash = hashlib.sha256(q_text.encode('utf-8')).hexdigest()
                    if q_hash in self.processed_hashes:
                        continue
                    
                    self.processed_hashes.add(q_hash)
                    
                    q['page'] = page_num
                    q['pdf_id'] = pdf_id
                    q['exam_id'] = exam_id
                    q['subject_id'] = subject_id
                    q['sub'] = subject_name
                    
                    all_questions.append(q)
                    new_questions_on_page += 1
                
                print(f"  Found {new_questions_on_page} new unique questions")
        
        # Save hashes persistently
        self._save_hashes()
        
        # Validation
        validation_result = self.validator.validate_questions(all_questions)
        valid_questions = validation_result.get('valid_questions', [])
        
        print(f"\n{'='*60}")
        print(f"PIPELINE COMPLETE: {len(all_questions)} unique questions ({len(valid_questions)} valid)")
        
        if push_to_db and valid_questions:
            payload = self._prepare_payload(valid_questions)
            self.sb.push_py_questions(payload)
            print(f"Pushed to database: {len(payload)} questions")
            
        # Save to JSON file for visibility
        pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
        pdf_output_dir = os.path.join(BASE_DIR, "storage", "extracted", pdf_name)
        os.makedirs(pdf_output_dir, exist_ok=True)
        output_file = os.path.join(pdf_output_dir, "extracted_questions.json")
        
        result = {
            "pdf": pdf_name,
            "page_range": [start_page, end_idx],
            "total_questions": len(all_questions),
            "valid_questions": len(valid_questions),
            "questions": valid_questions,
            "timestamp": datetime.now().isoformat()
        }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(result, f, indent=2, ensure_ascii=False)
        
        print(f"Output saved to: {output_file}")
        
        return result
    
    def _resolve_subject(self, pdf_path):
        return self.sb.get_or_create_subject("Maths")
    
    def _resolve_exam(self):
        return self.sb.get_or_create_exam("CGL")
    
    def _prepare_payload(self, questions):
        payload = []
        for q in questions:
            opts = q.get("opt", {})
            
            # Handle both list and dict formats
            if isinstance(opts, dict):
                options_a = opts.get("A", "")
                options_b = opts.get("B", "")
                options_c = opts.get("C", "")
                options_d = opts.get("D", "")
            elif isinstance(opts, list):
                opt_dict = {o.get("l", ""): o.get("v", "") for o in opts if isinstance(o, dict)}
                options_a = opt_dict.get("A", "")
                options_b = opt_dict.get("B", "")
                options_c = opt_dict.get("C", "")
                options_d = opt_dict.get("D", "")
            else:
                options_a = options_b = options_c = options_d = ""
            
            chapter_name = q.get("ch", "General")
            subject_id = q.get("subject_id")
            chapter_id = self.sb.get_or_create_chapter(chapter_name, subject_id) if subject_id else None
            
            # Ensure answer is not null or empty
            raw_ans = q.get("ans")
            clean_ans = raw_ans if raw_ans and raw_ans.strip() else "?"
            
            payload.append({
                "question": q.get("q", ""),
                "options": {"A": options_a, "B": options_b, "C": options_c, "D": options_d},
                "correct_answer": clean_ans,
                "difficulty_level": {"E": "Easy", "M": "Moderate", "H": "Hard"}.get(q.get("diff", "M"), "Moderate"),
                "question_number": q.get("id", 1),
                "page_number": q.get("page", 1),
                "exam_id": q.get("exam_id"),
                "subject_id": subject_id,
                "chapter_id": chapter_id,
                "pdf_id": q.get("pdf_id"),
                "marks": 1
            })
        return payload


def run_full_pipeline(pdf_path, start_page=1, end_page=10, use_text_only=False, push_to_db=True):
    pipeline = FullPipeline()
    return pipeline.run(pdf_path, start_page, end_page, use_text_only, push_to_db)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Full PDF Question Extraction Pipeline")
    parser.add_argument("pdf", help="Path to PDF file")
    parser.add_argument("--start", type=int, default=1, help="Start page")
    parser.add_argument("--end", type=int, default=10, help="End page")
    parser.add_argument("--text-only", action="store_true", help="Only extract text, skip AI")
    parser.add_argument("--no-push", action="store_true", help="Don't push to database")
    
    args = parser.parse_args()
    
    if not os.path.exists(args.pdf):
        print(f"Error: PDF not found at {args.pdf}")
        sys.exit(1)
    
    result = run_full_pipeline(
        args.pdf,
        start_page=args.start,
        end_page=args.end,
        use_text_only=args.text_only,
        push_to_db=not args.no_push
    )
    
    if result:
        print(f"\n[SUCCESS] Extracted {result['total_questions']} questions")
    else:
        print("\n[FAILED] Pipeline failed")
        sys.exit(1)