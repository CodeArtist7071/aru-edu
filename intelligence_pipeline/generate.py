import os
import sys
import json
import argparse
from services.ai_engine import AIEngine
import config
from supabase import create_client

def generate_exam(kb_file, subject_name, chapter_name, exam_name, num_questions=10):
    print(f"\n{'='*50}")
    print(f"EXAM GENERATION START")
    print(f"Target: {exam_name} | {subject_name} | {chapter_name}")
    print(f"{'='*50}")

    ai = AIEngine()
    supabase = create_client(config.SUPABASE_URL, config.SUPABASE_KEY)

    # Step 1: Load Knowledge Base
    kb_path = os.path.join(config.KB_DIR, kb_file)
    if not os.path.exists(kb_path):
        print(f"[ERROR] KB file not found: {kb_path}")
        return

    with open(kb_path, "r", encoding="utf-8") as f:
        kb_content = json.dumps(json.load(f), indent=2)

    # Step 2: Fetch Syllabus IDs
    print("[GEN] Mapping syllabus for database IDs...")
    
    # In a real scenario, we'd query Supabase to get the exact UUIDs for exam/subject/chapter
    # For this isolated demonstration, we'll try to find them in the DB
    try:
        exam_id = supabase.table("exams").select("id").eq("name", exam_name).execute().data[0]["id"]
        subject_id = supabase.table("subjects").select("id").eq("name", subject_name).execute().data[0]["id"]
        chapter_id = supabase.table("chapters").select("id").eq("name", chapter_name).execute().data[0]["id"]
    except Exception as e:
        print(f"[ERROR] Failed to map names to IDs in Database: {e}")
        return

    # Step 3: Generate Questions
    print(f"[GEN] Asking Gemini to craft {num_questions} custom questions from Knowledge Base...")

    prompt = f"""
    You are a professional examiner. Using the provided Knowledge Base, generate {num_questions} Multiple Choice Questions (MCQs).

    CONTEXT (KNOWLEDGE BASE):
    {kb_content}

    STRICT CONSTRAINTS:
    1. Every question must be directly answerable from the provided Knowledge Base.
    2. Format: EXACTLY 4 options (A, B, C, D).
    3. Difficulty: High (suitable for professional government competitive exams).
    4. Topic: Every question must relate to the subject "{subject_name}" and chapter "{chapter_name}".
    5. Formulas: Use HTML <sup> and <sub> tags for any math symbols.

    FORMAT: Return ONLY a JSON array.
    [
      {{
        "question": "",
        "options": {{ "A": "", "B": "", "C": "", "D": "" }},
        "correct_answer": "A",
        "marks": 2,
        "difficulty_level": "Hard"
      }}
    ]
    """

    questions = ai.generate(prompt, temperature=0.7, json_mode=True)

    if not questions:
        print("[ERROR] Question generation failed.")
        return

    # Step 4: Push to Supabase
    print(f"[GEN] Pushing {len(questions)} validated questions to Supabase...")
    
    payload = []
    for q in questions:
        payload.append({
            "exam_id": exam_id,
            "subject_id": subject_id,
            "chapter_id": chapter_id,
            "question": q["question"],
            "options": [
                {"label": "A", "value": q["options"]["A"]},
                {"label": "B", "value": q["options"]["B"]},
                {"label": "C", "value": q["options"]["C"]},
                {"label": "D", "value": q["options"]["D"]}
            ],
            "correct_answer": q["correct_answer"],
            "difficulty_level": q["difficulty_level"],
            "marks": q.get("marks", 2)
        })

    try:
        supabase.table("questions").insert(payload).execute()
        print(f"[SUCCESS] {len(questions)} questions manifestation complete in Database.")
    except Exception as e:
        print(f"[ERROR] Failed to insert questions: {e}")

def list_syllabus():
    """Helper to show available targets in the database."""
    print(f"\n{'='*50}")
    print(f"SUPABASE SYLLABUS DISCOVERY")
    print(f"{'='*50}")
    
    supabase = create_client(config.SUPABASE_URL, config.SUPABASE_KEY)
    
    exams = supabase.table("exams").select("name").execute().data
    subjects = supabase.table("subjects").select("name").execute().data
    
    print("\n[EXAMS]:", ", ".join([e["name"] for e in exams]) if exams else "None found")
    print("\n[SUBJECTS]:", ", ".join([s["name"] for s in subjects]) if subjects else "None found")
    
    print("\n[TIP] Use these exact names in your --exam and --subject arguments.")
    print(f"{'='*50}\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--kb", help="Knowledge Base JSON file")
    parser.add_argument("--subject")
    parser.add_argument("--chapter")
    parser.add_argument("--exam")
    parser.add_argument("--count", type=int, default=10)
    parser.add_argument("--list", action="store_true", help="List available syllabus targets")
    
    args = parser.parse_args()
    
    if args.list:
        list_syllabus()
    elif args.kb and args.subject and args.chapter and args.exam:
        generate_exam(args.kb, args.subject, args.chapter, args.exam, args.count)
    else:
        print("\n[!] Please specify --kb, --subject, --chapter, and --exam OR use --list")
        parser.print_help()
