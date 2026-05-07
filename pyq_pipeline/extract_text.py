import os
import sys
import json
import argparse
import fitz
from datetime import datetime

# Add project root to path
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(ROOT_DIR)

from agents.detector import PDFTypeDetector
from agents.layout_agent import LayoutDetector
from agents.text_agent import TextExtractor
from utils.cleaner import TextCleaner
from agents.validator import QuestionValidator

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEXT_OUTPUT_DIR = os.path.join(BASE_DIR, "storage", "extracted")
DEBUG_DIR = os.path.join(BASE_DIR, "debug_images")

class ExtractPipeline:
    def __init__(self):
        self.pdf_detector = PDFTypeDetector()
        self.layout_detector = LayoutDetector()
        self.text_extractor = TextExtractor()
        self.text_cleaner = TextCleaner()
        self.validator = QuestionValidator()
    
    def run(self, pdf_path, start_page=1, end_page=10, save_text=True, validate=True):
        print(f"\n{'='*60}")
        print(f"PDF EXTRACTION PIPELINE: {os.path.basename(pdf_path)}")
        print(f"PAGES: {start_page} to {end_page}")
        print(f"{'='*60}")
        
        if not os.path.exists(pdf_path):
            print(f"[ERROR] PDF not found: {pdf_path}")
            return None
        
        type_result = self.pdf_detector.detect(pdf_path)
        print(f"\n[PDF TYPE] {type_result['type']}")
        print(f"  Total Pages: {type_result['total_pages']}")
        print(f"  Recommendation: {type_result['recommendation']}")
        
        end_idx = min(end_page, type_result['total_pages'])
        
        pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
        pdf_output_dir = os.path.join(TEXT_OUTPUT_DIR, pdf_name)
        
        if save_text:
            os.makedirs(pdf_output_dir, exist_ok=True)
            print(f"\n[OUTPUT] Text files: {pdf_output_dir}")
        
        all_questions = []
        
        for page_num in range(start_page, end_idx + 1):
            print(f"\n--- PAGE {page_num} ---")
            
            layout = self.layout_detector.detect_page_layout(pdf_path, page_num)
            print(f"  Layout: {layout['layout']}, Blocks: {layout['metadata']['total_blocks']}")
            
            ocr_result = self.text_extractor.extract_page_text(pdf_path, page_num)
            print(f"  OCR: {ocr_result['source']}, Chars: {len(ocr_result.get('text', ''))}")
            
            raw_text = ocr_result.get('text', '')
            cleaned_text = self.text_cleaner.clean(raw_text)
            print(f"  Text: {len(cleaned_text)} chars after cleaning")
            
            if save_text:
                txt_path = os.path.join(pdf_output_dir, f"page_{page_num:04d}.txt")
                with open(txt_path, 'w', encoding='utf-8') as f:
                    f.write(cleaned_text)
                print(f"  Saved: {os.path.basename(txt_path)}")
            
            questions = self.text_cleaner.extract_questions_from_text(cleaned_text)
            print(f"  Questions Found: {len(questions)}")
            
            for q in questions:
                q['page'] = page_num
            
            all_questions.extend(questions)
        
        if validate and all_questions:
            validation_result = self.validator.validate_questions(all_questions)
            print(f"\n[VALIDATION]")
            print(f"  Total: {validation_result['summary']['total']}")
            print(f"  Valid: {validation_result['summary']['valid']}")
            print(f"  Invalid: {validation_result['summary']['invalid']}")
            
            all_questions = validation_result.get('valid_questions', [])
        
        result = {
            "pdf": pdf_name,
            "pdf_type": type_result['type'],
            "page_range": [start_page, end_idx],
            "total_pages_processed": end_idx - start_page + 1,
            "total_questions": len(all_questions),
            "questions": all_questions,
            "timestamp": datetime.now().isoformat()
        }
        
        output_file = os.path.join(pdf_output_dir, " extracted.json")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(result, f, indent=2, ensure_ascii=False)
        
        print(f"\n{'='*60}")
        print(f"PIPELINE COMPLETE")
        print(f"{'='*60}")
        print(f"Total Questions Extracted: {len(all_questions)}")
        print(f"Output: {output_file}")
        
        return result

def run_pipeline(pdf_path, start_page=1, end_page=10, save_text=True, validate=True):
    pipeline = ExtractPipeline()
    return pipeline.run(pdf_path, start_page, end_page, save_text, validate)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="PDF Text Extraction Pipeline")
    parser.add_argument("pdf", help="Path to PDF file")
    parser.add_argument("--start", type=int, default=1, help="Start page")
    parser.add_argument("--end", type=int, default=10, help="End page")
    parser.add_argument("--no-save", action="store_true", help="Don't save text files")
    parser.add_argument("--no-validate", action="store_true", help="Skip validation")
    
    args = parser.parse_args()
    
    if not os.path.exists(args.pdf):
        print(f"Error: PDF not found at {args.pdf}")
        sys.exit(1)
    
    result = run_pipeline(
        args.pdf,
        start_page=args.start,
        end_page=args.end,
        save_text=not args.no_save,
        validate=not args.no_validate
    )
    
    if result:
        print(f"\n[SUCCESS] Extracted {result['total_questions']} questions")
    else:
        print("\n[FAILED] Pipeline failed")
        sys.exit(1)