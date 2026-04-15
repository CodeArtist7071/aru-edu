# Design System Specification: The Tactile Editorial (Exam Portal Edition)

## 1. Overview & Creative North Star

**Creative North Star: The Living Knowledge Archive**

This design system transforms the exam portal into a **calm, focused, knowledge-driven environment**. Inspired by agricultural field journals and research logs, it blends editorial elegance with structured assessment clarity.

The experience should feel like:

- A **farmer’s logbook meets academic journal**

- A **quiet study field**, not a stressful exam dashboard

- A **living archive of learning and growth**

---

### Breaking the Template

We avoid rigid, mechanical layouts. Instead:

- Use **intentional asymmetry**

- Highlight **questions like editorial content**

- Guide attention naturally through spacing and typography

---

## 2. Colors & Surface Philosophy

### Core Palette (Agriculture-Inspired)

- **Primary (Deep Leaf Green):** `#154212`

- **Primary Container:** `#2d5a27`

- **Secondary (Soft Crop Green):** `#d2eca2`

- **Background (Paper):** `#fbf9f5`

- **Surface Container:** `#efeeea`

---

### Surface Hierarchy & "No-Line" Rule

**Golden Rule:** No borders. Use tonal shifts.

- Base → `#fbf9f5` (Paper)

- Nested → `#efeeea` (Soil layer)

- Elevated → `#ffffff` (Card/Sheet)

---

### Semantic Colors (Exam Context)

- **Correct Answer:** Muted Green (success tone)

- **Wrong Answer:** Soft Red (not harsh)

- **Marked for Review:** Warm Amber

- **Unattempted:** Neutral toned gray

---

### Glass & Gradient Rule

- Floating UI: `#e4e2de` (85%) + blur

- CTA Gradient: `#154212 → #2d5a27`

---

## 3. Typography System

### Editorial + Functional Balance

| Level | Token | Font | Size | Purpose |

|------|------|------|------|--------|

| Display | display-md | Newsreader | 2.75rem | Exam titles |

| Headline | headline-sm | Newsreader | 1.5rem | Section headers |

| Title | title-md | Manrope | 1.125rem | Questions |

| Body | body-lg | Manrope | 1rem | Question text |

| Label | label-md | Manrope | 0.75rem | Metadata |

---

### Exam-Specific Rules

- Questions must be **highly readable**

- Avoid overly decorative styles inside questions

- Serif = structure, Sans = clarity

---

## 4. Responsive Typography

### 📱 Mobile (≤ 768px)

- Base: **16px**

- Line height: **1.5–1.7**

| Token | Size |

|------|------|

| display-md | 2rem |

| headline-sm | 1.25rem |

| title-md | 1rem |

| body-lg | 1rem |

| label-md | 0.75rem |

**Focus:**

- Fast scanning

- Thumb-friendly reading

- Minimal fatigue during long exams

---

### 💻 Desktop (≥ 1024px)

- Base: **18px**

- Max width: **700px**

| Token | Size |

|------|------|

| display-md | 3–3.5rem |

| headline-sm | 1.75rem |

| title-md | 1.25rem |

| body-lg | 1.125rem |

| label-md | 0.875rem |

**Focus:**

- Deep reading

- Clear hierarchy

- Reduced cognitive strain

---

### Fluid Scaling

```css

body {

font-size: clamp(16px, 1.2vw, 18px);

}

.display-md {

font-size: clamp(2rem, 4vw, 3.5rem);

}

```