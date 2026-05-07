import os
import sys
import fitz
import json
import re

# Add parent path to find config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config.settings import GOOGLE_APPLICATION_CREDENTIALS

class TextExtractor:
    def __init__(self, mode="auto"):
        self.mode = mode
        self.google_client = None
        
        if mode in ["google", "auto"]:
            try:
                from google.cloud import vision
                self.google_client = vision.ImageAnnotatorClient()
                print("[OCR] Google Vision client initialized")
            except Exception as e:
                print(f"[OCR] Google Vision init failed: {e}")
                self.google_client = None
        
        self.tesseract_available = False
        if mode in ["tesseract", "auto"]:
            try:
                import pytesseract
                self.tesseract_available = True
                self.pytesseract = pytesseract
                print("[OCR] Tesseract available")
            except ImportError:
                print("[OCR] Tesseract not available")
    
    def extract_page_text(self, pdf_path, page_num=1, preferred_ocr=None, pdf_type="text"):
        doc = fitz.open(pdf_path)
        page = doc.load_page(page_num - 1)
        
        text = page.get_text().strip()
        
        # QUALITY CHECK: If text exists and seems structured (multiple lines, enough length)
        # We avoid OCR to save costs and increase speed.
        if text and len(text) > 100:
            # Check for MCQ-like patterns in native text
            if re.search(r'[A-D][\.\)]\s+', text) or re.search(r'\d+[\.\)]\s+', text):
                doc.close()
                return {
                    "source": "native",
                    "text": text,
                    "page": page_num,
                    "confidence": 1.0
                }
        
        # If native text is too short or lacks structure, we proceed to OCR

        
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        img_data = pix.tobytes("png")
        
        doc.close()
        
        ocr_result = self._extract_from_image(img_data, page_num, preferred_ocr)
        
        if text and len(text) > 100 and ocr_result.get("confidence", 0) < 0.9:
            if len(text) > len(ocr_result.get("text", "")):
                return {
                    "source": "native",
                    "text": text,
                    "page": page_num,
                    "confidence": 0.95
                }
        
        return ocr_result
    
    def _extract_from_image(self, img_data, page_num, preferred_ocr=None):
        results = {}
        
        if not preferred_ocr or preferred_ocr == "google":
            if self.google_client:
                results["google"] = self._google_ocr(img_data, page_num)
        
        if not preferred_ocr or preferred_ocr == "tesseract":
            if self.tesseract_available:
                results["tesseract"] = self._tesseract_ocr(img_data, page_num)
        
        if not results:
            return {
                "source": "none",
                "text": "",
                "page": page_num,
                "confidence": 0.0,
                "error": "No OCR engine available"
            }
        
        best = self._select_best_ocr(results)
        
        return best
    
    def _google_ocr(self, img_data, page_num):
        from google.cloud import vision
        
        image = vision.Image(content=img_data)
        response = self.google_client.document_text_detection(image=image)
        
        if response.error.message:
            return {
                "source": "google",
                "text": "",
                "page": page_num,
                "confidence": 0.0,
                "error": response.error.message
            }
        
        full_text = response.full_text_annotation.text if response.full_text_annotation else ""
        
        return {
            "source": "google",
            "text": full_text,
            "page": page_num,
            "confidence": 0.95,
            "pages": len(response.full_text_annotation.pages) if response.full_text_annotation else 0
        }
    
    def _tesseract_ocr(self, img_data, page_num):
        import numpy as np
        import cv2
        from PIL import Image
        import io
        
        img = Image.open(io.BytesIO(img_data))
        img_array = np.array(img)
        
        if len(img_array.shape) == 3:
            gray = cv2.cvtColor(img_array, cv2.COLOR_RGB2GRAY)
        else:
            gray = img_array
        
        _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        
        text = self.pytesseract.image_to_string(thresh)
        
        return {
            "source": "tesseract",
            "text": text,
            "page": page_num,
            "confidence": 0.75,
            "engine": "tesseract"
        }
    
    def _select_best_ocr(self, results):
        if not results:
            return {
                "source": "none",
                "text": "",
                "confidence": 0.0
            }
        
        best_source = max(results.keys(), key=lambda k: results[k].get("confidence", 0))
        best = results[best_source]
        
        if len(results) > 1:
            other_text = [r["text"] for r in results.values() if r != best_source and r.get("text")]
            if other_text:
                text_len = len(best.get("text", ""))
                for t in other_text:
                    if len(t) > text_len:
                        best = results[max(results.keys(), key=lambda k: len(results[k].get("text", "")))]
                        break
        
        return best
    
    def extract_range(self, pdf_path, start_page=1, end_page=10, preferred_ocr=None):
        doc = fitz.open(pdf_path)
        total_pages = len(doc)
        doc.close()
        
        end_idx = min(end_page, total_pages)
        
        results = []
        
        for page_num in range(start_page, end_idx + 1):
            print(f"[OCR] Extracting page {page_num}...", end=" ", flush=True)
            result = self.extract_page_text(pdf_path, page_num, preferred_ocr)
            print(f"{result['source']} ({len(result.get('text', ''))} chars)")
            results.append(result)
        
        return results

def extract_text(pdf_path, start_page=1, end_page=10, mode="auto"):
    extractor = TextExtractor(mode)
    return extractor.extract_range(pdf_path, start_page, end_page)

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python text_extractor.py <pdf_path> [start] [end]")
        sys.exit(1)
    
    pdf = sys.argv[1]
    start = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    end = int(sys.argv[3]) if len(sys.argv) > 3 else start
    
    results = extract_text(pdf, start, end)
    print(f"\n[SUCCESS] Extracted {len(results)} pages")