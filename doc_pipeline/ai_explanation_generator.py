import json
import os
import json5
import sys
from supabase import create_client
from config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, REGION, PROJECT_ID
from services.gemini_service import GeminiModel

# Initialize Supabase client using Service Role to bypass RLS
supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

TARGET_CONFIG_FILE = "explanation_target_chapters.json"
TRACKER_FILE = "explanation_tracker.json"
PROMPT_FILE = "ai_prompt/explanation_prompt.txt"

def load_prompt():
    with open(PROMPT_FILE, "r", encoding="utf-8") as f:
        return f.read()

def safe_json_parse(text):
    start = text.find('{')
    end = text.rfind('}')
    if start != -1 and end != -1 and end > start:
        clean_text = text[start:end+1]
        try:
            return json5.loads(clean_text)
        except Exception as e:
            print("JSON parse error:", e)
            return None
    return None

def fetch_target_chapters():
    if not os.path.exists(TARGET_CONFIG_FILE):
        print(f"Config file {TARGET_CONFIG_FILE} not found.")
        return []
    with open(TARGET_CONFIG_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def fetch_tracker():
    if not os.path.exists(TRACKER_FILE):
        return []
    with open(TRACKER_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_tracker(tracker_data):
    with open(TRACKER_FILE, "w", encoding="utf-8") as f:
        json.dump(tracker_data, f, indent=2)

def generate_explanations(use_vertexai=False, project=None, location=None, async_mode=False):
    targets = fetch_target_chapters()
    if not targets:
        print("No targets configured.")
        return

    tracker = fetch_tracker()
    base_prompt = load_prompt()
    model = GeminiModel(use_vertexai=use_vertexai, project=project, location=location, async_mode=async_mode)

    # Convert chapter names to chapter IDs
    chapter_ids = []
    for t in targets:
        chap_res = supabase.table("chapters").select("id").eq("name", t["chapter_name"]).execute()
        if chap_res.data:
            chapter_ids.append(chap_res.data[0]["id"])
    
    if not chapter_ids:
        print("Could not resolve any chapter names to IDs.")
        return

    # Fetch 5 questions from target chapters that haven't been processed yet
    query = supabase.table("questions").select("id, question, options, correct_answer").in_("chapter_id", chapter_ids)
    res = query.execute()
    
    questions_to_process = [q for q in res.data if q["id"] not in tracker][:5]
    
    if not questions_to_process:
        print("No new questions to process in the targeted chapters.")
        return

    print(f"Found {len(questions_to_process)} questions to process.")

    for q in questions_to_process:
        print(f"\nProcessing Question {q['id']}...")
        
        dyn_prompt = base_prompt + f"\n\nQuestion: {q['question']}\nOptions: {json.dumps(q.get('options', []))}\nCorrect Answer: {q.get('correct_answer', '')}"
        
        response_text = model.generate(
            dyn_prompt,
            response_mime_type="application/json",
            config={"max_output_tokens": 4096, "temperature": 0.7}
        )

        parsed_data = safe_json_parse(response_text)
        if not parsed_data or "concept_explanations" not in parsed_data or "correct_answer_explanations" not in parsed_data:
            print("Failed to generate or parse valid explanations.")
            continue
        
        c_exps = parsed_data["concept_explanations"]
        ca_exps = parsed_data["correct_answer_explanations"]

        if len(c_exps) < 4 or len(ca_exps) < 4:
            print("Model did not return 4 variations each. Skipping.")
            continue

        try:
            # 1. Insert into question_explanations
            supabase.table("question_explanations").insert({
                "question_id": q["id"],
                "explanation_1": c_exps[0],
                "explanation_2": c_exps[1],
                "explanation_3": c_exps[2],
                "explanation_4": c_exps[3]
            }).execute()

            # 2. Insert into question_correct_explanations
            supabase.table("question_correct_explanations").insert({
                "question_id": q["id"],
                "explanation_1": ca_exps[0],
                "explanation_2": ca_exps[1],
                "explanation_3": ca_exps[2],
                "explanation_4": ca_exps[3]
            }).execute()

            print(f"Successfully saved explanations for {q['id']}")

            # Update tracker
            tracker.append(q["id"])
            save_tracker(tracker)

        except Exception as e:
            print(f"Supabase Insertion Error for {q['id']}:", getattr(e, 'message', str(e)))

if __name__ == "__main__":
    generate_explanations(
        use_vertexai=True,
        project=PROJECT_ID,
        location=REGION,
        async_mode=False
    )
