import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.path.append('.')
from services.supabase_push import SupabasePusher
sb = SupabasePusher()
res = sb.supabase.table('py_questions').select('id, question, correct_answer, page_number, question_number').order('created_at', desc=True).limit(5).execute()
print('Recent questions in database:')
for r in res.data:
    q = str(r.get('question', ''))[:40]
    print(f"  Q{r['question_number']} Page {r['page_number']}: {q}... Ans: {r['correct_answer']}")