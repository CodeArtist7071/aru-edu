import os
import sys
import json
import argparse
import re
from services.ocr_engine import OCREngine
from services.ai_engine import AIEngine
from services.supabase_service import SupabaseService
import config

def run_smart_pipeline(pdf_path, num_questions=10, exp_sub="none", offset=0.0, stride=50000, target_chapter=None):
    pdf_name = os.path.basename(pdf_path)
    session_id = f"pipeline_{pdf_name.replace(' ', '_').replace('.', '_')}_{int(offset*100)}"
    
    print(f"\n{'='*60}")
    print(f"ULTIMATE RELIABILITY PIPELINE: {pdf_name}")
    print(f"Scanning Offset: {int(offset*100)}% | Session: conversation_{session_id}.md")
    print(f"{'='*60}")

    # Initialize Services
    ocr = OCREngine()
    ai = AIEngine(session_id=session_id)
    sb = SupabaseService()
    
    # OUTPUT DEFINITIONS
    OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "outputs")
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    extracting_exams_py = os.path.join(OUTPUT_DIR, "extracting_exams.json")

    # PHASE 0: DISCOVERY & TITLE MAPPING
    print(f"\n[PHASE 0] Discovery Scanning for Title Correlates...")
    
    # 1. Fetch Inventory
    subjects = sb.get_all_subjects()
    exams = sb.get_all_exams()
    boards = sb.get_all_boards()
    
    # 2. Tokenize PDF Title & Detect Priority Phrases
    title_clean = re.sub(r'[\d_\-\.]', ' ', pdf_name).lower()
    
    # Priority Term Check: Computer Awareness
    priority_subject_id = None
    if "computer awareness" in title_clean:
        print("[DISCOVERY] Priority Subject Found: Computer Awareness")
        priority_subject_id = "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00"
    
    tokens = [t for t in title_clean.split() if len(t) > 3] # Filter out short words
    
    matches = {
        "matched_exams": [],
        "matched_subjects": [],
        "matched_boards": []
    }
    
    # Pre-inject priority subject if found
    if priority_subject_id:
        matches["matched_subjects"].append({"id": priority_subject_id, "name": "Computer Awareness"})
    
    for token in tokens:
        # Match Exams
        for e in exams:
            if token in (e.get('name') or "").lower() or token in (e.get('full_name') or "").lower():
                if e not in matches["matched_exams"]: matches["matched_exams"].append(e)
        # Match Subjects
        for s in subjects:
            if token in s.get('name', '').lower() and s['id'] != priority_subject_id:
                if s not in matches["matched_subjects"]: matches["matched_subjects"].append(s)
        # Match Boards
        for b in boards:
            if token in b.get('name', '').lower():
                if b not in matches["matched_boards"]: matches["matched_boards"].append(b)
                
    # 3. Save Discovery Results
    with open(extracting_exams_py, "w", encoding="utf-8") as f:
        json.dump(matches, f, indent=2)
    print(f"[DISCOVERY] Found {len(matches['matched_exams'])} exams, {len(matches['matched_subjects'])} subjects related to title.")

    # Discover Existing Subjects (AI Context)
    subject_context = "\n".join([f"- {s['name']} (ID: {s['id']})" for s in subjects])
    discovery_context = f"\nPRE-VALIDATED MATCHES FROM DATABASE (USE THESE IF APPLICABLE):\n{json.dumps(matches, indent=2)}"

    # Step 1: OCR Extraction (Database First, then Local Cache)
    print(f"\n[STEP 1/5] Retrieving PDF Knowledge...")
    raw_text = sb.get_pdf_content(pdf_name)
    
    if raw_text:
        print("[OCR] Found PDF content in Supabase Database.")
    else:
        raw_text = ocr.process_pdf(pdf_path)
        sb.save_pdf_content(pdf_name, raw_text)
    
    # CALCULATION: Sliding Window Logic
    total_len = len(raw_text)
    start_pos = int(total_len * offset)
    end_pos = min(start_pos + 12000, total_len) # Increased window to 12k for better context
    
    print(f"[RE-FOCUS] Sliding Knowledge Window to {int(offset*100)}% depth (Position: {start_pos} - {end_pos})")
    focused_text = raw_text[start_pos:end_pos]

    # Map Defaults from Discovery Matches
    disc_exam_id = matches["matched_exams"][0]["id"] if matches["matched_exams"] else None
    disc_board_id = matches["matched_exams"][0].get("exam_board_id") if matches["matched_exams"] else (matches["matched_boards"][0]["id"] if matches["matched_boards"] else None)
    disc_subject_id = matches["matched_subjects"][0]["id"] if matches["matched_subjects"] else None

    # NO-CREATION UPGRADE: Fetch Master Chapter List for this subject
    master_chapters = []
    if disc_subject_id:
        master_chapters = sb.supabase.table("chapters").select("name").eq("subject_id", disc_subject_id).execute().data
    
    chapter_list_str = "\n".join([f"- {c['name']}" for c in master_chapters])
    print(f"[CURRICULUM] Strictly limited to {len(master_chapters)} existing chapters.")

    # Step 2: Deep-Scan Mapping & Subject Discovery
    print(f"\n[STEP 2/5] Deep-Scan Mapping & Strict Chapter Matching...")
    
    hint_str = f"HINT: We believe this segment belongs to the chapter: {target_chapter}" if target_chapter else ""
    
    meta_prompt = f"""
    Analyze the technical header/context of this PDF segment. 
    You MUST map this segment to one of the EXISTING CHAPTERS listed below.
    {hint_str}
    
    STRICT RULE: If the text does not fit into any of the chapters below, you MUST output "UNKNOWN" for the chapter field. 
    DO NOT invent a chapter name.

    ALLOWED CHAPTERS FOR {pdf_name}:
    {chapter_list_str}
    
    {discovery_context}

    FORMAT: Output ONLY a JSON object.
    {{
      "exam_board": "",
      "exam_name": "",
      "year": "",
      "subject": "pick from discovery",
      "chapter": "PICK FROM ALLOWED LIST OR 'UNKNOWN'",
      "confidence": 0.0
    }}

    CONTEXT TEXT (SEGMENT AT {int(offset*100)}%):
    {focused_text[:3000]}
    """
    
    meta_data = ai.generate(meta_prompt, temperature=0.1, json_mode=True)
    
    if meta_data:
        detected_chapter = meta_data.get('chapter')
        
        if detected_chapter == "UNKNOWN" or not detected_chapter:
            print(f"\n[🛑 SKIPPED] This segment does not match your existing curriculum. Moving to next offset.")
            return # EXIT THIS RUN: No question generation for unmapped chapters

        print(f"[META] Matched Existing Chapter: {detected_chapter}")
        
        exam_id, board_id, mapping_chapter_id = sb.resolve_exam_and_board(meta_data.get('exam_name'), meta_data.get('exam_board'))
        subject_id = sb.get_subject_id(meta_data.get('subject'))
        
        # FINAL RESOLUTION
        exam_id = exam_id or disc_exam_id
        board_id = board_id or disc_board_id
        subject_id = subject_id or disc_subject_id
        if not exam_id: exam_id = disc_exam_id

        # Use Strict Matcher (New Method)
        chapter_id = sb.get_chapter_id(detected_chapter, subject_id)
        
        if not chapter_id:
            print(f"\n[🛑 SKIPPED] Chapter '{detected_chapter}' was not found in database registry. Skipping block.")
            return

        meta_data.update({
            "exam_id": exam_id, "board_id": board_id, "subject_id": subject_id, "chapter_id": chapter_id
        })

        # TOKEN SHIELD: Fetch existing questions for this chapter to prevent duplicates
        print(f"[SHIELD] Fetching existing questions to prevent redundancy...")
        prev_q_res = sb.supabase.table("questions").select("question").eq("chapter_id", chapter_id).order("created_at", desc=True).limit(20).execute()
        previously_covered = "\n".join([f"- {q['question']}" for q in prev_q_res.data])

    # Step 3: Knowledge Ingestion
    print(f"\n[STEP 3/5] Ingesting Knowledge Base Units from Focused Block...")
    ingest_prompt = f"""
    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: {meta_data.get('chapter')}
    
    FORMAT: Output ONLY a JSON object:
    {{
      "formulas": [{{ "name": "", "logic": "", "context": "" }}],
      "facts": [{{ "concept": "", "statement": "" }}],
      "definitions": [{{ "term": "", "meaning": "" }}]
    }}

    SEGMENT TEXT: 
    {focused_text}
    """
    kb_data = ai.generate(ingest_prompt, temperature=0.2, json_mode=True)
    
    if not isinstance(kb_data, dict):
        kb_data = {"facts": [], "definitions": [], "formulas": []}
    
    # Internal Sync
    print(f"[PROCESS] Syncing Knowledge Units with Global Brain...")
    def sync_kb_units(units, unit_type):
        for unit in units:
            content = unit.get("statement") or unit.get("meaning") or unit.get("logic")
            concept = unit.get("concept") or unit.get("term") or unit.get("name")
            if not content: continue
            emb = ai.get_embedding(f"{concept}: {content}")
            if not emb: continue
            if sb.find_similar_kb_unit(emb): continue
            sb.save_knowledge_unit(unit_type, concept, content, meta_data.get("subject_id"), meta_data.get("chapter_id"), emb)

    sync_kb_units(kb_data.get("facts", []), "fact")
    sync_kb_units(kb_data.get("definitions", []), "definition")

    # Step 4: Source-Anchored Question Generation
    print(f"\n[STEP 4/5] Synthesizing {num_questions} Questions with Source Anchoring...")
    
    # Constraint: Only generate explanations for Mathematics/Aptitude
    detected_subject = meta_data.get("subject", "").lower()
    is_math = any(kw in detected_subject for kw in ["math", "aptitude", "quant", "arithmetic"])
    
    should_gen_exp = ((exp_sub == "all") or (exp_sub == meta_data.get("subject_id"))) and is_math
    
    if should_gen_exp:
        print(f"[PROCESS] Subject '{meta_data.get('subject')}' qualifies for explanation generation.")
    else:
        print(f"[PROCESS] Skipping explanations for non-math subject: '{meta_data.get('subject')}'")
    
    gen_prompt = f"""
    Generate {num_questions} high-fidelity MCQs for {meta_data.get('chapter', 'this topic')}.
    
    KNOWLEDGE BASE:
    {json.dumps(kb_data, indent=2)}

    CONSTRAINTS:
    - Include "source_snippet": A direct sentence from the PDF that proves the answer.
    - AI Goal: No hallucinations. If fact is not in KB, do not invent it.
    {'- Include "explanation": A detailed technical explanation of why the answer is correct.' if should_gen_exp else '- DO NOT include explanations.'}

    FORMAT: Output ONLY a JSON array of objects.
    [{{ "question": "", "options": {{ "A":"", "B":"", "C":"", "D":"" }}, "correct_answer": "", "explanation": "", "difficulty_level": "", "source_snippet": "" }}]
    """
    
    candidates = ai.generate(gen_prompt, temperature=0.7, json_mode=True) or []
    
    # Step 5: AI Peer-Review (Verification)
    print(f"\n[STEP 5/5] Peer-Reviewing {len(candidates)} candidates for zero-error assurance...")
    final_payload = []
    explanations_queue = [] # Temporary storage for explanations
    
    for q in candidates:
        # Safety Check: Ensure the candidate has a question text
        q_text = q.get("question")
        if not q_text:
            print("[WARNING] Skipping candidate with missing question text.")
            continue

        # Check Semantic Duplicates first
        emb = ai.get_embedding(q_text)
        if not emb or sb.find_similar_questions(emb, meta_data.get("chapter_id")):
            print(f"[DEDUPE] Skipping duplicate: '{q_text[:50]}...'")
            continue

        # AI Peer-Review Verification
        peer_prompt = f"""
        VERIFIER MODE: You are an expert exam auditor.
        Question: {q_text}
        Proposed Answer: {q.get('correct_answer')} ({q.get('options', {}).get(q.get('correct_answer'), 'N/A')})
        Source Snippet provided by Writer: {q.get('source_snippet')}

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {{"verified": true/false, "reason": ""}}
        """
        review = ai.generate(peer_prompt, temperature=0, json_mode=True)
        
        if review and review.get("verified"):
            print(f"[VERIFIED] Question: '{q_text[:50]}...'")
            
            # Normalize Correct Answer (Must be uppercase A/B/C/D)
            raw_answer = str(q.get("correct_answer", "A")).strip().upper()
            valid_answer = raw_answer[0] if raw_answer and raw_answer[0] in "ABCD" else "A"
            
            # Normalize Difficulty Level (Must match strict DB enums like Easy, Moderate, Hard)
            raw_diff = str(q.get("difficulty_level", "Moderate")).strip().capitalize()
            if raw_diff == "Medium": raw_diff = "Moderate" # Unified fallback
            if raw_diff not in ["Easy", "Moderate", "Hard"]:
                raw_diff = "Moderate"
            
            final_payload.append({
                "exam_id": meta_data.get("exam_id"),
                "subject_id": meta_data.get("subject_id"),
                "chapter_id": meta_data.get("chapter_id"),
                "question": q_text,
                "options": [{"l": k, "v": v} for k, v in q.get("options", {}).items()] if isinstance(q.get("options"), dict) else [],
                "correct_answer": valid_answer,
                "difficulty_level": raw_diff,
                "source_snippet": q.get("source_snippet", ""),
                "marks": 2,
                "embedding": emb
            })
            # Queue explanation if it exists and was requested
            exp_text = q.get("explanation")
            explanations_queue.append(exp_text) if exp_text else explanations_queue.append(None)
        else:
            print(f"[REJECTED] Question failed peer review. Reason: {review.get('reason') if review else 'No response'}")

    # Push to DB
    if final_payload:
        try:
            res = sb.supabase.table("questions").insert(final_payload).execute()
            inserted_questions = res.data
            
            # Now push explanations if they exist
            explanation_payload = []
            for i, q_res in enumerate(inserted_questions):
                exp_text = explanations_queue[i]
                if exp_text:
                    explanation_payload.append({
                        "question_id": q_res["id"],
                        "explanation_1": exp_text
                    })
            
            if explanation_payload:
                sb.save_question_explanations(explanation_payload)
                print(f"[SUCCESS] {len(explanation_payload)} explanations synced.")

            print(f"\n[SUCCESS] {len(final_payload)} High-Fidelity questions pushed to Supabase.")
        except Exception as e:
            # Enhanced Error Reporting for Database Constraints
            error_details = getattr(e, 'details', 'No details')
            error_hint = getattr(e, 'hint', 'No hint')
            error_msg = getattr(e, 'message', str(e))
            print(f"\n[CRITICAL ERROR] Failed to push to Supabase!")
            print(f"Message: {error_msg}")
            print(f"Details: {error_details}")
            print(f"Hint: {error_hint}")
    else:
        print("\n[NOTICE] No questions passed the quality & uniqueness tests.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", help="Path to PDF file")
    parser.add_argument("--count", type=int, default=10, help="Questions to generate")
    parser.add_argument("--exp-sub", default="none", help="Subject ID for explanations")
    parser.add_argument("--offset", type=float, default=0.0, help="Scan start offset (0.0 to 1.0)")
    parser.add_argument("--stride", type=int, default=12000, help="Block size for scanning")
    parser.add_argument("--target_chapter", help="The intended chapter name for this run (Hint for AI)")
    args = parser.parse_args()
    
    if os.path.exists(args.pdf): 
        run_smart_pipeline(args.pdf, args.count, args.exp_sub, args.offset, args.stride, args.target_chapter)
    else: 
        print(f"Error: File not found {args.pdf}")
