import json
import os
from supabase import create_client
from config import SUPABASE_URL, SUPABASE_KEY

class SupabaseService:
    def __init__(self, mapping_file="exam_mapping.json"):
        self.supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
        self.mapping_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), mapping_file)
        self.mappings = self._load_mappings()
        print(f"[Supabase] Service Initialized (Mapping: {len(self.mappings)} entries)")

    def _load_mappings(self):
        if os.path.exists(self.mapping_file):
            try:
                with open(self.mapping_file, "r") as f:
                    data = json.load(f)
                    return data.get("mappings", [])
            except Exception as e:
                print(f"[Supabase ERROR] Failed to load mapping file: {e}")
        return []

    def resolve_exam_and_board(self, exam_name, board_name):
        """Smartly maps names to IDs using local JSON first, then Supabase."""
        
        # 1. Check Local Mappings
        for m in self.mappings:
            if m.get("exam_name") == exam_name and m.get("board_name") == board_name:
                print(f"[Supabase] Found local mapping: {exam_name} / {board_name}")
                return m.get("exam_id"), m.get("board_id"), m.get("chapter_id")

        # 2. Lookup Board in Supabase
        board_id = self.get_or_create_exam_board(board_name)
        
        # 3. Lookup Exam in Supabase
        exam_id = self.get_or_create_exam(exam_name, board_id)
        
        return exam_id, board_id, None

    def get_or_create_exam_board(self, name):
        if not name: return None
        
        try:
            res = self.supabase.table("exam_boards").select("id").eq("name", name).execute()
            if res.data:
                return res.data[0]["id"]
            
            # Create if not exists
            print(f"[Supabase] Creating new Exam Board: {name}")
            new_res = self.supabase.table("exam_boards").insert({
                "name": name,
                "full_name": name,
                "is_active": True
            }).execute()
            return new_res.data[0]["id"]
        except Exception as e:
            print(f"[Supabase ERROR] Exam Board lookup failure: {e}")
            return None

    def get_or_create_exam(self, name, board_id):
        if not name or not board_id: return None
        
        try:
            res = self.supabase.table("exams").select("id").eq("name", name).eq("exam_board_id", board_id).execute()
            if res.data:
                return res.data[0]["id"]
            
            # Create if not exists
            print(f"[Supabase] Creating new Exam: {name}")
            new_res = self.supabase.table("exams").insert({
                "name": name,
                "full_name": name,
                "exam_board_id": board_id,
                "type": "COMBINED",
                "is_active": True
            }).execute()
            return new_res.data[0]["id"]
        except Exception as e:
            print(f"[Supabase ERROR] Exam lookup failure: {e}")
            return None

    def get_subject_id(self, name):
        if not name: return None
        
        # Priority Alias Mapping: Computer Awareness
        computer_aliases = ["computer awareness", "computer fundamentals", "ict", "digital literacy", "it skills"]
        if any(alias in name.lower() for alias in computer_aliases):
            print(f"[Supabase] Alias Detected: Mapping '{name}' to Computer Awareness")
            return "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00"

        try:
            res = self.supabase.table("subjects").select("id").ilike("name", f"%{name}%").execute()
            if res.data:
                return res.data[0]["id"]
            return None
        except Exception as e:
            print(f"[Supabase ERROR] Subject lookup failure: {e}")
            return None

    def get_chapter_id(self, name, subject_id):
        """Strictly searches for an existing chapter. Does NOT create new records."""
        if not name or not subject_id: return None

        try:
            # Fuzzy search to allow for minor naming variations
            res = self.supabase.table("chapters").select("id").ilike("name", f"%{name}%").eq("subject_id", subject_id).execute()
            if res.data:
                return res.data[0]["id"]

            return None
        except Exception as e:
            print(f"[Supabase ERROR] Chapter lookup failure: {e}")
            return None

    def get_all_subjects(self):
        """Fetches all subjects to provide context for the AI."""
        try:
            res = self.supabase.table("subjects").select("id, name, description").execute()
            return res.data
        except Exception as e:
            print(f"[Supabase ERROR] Failed to fetch subjects: {e}")
            return []

    def get_all_exams(self):
        """Fetches all exams to provide context for discovery mapping."""
        try:
            res = self.supabase.table("exams").select("id, name, full_name, exam_board_id").execute()
            return res.data
        except Exception as e:
            print(f"[Supabase ERROR] Failed to fetch exams: {e}")
            return []

    def get_all_boards(self):
        """Fetches all exam boards."""
        try:
            res = self.supabase.table("exam_boards").select("id, name").execute()
            return res.data
        except Exception as e:
            print(f"[Supabase ERROR] Failed to fetch boards: {e}")
            return []

    def save_pdf_content(self, filename, content):
        """Saves OCR text to pdf_contents table."""
        try:
            self.supabase.table("pdf_contents").upsert({
                "filename": filename,
                "content": content
            }, on_conflict="filename").execute()
            print(f"[Supabase] OCR text synced for {filename}")
        except Exception as e:
            print(f"[Supabase ERROR] PDF save failed: {e}")

    def get_pdf_content(self, filename):
        """Retrieves OCR text from pdf_contents table."""
        try:
            res = self.supabase.table("pdf_contents").select("content").eq("filename", filename).execute()
            if res.data:
                return res.data[0]["content"]
            return None
        except Exception as e:
            print(f"[Supabase ERROR] PDF fetch failed: {e}")
            return None

    def find_similar_questions(self, embedding, chapter_id, threshold=0.85):
        """Calls the match_questions RPC to find semantically similar questions."""
        try:
            # Note: Supabase rpc call. Ensure the SQL function was created.
            res = self.supabase.rpc("match_questions", {
                "query_embedding": embedding,
                "match_threshold": threshold,
                "match_count": 5,
                "target_chapter_id": chapter_id
            }).execute()
            return res.data
        except Exception as e:
            print(f"[Supabase ERROR] Similarity search failed: {e}")
            return []

    def save_knowledge_unit(self, unit_type, concept, content, subject_id, chapter_id, embedding):
        """Saves a single knowledge unit to the database."""
        try:
            self.supabase.table("knowledge_units").insert({
                "type": unit_type,
                "concept": concept,
                "content": content,
                "subject_id": subject_id,
                "chapter_id": chapter_id,
                "embedding": embedding
            }).execute()
        except Exception as e:
            print(f"[Supabase ERROR] KB save failed: {e}")

    def find_similar_kb_unit(self, embedding, threshold=0.85):
        """Checks for semantically identical knowledge units globally."""
        try:
            # We'll need a similar RPC for KB units
            res = self.supabase.rpc("match_knowledge_units", {
                "query_embedding": embedding,
                "match_threshold": threshold,
                "match_count": 1
            }).execute()
            return res.data
        except Exception as e:
            print(f"[Supabase ERROR] KB Similarity search failed: {e}")
            return []

    def save_question_explanations(self, explanation_payload):
        """Saves explanations for newly inserted questions in bulk."""
        if not explanation_payload: return
        try:
            self.supabase.table("question_explanations").insert(explanation_payload).execute()
        except Exception as e:
            print(f"[Supabase ERROR] Explanations batch save failed: {e}")

    def get_or_create_pdf_record(self, filename):
        """Ensures a record exists in pdf_documents and returns its ID."""
        try:
            # 1. Try to find existing
            res = self.supabase.table("pdf_documents").select("id").eq("file_name", filename).execute()
            if res.data:
                return res.data[0]["id"]
            
            # 2. Try to create new
            new_res = self.supabase.table("pdf_documents").insert({
                "file_name": filename,
                "drive_file_id": filename, # Fallback ID per user request
                "status": "processing"
            }).execute()
            return new_res.data[0]["id"]
        except Exception as e:
            # 3. Recovery: If it was created between our select and insert
            if "23505" in str(e) or "already exists" in str(e).lower():
                res = self.supabase.table("pdf_documents").select("id").eq("file_name", filename).execute()
                if res.data: return res.data[0]["id"]
            
            print(f"[Supabase ERROR] PDF record management failed: {e}")
            return None

    def push_py_questions(self, payload):
        """Inserts multiple questions into the py_questions table."""
        if not payload: return
        try:
            # VERIFIED PUSH: Capture the response to ensure it actually landed
            res = self.supabase.table("py_questions").insert(payload).execute()
            
            if not res.data:
                print(f"[Supabase WARNING] Insert appeared to succeed but NO data was returned. Check RLS or Constraints.")
                return False
            
            print(f"[Supabase] Verified push of {len(res.data)} items.")
            return True
            
        except Exception as e:
            error_msg = getattr(e, 'message', str(e))
            error_details = getattr(e, 'details', 'No details')
            print(f"[Supabase ERROR] PYQ Batch push failed!")
            print(f"Message: {error_msg}")
            print(f"Details: {error_details}")
            if len(payload) > 0:
                print(f"Sample Payload (First Item): {json.dumps(payload[0], indent=2)}")
            raise e
