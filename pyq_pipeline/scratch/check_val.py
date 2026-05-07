import json
from agents.validator import QuestionValidator
import re

content = list(json.load(open('storage/ai_cache.json')).values())[-1]
content = re.sub(r'^```json\s*', '', content)
content = re.sub(r'\s*```$', '', content)
questions = json.loads(content)
print(f'Parsed {len(questions)} questions from cache.')
validator = QuestionValidator()
res = validator.validate_questions(questions)
print(f'Valid: {len(res.get("valid_questions", []))}')
print('Invalid:', len(res.get('errors', [])))
if res.get('errors'):
    for idx, inv in enumerate(res['errors']):
        print(f"Error {idx}:", inv.get('errors'))
