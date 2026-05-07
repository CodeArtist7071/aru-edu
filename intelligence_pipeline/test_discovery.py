import sys
import os

# Add pipeline to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from services.supabase_service import SupabaseService
import re

def test_computer_priority():
    print("--- [TEST] COMPUTER AWARENESS DISCOVERY ---")
    
    # 1. Title Mapping Check (from smart_pipeline logic)
    test_titles = [
        "OSSC_Computer_Awareness_2024.pdf",
        "SSC_CHSL_ICT_NOTES.pdf",
        "Computer_Fundamentals_V2.pdf",
        "General_Knowledge_Mock.pdf"
    ]
    
    COMPUTER_ID = "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00"
    
    for title in test_titles:
        title_clean = re.sub(r'[\d_\-\.]', ' ', title).lower()
        print(f"\nProcessing: {title}")
        
        # Priority Logic Check
        matched_subject_id = None
        if "computer awareness" in title_clean:
            matched_subject_id = COMPUTER_ID
            print("  [PHASE 0] Matched Priority Phrase: Computer Awareness")
            
        # Alias Logic Check (Supabase Service)
        sb = SupabaseService()
        resolved_id = sb.get_subject_id(title_clean)
        
        if resolved_id == COMPUTER_ID:
            print(f"  [SUCCESS] Resolved to Computer Awareness (ID: {COMPUTER_ID})")
        else:
            print(f"  [RESULT] Resolved to OTHER ID: {resolved_id}")

if __name__ == "__main__":
    test_computer_priority()
