from supabase import create_client
import sys
import os
import json

# Add parent path to find config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config.settings import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

def fetch_first_questions():
    supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    
    # Try py_questions first as it's in the code
    print("Checking py_questions table...")
    try:
        res = supabase.table("py_questions").select("*").limit(5).execute()
        if res.data:
            print(f"Found {len(res.data)} rows in py_questions:")
            print(json.dumps(res.data, indent=2))
        else:
            print("py_questions table is empty.")
    except Exception as e:
        print(f"Error fetching from py_questions: {e}")

    # Also check pyq_questions just in case
    print("\nChecking pyq_questions table...")
    try:
        res = supabase.table("pyq_questions").select("*").limit(5).execute()
        if res.data:
            print(f"Found {len(res.data)} rows in pyq_questions:")
            print(json.dumps(res.data, indent=2))
        else:
            print("pyq_questions table is empty.")
    except Exception as e:
        print(f"Error fetching from pyq_questions: {e}")

if __name__ == "__main__":
    fetch_first_questions()
