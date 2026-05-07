import os
import sys
import json
import re
import argparse
from datetime import datetime

# Add parent path to find agents and config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from agents.ai_engine import AIEngine, Part
from agents.pusher import SupabasePusher
from config.settings import PROJECT_ID, LOCATION, GEMINI_MODEL
from utils.splitter import QuestionSplitter

class AIQuestionStructurer:
    def __init__(self):
        # Use configured model from settings
        self.model_name = GEMINI_MODEL
        print(f"[STRUCTURER] Initializing AI Structurer ({self.model_name})...")
        self.ai = AIEngine(model_name=self.model_name)
        self.sb = SupabasePusher()
        self.splitter = QuestionSplitter()
    
    def structure_text_to_questions(self, text, page_num, exam=None, subject=None, chapter=None, page_type="question", solutions=None):
        if not text:
            return []
            
        # 1. Split text into individual question blocks
        blocks = self.splitter.split(text)
        print(f"  Split into {len(blocks)} potential question blocks")
        
        all_parsed = []
        
        # 2. Process all valid blocks in batches of 3 to avoid AI timeout
        valid_blocks = [b for b in blocks if len(b.strip()) >= 30]
        if valid_blocks:
            batch_size = 3
            for i in range(0, len(valid_blocks), batch_size):
                batch = valid_blocks[i:i+batch_size]
                question_data = self._process_blocks_batch(batch, page_num, page_type, solutions)
                if question_data:
                    if isinstance(question_data, list):
                        all_parsed.extend(question_data)
                    else:
                        all_parsed.append(question_data)
                    
        return all_parsed

    def _process_blocks_batch(self, valid_blocks, page_num, page_type, solutions):
        solution_context = ""
        if page_type == "solution":
            solution_context = "THIS IS A SOLUTION PAGE. Extract questions and explain the steps."

        blocks_text = ""
        for i, b in enumerate(valid_blocks):
            blocks_text += f"\n--- BLOCK {i+1} ---\n{b}\n"

        prompt = f"""
Task: Convert multiple MCQ question blocks into a single structured JSON array.
Language: ONLY extract the English version of the questions and options. IGNORE any Hindi, regional translations, or non-English characters.
Page: {page_num}
{solution_context}

INPUT BLOCKS:
{blocks_text}

STRICT JSON FORMAT:
Return a JSON array of objects.
[
  {{
    "id": 1, // matches BLOCK number
    "pdf_q_num": 8, // the ORIGINAL question number printed in the PDF (e.g. '8.' or '21.' -> 8 or 21). REQUIRED.
    "exam": "SSC CGL MAINS", // extract the exam name from the text (e.g. 'SSC CHSL', 'SSC CGL', 'SSC MTS'). REQUIRED.
    "exam_year": "2022", // extract the 4-digit year from the exam tag. REQUIRED.
    "q": "[English Question text ONLY]",
    "opt": [{{"l":"A","v":"[English Option A]"}},{{"l":"B","v":"[English Option B]"}},{{"l":"C","v":"[English Option C]"}},{{"l":"D","v":"[English Option D]"}}],
    "ans": "A/B/C/D or null if not stated",
    "diff": "E/M/H"
  }},
  ...
]
"""
        raw = self.ai.generate(prompt, temperature=0.1, json_mode=True)
        return self._parse_json_response(raw)

    
    def structure_image_to_questions(self, image_data, page_num, exam=None, subject=None, chapter=None):
        prompt = f"""
You are given an image of an exam page (Page {page_num}).

Task: Extract ALL MCQ questions from the image and convert to the specified JSON format.
Language: ONLY extract the English version of the questions and options. IGNORE any Hindi or other non-English text.

STRICT OUTPUT FORMAT - STRICT valid JSON array ONLY. No preamble or conversational noise.
[
  {{"id":1,"exam":"CGL-GS","g":"12","sub":"General Knowledge (Odisha)","ch":"[Odisha Chapter]","diff":"M","q":"[English Question text ONLY]","opt":[{{"l":"A","v":"[English Value]"}},{{"l":"B","v":"[English Value]"}},{{"l":"C","v":"[English Value]"}},{{"l":"D","v":"[English Value]"}}],"ans":"A"}}
]

RULES:
1. Each question MUST have: id, q, opt (A-D), ans
2. Options must have "l" (label A-D) and "v" (English value text)
3. "ans" must be one of A, B, C, D
4. Set "diff" as: E (Easy), M (Moderate), H (Hard)
5. Set "g" as page number
6. Set sub/ch from image context or infer
7. If no questions found, return empty array []
"""
        
        part = Part.from_data(mime_type="image/png", data=image_data)
        raw = self.ai.generate([prompt, part], temperature=0.1, json_mode=True)
        
        return self._parse_json_response(raw)
    
    def _parse_json_response(self, raw):
        if not raw:
            return []
        
        content = raw.strip()
        
        content = re.sub(r'^```json\s*', '', content)
        content = re.sub(r'\s*```$', '', content)
        
        content = re.sub(r'^```\s*', '', content)
        content = re.sub(r'^```\s*', '', content)
        
        try:
            questions = json.loads(content)
            if isinstance(questions, dict) and 'questions' in questions:
                questions = questions['questions']
            return questions if isinstance(questions, list) else []
        except json.JSONDecodeError:
            try:
                questions = re.findall(r'\{[^\]]+\}', content)
                parsed = []
                for q in questions:
                    try:
                        parsed.append(json.loads(q))
                    except:
                        continue
                return parsed
            except:
                return []
    
    def structure_batch(self, texts, page_start=1, exam=None, subject=None, chapter=None):
        all_questions = []
        
        for i, text in enumerate(texts):
            page_num = page_start + i
            print(f"[STRUCTURER] Processing page {page_num}...", end=" ", flush=True)
            
            if not text or len(text.strip()) < 50:
                print("SKIP (too short)")
                continue
            
            questions = self.structure_text_to_questions(text, page_num, exam, subject, chapter)
            
            if questions:
                for q in questions:
                    q['page'] = page_num
                all_questions.extend(questions)
                print(f"found {len(questions)} questions")
            else:
                print("no questions")
        
        return all_questions

def structure_questions(texts, page_start=1, exam=None, subject=None, chapter=None):
    structurer = AIQuestionStructurer()
    return structurer.structure_batch(texts, page_start, exam, subject, chapter)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Structure text to questions")
    parser.add_argument("text_dir", help="Directory with extracted text files")
    parser.add_argument("--exam", default="CGL", help="Exam name")
    parser.add_argument("--subject", default="Maths", help="Subject name")
    parser.add_argument("--start", type=int, default=127, help="Start page")
    
    args = parser.parse_args()
    
    text_files = sorted([f for f in os.listdir(args.text_dir) if f.endswith('.txt')])
    
    texts = []
    for f in text_files:
        with open(os.path.join(args.text_dir, f), 'r', encoding='utf-8') as file:
            texts.append(file.read())
    
    questions = structure_questions(texts, args.start, args.exam, args.subject)
    print(f"\n[SUCCESS] Extracted {len(questions)} questions")
    print(json.dumps(questions[:3], indent=2))