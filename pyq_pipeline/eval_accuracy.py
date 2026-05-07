import os
import sys
import json
import argparse
import re
from difflib import SequenceMatcher
from datetime import datetime
from collections import defaultdict

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

try:
    from services.supabase_push import SupabasePusher
    HAS_SUPABASE = True
except:
    HAS_SUPABASE = False
    print("[WARNING] Supabase not available. Use --extracted option.")

GROUND_TRUTH_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ground_truth")
ERRORS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "errors")
RESULTS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "eval_results")

def similarity(a, b):
    if not a or not b:
        return 0.0
    return SequenceMatcher(None, a.lower().strip(), b.lower().strip()).ratio()

def normalize_text(text):
    if not text:
        return ""
    text = text.lower().strip()
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'[^\w\s]', '', text)
    return text

def fuzzy_match_questions(extracted_qs, ground_truth_qs, threshold=0.7):
    matches = []
    used_gt = set()
    
    for eq in extracted_qs:
        eq_norm = normalize_text(eq.get("question", ""))
        best_match = None
        best_score = 0
        
        for i, gq in enumerate(ground_truth_qs):
            if i in used_gt:
                continue
            
            gq_norm = normalize_text(gq.get("question", ""))
            score = similarity(eq_norm, gq_norm)
            
            if score > best_score and score >= threshold:
                best_score = score
                best_match = (i, gq, score)
        
        if best_match:
            used_gt.add(best_match[0])
            matches.append({
                "extracted": eq,
                "ground_truth": best_match[1],
                "match_score": best_match[2]
            })
        else:
            matches.append({
                "extracted": eq,
                "ground_truth": None,
                "match_score": 0
            })
    
    return matches

def compare_options(extracted_opts, gt_opts):
    if not extracted_opts or not gt_opts:
        return 0.0, {"A": 0, "B": 0, "C": 0, "D": 0}
    
    correct = 0
    details = {}
    for key in ["A", "B", "C", "D"]:
        e = normalize_text(extracted_opts.get(key, ""))
        g = normalize_text(gt_opts.get(key, ""))
        sim = similarity(e, g)
        details[key] = sim
        if sim >= 0.85:
            correct += 1
    
    return correct / 4, details

def compare_answer(extracted_ans, gt_ans):
    if not extracted_ans or not gt_ans:
        return False
    return normalize_text(extracted_ans) == normalize_text(gt_ans)

def compare_chapter(extracted_ch, gt_ch):
    if not extracted_ch or not gt_ch:
        return False
    return normalize_text(extracted_ch) == normalize_text(gt_ch)

def evaluate_page(matches):
    results = {
        "total_extracted": len(matches),
        "total_ground_truth": 0,
        "matched": 0,
        "field_accuracy": {
            "question": {"correct": 0, "partial": 0, "wrong": 0},
            "options": {"correct": 0, "partial": 0, "wrong": 0},
            "answer": {"correct": 0, "wrong": 0},
            "chapter": {"correct": 0, "wrong": 0}
        },
        "exact_matches": 0,
        "errors": []
    }
    
    for m in matches:
        gt = m.get("ground_truth")
        if not gt:
            results["errors"].append({
                "type": "no_match",
                "extracted": m["extracted"]
            })
            continue
        
        results["total_ground_truth"] += 1
        results["matched"] += 1
        
        eq = m["extracted"]
        match_score = m["match_score"]
        
        if match_score >= 0.95:
            results["field_accuracy"]["question"]["correct"] += 1
        elif match_score >= 0.7:
            results["field_accuracy"]["question"]["partial"] += 1
        else:
            results["field_accuracy"]["question"]["wrong"] += 1
        
        opt_score, opt_details = compare_options(eq.get("options"), gt.get("options"))
        if opt_score == 1.0:
            results["field_accuracy"]["options"]["correct"] += 1
        elif opt_score >= 0.5:
            results["field_accuracy"]["options"]["partial"] += 1
        else:
            results["field_accuracy"]["options"]["wrong"] += 1
        
        ans_correct = compare_answer(eq.get("correct_answer"), gt.get("correct_answer"))
        if ans_correct:
            results["field_accuracy"]["answer"]["correct"] += 1
        else:
            results["field_accuracy"]["answer"]["wrong"] += 1
        
        chap_correct = compare_chapter(eq.get("chapter_name"), gt.get("chapter"))
        if chap_correct:
            results["field_accuracy"]["chapter"]["correct"] += 1
        else:
            results["field_accuracy"]["chapter"]["wrong"] += 1
        
        is_exact = (
            match_score >= 0.95 and
            opt_score == 1.0 and
            ans_correct and
            chap_correct
        )
        if is_exact:
            results["exact_matches"] += 1
        else:
            results["errors"].append({
                "type": "mismatch",
                "extracted": eq,
                "ground_truth": gt,
                "match_score": match_score,
                "options_match": opt_score,
                "answer_correct": ans_correct,
                "chapter_correct": chap_correct
            })
    
    return results

def load_ground_truth(pdf_name, page_range=None):
    base_name = os.path.splitext(os.path.basename(pdf_name))[0]
    base_name = re.sub(r'[^\w\-]', '_', base_name)
    
    gt_file = os.path.join(GROUND_TRUTH_DIR, f"{base_name}.json")
    if not os.path.exists(gt_file):
        alt_names = [
            os.path.join(GROUND_TRUTH_DIR, f"{base_name}.json"),
            os.path.join(GROUND_TRUTH_DIR, f"page_{page_range[0]}.json") if page_range else None
        ]
        for alt in alt_names:
            if alt and os.path.exists(alt):
                gt_file = alt
                break
    
    if not os.path.exists(gt_file):
        print(f"[ERROR] No ground truth file found for {pdf_name}")
        print(f"[INFO] Expected: {gt_file}")
        return None
    
    with open(gt_file, 'r', encoding='utf-8') as f:
        gt_data = json.load(f)
    
    if page_range:
        gt_data['questions'] = [q for q in gt_data.get('questions', []) 
                               if page_range[0] <= q.get('page_number', 1) <= page_range[1]]
    
    return gt_data

def load_extracted_from_json(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def load_extracted_from_supabase(pdf_name, page_range=None):
    if not HAS_SUPABASE:
        return None
    
    sb = SupabasePusher()
    pdf_id_res = sb.supabase.table("pdf_documents").select("id").eq("file_name", pdf_name).execute()
    if not pdf_id_res.data:
        return None
    
    pdf_id = pdf_id_res.data[0]['id']
    
    query = sb.supabase.table("py_questions").select("*").eq("pdf_id", pdf_id)
    if page_range:
        query = query.gte("page_number", page_range[0]).lte("page_number", page_range[1])
    
    res = query.order("page_number").order("question_number").execute()
    return res.data if res.data else []

def group_by_page(questions):
    grouped = defaultdict(list)
    for q in questions:
        pg = q.get("page_number", 1)
        grouped[pg].append(q)
    return grouped

def run_evaluation(pdf_name, extracted_data, page_range=None, output_prefix="eval"):
    gt_data = load_ground_truth(pdf_name, page_range)
    if not gt_data:
        return None
    
    gt_by_page = group_by_page(gt_data.get("questions", []))
    
    if isinstance(extracted_data, list):
        extracted_by_page = group_by_page(extracted_data)
    else:
        extracted_by_page = extracted_data
    
    all_results = []
    total_exact = 0
    total_matched = 0
    total_gt = 0
    total_errors = []
    
    for page_num in sorted(gt_by_page.keys()):
        gt_questions = gt_by_page[page_num]
        ex_questions = extracted_by_page.get(page_num, [])
        
        print(f"\n[Evaluating] Page {page_num}: {len(ex_questions)} extracted, {len(gt_questions)} ground truth")
        
        matches = fuzzy_match_questions(ex_questions, gt_questions)
        page_result = evaluate_page(matches)
        
        all_results.append({
            "page_number": page_num,
            "results": page_result
        })
        
        total_exact += page_result["exact_matches"]
        total_matched += page_result["matched"]
        total_gt += len(gt_questions)
        total_errors.extend(page_result["errors"])
    
    summary = {
        "pdf_name": pdf_name,
        "page_range": page_range,
        "total_ground_truth": total_gt,
        "total_extracted": sum(r["results"]["total_extracted"] for r in all_results),
        "total_matched": total_matched,
        "exact_matches": total_exact,
        "exact_match_rate": total_exact / total_gt if total_gt > 0 else 0,
        "field_accuracy": aggregate_field_accuracy(all_results),
        "errors": total_errors[:50]
    }
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    result_file = os.path.join(RESULTS_DIR, f"{output_prefix}_{timestamp}.json")
    with open(result_file, 'w', encoding='utf-8') as f:
        json.dump({"summary": summary, "pages": all_results}, f, indent=2, ensure_ascii=False)
    
    print_summary(summary)
    
    if total_errors:
        error_file = os.path.join(ERRORS_DIR, f"{output_prefix}_{timestamp}_errors.json")
        with open(error_file, 'w', encoding='utf-8') as f:
            json.dump(total_errors, f, indent=2, ensure_ascii=False)
        print(f"\n[ERRORS] {len(total_errors)} errors saved to: {error_file}")
    
    print(f"\n[RESULTS] Full report saved to: {result_file}")
    return summary

def aggregate_field_accuracy(page_results):
    agg = {
        "question": {"correct": 0, "partial": 0, "wrong": 0},
        "options": {"correct": 0, "partial": 0, "wrong": 0},
        "answer": {"correct": 0, "wrong": 0},
        "chapter": {"correct": 0, "wrong": 0}
    }
    
    for pr in page_results:
        r = pr["results"]["field_accuracy"]
        for field in agg:
            for status in agg[field]:
                agg[field][status] += r[field][status]
    
    return agg

def print_summary(summary):
    print(f"\n{'='*60}")
    print(f"EVALUATION SUMMARY: {summary['pdf_name']}")
    print(f"{'='*60}")
    print(f"Total Ground Truth Questions: {summary['total_ground_truth']}")
    print(f"Total Extracted: {summary['total_extracted']}")
    print(f"Matched: {summary['total_matched']}")
    print(f"EXACT MATCHES: {summary['exact_matches']} ({summary['exact_match_rate']*100:.1f}%)")
    print(f"\n--- Field-Level Accuracy ---")
    
    fa = summary["field_accuracy"]
    total = summary["total_ground_truth"]
    
    for field, stats in fa.items():
        if field in ["question", "options"]:
            correct = stats["correct"]
            partial = stats["partial"]
            wrong = stats["wrong"]
            print(f"  {field.upper()}: {correct} correct, {partial} partial, {wrong} wrong")
            print(f"    Accuracy: {(correct + partial*0.5)/total*100:.1f}%")
        elif field == "answer":
            print(f"  {field.upper()}: {stats['correct']} correct / {total} ({stats['correct']/total*100:.1f}%)")
        elif field == "chapter":
            print(f"  {field.upper()}: {stats['correct']} correct / {total} ({stats['correct']/total*100:.1f}%)")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Evaluate PYQ extraction accuracy")
    parser.add_argument("--pdf", required=True, help="PDF filename")
    parser.add_argument("--start", type=int, default=1, help="Start page")
    parser.add_argument("--end", type=int, default=10, help="End page")
    parser.add_argument("--extracted", help="Path to extracted JSON (skip Supabase)")
    
    args = parser.parse_args()
    
    page_range = (args.start, args.end) if args.end >= args.start else None
    
    if args.extracted:
        extracted = load_extracted_from_json(args.extracted)
    else:
        extracted = load_extracted_from_supabase(args.pdf, page_range)
    
    if not extracted:
        print("[ERROR] No extracted data found. Use --extracted or ensure data is in Supabase.")
        sys.exit(1)
    
    result = run_evaluation(args.pdf, extracted, page_range)
