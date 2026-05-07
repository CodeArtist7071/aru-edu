import os
import re

class SolutionDetector:
    def __init__(self):
        self.solution_patterns = [
            r'solution\s*[:\-]',
            r'answer\s*[:\-]',
            r'=>',
            r'∴',
            r'because\s+',
            r'therefore\s+',
            r'hence\s+',
            r'step\s*\d+[\.\):]',
            r'\d+\)\s*[A-Z]',
            r'correct\s*ans',
            r'given\s+solution',
        ]
        
        self.question_patterns = [
            r'^Q\s*\d+',
            r'^\d+\.\s*',
            r'question\s*\d+',
            r'\([A-D]\)',
            r'^A\)',
            r'^B\)',
            r'^C\)',
            r'^D\)',
        ]
        
        self.section_patterns = [
            (r'solution', 'solution'),
            (r'answer\s*key', 'answer_key'),
            (r'hint', 'hint'),
            (r'explanation', 'explanation'),
            (r'working', 'working'),
        ]
    
    def detect_page_type(self, text):
        if not text:
            return {"type": "unknown", "confidence": 0}
        
        text_lower = text.lower()
        
        score_solution = 0
        score_question = 0
        
        for pattern in self.solution_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            score_solution += len(matches)
        
        for pattern in self.question_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            score_question += len(matches)
        
        has_equations = bool(re.findall(r'[=+\-*/%√]', text))
        if has_equations:
            if score_solution > score_question:
                score_solution += 2
        
        section = None
        for pattern, label in self.section_patterns:
            if re.search(pattern, text_lower):
                section = label
                break
        
        if score_question >= 2 and score_question > score_solution:
            return {
                "type": "question",
                "confidence": min(1.0, score_question / 5),
                "section": section,
                "scores": {"question": score_question, "solution": score_solution}
            }
        elif score_solution >= 2 and score_solution > score_question:
            return {
                "type": "solution",
                "confidence": min(1.0, score_solution / 5),
                "section": section,
                "scores": {"question": score_question, "solution": score_solution}
            }
        elif score_question > 0:
            return {
                "type": "mixed",
                "confidence": 0.5,
                "section": section,
                "scores": {"question": score_question, "solution": score_solution}
            }
        else:
            return {
                "type": "unknown",
                "confidence": 0.1,
                "section": section,
                "scores": {"question": score_question, "solution": score_solution}
            }
    
    def extract_solutions(self, text):
        solutions = []
        
        lines = text.split('\n')
        
        current_num = None
        current_solution = []
        
        for line in lines:
            num_match = re.match(r'(\d+)[.\s]*\)', line.strip())
            if num_match:
                if current_num and current_solution:
                    solutions.append({
                        "question_num": current_num,
                        "solution": ' '.join(current_solution)
                    })
                current_num = int(num_match.group(1))
                current_solution = [line.strip()]
            elif current_num:
                if re.search(r'[=✔✓]', line):
                    current_solution.append(line.strip())
                elif re.search(r'[∴=>]', line):
                    current_solution.append(line.strip())
                else:
                    current_solution.append(line.strip())
        
        if current_num and current_solution:
            solutions.append({
                "question_num": current_num,
                "solution": ' '.join(current_solution)
            })
        
        return solutions
    
    def extract_qa_pairs(self, text):
        pairs = []
        
        q_pattern = r'Q\s*(\d+)[\.\):\s]*(.+)'
        opt_pattern = r'^([A-D])\s*[\.\)]?\s*(.+?)(?=\n|$)'
        
        lines = text.split('\n')
        
        current_q = None
        current_opts = []
        current_ans = None
        
        for line in lines:
            q_match = re.match(q_pattern, line, re.IGNORECASE)
            if q_match:
                if current_q is not None:
                    pairs.append({
                        "num": current_q,
                        "options": current_opts,
                        "answer": current_ans
                    })
                current_q = int(q_match.group(1))
                current_opts = []
                current_ans = None
                continue
            
            opt_match = re.match(opt_pattern, line.strip(), re.IGNORECASE)
            if opt_match and current_q:
                label = opt_match.group(1).upper()
                value = opt_match.group(2).strip()
                current_opts.append({"l": label, "v": value})
                
                if label == current_ans:
                    current_ans = label
            
            ans_match = re.match(r'(?:ans|answer)[:\s]*([A-D])', line, re.IGNORECASE)
            if ans_match and current_q:
                current_ans = ans_match.group(1).upper()
        
        if current_q is not None:
            pairs.append({
                "num": current_q,
                "options": current_opts,
                "answer": current_ans
            })
        
        return pairs

def detect_page_type(text):
    detector = SolutionDetector()
    return detector.detect_page_type(text)

def extract_solutions(text):
    detector = SolutionDetector()
    return detector.extract_solutions(text)

def extract_qa_pairs(text):
    detector = SolutionDetector()
    return detector.extract_qa_pairs(text)

if __name__ == "__main__":
    test_solution_text = """
    Q1. What is 25% of 80?
    A) 20
    B) 25
    C) 30
    D) 35
    Ans: A
    
    Solution:
    25% of 80 = 25/100 * 80 = 20
    ∴ Answer is 20 (Option A)
    """
    
    test_question_text = """
    Q68. Two successive Discount = 30+10- 30*10/100 = 37%
    Q69. Let M.P. = x
    """
    
    detector = SolutionDetector()
    
    print("Solution Text Detection:")
    print(detector.detect_page_type(test_solution_text))
    print("\nQuestion Text Detection:")
    print(detector.detect_page_type(test_question_text))