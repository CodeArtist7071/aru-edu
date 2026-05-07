from supabase import create_client
from config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
resp = supabase.table('questions').select('id, question_explanations(explanation_1)').limit(1).execute()
print(resp.data)
