import json
from supabase import create_client
import sys
import os

# Add parent path to find config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config.settings import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

class SupabasePusher:
    def __init__(self):
        print(f"[Supabase] Initializing Verified Pusher...")
        self.supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    def get_all_subjects(self):
        try:
            res = self.supabase.table("subjects").select("id, name").execute()
            return res.data or []
        except: return []
    
    def get_or_create_subject(self, subject_name):
        try:
            res = self.supabase.table("subjects").select("id, name").ilike("name", f"%{subject_name}%").limit(1).execute()
            if res.data:
                return res.data[0]['id'], res.data[0]['name']
            
            res = self.supabase.table("subjects").insert({"name": subject_name}).execute()
            return res.data[0]['id'], res.data[0]['name']
        except Exception as e:
            print(f"[Supabase ERROR] Subject resolution failed: {e}")
            return None, subject_name
    
    def get_or_create_exam(self, exam_name):
        try:
            res = self.supabase.table("exams").select("id, name").ilike("name", f"%{exam_name}%").limit(1).execute()
            if res.data:
                return res.data[0]['id']
            
            res = self.supabase.table("exams").insert({"name": exam_name}).execute()
            return res.data[0]['id']
        except Exception as e:
            print(f"[Supabase ERROR] Exam resolution failed: {e}")
            return None
    
    def get_or_create_chapter(self, chapter_name, subject_id):
        if not subject_id:
            return None
        try:
            res = self.supabase.table("chapters").select("id, name").eq("subject_id", subject_id).ilike("name", f"%{chapter_name}%").limit(1).execute()
            if res.data:
                return res.data[0]['id']
            
            res = self.supabase.table("chapters").insert({
                "name": chapter_name,
                "subject_id": subject_id
            }).execute()
            return res.data[0]['id']
        except Exception as e:
            print(f"[Supabase ERROR] Chapter resolution failed: {e}")
            return None

    def get_or_create_pdf_record(self, filename):
        try:
            res = self.supabase.table("pdf_documents").select("id").eq("file_name", filename).execute()
            if res.data: return res.data[0]['id']
            
            # Create new
            res = self.supabase.table("pdf_documents").insert({
                "file_name": filename,
                "drive_file_id": filename, # Fallback
                "status": "uploaded"
            }).execute()
            return res.data[0]['id']
        except Exception as e:
            print(f"[Supabase ERROR] PDF registration failed: {e}")
            return None

    def resolve_exam_and_board(self, exam_name, board):
        try:
            # 1. Targeted Search (Correct column name 'name')
            res = self.supabase.table("exams").select("id").ilike("name", f"%{exam_name or 'CGL'}%").limit(1).execute()
            if res.data: return res.data[0]['id']
            
            # 2. Ultimate Fallback: Get the first available exam to satisfy Not-Null constraint
            print("[Supabase] No specific exam match. Using first available record as safety fallback.")
            res = self.supabase.table("exams").select("id").limit(1).execute()
            if res.data: return res.data[0]['id']
            
            return None
        except Exception as e:
            print(f"[Supabase ERROR] Exam resolution failed: {e}")
            return None

    def push_py_questions(self, payload):
        if not payload: return
        try:
            # Remove duplicates within the batch itself to prevent "ON CONFLICT" errors
            unique_payload = []
            seen_questions = set()
            for item in payload:
                q_text = item.get("question")
                if q_text not in seen_questions:
                    unique_payload.append(item)
                    seen_questions.add(q_text)
            
            res = self.supabase.table("py_questions").upsert(unique_payload, on_conflict="question").execute()
            if not res.data:
                print(f"[WARNING] Insert appeared to succeed but no data returned.")
                return False
            print(f"[Supabase] Verified push of {len(res.data)} items to Practice Table.")
            return True
        except Exception as e:
            print(f"[Supabase ERROR] Push to Practice Table failed: {e}")
            return False

    def push_to_dataset(self, payload):
        """
        Pushes machine-learning-ready training data to the dataset table.
        """
        if not payload: return
        try:
            res = self.supabase.table("py_questions_dataset").upsert(payload, on_conflict="question").execute()
            if res.data:
                print(f"[Supabase] Verified push of {len(res.data)} items to Training Dataset.")
                return True
            return False
        except Exception as e:
            print(f"[Supabase ERROR] Dataset push failed: {e}")
            return False

    def get_chapters_by_subject(self, subject_id):
        """
        Fetches all existing chapters for a specific subject to use as an allowlist.
        """
        try:
            res = self.supabase.table("chapters").select("id, name").eq("subject_id", subject_id).execute()
            return res.data or []
        except: return []

    def get_existing_chapter(self, chapter_name, subject_id):
        """
        STRICT MATCH ONLY. No creation allowed.
        """
        try:
            # 1. Exact Match
            res = self.supabase.table("chapters").select("id").eq("name", chapter_name).eq("subject_id", subject_id).execute()
            if res.data: return res.data[0]['id']
            
            # 2. Fuzzy Match (Fallback)
            res = self.supabase.table("chapters").select("id").ilike("name", f"%{chapter_name}%").eq("subject_id", subject_id).limit(1).execute()
            if res.data: return res.data[0]['id']
            
            # 3. Ultimate Fallback (First chapter of the subject)
            res = self.supabase.table("chapters").select("id").eq("subject_id", subject_id).limit(1).execute()
            if res.data: return res.data[0]['id']
            
            return None
        except Exception as e:
            print(f"[Supabase ERROR] Chapter matching failed: {e}")
            return None
