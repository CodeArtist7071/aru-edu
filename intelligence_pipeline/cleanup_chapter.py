import sys
import os

# Add pipeline to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from services.supabase_service import SupabaseService

def cleanup_chapter(chapter_id):
    sb = SupabaseService()
    print(f"--- [CLEANUP] CHAPTER: {chapter_id} ---")
    
    try:
        # 1. Get linked question IDs
        print("[1/4] Retrieving linked Question IDs...")
        q_res = sb.supabase.table("questions").select("id").eq("chapter_id", chapter_id).execute()
        q_ids = [q['id'] for q in q_res.data]
        
        # 2. Delete Question Explanations
        if q_ids:
            print(f"  Deleting {len(q_ids)} Question Explanations...")
            sb.supabase.table("question_explanations").delete().in_("question_id", q_ids).execute()
            
        # 3. Delete Questions
        print(f"  Deleting {len(q_ids)} Questions...")
        sb.supabase.table("questions").delete().eq("chapter_id", chapter_id).execute()
        
        # 4. Delete Knowledge Units
        print("[2/4] Deleting Knowledge Units...")
        sb.supabase.table("knowledge_units").delete().eq("chapter_id", chapter_id).execute()
        
        # 5. Finally, Delete the Chapter
        print("[3/4] Deleting Chapter Record...")
        sb.supabase.table("chapters").delete().eq("id", chapter_id).execute()
        
        print("\n[SUCCESS] Chapter and all linked data have been removed.")
        
    except Exception as e:
        print(f"\n[CRITICAL ERROR] Cleanup failed: {e}")

if __name__ == "__main__":
    # Computer Awareness Chapter ID
    cleanup_chapter("6461fa1e-4494-4b82-9cdb-b7ae1bcb9a61")
