import json
with open('storage/extracted/maths-e-book-2-0-by-aditya-ranjan-sir_compress/extracted_questions.json', 'r') as f:
    data = json.load(f)
for q in data['questions'][:5]:
    pdf_q_num = q.get('pdf_q_num')
    exam = q.get('exam')
    year = q.get('exam_year')
    text = q['q'][:50]
    print(f"pdf_q_num={pdf_q_num}, exam={exam}, year={year}")
    print(f"  Q: {text}")
    print()
