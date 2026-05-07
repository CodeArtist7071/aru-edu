import json
from supabase import create_client
from config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

# find questions limits 1
res = supabase.table("questions").select("chapter_id").limit(1).execute()
if res.data:
    chapter_id = res.data[0]["chapter_id"]
    chapter = supabase.table("chapters").select("name, subject_id").eq("id", chapter_id).execute()
    if chapter.data:
         ch_name = chapter.data[0]["name"]
         subj_id = chapter.data[0]["subject_id"]
         subj = supabase.table("subjects").select("name").eq("id", subj_id).execute()
         subj_name = subj.data[0]["name"] if subj.data else "Unknown"
         
         print(f"Found valid question linked to Chapter: {ch_name}, Subject: {subj_name}")
         
         with open("explanation_target_chapters.json", "w", encoding="utf-8") as f:
             json.dump([{"subject_name": subj_name, "chapter_name": ch_name}], f, indent=2)
         print("Overwrote explanation_target_chapters.json with these targets.")
    else:
         print("No chapter found for the question.")
else:
    print("No questions in DB.")
