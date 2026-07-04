# Smartphone UI Layout & Flow Summary

## 1. Overall Layout Architecture

> [!TIP]
> The smartphone UI follows a standard app shell model to maximize screen real-estate and ensure intuitive one-handed navigation.

- **App Bar / Header:** Fixed at the top. Contains the branding/logo, user avatar (for profile access), and a notification icon.
- **Main Content Area:** Scrollable vertical layout. Adapts to device safe areas to avoid notches or pill cutouts.
- **Bottom Navigation Bar:** Fixed at the bottom. Provides primary navigation between main app sections (e.g., Home, Practice, Analytics, Profile).

## 2. Key Screens & Layouts

### A. Home Dashboard
- **Welcome Section:** Personalized greeting with a quick overview of progress (e.g., daily streak or readiness score).
- **Exam Selector Card:** 
  - **Empty State:** Displays "No target exams selected yet" with a prominent "Add Exams" Call to Action (CTA).
  - **Active State:** A grid or horizontal scroll of user-selected exams. Each card features an icon, the exam name, and a "Take Test" button.
- **Recent Activity:** Quick links to resume incomplete tests or review recent results.

### B. Exam Library (Add Exams)
- **Search & Filter:** Sticky search bar at the top to quickly find specific exams.
- **Category Lists:** Exams grouped by career path or subject (e.g., using collapsible accordions or categorized vertical lists).
- **Action:** A simple "Add (+)" button next to each exam to instantly pin it to the Home Dashboard.

### C. Test Environment
> [!IMPORTANT]
> The test environment intentionally hides the Bottom Navigation Bar to prevent accidental exits and maximize focus.

- **Sticky Header:** Displays the exam timer, a progress bar (current question vs. total), and a pause/exit button.
- **Question Area:** Uses large, legible typography optimized for mobile readability.
- **Options Area:** Features large touch targets for multiple-choice answers, reducing the chance of misclicks.
- **Footer Controls:** "Previous" and "Next" buttons. The "Next" or "Submit" button is visually emphasized.

## 3. Theme & Colors

> [!TIP]
> The app utilizes a premium, high-contrast dark/light mode adaptable theme, with vibrant primary colors to draw attention to actionable items, heavily inspired by modern design systems like Material Design 3.

- **Background (Surface):**
  - Main app background (`surface`): `#fbf9f5` (Light) / `#0f120e` (Dark)
  - Elevated elements like cards & modals (`surface-container-high`): `#ffffff` (Light) / `#242b21` (Dark)
- **Primary Colors:**
  - Main accent for call-to-actions (`primary`): `#154212` (Light) / `#22c55e` (Dark)
  - Subtle highlights (`primary-container`): `#2d5a27` (Light) / `#006e2f` (Dark)
- **Text & Typography:**
  - Primary text (`on-surface`): `#1b1c15` (Light) / `#e2e3d9` (Dark)
  - Secondary text for descriptions (`on-surface-variant`): `#3d4a3d` (Light) / `#bfc9bc` (Dark)
  - **Fonts:** Employs "Space Grotesk" for modern, technical headings and "Manrope" for clean, highly readable body text.

## 4. UI Flow Summary

1. **Launch:** The user opens the app and lands directly on the **Home Dashboard**.
2. **Onboarding / Setup:** If the user has no active exams, the Exam Selector Card shows its empty state, prompting the user to tap **"Add Exams +"**.
3. **Selection:** The user is routed to the **Exam Library**, where they search, filter, and add desired exams to their profile.
4. **Action:** The user returns to the **Home Dashboard** and taps an exam card (or its "Take Test" button) to begin practicing.
5. **Focus Mode:** The app transitions to the **Test Environment**, entering a distraction-free mode (global navigation is hidden).
6. **Completion & Review:** Upon finishing the test, the user is taken to a **Results/Analytics Page** to review their score and correct answers.
7. **Return:** The user taps a "Done" button or uses the Bottom Navigation to return to the Home Dashboard.

---

## 5. App Architecture Summary

The underlying architecture supporting this UI is built on a modern, robust tech stack designed for high performance, AI integration, and seamless scaling:

- **Frontend Core:** Built with **React 19** and powered by **Vite** for lightning-fast compilation and optimized production builds.
- **State Management:** Utilizes **Redux** for predictable global state handling across complex UI flows (like active exam timers and user progress).
- **Styling & Design:** Styled with **TailwindCSS v4**, enabling the custom "Digital Greenhouse" botanical theme, glassmorphism UI elements, and highly responsive layouts.
- **Backend & Authentication:** Integrates with **Supabase** for secure OAuth user authentication, real-time database capabilities, and user profile management.
- **Progressive Web App (PWA):** Leverages `vite-plugin-pwa` and service workers to provide a native app-like experience directly on smartphones.
- **AI & Analytics Engine:** 
  - Features in-browser AI proctoring using **TensorFlow.js** and **MediaPipe Face Mesh** (detects tab-switches, face absence, window blurs).
  - Implements a Theta-based scoring system to drive **Adaptive Difficulty** algorithms and deeply personalized performance analytics.
