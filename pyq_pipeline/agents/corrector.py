import sys
import os
import io
import json
import time

print("[DEBUG] Starting script...", flush=True)
# Add parent path to find agents and config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from agents.pusher import SupabasePusher
from agents.ai_engine import AIEngine

class QuestionCorrector:
    def __init__(self):
        print("[DEBUG] Initializing SupabasePusher...", flush=True)
        self.sb = SupabasePusher()
        print("[DEBUG] Initializing AIEngine...", flush=True)
        self.ai = AIEngine(session_id="correction_flow")
        print("[DEBUG] Initialization complete.", flush=True)
        
    def fetch_questions(self, page_number=None, pdf_id=None):
        print(f"[DEBUG] Fetching questions for page {page_number}...", flush=True)
        query = self.sb.supabase.table('py_questions').select('*')
        if page_number:
            query = query.eq('page_number', page_number)
        if pdf_id:
            query = query.eq('pdf_id', pdf_id)
            
        res = query.execute()
        print(f"[DEBUG] Found {len(res.data) if res.data else 0} questions.", flush=True)
        return res.data or []

    def verify_and_correct(self, question_data):
        q_text = question_data.get('question')
        options = question_data.get('options')
        current_ans = question_data.get('correct_answer')
        
        prompt = f"""
        Objective: Verify MCQ answer correctness.
        Question: {q_text}
        Options: {json.dumps(options)}
        Current DB Answer: {current_ans}
        
        Tasks:
        1. Solve the math problem step-by-step internally.
        2. Determine the correct option label (A, B, C, or D).
        3. Compare with Current DB Answer.
        
        Output JSON Format:
        {{
            "solved_answer": "label",
            "is_correction_needed": boolean,
            "explanation": "one sentence proof"
        }}
        """
        
        print(f"[DEBUG] Calling AI for question {question_data.get('question_number')}...", flush=True)
        try:
            response_text = self.ai.generate(prompt, temperature=0.0, json_mode=True)
            print(f"[DEBUG] AI Response received.", flush=True)
            if not response_text: return None
            
            # Extract JSON block
            import re
            match = re.search(r'\{.*\}', response_text, re.DOTALL)
            if not match: return None
                
            content = match.group(0)
            
            # Final cleaning of the string for JSON parsing
            # Remove any non-printable characters except whitespace
            content = "".join(c for c in content if c.isprintable() or c.isspace())
            
            result = json.loads(content, strict=False)
            return {
                "corrected_answer": result.get("solved_answer"),
                "is_correction_made": result.get("is_correction_needed"),
                "explanation": result.get("explanation")
            }
        except Exception as e:
            print(f"[ERROR] AI processing failed: {e}", flush=True)
            print(f"[DEBUG] Faulty content was: {response_text[:200]}...", flush=True)
            return None

    def batch_correct_local(self, questions):
        """
        Corrects a list of question objects in-memory.
        """
        print(f"[DEBUG] Starting local correction for {len(questions)} items...", flush=True)
        corrections_count = 0
        for q in questions:
            # Normalize field names if they come from Structurer (q, ans) vs DB (question, correct_answer)
            q_data = {
                "question": q.get('q') or q.get('question'),
                "options": q.get('opt') or q.get('options'),
                "correct_answer": q.get('ans') or q.get('correct_answer'),
                "question_number": q.get('id') or q.get('question_number')
            }
            
            # Structurer opt is usually a list [{l:A, v:value}, ...], need to convert to dict for corrector
            if isinstance(q_data['options'], list):
                q_data['options'] = {o.get('l'): o.get('v') for o in q_data['options']}

            print(f"--- Verifying Q{q_data['question_number']} ---", flush=True)
            result = self.verify_and_correct(q_data)
            
            if result:
                if result.get('is_correction_made'):
                    print(f"  [CORRECTION] Q{q_data['question_number']}: {q_data['correct_answer']} -> {result.get('corrected_answer')}", flush=True)
                    print(f"  [REASON] {result.get('explanation')}", flush=True)
                    # Update the original object
                    if 'ans' in q: q['ans'] = result.get('corrected_answer')
                    if 'correct_answer' in q: q['correct_answer'] = result.get('corrected_answer')
                    corrections_count += 1
                else:
                    print(f"  [VERIFIED] Q{q_data['question_number']} is correct.", flush=True)
                    print(f"  [REASON] {result.get('explanation')}", flush=True)
            
            time.sleep(0.5)
        
        print(f"[DEBUG] Local correction complete. {corrections_count} changes made.", flush=True)
        return questions

    def run_correction_cycle(self, page_number=None, pdf_id=None):
        questions = self.fetch_questions(page_number, pdf_id)
        
        corrections = []
        for q in questions:
            print(f"--- Processing Q{q.get('question_number')} ---", flush=True)
            result = self.verify_and_correct(q)
            
            if result:
                if result.get('is_correction_made'):
                    print(f"  [CORRECTION] Q{q.get('question_number')}: {q.get('correct_answer')} -> {result.get('corrected_answer')}", flush=True)
                    print(f"  [REASON] {result.get('explanation')}", flush=True)
                    q['correct_answer'] = result.get('corrected_answer')
                    corrections.append(q)
                else:
                    print(f"  [VERIFIED] Q{q.get('question_number')} is correct.", flush=True)
                    print(f"  [REASON] {result.get('explanation')}", flush=True)
            
            time.sleep(0.5)
            
        if corrections:
            print(f"Pushing {len(corrections)} corrected items back to Supabase...", flush=True)
            for corrected_q in corrections:
                try:
                    self.sb.supabase.table('py_questions').update({
                        "correct_answer": corrected_q['correct_answer']
                    }).eq('id', corrected_q['id']).execute()
                    print(f"  [SYNCED] Q{corrected_q['question_number']}", flush=True)
                except Exception as e:
                    print(f"  [FAILED SYNC] Q{corrected_q['id']}: {e}", flush=True)
            print("Corrections synced successfully.", flush=True)
        else:
            print("No corrections needed.", flush=True)

if __name__ == "__main__":
    corrector = QuestionCorrector()
    page = int(sys.argv[1]) if len(sys.argv) > 1 else 12
    corrector.run_correction_cycle(page_number=page)
