
from supabase import create_client
import sys
import os

# Add path to find pyq_config
sys.path.append(os.path.join(os.getcwd(), "pyq_pipeline"))
from pyq_config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

def check_questions(pdf_id, filename):
    supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    
    # 1. Check PDF record
    pdf_res = supabase.table("pdf_documents").select("*").eq("file_name", filename).execute()
    print(f"PDF Record for '{filename}': {pdf_res.data}")
    
    # 2. Check count for provided pdf_id
    res = supabase.table("py_questions").select("id", count="exact").eq("pdf_id", pdf_id).execute()
    print(f"Questions found for PDF ID {pdf_id}: {res.count if hasattr(res, 'count') else len(res.data)}")
    
    # 3. Check total questions
    total_res = supabase.table("py_questions").select("id", count="exact").execute()
    print(f"Total questions in 'py_questions' table: {total_res.count if hasattr(total_res, 'count') else 'N/A'}")

    # 4. Show last 5 questions to see what's actually in there
    recent_res = supabase.table("py_questions").select("id, question, pdf_id, created_at").order("created_at", desc=True).limit(5).execute()
    print("\nRecent Questions in DB:")
    for q in recent_res.data:
        print(f"- ID: {q['id']}, PDF_ID: {q['pdf_id']}, Created: {q['created_at']}, Text: {q['question'][:50]}...")

if __name__ == "__main__":
    pdf_id = "324295b5-d239-4455-94a9-f936a136d1ed"
    filename = "maths-e-book-2-0-by-aditya-ranjan-sir_compress.pdf"
    check_questions(pdf_id, filename)
