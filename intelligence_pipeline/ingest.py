import os
import sys
import json
from services.ocr_engine import OCREngine
from services.ai_engine import AIEngine
from services.supabase_service import SupabaseService
import config

def ingest_knowledge(pdf_path):
    print(f"\n{'='*50}")
    print(f"KNOWLEDGE INGESTION START: {os.path.basename(pdf_path)}")
    print(f"{'='*50}")

    ocr = OCREngine()
    ai = AIEngine()
    sb = SupabaseService()

    # Step 1: Extract Text
    raw_text = ocr.process_pdf(pdf_path)
    
    # Step 2: Extract Metadata (Header Analysis)
    print("[INGEST] Analyzing header for Exam Board and Exam details...")
    header_text = raw_text[:2000] # Focus on the first few pages/lines
    
    meta_prompt = f"""
    Analyze the header of this PDF text.
    Extract the following details:
    1. EXAM_BOARD: Short name (e.g. OSSC, OPSC, SSC).
    2. EXAM_NAME: Short name of the exam (e.g. CGL, RI, ASO).
    3. YEAR: The year mentioned for the exam.
    4. SUBJECT: The core subject of the paper.
    5. CHAPTER: The chapter or unit name if mentioned.

    FORMAT: Output ONLY a JSON object.
    {{
      "exam_board": "",
      "exam_name": "",
      "year": "",
      "subject": "",
      "chapter": ""
    }}

    HEADER TEXT:
    {header_text}
    """
    
    meta_data = ai.generate(meta_prompt, temperature=0.1, json_mode=True)
    
    if meta_data:
        print(f"[INGEST] Detected Meta: {meta_data['exam_board']} | {meta_data['exam_name']}")
        exam_id, board_id, mapping_chapter_id = sb.resolve_exam_and_board(meta_data['exam_name'], meta_data['exam_board'])
        subject_id = sb.get_subject_id(meta_data['subject'])
        
        # Use mapped chapter_id if present, else try to find/create it
        chapter_id = mapping_chapter_id if mapping_chapter_id else sb.get_or_create_chapter(meta_data['chapter'], subject_id)
        
        meta_data["exam_id"] = exam_id
        meta_data["board_id"] = board_id
        meta_data["subject_id"] = subject_id
        meta_data["chapter_id"] = chapter_id
    else:
        print("[INGEST WARNING] Failed to extract metadata")
        meta_data = {}

    # Step 3: Digest Knowledge via AI
    print("[INGEST] Analyzing content for strategic facts and formulas...")
    
    prompt = f"""
    Analyze the following text extracted from an educational document.
    Extract all core "Intelligence Units" to build a Knowledge Base.

    Extract:
    1. FORMULAS: Exact mathematical or logical formulas.
    2. KEY FACTS: Absolute statements of truth (e.g. historical dates, biological facts).
    3. DEFINITIONS: Key terminology meanings.
    4. APPLICATIONS: Real-world examples or use-cases mentioned.

    FORMAT: Output ONLY a JSON object.
    {{
      "entity_name": "Title of document",
      "formulas": [{{ "name": "", "logic": "", "context": "" }}],
      "facts": [{{ "concept": "", "statement": "" }}],
      "definitions": [{{ "term": "", "meaning": "" }}],
      "applications": [{{ "description": "", "example": "" }}]
    }}

    TEXT:
    {raw_text}
    """

    kb_data = ai.generate(prompt, temperature=0.2, json_mode=True)

    if not kb_data:
        print("[INGEST ERROR] AI failed to generate structured knowledge")
        return

    # Merge metadata
    kb_data["metadata"] = meta_data

    # Step 4: Save to Knowledge Base
    filename = os.path.basename(pdf_path).replace(".pdf", ".json")
    output_path = os.path.join(config.KB_DIR, filename)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(kb_data, f, indent=2, ensure_ascii=False)

    print(f"\n[SUCCESS] Knowledge Base entity created: {output_path}")
    print(f"{'='*50}\n")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python ingest.py pdfs/your_file.pdf")
    else:
        pdf = sys.argv[1]
        if os.path.exists(pdf):
            ingest_knowledge(pdf)
        else:
            print(f"Error: File not found {pdf}")
