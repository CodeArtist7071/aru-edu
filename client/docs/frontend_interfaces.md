# Frontend Interface Descriptions & Architecture

This document serves as a comprehensive reference for the ARU.EDU frontend codebase, as of April 2026.

## 1. Core Architecture
- **Framework**: React 19 (Vite)
- **State**: Redux Toolkit (Slices)
- **Database/Auth**: Supabase
- **UI**: Tailwind CSS + Headless UI + Lucide/Heroicons
- **Charts**: Recharts
- **Data Grids**: AG Grid

## 2. Core Entities & Interfaces

### 👤 User & Profile
- **Source**: `src/slice/userSlice.ts`, `src/services/userServices.ts`
- **Interfaces**:
    - `UserState`: Manages current session and profile data.
    - `Profile`: Stores user metadata (name, avatar, preferred exams, XP, level).

### 📚 Exam Structure
- **Source**: `src/services/examService.ts`
- **Logic**:
    - `ExamBoard`: Top-level (e.g., OSSC).
    - `Exam`: Specific test (e.g., Combined Graduate Level).
    - `Subject`: Domain (e.g., Computer Awareness).
    - `Chapter`: Specific topic (e.g., Computer Hardware).

### 📝 Questions
- **Source**: `src/services/questionService.ts`
- **Key Fields**:
    - `id`, `question`, `options` (array), `correct_answer`.
    - `difficulty_level`: "Easy", "Moderate", "Hard".
    - `question_explanations`: Array of strings for detailed explanations.
    - `odia_questions`: Translation mapping for bilingual support.

### 📈 Adaptive Learning (IRT)
- **Source**: `src/slice/adaptiveQuestionSlice.tsx`, `src/utils/adaptiveDifficulty.ts`
- **Persistence**: `user_ability` table in Supabase.
- **Metrics**:
    - `theta`: Ability score (0.1 to 1.0).
    - `streak`: Consecutive correct answers.
    - `total_seen` / `total_correct`.

### 📅 Study Planner & Habits
- **Source**: `src/slice/habitSlice.ts`, `src/types/habit.ts`
- **Interfaces**:
    - `Habit`: { id, title, xp_reward, completed }.
    - `ProgramDay`: Mapping of daily tasks to a calendar day.

## 3. Key Navigational Flow
1. **UserDashboard**: Aggregates performance, upcoming tests, and daily habits.
2. **MockTests**: Entry point for practice tests with adaptive selection.
3. **ResultsHistory**: Detailed breakdown of past attempts with analysis.
4. **Admin Dashboard**: Internal management for questions and curriculum.

## 4. Selection Logic (Mock Tests)
Defined in `src/services/mockTestService.ts`:
- **EASY**: 60% Attempted / 40% Unattempted
- **MODERATE**: 40% Attempted / 60% Unattempted
- **HARD**: 20% Attempted / 80% Unattempted

---
*Created automatically by Antigravity based on codebase analysis.*
