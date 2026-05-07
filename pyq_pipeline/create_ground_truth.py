import os
import sys
import json
import argparse

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

DEBUG_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "debug_images")
GROUND_TRUTH_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ground_truth")

def find_pdf_images(pdf_name):
    pdf_base = os.path.splitext(os.path.basename(pdf_name))[0]
    pdf_dir = os.path.join(DEBUG_DIR, pdf_base)
    if not os.path.exists(pdf_dir):
        print(f"[ERROR] Image directory not found: {pdf_dir}")
        return None
    
    images = sorted([f for f in os.listdir(pdf_dir) if f.endswith('.png')])
    return [os.path.join(pdf_dir, img) for img in images]

def get_page_number(filename):
    import re
    match = re.search(r'page_(\d+)', filename)
    return int(match.group(1)) if match else 1

def interactive_entry(pdf_name, start_page=1, end_page=5):
    images = find_pdf_images(pdf_name)
    if not images:
        return
    
    images = [img for img in images if start_page <= get_page_number(img) <= end_page]
    
    print(f"\n{'='*60}")
    print(f"GROUND TRUTH ENTRY: {pdf_name}")
    print(f"Pages: {start_page} to {end_page}")
    print(f"{'='*60}")
    print(f"Images directory: {os.path.join(DEBUG_DIR, os.path.splitext(pdf_name)[0])}")
    print(f"\nFor each page, you'll enter questions manually.")
    print(f"Tip: Open the images externally to view while entering.")
    print(f"Images will open in your default viewer.")
    print(f"{'='*60}\n")
    
    all_questions = []
    
    for img_path in images:
        page_num = get_page_number(img_path)
        
        print(f"\n--- PAGE {page_num} ---")
        print(f"Image: {img_path}")
        os.system(f'start "" "{img_path}"')
        
        num_qs = input("Number of questions on this page: ").strip()
        if not num_qs.isdigit():
            print("Skipping page...")
            continue
        
        num_qs = int(num_qs)
        if num_qs == 0:
            continue
        
        for q_num in range(1, num_qs + 1):
            print(f"\n  Question {q_num}:")
            q_text = input("    Question text: ").strip()
            if not q_text:
                continue
            
            opts = {}
            for opt in ['A', 'B', 'C', 'D']:
                opts[opt] = input(f"    Option {opt}: ").strip()
            
            correct = input("    Correct answer (A/B/C/D): ").strip().upper()
            if correct not in ['A', 'B', 'C', 'D']:
                correct = 'A'
            
            chapter = input("    Chapter name: ").strip()
            difficulty = input("    Difficulty (Easy/Moderate/Hard): ").strip()
            if not difficulty:
                difficulty = "Moderate"
            
            all_questions.append({
                "page_number": page_num,
                "question_number": q_num,
                "question": q_text,
                "options": opts,
                "correct_answer": correct,
                "chapter": chapter,
                "difficulty": difficulty
            })
    
    if all_questions:
        output = {
            "source_pdf": pdf_name,
            "created": f"Manual entry {len(all_questions)} questions",
            "questions": all_questions
        }
        
        base_name = os.path.splitext(os.path.basename(pdf_name))[0]
        base_name = ''.join(c if c.isalnum() else '_' for c in base_name)
        output_file = os.path.join(GROUND_TRUTH_DIR, f"{base_name}.json")
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(output, f, indent=2, ensure_ascii=False)
        
        print(f"\n[SAVED] {len(all_questions)} questions to: {output_file}")
    else:
        print("\n[SKIP] No questions entered.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Interactive ground truth entry")
    parser.add_argument("--pdf", required=True, help="PDF filename")
    parser.add_argument("--start", type=int, default=1, help="Start page")
    parser.add_argument("--end", type=int, default=5, help="End page")
    
    args = parser.parse_args()
    
    interactive_entry(args.pdf, args.start, args.end)