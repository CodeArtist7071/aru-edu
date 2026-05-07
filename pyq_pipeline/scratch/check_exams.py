"""
The correct solution is: for questions that DON'T have a key in the answer key pages,
we should NOT map a wrong answer. We should leave the answer as null/empty.

Only map when we are 100% certain the exam+year+question_number matches.
"""
import json
with open('storage/extracted/maths-e-book-2-0-by-aditya-ranjan-sir_compress/extracted_questions.json', 'r') as f:
    data = json.load(f)

# Check which questions have pdf_q_num and which exam they are from
print("Questions by exam:")
from collections import Counter
exams = Counter()
for q in data['questions']:
    exams[(q.get('exam','?'), q.get('exam_year','?'))] += 1

for (exam, year), count in sorted(exams.items()):
    print(f"  {exam} {year}: {count} questions")

print()
print("Answer key only has: SSC CHSL 2020, SSC CGL 2020, SSC MTS 2020, CHSL 2021, CGL MAINS 2021")
print("So 2022 questions and newer ones will NOT have a key - they need to be left as '?'")
