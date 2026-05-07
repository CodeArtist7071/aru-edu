import os
import io
import re
from google.cloud import vision
import fitz  # PyMuPDF
import json

class PYQVisionService:
    def __init__(self):
        print("[PYQ-VISION] Initializing Coordinate-Aware Engine")
        self.client = vision.ImageAnnotatorClient()

    def get_layout_text(self, pdf_path, pages_to_process=None, start_page=1):
        """
        Extracts text while respecting multi-column layouts using coordinates.
        Returns a list of structured page data.
        start_page: 1-indexed start page.
        """
        doc = fitz.open(pdf_path)
        full_results = []
        
        # Limit pages if requested
        total_pages = len(doc)
        limit = pages_to_process or total_pages
        start_idx = max(0, start_page - 1)
        
        # Ensure we don't go out of bounds
        end_idx = min(total_pages, start_idx + limit)
        
        for i in range(start_idx, end_idx):
            print(f"[PYQ-VISION] Analyzing Page {i+1}/{total_pages}...")
            page = doc.load_page(i)
            # SPLIT TO IMAGE: Convert page to high-res PNG
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
            
            # Save to disk for user verification
            debug_dir = os.path.join(os.path.dirname(pdf_path), "..", "debug_images")
            os.makedirs(debug_dir, exist_ok=True)
            image_filename = f"page_{i+1}.png"
            image_path = os.path.join(debug_dir, image_filename)
            pix.save(image_path)
            
            img_data = pix.tobytes("png")
            print(f"[VISION] Saved Page {i+1} to image: {image_path}")
            
            # Google Vision Call
            print(f"[VISION] Sending Image {i+1} to Google Cloud Vision...")
            image = vision.Image(content=img_data)
            response = self.client.document_text_detection(image=image)
            
            if response.error.message:
                print(f"[VISION ERROR] {response.error.message}")
                continue

            # Process layout
            page_content = self._analyze_page_layout(response.full_text_annotation)
            
            # TEXT CHECKPOINT: Save to .txt file for audit/checkpointing
            temp_dir = os.path.join(os.path.dirname(pdf_path), "..", "temp_ocr")
            os.makedirs(temp_dir, exist_ok=True)
            txt_path = os.path.join(temp_dir, f"page_{i+1}.txt")
            with open(txt_path, "w", encoding="utf-8") as f:
                f.write(page_content)
            
            print(f"[VISION] Saved Checkpoint: {txt_path}")

            full_results.append({
                "page_number": i + 1,
                "content": page_content
            })
            
        return full_results

    def _analyze_page_layout(self, annotation):
        """
        Groups words into logical lines and columns using bounding box data.
        """
        blocks = []
        
        for page in annotation.pages:
            width = page.width
            center_x = width / 2
            
            # Collect all blocks with their center-points
            for block in page.blocks:
                bbox = block.bounding_box.vertices
                # Simple average for y-center and x-center
                y_coords = [v.y for v in bbox]
                x_coords = [v.x for v in bbox]
                
                avg_y = sum(y_coords) / len(y_coords)
                min_x = min(x_coords)
                max_x = max(x_coords)
                
                # Extract text
                text_parts = []
                for para in block.paragraphs:
                    for word in para.words:
                        text_parts.append("".join([symbol.text for symbol in word.symbols]))
                
                block_text = " ".join(text_parts)
                
                # Heuristic for Heading Detection (Centered text)
                is_heading = False
                block_width = max_x - min_x
                if block_width < width * 0.8: # Not full width
                    block_center_x = (min_x + max_x) / 2
                    if abs(block_center_x - center_x) < (width * 0.1): # Within 10% of center
                        is_heading = True

                blocks.append({
                    "text": block_text,
                    "y": avg_y,
                    "x_start": min_x,
                    "is_left_column": min_x < center_x,
                    "is_heading": is_heading
                })

        # SORTING LOGIC:
        # 1. Headings take priority (global y-sort)
        # 2. Body text sorted by Column (Left then Right) then by vertical Y
        
        final_text = []
        
        # Identify "Vertical Gutter" - if no blocks span the center, it's 2-column
        has_center_overlap = any(b["x_start"] < center_x and b["x_start"] + 100 > center_x for b in blocks if not b["is_heading"])
        
        if not has_center_overlap:
            # Multi-Column Sorting
            left_col = sorted([b for b in blocks if b["is_left_column"] and not b["is_heading"]], key=lambda x: x["y"])
            right_col = sorted([b for b in blocks if not b["is_left_column"] and not b["is_heading"]], key=lambda x: x["y"])
            headings = sorted([b for b in blocks if b["is_heading"]], key=lambda x: x["y"])
            
            # This is a simplified merge: interleaving headings with columns based on Y
            # For a robust version, we'd split page into segments by headings
            all_sorted = sorted(blocks, key=lambda b: (0 if b["is_heading"] else (1 if b["is_left_column"] else 2), b["y"]))
            for b in all_sorted:
                final_text.append(b["text"])
        else:
            # Single-Column Sorting
            all_sorted = sorted(blocks, key=lambda x: x["y"])
            for b in all_sorted:
                final_text.append(b["text"])

        return "\n".join(final_text)

if __name__ == "__main__":
    # Test stub
    svc = PYQVisionService()
    # svc.get_layout_text("path/to/pdf")
