import os
import re
import fitz
from collections import defaultdict

class LayoutDetector:
    def __init__(self):
        self.min_block_height = 50
    
    def detect_page_layout(self, pdf_path, page_num=1):
        doc = fitz.open(pdf_path)
        page = doc.load_page(page_num - 1)
        
        blocks = page.get_text("blocks")
        if not blocks:
            doc.close()
            return {"layout": "unknown", "blocks": []}
        
        page_width = page.rect.width
        page_height = page.rect.height
        center_x = page_width / 2
        
        structured_blocks = []
        
        for block in blocks:
            x0, y0, x1, y1, text = block[:5]
            height = y1 - y0
            width = x1 - x0
            
            if height < self.min_block_height:
                continue
            
            block_type = self._classify_block(
                text, x0, x1, width, 
                page_width, center_x
            )
            
            structured_blocks.append({
                "text": text.strip(),
                "type": block_type,
                "bbox": [x0, y0, x1, y1],
                "y_start": y0,
                "y_end": y1,
                "x_start": x0,
                "x_end": x1,
                "height": height,
                "width": width
            })
        
        doc.close()
        
        columns = self._detect_columns(structured_blocks, center_x)
        
        return {
            "page": page_num,
            "layout": columns,
            "blocks": structured_blocks,
            "metadata": {
                "total_blocks": len(structured_blocks),
                "page_width": page_width,
                "page_height": page_height,
                "center_x": center_x
            }
        }
    
    def _classify_block(self, text, x0, x1, width, page_width, center_x):
        text = text.strip()
        
        if not text:
            return "empty"
        
        is_centered = abs((x0 + x1) / 2 - center_x) < (page_width * 0.15)
        is_left = x1 < center_x
        is_right = x0 > center_x
        
        text_lower = text.lower()
        
        if len(text) < 20 and re.match(r'^Q\s*\d+', text, re.IGNORECASE):
            return "question_number"
        
        if re.match(r'^[A-D]\s*[\.\)]', text, re.IGNORECASE):
            return "option"
        
        if re.match(r'^\(?[a-d]\s*[\.\)]', text, re.IGNORECASE):
            return "sub_option"
        
        if re.match(r'^(answer|solution|key)', text_lower):
            return "answer_key"
        
        if len(text) < 50 and any(kw in text_lower for kw in ['page', 'www', 'exam', 'test']):
            return "header_footer"
        
        if is_centered and len(text) < 100:
            return "heading"
        
        if is_left:
            return "left_column"
        elif is_right:
            return "right_column"
        
        return "body"
    
    def _detect_columns(self, blocks, center_x):
        left_count = sum(1 for b in blocks if b["x_end"] < center_x)
        right_count = sum(1 for b in blocks if b["x_start"] > center_x)
        
        if left_count > 0 and right_count > 0:
            return "two_column"
        elif left_count > right_count:
            return "single_column_left"
        elif right_count > left_count:
            return "single_column_right"
        else:
            return "single_column"
    
    def extract_question_blocks(self, pdf_path, page_num=1):
        layout = self.detect_page_layout(pdf_path, page_num)
        
        questions = []
        current_question = None
        current_options = []
        question_start_y = None
        
        sorted_blocks = sorted(layout["blocks"], key=lambda x: x["y_start"])
        
        for block in sorted_blocks:
            block_type = block["type"]
            text = block["text"]
            
            if block_type == "question_number":
                if current_question and current_question["text"]:
                    current_question["options"] = current_options
                    questions.append(current_question)
                
                q_num = re.search(r'Q\s*(\d+)', text, re.IGNORECASE)
                q_id = int(q_num.group(1)) if q_num else len(questions) + 1
                
                q_text = re.sub(r'^Q\s*\d+[\.\):\s]*', '', text, flags=re.IGNORECASE).strip()
                
                current_question = {
                    "id": q_id,
                    "text": q_text,
                    "options": [],
                    "y_start": block["y_start"]
                }
                current_options = []
                continue
            
            if current_question:
                if block_type == "option":
                    opt_match = re.match(r'^([A-D])\s*[\.\)]?\s*(.+)', text.strip(), re.IGNORECASE)
                    if opt_match:
                        label = opt_match.group(1).upper()
                        value = opt_match.group(2).strip()
                        current_options.append({"l": label, "v": value})
                elif block_type in ["body", "left_column", "right_column"]:
                    if text.strip():
                        current_question["text"] += " " + text.strip()
        
        if current_question and current_question["text"]:
            current_question["options"] = current_options
            questions.append(current_question)
        
        return questions

def detect_layout(pdf_path, page_num=1):
    detector = LayoutDetector()
    return detector.detect_page_layout(pdf_path, page_num)

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python layout_detector.py <pdf_path> [page_num]")
        sys.exit(1)
    
    pdf = sys.argv[1]
    page = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    
    result = detect_layout(pdf, page)
    print(f"\nPage {page} Layout:")
    print(f"  Layout Type: {result['layout']}")
    print(f"  Total Blocks: {result['metadata']['total_blocks']}")