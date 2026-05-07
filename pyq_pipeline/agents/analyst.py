import sys
import os
import re
import json

# Add parent path to find config and other agents
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config.settings import PROJECT_ID, LOCATION, GEMINI_MODEL

from agents.ai_engine import AIEngine, Part
from agents.pusher import SupabasePusher

class PYQAnalyst:
    def __init__(self, session_id="pyq_analyst"):
        print("[PYQ-ANALYST] Initializing Intelligent Header Engine")
        self.ai = AIEngine(session_id=session_id)
        self.sb = SupabasePusher()

    def resolve_subject_from_title(self, pdf_name):
        """
        Intelligently maps the PDF filename to a database subject.
        """
        subjects = self.sb.get_all_subjects()
        subject_names = [s["name"] for s in subjects]
        
        # 1. Direct Keyword Check
        clean_title = re.sub(r'[\d_\-\.]', ' ', pdf_name).lower()
        for s in subjects:
            if s["name"].lower() in clean_title:
                print(f"[PYQ-ANALYST] Direct Title Match: {s['name']}")
                return s["id"], s["name"]

        # 2. AI Fallback (Fuzzy/Contextual)
        prompt = f"""
        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: {pdf_name}
        DATABASE SUBJECTS: {", ".join(subject_names)}
        
        Return ONLY a JSON object: {{"subject_name": "", "confidence": 0.0}}
        """
        raw = self.ai.generate(prompt, temperature=0.1, json_mode=True)
        res = self._safe_json(raw)
        
        if res and res.get("subject_name"):
            matched_name = res["subject_name"]
            # Look up ID for that name
            for s in subjects:
                if s["name"].lower() == matched_name.lower():
                    return s["id"], s["name"]
        
        return None, "General Studies"

    def _safe_json(self, raw):
        try:
            if not raw: return {}
            # Clean common AI noise
            content = raw.strip()
            if "```json" in content:
                content = content.split("```json")[-1].split("```")[0].strip()
            elif "```" in content:
                content = content.split("```")[-1].split("```")[0].strip()
            
            # Remove any potentially broken trailing characters
            content = re.sub(r'\\\\', '/', content) # Fix escaped backslashes in math
            return json.loads(content)
        except:
            # Fallback: simple regex attempt for basic fields
            return {}

    def _prepare_image_part(self, image_data):
        return Part.from_data(
            mime_type="image/png",
            data=image_data
        )

    def extract_paper_meta(self, image_data):
        """
        Scans the first page image for Board, Exam Name, and Year.
        """
        prompt = """
        Look at this image of an exam paper cover or header.
        Extract the Official Board, Exam Name, Year, and Shift.
        
        Return ONLY a JSON object: {"board": "", "exam_name": "", "year": "", "shift": ""}
        """
        raw = self.ai.generate([prompt, self._prepare_image_part(image_data)], temperature=0.1, json_mode=True)
        return self._safe_json(raw)

    def map_heading_to_chapter(self, heading_text, subject_id, existing_chapters=None):
        if not heading_text or not subject_id: return None
        
        # Build a visual list of chapters for the AI
        chapter_list = ", ".join([c["name"] for c in existing_chapters]) if existing_chapters else "None provided"
        
        prompt = f"""
        Map this topic heading to its BEST fitting PARENT chapter from the list below.
        TOPIC: "{heading_text}"
        EXISTING CHAPTERS: {chapter_list}
        
        RULES:
        1. Choose ONLY from the EXISTING CHAPTERS list.
        2. If the topic is a sub-topic (e.g., 'Fractions Shortcuts'), map it to the parent (e.g., 'Fractions').
        3. If no match is clear, choose the most logically related math chapter.
        
        Return JSON: {{"chapter_name": ""}}
        """
        raw = self.ai.generate(prompt, temperature=0.1, json_mode=True)
        res = self._safe_json(raw)
        if res.get("chapter_name"):
            return self.sb.get_existing_chapter(res["chapter_name"], subject_id)
        return self.sb.get_existing_chapter("General", subject_id)

    def parse_page_questions(self, image_data, page_number):
        """
        Extracts structured MCQs with mandatory mathematical verification.
        """
        prompt = f"""
        Extract all MCQ questions from this exam paper image (PAGE {page_number}).
        
        STRICT ACCURACY RULES:
        1. FORCED REASONING: For every question, you MUST first solve the problem step-by-step internally.
        2. VERIFICATION: Compare your calculated result against options A, B, C, and D. 
           If your result does not match any option, discard the question.
        3. EXPLANATION: Provide a VERY CONCISE 1-sentence math proof.
        4. CONTENT: Extract ONLY Multiple Choice Questions. Skip all theory.
        
        Return ONLY a JSON array of objects:
        [{{
          "page_number": {page_number},
          "question_number": int,
          "question": "The full question text...",
          "options": {{"A": "...", "B": "...", "C": "...", "D": "..."}},
          "correct_answer": "A/B/C/D",
          "explanation": "concise math proof",
          "difficulty_level": "Easy/Moderate/Hard",
          "chapter_name": "Parent Topic"
        }}]
        """
        raw = self.ai.generate([prompt, self._prepare_image_part(image_data)], temperature=0.1, json_mode=True)
        try:
            res = self._safe_json(raw)
            return res if isinstance(res, list) else []
        except Exception as e:
            print(f"[AI ERROR] Failed to parse JSON: {e}")
            return []
