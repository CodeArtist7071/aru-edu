import os
import sys
import json
import argparse
from datetime import datetime

# Setup paths - Add project root
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(ROOT_DIR)

from core.full_pipeline import FullPipeline
from agents.corrector import QuestionCorrector
from agents.pusher import SupabasePusher

class MasterOrchestrator:
    def __init__(self):
        print(f"\n{'='*60}")
        print(f"INTELLIGENT FLOW ORCHESTRATOR")
        print(f"{'='*60}")
        self.extractor = FullPipeline()
        self.corrector = QuestionCorrector()
        self.sb = SupabasePusher()

    def run_sequential_flow(self, pdf_path, start_page, end_page):
        """
        Agent 1: Extraction -> Agent 2: Correction -> Agent 3: Sync
        """
        # 1. EXTRACTION AGENT
        print(f"\n[AGENT 1] Starting Extraction for pages {start_page}-{end_page}...")
        # We run extraction but skip the internal DB push so we can correct first
        extraction_result = self.extractor.run(
            pdf_path, 
            start_page=start_page, 
            end_page=end_page, 
            push_to_db=False
        )
        
        if not extraction_result or not extraction_result.get('questions'):
            print("[ERROR] Extraction failed or found no questions. Flow aborted.")
            return
            
        questions = extraction_result['questions']
        print(f"[AGENT 1] COMPLETED. Found {len(questions)} questions.")

        # 2. CORRECTION AGENT (Math Verification)
        print(f"\n[AGENT 2] Starting Mathematical Verification & Correction...")
        verified_questions = self.corrector.batch_correct_local(questions)
        print(f"[AGENT 2] COMPLETED. Verification finished.")

        # 3. SYNC AGENT (Supabase Push)
        print(f"\n[AGENT 3] Syncing Clean Data to Supabase...")
        payload = self.extractor._prepare_payload(verified_questions)
        success = self.sb.push_py_questions(payload)
        
        if success:
            print(f"[AGENT 3] SUCCESS. {len(payload)} verified questions pushed to database.")
        else:
            print(f"[AGENT 3] FAILED to sync data.")

        print(f"\n{'='*60}")
        print(f"FLOW COMPLETE")
        print(f"{'='*60}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Master Intelligent Flow for PYQ Pipeline")
    parser.add_argument("--pdf", required=True, help="Path to PDF file")
    parser.add_argument("--start", type=int, default=1, help="Start page")
    parser.add_argument("--end", type=int, default=5, help="End page")
    
    args = parser.parse_args()
    
    flow = MasterOrchestrator()
    flow.run_sequential_flow(args.pdf, args.start, args.end)
