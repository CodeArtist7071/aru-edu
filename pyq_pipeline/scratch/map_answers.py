import json
import re
import fitz
import os
import sys
sys.path.append(os.path.abspath('.'))


def extract_answer_key_from_page(pdf_path, page_num):
    """
    Extracts answer key from a page.
    Returns a dict: { "SSC CHSL": { 2020: { 1: "D", 2: "B" } } }
    """
    doc = fitz.open(pdf_path)
    text = doc[page_num - 1].get_text()
    lines = text.split('\n')

    answer_key = {}
    current_exam = None
    current_year = None

    # Match lines that are exam section headers (contain known exam name + year)
    exam_header = re.compile(
        r'^(?:SSC\s+)?(CHSL|CGL(?:\s+MAINS)?|MTS|CPO|PHASE\s+IX|STENO)\s*(?:\d{4}|\(.*?\))?',
        re.IGNORECASE
    )
    year_pattern = re.compile(r'(\d{4})')
    ans_pattern = re.compile(r'^(\d+)[\.\s]*\(?([a-dA-D])\)?$')

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Check if it's a section header (exam name)
        exam_match = exam_header.match(line)
        if exam_match and not ans_pattern.match(line):
            full_header = line  # e.g. "CHSL 2021" or "SSC CGL 2020 (Mains)"
            # Extract year from the full header line
            year_match = year_pattern.search(full_header)
            current_year = int(year_match.group(1)) if year_match else None
            # Normalize exam name using the matched group
            exam_group = exam_match.group(1).strip().upper()
            # Store under normalized key
            current_exam = normalize_exam_name(exam_group)
            if current_exam not in answer_key:
                answer_key[current_exam] = {}
            if current_year and current_year not in answer_key[current_exam]:
                answer_key[current_exam][current_year] = {}
            continue

        # Check if it's an answer line like "1.(d)" or "13. (a)"
        ans_match = ans_pattern.match(line)
        if ans_match and current_exam:
            q_num = int(ans_match.group(1))
            ans = ans_match.group(2).upper()
            if current_year:
                answer_key[current_exam].setdefault(current_year, {})[q_num] = ans
            else:
                answer_key[current_exam].setdefault(0, {})[q_num] = ans

    return answer_key


def normalize_exam_name(raw):
    """Normalize exam name for fuzzy matching."""
    if not raw:
        return ""
    raw = raw.upper().strip()
    raw = re.sub(r'\s+', ' ', raw)
    if 'CHSL' in raw:
        return 'SSC CHSL'
    if 'CGL' in raw and 'MAINS' in raw:
        return 'SSC CGL'  # CGL MAINS key stored under SSC CGL
    if 'CGL' in raw:
        return 'SSC CGL'
    if 'MTS' in raw:
        return 'SSC MTS'
    if 'CPO' in raw:
        return 'SSC CPO'
    if 'PHASE' in raw:
        return 'SSC PHASE IX'
    return raw


def map_answers():
    pdf_path = 'storage/pdfs/maths-e-book-2-0-by-aditya-ranjan-sir_compress.pdf'
    json_path = 'storage/extracted/maths-e-book-2-0-by-aditya-ranjan-sir_compress/extracted_questions.json'

    # 1. Extract answer keys from both answer key pages (45 and 46)
    raw_key = {}
    for pg in [45, 46]:
        page_key = extract_answer_key_from_page(pdf_path, pg)
        for exam, years in page_key.items():
            if exam not in raw_key:
                raw_key[exam] = {}
            for year, answers in years.items():
                raw_key[exam].setdefault(year, {}).update(answers)

    print("Answer Key Sections Extracted:")
    for exam, years in raw_key.items():
        for year, answers in years.items():
            print(f"  {exam} ({year}): {len(answers)} answers")
    print()

    # 2. Load extracted questions
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # 3. Map answers using pdf_q_num + exam name + year
    mapped_count = 0
    failed = []

    for q in data.get("questions", []):
        pdf_q_num = q.get("pdf_q_num")
        raw_exam = q.get("exam", "")
        raw_year = q.get("exam_year", "")

        if not pdf_q_num:
            failed.append(f"Missing pdf_q_num: {q.get('q', '')[:40]}")
            continue

        # Normalize
        exam_key = normalize_exam_name(raw_exam)
        try:
            year_int = int(str(raw_year)[:4]) if raw_year else None
        except:
            year_int = None

        # Try to find the answer — STRICT: must match exam and year exactly
        ans = None
        if exam_key in raw_key:
            year_map = raw_key[exam_key]
            if year_int and year_int in year_map:
                ans = year_map[year_int].get(int(pdf_q_num))

        if ans:
            q["ans"] = ans
            mapped_count += 1
        else:
            # Strict: leave as '?' if no exact match found — don't guess!
            q["ans"] = "?"
            failed.append(f"No match for Q{pdf_q_num} [{exam_key} {year_int}]: {q.get('q', '')[:40]}")

    print(f"Successfully mapped: {mapped_count} / {len(data.get('questions', []))} questions")
    if failed:
        print(f"\nFailed to map {len(failed)} questions:")
        for f in failed[:5]:
            print(f"  - {f}")

    # 4. Save back to JSON
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    # 5. Push to Supabase
    from core.full_pipeline import FullPipeline
    pipeline = FullPipeline()
    payload = pipeline._prepare_payload(data.get("questions", []))
    pipeline.sb.push_py_questions(payload)
    print(f"\nPushed {len(payload)} questions to Supabase with correct answers!")

    # 6. Verification sample
    print("\nSample Verification (first 3 mapped questions):")
    count = 0
    for q in data.get("questions", []):
        if q.get("ans") and q["ans"] in ["A","B","C","D"]:
            opts = {o["l"]: o["v"] for o in q.get("opt", [])}
            print(f"  Q{q.get('pdf_q_num')} [{q.get('exam')} {q.get('exam_year')}]")
            print(f"    {q['q'][:60]}...")
            print(f"    Correct: [{q['ans']}] = {opts.get(q['ans'], '?')}")
            count += 1
        if count >= 3:
            break


if __name__ == "__main__":
    map_answers()
