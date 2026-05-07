import os
import fitz
import re

class PDFTypeDetector:
    def __init__(self):
        self.pdf_type = None
    
    def detect(self, pdf_path, sample_pages=3):
        doc = fitz.open(pdf_path)
        total_pages = len(doc)
        
        if total_pages == 0:
            return {"type": "empty", "total_pages": 0}
        
        text_count = 0
        image_count = 0
        
        sample_end = min(sample_pages, total_pages)
        
        for i in range(sample_end):
            page = doc.load_page(i)
            text = page.get_text().strip()
            images = page.get_images()
            
            if text:
                text_count += len(text)
            if images:
                image_count += len(images)
        
        doc.close()
        
        has_text = text_count > 100
        has_images = image_count > 0
        
        if has_text and not has_images:
            pdf_type = "text"
        elif has_images and not has_text:
            pdf_type = "scanned"
        elif has_text and has_images:
            pdf_type = "hybrid"
        else:
            pdf_type = "unknown"
        
        return {
            "type": pdf_type,
            "total_pages": total_pages,
            "sample_text_chars": text_count,
            "sample_images": image_count,
            "recommendation": self._get_recommendation(pdf_type)
        }
    
    def _get_recommendation(self, pdf_type):
        recommendations = {
            "text": "Use PyMuPDF direct text extraction (skip OCR)",
            "scanned": "Use OCR pipeline (Google Vision + Tesseract)",
            "hybrid": "Use hybrid: extract text where available, OCR for image blocks",
            "unknown": "Default to OCR pipeline",
            "empty": "PDF is empty or corrupted"
        }
        return recommendations.get(pdf_type, "Unknown")
    
    def get_page_layout_info(self, pdf_path, page_num=1):
        doc = fitz.open(pdf_path)
        page = doc.load_page(page_num - 1)
        
        blocks = page.get_text("blocks")
        images = page.get_images()
        
        layout_info = {
            "page": page_num,
            "text_blocks": len(blocks) if blocks else 0,
            "images": len(images) if images else 0,
            "has_text": len(blocks) > 0 if blocks else False,
            "has_images": len(images) > 0 if images else False
        }
        
        doc.close()
        return layout_info

def detect_pdf_type(pdf_path, sample_pages=3):
    detector = PDFTypeDetector()
    return detector.detect(pdf_path, sample_pages)

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python pdf_type_detector.py <pdf_path>")
        sys.exit(1)
    
    result = detect_pdf_type(sys.argv[1])
    print(f"\n{'='*50}")
    print(f"PDF Type Detection: {os.path.basename(sys.argv[1])}")
    print(f"{'='*50}")
    print(f"Type: {result['type']}")
    print(f"Total Pages: {result['total_pages']}")
    print(f"Text Chars (sample): {result['sample_text_chars']}")
    print(f"Images (sample): {result['sample_images']}")
    print(f"Recommendation: {result['recommendation']}")