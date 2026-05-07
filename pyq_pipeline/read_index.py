import fitz

pdf_path = "pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf"
doc = fitz.open(pdf_path)

print(f"Total Pages: {len(doc)}")

# Index is usually at the start
for i in range(1, 10):
    print(f"\n--- PAGE {i+1} ---")
    text = doc.load_page(i).get_text()
    print(text)
