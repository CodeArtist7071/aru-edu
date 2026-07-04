# Arumind — User Flow & Tab Specification
## OPREP Exam Portal | OPSC · OSSC · OSSSC Aspirants

---

## 1. APP SHELL & NAVIGATION ARCHITECTURE

### 1.1 Global Layout (All Screens)

```
┌─────────────────────────────────────────────┐
│  App Bar (Fixed Top)                        │
│  [Logo]  [Notification Bell]  [User Avatar] │
├─────────────────────────────────────────────┤
│                                             │
│           Main Content Area                 │
│           (Scrollable Vertical)             │
│                                             │
├─────────────────────────────────────────────┤
│  Bottom Navigation Bar (Fixed Bottom)       │
│  [Home] [Practice] [Mock] [Marks] [Me]    │
└─────────────────────────────────────────────┘
```

### 1.2 Bottom Navigation Bar (5 Tabs)

| Icon | Label | Route | Active State |
|------|-------|-------|-------------|
| 🏠 Home | Home | `/user/dashboard` | Green icon + bold label |
| 📚 Book | Practice | `/user/dashboard/exam/:id` | Green icon + bold label |
| 📝 Pen | Mock Test | `/user/mock-tests` | Green icon + bold label |
| 📊 Chart | Marks | `/user/performance` | Green icon + bold label |
| 👤 User | My Profile | `/user/profile` | Green icon + bold label |

**Design Rules:**
- Always visible; never hides on scroll
- 64px minimum height (thumb-friendly)
- 48×48px minimum tap targets
- Labels in sentence case (no ALL CAPS)
- iPhone/Android safe-area padding

---

## 2. PUBLIC FLOW (No Login Required)

### 2.1 Landing Page — `/`

**Contents:**
- Brand header: "Arumind — Government Exam Prep"
- Subtitle: "Practice for OPSC, OSSC, OSSSC"
- Trust badge: "10,000+ students from Odisha"
- **Primary CTA:** 🎯 Try Free Practice Test (No Signup)
- **Secondary CTA:** 📚 Explore Subjects & Chapters
- **Tertiary CTA:** 📝 Take a Mock Test Preview
- Auth links: [Create Free Account] | [Sign In]
- Footer: "No signup required to try • Free forever • 10,000+ students"

**User Actions:**
- Try free test → Guest Demo Test Flow
- Explore subjects → Guest Subject Explorer
- Sign up → Registration Flow
- Sign in → Login Flow

---

### 2.2 Guest Demo Test Flow — `/guest/practice → /guest/demo-test/:subjectId/:chapterId`

**Screen 1: Choose Subject (Guest)**
- List of available subjects (History, Geography, Polity, etc.)
- Each subject shows: name, chapter count, "Start Demo" button
- Banner: "You're exploring as a guest. Sign up free to save progress."

**Screen 2: Demo Test (5 Questions)**
- Header: Subject name, Chapter name, Timer (5 min)
- Question card: large text, 4 option buttons (A/B/C/D)
- Progress: "Question 2 of 5"
- Navigation: Previous / Next / Submit
- Soft nudge after Q3: "You're doing great! Want to save your score? Sign up →"
- No proctoring in guest mode

**Screen 3: Guest Result — `/guest/result/:testId`**
- Score card: large accuracy % + "X out of 5 correct"
- Time taken
- [Review Answers] button
- **Conversion Card:**
  - "Save Your Progress! Your score will be lost if you leave."
  - Benefits list: track scores, weak subjects, daily reminders, compare with others
  - [Create Free Account — 1 Tap] (primary)
  - [Continue as Guest — Score will be lost] (secondary)
- Social proof: "10,000+ students from Odisha trust Arumind"

**Guest Limits:**
- 2 free demo tests max
- Scores stored in localStorage only
- After 2nd test: soft sign-up gate before starting 3rd

---

### 2.3 Guest Subject Explorer — `/guest/subjects`

**Contents:**
- Read-only chapter list for all subjects
- Each chapter shows: name, question count, difficulty
- Locked actions: "Start Test → Sign in required"
- [Sign Up to Unlock] sticky banner at bottom

---

### 2.4 Guest Mock Preview — `/guest/mock-preview`

**Contents:**
- Mock test structure preview (questions, timing, pattern)
- Exam selection: OPSC / OSSC / OSSSC
- [Preview Structure] — shows what the test looks like
- [Sign Up for Full Mock Tests] — locked CTA

---

### 2.5 Guest Dashboard — `/guest/dashboard`

**Contents:**
- Welcome: "You're exploring as a guest."
- [Start Free Practice Test — 1 remaining]
- Last test score (if any): "Your last test: 3/5 correct (60%)"
- Explore Subjects list (read-only)
- Mock Tests preview (locked)
- Sticky unlock card: benefits + [Create Free Account]
- Footer links: [Sign In] [Create Account]

---

## 3. AUTHENTICATION FLOW

### 3.1 Registration — `/register`

**Screen Title:** "Create Your Free Account"
**Subtitle:** "Join 10,000+ Odisha students preparing for government jobs."

**Form Fields:**
- Your Name (text input)
- Mobile Number or Email (text input)
- Choose a Password (password input)
- [Start My Preparation — It's Free] (primary button)

**Alternative:**
- [Continue with Google] (OAuth)

**Footer:** "Already have an account? Sign In"

**Post-Registration (if guest data exists):**
- "Your previous test scores are being saved!"
- Redirect to full dashboard with scores migrated

---

### 3.2 Login — `/login`

**Screen Title:** "Sign In to Your Account"

**Form Fields:**
- Mobile Number or Email
- Password
- [Sign In] (primary button)

**Alternative:**
- [Continue with Google]

**Footer:** [Forgot Password?] | "New here? Create Free Account"

**Post-Login:**
- Success toast: "Welcome back, [Name]!"
- Redirect to `/user/dashboard`

---

### 3.3 Exam Selection (First-Time Only) — `/select-exams`

**Screen Title:** "Which exam are you preparing for?"
**Subtitle:** "Tap all that apply. You can change this later."

**Options (Large Cards):**
- **OPSC** — "Group A & B Civil Services"
- **OSSC** — "Combined Graduate Level (CGL)"
- **OSSSC** — "RI, ARI, Amin, and Field Roles"

**Validation:**
- Nothing selected: "Please select at least one exam"
- Selected: "✓ You chose OPSC" (or multiple)

**Button:** [Continue to My Study Home]

**Post-Selection:**
- Guided tooltip tour (5 steps) OR first-action prompt

---

## 4. REGISTERED USER FLOWS (Full Access)

### 4.1 Tab 1: HOME — `/user/dashboard`

**Screen Title:** "My Study Home"

**Sections (Top to Bottom):**

1. **Greeting Header**
   - New user: "Namaskar, [Name]! Welcome to your Study Home. Start your first practice test to see your progress."
   - Returning user: "Namaskar, [Name]! You've practiced for X days. Keep it up!"
   - Strongest / weakest subject summary

2. **Today's Suggestion Card (Lazy Mode)**
   - "🎯 Today: Practice [Subject] — [Chapter]"
   - "Your last test: X/Y correct. Good job!"
   - [Start Now — 5 min] button

3. **Daily Tasks Summary**
   - "✅ Today's Tasks: X done, Y remaining"
   - [See My Tasks] → opens daily tasks drawer
   - Floating "+" FAB for quick actions

4. **Subject Cards (Exam Selector)**
   - Grid/horizontal scroll of selected exams
   - Each card: exam icon, name, progress %, [Take Test] button
   - Empty state: "No target exams selected yet" + [Add Exams] CTA

5. **Quick Actions Floating Button (FAB)**
   - Icon: + (plus)
   - Tap opens bottom sheet:
     - Quick Practice (5 questions)
     - Start Mock Test
     - Check My Schedule

6. **Recent Activity**
   - Resume incomplete tests
   - Review recent results
   - "Continue where you left off" card

7. **Streak / Motivation Strip**
   - "You studied X days in a row!"
   - Streak recovery prompt if at risk

**First-Time User Experience:**
- 5-step tooltip tour (skippable):
  1. Greeting: "Namaskar! This is your Study Home."
  2. Exam cards: "Tap any subject to practice chapter by chapter."
  3. FAB: "Tap this button for quick actions."
  4. Bottom nav: "Use these 4 buttons to move around."
  5. Report card preview: "After tests, your marks show here."
- Full-screen first-action prompt:
  - [Start My First Practice Test — 5 Quick Questions]
  - [Set My Daily Study Schedule]
  - [Maybe later — I'll explore first]

---

### 4.2 Tab 2: PRACTICE — `/user/dashboard/exam/:eid`

**Screen Title:** "My Subjects & Chapters"

**Flow: Home → Practice → Subject → Chapter → Test**

**Screen 1: Subject List**
- Back button → Home
- Search bar: "Find a subject..."
- List of subjects for selected exam:
  - History
  - Geography
  - Indian Polity
  - Current Affairs
  - etc.
- Each subject card: icon, name, total chapters, questions count, progress ring
- Tap subject → Chapter List

**Screen 2: Chapter List — `/user/dashboard/exam/:eid`
**
- Header: "[Subject Name] — Pick a Chapter"
- Back button → Subject List
- Chapter list (vertical):
  - Chapter name
  - Question count
  - Difficulty tag
  - Your last score (if any)
  - [Start Practice] button
- Filter: "All" | "Weak Areas" | "Not Attempted"
- Tap chapter → Pre-Test Screen

**Screen 3: Pre-Test Screen — `/user/dashboard/exam/:eid/test/:sid/:cid`
**
- Header: "[Chapter Name] Practice Test"
- Info card:
  - Questions: X
  - Time: Y minutes
  - Difficulty: Easy / Moderate / Hard
- [Start Test] (primary, large button)
- [Back to Chapters] (secondary)

**Screen 4: Live Test — `/user/dashboard/exam/:eid/test/:sid/:cid`
**
- **IMPORTANT:** Bottom nav is HIDDEN (focus mode)
- Sticky header:
  - "Time Left: MM:SS" (was "Tempo Reset")
  - Progress bar: current question / total
  - [Pause] [Exit]
- Question card (large, readable):
  - Question text (18px+ font)
  - 4 option buttons (large touch targets: 56px min height)
  - Selected option: green border + fill
  - Flag question icon
- Footer controls:
  - [Previous] (disabled on Q1)
  - [Next] / [Submit] (emphasized)
- Question navigator (optional): grid of question numbers (green=answered, grey=unanswered, red=flagged)
- Swipe left/right: next/previous question

**Screen 5: Test Result — `/user/results/:attemptId`
**
- Score card: large accuracy % + "X out of Y correct"
- Time taken
- Subject/chapter breakdown
- [Review Wrong Answers] (primary)
- [Share My Score] (as image)
- [Practice This Chapter Again] (secondary)
- [Back to Home]
- Success toast: "🎉 Test done! You scored X out of Y."

---

### 4.3 Tab 3: MOCK TEST — `/user/mock-tests`

**Screen Title:** "Full Exam Practice"

**Screen 1: Mock Test Home**
- Back button → Home
- Section: "Choose Your Mock Test"
- Exam cards (large):
  - OPSC Prelims (full-length, 2 hours)
  - OSSC CGL (full-length, 2 hours)
  - OSSSC Amin (full-length, 1.5 hours)
- Each card: exam name, questions count, duration, [Start Mock Test]
- Section: "Recent Mocks" (history of attempted mocks)
- Empty state: "Full exams help you prepare for the real test. Start your first mock test." + [Start Mock Test]

**Screen 2: Mock Test Preferences — `/user/mock-tests/preference/:examId`
**
- Header: "Choose Your Mock Test Settings"
- Options:
  - Number of questions: 50 / 100 / 150 / Full
  - Duration: Auto (based on questions) / Custom
  - Negative marking: On / Off
- [Start Test] (primary)

**Screen 3: Live Mock Test — `/user/mock-tests/session/:attemptId`
**
- Same UI as chapter-wise test but with:
  - Full exam timer (e.g., "120 min remaining")
  - Subject-wise section markers
  - Section navigation (jump between subjects)
- AI Proctoring active (if enabled):
  - Face detection
  - Tab switch warning
  - Copy/paste disabled

**Screen 4: Mock Test Result**
- Overall score and rank (if available)
- Subject-wise breakdown chart
- Time analysis per subject
- Accuracy comparison with other students
- [Review Answers] [Download Result PDF]

---

### 4.4 Tab 4: MARKS (Report Card) — `/user/performance`

**Screen Title:** "My Report Card"

**Sections:**

1. **Overall Summary Card**
   - Total tests taken
   - Average accuracy %
   - Hours studied
   - Current streak

2. **Subject Performance Grid**
   - Each subject: accuracy %, progress bar, color-coded
   - Green: ≥70% | Yellow: 40-69% | Red: <40%
   - Tap subject → Subject detail page

3. **Subject Detail Page**
   - Chapter-wise accuracy breakdown
   - Bar chart: scores over time
   - Weak areas highlighted
   - [Practice Weak Areas] button

4. **Recent Tests List**
   - Test name, date, score, accuracy
   - Tap → Test result detail

5. **Empty States:**
   - No tests: "No tests yet. Take one test to see your marks here." + [Take a Test Now]

---

### 4.5 Tab 5: MY PROFILE — `/user/profile`

**Screen Title:** "My Account & Settings"

**Sections:**

1. **Profile Header**
   - Avatar (upload/tap to change)
   - Name
   - Phone/email
   - Joined date (was "Batch of 2024")
   - Badge: "OPSC Student" (was "OPSC Elite Aspirant")

2. **My Stats**
   - Tests Taken (was "Attempts")
   - Correct Answers % (was "Accuracy Rate")
   - Hours Studied (was "Focus Hrs")

3. **My Exams**
   - List of selected exams
   - [Add/Change Exams] → Exam selection screen

4. **Settings**
   - Edit Profile (name, phone, email)
   - Change Password
   - Language: English / ଓଡ଼ିଆ / हिंदी
   - Daily Reminder: On/Off + time picker
   - Notification Preferences
   - **Advanced Settings:**
     - Warm screen mode (was "Eye Protection")
     - Night mode filter (was "Blue Light Shield")

5. **Support**
   - [?] Help button → Help bottom sheet
   - 📞 Call Support
   - 💬 WhatsApp Help
   - 📧 Email Support

6. **Account Actions**
   - [Logout from this phone] (was "Logout This Device")
   - [Logout from all devices] (was "Logout All Devices")
   - [Sign out everywhere] (was "Terminate All Sessions")

---

### 4.6 Additional Screens (Not in Bottom Nav)

#### A. Results History — `/user/results/history`
**
- All past test results (chronological)
- Filter: All / Practice / Mock Tests
- Search by subject or chapter
- Each item: test name, date, score, [View Details]

#### B. Result Detail — `/user/results/:attemptId`
**
- Full question-wise review
- Correct / wrong / skipped color coding
- Explanation for each question
- Time spent per question
- [Bookmark Question] [Report Error]

#### C. Daily Schedule / Study Planner — `/user/plan-study/:eid`
**
- Screen Title: "My Daily Schedule"
- Today's tasks list (time-sorted)
- Each task: subject, time, duration, [Mark Done] checkbox
- [Add Task] button → simple time picker
- Smart default suggestion: auto-generated schedule based on exam date
- Weekly calendar view (optional)

#### D. Exam Library (Add Exams) — `/select-exams` (revisited)
**
- Search & filter exams
- Category lists (OPSC / OSSC / OSSSC)
- [Add (+)] button to pin to Home
- [Remove] for already added exams

#### E. Notifications — In-app notification drawer
- New test available
- Daily reminder
- Streak alert
- Exam date reminders
- Tap notification → relevant screen

#### F. Help Bottom Sheet (Universal)
- Triggered by [?] button on every screen
- Language toggle: [English] [ଓଡ଼ିଆ] [हिंदी]
- "What is this screen?" (2-sentence explanation)
- "What should I do here?" (1-2-3 steps)
- Common questions (FAQ links)
- [📞 Call Support] [💬 WhatsApp Help]
- Hours: "Available 9 AM – 6 PM, Monday to Saturday"

---

## 5. ADMIN PANEL FLOW (Separate Route)

**Route Prefix:** `/admin`

**Login Required:** Yes (admin role only)

**Tabs/Screens:**
- Dashboard (admin overview)
- Exam Management (CRUD exams, subjects, chapters)
- Question Management (CRUD questions with options, difficulty, marks)
- User Management (view users, roles, activity)
- Analytics (platform-wide stats)
- Settings

**Note:** Admin routes are hidden from non-admin users entirely.

---

## 6. COMPLETE USER JOURNEY MAP

### 6.1 New User Journey

```
[Landing Page]
    │
    ├─→ [Try Free Practice Test] → Guest Demo (5Q) → Result → [Sign Up Prompt]
    │                                                      │
    │                                                      ├─→ [Create Account] → Phone/OTP → Exam Select → Onboarding Tour → Home
    │                                                      │
    │                                                      └─→ [Continue as Guest] → Guest Dashboard (1 more test)
    │
    ├─→ [Explore Subjects] → Read-only chapters → [Sign Up to Unlock]
    │
    ├─→ [Create Free Account] → Registration → Exam Select → Onboarding Tour → Home
    │
    └─→ [Sign In] → Login → Home
```

### 6.2 Returning User Journey

```
[Open App]
    │
    ├─→ Auto-login (if remembered) → Home
    │
    └─→ [Sign In] → Login → Home

[Home Dashboard]
    │
    ├─→ [Start Today's Practice] → Subject → Chapter → Test → Result → Review
    │
    ├─→ [Mock Test tab] → Choose Exam → Preferences → Live Test → Result
    │
    ├─→ [Marks tab] → View Report Card → Tap weak subject → Practice weak areas
    │
    ├─→ [FAB +] → Quick Practice / Mock Test / Check Schedule
    │
    └─→ [Profile tab] → Edit settings / View stats / Logout
```

### 6.3 Guest-to-Registered Conversion Flow

```
[Guest takes 1st demo test]
    │
    ▼
[Result Screen] → "Save your progress?" prompt
    │
    ├─→ [Create Free Account] → 1-tap registration → Data migration → Full dashboard
    │
    └─→ [Continue as Guest] → Guest Dashboard
                                │
                                ▼
                    [Takes 2nd demo test]
                                │
                                ▼
                    [Result Screen] → "You've tried 2 free tests. Sign up for unlimited."
                                │
                                ├─→ [Sign Up] → Full access
                                │
                                └─→ [Go Back] → Guest Dashboard (locked for 3rd test)
```

---

## 7. SCREEN-WISE CONTENT SUMMARY TABLE

| Screen | Route | Primary Content | Primary Action | Empty State |
|--------|-------|-----------------|---------------|-------------|
| Landing Page | `/` | Hero, trust badges, CTAs | Try Free Test | — |
| Login | `/login` | Email/phone + password form | Sign In | — |
| Register | `/register` | Name, phone, password form | Create Account | — |
| Exam Select | `/select-exams` | Exam cards (OPSC/OSSC/OSSSC) | Continue to Home | — |
| Home | `/user/dashboard` | Greeting, tasks, subjects, FAB | Start Practice | Welcome + first test prompt |
| Subject List | `/user/dashboard/exam/:eid` | Subjects for exam | Pick Subject | — |
| Chapter List | `/user/dashboard/exam/:eid` | Chapters for subject | Pick Chapter | — |
| Pre-Test | `/user/dashboard/exam/:eid/test/:sid/:cid` | Test info (Q count, time) | Start Test | — |
| Live Test | `/user/dashboard/exam/:eid/test/:sid/:cid` | Question + options + timer | Answer / Submit | — |
| Test Result | `/user/results/:attemptId` | Score, accuracy, breakdown | Review Answers | — |
| Mock Test Home | `/user/mock-tests` | Mock exam options | Start Mock Test | Prompt to start first mock |
| Mock Preferences | `/user/mock-tests/preference/:examId` | Settings (Q count, time) | Start Test | — |
| Mock Live Test | `/user/mock-tests/session/:attemptId` | Full exam with timer | Answer / Submit | — |
| Report Card | `/user/performance` | Stats, subject accuracy, charts | Tap weak subject | No tests yet prompt |
| Results History | `/user/results/history` | List of all past results | View Details | No results yet prompt |
| Schedule | `/user/plan-study/:eid` | Daily tasks, time slots | Mark Done / Add Task | No tasks → add prompt |
| Profile | `/user/profile` | Name, stats, settings, support | Edit / Logout | — |
| Guest Dashboard | `/guest/dashboard` | Last score, explore, unlock card | Start Free Test | Welcome + test prompt |
| Guest Subjects | `/guest/subjects` | Read-only chapter list | — | — |
| Guest Demo Test | `/guest/demo-test/:sid/:cid` | 5 questions, no auth | Answer / Submit | — |
| Guest Result | `/guest/result/:testId` | Score + conversion card | Sign Up / Continue | — |

---

## 8. KEY DESIGN PRINCIPLES

1. **One Action Per Screen** — Each mobile screen does one primary thing
2. **Never Hide Nav** — Bottom nav always visible (except during tests)
3. **Large Tap Targets** — Minimum 48×48px, ideally 56×56px
4. **Simple Language** — No jargon ("Manifestation", "Ritual", "Manifesto" banned)
5. **Encouraging Empty States** — Never show "0% complete" or "Top 0%"
6. **Progressive Disclosure** — Show more features as user engages
7. **Contextual Help** — [?] button on every screen with English + Odia + Hindi
8. **Mobile-First** — All screens designed for thumb reach and one-handed use
9. **Smart Defaults** — Auto-suggest practice, auto-pick weak chapters, auto-schedule
10. **Guest-First** — Let users try before asking for registration

---

*Document version: 1.0*
*For: Arumind / OPREP Exam Portal*
*Target audience: UX designers, frontend developers, product managers*
