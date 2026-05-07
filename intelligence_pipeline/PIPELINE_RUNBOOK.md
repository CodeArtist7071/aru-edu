# 🚀 Intelligence Pipeline: Ultimate Runbook

This guide covers all scenarios for the `smart_pipeline.py` — the high-fidelity engine that transforms PDFs into a verified Knowledge Base and Exam Bank.

---

## 📋 Table of Scenarios

| Scenario | Mode | Best For... |
| :--- | :--- | :--- |
| **New Book Discovery** | Standard | First-run metadata extraction. |
| **Deep-Chapter Extraction** | Offset | Skipping the intro and exploring advanced chapters. |
| **Mathematical Mastery** | Explainer | Subjects requiring step-by-step solutions (Math/Aptitude). |
| **Bulk Content Ingestion** | High-Volume | Rapidly populating a new subject. |

---

## 🛠️ Scenario Commands

### 1. The "Fast Discovery" Run
Used for small PDFs (under 30 pages) where you want the first 10 questions.
```powershell
python smart_pipeline.py "pdfs/your_handout.pdf" --count 10
```

### 2. The "Deep-Chapter" Leap (Vast Books)
In a 500-page book (like Arihant), use the `--offset` to jump past the "What is a Computer?" intro.
*   **0.3** - 30% deep (Hardware/Input-Output)
*   **0.5** - 50% deep (Networking/OS)
*   **0.8** - 80% deep (Security/Internet)

```powershell
python smart_pipeline.py "pdfs/Arihant Computer Awareness.pdf" --count 15 --offset 0.5
```

### 3. The "Mathematical Strategist"
If processing a Math or Quantitative Aptitude PDF, tell the AI to generate **Detailed Explanations**.
```powershell
# 'all' tells the AI to generate explanations for math topics
python smart_pipeline.py "pdfs/SSC_Maths.pdf" --count 10 --exp-sub all
```

### 4. High-Stakes Accuracy (Advanced)
Increase the `--stride` (Field of View) for complex technical subjects to give the AI more context.
```powershell
# Scanning at 40% depth with a larger 20k character context window
python smart_pipeline.py "pdfs/Advanced_Computing.pdf" --count 10 --offset 0.4 --stride 20000
```

---

## ⚡ Arihant Computer Awareness: Quick Commands

Copy and paste these to process specific blocks of your current book.

### Chapter 1-3: The Basics (Hardware & History)
```powershell
python smart_pipeline.py "pdfs/Arihant Computer Awareness.pdf" --count 15 --offset 0.0
```

### Chapter 5-8: Software & Data (Operating Systems)
```powershell
python smart_pipeline.py "pdfs/Arihant Computer Awareness.pdf" --count 15 --offset 0.25
```

### Chapter 10-12: The Neural Network (Networking & Models)
```powershell
python smart_pipeline.py "pdfs/Arihant Computer Awareness.pdf" --count 15 --offset 0.5
```

### Chapter 13-15: Security & Internet (Cyber Safety)
```powershell
python smart_pipeline.py "pdfs/Arihant Computer Awareness.pdf" --count 15 --offset 0.75
```

### The Glossary & Abbreviations (The End)
```powershell
python smart_pipeline.py "pdfs/Arihant Computer Awareness.pdf" --count 10 --offset 0.95
```

---

## 🔑 Key Parameter Reference

*   `--count`: The number of verified MCQs you want. (Max recommended: 50 per run).
*   `--offset`: A float from **0.0 to 1.0**. Represents the depth into the PDF.
*   `--exp-sub`: Use `all` to force math-explanations.
*   `--stride`: The amount of text (in characters) the AI "reads" at once. Default is 12,000.

---

## 🛡️ Troubleshooting

> [!TIP]
> **Too many [DEDUPE] skips?**
> Increase your `--offset` by **0.05** (e.g., jump from 0.0 to 0.05). This moves the "AI Window" to a fresh part of the book where the questions won't conflict with what's already in Supabase.

> [!WARNING]
> **[REJECTED] Question?**
> The Peer-Reviewer AI found a potential hallucination or a question not backed by the text. This is a safety feature! The pipeline only pushes 100% verified data.
