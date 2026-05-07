-- SQL script to create the AI Training Dataset table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS py_questions_dataset (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    instruction TEXT DEFAULT 'Solve this math problem from an SSC competitive exam. Provide the correct option number (A, B, C, or D).',
    context TEXT,     -- e.g. "Exam: SSC CGL, Subject: Mathematics, Chapter: Geometry"
    question TEXT,    -- The extracted question text
    options JSONB,    -- {A: ..., B: ..., C: ..., D: ...}
    answer TEXT,      -- e.g. "A"
    subject_id UUID REFERENCES subjects(id),
    chapter_id UUID REFERENCES chapters(id),
    metadata JSONB,   -- {page_number: 15, pdf_source: "...", pdf_id: "..."}
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Add comments for future-proofing
COMMENT ON TABLE py_questions_dataset IS 'High-fidelity training data for fine-tuning future OSSC/SSC AI models.';
