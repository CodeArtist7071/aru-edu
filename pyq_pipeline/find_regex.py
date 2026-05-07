import fitz
import re

pdf_path = "pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf"
doc = fitz.open(pdf_path)

# Aggressive patterns for "ANSWER", "KEY", "SOLUTION"
pattern = re.compile(r'(ANSWER\s*KEY|ANSWERS?|SOLUTIONS?)', re.IGNORECASE)

print(f"Total Pages: {len(doc)}")

for i in range(len(doc)):
    text = doc.load_page(i).get_text()
    matches = list(pattern.finditer(text))
    
    if matches:
        print(f"--- POTENTIAL KEY ON PAGE {i+1} ---")
        for match in matches:
            # Check context: short blocks or near numbers
            start = max(0, match.start() - 20)
            end = min(len(text), match.end() + 100)
            context = text[start:end].replace('\n', ' ')
            print(f"  Match: '{match.group()}' | Context: {context}")
