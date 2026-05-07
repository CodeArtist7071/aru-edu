import fitz

pdf_path = "pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf"
doc = fitz.open(pdf_path)

print(f"Total Pages: {len(doc)}")
found_count = 0

for i in range(len(doc)):
    text = doc.load_page(i).get_text().upper()
    if "ANSWER KEYS" in text:
        print(f"--- MATCH FOUND: Page {i+1} ---")
        print(text[:200]) # Print context
        found_count += 1

if found_count == 0:
    print("Keyword 'ANSWER KEYS' not found. Trying 'ANSWERS'...")
    for i in range(len(doc)):
        text = doc.load_page(i).get_text().upper()
        if "ANSWERS" in text:
            print(f"--- MATCH FOUND (Fallback): Page {i+1} ---")
            print(text[:200])
            found_count += 1

if found_count == 0:
    print("No Answer Key terminology found in document.")
