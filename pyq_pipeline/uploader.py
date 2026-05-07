import os
import io
import json
import argparse
import fitz  # PyMuPDF

# UNITY STYLE IMPORTS
from agents.analyst import PYQAnalyst
from agents.pusher import SupabasePusher

def run_pyq_pipeline(pdf_path, start_page=1, num_pages=10):
    print(f"\n{'='*60}")
    print(f"PYQ VISUAL INTELLIGENCE UPLOADER: {os.path.basename(pdf_path)}")
    print(f"PAGE RANGE: {start_page} to {start_page + num_pages - 1}")
    print(f"{'='*60}")

    # 1. Initialize Specialized Services
    analyst = PYQAnalyst()
    sb = SupabasePusher()

    # 2. Convert PDF to High-Quality Images and Save
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"[PDF] Total Pages in File: {total_pages}")
    
    debug_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "debug_images")
    os.makedirs(debug_dir, exist_ok=True)
    pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
    pdf_debug_dir = os.path.join(debug_dir, pdf_name)
    os.makedirs(pdf_debug_dir, exist_ok=True)
    
    print(f"[IMAGE] Converting PDF to high-quality images...")
    for i in range(len(doc)):
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        img_path = os.path.join(pdf_debug_dir, f"page_{i+1:04d}.png")
        pix.save(img_path)
    print(f"[IMAGE] Saved {len(doc)} pages to {pdf_debug_dir}")
    
    if start_page > total_pages:
        print(f"[ERROR] Start page {start_page} is beyond total pages ({total_pages}).")
        return
        
    pdf_filename = os.path.basename(pdf_path)
    pdf_id = sb.get_or_create_pdf_record(pdf_filename)
    
    # 3. Resolve Subject
    subject_id, subject_name = analyst.resolve_subject_from_title(pdf_path)
    
    # 4. Fetch Strict Chapter Allowlist
    print(f"\n[HIERARCHY] Pre-fetching chapters for subject: {subject_name}...")
    existing_chapters = sb.get_chapters_by_subject(subject_id)
    print(f"[HIERARCHY] Found {len(existing_chapters)} existing parent chapters.")

    # 5. Global Exam Meta (Analyze First Page Visually)
    print("\n[VISION] Resolving Exam Metadata...")
    # Safe load (always ensure page 1 is accessible or use first requested)
    meta_page_num = min(start_page, total_pages)
    first_page = doc.load_page(meta_page_num - 1)
    pix = first_page.get_pixmap(matrix=fitz.Matrix(2, 2))
    meta_img = pix.tobytes("png")
    
    meta = analyst.extract_paper_meta(meta_img)
    exam_id = sb.resolve_exam_and_board(meta.get("exam_name"), meta.get("board"))
    if not exam_id:
        exam_id = sb.resolve_exam_and_board("CGL", "SSC") 

    print(f"[META] Resolved Exam: {meta.get('board')} {meta.get('exam_name')} | Subject: {subject_name}")

    # 6. Visual Extraction Loop 
    total_inserted = 0
    end_page = min(len(doc), start_page + num_pages - 1)
    
    for p_num in range(start_page, end_page + 1):
        print(f"\n[VISION] Analyzing Page {p_num}...")
        
        # Capture High-Res Page Image
        page = doc.load_page(p_num - 1)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        img_data = pix.tobytes("png")
        
        # AI Extraction
        questions = analyst.parse_page_questions(img_data, p_num)
        
        if not questions:
            print(f"[SKIP] No questions found on page {p_num}")
            continue
            
        print(f"[AI] Extracted {len(questions)} potential questions.")
        
        final_payload = []
        dataset_payload = []
        
        for q in questions:
            # Map chapter (STRICT MATCHING)
            chapter_id = analyst.map_heading_to_chapter(
                q.get("chapter_name"), 
                subject_id, 
                existing_chapters=existing_chapters
            )

            # A. Payload for Practice Table
            final_payload.append({
                "exam_id": exam_id,
                "subject_id": subject_id,
                "chapter_id": chapter_id,
                "pdf_id": pdf_id,
                "page_number": p_num,
                "question": q.get("question"),
                "options": q.get("options"),
                "correct_answer": q.get("correct_answer", "A"),
                "difficulty_level": q.get("difficulty_level", "Moderate"),
                "question_number": q.get("question_number"),
                "marks": 1
            })
            
            # B. Payload for Training Dataset
            dataset_payload.append({
                "context": f"Exam: {meta.get('board')} {meta.get('exam_name')}, Subject: {subject_name}, Chapter: {q.get('chapter_name', 'General')}",
                "question": q.get("question"),
                "options": q.get("options"),
                "answer": q.get("correct_answer", "A"),
                # "explanation": q.get("explanation", "No proof provided"),
                "subject_id": subject_id,
                "chapter_id": chapter_id,
                "metadata": {
                    "page_number": p_num,
                    "pdf_id": str(pdf_id),
                    "extraction_type": "visual_intelligence_with_proof"
                }
            })

        if final_payload:
            # Push to Practice Bank
            sb.push_py_questions(final_payload)
            # Push to Training Dataset
            sb.push_to_dataset(dataset_payload)
        
    print(f"\n[SUCCESS] Visual Pipeline Finished. Total Inserted: {total_inserted}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", help="Path to PYQ PDF")
    parser.add_argument("--start", type=int, default=1, help="Page to start from")
    parser.add_argument("--pages", type=int, default=10, help="Number of pages to process")
    
    args = parser.parse_args()
    
    if os.path.exists(args.pdf):
        run_pyq_pipeline(args.pdf, start_page=args.start, num_pages=args.pages)
    else:
        print(f"Error: File not found {args.pdf}")
