-- Execute this in the Supabase SQL Editor
ALTER TABLE study_habits 
DROP CONSTRAINT IF EXISTS study_habits_duration_type_check;

ALTER TABLE study_habits 
ADD COLUMN IF NOT EXISTS duration_type TEXT DEFAULT 'MONTHLY';

ALTER TABLE study_habits 
ADD CONSTRAINT study_habits_duration_type_check CHECK(duration_type IN ('DAILY', 'WEEKLY', 'MONTHLY', 'CUSTOM'));

ALTER TABLE study_habits 
ADD COLUMN IF NOT EXISTS scheduled_date DATE;

ALTER TABLE study_habits 
ADD COLUMN IF NOT EXISTS scheduled_end_date DATE;

ALTER TABLE user_mastery 
ADD COLUMN IF NOT EXISTS scheduled_date DATE;

ALTER TABLE user_mastery 
ADD COLUMN IF NOT EXISTS scheduled_end_date DATE;
