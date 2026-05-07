
import json
import sys
import os

# Add services path
sys.path.append(os.path.join(os.getcwd(), "pyq_pipeline"))
from services.supabase_push import SupabasePusher

def repush(json_path):
    if not os.path.exists(json_path):
        print(f"Error: File not found {json_path}")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    questions = data.get("questions", [])
    if not questions:
        print("No questions found in JSON.")
        return

    print(f"Found {len(questions)} questions in local JSON. Starting push...")
    
    sb = SupabasePusher()
    
    # Prepare payload exactly as extract_full.py does
    payload = []
    for q in questions:
        opts = q.get("opt", {})
        if isinstance(opts, list):
            opt_dict = {o.get("l", ""): o.get("v", "") for o in opts if isinstance(o, dict)}
            options = {"A": opt_dict.get("A", ""), "B": opt_dict.get("B", ""), "C": opt_dict.get("C", ""), "D": opt_dict.get("D", "")}
        else:
            options = opts
            
        subject_id = q.get("subject_id")
        chapter_name = q.get("ch", "General")
        chapter_id = q.get("chapter_id")
        
        # FIX: Resolve chapter_id if it's missing
        if not chapter_id and subject_id:
            chapter_id = sb.get_or_create_chapter(chapter_name, subject_id)
            
        payload.append({
            "question": q.get("q", ""),
            "options": options,
            "correct_answer": q.get("ans", "A"),
            "difficulty_level": {"E": "Easy", "M": "Moderate", "H": "Hard"}.get(q.get("diff", "M"), "Moderate"),
            "question_number": q.get("id", 1),
            "page_number": q.get("page", 1),
            "exam_id": q.get("exam_id"),
            "subject_id": subject_id,
            "chapter_id": chapter_id,
            "pdf_id": q.get("pdf_id"),
            "marks": 1
        })

    # Push in chunks to avoid any payload size limits
    chunk_size = 50
    for i in range(0, len(payload), chunk_size):
        chunk = payload[i:i + chunk_size]
        success = sb.push_py_questions(chunk)
        if success:
            print(f"Successfully pushed questions {i+1} to {min(i+chunk_size, len(payload))}")
        else:
            print(f"Failed to push chunk starting at {i+1}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python repush_data.py <path_to_json>")
    else:
        repush(sys.argv[1])
