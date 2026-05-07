import os
import json
from services.supabase_service import SupabaseService
from services.ai_engine import AIEngine
import config

def backfill():
    sb = SupabaseService()
    ai = AIEngine(session_id="backfill_session")
    
    kb_dir = config.KB_DIR
    files = [f for f in os.listdir(kb_dir) if f.endswith(".json")]
    
    print(f"[BACKFILL] Found {len(files)} KB files to process.")
    
    for filename in files:
        filepath = os.path.join(kb_dir, filename)
        print(f"\n[BACKFILL] Processing {filename}...")
        
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        metadata = data.get("metadata", {})
        kb = data.get("kb", {})
        
        subject_id = metadata.get("subject_id")
        chapter_id = metadata.get("chapter_id")
        
        def process_units(units, unit_type):
            for unit in units:
                content = unit.get("statement") or unit.get("meaning") or unit.get("logic")
                concept = unit.get("concept") or unit.get("term") or unit.get("name")
                
                if not content: continue
                
                print(f"  > Embedding {unit_type}: {concept}")
                emb = ai.get_embedding(f"{concept}: {content}")
                if not emb: continue
                
                # Check for existing
                existing = sb.find_similar_kb_unit(emb)
                if existing:
                    print(f"    - Skipped (Duplicate found)")
                    continue
                
                sb.save_knowledge_unit(
                    unit_type=unit_type,
                    concept=concept,
                    content=content,
                    subject_id=subject_id,
                    chapter_id=chapter_id,
                    embedding=emb
                )
                print(f"    - Manifested in Database")

        process_units(kb.get("facts", []), "fact")
        process_units(kb.get("definitions", []), "definition")
        process_units(kb.get("formulas", []), "formula")

    print(f"\n[BACKFILL] Complete!")

if __name__ == "__main__":
    backfill()
