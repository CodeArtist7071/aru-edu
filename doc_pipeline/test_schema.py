import os
import sys

# Add the directory containing config.py conceptually if needed, but it's in the same dir.
from config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
from supabase import create_client

supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

tables = ['questions', 'question_explanations', 'question_correct_explanations']

for table in tables:
    print(f"--- Table: {table} ---")
    try:
        res = supabase.table(table).select("*").limit(1).execute()
        if res.data:
            print("Columns:", list(res.data[0].keys()))
        else:
            print("Table is empty or columns hidden, attempting to insert a fake row to see error schema.")
            try:
                supabase.table(table).insert({}).execute()
            except Exception as e:
                print("Error details:", getattr(e, 'message', str(e)))
    except Exception as e:
        print(f"Error accessing {table}: {e}")
