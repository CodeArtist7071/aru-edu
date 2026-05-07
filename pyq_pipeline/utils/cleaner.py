import os
import re
import json
import numpy as np
try:
    import cv2
    CV2_AVAILABLE = True
except ImportError:
    CV2_AVAILABLE = False

class TextCleaner:
    def __init__(self, config=None):
        self.config = config or {
            "remove_headers": False,
            "remove_footers": False,
            "normalize_spaces": True,
            "fix_special_chars": True
        }
        
        self.header_patterns = [
            r'^Page\s+\d+$',
            r'^\d+\s*/\s*\d+$',
        ]
        
        self.footer_patterns = [
            r'^For\s+answers\s',
            r'^www\.',
            r'^©',
        ]
    
    def clean(self, text):
        if not text:
            return ""
        
        lines = text.split('\n')
        cleaned_lines = []
        
        for line in lines:
            cleaned = self._clean_line(line)
            if cleaned:
                cleaned_lines.append(cleaned)
        
        text = '\n'.join(cleaned_lines)
        
        if self.config.get("normalize_spaces"):
            text = self._normalize_spaces(text)
        
        if self.config.get("fix_special_chars"):
            text = self._fix_special_chars(text)
        
        return text.strip()
    
    def _clean_line(self, line):
        line = line.strip()
        
        if not line:
            return None
        
        if len(line) < 2:
            return None
        
        if self.config.get("remove_headers"):
            for pattern in self.header_patterns:
                if re.match(pattern, line, re.IGNORECASE):
                    return None
        
        if self.config.get("remove_footers"):
            for pattern in self.footer_patterns:
                if re.match(pattern, line, re.IGNORECASE):
                    return None
        
        return line
    
    def _normalize_spaces(self, text):
        # Collapse multiple horizontal spaces but keep newlines
        text = re.sub(r'[ \t]+', ' ', text)
        # Collapse multiple newlines into max 2
        text = re.sub(r'\n{3,}', '\n\n', text)
        return text
    
    def _fix_special_chars(self, text):
        replacements = {
            '¼': '1/4',
            '½': '1/2',
            '¾': '3/4',
            '—': '-',
            '–': '-',
            '"': '"',
            '"': '"',
            ''': "'",
            ''': "'",
            '…': '...',
            '×': '*',
            '÷': '/',
            '√': 'sqrt',
            '°': 'degrees',
        }
        
        for old, new in replacements.items():
            text = text.replace(old, new)
        
        return text
    
    def extract_questions_from_text(self, text):
        questions = []
        
        lines = text.split('\n')
        
        question_pattern = r'Q\s*(\d+)[\.\):\s]'
        option_pattern = r'^([A-D])\)?\s*[.\)]?\s*(.+)'
        
        current_question = None
        
        for line in lines:
            q_match = re.match(question_pattern, line, re.IGNORECASE)
            if q_match:
                if current_question:
                    questions.append(current_question)
                
                current_question = {
                    "id": int(q_match.group(1)),
                    "text": line[q_match.end():].strip(),
                    "options": []
                }
                continue
            
            opt_match = re.match(option_pattern, line.strip())
            if opt_match and current_question:
                label = opt_match.group(1).upper() if opt_match.group(1) else None
                value = opt_match.group(2).strip()
                
                if label and label in ['A', 'B', 'C', 'D']:
                    current_question["options"].append({
                        "l": label,
                        "v": value
                    })
        
        if current_question:
            questions.append(current_question)
        
        return questions

def clean_text(text, config=None):
    cleaner = TextCleaner(config)
    return cleaner.clean(text)

if __name__ == "__main__":
    test_text = """
    Q1. What is 25% of 80?
    A) 20
    B) 25
    C) 30
    D) 35
    
    Q2. If x + y = 10 and x - y = 4, find xy.
    A) 21
    B) 24
    C) 29
    D) 36
    """
    
    cleaner = TextCleaner()
    cleaned = cleaner.clean(test_text)
    print("Cleaned Text:")
    print(cleaned)
    print("\nExtracted Questions:")
    questions = cleaner.extract_questions_from_text(cleaned)
    print(json.dumps(questions, indent=2))