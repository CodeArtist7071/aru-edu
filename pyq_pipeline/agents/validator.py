import json
import re
from difflib import SequenceMatcher

class QuestionValidator:
    def __init__(self, config=None):
        self.config = config or {
            "min_question_length": 5,
            "min_options": 2,
            "require_answer": False,
            "confidence_thresholds": {
                "accept": 0.5,
                "reprocess": 0.3,
                "flag": 0.1
            }
        }
    
    def validate_questions(self, questions):
        validated = []
        errors = []
        
        for q in questions:
            result = self.validate_question(q)
            if result["valid"]:
                validated.append(result["question"])
            else:
                errors.append(result["error"])
        
        return {
            "valid_questions": validated,
            "errors": errors,
            "summary": {
                "total": len(questions),
                "valid": len(validated),
                "invalid": len(errors)
            }
        }
    
    def validate_question(self, question):
        errors = []
        confidence = 1.0
        
        q_id = question.get("id")
        q_text = question.get("q", "")
        opts = question.get("opt") or []
        ans = question.get("ans", "")
        
        if isinstance(opts, dict):
            normalized_opts = []
            for label, value in opts.items():
                if label.upper() in ["A", "B", "C", "D"]:
                    normalized_opts.append({"l": label.upper(), "v": str(value)})
            opts = normalized_opts
        
        if not q_text or len(q_text.strip()) < self.config.get("min_question_length", 5):
            errors.append("Question text too short")
            confidence *= 0.8
        
        valid_options = []
        for o in opts:
            if isinstance(o, dict):
                v = o.get("v", o.get("value", ""))
            else:
                v = str(o)
            if v and v.strip():
                l = o.get("l", o.get("label", ""))
                valid_option = {"l": str(l).upper() if l else "", "v": v.strip()}
                valid_options.append(valid_option)
        
        if len(valid_options) < self.config.get("min_options", 2):
            errors.append(f"Insufficient options: {len(valid_options)}")
            confidence *= 0.7
        
        if self.config.get("require_answer"):
            if not ans or ans not in ["A", "B", "C", "D"]:
                errors.append("Missing or invalid answer")
                confidence *= 0.8
        
        if ans and valid_options:
            ans_found = any(o.get("l", "").upper() == ans.upper() for o in valid_options)
            if not ans_found:
                errors.append(f"Answer '{ans}' not in options")
                confidence *= 0.5
        
        if not q_id:
            errors.append("Missing question ID")
            confidence *= 0.9
        
        duplicate = self._check_duplicate(question, validated if 'validated' in locals() else [])
        if duplicate:
            errors.append("Duplicate question detected")
            confidence *= 0.3
        
        question["confidence"] = round(confidence, 2)
        
        valid = len(errors) == 0 and confidence >= self.config.get("confidence_thresholds", {}).get("flag", 0.7)
        
        return {
            "valid": valid,
            "question": question if valid else None,
            "error": {
                "question": question,
                "errors": errors,
                "confidence": confidence
            } if not valid else None
        }
    
    def _check_duplicate(self, question, existing):
        if not existing:
            return False
        
        q_text = normalize_text(question.get("q", ""))
        
        for eq in existing:
            eq_text = normalize_text(eq.get("q", ""))
            if similarity(q_text, eq_text) > 0.95:
                return True
        
        return False
    
    def score_question_quality(self, question):
        scores = {}
        
        q_text = question.get("q", "")
        opts = question.get("opt", [])
        ans = question.get("ans", "")
        
        scores["text_quality"] = self._score_text(q_text)
        scores["options_quality"] = self._score_options(opts)
        scores["answer_quality"] = self._score_answer(ans, opts)
        scores["consistency"] = self._score_consistency(question)
        
        total = sum(scores.values()) / len(scores)
        scores["overall"] = round(total, 2)
        
        return scores
    
    def _score_text(self, text):
        if not text:
            return 0.0
        
        score = 1.0
        
        if len(text) < 20:
            score *= 0.5
        elif len(text) < 50:
            score *= 0.8
        
        if re.search(r'[?]$', text.strip()):
            score *= 1.1
        
        math_chars = re.findall(r'[\d+\-*/=%<>]', text)
        if len(math_chars) > len(text) * 0.3:
            score *= 1.05
        
        return min(1.0, score)
    
    def _score_options(self, opts):
        if not opts:
            return 0.0
        
        scores = []
        for opt in opts:
            v = opt.get("v", "")
            if v and len(v) > 0:
                scores.append(1.0)
            else:
                scores.append(0.0)
        
        if not scores:
            return 0.0
        
        return sum(scores) / len(scores)
    
    def _score_answer(self, ans, opts):
        if not ans or ans not in ["A", "B", "C", "D"]:
            return 0.0
        
        valid_opts = [o for o in opts if o.get("v", "").strip()]
        ans_in_opts = any(o.get("l") == ans for o in valid_opts)
        
        return 1.0 if ans_in_opts else 0.0
    
    def _score_consistency(self, question):
        q_text = question.get("q", "").lower()
        ans = question.get("ans", "").upper()
        opts = question.get("opt", [])
        
        for opt in opts:
            opt_text = opt.get("v", "").lower()
            opt_label = opt.get("l", "").upper()
            
            if opt_label == ans:
                if len(opt_text) > 5:
                    return 0.8
                return 0.5
        
        return 0.3
    
    def get_threshold_decision(self, confidence):
        thresholds = self.config.get("confidence_thresholds", {})
        
        if confidence >= thresholds.get("accept", 0.9):
            return "accept"
        elif confidence >= thresholds.get("reprocess", 0.7):
            return "reprocess"
        else:
            return "flag"

def validate_questions(questions, config=None):
    validator = QuestionValidator(config)
    return validator.validate_questions(questions)

def score_quality(question, config=None):
    validator = QuestionValidator(config)
    return validator.score_question_quality(question)

if __name__ == "__main__":
    test_questions = [
        {
            "id": 1,
            "q": "What is 25% of 80?",
            "opt": [{"l": "A", "v": "20"}, {"l": "B", "v": "25"}, {"l": "C", "v": "30"}, {"l": "D", "v": "35"}],
            "ans": "A"
        },
        {
            "id": 2,
            "q": "Test question",
            "opt": [{"l": "A", "v": ""}, {"l": "B", "v": "Option B"}],
            "ans": "B"
        }
    ]
    
    validator = QuestionValidator()
    result = validator.validate_questions(test_questions)
    
    print("Validation Result:")
    print(json.dumps(result, indent=2))