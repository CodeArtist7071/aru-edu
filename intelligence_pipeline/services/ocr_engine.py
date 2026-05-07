import os
import io
import time
import base64
import hashlib
from google.cloud import vision
from PIL import Image
import fitz  # PyMuPDF
from config import OCR_CACHE_DIR

class OCREngine:
    def __init__(self):
        print("[OCR] Initializing Isolated Google Vision Client")
        self.client = vision.ImageAnnotatorClient()

    def _get_cache_path(self, pdf_path):
        """Generates a cache filename based on the PDF path."""
        # We use the filename for simplicity, but a hash of the content would be more robust
        pdf_name = os.path.basename(pdf_path)
        return os.path.join(OCR_CACHE_DIR, f"{pdf_name}.txt")

    def pdf_to_images(self, pdf_path):
        """Converts PDF pages to high-res images for better OCR."""
        doc = fitz.open(pdf_path)
        images = []
        for i in range(len(doc)):
            page = doc.load_page(i)
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # 2x zoom for clarity
            img_data = pix.tobytes("png")
            images.append(img_data)
        return images

    def extract_text(self, image_data):
        """Extracts text from image bytes using Google Vision."""
        image = vision.Image(content=image_data)
        response = self.client.document_text_detection(image=image)
        
        if response.error.message:
            raise Exception(f"{response.error.message}")

        return response.full_text_annotation.text

    def process_pdf(self, pdf_path):
        """Processes entire PDF and returns single clean string, using cache if available."""
        cache_path = self._get_cache_path(pdf_path)
        
        # 1. Check Cache
        if os.path.exists(cache_path):
            print(f"[OCR] CACHE HIT: Loading text from {os.path.basename(cache_path)}")
            with open(cache_path, "r", encoding="utf-8") as f:
                return f.read()

        # 2. Process Normally
        print(f"[OCR] CACHE MISS: Processing: {os.path.basename(pdf_path)}")
        images = self.pdf_to_images(pdf_path)
        full_text = []

        for i, img in enumerate(images):
            print(f"[OCR] Analyzing Page {i+1}/{len(images)}")
            text = self.extract_text(img)
            full_text.append(text)
            
        combined_text = "\n\n--- PAGE BREAK ---\n\n".join(full_text)

        # 3. Save to Cache
        print(f"[OCR] Saving result to cache: {os.path.basename(cache_path)}")
        with open(cache_path, "w", encoding="utf-8") as f:
            f.write(combined_text)
            
        return combined_text
