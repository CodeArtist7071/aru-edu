import json
import sys
sys.path.append('.')
from services.ai_engine import AIEngine
from services.solution_detector import SolutionDetector
from services.validator import QuestionValidator

ai = AIEngine()
sd = SolutionDetector()
validator = QuestionValidator()

with open('text_extracted/Rakesh Yadav Maths 7300 Book PDF/page_0081.txt', 'r', encoding='utf-8') as f:
    text = f.read()

page_type = sd.detect_page_type(text)
print('Page Type:', page_type)

prompt = 'Return JSON array: [{"id":1,"q":"What is 25% of 80?","opt":{"A":"20","B":"25","C":"30","D":"35"},"ans":"A"}]'

raw = ai.generate(prompt, temperature=0.1, json_mode=True)
print('RAW:', raw[:500])

questions = json.loads(raw)
for q in questions:
    result = validator.validate_question(q)
    print(f"Valid: {result['valid']}")