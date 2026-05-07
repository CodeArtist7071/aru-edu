import fitz
import re
import json

def extract_answer_key(pdf_path, page_num):
    doc = fitz.open(pdf_path)
    text = doc[page_num - 1].get_text()
    
    # We want to match headers like "SSC CHSL 2020" and the answers like "1.(d)"
    lines = text.split('\n')
    
    answer_key = {}
    current_exam = "General"
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Match "SSC CGL 2020" or similar
        if re.search(r'SSC\s+[A-Z]+\s+\d{4}', line, re.IGNORECASE):
            current_exam = line
            answer_key[current_exam] = {}
            continue
            
        # Match "1.(d)" or "1. (d)"
        match = re.match(r'(\d+)[\.\s]*\(([a-dA-D])\)', line)
        if match:
            q_num = int(match.group(1))
            ans = match.group(2).upper()
            if current_exam not in answer_key:
                answer_key[current_exam] = {}
            answer_key[current_exam][q_num] = ans
            
    return answer_key

if __name__ == "__main__":
    pdf_path = 'storage/pdfs/maths-e-book-2-0-by-aditya-ranjan-sir_compress.pdf'
    key = extract_answer_key(pdf_path, 45)
    print(json.dumps(key, indent=2))
