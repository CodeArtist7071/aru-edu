
import os
import sys
from intelligence_pipeline.services.supabase_service import SupabaseService

def find_offset(pdf_name, search_term):
    sb = SupabaseService()
    print(f"Fetching content for: {pdf_name}")
    content = sb.get_pdf_content(pdf_name)
    
    if not content:
        print(f"Error: No content found for {pdf_name} in Supabase.")
        return

    total_len = len(content)
    print(f"Total Length: {total_len} characters.")

    # Search Case-Insensitive
    index = content.lower().find(search_term.lower())
    
    if index == -1:
        print(f"Error: '{search_term}' not found in the text.")
        # Try a substring search for common keywords
        if " " in search_term:
            parts = search_term.split()
            for part in parts:
                if len(part) > 3:
                    idx = content.lower().find(part.lower())
                    if idx != -1:
                        print(f"Found partial match '{part}' at index {idx}")
                        offset = idx / total_len
                        print(f"Approximate Offset: {offset:.4f} ({int(offset*100)}%)")
                        return
        return

    offset = index / total_len
    print(f"\nSUCCESS!")
    print(f"Search Term: '{search_term}'")
    print(f"Found at Index: {index}")
    print(f"Calculated Offset: {offset:.4f} ({int(offset*100)}%)")
    
    # Show context
    start = max(0, index - 50)
    end = min(total_len, index + 300)
    print(f"\nContext:\n... {content[start:end]} ...")

if __name__ == "__main__":
    pdf_name = "Arihant Computer Awareness.pdf"
    search_term = "Database Concepts"
    find_offset(pdf_name, search_term)
