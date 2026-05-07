
import os
import sys
import re
from services.supabase_service import SupabaseService

def find_offset(pdf_name, search_term):
    sb = SupabaseService()
    print(f"Fetching content for: {pdf_name}")
    content = sb.get_pdf_content(pdf_name)
    
    if not content:
        print(f"Error: No content found for {pdf_name} in Supabase.")
        return

    total_len = len(content)
    print(f"Total Length: {total_len} characters.")

    # Search Case-Insensitive, multiple matches
    matches = [m.start() for m in re.finditer(re.escape(search_term), content, re.IGNORECASE)]
    
    if not matches:
        print(f"Error: '{search_term}' not found in the text.")
        return

    print(f"Found {len(matches)} occurrences of '{search_term}'")
    
    # We expect the first one to be TOC, the second one to be the chapter start
    # or the one with the highest index (if it's a footer/header)
    # But usually the second one is the title.
    
    for i, index in enumerate(matches):
        offset = index / total_len
        print(f"\nOccurrence {i+1}:")
        print(f"Index: {index} | Offset: {offset:.4f} ({int(offset*100)}%)")
        
        # Show context
        start = max(0, index - 50)
        end = min(total_len, index + 200)
        print(f"Context: ... {content[start:end].replace('\n', ' ')} ...")

if __name__ == "__main__":
    pdf_name = "Arihant Computer Awareness.pdf"
    search_term = "Database Concepts"
    find_offset(pdf_name, search_term)
