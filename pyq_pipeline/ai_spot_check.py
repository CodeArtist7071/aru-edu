
import json
import sys
import os
import random
import re

# Add root path
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(ROOT_DIR)
from agents.ai_engine import AIEngine

def ai_spot_check(json_path, sample_size=5):
    if not os.path.exists(json_path):
        print(f"Error: File not found {json_path}")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    questions = data.get("questions", [])
    if not questions:
        print("No questions found in JSON.")
        return

    # Select a random sample
    sample = random.sample(questions, min(sample_size, len(questions)))
    
    ai = AIEngine()
    
    print(f"\n{'='*60}")
    print(f"AI SPOT CHECK: Verifying {len(sample)} random questions")
    print(f"{'='*60}\n")

    matches = 0
    mismatches = 0

    for i, q in enumerate(sample):
        q_text = q.get("q")
        options = q.get("opt")
        extracted_ans = q.get("ans")
        
        prompt = f"""
        Solve this multiple choice question. 
        First, show your step-by-step reasoning. 
        Finally, state the correct option clearly as 'FINAL ANSWER: [A/B/C/D]'.
        
        Question: {q_text}
        Options: {json.dumps(options)}
        """
        
        print(f"Checking Q{i+1}: {q_text[:100]}...")
        raw_response = ai.generate(prompt, temperature=0.0)
        
        # Extract the letter after 'FINAL ANSWER:'
        ans_match = re.search(r'FINAL ANSWER:\s*([A-D])', raw_response, re.IGNORECASE)
        ai_ans = ans_match.group(1).upper() if ans_match else "?"

        if ai_ans == extracted_ans:
            print(f"  [PASS] Extracted: {extracted_ans} | AI Solve: {ai_ans}")
            matches += 1
        else:
            print(f"  [FAIL] Extracted: {extracted_ans} | AI Solve: {ai_ans} <--- MISMATCH")
            print(f"  Reasoning: {raw_response.strip()[:300]}...\n")
            mismatches += 1

    print(f"\n{'='*60}")
    print(f"RESULTS: {matches} Passes, {mismatches} Mismatches")
    print(f"{'='*60}")

if __name__ == "__main__":
    path = "pyq_pipeline/storage/extracted/maths-e-book-2-0-by-aditya-ranjan-sir_compress/extracted_questions.json"
    ai_spot_check(path)
