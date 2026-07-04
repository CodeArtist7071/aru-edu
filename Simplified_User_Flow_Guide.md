# Simplified User Flow Guide
## For Non-Tech-Savvy Indian Government Exam Aspirants
### Arumind / OPREP Exam Portal — UX Simplification Proposal

---

## 1. CURRENT PROBLEM ANALYSIS

### What’s Confusing About the Current Navigation & Terminology?

After reviewing the actual source code (`App.tsx`, `UserDashboard.tsx`, `UserPanelLayout.tsx`, `Header.tsx`, `Profile.tsx`, `ExamSelection.tsx`, `HomePage.tsx`), the following jargon-heavy patterns were identified that will confuse a typical OPSC/OSSC/OSSSC aspirant from Odisha who may not be tech-savvy:

| **Current Term / Pattern** | **Why It’s Confusing** | **Where It Appears** |
|---|---|---|
| **“Manifestation”** | Sounds like astrology/spirituality, not an exam app. | Code comments: “Dynamic Manifestations”, UI: “Subject Manifestation” during tests |
| **“Ritual”** | Implies religious practice, not daily study. | “Learning as a Ritual”, “Exam Rituals”, “Daily Rituals”, “This Device Ritual” |
| **“Ecological Dashboard”** | Makes no sense to a student. Sounds like environmental science. | Route title for `/user/dashboard` |
| **“Journal Overview”** | Students think of a diary, not a study app. | Breadcrumb label for Dashboard |
| **“Syllabus Mastery”** | Too academic and intimidating. | Route title for Performance page |
| **“Growth Analysis”** | Vague corporate buzzword. | Breadcrumb label for Performance page |
| **“Strategic Planner”** | Sounds like a military or business tool. | Route title for Study Planner |
| **“Exam Rituals”** | Again, “ritual” is off-putting. | Breadcrumb label for Study Planner |
| **“Testing Grounds”** | Sounds like a weapon lab. | Route title for Mock Tests |
| **“Simulation Lab”** | Sounds like a science laboratory. | Breadcrumb label for Mock Tests |
| **“Achievement Manifest”** | Overly grandiose. | Route title for Results |
| **“Performance Records”** | Sounds like an HR file. | Breadcrumb label for Results |
| **“User Manifesto”** | Sounds like a political document. | Route title for Profile |
| **“Personal Identity”** | Sounds like a philosophy essay. | Breadcrumb label for Profile |
| **“Tempo Reset”** | During a test timer. No one knows what this means. | Live test header timer label |
| **“Close Session”** | Should just say “Logout”. | Sidebar logout button |
| **“Terminate All Sessions”** | Sounds like a spy movie. | Profile security section |
| **“OPSC Elite Aspirant”** | Elitist and discouraging for beginners. | Profile badge |
| **“Batch of 2024”** | Hardcoded and irrelevant if user joined later. | Profile badge |
| **“Digital Greenhouse”** | Metaphor too abstract for practical students. | Marketing copy on homepage |
| **“Syllabus Penetration Rate: 98%”** | Sounds invasive and meaningless. | Homepage marketing stat |
| **“Focus Hrs” / “Accuracy Rate”** | Abbreviated, technical. | Profile stats cards |
| **“Progress Meter”** | Vague — progress in what? | Bottom navigation label |
| **“Time Table”** | Okay, but “My Schedule” is clearer. | Bottom navigation label |
| **“Your preparation is 0% complete. You are in the top 0%."** | **Actively discouraging** for new users. | Dashboard greeting |
| **“No tasks set for today. Schedule your sessions in the planner."** | Too wordy and unclear action. | Dashboard empty state |
| **“Syncing Tasks...”** | Technical jargon. | Loading state |
| **“Update Schedule” modal with 31-day calendar picker** | Overwhelming for simply marking “done”. | Dashboard quick-edit modal |
| **“Active User” dot + email username** | Unnecessary technical display. | Top header bar |
| **Eye Protection / Blue Light Shield** | Niche features cluttering the main interface. | Profile page settings |
| **Font labels like “font-technical”, “tracking-widest”, uppercase everywhere** | Makes text hard to read and feels robotic. | Across all UI components |

### Summary of Core Problems:

1. **Over-intellectualized language**: The app uses words like “Manifestation,” “Ritual,” “Manifesto,” and “Ecological” that belong in a design studio, not a government exam prep app for rural and semi-urban Odisha students.
2. **No clear first action**: The dashboard greets the user with “0% complete” and offers no obvious “Start Here” button.
3. **Hidden navigation**: The actual “Practice Test” (chapter-wise) is nested under `/user/dashboard/exam/:id` and **not even in the mobile bottom nav** (commented out in `UserPanelLayout.tsx`).
4. **Discouraging empty states**: New users see failure metrics (0%, top 0%) instead of encouragement.
5. **Desktop-first thinking**: Collapsible sidebars, hover effects, and complex modals dominate, while the mobile experience (where 90% of Indian users are) has a scroll-hiding nav bar that can disappear.
6. **Too many choices, no guidance**: After login, the user is dumped at the Dashboard with multiple possible paths and no guidance on what to do first.

---

## 2. SIMPLIFIED TAB RENAMING

### Full Route-to-Label Mapping Table

| **Current Route** | **Current Label / Title** | **Proposed Simple Label** | **Proposed Simple Title** | **Rationale** |
|---|---|---|---|---|
| `/` (Home) | — | “Home” | “Arumind — Exam Prep App” | Simple and direct |
| `/login` | — | “Login” | “Sign In to Your Account” | Standard Indian app language |
| `/register` | — | “Sign Up” | “Create Free Account” | “Free” removes friction |
| `/select-exams` | “Target Exams” | “Choose Your Exam” | “Which exam are you preparing for?” | Conversational, friendly |
| `/user/dashboard` | “Journal Overview” / “Ecological Dashboard” | “Home” | “My Study Home” | Every Indian app has a “Home” |
| `/user/dashboard/exam-lists` | “Syllabus Discovery” / “Exam Registry” | “Subjects” | “My Subjects & Chapters” | “Syllabus” is okay but “Subjects” is more familiar |
| `/user/dashboard/exam/:eid` | “Subject Manifestation” | “Practice” | “Chapter-wise Practice” | “Manifestation” must die |
| `/user/dashboard/exam/:eid/test/:sid/:cid` | — | “Start Test” | “Answer Questions” | Direct action verb |
| `/user/plan-study/:eid` | “Exam Rituals” / “Strategic Planner” | “Schedule” | “My Daily Schedule” | “Schedule” is universally understood |
| `/user/plan-study/:eid/add` | — | “Add Task” | “Add to My Schedule” | Clear action |
| `/user/performance` | “Growth Analysis” / “Syllabus Mastery” | “Report Card” | “My Report Card” | Every Indian student knows this |
| `/user/mock-tests` | “Simulation Lab” / “Testing Grounds” | “Mock Tests” | “Full Exam Practice” | “Mock Tests” is already standard |
| `/user/mock-tests/preference/:examId` | — | “Test Settings” | “Choose Your Mock Test” | Simple |
| `/user/mock-tests/session/:attemptId` | “Live Examination” | “Test Running” | “Your Mock Test is Live” | Less intimidating |
| `/user/results` | “Performance Records” / “Achievement Manifest” | “Results” | “My Test Results” | Standard terminology |
| `/user/results/history` | “Log Manifest” / “Archive Manifest” | “Past Results” | “All My Old Results” | “Archive” is too library-like |
| `/user/results/:attemptId` | — | “Result Details” | “Your Marks & Answers” | Clear |
| `/user/profile` | “Personal Identity” / “User Manifesto” | “My Profile” | “My Account & Settings” | Universal pattern |
| Admin routes | Various | **Hide entirely** | — | Non-admins should never see these |
| Header nav items | “Exams, Courses, Test Series, Current Affairs” | Same (public) | Same | These are actually fine |
| Sidebar / Mobile Nav | “Dashboard, Progress Meter, Time Table, Mock Test, Results” | See below | See below | See proposed mobile nav |

---

## 3. PROGRESSIVE ONBOARDING FLOW

### Step-by-Step First-Time User Journey

#### Step 1: Sign Up (What They See)

**Current:** “Create Account” button with generic form.

**Proposed:**
- **Screen Title:** “Create Your Free Account”
- **Subtitle:** “Join 10,000+ Odisha students preparing for government jobs.”
- **Form Fields:**
  - “Your Name” (not “Full Name”)
  - “Mobile Number or Email”
  - “Choose a Password”
- **Button:** “Start My Preparation — It’s Free”
- **Below button:** “Already have an account? Sign In”
- **No jargon:** Remove “Push Beyond Limits” tagline. Replace with: “Simple practice tests for OPSC, OSSC, and OSSSC exams.”

#### Step 2: Choose Exam Goal (OPSC / OSSC / OSSSC)

**Current:** “Set Your Exam Goals” → “Choose Your Target Exams” → “Select the examination boards you intend to practice this season.” → “00 Selected Exams” counter.

**Proposed:**
- **Screen Title:** “Which exam are you preparing for?”
- **Subtitle:** “Tap all that apply. You can change this later.”
- **Options (large cards, not pills):**
  - **OPSC** — “Group A & B Civil Services”
  - **OSSC** — “Combined Graduate Level (CGL)”
  - **OSSSC** — “RI, ARI, Amin, and Field Roles”
- **No counter:** Remove “00 Selected Exams” technical counter. Instead:
  - If nothing selected: “Please select at least one exam”
  - If selected: “✓ You chose OPSC” (or multiple)
- **Button:** “Continue to My Study Home”
- **No “Proceed” or “Realmode Counter” language.**

#### Step 3: Guided Tour of the Dashboard (First-Time Only)

**Current:** User is dumped on Dashboard with 0% stats and no explanation.

**Proposed — Interactive Tooltip Tour:**

1. **Tooltip 1 (on greeting):** “Namaskar, [Name]! This is your Study Home. Everything starts here.”
2. **Tooltip 2 (on Exam Cards):** “Tap a subject to start practicing chapter-wise questions.”
3. **Tooltip 3 (on floating button):** “Tap this button to see your daily tasks.”
4. **Tooltip 4 (on bottom nav):** “Use these buttons to move around the app.”
5. **Tooltip 5 (on Report Card):** “After you take tests, your marks will show here.”

**Tour must have:**
- “Skip Tour” button (top right)
- “Next” and “Previous” buttons
- “Don’t show this again” checkbox at the end

#### Step 4: First Action Prompt

**Current:** Blank dashboard with “0% complete.”

**Proposed — Single Big Prompt:**

After onboarding, show a **full-screen card** (can be dismissed):

```
┌─────────────────────────────────────┐
│  🎯 Ready to start?                 │
│                                     │
│  [Start My First Practice Test]     │
│  (Takes only 5 minutes)             │
│                                     │
│  [Set My Daily Study Schedule]      │
│  (We’ll suggest a simple plan)      │
│                                     │
│  Maybe later — I’ll explore first    │
└─────────────────────────────────────┘
```

- **If they tap “Start My First Practice”:** Jump to first exam subject, auto-pick first chapter, start a 5-question warmup test.
- **If they tap “Set My Schedule”:** Open simple time picker (not 31-day calendar). Ask: “What time do you study?” → “Morning (6-10 AM)”, “Afternoon (2-5 PM)”, “Evening (6-10 PM)”.

#### Step 5: How to Come Back Tomorrow

**Current:** No reminder mechanism or “what next” guidance.

**Proposed:**
- After first session, show: “Great job! Come back tomorrow for more practice. We’ll remind you at [time].”
- **Auto-enable a daily reminder** (WhatsApp or browser notification):
  - “Good morning! Your daily practice is ready. Tap to start →”
- On next app open, show a “Continue where you left off” card at the top of the Home screen.

---

## 4. VISUAL USER FLOW DIAGRAM

### Complete User Journey Flowchart

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PUBLIC (No Login Needed)                            │
└─────────────────────────────────────────────────────────────────────────────┘

    [Landing Page: Arumind]
            │
            ├─→ “Sign Up” ───────────────────────┐
            │                                    │
            └─→ “Login” ─────────────────────────┘
                                                 │
                    ┌──────────────────────────────┘
                    │
            [Create Account / Login]
                    │
                    ▼
            [Choose Your Exam]
              • OPSC
              • OSSC
              • OSSSC
                    │
                    ▼
            [My Study Home — Dashboard]
                    │
        ┌───────────┼───────────┬───────────────┐
        │           │           │               │
        ▼           ▼           ▼               ▼
 [Daily Tasks]  [Practice]  [Mock Test]   [Report Card]
        │           │           │               │
        ▼           ▼           ▼               ▼
  [Mark done]  [Pick Subject] [Choose Exam]  [See Marks]
        │           │           │               │
        ▼           ▼           ▼               ▼
  [Feel good!] [Pick Chapter] [Start Full]  [What to fix]
        │           │           │               │
        │           ▼           ▼               │
        │     [Answer Questions]                │
        │           │                             │
        │           ▼                             │
        │     [Submit Test]                       │
        │           │                             │
        │           ▼                             │
        │     [See Score & Correct Answers]       │
        │           │                             │
        └───────────┴───────────┴───────────────┘
                    │
                    ▼
        [Come Back Tomorrow Reminder]
                    │
                    ▼
        [Push Notification: “Practice is Ready!”]
```

### Detailed Branching: “What Do You Want to Do Today?”

```
                    [My Study Home]
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
    [📚 Practice]    [📝 Mock Test]   [📊 Report Card]
         │               │               │
         ▼               ▼               ▼
  “Pick a subject:”  “Pick an exam:”   “Your last test:
  • History         • OPSC Prelims    6/10 correct”
  • Geography       • OSSC CGL        │
  • Current Affairs • OSSSC Amin      ▼
         │               │        “You need to work on:
         ▼               ▼         • Indian Polity”
  “Pick a chapter:”  “How many questions?”
  • Ancient India    • 50 questions (30 min)
  • Medieval India   • 100 questions (60 min)
         │               │
         ▼               ▼
  [Start 5-Question    [Start Test]
   Warmup]               │
         │               ▼
         ▼          [Timer Running]
  [Question 1/5]        │
  ○ Option A            ▼
  ○ Option B        [Submit]
  ○ Option C            │
  ○ Option D            ▼
         │         [Your Result: 78/100]
         ▼               │
   [Next / Submit]       ▼
         │         [Review Wrong Answers]
         ▼               │
   [Score: 4/5]          ▼
   [See correct answers] [Back to Home]
```

---

## 5. IN-APP GUIDANCE FEATURES

### 5.1 Welcome Tooltip / Walkthrough for First Visit

**Implementation:** Use a lightweight overlay library (or custom CSS) to highlight one UI element at a time.

**Design specs:**
- Dark semi-transparent overlay behind the tooltip
- Tooltip box with arrow pointing to the element
- Color: Primary brand color (green) with white text
- Buttons: “Next”, “Skip”, “Previous”
- Progress dots at bottom: ● ○ ○ ○ ○

**Tooltip Content (5 steps):**

| Step | Element | Tooltip Text |
|------|---------|-------------|
| 1 | Greeting area | “Namaskar! This is your Study Home. Everything you need is here.” |
| 2 | Exam card / Subject list | “Tap any subject to practice questions chapter by chapter.” |
| 3 | Floating daily tasks button | “Tap this circle to see what you should study today.” |
| 4 | Bottom navigation bar | “Use these 4 buttons to move around the app.” |
| 5 | Report Card section | “After you take tests, your marks and rank will show here.” |

### 5.2 “What Is This?” Help Buttons

**Implementation:** Small circular `?` icon next to every section title.

**Behavior:** Tap → opens a bottom sheet (mobile) or popover (desktop) with simple explanation in **English + Odia/Hindi**.

**Example:**

| Screen | “?” Help Text |
|--------|--------------|
| **Report Card** | “This shows your marks from all tests. Green = good. Red = needs more practice. Tap any subject to practice it more.” |
| **Daily Schedule** | “Set what time you want to study each subject. We’ll remind you when it’s time.” |
| **Mock Test** | “A full exam just like the real OPSC/OSSC paper. Same number of questions, same time limit.” |
| **Chapter-wise Practice** | “Practice questions from just one chapter. Great for learning slowly.” |
| **Daily Tasks** | “Check these off when you finish studying. It helps you build a daily habit.” |

### 5.3 Empty State Messages

**Current:** “No tasks set for today. Schedule your sessions in the planner.”

**Proposed empty states:**

| Screen | Empty State Message | Action Button |
|--------|---------------------|---------------|
| **Home — No tests taken** | “Welcome! You haven’t taken any tests yet. Start with a quick 5-question warmup.” | “Start My First Practice” |
| **Report Card — No data** | “No tests yet. Take one test to see your marks here.” | “Take a Test Now” |
| **Daily Tasks — Nothing scheduled** | “You have no tasks for today. Tap below to add your study plan.” | “Add Today’s Tasks” |
| **Mock Tests — No attempts** | “Full exams help you prepare for the real test. Start your first mock test.” | “Start Mock Test” |
| **Results — No history** | “No results yet. Don’t worry — your first test results will appear here.” | “Go to Practice” |
| **Schedule — No habits** | “Let’s make a simple study plan. What time do you usually study?” | “Set My Schedule” |

### 5.4 Success Confirmations

**Current:** No clear success states after actions.

**Proposed:** Toast notifications and inline confirmations in simple language.

| Action | Current Message | Proposed Message |
|--------|---------------|----------------|
| Test submitted | (None / generic) | “🎉 Test done! You scored 8 out of 10. See your answers →” |
| Task marked done | Silent toggle | “✓ Great! One task done. Keep going!” |
| Schedule saved | Silent save | “✓ Your schedule is saved. We’ll remind you!” |
| Exam goal selected | “Goals Set” | “✓ You chose OPSC. Let’s start practicing!” |
| Account created | (None) | “✓ Welcome! Your account is ready.” |
| Login successful | (None) | “✓ Welcome back, [Name]!” |
| Logout | (None) | “You have signed out safely.” |

### 5.5 Bottom Navigation Bar (Like Mobile Apps)

**Current Issues:**
- Mobile nav has 5 items but “Practice” is **commented out** in `UserPanelLayout.tsx`!
- Labels are uppercase, technical, tiny (`text-[10px]`, `font-technical`)
- Active state uses a floating pill that moves up (`-translate-y-8`) — confusing

**Proposed Bottom Nav (5 items, always visible, no scroll-hide):**

```
┌──────────────────────────────────────────────────────┐
│  🏠 Home    📚 Practice    📝 Mock    📊 Marks    👤 Me  │
│   (active: green icon + label)                      │
└──────────────────────────────────────────────────────┘
```

| Icon | Label | Destination | Notes |
|------|-------|-------------|-------|
| 🏠 Home | “Home” | `/user/dashboard` | Always starts here |
| 📚 Book | “Practice” | `/user/dashboard/exam/:firstExamId` | **UNHIDE THIS** — was commented out |
| 📝 Pen | “Mock Test” | `/user/mock-tests` | Full exam practice |
| 📊 Chart | “Marks” | `/user/performance` | What was “Progress Meter” |
| 👤 User | “My Profile” | `/user/profile` | Settings, logout, my details |

**Design Rules:**
- Always show labels (never icon-only)
- Active state: **green icon + bold label** (no floating pill animation)
- Height: 64px minimum (thumb-friendly)
- Safe area padding for iPhone/Android notches
- **Never hide on scroll** — new users get lost if nav disappears

### 5.6 “Quick Actions” Floating Button

**Current:** A floating checkmark button opens “Daily Routine” drawer. The badge shows pending tasks, but the icon (checkmark) is unclear.

**Proposed:** Replace with a **“+” (plus) FAB** that opens a menu:

```
                    [ + ]
                     │
         ┌───────────┼───────────┐
         ▼           ▼           ▼
    [Quick Practice] [Start Mock] [My Schedule]
         │
         ▼
    “Pick a subject and start 5 questions instantly”
```

- **Icon:** `+` (plus) instead of checkmark — universally understood as “add / do something”
- **Color:** Brand green with white icon
- **Tap:** Opens 3-option bottom sheet:
  1. “Quick Practice (5 questions)”
  2. “Start Mock Test”
  3. “Check My Schedule”
- **Swipe gesture:** Swipe up to expand, swipe down to close

---

## 6. MOBILE-FIRST SIMPLIFICATION

### 6.1 Bottom Navigation Bar with 5 Icons + Labels

**Implementation specifics:**

```css
/* Mobile Bottom Nav Spec */
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px; /* Minimum thumb-friendly height */
  background: white;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom); /* iPhone notch */
  z-index: 50;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  min-width: 64px; /* Large tap target */
}

.nav-item.active {
  color: #006E2F; /* Brand green */
  font-weight: bold;
}

.nav-item.inactive {
  color: #666;
}

.nav-icon {
  width: 24px;
  height: 24px;
}

.nav-label {
  font-size: 11px; /* Readable, not tiny */
  font-family: system-ui, sans-serif; /* No technical fonts */
  text-transform: none; /* No uppercase */
}
```

**Key Rules:**
- **Labels must be readable** (11px minimum, sentence case, not `uppercase`)
- **No technical font families** (`font-technical` is banned on mobile)
- **No tracking-widest** (letter-spacing makes words harder to read for non-English-proficient users)
- **Active state must be obvious** (green color + bold text, not a floating dot)

### 6.2 Large Tap Targets

**Minimum touch target size: 48×48px** (Google Material guideline) or ideally 56×56px for older users.

| Element | Current Size | Proposed Size |
|---------|-------------|---------------|
| Bottom nav items | 20px icon + tiny label | 48px tap area, 24px icon |
| Sidebar nav items | `px-3 py-2` | `py-4` minimum |
| Exam selection pills | `px-4 py-2` | `px-6 py-4` minimum |
| Checkbox toggles | Small custom div | 44×44px native-style |
| Buttons (Save, Submit) | `py-2` | `py-4` minimum |
| Floating action button | `size-16` (64px) | Keep 64px or increase to 72px |
| Modal close buttons | Small or absent | Minimum 44×44px |

### 6.3 Swipe Gestures

| Gesture | Action | Screen |
|---------|--------|--------|
| **Swipe Left** on subject card | “Start Practice” shortcut | Dashboard |
| **Swipe Right** on subject card | “Add to Schedule” shortcut | Dashboard |
| **Swipe Up** on FAB | Expand quick actions menu | Global |
| **Swipe Down** on quick menu | Close menu | Global |
| **Swipe Left/Right** during test | Next/Previous question | Test screen |
| **Pull down** on Report Card | Refresh data | Report Card |
| **Long press** on daily task | “Mark as done” or “Edit time” | Daily Tasks drawer |

### 6.4 One-Action-Per-Screen Rule

**Current Problem:** The Dashboard crams everything: greeting, streak, goal, exam cards, daily tasks, mock tests, footer.

**Proposed Mobile Screens (each screen does ONE thing):**

| Screen | Primary Action | Secondary Action |
|--------|---------------|------------------|
| **Home** | Show today’s priority | Tap to practice |
| **Practice Subject List** | Pick a subject | Search subjects |
| **Practice Chapter List** | Pick a chapter | Filter by weak area |
| **Test Screen** | Answer current question | Skip / Flag |
| **Result Screen** | See score | Review wrong answers |
| **Schedule** | See today’s tasks | Add/edit time |
| **Mock Test Setup** | Choose exam & length | Start test |
| **Report Card** | See overall marks | Tap subject to practice weak areas |
| **Profile** | View my details | Edit / Logout |

**Remove from mobile view:**
- Collapsible sidebar (desktop only)
- Eye Protection toggle (move to profile → advanced settings)
- Blue Light Shield (move to profile → advanced settings)
- “Action Center” (already suspended, remove references)
- 31-day calendar picker in schedule modal (use simple time picker instead)
- “Top 0%” stats (discouraging for new users)
- Email username display in header (unnecessary)

---

## 7. JARGON-FREE COPY REWRITES

### 7.1 Dashboard Greeting

**Current:**
> “Namaskar, [Name]. Your OPSC preparation is **0%** complete. You are currently in the top **0%** of active candidates.”

**Problems:**
- “0% complete” is demotivating
- “Top 0%” is mathematically meaningless and depressing
- “Active candidates” is vague

**Proposed (New User):**
> “Namaskar, [Name]! 👋 Welcome to your Study Home. Start your first practice test to see your progress.”
> [🟢 Start My First Practice — 5 Quick Questions]

**Proposed (Returning User with some tests):**
> “Namaskar, [Name]! You’ve practiced for 3 days. Keep it up!”
> “Your strongest subject: History. Needs work: Geography.”
> [🟢 Continue Practicing Geography]

---

### 7.2 Section Headings

| Current | Proposed |
|---------|----------|
| **“Preparation & Progress. Your journey through the syllabus...”** | **“Your Report Card — See how you’re doing”** |
| **“Cultivate your potential. We’ve synthesized your performance data...”** | **“Here’s what to study next to improve your marks.”** |
| **“The Aru.edu Philosophy: Learning as a Ritual.”** | **“How to use this app: Study a little every day.”** |
| **“A learning experience that breathes.”** | **“Simple tools to help you pass your exam.”** |
| **“What defines your Horizon?”** | **“Choose your exam target”** |
| **“Growth Architecture”** | **“App features”** |
| **“Landscape Discovery”** | **“Available Exams”** |
| **“Daily Mock Tests”** | **“New tests every day”** |
| **“Living Knowledge Archive”** | **“Study notes and PDFs”** |
| **“Personalized Analytics”** | **“Your marks and progress”** |
| **“Syllabus Penetration Rate: 98%”** | **“We cover 98% of the exam syllabus”** |
| **“Personalized focus timers and session-tracking journals.”** | **“Track how long you study each day.”** |
| **“Draft your legacy, one entry at a time.”** | **“Pass your exam, one practice session at a time.”** |
| **“Ready to draft your Success?”** | **“Ready to start studying?”** |
| **“Join Odisha’s most intentional learning community”** | **“Join 10,000+ students preparing for Odisha government jobs.”** |
| **“Ace Your Mind. Draft Your Legacy.”** | **“Practice. Learn. Pass your exam.”** |
| **“A calm, focused sanctuary for OPSC & OSSC aspirants.”** | **“Simple practice tests for OPSC, OSSC, and OSSSC exams.”** |
| **“Push Beyond Limits”** | **“Study smarter, pass faster.”** or remove entirely |

---

### 7.3 Button & Action Labels

| Current | Proposed |
|---------|----------|
| **“Begin Your Study”** | **“Start Learning — It’s Free”** |
| **“Create Account”** | **“Create Free Account”** |
| **“Consult Faculty”** | **“Ask a Question”** or **“Talk to a Teacher”** |
| **“Proceed”** | **“Continue”** |
| **“Select at least one exam”** | **“Please choose an exam first”** |
| **“Discard”** | **“Cancel”** |
| **“Save Schedule”** | **“Save My Schedule”** |
| **“Submit”** | **“Finish Test”** or **“Submit My Answers”** |
| **“Close Session”** | **“Logout”** |
| **“Logout This Device”** | **“Logout from this phone”** |
| **“Logout All Devices”** | **“Logout from all devices”** |
| **“Terminate All Sessions”** | **“Sign out everywhere”** |
| **“Update Schedule”** | **“Change My Study Time”** |
| **“Scheduled Start Time”** | **“What time do you want to study?”** |
| **“Day of the Month”** | **“Which day?”** (or remove entirely) |
| **“Syncing Tasks...”** | **“Loading your tasks...”** |
| **“Active User”** | Remove entirely (unnecessary) |
| **“Live Examination”** | **“Your test is running”** |
| **“Tempo Reset”** | **“Time Left”** |
| **“OPSC Elite Aspirant”** | **“OPSC Student”** |
| **“Batch of 2024”** | **“Joined: [Date]”** |
| **“Mastery Snapshot”** | **“My Test Scores”** |
| **“Accuracy Rate”** | **“Correct Answers %”** |
| **“Focus Hrs”** | **“Hours Studied”** |
| **“Attempts”** | **“Tests Taken”** |
| **“Eye Protection”** | **“Warm screen mode (easier on eyes)”** |
| **“Blue Light Shield”** | **“Night mode filter”** |
| **“Soft Warmth”** | Remove (unnecessary poetic label) |
| **“Amber Filter”** | Remove (unnecessary technical label) |
| **“Privacy” / “Terms”** | **“Privacy Policy” / “Terms of Use”** (full words) |
| **“ARCHITECTED FOR CONSISTENT GROWTH AND INTENTIONAL LEARNING”** | **“Built for Odisha government exam students.”** |

---

### 7.4 Error & Empty Messages

| Current | Proposed |
|---------|----------|
| **“Selection Required. Please select at least one exam to proceed.”** | **“Please choose at least one exam. Tap the exams you are preparing for.”** |
| **“Connection Interrupted”** | **“Internet problem. Please check your connection and try again.”** |
| **“Goals Set”** | **“Your exam choice is saved!”** |
| **“No exams found matching your search.”** | **“No exams found. Try a different name.”** |
| **“Schedule Update Alert: [error]”** | **“Could not save. Please try again: [error]”** |
| **“Timeline Sync Failed”** | **“Could not update your schedule.”** |
| **“Deletion failed”** | **“Could not remove. Try again.”** |

---

## 8. SMART DEFAULTS FOR LAZY / DISINTERESTED USERS

### 8.1 Auto-Suggest a Daily Schedule Based on Exam Date

**Current:** User must manually open Study Planner, add routines, pick mastery subjects, and set times using a 31-day calendar grid.

**Proposed Smart Default:**
- On first login, ask: **“When is your exam?”** (show date picker)
- Ask: **“How many hours can you study daily?”** (slider: 1–8 hours)
- Ask: **“What time do you prefer to study?”** (Morning / Afternoon / Evening)
- **Auto-generate a schedule:**
  - Divide syllabus by days remaining
  - Assign 1–2 subjects per day
  - Set practice tests for weekends
  - Send daily reminders at chosen time
- Show message: **“We made a simple study plan for you. You can change it anytime.”**
- **One-tap accept:** “✓ This plan works for me” / “✏ Let me change it”

### 8.2 One-Tap “Start Today’s Practice” Button

**Placement:** Top of the Home screen, above all other content.

**Button:**
```
┌────────────────────────────────────┐
│  🎯 Start Today’s Practice          │
│  10 questions • 5 minutes           │
│  Subject: History (your weak area)  │
└────────────────────────────────────┘
```

**Logic:**
- If user has weak subjects → pick the weakest
- If no weak subjects → pick the first subject alphabetically
- If user has a schedule → pick today’s scheduled subject
- If all else fails → pick “Current Affairs” (always relevant)
- **Never make the user choose before practicing.**

### 8.3 Auto-Pick the Chapter They Scored Lowest In

**Current:** User must navigate: Home → Exam → Subject → Chapter → Start Test. That’s 5 taps before the first question.

**Proposed:**
- Track score per chapter in the background
- On “Quick Practice” tap, auto-select the chapter with the lowest recent accuracy
- Show a tiny label: “We picked this because you scored 40% here last time.”
- **Option to change:** “Not this chapter? Pick another →”

### 8.4 Daily Reminder with Pre-Curated Content

**Current:** No reminder system. User must remember to open the app.

**Proposed:**
- **WhatsApp-style message** (or browser push if WhatsApp not available):
  - Morning (8 AM): “Good morning, [Name]! Today’s practice: 10 questions from Indian Polity. Tap to start → [link]”
  - If not opened by 3 PM: “You haven’t practiced today. It only takes 5 minutes! → [link]”
  - Evening (8 PM): “Daily reminder: 15 minutes of practice today will help you pass. Start now → [link]”
- **Pre-curated content:** Don’t ask “what do you want to study?” — tell them what’s ready.
- **Streak encouragement:** “You studied 5 days in a row! Don’t break it today.”

### 8.5 “Lazy Mode” Dashboard

For users who open the app but don’t know what to do:

```
┌──────────────────────────────────────────────────────┐
│  Good morning, [Name]!                               │
│                                                      │
│  🎯 Today’s Suggestion:                               │
│  Practice Geography — Chapter 3: Rivers of India     │
│  [Start Now — 5 min]                                 │
│                                                      │
│  📊 Your last test: 7/10 correct. Good job!           │
│  [Review Wrong Answers]                              │
│                                                      │
│  📝 Mock Test this Sunday: OPSC Prelims Pattern      │
│  [Join Mock Test]                                    │
│                                                      │
│  ✅ Today’s Tasks: 2 done, 1 remaining                │
│  [See My Tasks]                                      │
└──────────────────────────────────────────────────────┘
```

**Key principle:** The app should feel like a **tutor**, not a **tool**. It should proactively suggest the next action.

---

## 9. EMERGENCY HELP: “?” Button on Every Screen

### 9.1 Universal Help Button Placement

- **Position:** Top-right corner of every screen (next to notification bell or profile icon)
- **Icon:** `?` in a circle
- **Size:** 44×44px minimum (easy to tap)
- **Color:** Grey default, green on tap

### 9.2 Help Bottom Sheet Content Structure

When tapped, open a bottom sheet with:

```
┌──────────────────────────────────────────────────────┐
│  ❓ Help: [Screen Name]                    [Close X]   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  [English]  [ଓଡ଼ିଆ]  [हिंदी]                         │
│                                                      │
│  What is this screen?                                │
│  [Simple 2-sentence explanation]                       │
│                                                      │
│  What should I do here?                              │
│  [Step-by-step in 1-2-3 format]                      │
│                                                      │
│  Common questions:                                   │
│  • How do I start a test?                            │
│  • How do I see my old results?                      │
│  • How do I change my exam?                          │
│  • How do I contact support?                         │
│                                                      │
│  [📞 Call Support]  [💬 WhatsApp Help]              │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 9.3 Language Support

**Every help text must be available in:**
1. **English** (default)
2. **Odia (ଓଡ଼ିଆ)** — critical for rural Odisha users
3. **Hindi** — for non-Odia speakers

**Language toggle must be prominent** in the help sheet, not buried in settings.

### 9.4 Screen-Specific Help Content

| Screen | English Help | Odia Help (Romanized) | Hindi Help |
|--------|-------------|----------------------|------------|
| **Home** | “This is your main page. Tap a subject to practice, or tap the big green button to start today’s test.” | “Eita aapanaankara mukhya panjika. Gote bisaya ku tap karantu practice karibaku, athaba aji ra pariksha start karibaku.” | “Yeh aapka mukhya page hai. Kisi subject par tap karein practice karne ke liye, ya aaj ka test shuru karne ke liye hare button ko dabayein.” |
| **Practice** | “Pick a subject, then pick a chapter. Answer the questions. See your score at the end.” | “Gote bisaya chayan karantu, tarpara gote adhyaya. Prashnara uttara diantu. Sesare aapanaankara ankha dekhanatu.” | “Subject chunein, phir chapter chunein. Sawalon ke jawab dein. Aakhir mein apna score dekhein.” |
| **Mock Test** | “A full exam just like the real test. Same time, same number of questions. Good for final practice.” | “Asala parikha bhalia gote purna pariksha. Sama samaya, sama prashna sankhya. Antima practice pain bhala.” | “Real exam jaisa poora test. Same time, same questions. Final practice ke liye achha hai.” |
| **Report Card** | “See all your marks here. Green = good. Red = needs more practice. Tap any subject to practice more.” | “Ethi aapana samasta ankha dekhi paribe. Hara = bhala. Lal = adhika practice darkar. Adhika practice karibaku kono bisaya ku tap karantu.” | “Apne sabhi marks yahan dekhein. Hara = accha. Laal = aur practice chahiye. Zyada practice ke liye kisi subject ko tap karein.” |
| **Schedule** | “Set what time you want to study each subject. We will remind you.” | “Kono bisaya ku keun samaya study karibe set karantu. Aame aapanaaku smarana karibuu.” | “Har subject ke liye samay set karein. Hum aapko yaad dilayenge.” |
| **Profile** | “Your name, phone number, and exam choice. Tap Edit to change.” | “Aapanaankara naa, phone number, o pariksha chayana. Badaliba pain Edit ku tap karantu.” | “Aapka naam, phone number, aur exam choice. Badalne ke liye Edit dabayein.” |

### 9.5 Direct Support Access

Every help sheet must include:
- **📞 Phone Number:** “Call us: [Odia-speaking support number]”
- **💬 WhatsApp:** “Message us on WhatsApp for quick help”
- **⏰ Hours:** “Available 9 AM – 6 PM, Monday to Saturday”
- **📧 Email:** For users who prefer typing

---

## APPENDIX: QUICK REFERENCE — WORDS TO BAN

The following words and phrases should be **removed entirely** from all user-facing copy:

| Ban These | Replace With |
|-----------|-------------|
| Manifestation | Test / Screen / Page |
| Ritual | Task / Habit / Daily work |
| Manifest | Record / List / Result |
| Manifesto | Profile / Account |
| Ecological | (Remove) |
| Architectural | (Remove) |
| Synthesis | Summary / Combined |
| Synthesized | Combined / Put together |
| Cultivate | Improve / Build |
| Penetration | Coverage / Completion |
| Tempo | Speed / Time |
| Reset | Restart / Start over |
| Strategic | Planned / Smart |
| Simulation | Practice / Fake (test) |
| Elite | (Remove — intimidating) |
| Intentional | Planned / Careful |
| Botanical | (Remove) |
| Greenhouse | (Remove) |
| Nodes | Points / Steps |
| Lattice | Grid / Plan |
| Tactile | (Remove) |
| Editorial | (Remove) |
| Growth (as buzzword) | Progress / Improvement |
| Architecture (as buzzword) | Design / Setup |
| System Accuracy | Correct % |
| Focus Hrs | Hours studied |
| Active User | (Remove) |
| Close Session | Logout / Sign out |
| Terminate | Stop / End |
| Tracking-widest | (CSS value — never show to users) |
| Font-technical | (Internal CSS class — never show to users) |
| Realmode | (Remove — nonsense word) |
| Eye Protection (as primary feature) | Move to advanced settings |
| Blue Light Shield | Move to advanced settings |

---

## APPENDIX: IMPLEMENTATION PRIORITY

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| **P0 (Critical)** | Replace “0% / top 0%” greeting with encouraging message | High | Low |
| **P0** | Add “Start Today’s Practice” big button to Home | High | Low |
| **P0** | Rename all route titles and breadcrumb labels (Section 2) | High | Low |
| **P0** | Un-hide “Practice” in mobile bottom nav | High | Low |
| **P1 (High)** | Add first-time tooltip tour (5 steps) | High | Medium |
| **P1** | Rewrite all empty state messages (Section 5.3) | High | Low |
| **P1** | Add “?” help button on every screen with Odia support | High | Medium |
| **P1** | Replace all “Manifestation / Ritual / Manifesto” copy | High | Low |
| **P2 (Medium)** | Implement auto-suggested daily schedule | Medium | High |
| **P2** | Add one-tap “Quick Practice” with auto-chapter selection | Medium | Medium |
| **P2** | Add WhatsApp/push daily reminders | Medium | Medium |
| **P2** | Implement swipe gestures on mobile | Medium | Medium |
| **P3 (Low)** | Add “Lazy Mode” simplified dashboard view | Medium | High |
| **P3** | Remove Eye Protection / Blue Light from main UI | Low | Low |
| **P3** | Replace uppercase technical fonts with readable system fonts | Low | Low |

---

*Document prepared based on source code analysis of:*
- `client/src/App.tsx` (routing and guards)
- `client/src/pages/HomePage.tsx` (landing page copy)
- `client/src/pages/userPanel/UserDashboard.tsx` (dashboard UI and copy)
- `client/src/components/Header.tsx` (public navigation)
- `client/src/layouts/UserPanelLayout.tsx` (sidebar and mobile nav)
- `client/src/layouts/UserDashboardLayout.tsx` (dashboard wrapper)
- `client/src/pages/Profile.tsx` (profile page copy and settings)
- `client/src/pages/ExamSelection.tsx` (exam onboarding flow)

