import fitz

pdf_path = "pdfs/Rakesh Yadav Maths 7300 Book PDF.pdf"
doc = fitz.open(pdf_path)

print(f"Total Pages: {len(doc)}")

for i in range(len(doc)):
    images = doc.get_page_images(i)
    if images:
        print(f"--- IMAGE CLUSTER: Page {i+1} ---")
        print(f"Count: {len(images)} images")
        # Try to identify something about the image
        img = doc.extract_image(images[0][0])
        print(f"Sample Image Type: {img['ext']}, Size: {len(img['image'])} bytes")
