import subprocess
import time
import sys
import os

# Add pipeline to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from services.supabase_service import SupabaseService

# CONFIGURATION
SUBJECT_ID = "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00" # Computer Awareness
PDF_PATH = "pdfs/Arihant Computer Awareness.pdf"
GOAL_PER_CHAPTER = 500
BATCH_SIZE = 10

# CHAPTER-TO-OFFSET MAP (Based on Arihant Structure)
# Note: These are estimated offsets to land in the 'Sweet Spot' of each chapter
OFFSET_MAP = {
    "Introduction to Computer": 0.0,
    "Computer Fundamentals": 0.05,
    "Hardware & Software": 0.15,
    "Operating System": 0.25,
    "MS Office (Word, Excel, PowerPoint)": 0.35,
    "MS-Word": 0.40,
    "MS-Excel": 0.45,
    "Internet & Networking": 0.55,
    "Database Concepts": 0.70,
    "Database & Programming Basics": 0.75,
    "Computer Security": 0.85,
    "Digital Literacy": 0.95,
    "Miscellaneous": 0.98
}

def get_chapter_counts(sb):
    ch_res = sb.supabase.table('chapters').select('id, name').eq('subject_id', SUBJECT_ID).execute()
    counts = []
    for c in ch_res.data:
        q_count = sb.supabase.table('questions').select('id', count='exact').eq('chapter_id', c['id']).execute().count
        counts.append({
            "id": c["id"],
            "name": c["name"],
            "count": q_count,
            "offset": OFFSET_MAP.get(c["name"], 0.5) # Default to middle if unknown
        })
    # Sort by count so we always process the emptiest chapter first
    return sorted(counts, key=lambda x: x['count'])

# SESSION TRACKER: Keep track of our 'Walk' through the PDF per chapter
CHAPTER_WALK = {} 

def run_batch():
    sb = SupabaseService()
    print(f"\n{'='*60}")
    print(f"🌍 GLOBAL MASTERY HARVESTER (TOKEN SHIELD ENABLED)")
    print(f"Goal: {GOAL_PER_CHAPTER} questions per chapter")
    print(f"{'='*60}")

    while True:
        # 1. Get Live Stats
        stats = get_chapter_counts(sb)
        
        # 2. Calculate Global Progress
        total_current = sum([s['count'] for s in stats])
        total_goal = len(stats) * GOAL_PER_CHAPTER
        progress_pct = (total_current / total_goal) * 100
        
        print(f"\n📊 --- MISSION DASHBOARD ---")
        print(f"📈 TOTAL PROGRESS: {total_current} / {total_goal} questions ({progress_pct:.2f}%)")
        print(f"🗂️ CHAPTER BREAKDOWN:")
        for s in stats:
            status = "✅ DONE" if s['count'] >= GOAL_PER_CHAPTER else "🚜 IN PROGRESS"
            print(f"   - {s[ 'name' ]: <40} | {s[ 'count' ]: >3}/{GOAL_PER_CHAPTER} | {status}")
        
        # 3. Pick the target chapter
        target = None
        for s in stats:
            if s['count'] < GOAL_PER_CHAPTER:
                # Check if this chapter is exhausted/plateaued
                if CHAPTER_WALK.get(s['name'], {}).get('exhausted'):
                    continue
                target = s
                break
        
        if not target:
            print("\n🏁 MISSION ACCOMPLISHED! All chapters reached 500 questions.")
            break

        # 🚀 WINDOW WALKING: Advance the offset so we don't read the same page twice
        base_offset = target['offset']
        session_step = CHAPTER_WALK.get(target['name'], {}).get('step', 0)
        current_offset = min(0.98, base_offset + (session_step * 0.025)) # Move 2.5% deeper each batch

        print(f"\n🚀 [NEXT TARGET] Starting Batch for: {target['name']}")
        print(f"   🚶 Walking Chapter... Current Depth: {int(current_offset*100)}% (Step {session_step})")

        # 4. Execute Smart Pipeline for 10 questions
        cmd = [
            "python", "smart_pipeline.py",
            PDF_PATH,
            "--count", str(BATCH_SIZE),
            "--offset", f"{current_offset:.3f}"
        ]
        
        try:
            start_time = time.time()
            result = subprocess.run(cmd, capture_output=True, text=True)
            output = result.stdout
            print(output)
            
            # 5. PLATEAU DETECTION: If we pushed 0 questions, we might have hit a repeat wall
            if "[SUCCESS] 0" in output or "No questions passed" in output:
                print(f"⚠️ [PLATEAU] No fresh content found at {int(current_offset*100)}%. Advancing stride...")
                
                # Advance the step anyway to try a different block next time
                CHAPTER_WALK[target['name']] = {
                    'step': session_step + 1,
                    'exhausted': session_step > 5 # Mark as exhausted if it fails 5 times in a row
                }
            else:
                # Successfully found questions! Advance to next logical page for next time
                CHAPTER_WALK[target['name']] = {'step': session_step + 1}
                print(f"✨ [CHECKPOINT] Successfully updated '{target['name']}'. Window advanced.")
                
        except Exception as e:
            print(f"❌ [WARNING] Pipeline run interrupted: {e}")

        # 6. API Cooldown
        print("\n⏳ Cooldown (10s)...")
        time.sleep(10)

if __name__ == "__main__":
    if os.path.exists(PDF_PATH):
        run_batch()
    else:
        print(f"Error: PDF not found at {PDF_PATH}")
