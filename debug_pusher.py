import os
import sys
import json
from supabase import create_client

# Load config
sys.path.append(os.path.abspath("intelligence_pipeline"))
from config import SUPABASE_URL, SUPABASE_KEY

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def check_table(t_name):
    print(f"\n--- SCANNING {t_name.upper()} ---")
    try:
        # Intentional error to force schema reveal
        supabase.table(t_name).insert({"non_existent_column_reveal": "test"}).execute()
    except Exception as e:
        msg = getattr(e, 'message', str(e))
        print(f"Schema Result for {t_name}:")
        print(msg)

if __name__ == "__main__":
    check_table("pdf_documents")
    check_table("py_questions")
