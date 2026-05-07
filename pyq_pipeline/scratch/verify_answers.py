import os
import sys
sys.path.append(os.path.abspath('.'))
from agents.pusher import SupabasePusher

sb = SupabasePusher()

# Fetch 10 questions with their correct answers
res = sb.supabase.table("py_questions") \
    .select("question, options, correct_answer, question_number") \
    .order("created_at", desc=True) \
    .limit(10) \
    .execute()

questions = res.data
print(f"Fetched {len(questions)} questions from database.\n")
print("=" * 80)

for q in questions:
    q_num = q.get("question_number")
    q_text = q.get("question", "")
    options = q.get("options", {})
    correct = q.get("correct_answer", "?")
    
    # Get the text of the correct option
    correct_option_text = options.get(correct, "OPTION NOT FOUND")
    
    print(f"Q{q_num}: {q_text[:80]}...")
    print(f"  A: {options.get('A', '')}")
    print(f"  B: {options.get('B', '')}")
    print(f"  C: {options.get('C', '')}")
    print(f"  D: {options.get('D', '')}")
    print(f"  --> CORRECT ANSWER: [{correct}] = {correct_option_text}")
    print(f"  STATUS: {'[VALID]' if correct in ['A','B','C','D'] else '[MISSING ANSWER]'}")
    print()
