import fitz

pdf_path = "pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf"
doc = fitz.open(pdf_path)

full_text = ""
for i in range(len(doc)):
    full_text += f"\n--- PAGE {i+1} ---\n"
    full_text += doc.load_page(i).get_text()

with open("full_text.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"Successfully exported {len(doc)} pages to full_text.txt")
