import fitz
import re

pdf_path = "pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf"
doc = fitz.open(pdf_path)

print(f"Total Pages: {len(doc)}")

for i in range(len(doc)):
    text = doc.load_page(i).get_text()
    
    # Look for clusters of "Number. (Letter)" or "Number. Letter"
    matches = re.findall(r'\d+\.?\s*[(\[]?[A-Da-d][)\]]?', text)
    
    if len(matches) > 10:
        print(f"--- POTENTIAL KEY ON PAGE {i+1} ---")
        print(f"Found {len(matches)} answer patterns.")
        print(text[:300])
        print("...")
