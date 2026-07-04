# Guest-First Experience Design
## Arumind / OPREP Exam Portal — "Try Before You Register"

---

## Philosophy: The Kirana Store Rule

In an Indian kirana store, the shopkeeper lets you taste the namkeen before you buy the full packet. Your app should do the same.

> **Let the user taste the value before asking for their phone number.**

---

## The Current Problem (What You Have Now)

```
[Landing Page] → [REGISTER NOW] → [Login Form] → [Dashboard]
                    ↑
         USER BOUNCES HERE — 60% never come back
```

Your `AuthRoute` guard redirects EVERYONE to `/login`. A student who just wants to see what the app looks like has to create an account first. **This is asking for marriage on the first date.**

### The `AuthRoute` in App.tsx — The Problem:

```tsx
const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.user);
  if (user) return <Navigate to="/user/dashboard" replace />;
  return <>{children}</>;
};
```

This blocks everything. The user sees a beautiful landing page but **cannot click "Practice" or "Mock Test" without logging in.**

---

## The New Flow: Guest-First Experience

```
[User Opens App]
        │
        ├─→ First Time? ───────────────────────────────────┐
        │                                                  │
        ▼                                                  ▼
[LANDING PAGE — Full Public Access]
        │
        ├─→ "Try Free Practice Test" (No login needed)
        │        │
        │        ├─→ Demo Test (5 questions, sample content)
        │        │        │
        │        │        ├─→ Answer questions
        │        │        │
        │        │        └─→ See Score + "Save my progress?"
        │        │                 │
        │        │                 ├─→ [Continue as Guest]
        │        │                 │        │
        │        │                 │        ▼
        │        │                 │   [GUEST DASHBOARD — Limited]
        │        │                 │        │
        │        │                 │        ├─→ Can take 1 more free test
        │        │                 │        ├─→ Can see Report Card (sample)
        │        │                 │        ├─→ Can see Schedule (demo)
        │        │                 │        └─→ [Sign Up to Unlock Everything]
        │        │                 │
        │        │                 └─→ [Create Free Account — 1 tap]
        │        │                          │
        │        │                          ▼
        │        │                   [REGISTERED DASHBOARD — Full]
        │        │
        │        └─→ "Explore Subjects" (No login needed)
        │                 │
        │                 └─→ See syllabus, chapter list, sample questions
        │                      (locked: "Start Test — Sign in required")
        │
        └─→ Returning Registered User → [Auto-login] → [Full Dashboard]
```

---

## 2. THE GUEST MODE SYSTEM

### 2.1 Guest Data Model (No Database Needed)

Store everything in `localStorage` with a `guest_` prefix:

```typescript
// Guest session data structure (localStorage only)
interface GuestSession {
  guestId: string;        // e.g., "guest_abc123" (random)
  createdAt: string;      // ISO date
  testsTaken: number;     // 0 to 2 (limit)
  testHistory: GuestTest[];
  selectedExam: string;   // e.g., "opsc" (default)
  preferences: {
    language: "en" | "or" | "hi";
    dailyReminder: boolean;
  };
}

interface GuestTest {
  testId: string;
  subject: string;
  chapter: string;
  score: number;
  totalQuestions: number;
  correct: number;
  wrong: number;
  skipped: number;
  accuracy: number;
  timeTaken: number;
  answers: Record<string, string>;
  completedAt: string;
}
```

### 2.2 Guest Service (Utility Module)

```typescript
// utils/guestSession.ts

const GUEST_KEY = "arumind_guest_session";
const MAX_FREE_TESTS = 2;

export function getGuestSession(): GuestSession | null {
  const raw = localStorage.getItem(GUEST_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function createGuestSession(): GuestSession {
  const session: GuestSession = {
    guestId: `guest_${Math.random().toString(36).substring(2, 10)}`,
    createdAt: new Date().toISOString(),
    testsTaken: 0,
    testHistory: [],
    selectedExam: "opsc", // default
    preferences: { language: "en", dailyReminder: false },
  };
  localStorage.setItem(GUEST_KEY, JSON.stringify(session));
  return session;
}

export function canGuestTakeTest(): boolean {
  const session = getGuestSession();
  if (!session) return true; // First test
  return session.testsTaken < MAX_FREE_TESTS;
}

export function recordGuestTest(testData: GuestTest): void {
  const session = getGuestSession() || createGuestSession();
  session.testsTaken += 1;
  session.testHistory.push(testData);
  localStorage.setItem(GUEST_KEY, JSON.stringify(session));
}

export function clearGuestSession(): void {
  localStorage.removeItem(GUEST_KEY);
}

export function hasGuestData(): boolean {
  return getGuestSession() !== null;
}

export function convertGuestToUser(userId: string): void {
  const session = getGuestSession();
  if (!session) return;
  // Migrate guest data to user's database record
  // POST /api/migrate-guest { guestId, userId, testHistory }
  clearGuestSession();
}
```

### 2.3 Guest vs Registered Feature Matrix

| Feature | Guest Mode | Registered User |
|---------|-----------|-----------------|
| **Sample/Demo Test** | ✅ 1 free test (5 questions) | ✅ Unlimited |
| **Full Practice Test** | ❌ Locked | ✅ Unlimited |
| **Mock Tests** | ❌ Locked | ✅ Unlimited |
| **View Subjects/Chapters** | ✅ Read-only | ✅ Read + Start Test |
| **Study Planner** | ✅ Demo view (can't save) | ✅ Full schedule + sync |
| **Report Card / Analytics** | ✅ Last test only | ✅ Full history + trends |
| **Daily Current Affairs** | ✅ Read-only | ✅ Full + interactive MCQs |
| **Bookmark Questions** | ✅ LocalStorage (temp) | ✅ Cloud sync |
| **Community/Forum** | ❌ Locked | ✅ Full access |
| **Live Leaderboards** | ❌ Locked | ✅ Full access |
| **Proctoring** | ❌ Not needed | ✅ Available |
| **Push Notifications** | ❌ Can't send | ✅ Yes |
| **Daily Reminders** | ❌ No | ✅ WhatsApp/SMS/App |
| **Data Backup** | ❌ Local only | ✅ Cloud + never lost |

---

## 3. THE NEW APP FLOW — DETAILED SCREEN BY SCREEN

### 3.1 Landing Page (No Login Required)

**Current HomePage** has beautiful marketing but no "try without login" path.

**New Landing Page Design:**

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│     🎓 Arumind — Government Exam Prep               │
│     Practice for OPSC, OSSC, OSSSC                  │
│                                                      │
│     "See if this app helps you — no signup needed" │
│                                                      │
│     ┌────────────────────────────────────┐        │
│     │  🎯 Try a Free Practice Test (5 min)│ ← PRIMARY │
│     └────────────────────────────────────┘        │
│                                                      │
│     ┌────────────────────────────────────┐        │
│     │  📚 Explore Subjects & Chapters     │ ← SECONDARY│
│     └────────────────────────────────────┘        │
│                                                      │
│     ┌────────────────────────────────────┐        │
│     │  📝 Take a Full Mock Test Preview   │ ← TERTIARY │
│     └────────────────────────────────────┘        │
│                                                      │
│     ─── or ───                                       │
│                                                      │
│     [Create Free Account]    [Sign In]               │
│     (Already have an account? Sign In)               │
│                                                      │
│     "10,000+ students from Odisha are using this"   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Key Design Rules:**
1. **"Try Free Practice Test"** is the biggest, most prominent button
2. **"Create Free Account"** is secondary (below the fold)
3. **No forced redirect** to login page on any public page
4. **All three CTAs** lead to value before login

### 3.2 The Demo Test Flow (Guest Experience)

When user taps **"Try Free Practice Test"**:

```
[Choose Subject] → [Pick a Chapter] → [Start 5-Question Demo]
        │
        ▼
┌──────────────────────────────────────────────────────┐
│  🎯 Free Practice Test — Indian History              │
│  Chapter: Ancient India                              │
│  Questions: 5    Time: 5 minutes    No login needed  │
│                                                      │
│  [Start Test]                                        │
│                                                      │
│  "This is a sample. Sign up for unlimited tests."   │
└──────────────────────────────────────────────────────┘
```

**During the test:**
- Same UI as registered user test
- No proctoring (guest mode doesn't need it)
- Show subtle banner: **"Create account to save your progress"** (dismissible)
- After question 3: **"You're doing great! Want to save your score? Sign up for free →"** (soft nudge)

### 3.3 The Result Screen — The Conversion Moment

This is the **most important screen** for guest-to-user conversion.

```
┌──────────────────────────────────────────────────────┐
│  🎉 Your Score: 3 out of 5 correct!                  │
│  Accuracy: 60%                                        │
│                                                      │
│  [Review Answers]                                     │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  🌟 Save Your Progress!                        │  │
│  │                                                │  │
│  │  Your test score will be lost if you leave.  │  │
│  │  Create a free account to:                   │  │
│  │  • Track all your test scores                 │  │
│  │  • See what subjects you need to study more   │  │
│  │  • Get a daily study plan                     │  │
│  │  • See how you compare with other students    │  │
│  │                                                │  │
│  │  [Create Free Account — 1 Tap]                │  │
│  │                                                │  │
│  │  [Continue as Guest — Score will be lost]     │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  "10,000+ students trust Arumind for exam prep"     │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Why this works:**
1. User has already experienced value (they took a test, got a score)
2. **Loss aversion** — "Your score will be lost" triggers saving behavior
3. **Clear benefit list** — not "sign up for features", but "don't lose your progress"
4. **Social proof** — "10,000+ students" reduces friction
5. **One-tap registration** — phone number + OTP, not long form

### 3.4 Guest Dashboard (Limited)

If user chooses **"Continue as Guest"**:

```
┌──────────────────────────────────────────────────────┐
│  🎓 Welcome to Arumind!                             │
│  You're exploring as a guest.                        │
│                                                      │
│  🎯 Start a Free Practice Test (1 remaining)       │
│                                                      │
│  📊 Your Last Test: 3/5 correct (60%)               │
│  [Review Answers]                                    │
│                                                      │
│  📚 Explore Subjects:                                │
│     History    [See Chapters] [Start Test → Sign Up] │
│     Geography  [See Chapters] [Start Test → Sign Up] │
│     Polity     [See Chapters] [Start Test → Sign Up] │
│                                                      │
│  📝 Mock Tests: [Preview available → Sign Up]       │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │  🔒 Unlock Everything with a Free Account       │  │
│  │  • Unlimited practice tests                    │  │
│  │  • Full mock tests with timer                  │  │
│  │  • Study planner with daily reminders          │  │
│  │  • Report card with weak area analysis         │  │
│  │  • Compare with other students                 │  │
│  │                                                │  │
│  │  [Create Free Account — It's Free]              │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  [Sign In]  [Create Account]                         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Guest Dashboard Rules:**
1. Show **what they're missing** (feature preview with lock icon)
2. **One more free test** — they can try one more before deciding
3. **Last test score is visible** — reminds them of value experienced
4. **"Unlock" card** is persistent but not annoying
5. **No dark patterns** — don't block the back button, don't fake urgency

---

## 4. SIGN-UP GATES — WHERE AND WHEN TO PROMPT

### The Rule: Ask for Login Only When Value is Proven

| Action | Guest Allowed? | Sign-Up Gate Location | Message |
|--------|---------------|----------------------|---------|
| Browse landing page | ✅ Yes | None | — |
| View subjects/chapters | ✅ Yes | None | — |
| Take 1st demo test (5 Q) | ✅ Yes | None | — |
| See test result | ✅ Yes | Result screen | "Save your score — create free account" |
| Take 2nd test | ✅ Yes | Pre-test screen | "You have 1 free test left. Sign up for unlimited." |
| Take 3rd test | ❌ No | Pre-test screen | "Sign up for unlimited free tests" |
| Save test score | ❌ No | Result screen | "Create account to save your progress" |
| Full practice test (25+ Q) | ❌ No | Pre-test screen | "Sign up for full practice tests" |
| Mock test | ❌ No | Mock test page | "Sign up for mock tests" |
| Study planner (save) | ❌ No | Schedule page | "Sign up to save your daily plan" |
| Report card (history) | ❌ No | Marks page | "Sign up to track all your scores" |
| Bookmark questions | ❌ No | After bookmark | "Sign up to save questions" |
| Community/Forum | ❌ No | Community page | "Sign up to join the discussion" |
| Live leaderboard | ❌ No | Leaderboard page | "Sign up to see your rank" |
| Daily current affairs MCQs | ✅ Yes | None | — |
| Current affairs PDF | ❌ No | Download button | "Sign up to download" |

### Progressive Gate Strategy (The "Soft Wall")

Instead of a hard "Login Required" wall, use a **soft wall**:

```
┌──────────────────────────────────────────────────────┐
│  🔒 Sign Up to Start This Test                      │
│                                                      │
│  You've already tried 2 free tests.                 │
│  Create a free account to unlock:                    │
│                                                      │
│  ✅ Unlimited practice tests                         │
│  ✅ Full mock exams                                  │
│  ✅ Daily study plan                                 │
│  ✅ Your progress report                             │
│                                                      │
│  [Create Account — Quick 1-Step Sign Up]             │
│  ── or ──                                            │
│  [Go Back] — No problem, you can still explore!      │
│                                                      │
│  "Your previous test scores will be saved."          │
└──────────────────────────────────────────────────────┘
```

**Key:** Always provide a **"Go Back"** option. Never trap the user.

---

## 5. CONVERTING GUEST TO REGISTERED USER

### 5.1 The One-Tap Registration (Critical for Conversion)

After a guest takes their first test, registration should be **frictionless**:

```
┌──────────────────────────────────────────────────────┐
│  🎉 Create Your Free Account                        │
│  Save your test score: 3/5 (60%)                    │
│                                                      │
│  Enter your phone number:                            │
│  [+91] [9 8 7 6 5 4 3 2 1 0]                       │
│                                                      │
│  [Send OTP]                                          │
│                                                      │
│  Enter OTP: [  ] [  ] [  ] [  ] [  ] [  ]          │
│                                                      │
│  [Verify & Create Account]                           │
│                                                      │
│  "No password needed. Just your phone number."     │
│  "We will never spam you."                           │
│                                                      │
│  ── or ──                                            │
│  [Continue with Google]                               │
│  [Continue with Email + Password]                     │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Why this works:**
1. **Phone number + OTP** is faster than email/password (most Indian users prefer this)
2. **No password needed** — reduces cognitive load
3. **Pre-filled context** — "Save your test score: 3/5" reminds them WHY they're signing up
4. **Google OAuth** is a fallback for users who prefer it
5. **No email verification** — phone OTP is instant

### 5.2 Data Migration on Registration

When a guest converts:

```typescript
// On successful registration
async function onRegisterSuccess(userId: string) {
  const guestSession = getGuestSession();
  
  if (guestSession && guestSession.testHistory.length > 0) {
    // 1. Show a nice message: "Your previous test scores are being saved!"
    // 2. Send guest data to backend for migration
    await supabase.from("guest_migrations").insert({
      user_id: userId,
      guest_id: guestSession.guestId,
      test_history: guestSession.testHistory,
      migrated_at: new Date().toISOString(),
    });
    
    // 3. Clear guest session
    clearGuestSession();
    
    // 4. Show success: "Your scores are saved! Welcome to your full dashboard."
  }
  
  // 5. Redirect to full dashboard
  navigate("/user/dashboard");
}
```

### 5.3 The Post-Conversion Experience

```
┌──────────────────────────────────────────────────────┐
│  🎉 Welcome, [Name]! Your account is ready!        │
│                                                      │
│  ✅ Your previous test score is saved: 3/5 (60%)     │
│  ✅ Your progress is now tracked automatically      │
│  ✅ Daily reminders are set for 8 AM                │
│                                                      │
│  ┌────────────────────────────────────────┐         │
│  │  🎯 What would you like to do next?    │         │
│  │                                        │         │
│  │  [Continue Practicing]                 │         │
│  │  [Take a Full Mock Test]                │         │
│  │  [Set My Daily Study Schedule]         │         │
│  └────────────────────────────────────────┘         │
│                                                      │
│  "Tip: Students who practice daily score 40% higher"│
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 6. GUEST MODE IMPLEMENTATION — CODE CHANGES

### 6.1 Updated App.tsx Router (New Guest Routes)

```tsx
// Add these new routes to App.tsx

// --- GUEST MANIFESTATION (No login required) ---
const GuestPractice = lazy(() => import("./pages/guest/GuestPractice"));
const GuestDemoTest = lazy(() => import("./pages/guest/GuestDemoTest"));
const GuestResult = lazy(() => import("./pages/guest/GuestResult"));
const GuestDashboard = lazy(() => import("./pages/guest/GuestDashboard"));
const GuestSubjectExplorer = lazy(() => import("./pages/guest/GuestSubjectExplorer"));
const GuestMockPreview = lazy(() => import("./pages/guest/GuestMockPreview"));

// Updated router with guest routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* PUBLIC — No auth needed */}
      <Route path="/" element={<HomePage />} />
      
      {/* GUEST ROUTES — No login needed, but limited */}
      <Route path="/guest" element={<GuestLayout />}>
        <Route path="dashboard" element={<GuestDashboard />} />
        <Route path="subjects" element={<GuestSubjectExplorer />} />
        <Route path="practice" element={<GuestPractice />} />
        <Route path="demo-test/:subjectId/:chapterId" element={<GuestDemoTest />} />
        <Route path="result/:testId" element={<GuestResult />} />
        <Route path="mock-preview" element={<GuestMockPreview />} />
      </Route>
      
      {/* AUTH — Login/Register (redirect if already logged in) */}
      <Route element={<Authlayout />}>
        <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
        <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      
      {/* PROTECTED — Full access */}
      <Route path="/user" element={<ProtectedRoute><UserPanelLayout /></ProtectedRoute>}>
        {/* ... existing routes ... */}
      </Route>
    </>
  )
);
```

### 6.2 Guest Layout (Simple Header, No Sidebar)

```tsx
// layouts/GuestLayout.tsx

export function GuestLayout() {
  const guestSession = getGuestSession();
  
  return (
    <div className="min-h-screen bg-surface">
      {/* Simple Header — No user info, just branding */}
      <header className="p-4 flex items-center justify-between border-b">
        <Link to="/" className="text-xl font-bold text-primary">
          Arumind
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm text-on-surface-variant">
            Guest Mode
          </span>
          <Link 
            to="/register" 
            className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold"
          >
            Sign Up
          </Link>
        </div>
      </header>
      
      {/* Banner: Reminds user they're in guest mode */}
      <div className="bg-amber-50 border-b border-amber-200 p-3 text-center text-sm">
        <span className="text-amber-800">
          🎓 You're exploring as a guest. 
          <Link to="/register" className="font-bold underline">Sign up free</Link> to save your progress.
        </span>
      </div>
      
      <main className="p-4">
        <Outlet />
      </main>
      
      {/* Simple Bottom Nav for Guest */}
      <GuestBottomNav />
    </div>
  );
}
```

### 6.3 Guest Demo Test Component (5 Questions, No Auth)

```tsx
// pages/guest/GuestDemoTest.tsx

export default function GuestDemoTest() {
  const { subjectId, chapterId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  
  // Load 5 sample questions from a pre-defined set (no database needed)
  const questions = useMemo(() => getSampleQuestions(subjectId, chapterId), [subjectId, chapterId]);
  
  // Check if guest can still take tests
  useEffect(() => {
    if (!canGuestTakeTest()) {
      navigate("/guest/limit-reached"); // Show sign-up wall
    }
  }, []);
  
  const handleAnswer = (questionId: string, option: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };
  
  const handleSubmit = () => {
    const score = calculateScore(answers, questions);
    const testData: GuestTest = {
      testId: `demo_${Date.now()}`,
      subject: subjectId!,
      chapter: chapterId!,
      score: score.correct,
      totalQuestions: questions.length,
      correct: score.correct,
      wrong: score.wrong,
      skipped: score.skipped,
      accuracy: Math.round((score.correct / questions.length) * 100),
      timeTaken: 5 * 60 - timeLeft,
      answers,
      completedAt: new Date().toISOString(),
    };
    
    recordGuestTest(testData);
    setIsSubmitted(true);
    
    // Redirect to result page
    navigate(`/guest/result/${testData.testId}`);
  };
  
  // Show "Soft Nudge" after question 3
  const showSignUpNudge = currentQuestion === 2; // After 3rd question
  
  if (isSubmitted) return null; // Will redirect
  
  return (
    <div className="space-y-6">
      {/* Timer */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold">Question {currentQuestion + 1} of {questions.length}</span>
        <span className="text-sm font-bold text-primary">Time: {formatTime(timeLeft)}</span>
      </div>
      
      {/* Sign Up Nudge (After Q3) */}
      {showSignUpNudge && (
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 text-sm">
          <p className="font-bold text-primary">You're doing great! 🎉</p>
          <p>Want to save your score and track your progress?</p>
          <Link to="/register" className="text-primary font-bold underline">
            Sign up for free →
          </Link>
        </div>
      )}
      
      {/* Question */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-6">{questions[currentQuestion].text}</h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleAnswer(questions[currentQuestion].id, opt.id)}
              className={`w-full p-4 rounded-2xl text-left border-2 transition-all ${
                answers[questions[currentQuestion].id] === opt.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-100 hover:border-primary/30"
              }`}
            >
              <span className="font-bold mr-3">{opt.id}.</span>
              {opt.text}
            </button>
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between">
        <button 
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(q => q - 1)}
          className="px-6 py-3 rounded-full bg-gray-100 font-bold"
        >
          Previous
        </button>
        
        {currentQuestion < questions.length - 1 ? (
          <button 
            onClick={() => setCurrentQuestion(q => q + 1)}
            className="px-6 py-3 rounded-full bg-primary text-white font-bold"
          >
            Next
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            className="px-6 py-3 rounded-full bg-primary text-white font-bold"
          >
            Submit Test
          </button>
        )}
      </div>
    </div>
  );
}
```

### 6.4 Guest Result Page (The Conversion Screen)

```tsx
// pages/guest/GuestResult.tsx

export default function GuestResult() {
  const { testId } = useParams();
  const session = getGuestSession();
  const test = session?.testHistory.find(t => t.testId === testId);
  const navigate = useNavigate();
  
  if (!test) return <div>Test not found</div>;
  
  return (
    <div className="space-y-6 max-w-lg mx-auto">
      {/* Score Card */}
      <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
        <div className="text-6xl font-bold text-primary mb-2">
          {test.accuracy}%
        </div>
        <p className="text-lg font-bold">
          {test.correct} out of {test.totalQuestions} correct
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Time taken: {formatDuration(test.timeTaken)}
        </p>
      </div>
      
      {/* Review Answers */}
      <button 
        onClick={() => navigate("/guest/review")}
        className="w-full p-4 rounded-2xl bg-gray-100 font-bold text-center"
      >
        Review Answers
      </button>
      
      {/* THE CONVERSION CARD — This is the key */}
      <div className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-6">
        <div className="text-2xl mb-2">🌟</div>
        <h3 className="text-lg font-bold mb-2">Save Your Progress!</h3>
        <p className="text-sm text-gray-600 mb-4">
          Your test score will be lost if you leave this page. 
          Create a free account to:
        </p>
        <ul className="text-sm space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Track all your test scores
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> See your weak subjects
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Get daily study reminders
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Compare with other students
          </li>
        </ul>
        
        <button 
          onClick={() => navigate("/register", { state: { redirectAfter: "/user/dashboard", guestTestId: testId } })}
          className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg mb-3"
        >
          Create Free Account — 1 Tap
        </button>
        
        <button 
          onClick={() => navigate("/guest/dashboard")}
          className="w-full py-3 text-gray-500 text-sm font-medium"
        >
          Continue as Guest — Score will be lost
        </button>
      </div>
      
      {/* Social Proof */}
      <p className="text-xs text-center text-gray-400">
        10,000+ students from Odisha trust Arumind for exam preparation
      </p>
    </div>
  );
}
```

### 6.5 HomePage CTA Changes (Landing Page)

```tsx
// In HomePage.tsx — replace the current CTA section

{/* HERO CTA — Guest First */}
<div className="flex flex-col gap-4 pt-4">
  {/* PRIMARY: Try without signup */}
  <button 
    onClick={() => navigate("/guest/practice")}
    className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
  >
    🎯 Try Free Practice Test (No Signup)
  </button>
  
  {/* SECONDARY: Explore */}
  <button 
    onClick={() => navigate("/guest/subjects")}
    className="w-full sm:w-auto bg-white text-primary border-2 border-primary px-8 py-3 rounded-full text-sm font-bold"
  >
    📚 Explore Subjects & Chapters
  </button>
  
  {/* TERTIARY: Sign up */}
  <div className="text-sm text-gray-500 text-center mt-2">
    Already decided?{" "}
    <button onClick={() => navigate("/register")} className="text-primary font-bold underline">
      Create Free Account
    </button>{" "}
    or{" "}
    <button onClick={() => navigate("/login")} className="text-primary font-bold underline">
      Sign In
    </button>
  </div>
</div>

{/* Trust Badge */}
<div className="flex items-center gap-2 text-sm text-gray-500 mt-6">
  <span>✓</span> No signup required to try
  <span>•</span>
  <span>✓</span> Free forever
  <span>•</span>
  <span>✓</span> 10,000+ students
</div>
```

---

## 7. GUEST MODE FLOWCHART

```
┌────────────────────────────────────────────────────────────┐
│                     NEW USER OPENS APP                      │
└────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────────┐
│              LANDING PAGE (No Login Required)               │
│                                                              │
│   ┌────────────────────────────────────────────────────┐   │
│   │  🎯 Try Free Practice Test (No Signup)             │   │ ← PRIMARY CTA
│   └────────────────────────────────────────────────────┘   │
│                                                              │
│   ┌────────────────────────────────────────────────────┐   │
│   │  📚 Explore Subjects & Chapters                     │   │ ← SECONDARY CTA
│   └────────────────────────────────────────────────────┘   │
│                                                              │
│   [Create Free Account]    [Sign In]                       │
│                                                              │
└────────────────────────────────────────────────────────────┘
                            │
           ┌────────────────┼────────────────┐
           │                │                │
           ▼                ▼                ▼
   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
   │ Try Free Test│  │ Explore Subs │  │ Sign Up      │
   └──────────────┘  └──────────────┘  └──────────────┘
           │                │                │
           ▼                │                ▼
┌──────────────────┐       │        ┌──────────────────┐
│  DEMO TEST (5 Q)  │       │        │  REGISTERED FLOW  │
│  No login needed  │       │        │  (Full Access)    │
│  5 min timer      │       │        │                   │
│  No proctoring    │       │        └──────────────────┘
└──────────────────┘       │
           │                │
           ▼                │
┌──────────────────┐       │
│  RESULT SCREEN    │       │
│  Score: 3/5     │       │
│  60% accuracy    │       │
│                  │       │
│  ┌──────────────┐│       │
│  │ 🌟 Save My   ││       │
│  │ Progress?    ││       │
│  │              ││       │
│  │ [Create Free ││       │
│  │ Account]     ││       │
│  │              ││       │
│  │ [Continue as││       │
│  │ Guest]       ││       │
│  └──────────────┘│       │
└──────────────────┘       │
           │                │
     ┌─────┴─────┐          │
     │           │          │
     ▼           ▼          │
┌────────┐  ┌────────────┐  │
│SIGN UP │  │ GUEST DASH │  │
│(1-tap) │  │(1 more test│  │
│        │  │  remaining)│  │
└────────┘  └────────────┘  │
     │           │            │
     ▼           ▼            │
┌────────┐  ┌────────────┐   │
│ FULL   │  │After 2nd   │   │
│DASHBRD │  │test → sign-│   │
│        │  │up required │   │
└────────┘  └────────────┘   │
                            │
                            ▼
                   ┌──────────────────┐
                   │  SIGN-UP GATE    │
                   │ "You've tried 2   │
                   │  free tests.     │
                   │  Sign up for     │
                   │  unlimited."     │
                   └──────────────────┘
                            │
                            ▼
                   ┌──────────────────┐
                   │  REGISTRATION    │
                   │  Phone + OTP     │
                   │  (1-tap)         │
                   └──────────────────┘
                            │
                            ▼
                   ┌──────────────────┐
                   │  DATA MIGRATION  │
                   │  Guest scores    │
                   │  → User account  │
                   └──────────────────┘
                            │
                            ▼
                   ┌──────────────────┐
                   │  FULL DASHBOARD  │
                   │  Welcome! Your   │
                   │  scores are saved│
                   └──────────────────┘
```

---

## 8. KEY UX PRINCIPLES FOR GUEST MODE

### 8.1 The "Kirana Store" Rule
> **Let them taste before they buy.** Don't ask for registration before they see value.

### 8.2 The "Loss Aversion" Trigger
> After they take a test, tell them: **"Your score will be lost if you don't save it."** People are more motivated to avoid loss than to gain something.

### 8.3 The "One-Tap" Rule
> Registration should be **phone number + OTP only**. No long forms. No password to remember. No email verification delays.

### 8.4 The "No Trap" Rule
> Never block the back button. Never force a page refresh. Always provide **"Continue as Guest"** or **"Go Back"** options.

### 8.5 The "Progressive Disclosure" Rule
> Show more features as they use the app. First test = free and easy. Second test = still free but nudge. Third test = sign up required. Don't overwhelm on first visit.

### 8.6 The "Social Proof" Rule
> Every sign-up prompt should include: **"10,000+ students from Odisha are already using this."** Indians trust what other Indians are doing.

### 8.7 The "Why Now" Rule
> Don't say "Sign up for features." Say **"Sign up to save your test score of 3/5."** Contextual motivation is 10x more effective than generic marketing.

---

## 9. IMPLEMENTATION CHECKLIST

### Phase 1: Guest Mode Foundation (1 Week)

- [ ] Create `utils/guestSession.ts` (localStorage guest data)
- [ ] Create `GuestLayout.tsx` (simple header + bottom nav)
- [ ] Create `GuestDashboard.tsx` (limited dashboard)
- [ ] Create `GuestDemoTest.tsx` (5-question sample test, no auth)
- [ ] Create `GuestResult.tsx` (score + conversion card)
- [ ] Create `GuestSubjectExplorer.tsx` (read-only chapter list)
- [ ] Create `GuestMockPreview.tsx` (mock test preview, locked)
- [ ] Add guest routes to `App.tsx` (no auth guards)
- [ ] Update `HomePage.tsx` CTAs ("Try Free" as primary)
- [ ] Add guest banner to all guest pages ("Sign up to save progress")

### Phase 2: Conversion Optimization (1 Week)

- [ ] Update `Register.tsx` with **phone + OTP** flow
- [ ] Add `guestData` parameter to registration API
- [ ] Create `guest_migrations` table in Supabase
- [ ] Add guest data migration on successful registration
- [ ] Create post-registration "Welcome + your scores are saved" screen
- [ ] Add sign-up nudge after question 3 in demo test
- [ ] Add sign-up gate before 3rd test attempt
- [ ] Add "Continue as Guest" option on all sign-up gates

### Phase 3: Polish (1 Week)

- [ ] Track guest-to-user conversion rate (analytics)
- [ ] A/B test: "Save your score" vs "Don't lose your progress" messaging
- [ ] A/B test: 1 free test vs 2 free tests vs 3 free tests
- [ ] Add WhatsApp sharing: "I scored 60% on my first test! Can you beat me?"
- [ ] Add "Refer a Friend" bonus (both get extra free tests)
- [ ] Guest push notification: "Come back to finish your 2nd free test!"

---

## 10. SUCCESS METRICS

| Metric | Current | Target (After Guest Mode) |
|--------|---------|---------------------------|
| Landing page bounce rate | ~60% | <30% |
| Registration conversion | ~10% | >35% |
| Guest-to-registered rate | 0% | >25% |
| Average time to first test | 3+ min | <30 sec |
| Users who take a test before registering | 0% | >60% |
| D1 retention (guest) | N/A | >40% |
| D7 retention (registered) | ~15% | >30% |

---

*Document prepared for Arumind / OPREP Exam Portal*
*Guest-First Experience Design v1.0*
