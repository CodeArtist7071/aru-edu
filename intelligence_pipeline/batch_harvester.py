import subprocess
import time
import os
import argparse

def run_harvest(pdf_path, offsets, count_per_offset):
    print(f"--- [BATCH HARVESTER] STARTING FULL SWEEP ---")
    print(f"Target PDF: {pdf_path}")
    print(f"Offsets: {offsets}")
    print(f"{'='*50}\n")

    for offset in offsets:
        print(f"\n🚀 [SWEEP] Targeting {int(offset*100)}% Depth...")
        
        # Command construction
        cmd = [
            "python", "smart_pipeline.py", 
            pdf_path, 
            "--count", str(count_per_offset), 
            "--offset", str(offset)
        ]
        
        try:
            # Execute the smart_pipeline as a subprocess
            # This ensures each run has a fresh memory state and isolated logs
            process = subprocess.run(cmd, check=True)
            print(f"✅ [SUCCESS] Block at {int(offset*100)}% completed.")
        except subprocess.CalledProcessError as e:
            print(f"❌ [ERROR] Batch failed at offset {offset}: {e}")
        
        # Throttle to avoid rate limits
        print("⏳ Waiting 10s for API cooldown...")
        time.sleep(10)

    print("\n" + "="*50)
    print("🎯 BATCH HARVEST COMPLETE")
    print("="*50)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", help="Path to PDF file")
    parser.add_argument("--count", type=int, default=10, help="Questions per chapter")
    parser.add_argument("--full", action="store_true", help="Perform a maximum sweep (10 jumps)")
    args = parser.parse_args()

    # Define our 'Discovery Path'
    if args.full:
        # Maximum Coverage (Every 10%)
        target_offsets = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
    else:
        # Standard Coverage (Beginning, Quarter, Mid, End)
        target_offsets = [0.0, 0.25, 0.5, 0.75, 0.95]

    if os.path.exists(args.pdf):
        run_harvest(args.pdf, target_offsets, args.count)
    else:
        print(f"Error: File not found: {args.pdf}")
