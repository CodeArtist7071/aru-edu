import os
import fitz
from services.ai_engine import AIEngine, Part

# Load config
import sys
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from pyq_config import PROJECT_ID, LOCATION, GEMINI_MODEL

class PYQAuditor:
    def __init__(self):
        print(f"[AUDITOR] Initializing Visual Auditor ({GEMINI_MODEL})...")
        self.ai = AIEngine()

    def audit_pdf(self, pdf_path, start_page=1, num_pages=10):
        if not os.path.exists(pdf_path):
            print(f"Error: PDF not found at {pdf_path}")
            return

        doc = fitz.open(pdf_path)
        total = len(doc)
        print(f"\n--- AUDIT REPORT: {os.path.basename(pdf_path)} ---")
        print(f"Goal: Intelligently analyze pages {start_page} to {min(total, start_page + num_pages - 1)}.")
        
        for i in range(start_page - 1, min(total, start_page + num_pages - 1)):
            p_num = i + 1
            print(f"Scanning Page {p_num}...", end=" ", flush=True)
            
            # Capture Image
            page = doc.load_page(i)
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
            img_data = pix.tobytes("png")
            
            # AI Intelligence
            prompt = """
            Look at this image of an exam book page. 
            Provide a short, 1-sentence intelligent summary of what is on this page.
            If there are MCQ questions, count them.
            
            Format: [Content Type] | [Description]
            """
            
            part = Part.from_data(mime_type="image/png", data=img_data)
            res = self.ai.generate([prompt, part])
            
            print(f"\n[Page {p_num}] {res.strip()}")

        print("\n--- AUDIT COMPLETE ---")

if __name__ == "__main__":
    pdf = "pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf"
    auditor = PYQAuditor()
    auditor.audit_pdf(pdf)
