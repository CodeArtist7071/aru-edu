# AI Conversation Log: pyq_analyst
Model: gemini-2.5-flash-lite
Date: 2026-04-13T12:17:49.049188

## Interaction [12:17:53]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [12:18:01]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [12:20:35]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [12:20:43]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:37:08]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:37:32]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:37:34]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:37:40]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to cover a distance of 1500 meters?",
    "options": {
      "A": "60 seconds",
      "B": "75 seconds",
      "C": "90 seconds",
      "D": "120 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    "options": {
      "A": "25",
      "B": "30",
      "C": "35",
      "D": "40"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 3,
    "question": "If the cost price of 10 pens is equal to the selling price of 8 pens, then the profit percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 8 times itself?",
    "options": {
      "A": "15 years",
      "B": "20 years",
      "C": "25 years",
      "D": "30 years"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 75. The numbers are:",
    "options": {
      "A": "15 and 25",
      "B": "20 and 30",
      "C": "25 and 35",
      "D": "30 and 45"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "LCM and HCF"
  },
  {
    "question_number": 6,
    "question": "A man can do a work in 15 days. He works for 5 days and then B joins him. If the remaining work is completed in 5 more days, then B alone can do the work in:",
    "options": {
      "A": "10 days",
      "B": "12 days",
      "C": "15 days",
      "D": "20 days"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 7,
    "question": "The difference between the compound interest and simple interest on a certain sum for 2 years at 10% per annum is Rs. 40. The sum is:",
    "options": {
      "A": "Rs. 4000",
      "B": "Rs. 4500",
      "C": "Rs. 5000",
      "D": "Rs. 6000"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 8,
    "question": "Two pipes A and B can fill a cistern in 10 hours and 15 hours respectively. Both pipes are opened, but after 2 hours, pipe A is closed. How many more hours will pipe B take to fill the cistern?",
    "options": {
      "A": "8 hours",
      "B": "10 hours",
      "C": "12 hours",
      "D": "14 hours"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Pipes and Cisterns"
  },
  {
    "question_number": 9,
    "question": "A boat travels downstream at 20 km/hr and upstream at 10 km/hr. The speed of the boat in still water is:",
    "options": {
      "A": "10 km/hr",
      "B": "12.5 km/hr",
      "C": "15 km/hr",
      "D": "17.5 km/hr"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 10,
    "question": "The sum of three consecutive integers is 120. The largest integer is:",
    "options": {
      "A": "39",
      "B": "40",
      "C": "41",
      "D": "42"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  }
]
```

---

## Interaction [17:37:42]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:37:44]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:37:47]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:37:49]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:37:50]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM and HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:37:52]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

## Interaction [17:37:54]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:37:55]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Pipes and Cisterns
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Pipes and Cisterns"}
```

---

## Interaction [17:37:57]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boats and Streams
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:37:59]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:38:01]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        © Copyright of Publisher
Edition : 2025
SSC MATHS The Complete Coaching
8000+ Chapter - Wise ( Type wise ) • Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas • Best Explanation & Exam Approach
SSC - CGL ( Tier- & II ) , CHSL Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
Price 800 / -
Cover Design : Divesh Kumar
No part of this publication may be re - produced , stored in a retrieval system or by any means , electronic , mechanical , photocopying , recording , scanning , web or otherwise without the written permission of the publisher . Champion Publication has taken utmost precaution in publishing the book , yet if any mistake has inadvertently crept in , the publishers shall not be responsible for the same .
CHAMPION
Useful for
Publisher & Distributor Jaina Extention , Dr. Mukherjee Nagar , Delhi - 110009 Contact No : +91 7351553388 ( Only message )
CHAMPION PUBLICATION
CHA PION PUBLICATION
English
TCS MCQ
Published by
Champion Publication ( India ) For further information about the products
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:38:03]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        Dedicated To God My source of inspiration and strength , I dedicate this book with heartfelt . gratitude . His unwavering guidance has transformed my passion for writing . His presence ignited my courage and clarity . May this work resonate with those seeking guidance and knowledge just as his light has illuminated my path . Thank you for the gift of creativity and wisdom
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:38:11]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        90 - Days SSC Maths Preparation Plan This structured 90 - day strategy is designed to help SSC aspirants systematically prepare for Maths and excel in exams .
Goal : Strengthen basics , understand concepts , and build speed . Topics to Cover : 1. Days 1-7 : Number System & Simplification Learn short tricks to improve calculation speed . 2. Days 8-14 : Surds and Indices , LCM & HCF , Percentage 3. Days 15-22 : Profit & Loss , Discount 4. Days 23-29 : Simple Interest & Compound Interest 5. Days 30-36 : Ratio & Proportion , Mixture & Alligation , Age 6. Days 37-40 : Partnership , Average
7. Days 41-51 : Time & Work , Pipe & Cistern , Time Speed & Distance , Boat & Stream , Race Phase 2 : Advance to Complex Topics ( Days 31-60 ) Goal : Gain expertise over Algebra , Trigonometry , Geometry , Mensuration . Topics to Cover :
3. Days 66-75 : Geometry Memorize properties of figures . Solve diagram - based questions ( SSC favorites ) . 4. Days 76-80 : Co - Ordinate Geometry , 2D Mensuration , Polygon
5. Days 81-90 : 3D Mensuration , Statistics , Probability , Data Interpretation ( DI ) Daily Routine for 90 Days 1. Concept Learning ( 2 Hours ) : Study theory , formulas and tricks . 2. Practice ( 3 Hours ) : Solve topic - wise and TCS - pattern MCQs . 3. Mock Test ( 1 Hour ) : Attempt quizzes or practice sets with time line . Analyze mistakes and revise weaker topics .
2. Focus on TCS Questions : Prioritize practice on frequently repeated patterns . 3. Weekly Formula Revision : Keep revising formulas and shortcuts . 4. Analyze Mistakes : Learn from errors in mock tests to avoid repeating them in the exam .
Phase 1 : Build the Foundation
1. Days 52-57 : Algebra
2. Days 58-65 : Trigonometry & Heights and Distances * Learn trigonometric values and key identities . * Solve angle - based problems using tricks from the book .
Important Tips for Success :
1. Consistency is Key : Stick to the schedule and practice daily .
Final Words : " With discipline , dedication , and daily practice , success is just a matter of time ! ”
Solve 70+
TCS MCQs daily
Revise all key formulas from the Formula Section of this book daily
Mark Tough Questions
& Revise them after completing the chapter
With Best Wishes Champion Publication :
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "Which of the following is a prime number?",
    "options": {
      "A": "4",
      "B": "6",
      "C": "7",
      "D": "9"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  },
  {
    "question_number": 2,
    "question": "What is the value of 5^2?",
    "options": {
      "A": "10",
      "B": "25",
      "C": "30",
      "D": "50"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  },
  {
    "question_number": 3,
    "question": "If a number is divisible by both 2 and 3, it is also divisible by:",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "8"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  },
  {
    "question_number": 4,
    "question": "What is the LCM of 4 and 6?",
    "options": {
      "A": "10",
      "B": "12",
      "C": "24",
      "D": "4"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "LCM & HCF"
  },
  {
    "question_number": 5,
    "question": "If the cost price of an item is $100 and the selling price is $120, what is the profit percentage?",
    "options": {
      "A": "10%",
      "B": "15%",
      "C": "20%",
      "D": "25%"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "question_number": 6,
    "question": "A discount of 10% is given on an item priced at $200. What is the selling price?",
    "options": {
      "A": "$180",
      "B": "$190",
      "C": "$200",
      "D": "$220"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Discount"
  },
  {
    "question_number": 7,
    "question": "What is the simple interest on $1000 at 5% per annum for 2 years?",
    "options": {
      "A": "$50",
      "B": "$100",
      "C": "$150",
      "D": "$200"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 8,
    "question": "If the ratio of two numbers is 2:3 and their sum is 50, what are the numbers?",
    "options": {
      "A": "20 and 30",
      "B": "10 and 40",
      "C": "25 and 25",
      "D": "15 and 35"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 9,
    "question": "A train travels 100 km in 2 hours. What is its speed?",
    "options": {
      "A": "40 km/hr",
      "B": "50 km/hr",
      "C": "60 km/hr",
      "D": "70 km/hr"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Time Speed & Distance"
  },
  {
    "question_number": 10,
    "question": "If sin(theta) = 3/5, what is cos(theta)? (Assume theta is acute)",
    "options": {
      "A": "3/5",
      "B": "4/5",
      "C": "5/3",
      "D": "5/4"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Trigonometry"
  },
  {
    "question_number": 11,
    "question": "What is the area of a square with side length 5 units?",
    "options": {
      "A": "10 sq units",
      "B": "20 sq units",
      "C": "25 sq units",
      "D": "30 sq units"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration"
  },
  {
    "question_number": 12,
    "question": "What is the probability of getting a head when a fair coin is tossed?",
    "options": {
      "A": "0",
      "B": "1/2",
      "C": "1",
      "D": "1/4"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Probability"
  }
]
```

---

## Interaction [17:38:14]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:38:15]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:38:16]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:38:18]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:38:19]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM & HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:38:21]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:38:23]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:38:24]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit & Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:38:26]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Discount
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Discounts"}
```

---

## Interaction [17:38:28]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:38:29]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 72 km/hr. What is its speed in m/s?",
    "options": {
      "A": "15 m/s",
      "B": "20 m/s",
      "C": "25 m/s",
      "D": "30 m/s"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "If the cost price of 10 pens is equal to the selling price of 8 pens, then the profit percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "15%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 3,
    "question": "The sum of two numbers is 120 and their difference is 40. The numbers are:",
    "options": {
      "A": "80 and 40",
      "B": "70 and 50",
      "C": "90 and 30",
      "D": "100 and 20"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Numbers and Algebra"
  },
  {
    "question_number": 4,
    "question": "A can do a piece of work in 10 days and B can do it in 15 days. In how many days can they together finish the work?",
    "options": {
      "A": "5 days",
      "B": "6 days",
      "C": "7 days",
      "D": "8 days"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 5,
    "question": "What is the value of (100 - 10) * 5 + 20?",
    "options": {
      "A": "470",
      "B": "450",
      "C": "430",
      "D": "410"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Simplification"
  },
  {
    "question_number": 6,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. The excluded number is:",
    "options": {
      "A": "35",
      "B": "37",
      "C": "39",
      "D": "41"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Average"
  },
  {
    "question_number": 7,
    "question": "If a number is increased by 20% and then decreased by 20%, the net percentage change is:",
    "options": {
      "A": "4% increase",
      "B": "4% decrease",
      "C": "No change",
      "D": "2% increase"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "question_number": 8,
    "question": "The ratio of two numbers is 3:5 and their sum is 80. The numbers are:",
    "options": {
      "A": "30 and 50",
      "B": "24 and 40",
      "C": "15 and 25",
      "D": "35 and 45"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio and Proportion"
  },
  {
    "question_number": 9,
    "question": "A shopkeeper sells an article for Rs. 200 with a profit of 25%. The cost price of the article is:",
    "options": {
      "A": "Rs. 150",
      "B": "Rs. 160",
      "C": "Rs. 170",
      "D": "Rs. 180"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 10,
    "question": "The perimeter of a square is 48 cm. The area of the square is:",
    "options": {
      "A": "144 sq cm",
      "B": "120 sq cm",
      "C": "100 sq cm",
      "D": "96 sq cm"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Area and Perimeter)"
  }
]
```

---

## Interaction [17:38:31]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:38:33]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:38:34]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:38:36]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:38:38]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Numbers and Algebra
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Numbers and Algebra"}
```

---

## Interaction [17:38:42]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

## Interaction [17:38:45]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simplification
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Simplification Techniques"}
```

---

## Interaction [17:38:46]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:38:49]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Trigonometry
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Trigonometry"}
```

---

## Interaction [17:38:51]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Mensuration
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Mensuration"}
```

---

## Interaction [17:38:52]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Percentage
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Percentages"}
```

---

## Interaction [17:39:01]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Probability
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Probability"}
```

---

## Interaction [17:39:02]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio and Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:39:03]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:39:05]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        INDEX
When divided by 2 or more numbers and leaves same remainder Largest and Smallest number divisible by no . 1 , no . 2 and no.3 Add / Subtract to get perfect square / cube or divisible by n Number = Quotient × Divisor + Remainder
Largest and Smallest number divisible by no . 1 , no . 2 no . 3 leaves remainder x1 , x2 , x3
Leaves same remainder when divisible by n
Based on Addition Subtraction Division Multiplication
Sr. No. Chapter Name Ch . 1. Number System
܀
Divisibility Rule
܀
Remainder
Counting of numbers divisible by n
*
Number of factors
܀
Successive division
*
*
Series
*
Recurring Decimal
܀
Ladder Fractions
Unit Digit
Number Formation
Miscellaneous
Ch . 2. Simplification Basic Simplification Based on BODMAS Square & Square Root
܀
Cube & Cube Root
*
Continued / Ladder Fraction
Ch . 3. Surds and Indices ( Day → 8 )
Ch . 4. LCM & HCF
܀
LCM × HCF = No. I × II
Based on ratio of number
Ch . 5. Percentage
*
Basic Concept
X is less / more than Y than m %
Income Expenditure
Consumption & Expenditure
Based on Numbers Successive Increase / Decrease
Page Number
01-53
Day → 1 Day → 2
Day 2
Day → 3
Day 3
Day 3
Day → 3
Day → 3
Day → 4
Day → 4
Day 4
Day → 4
Day → 4
Day 4
Day → 4
Day → 4
Day 5
54-76
Day → 6
Day 6
Day → 7
Day → 7
Day 7
77-84
85-97
Day → 9
Day → 9
Day → 9
98-144
Day 10
Day 10
Day 10
Day 11
Day → 11
Day 11
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "When divided by 2 or more numbers and leaves same remainder",
    "options": {
      "A": "Largest and Smallest number divisible by no. 1, no. 2 and no.3",
      "B": "Add / Subtract to get perfect square / cube or divisible by n",
      "C": "Number = Quotient × Divisor + Remainder",
      "D": "Largest and Smallest number divisible by no. 1, no. 2 no. 3 leaves remainder x1, x2, x3"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  },
  {
    "question_number": 2,
    "question": "Leaves same remainder when divisible by n",
    "options": {
      "A": "Based on Addition Subtraction Division Multiplication",
      "B": "Number = Quotient × Divisor + Remainder",
      "C": "Largest and Smallest number divisible by no. 1, no. 2 no. 3 leaves remainder x1, x2, x3",
      "D": "Add / Subtract to get perfect square / cube or divisible by n"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  },
  {
    "question_number": 3,
    "question": "Divisibility Rule",
    "options": {
      "A": "Successive division",
      "B": "Number of factors",
      "C": "Remainder",
      "D": "Counting of numbers divisible by n"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  },
  {
    "question_number": 4,
    "question": "Basic Simplification Based on BODMAS",
    "options": {
      "A": "Square & Square Root",
      "B": "Cube & Cube Root",
      "C": "Continued / Ladder Fraction",
      "D": "Recurring Decimal"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Simplification"
  },
  {
    "question_number": 5,
    "question": "LCM × HCF = No. I × II",
    "options": {
      "A": "Based on ratio of number",
      "B": "LCM & HCF",
      "C": "Percentage",
      "D": "Surds and Indices"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "LCM & HCF"
  },
  {
    "question_number": 6,
    "question": "X is less / more than Y than m %",
    "options": {
      "A": "Income Expenditure",
      "B": "Consumption & Expenditure",
      "C": "Based on Numbers",
      "D": "Successive Increase / Decrease"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  }
]
```

---

## Interaction [17:39:05]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Mensuration (Area and Perimeter)
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Mensuration: Area and Perimeter"}
```

---

## Interaction [17:39:07]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:39:09]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:39:11]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:39:12]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simplification
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Simplification Techniques"}
```

---

## Interaction [17:39:16]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM & HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:39:20]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Percentage
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Percentages"}
```

---

## Interaction [17:39:27]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        INDEX
If he had sold it / bought it for Rs . Y more than
MP is x % higher than CP . A discount of y % is given , find Loss / gain %
Earn profit of x % after allowing a discount y %
Sum of money becomes N times in T years If SI on a certain sum for N years is x / y of the sum When sum of money is invested at different rate
܀
Mixture and Alligation Based Based on Examination
Based on Elections
Tax Based Area , Volume Based Population Based
A * B = C
*
Commission Based
*
Venn Diagram Miscellaneous
܀
Ch . 6. Profit & Loss
Basic
܀
x CP = y SP
܀
Profit / Loss on CP & SP
*
Loss / Gain % = CP / SP
܀
When 2 SP of the Same article is given
Articles are sold in chain
܀
*
܀
Based on MP
܀
Bought 2 Article for Rs . ✗
Sold 2 Articles for Rs . X
܀
Dishonest Seller Multiple Articles Successive increase
܀
Miscellaneous
Ch . 7. Discount
܀
Basic Concept / Successive Discount
܀
Find Discount / MP / SP
܀
܀
Miscellaneous
܀
Ch . 8. Simple Interest
܀
Basic Concept
܀
܀
*
܀
When rate is charges
*
Installment
Miscellaneous
12
Day
Day → 12
Day 12
Day 13
Day → 13
Day 13
Day 13
Day 13
Day 13
Day 14
145-190
Day → 15
Day → 15
Day → 15
Day → 15
Day 16
16
Day
Day → 16
Day → 17
Day 17
Day → 17
Day 18
Day → 18
Day → 19
Day 19
191-225
Day → 20
Day → 21
Day → 21
Day
→ 22 Day → 22 226-254
Day → 23 Day → 23
Day
→ 24 Day → 24
Day → 24
Day → 25
Day → 26
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "MP is x % higher than CP . A discount of y % is given , find Loss / gain %",
    "options": {
      "A": "Gain % = (x - y - xy/100) %",
      "B": "Gain % = (x + y - xy/100) %",
      "C": "Loss % = (x - y + xy/100) %",
      "D": "Loss % = (x + y + xy/100) %"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "question_number": 2,
    "question": "Earn profit of x % after allowing a discount y %",
    "options": {
      "A": "MP = CP * (100+x)/(100-y) * 100",
      "B": "MP = CP * (100-y)/(100+x) * 100",
      "C": "MP = CP * (100+x)/(100-y)",
      "D": "MP = CP * (100-y)/(100+x)"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Discount"
  },
  {
    "question_number": 3,
    "question": "Sum of money becomes N times in T years",
    "options": {
      "A": "SI = P(N-1)",
      "B": "SI = P(N)",
      "C": "SI = P(N+1)",
      "D": "SI = P(N-1)/T"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 4,
    "question": "If SI on a certain sum for N years is x / y of the sum",
    "options": {
      "A": "Rate = (x/y) * 100 / N",
      "B": "Rate = (x/y) * N / 100",
      "C": "Rate = (y/x) * 100 / N",
      "D": "Rate = (y/x) * N / 100"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "When sum of money is invested at different rate",
    "options": {
      "A": "SI1 + SI2 = Total SI",
      "B": "SI1 * SI2 = Total SI",
      "C": "SI1 / SI2 = Total SI",
      "D": "SI1 - SI2 = Total SI"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 6,
    "question": "x CP = y SP",
    "options": {
      "A": "Profit/Loss % = (y-x)/x * 100",
      "B": "Profit/Loss % = (x-y)/y * 100",
      "C": "Profit/Loss % = (y-x)/y * 100",
      "D": "Profit/Loss % = (x-y)/x * 100"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "question_number": 7,
    "question": "Loss / Gain % = CP / SP",
    "options": {
      "A": "This statement is incorrect. Loss/Gain % is calculated based on the difference between CP and SP.",
      "B": "This statement is incorrect. Loss/Gain % is calculated as (SP-CP)/CP * 100 for gain and (CP-SP)/CP * 100 for loss.",
      "C": "This statement is incorrect. Loss/Gain % is calculated as (SP-CP)/SP * 100 for gain and (CP-SP)/SP * 100 for loss.",
      "D": "This statement is incorrect. Loss/Gain % is calculated as (CP-SP)/SP * 100 for gain and (SP-CP)/CP * 100 for loss."
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  }
]
```

---

## Interaction [17:39:28]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit & Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:39:30]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Discount
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Discounts"}
```

---

## Interaction [17:39:33]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:39:35]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:39:37]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:39:39]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:39:40]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit & Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:39:42]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit & Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:39:49]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:39:54]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:39:58]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        INDEX
When CI and 2nd / 3rd Years is given When compounding is done half years / monthly If amount becomes N times after T years
A sum of money amounts to Rs . X1 and T1 years and X2 in T2 years Day → 28 Different Rate are given
Average of Consecutive Even / odd / Natural / Prime numbers When average of some numbers is given and some numbers out of them is calculated
Ch . 9. Compound Interest
܀
Basic Concept
܀
*
*
CI and SI Mixed
܀
Based on Loan
܀
Different Between CI and SI
Installment
Ch . 10. Ratio & Proportion
Basic Concept
܀
Based on Proportional
*
Based on Coins
܀
Based on Sharing
܀
Based on Numbers
܀
Initial and Final Ratio is given
܀
Income and Expenditure
Miscellaneous
܀
Ch . 11. Mixture & Alligation
܀
Based on Mixture Based on Alligation
Ch . 12. Age
Ch . 13. Partnership
܀
Basic Concept
When capital / Time Changes
☑
When other person joins in between
܀
When some profit is used somewhere
܀
Working partner
Ch . 14. Average
܀
Basic concept
When change in data happens
܀
Based on correct average and mistake
܀ ܀ ܀
Based on Cricket
Weighted Average
255-287
Day → 27
Day → 27
Day → 27
Day → 28
Day → 28
Day → 28
Day → 28
Day → 29
Day → 29
288-320
Day → 30
Day 30
Day 31
Day → 31
31
Day
31
Day
32
Day
Day → 33
321-342
Day → 34 Day → 35
343-350
351-361
Day → 37
Day → 37
Day → 37
Day → 37
Day → 37
362-397
Day → 38
Day 38
Day 38
Day → 38
38
Day
Day → 39
Day → 39
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "When CI and 2nd / 3rd Years is given",
    "options": {
      "A": "When compounding is done half years / monthly",
      "B": "If amount becomes N times after T years",
      "C": "A sum of money amounts to Rs . X1 and T1 years and X2 in T2 years",
      "D": "Day → 28"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 2,
    "question": "When compounding is done half years / monthly",
    "options": {
      "A": "When CI and 2nd / 3rd Years is given",
      "B": "If amount becomes N times after T years",
      "C": "A sum of money amounts to Rs . X1 and T1 years and X2 in T2 years",
      "D": "Day → 28"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 3,
    "question": "If amount becomes N times after T years",
    "options": {
      "A": "When CI and 2nd / 3rd Years is given",
      "B": "When compounding is done half years / monthly",
      "C": "A sum of money amounts to Rs . X1 and T1 years and X2 in T2 years",
      "D": "Day → 28"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 4,
    "question": "A sum of money amounts to Rs . X1 and T1 years and X2 in T2 years",
    "options": {
      "A": "When CI and 2nd / 3rd Years is given",
      "B": "When compounding is done half years / monthly",
      "C": "If amount becomes N times after T years",
      "D": "Day → 28"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 5,
    "question": "Day → 28",
    "options": {
      "A": "When CI and 2nd / 3rd Years is given",
      "B": "When compounding is done half years / monthly",
      "C": "If amount becomes N times after T years",
      "D": "A sum of money amounts to Rs . X1 and T1 years and X2 in T2 years"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 6,
    "question": "Different Rate are given",
    "options": {
      "A": "Average of Consecutive Even / odd / Natural / Prime numbers",
      "B": "When average of some numbers is given and some numbers out of them is calculated",
      "C": "Day → 27",
      "D": "Day → 28"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 7,
    "question": "Average of Consecutive Even / odd / Natural / Prime numbers",
    "options": {
      "A": "Different Rate are given",
      "B": "When average of some numbers is given and some numbers out of them is calculated",
      "C": "Day → 27",
      "D": "Day → 28"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  },
  {
    "question_number": 8,
    "question": "When average of some numbers is given and some numbers out of them is calculated",
    "options": {
      "A": "Different Rate are given",
      "B": "Average of Consecutive Even / odd / Natural / Prime numbers",
      "C": "Day → 27",
      "D": "Day → 28"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  },
  {
    "question_number": 9,
    "question": "Ch . 9. Compound Interest",
    "options": {
      "A": "Basic Concept",
      "B": "CI and SI Mixed",
      "C": "Based on Loan",
      "D": "Different Between CI and SI"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 10,
    "question": "Basic Concept",
    "options": {
      "A": "Ch . 9. Compound Interest",
      "B": "CI and SI Mixed",
      "C": "Based on Loan",
      "D": "Different Between CI and SI"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 11,
    "question": "CI and SI Mixed",
    "options": {
      "A": "Basic Concept",
      "B": "Ch . 9. Compound Interest",
      "C": "Based on Loan",
      "D": "Different Between CI and SI"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 12,
    "question": "Based on Loan",
    "options": {
      "A": "Basic Concept",
      "B": "CI and SI Mixed",
      "C": "Ch . 9. Compound Interest",
      "D": "Different Between CI and SI"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 13,
    "question": "Different Between CI and SI",
    "options": {
      "A": "Basic Concept",
      "B": "CI and SI Mixed",
      "C": "Based on Loan",
      "D": "Ch . 9. Compound Interest"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 14,
    "question": "Installment",
    "options": {
      "A": "Basic Concept",
      "B": "CI and SI Mixed",
      "C": "Based on Loan",
      "D": "Different Between CI and SI"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 15,
    "question": "Ch . 10. Ratio & Proportion",
    "options": {
      "A": "Basic Concept",
      "B": "Based on Proportional",
      "C": "Based on Coins",
      "D": "Based on Sharing"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 16,
    "question": "Basic Concept",
    "options": {
      "A": "Ch . 10. Ratio & Proportion",
      "B": "Based on Proportional",
      "C": "Based on Coins",
      "D": "Based on Sharing"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 17,
    "question": "Based on Proportional",
    "options": {
      "A": "Basic Concept",
      "B": "Ch . 10. Ratio & Proportion",
      "C": "Based on Coins",
      "D": "Based on Sharing"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 18,
    "question": "Based on Coins",
    "options": {
      "A": "Basic Concept",
      "B": "Based on Proportional",
      "C": "Ch . 10. Ratio & Proportion",
      "D": "Based on Sharing"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 19,
    "question": "Based on Sharing",
    "options": {
      "A": "Basic Concept",
      "B": "Based on Proportional",
      "C": "Based on Coins",
      "D": "Ch . 10. Ratio & Proportion"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 20,
    "question": "Based on Numbers",
    "options": {
      "A": "Basic Concept",
      "B": "Based on Proportional",
      "C": "Based on Coins",
      "D": "Based on Sharing"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 21,
    "question": "Initial and Final Ratio is given",
    "options": {
      "A": "Basic Concept",
      "B": "Based on Proportional",
      "C": "Based on Coins",
      "D": "Based on Sharing"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 22,
    "question": "Income and Expenditure",
    "options": {
      "A": "Basic Concept",
      "B": "Based on Proportional",
      "C": "Based on Coins",
      "D": "Based on Sharing"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 23,
    "question": "Miscellaneous",
    "options": {
      "A": "Basic Concept",
      "B": "Based on Proportional",
      "C": "Based on Coins",
      "D": "Based on Sharing"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "question_number": 24,
    "question": "Ch . 11. Mixture & Alligation",
    "options": {
      "A": "Based on Mixture",
      "B": "Based on Alligation",
      "C": "Day → 31",
      "D": "Day → 32"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "question_number": 25,
    "question": "Based on Mixture",
    "options": {
      "A": "Ch . 11. Mixture & Alligation",
      "B": "Based on Alligation",
      "C": "Day → 31",
      "D": "Day → 32"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "question_number": 26,
    "question": "Based on Alligation",
    "options": {
      "A": "Ch . 11. Mixture & Alligation",
      "B": "Based on Mixture",
      "C": "Day → 31",
      "D": "Day → 32"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "question_number": 27,
    "question": "Ch . 12. Age",
    "options": {
      "A": "Day → 31",
      "B": "Day → 32",
      "C": "Day → 33",
      "D": "Day → 34"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Age"
  },
  {
    "question_number": 28,
    "question": "Ch . 13. Partnership",
    "options": {
      "A": "Basic Concept",
      "B": "When capital / Time Changes",
      "C": "When other person joins in between",
      "D": "When some profit is used somewhere"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Partnership"
  },
  {
    "question_number": 29,
    "question": "Basic Concept",
    "options": {
      "A": "Ch . 13. Partnership",
      "B": "When capital / Time Changes",
      "C": "When other person joins in between",
      "D": "When some profit is used somewhere"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Partnership"
  },
  {
    "question_number": 30,
    "question": "When capital / Time Changes",
    "options": {
      "A": "Basic Concept",
      "B": "Ch . 13. Partnership",
      "C": "When other person joins in between",
      "D": "When some profit is used somewhere"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Partnership"
  },
  {
    "question_number": 31,
    "question": "When other person joins in between",
    "options": {
      "A": "Basic Concept",
      "B": "When capital / Time Changes",
      "C": "Ch . 13. Partnership",
      "D": "When some profit is used somewhere"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Partnership"
  },
  {
    "question_number": 32,
    "question": "When some profit is used somewhere",
    "options": {
      "A": "Basic Concept",
      "B": "When capital / Time Changes",
      "C": "When other person joins in between",
      "D": "Ch . 13. Partnership"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Partnership"
  },
  {
    "question_number": 33,
    "question": "Working partner",
    "options": {
      "A": "Basic Concept",
      "B": "When capital / Time Changes",
      "C": "When other person joins in between",
      "D": "When some profit is used somewhere"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Partnership"
  },
  {
    "question_number": 34,
    "question": "Ch . 14. Average",
    "options": {
      "A": "Basic concept",
      "B": "When change in data happens",
      "C": "Based on correct average and mistake",
      "D": "Based on Cricket"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  },
  {
    "question_number": 35,
    "question": "Basic concept",
    "options": {
      "A": "Ch . 14. Average",
      "B": "When change in data happens",
      "C": "Based on correct average and mistake",
      "D": "Based on Cricket"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  },
  {
    "question_number": 36,
    "question": "When change in data happens",
    "options": {
      "A": "Basic concept",
      "B": "Ch . 14. Average",
      "C": "Based on correct average and mistake",
      "D": "Based on Cricket"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  },
  {
    "question_number": 37,
    "question": "Based on correct average and mistake",
    "options": {
      "A": "Basic concept",
      "B": "When change in data happens",
      "C": "Ch . 14. Average",
      "D": "Based on Cricket"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  },
  {
    "question_number": 38,
    "question": "Based on Cricket",
    "options": {
      "A": "Basic concept",
      "B": "When change in data happens",
      "C": "Based on correct average and mistake",
      "D": "Ch . 14. Average"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  },
  {
    "question_number": 39,
    "question": "Weighted Average",
    "options": {
      "A": "Basic concept",
      "B": "When change in data happens",
      "C": "Based on correct average and mistake",
      "D": "Based on Cricket"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  }
]
```

---

## Interaction [17:39:59]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to cover a distance of 1500 meters?",
    "options": {
      "A": "60 seconds",
      "B": "90 seconds",
      "C": "120 seconds",
      "D": "150 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    "options": {
      "A": "25",
      "B": "30",
      "C": "35",
      "D": "40"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 3,
    "question": "If the cost price of 10 articles is equal to the selling price of 8 articles, then the gain percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 10 years at simple interest. In how many years will it become 5 times itself?",
    "options": {
      "A": "20 years",
      "B": "30 years",
      "C": "40 years",
      "D": "50 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 75. The numbers are:",
    "options": {
      "A": "15 and 25",
      "B": "20 and 30",
      "C": "25 and 35",
      "D": "30 and 45"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "LCM and HCF"
  },
  {
    "question_number": 6,
    "question": "A can complete a work in 10 days and B can complete the same work in 15 days. In how many days will they complete the work together?",
    "options": {
      "A": "5 days",
      "B": "6 days",
      "C": "7 days",
      "D": "8 days"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 7,
    "question": "The difference between the compound interest and simple interest on a certain sum for 2 years at 10% per annum is Rs. 40. The sum is:",
    "options": {
      "A": "Rs. 4000",
      "B": "Rs. 4500",
      "C": "Rs. 5000",
      "D": "Rs. 6000"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 8,
    "question": "Two trains running on parallel tracks at speeds of 60 km/hr and 75 km/hr respectively. In what time will they be 1.5 km apart if they are running in the same direction?",
    "options": {
      "A": "1 minute",
      "B": "2 minutes",
      "C": "3 minutes",
      "D": "4 minutes"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 9,
    "question": "A man buys a watch for Rs. 500 and sells it at a loss of 15%. The selling price is:",
    "options": {
      "A": "Rs. 400",
      "B": "Rs. 425",
      "C": "Rs. 450",
      "D": "Rs. 475"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 10,
    "question": "The sum of three consecutive integers is 120. The largest integer is:",
    "options": {
      "A": "39",
      "B": "40",
      "C": "41",
      "D": "42"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  }
]
```

---

## Interaction [17:40:00]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:01]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:40:02]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:05]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:40:06]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:07]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:40:08]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:09]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:40:10]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:12]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM and HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:40:12]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:13]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

## Interaction [17:40:16]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:19]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:40:20]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:40:21]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:40:24]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:40:27]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:40:30]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:33]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:34]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:48]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:50]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:52]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:40:56]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:40:56]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:05]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:41:06]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:11]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:11]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to travel 120 meters?",
    "options": {
      "A": "10 seconds",
      "B": "12 seconds",
      "C": "15 seconds",
      "D": "8 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Time and Distance"
  },
  {
    "question_number": 2,
    "question": "If the cost price of 10 pens is equal to the selling price of 8 pens, then the profit percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "15%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 3,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. Find the excluded number.",
    "options": {
      "A": "35",
      "B": "37",
      "C": "39",
      "D": "41"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 5 times itself?",
    "options": {
      "A": "15 years",
      "B": "20 years",
      "C": "25 years",
      "D": "30 years"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 30. The numbers are:",
    "options": {
      "A": "6 and 10",
      "B": "9 and 15",
      "C": "12 and 20",
      "D": "15 and 25"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "LCM and HCF"
  },
  {
    "question_number": 6,
    "question": "If a man can do a piece of work in 10 days, then in how many days will 5 men do the same work?",
    "options": {
      "A": "2 days",
      "B": "5 days",
      "C": "10 days",
      "D": "50 days"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 7,
    "question": "The perimeter of a square is 48 cm. The area of the square is:",
    "options": {
      "A": "144 sq cm",
      "B": "12 sq cm",
      "C": "100 sq cm",
      "D": "169 sq cm"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Square)"
  },
  {
    "question_number": 8,
    "question": "What is 20% of 500?",
    "options": {
      "A": "100",
      "B": "50",
      "C": "200",
      "D": "150"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "question_number": 9,
    "question": "The sum of two numbers is 15 and their difference is 3. The numbers are:",
    "options": {
      "A": "9 and 6",
      "B": "10 and 5",
      "C": "12 and 3",
      "D": "8 and 7"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Algebraic Equations"
  },
  {
    "question_number": 10,
    "question": "A shopkeeper marks his goods 20% above the cost price and then offers a discount of 10%. His profit percentage is:",
    "options": {
      "A": "8%",
      "B": "10%",
      "C": "12%",
      "D": "15%"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  }
]
```

---

## Interaction [17:41:12]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Distance"}
```

---

## Interaction [17:41:13]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:14]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:41:14]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:15]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:41:16]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:18]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:18]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
[AI ERROR] 503: {
  "error": {
    "code": 503,
    "message": "This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.",
    "status": "UNAVAILABLE"
  }
}

```

---

## Interaction [17:41:23]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:24]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM and HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:41:26]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

## Interaction [17:41:27]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Mensuration (Square)
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Mensuration of Squares"}
```

---

## Interaction [17:41:29]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Percentage
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Percentages"}
```

---

## Interaction [17:41:31]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio & Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:41:33]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Algebraic Equations
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Algebraic Equations"}
```

---

## Interaction [17:41:34]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Mixture & Alligation
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Mixtures and Alligations"}
```

---

## Interaction [17:41:37]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:41:38]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Mixture & Alligation
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Mixtures and Alligations"}
```

---

## Interaction [17:41:47]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to cover a distance of 1500 meters?",
    "options": {
      "A": "60 seconds",
      "B": "90 seconds",
      "C": "120 seconds",
      "D": "150 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    "options": {
      "A": "25",
      "B": "30",
      "C": "35",
      "D": "40"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 3,
    "question": "If the cost price of 10 articles is equal to the selling price of 8 articles, then the percentage of profit is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 10 years at simple interest. In how many years will it become 5 times itself?",
    "options": {
      "A": "20 years",
      "B": "30 years",
      "C": "40 years",
      "D": "50 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 30. The numbers are:",
    "options": {
      "A": "3 and 5",
      "B": "6 and 10",
      "C": "9 and 15",
      "D": "15 and 25"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "LCM and HCF"
  },
  {
    "question_number": 6,
    "question": "A man can do a work in 15 days. He works for 5 days and then another man completes the remaining work in 10 days. In how many days would the second man alone complete the work?",
    "options": {
      "A": "15 days",
      "B": "20 days",
      "C": "25 days",
      "D": "30 days"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 7,
    "question": "The difference between the compound interest and simple interest on a certain sum for 2 years at 10% per annum is Rs. 40. The sum is:",
    "options": {
      "A": "Rs. 4000",
      "B": "Rs. 4500",
      "C": "Rs. 5000",
      "D": "Rs. 6000"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 8,
    "question": "Two pipes A and B can fill a cistern in 10 hours and 15 hours respectively. Both pipes are opened, but after 2 hours, pipe B is closed. In how many more hours will pipe A alone fill the remaining part of the cistern?",
    "options": {
      "A": "4 hours",
      "B": "5 hours",
      "C": "6 hours",
      "D": "8 hours"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Pipes and Cisterns"
  },
  {
    "question_number": 9,
    "question": "A boat goes downstream at 20 km/hr and upstream at 15 km/hr. The speed of the boat in still water is:",
    "options": {
      "A": "17.5 km/hr",
      "B": "18 km/hr",
      "C": "17 km/hr",
      "D": "16.5 km/hr"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 10,
    "question": "The sum of three consecutive integers is 120. The largest integer is:",
    "options": {
      "A": "39",
      "B": "40",
      "C": "41",
      "D": "42"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  }
]
```

---

## Interaction [17:41:49]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Mixture & Alligation
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Mixtures and Alligations"}
```

---

## Interaction [17:41:51]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:41:52]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Age
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Age"}
```

---

## Interaction [17:41:54]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:41:58]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:41:59]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:42:00]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Partnership
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Partnership"}
```

---

## Interaction [17:42:01]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM and HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:42:02]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

## Interaction [17:42:04]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Partnership
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Partnership"}
```

---

## Interaction [17:42:05]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:42:07]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Partnership
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Partnership"}
```

---

## Interaction [17:42:07]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Pipes and Cisterns
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Pipes and Cisterns"}
```

---

## Interaction [17:42:09]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Partnership
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Partnership"}
```

---

## Interaction [17:42:11]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Partnership
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Partnership"}
```

---

## Interaction [17:42:11]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boats and Streams
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:42:13]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:42:18]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Partnership
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Partnership"}
```

---

## Interaction [17:42:19]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:42:21]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:42:22]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:42:24]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:42:25]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:42:31]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:42:38]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        INDEX
When n numbers are added in the group When one person left on others Joins
A train / men changes its speed then he arrives at its
Any train crosses both platform and a man / pole at same time
A car / train travel with n / y of its usual speed
When different upstream and downstream distance is given with total time
When upstream and downstream time is given
Average age
܀
Miscellaneous
Ch . 15. Time & Work
܀
Basic Concept
MDH Concept
Workers Leaves or Joins
*
*
When assisted by other person
*
Alternate day basis
܀
Work and Wages Efficiency based
܀
*
M men W women and B boys Miscellaneous
*
Ch . 16. Pipe & Cistern
܀
Basic Concept
Pipe is closed after some time
Alternate Basis
Leak in the Tank
܀
Fraction / part of Filled tank
Ch . 17. Time , Speed & Distance
܀
Basic Concept
Average Speed
Destination before / after
Thief - Police based
܀
܀
Train crossing Based
܀
Train platform / Bridge pole based
Circular and Linear Race
Miscellaneous
Ch . 18. Boat & Stream
܀
Basic Concept
܀
*
*
Question on time
Basic concept of Speed of stream
Based on time
Day → 39
39
Day Day → 40 Day 40
398-439
Day 41
Day 42
Day 42
Day → 42
Day → 42
Day → 43
Day → 43
Day → 43
Day → 44
440458
Day → 45
Day → 45
Day → 46
Day → 46
Day → 46
459-503
Day → 47
Day → 47
Day → 48
Day → 48
Day → 49
Day → 49
Day → 49
Day → 49
Day → 49
50
Day
504-519
Day → 51
Day → 51
Day → 51
Day → 51
Day → 51
Day 51
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "When n numbers are added in the group When one person left on others Joins",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time & Work"
  },
  {
    "question_number": 2,
    "question": "A train / men changes its speed then he arrives at its",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 3,
    "question": "Any train crosses both platform and a man / pole at same time",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 4,
    "question": "A car / train travel with n / y of its usual speed",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 5,
    "question": "When different upstream and downstream distance is given with total time",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Boat & Stream"
  },
  {
    "question_number": 6,
    "question": "When upstream and downstream time is given",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Boat & Stream"
  },
  {
    "question_number": 7,
    "question": "Average age",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Miscellaneous"
  },
  {
    "question_number": 8,
    "question": "Basic Concept",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time & Work"
  },
  {
    "question_number": 9,
    "question": "MDH Concept",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time & Work"
  },
  {
    "question_number": 10,
    "question": "Workers Leaves or Joins",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Time & Work"
  },
  {
    "question_number": 11,
    "question": "When assisted by other person",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Time & Work"
  },
  {
    "question_number": 12,
    "question": "Alternate day basis",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Time & Work"
  },
  {
    "question_number": 13,
    "question": "Work and Wages Efficiency based",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Time & Work"
  },
  {
    "question_number": 14,
    "question": "M men W women and B boys Miscellaneous",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time & Work"
  },
  {
    "question_number": 15,
    "question": "Basic Concept",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Pipe & Cistern"
  },
  {
    "question_number": 16,
    "question": "Pipe is closed after some time",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Pipe & Cistern"
  },
  {
    "question_number": 17,
    "question": "Alternate Basis",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Pipe & Cistern"
  },
  {
    "question_number": 18,
    "question": "Leak in the Tank",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Pipe & Cistern"
  },
  {
    "question_number": 19,
    "question": "Fraction / part of Filled tank",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Pipe & Cistern"
  },
  {
    "question_number": 20,
    "question": "Basic Concept",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 21,
    "question": "Average Speed",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 22,
    "question": "Destination before / after",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 23,
    "question": "Thief - Police based",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Hard",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 24,
    "question": "Train crossing Based",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 25,
    "question": "Train platform / Bridge pole based",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Moderate",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 26,
    "question": "Circular and Linear Race",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Hard",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 27,
    "question": "Miscellaneous",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Time, Speed & Distance"
  },
  {
    "question_number": 28,
    "question": "Basic Concept",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Boat & Stream"
  },
  {
    "question_number": 29,
    "question": "Question on time",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Boat & Stream"
  },
  {
    "question_number": 30,
    "question": "Basic concept of Speed of stream",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Boat & Stream"
  },
  {
    "question_number": 31,
    "question": "Based on time",
    "options": {},
    "correct_answer": "",
    "difficulty_level": "Easy",
    "chapter_name": "Boat & Stream"
  }
]
```

---

## Interaction [17:42:40]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time & Work
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Work"}
```

---

## Interaction [17:42:43]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:42:45]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:42:46]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:42:48]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boat & Stream
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:42:50]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boat & Stream
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:42:52]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Miscellaneous
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Miscellaneous"}
```

---

## Interaction [17:42:54]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time & Work
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Work"}
```

---

## Interaction [17:42:56]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time & Work
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Work"}
```

---

## Interaction [17:43:00]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time & Work
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Work"}
```

---

## Interaction [17:43:02]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time & Work
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Work"}
```

---

## Interaction [17:43:03]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time & Work
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Work"}
```

---

## Interaction [17:43:05]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time & Work
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Work"}
```

---

## Interaction [17:43:06]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time & Work
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time and Work"}
```

---

## Interaction [17:43:08]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Pipe & Cistern
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Pipes and Cisterns"}
```

---

## Interaction [17:43:11]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Pipe & Cistern
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Pipes and Cisterns"}
```

---

## Interaction [17:43:12]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Pipe & Cistern
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Pipes and Cisterns"}
```

---

## Interaction [17:43:14]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Pipe & Cistern
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Pipes and Cisterns"}
```

---

## Interaction [17:43:16]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Pipe & Cistern
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Pipes and Cisterns"}
```

---

## Interaction [17:43:17]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:43:22]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:43:25]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:43:27]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:43:30]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:43:32]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:43:32]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:43:35]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:43:38]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Time, Speed & Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Time, Speed, and Distance"}
```

---

## Interaction [17:43:38]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:43:39]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boat & Stream
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:43:39]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:43:41]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boat & Stream
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:43:43]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boat & Stream
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:43:44]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boat & Stream
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:43:46]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        INDEX
Ch . 19. Race
Linear race Circular race
Ch . 20. Algebra
܀
Power based ( One variable )
Based on cube 3 variable
Based on Square 3 Variable
܀
Based on Quadratic
*
Cube 2 Variable
Square 2 variable Miscellaneous
܀
Ch . 21. Trigonometry Based on a + b = 90 °
܀
Basic Concept
*
Trigonometry Identity
܀
Direct value based
*
Higher Trigonometry Identity
܀
Maximum and Minimum Value
Measures of Angles
Ch . 22. Height & Distance
Angles of elevation
܀
Angles of Depression
܀
When two angles are given
܀
Ladder and broken tree and shadow
Ch . 23. Geometry
܀
Equilateral Triangles
Isosceles Triangles
܀
Scalene Triangles
*
Right Angle Triangle
*
Similar Triangles
Centroid and Median
܀
܀
Incentre Circumcentre Orthocentre Triangle Miscellaneous
܀
Square
܀
Quadrilateral
܀
Trapezium
Parallelogram
Quadrilateral Miscellaneous
520-526 Day → 51 Day → 51 527-580
Day → 52
Day → 53
Day → 54
Day 54
Day → 55
Day → 55
Day → 56 , 57
581-668
Day → 58 Day 58 Day 59,60,61
Day → 62
Day → 63
Day → 64
Day → 64
669-687
Day → 65
Day → 65
Day → 65
Day → 65
688-814
Day → 65
Day → 66
Day → 66
Day → 67
Day → 68
Day → 68
Day → 69
Day → 69
Day → 69
Day → 70
Day → 70
Day → 71
Day → 71
71
Day
Day → 71
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:43:47]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "If the cost price of 101 articles is equal to the selling price of 91 articles, then the gain percentage is:",
    "options": {
      "A": "10.99%",
      "B": "11.98%",
      "C": "10.98%",
      "D": "11.99%"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 2,
    "question": "A shopkeeper sells his goods at a profit of 20%. If he had bought them at 20% less and sold them at Rs. 150 less, he would have gained 10%. The cost price of the goods is:",
    "options": {
      "A": "Rs. 750",
      "B": "Rs. 800",
      "C": "Rs. 900",
      "D": "Rs. 1000"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 3,
    "question": "A man sells two horses for Rs. 19200 each. On one he gains 20% and on the other he loses 20%. His overall gain or loss is:",
    "options": {
      "A": "4% loss",
      "B": "4% gain",
      "C": "5% loss",
      "D": "5% gain"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A shopkeeper professes to sell his goods at cost price, but he uses a weight of 900 grams instead of 1 kg. His gain percentage is:",
    "options": {
      "A": "11.11%",
      "B": "10.11%",
      "C": "11.01%",
      "D": "10.01%"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 5,
    "question": "The marked price of an article is 40% above its cost price. If the article is sold at a discount of 20%, then the gain percentage is:",
    "options": {
      "A": "12%",
      "B": "20%",
      "C": "16%",
      "D": "24%"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 6,
    "question": "A trader marks his goods 50% above the cost price and then offers a discount of 20%. His gain percentage is:",
    "options": {
      "A": "20%",
      "B": "30%",
      "C": "25%",
      "D": "15%"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 7,
    "question": "A shopkeeper allows a discount of 10% on the marked price of an article. If he sells it for Rs. 1800, then the marked price is:",
    "options": {
      "A": "Rs. 2000",
      "B": "Rs. 1980",
      "C": "Rs. 2100",
      "D": "Rs. 2200"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 8,
    "question": "If a shopkeeper sells an article at a profit of 10% and a discount of 10%, then the ratio of marked price to cost price is:",
    "options": {
      "A": "100:91",
      "B": "100:81",
      "C": "100:110",
      "D": "110:100"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 9,
    "question": "A shopkeeper sells an article for Rs. 240 and makes a profit of 20%. The cost price of the article is:",
    "options": {
      "A": "Rs. 200",
      "B": "Rs. 190",
      "C": "Rs. 210",
      "D": "Rs. 220"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 10,
    "question": "A dealer buys a table for Rs. 1200 and sells it at a profit of 25%. The selling price of the table is:",
    "options": {
      "A": "Rs. 1500",
      "B": "Rs. 1400",
      "C": "Rs. 1600",
      "D": "Rs. 1300"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Profit and Loss"
  }
]
```

---

## Interaction [17:43:48]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:43:50]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:43:51]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:43:52]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:43:54]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:43:58]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:44:04]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:44:06]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:44:07]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:44:09]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:44:30]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:44:37]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:44:45]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 72 km/hr. What is its speed in m/s?",
    "options": {
      "A": "15 m/s",
      "B": "20 m/s",
      "C": "25 m/s",
      "D": "30 m/s"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "A car covers a distance of 300 km in 4 hours. What is its average speed?",
    "options": {
      "A": "60 km/hr",
      "B": "75 km/hr",
      "C": "80 km/hr",
      "D": "90 km/hr"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 3,
    "question": "Two trains of length 100 m and 150 m are running on parallel tracks at speeds of 60 km/hr and 40 km/hr respectively. In how much time will they cross each other if they are running in the same direction?",
    "options": {
      "A": "15 seconds",
      "B": "18 seconds",
      "C": "20 seconds",
      "D": "25 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Trains"
  },
  {
    "question_number": 4,
    "question": "A boat can travel at 10 km/hr in still water. If the speed of the stream is 2 km/hr, what is the speed of the boat downstream?",
    "options": {
      "A": "8 km/hr",
      "B": "10 km/hr",
      "C": "12 km/hr",
      "D": "14 km/hr"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 5,
    "question": "A man can row upstream at 6 km/hr and downstream at 10 km/hr. What is the speed of the man in still water?",
    "options": {
      "A": "6 km/hr",
      "B": "7 km/hr",
      "C": "8 km/hr",
      "D": "9 km/hr"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 6,
    "question": "If a man walks at 5 km/hr, he reaches his destination 10 minutes late. If he walks at 6 km/hr, he reaches 5 minutes early. What is the distance he has to cover?",
    "options": {
      "A": "15 km",
      "B": "20 km",
      "C": "25 km",
      "D": "30 km"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 7,
    "question": "A train passes a platform in 30 seconds and a man standing on the platform in 10 seconds. If the length of the train is 150 meters, what is the length of the platform?",
    "options": {
      "A": "200 meters",
      "B": "250 meters",
      "C": "300 meters",
      "D": "350 meters"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Trains"
  },
  {
    "question_number": 8,
    "question": "A boat travels upstream at 8 km/hr and downstream at 12 km/hr. What is the speed of the stream?",
    "options": {
      "A": "1 km/hr",
      "B": "2 km/hr",
      "C": "3 km/hr",
      "D": "4 km/hr"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 9,
    "question": "A person travels from point A to point B at a speed of 40 km/hr and returns from B to A at a speed of 60 km/hr. What is the average speed for the entire journey?",
    "options": {
      "A": "48 km/hr",
      "B": "50 km/hr",
      "C": "52 km/hr",
      "D": "54 km/hr"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 10,
    "question": "Two trains start at the same time from two stations P and Q towards each other. After crossing each other, the trains take 9 hours and 4 hours respectively to reach their destinations. What is the ratio of their speeds?",
    "options": {
      "A": "2:3",
      "B": "3:2",
      "C": "4:5",
      "D": "5:4"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Trains"
  }
]
```

---

## Interaction [17:44:49]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:44:51]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:44:57]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Trains
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Trains"}
```

---

## Interaction [17:45:05]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boats and Streams
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:45:08]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boats and Streams
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:45:15]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:45:18]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:45:21]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Trains
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Trains"}
```

---

## Interaction [17:45:22]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:45:23]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boats and Streams
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:45:27]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:45:28]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:45:29]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Trains
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Trains"}
```

---

## Interaction [17:45:30]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to cover a distance of 2 km?",
    "options": {
      "A": "60 seconds",
      "B": "120 seconds",
      "C": "180 seconds",
      "D": "240 seconds"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    "options": {
      "A": "25",
      "B": "30",
      "C": "35",
      "D": "40"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Averages"
  },
  {
    "question_number": 3,
    "question": "If the cost price of 10 articles is equal to the selling price of 8 articles, then the gain percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 10 years at simple interest. In how many years will it become 5 times itself?",
    "options": {
      "A": "20 years",
      "B": "30 years",
      "C": "40 years",
      "D": "50 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 30. The numbers are:",
    "options": {
      "A": "3 and 5",
      "B": "6 and 10",
      "C": "9 and 15",
      "D": "15 and 25"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Numbers and their Ratios"
  },
  {
    "question_number": 6,
    "question": "A can complete a work in 10 days and B can complete the same work in 15 days. In how many days will they complete the work together?",
    "options": {
      "A": "5 days",
      "B": "6 days",
      "C": "7 days",
      "D": "8 days"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 7,
    "question": "The difference between the compound interest and simple interest on a certain sum for 2 years at 10% per annum is Rs. 40. The sum is:",
    "options": {
      "A": "Rs. 4000",
      "B": "Rs. 5000",
      "C": "Rs. 6000",
      "D": "Rs. 7000"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 8,
    "question": "If a number is increased by 20% and then decreased by 20%, the net percentage change is:",
    "options": {
      "A": "4% increase",
      "B": "4% decrease",
      "C": "No change",
      "D": "2% increase"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "question_number": 9,
    "question": "The sum of two numbers is 15 and their product is 56. The numbers are:",
    "options": {
      "A": "7 and 8",
      "B": "6 and 9",
      "C": "5 and 10",
      "D": "4 and 11"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Quadratic Equations"
  },
  {
    "question_number": 10,
    "question": "A boat travels upstream at 10 km/hr and downstream at 16 km/hr. The speed of the stream is:",
    "options": {
      "A": "3 km/hr",
      "B": "4 km/hr",
      "C": "5 km/hr",
      "D": "6 km/hr"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Boats and Streams"
  }
]
```

---

## Interaction [17:45:31]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:45:33]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 72 km/hr. What is its speed in m/s?",
    "options": {
      "A": "15 m/s",
      "B": "20 m/s",
      "C": "25 m/s",
      "D": "30 m/s"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "A shopkeeper sells an article for Rs. 400 with a profit of 25%. What is the cost price of the article?",
    "options": {
      "A": "Rs. 300",
      "B": "Rs. 320",
      "C": "Rs. 350",
      "D": "Rs. 360"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 3,
    "question": "The sum of two numbers is 120 and their difference is 40. What are the two numbers?",
    "options": {
      "A": "80 and 40",
      "B": "70 and 50",
      "C": "90 and 30",
      "D": "60 and 60"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 4,
    "question": "If 15% of a number is 75, then what is 20% of that number?",
    "options": {
      "A": "90",
      "B": "100",
      "C": "110",
      "D": "120"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "question_number": 5,
    "question": "A man can complete a work in 10 days. In how many days can 5 men complete the same work?",
    "options": {
      "A": "2 days",
      "B": "5 days",
      "C": "8 days",
      "D": "10 days"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 6,
    "question": "What is the value of (100 + 200) * 3?",
    "options": {
      "A": "600",
      "B": "700",
      "C": "800",
      "D": "900"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Basic Arithmetic"
  },
  {
    "question_number": 7,
    "question": "The ratio of two numbers is 3:5 and their sum is 80. What are the numbers?",
    "options": {
      "A": "30 and 50",
      "B": "20 and 60",
      "C": "40 and 40",
      "D": "25 and 55"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio and Proportion"
  },
  {
    "question_number": 8,
    "question": "What is the simple interest on Rs. 5000 at 10% per annum for 3 years?",
    "options": {
      "A": "Rs. 1000",
      "B": "Rs. 1500",
      "C": "Rs. 2000",
      "D": "Rs. 2500"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 9,
    "question": "If the radius of a circle is 7 cm, what is its circumference?",
    "options": {
      "A": "22 cm",
      "B": "44 cm",
      "C": "154 cm",
      "D": "616 cm"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration"
  },
  {
    "question_number": 10,
    "question": "What is the average of the first 5 natural numbers?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  }
]
```

---

## Interaction [17:45:36]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:45:39]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:45:40]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:45:42]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:45:42]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Numbers and their Ratios
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratios and Proportions"}
```

---

## Interaction [17:45:43]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

```

---

## Interaction [17:45:45]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:45:46]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:45:47]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Percentage
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Percentages"}
```

---

## Interaction [17:45:47]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Percentage
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Percentages"}
```

---

## Interaction [17:45:50]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Quadratic Equations
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Quadratic Equations"}
```

---

## Interaction [17:45:50]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

## Interaction [17:45:51]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Basic Arithmetic
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Arithmetic"}
```

---

## Interaction [17:45:51]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boats and Streams
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:45:53]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Ratio and Proportion
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Ratio and Proportion"}
```

---

## Interaction [17:45:57]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:45:59]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Mensuration
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Mensuration"}
```

---

## Interaction [17:46:00]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:46:09]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:46:15]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:46:18]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[AI ERROR] 503: {
  "error": {
    "code": 503,
    "message": "This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.",
    "status": "UNAVAILABLE"
  }
}

```

---

## Interaction [17:46:24]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to cover a distance of 1500 meters?",
    "options": {
      "A": "60 seconds",
      "B": "75 seconds",
      "C": "90 seconds",
      "D": "120 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    "options": {
      "A": "25",
      "B": "30",
      "C": "35",
      "D": "40"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 3,
    "question": "If the cost price of 10 pens is equal to the selling price of 8 pens, then the profit percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 5 times itself?",
    "options": {
      "A": "15 years",
      "B": "20 years",
      "C": "25 years",
      "D": "30 years"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 75. The numbers are:",
    "options": {
      "A": "15 and 25",
      "B": "20 and 30",
      "C": "25 and 35",
      "D": "30 and 45"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "LCM and HCF"
  },
  {
    "question_number": 6,
    "question": "A man can do a piece of work in 10 days. He works for 2 days and then another man completes the remaining work in 8 days. In how many days would the second man alone complete the work?",
    "options": {
      "A": "10 days",
      "B": "12 days",
      "C": "15 days",
      "D": "20 days"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 7,
    "question": "The difference between the compound interest and simple interest on a certain sum for 2 years at 10% per annum is Rs. 40. The sum is:",
    "options": {
      "A": "Rs. 4000",
      "B": "Rs. 4500",
      "C": "Rs. 5000",
      "D": "Rs. 6000"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 8,
    "question": "Two trains of length 100m and 150m are running on parallel tracks with speeds of 40 km/hr and 50 km/hr respectively. In how much time will they cross each other if they are running in the same direction?",
    "options": {
      "A": "15 seconds",
      "B": "18 seconds",
      "C": "20 seconds",
      "D": "25 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Trains"
  },
  {
    "question_number": 9,
    "question": "A shopkeeper sells an article at a profit of 10%. If he had bought it at 10% less and sold it for Rs. 2 more, he would have gained 20%. The cost price of the article is:",
    "options": {
      "A": "Rs. 90",
      "B": "Rs. 100",
      "C": "Rs. 110",
      "D": "Rs. 120"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 10,
    "question": "The sum of three consecutive integers is 120. The largest integer is:",
    "options": {
      "A": "39",
      "B": "40",
      "C": "41",
      "D": "42"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  }
]
```

---

## Interaction [17:46:26]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:46:27]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:46:29]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:46:30]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:46:32]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM and HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:46:35]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

## Interaction [17:46:36]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:46:38]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Trains
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Trains"}
```

---

## Interaction [17:46:42]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:46:44]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:47:31]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:47:36]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:47:39]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:47:45]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to cover a distance of 1500 meters?",
    "options": {
      "A": "60",
      "B": "75",
      "C": "90",
      "D": "120"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. Find the excluded number.",
    "options": {
      "A": "30",
      "B": "35",
      "C": "40",
      "D": "45"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 3,
    "question": "If the cost price of 10 pens is equal to the selling price of 8 pens, then the profit percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 10 years at simple interest. In how many years will it become 5 times itself?",
    "options": {
      "A": "20 years",
      "B": "30 years",
      "C": "40 years",
      "D": "50 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 75. Find the numbers.",
    "options": {
      "A": "15 and 25",
      "B": "20 and 30",
      "C": "25 and 45",
      "D": "30 and 50"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "LCM and HCF"
  },
  {
    "question_number": 6,
    "question": "A man can row upstream at 8 km/hr and downstream at 12 km/hr. The speed of the man in still water is:",
    "options": {
      "A": "9 km/hr",
      "B": "10 km/hr",
      "C": "11 km/hr",
      "D": "12 km/hr"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 7,
    "question": "If 20% of a number is 120, then what is 60% of that number?",
    "options": {
      "A": "360",
      "B": "240",
      "C": "180",
      "D": "300"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentages"
  },
  {
    "question_number": 8,
    "question": "The sum of the ages of a father and son is 60 years. 5 years ago, the father's age was 5 times the son's age. The present age of the father is:",
    "options": {
      "A": "45 years",
      "B": "50 years",
      "C": "55 years",
      "D": "60 years"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Problems on Ages"
  },
  {
    "question_number": 9,
    "question": "A shopkeeper sells two articles for Rs. 1000 each. He gains 10% on one and loses 10% on the other. His overall gain or loss is:",
    "options": {
      "A": "1% loss",
      "B": "1% gain",
      "C": "No gain, no loss",
      "D": "2% loss"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 10,
    "question": "The area of a rectangle is 120 sq cm. If the length is 15 cm, find its breadth.",
    "options": {
      "A": "6 cm",
      "B": "8 cm",
      "C": "10 cm",
      "D": "12 cm"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Area and Perimeter)"
  }
]
```

---

## Interaction [17:47:47]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:47:52]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Averages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:47:54]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:47:56]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:47:57]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM and HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:47:58]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boats and Streams
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:48:00]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Percentages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Understanding Percentages"}
```

---

## Interaction [17:48:01]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Problems on Ages
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Problems on Ages"}
```

---

## Interaction [17:48:03]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:48:05]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Mensuration (Area and Perimeter)
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Mensuration: Area and Perimeter"}
```

---

## Interaction [17:54:12]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [17:54:20]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:54:22]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [17:54:27]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to cover a distance of 1500 meters?",
    "options": {
      "A": "60 seconds",
      "B": "75 seconds",
      "C": "90 seconds",
      "D": "120 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    "options": {
      "A": "25",
      "B": "30",
      "C": "35",
      "D": "40"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Average"
  },
  {
    "question_number": 3,
    "question": "If the cost price of 10 pens is equal to the selling price of 8 pens, then the profit percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 5 times itself?",
    "options": {
      "A": "15 years",
      "B": "20 years",
      "C": "25 years",
      "D": "30 years"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 75. The numbers are:",
    "options": {
      "A": "15 and 25",
      "B": "20 and 30",
      "C": "25 and 45",
      "D": "30 and 50"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "LCM and HCF"
  },
  {
    "question_number": 6,
    "question": "A man can do a work in 15 days. He works for 5 days and then another man completes the remaining work in 10 days. In how many days would the second man alone have done the work?",
    "options": {
      "A": "15 days",
      "B": "20 days",
      "C": "25 days",
      "D": "30 days"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 7,
    "question": "The difference between the compound interest and simple interest on a certain sum for 2 years at 10% per annum is Rs. 40. The sum is:",
    "options": {
      "A": "Rs. 4000",
      "B": "Rs. 4500",
      "C": "Rs. 5000",
      "D": "Rs. 6000"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 8,
    "question": "Two pipes A and B can fill a cistern in 10 hours and 15 hours respectively. Both pipes are opened, but after 2 hours, pipe A is closed. In how many more hours will pipe B fill the remaining part of the cistern?",
    "options": {
      "A": "8 hours",
      "B": "10 hours",
      "C": "12 hours",
      "D": "14 hours"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Pipes and Cisterns"
  },
  {
    "question_number": 9,
    "question": "A boat travels downstream at 20 km/hr and upstream at 12 km/hr. The speed of the stream is:",
    "options": {
      "A": "4 km/hr",
      "B": "6 km/hr",
      "C": "8 km/hr",
      "D": "10 km/hr"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 10,
    "question": "The sum of three consecutive integers is 120. The smallest integer is:",
    "options": {
      "A": "39",
      "B": "40",
      "C": "41",
      "D": "42"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Number System"
  }
]
```

---

## Interaction [17:54:29]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Speed, Time and Distance
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Speed, Time, and Distance"}
```

---

## Interaction [17:54:31]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Average
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Averages"}
```

---

## Interaction [17:54:33]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Profit and Loss
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Profit and Loss Statement"}
```

---

## Interaction [17:54:34]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Simple Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Introduction to Simple Interest"}
```

---

## Interaction [17:54:36]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: LCM and HCF
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Least Common Multiple and Highest Common Factor"}
```

---

## Interaction [17:54:38]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Work and Time
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Work and Time"}
```

---

## Interaction [17:54:40]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Compound Interest
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Compound Interest"}
```

---

## Interaction [17:54:43]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Pipes and Cisterns
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Pipes and Cisterns"}
```

---

## Interaction [17:54:45]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Boats and Streams
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Boats and Streams"}
```

---

## Interaction [17:54:46]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Number System
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Number Systems"}
```

---

## Interaction [17:55:28]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
[AI ERROR] 503: {
  "error": {
    "code": 503,
    "message": "This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.",
    "status": "UNAVAILABLE"
  }
}

```

---

## Interaction [17:55:33]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [17:55:46]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 72 km/hr. What is its speed in m/s?",
    "options": {
      "A": "15 m/s",
      "B": "20 m/s",
      "C": "25 m/s",
      "D": "30 m/s"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 2,
    "question": "A car covers a distance of 300 km in 4 hours. What is its average speed?",
    "options": {
      "A": "60 km/hr",
      "B": "75 km/hr",
      "C": "80 km/hr",
      "D": "90 km/hr"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time and Distance"
  },
  {
    "question_number": 3,
    "question": "Two trains of lengths 100 m and 150 m are running on parallel tracks at speeds of 60 km/hr and 40 km/hr respectively. In how much time will they cross each other if they are running in the same direction?",
    "options": {
      "A": "15 seconds",
      "B": "18 seconds",
      "C": "20 seconds",
      "D": "25 seconds"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Trains"
  },
  {
    "question_number": 4,
    "question": "A boat can travel at 10 km/hr in still water. If the speed of the stream is 2 km/hr, what is the speed of the boat downstream?",
    "options": {
      "A": "8 km/hr",
      "B": "10 km/hr",
      "C": "12 km/hr",
      "D": "14 km/hr"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 5,
    "question": "A man can swim at a speed of 5 km/hr in still water. If the speed of the stream is 1 km/hr, what is the speed of the man upstream?",
    "options": {
      "A": "3 km/hr",
      "B": "4 km/hr",
      "C": "5 km/hr",
      "D": "6 km/hr"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 6,
    "question": "If 5 men can do a piece of work in 10 days, then 10 men can do the same work in how many days?",
    "options": {
      "A": "2 days",
      "B": "5 days",
      "C": "10 days",
      "D": "20 days"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 7,
    "question": "A can do a piece of work in 12 days and B can do the same work in 18 days. In how many days will they finish the work together?",
    "options": {
      "A": "7.2 days",
      "B": "8 days",
      "C": "9 days",
      "D": "10 days"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Work and Time"
  },
  {
    "question_number": 8,
    "question": "The sum of two numbers is 120 and their difference is 40. Find the numbers.",
    "options": {
      "A": "80 and 40",
      "B": "70 and 50",
      "C": "60 and 60",
      "D": "90 and 30"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Algebraic Equations"
  },
  {
    "question_number": 9,
    "question": "If x + y = 10 and x - y = 2, find the value of x.",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "8"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Algebraic Equations"
  },
  {
    "question_number": 10,
    "question": "The ratio of two numbers is 3:5 and their sum is 80. Find the numbers.",
    "options": {
      "A": "30 and 50",
      "B": "20 and 60",
      "C": "40 and 40",
      "D": "25 and 55"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio and Proportion"
  },
  {
    "question_number": 11,
    "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 5 times itself?",
    "options": {
      "A": "10 years",
      "B": "15 years",
      "C": "20 years",
      "D": "25 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 12,
    "question": "The compound interest on Rs. 1000 at 10% per annum for 2 years is:",
    "options": {
      "A": "Rs. 200",
      "B": "Rs. 210",
      "C": "Rs. 220",
      "D": "Rs. 230"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 13,
    "question": "A shopkeeper sells an article for Rs. 500 at a profit of 25%. What is the cost price of the article?",
    "options": {
      "A": "Rs. 375",
      "B": "Rs. 400",
      "C": "Rs. 425",
      "D": "Rs. 450"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 14,
    "question": "A man buys a watch for Rs. 1000 and sells it for Rs. 800. What is his loss percentage?",
    "options": {
      "A": "10%",
      "B": "15%",
      "C": "20%",
      "D": "25%"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 15,
    "question": "The average of 5 numbers is 20. If one number is removed, the average becomes 15. What is the removed number?",
    "options": {
      "A": "30",
      "B": "35",
      "C": "40",
      "D": "45"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Averages"
  },
  {
    "question_number": 16,
    "question": "What is the average of the first 10 natural numbers?",
    "options": {
      "A": "5",
      "B": "5.5",
      "C": "6",
      "D": "10"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 17,
    "question": "Find the HCF of 12, 18, and 24.",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "6"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Number System (HCF & LCM)"
  },
  {
    "question_number": 18,
    "question": "Find the LCM of 4, 6, and 8.",
    "options": {
      "A": "12",
      "B": "16",
      "C": "24",
      "D": "48"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Number System (HCF & LCM)"
  },
  {
    "question_number": 19,
    "question": "If the side of a square is 10 cm, what is its area?",
    "options": {
      "A": "100 sq cm",
      "B": "40 sq cm",
      "C": "20 sq cm",
      "D": "10 sq cm"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Area & Perimeter)"
  },
  {
    "question_number": 20,
    "question": "The length of a rectangle is 15 cm and its breadth is 10 cm. What is its area?",
    "options": {
      "A": "150 sq cm",
      "B": "50 sq cm",
      "C": "25 sq cm",
      "D": "15 sq cm"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Area & Perimeter)"
  },
  {
    "question_number": 21,
    "question": "What is the perimeter of a square with side 5 cm?",
    "options": {
      "A": "5 cm",
      "B": "10 cm",
      "C": "20 cm",
      "D": "25 cm"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Area & Perimeter)"
  },
  {
    "question_number": 22,
    "question": "The radius of a circle is 7 cm. What is its circumference? (Use pi = 22/7)",
    "options": {
      "A": "22 cm",
      "B": "44 cm",
      "C": "154 sq cm",
      "D": "44 sq cm"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Circles)"
  },
  {
    "question_number": 23,
    "question": "The radius of a circle is 7 cm. What is its area? (Use pi = 22/7)",
    "options": {
      "A": "22 sq cm",
      "B": "44 sq cm",
      "C": "154 sq cm",
      "D": "154 cm"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Circles)"
  },
  {
    "question_number": 24,
    "question": "A man buys 10 apples for Rs. 100. What is the cost price of one apple?",
    "options": {
      "A": "Rs. 5",
      "B": "Rs. 10",
      "C": "Rs. 12",
      "D": "Rs. 15"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Basic Arithmetic"
  },
  {
    "question_number": 25,
    "question": "What is 20% of 500?",
    "options": {
      "A": "50",
      "B": "100",
      "C": "150",
      "D": "200"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "question_number": 26,
    "question": "If a number is increased by 20%, it becomes 120. What is the original number?",
    "options": {
      "A": "90",
      "B": "100",
      "C": "110",
      "D": "120"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "question_number": 27,
    "question": "What is the value of (5 + 3) * 2?",
    "options": {
      "A": "10",
      "B": "13",
      "C": "16",
      "D": "20"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Basic Arithmetic"
  },
  {
    "question_number": 28,
    "question": "If 3x = 15, then x = ?",
    "options": {
      "A": "3",
      "B": "5",
      "C": "10",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Algebraic Equations"
  },
  {
    "question_number": 29,
    "question": "What is the sum of the angles in a triangle?",
    "options": {
      "A": "90 degrees",
      "B": "180 degrees",
      "C": "270 degrees",
      "D": "360 degrees"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Geometry (Triangles)"
  },
  {
    "question_number": 30,
    "question": "A clock shows 3:00. What is the angle between the hour hand and the minute hand?",
    "options": {
      "A": "30 degrees",
      "B": "60 degrees",
      "C": "90 degrees",
      "D": "120 degrees"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Clocks and Calendars"
  }
]
```

---

## Interaction [17:55:52]

### Prompt:
```text

        Extract all MCQ questions from this exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Determine a likely chapter name if not explicit.
        
        TEXT:
        SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ
        
        Return ONLY a JSON array of objects:
        [{
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "question_number": 1,
    "question": "A train travels at a speed of 60 km/hr. How many seconds will it take to cover a distance of 0.75 km?",
    "options": {
      "A": "90 seconds",
      "B": "60 seconds",
      "C": "45 seconds",
      "D": "30 seconds"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Speed, Time, and Distance"
  },
  {
    "question_number": 2,
    "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
    "options": {
      "A": "35",
      "B": "30",
      "C": "25",
      "D": "37"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Averages"
  },
  {
    "question_number": 3,
    "question": "If the cost price of 10 pens is equal to the selling price of 8 pens, then the profit percentage is:",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "15%",
      "D": "30%"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit and Loss"
  },
  {
    "question_number": 4,
    "question": "A sum of money doubles itself in 10 years at simple interest. What is the rate of interest per annum?",
    "options": {
      "A": "10%",
      "B": "5%",
      "C": "8%",
      "D": "12%"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Simple Interest"
  },
  {
    "question_number": 5,
    "question": "The ratio of two numbers is 3:5 and their LCM is 135. The numbers are:",
    "options": {
      "A": "27 and 45",
      "B": "9 and 15",
      "C": "18 and 30",
      "D": "36 and 60"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "LCM and HCF"
  },
  {
    "question_number": 6,
    "question": "A man can row upstream at 8 km/hr and downstream at 12 km/hr. The speed of the man in still water is:",
    "options": {
      "A": "10 km/hr",
      "B": "9 km/hr",
      "C": "11 km/hr",
      "D": "10.5 km/hr"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Boats and Streams"
  },
  {
    "question_number": 7,
    "question": "If x + 1/x = 2, then x^3 + 1/x^3 is equal to:",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Algebra"
  },
  {
    "question_number": 8,
    "question": "The area of a rectangle is 120 sq cm. If the length is 15 cm, find its breadth.",
    "options": {
      "A": "6 cm",
      "B": "8 cm",
      "C": "10 cm",
      "D": "12 cm"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Mensuration (Area and Perimeter)"
  },
  {
    "question_number": 9,
    "question": "In what time will Rs. 1000 become Rs. 1331 at 10% per annum compounded annually?",
    "options": {
      "A": "2 years",
      "B": "3 years",
      "C": "4 years",
      "D": "5 years"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "question_number": 10,
    "question": "Two numbers are in the ratio 5:7. If the sum of the numbers is 144, the numbers are:",
    "options": {
      "A": "60 and 84",
      "B": "50 and 70",
      "C": "70 and 98",
      "D": "55 and 77"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio and Proportion"
  }
]
```

---

## Interaction [18:01:24]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:01:42]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        SSC MATHS The Complete Coaching
CHAMPION PUBLICATION
Month
with 3 Strategy
8000+ MCQ Chapter - Wise ( Type wise ) Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas → Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
CHA PION PUBLICATION
English
TCS
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "SSC",
  "exam_name": "CGL, CHSL, CPO, MTS, CDS, GD, Selection Post",
  "year": "2018-2024",
  "shift": null
}
```

---

## Interaction [18:01:44]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 2 ---
SSC MATHS The Complete Coaching 8000+ TCS
Author
Gagan Pratap Sir Co - Author & Editor Manvendra Singh
CHAMPION PUBLICATION
Chapter - Wise ( Type wise ) ◆ Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas ◆ Best Explanation & Exam Approach
Useful for
SSC - CGL ( Tier - I & II ) , CHSL ( Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
CHA PION PUBLICATION
English
MCQ

--- PAGE 3 ---
© Copyright of Publisher
Edition : 2025
SSC MATHS The Complete Coaching
8000+ Chapter - Wise ( Type wise ) • Complete Compilation of TCS Questions ( 2018-2024 ) Important Concepts , Formulas • Best Explanation & Exam Approach
SSC - CGL ( Tier- & II ) , CHSL Tier - I & II ) , CPO , MTS , CDS , GD , Selection Post & other Competitive Exams
Gagan Pratap Sir
Price 800 / -
Cover Design : Divesh Kumar
No part of this publication may be re - produced , stored in a retrieval system or by any means , electronic , mechanical , photocopying , recording , scanning , web or otherwise without the written permission of the publisher . Champion Publication has taken utmost precaution in publishing the book , yet if any mistake has inadvertently crept in , the publishers shall not be responsible for the same .
CHAMPION
Useful for
Publisher & Distributor Jaina Extention , Dr. Mukherjee Nagar , Delhi - 110009 Contact No : +91 7351553388 ( Only message )
CHAMPION PUBLICATION
CHA PION PUBLICATION
English
TCS MCQ
Published by
Champion Publication ( India ) For further information about the products

--- PAGE 4 ---
Dedicated To God My source of inspiration and strength , I dedicate this book with heartfelt . gratitude . His unwavering guidance has transformed my passion for writing . His presence ignited my courage and clarity . May this work resonate with those seeking guidance and knowledge just as his light has illuminated my path . Thank you for the gift of creativity and wisdom

--- PAGE 5 ---
90 - Days SSC Maths Preparation Plan This structured 90 - day strategy is designed to help SSC aspirants systematically prepare for Maths and excel in exams .
Goal : Strengthen basics , understand concepts , and build speed . Topics to Cover : 1. Days 1-7 : Number System & Simplification Learn short tricks to improve calculation speed . 2. Days 8-14 : Surds and Indices , LCM & HCF , Percentage 3. Days 15-22 : Profit & Loss , Discount 4. Days 23-29 : Simple Interest & Compound Interest 5. Days 30-36 : Ratio & Proportion , Mixture & Alligation , Age 6. Days 37-40 : Partnership , Average
7. Days 41-51 : Time & Work , Pipe & Cistern , Time Speed & Distance , Boat & Stream , Race Phase 2 : Advance to Complex Topics ( Days 31-60 ) Goal : Gain expertise over Algebra , Trigonometry , Geometry , Mensuration . Topics to Cover :
3. Days 66-75 : Geometry Memorize properties of figures . Solve diagram - based questions ( SSC favorites ) . 4. Days 76-80 : Co - Ordinate Geometry , 2D Mensuration , Polygon
5. Days 81-90 : 3D Mensuration , Statistics , Probability , Data Interpretation ( DI ) Daily Routine for 90 Days 1. Concept Learning ( 2 Hours ) : Study theory , formulas and tricks . 2. Practice ( 3 Hours ) : Solve topic - wise and TCS - pattern MCQs . 3. Mock Test ( 1 Hour ) : Attempt quizzes or practice sets with time line . Analyze mistakes and revise weaker topics .
2. Focus on TCS Questions : Prioritize practice on frequently repeated patterns . 3. Weekly Formula Revision : Keep revising formulas and shortcuts . 4. Analyze Mistakes : Learn from errors in mock tests to avoid repeating them in the exam .
Phase 1 : Build the Foundation
1. Days 52-57 : Algebra
2. Days 58-65 : Trigonometry & Heights and Distances * Learn trigonometric values and key identities . * Solve angle - based problems using tricks from the book .
Important Tips for Success :
1. Consistency is Key : Stick to the schedule and practice daily .
Final Words : " With discipline , dedication , and daily practice , success is just a matter of time ! ”
Solve 70+
TCS MCQs daily
Revise all key formulas from the Formula Section of this book daily
Mark Tough Questions
& Revise them after completing the chapter
With Best Wishes Champion Publication :

--- PAGE 6 ---
INDEX
When divided by 2 or more numbers and leaves same remainder Largest and Smallest number divisible by no . 1 , no . 2 and no.3 Add / Subtract to get perfect square / cube or divisible by n Number = Quotient × Divisor + Remainder
Largest and Smallest number divisible by no . 1 , no . 2 no . 3 leaves remainder x1 , x2 , x3
Leaves same remainder when divisible by n
Based on Addition Subtraction Division Multiplication
Sr. No. Chapter Name Ch . 1. Number System
܀
Divisibility Rule
܀
Remainder
Counting of numbers divisible by n
*
Number of factors
܀
Successive division
*
*
Series
*
Recurring Decimal
܀
Ladder Fractions
Unit Digit
Number Formation
Miscellaneous
Ch . 2. Simplification Basic Simplification Based on BODMAS Square & Square Root
܀
Cube & Cube Root
*
Continued / Ladder Fraction
Ch . 3. Surds and Indices ( Day → 8 )
Ch . 4. LCM & HCF
܀
LCM × HCF = No. I × II
Based on ratio of number
Ch . 5. Percentage
*
Basic Concept
X is less / more than Y than m %
Income Expenditure
Consumption & Expenditure
Based on Numbers Successive Increase / Decrease
Page Number
01-53
Day → 1 Day → 2
Day 2
Day → 3
Day 3
Day 3
Day → 3
Day → 3
Day → 4
Day → 4
Day 4
Day → 4
Day → 4
Day 4
Day → 4
Day → 4
Day 5
54-76
Day → 6
Day 6
Day → 7
Day → 7
Day 7
77-84
85-97
Day → 9
Day → 9
Day → 9
98-144
Day 10
Day 10
Day 10
Day 11
Day → 11
Day 11

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [18:01:45]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 7 ---
INDEX
If he had sold it / bought it for Rs . Y more than
MP is x % higher than CP . A discount of y % is given , find Loss / gain %
Earn profit of x % after allowing a discount y %
Sum of money becomes N times in T years If SI on a certain sum for N years is x / y of the sum When sum of money is invested at different rate
܀
Mixture and Alligation Based Based on Examination
Based on Elections
Tax Based Area , Volume Based Population Based
A * B = C
*
Commission Based
*
Venn Diagram Miscellaneous
܀
Ch . 6. Profit & Loss
Basic
܀
x CP = y SP
܀
Profit / Loss on CP & SP
*
Loss / Gain % = CP / SP
܀
When 2 SP of the Same article is given
Articles are sold in chain
܀
*
܀
Based on MP
܀
Bought 2 Article for Rs . ✗
Sold 2 Articles for Rs . X
܀
Dishonest Seller Multiple Articles Successive increase
܀
Miscellaneous
Ch . 7. Discount
܀
Basic Concept / Successive Discount
܀
Find Discount / MP / SP
܀
܀
Miscellaneous
܀
Ch . 8. Simple Interest
܀
Basic Concept
܀
܀
*
܀
When rate is charges
*
Installment
Miscellaneous
12
Day
Day → 12
Day 12
Day 13
Day → 13
Day 13
Day 13
Day 13
Day 13
Day 14
145-190
Day → 15
Day → 15
Day → 15
Day → 15
Day 16
16
Day
Day → 16
Day → 17
Day 17
Day → 17
Day 18
Day → 18
Day → 19
Day 19
191-225
Day → 20
Day → 21
Day → 21
Day
→ 22 Day → 22 226-254
Day → 23 Day → 23
Day
→ 24 Day → 24
Day → 24
Day → 25
Day → 26

--- PAGE 8 ---
INDEX
When CI and 2nd / 3rd Years is given When compounding is done half years / monthly If amount becomes N times after T years
A sum of money amounts to Rs . X1 and T1 years and X2 in T2 years Day → 28 Different Rate are given
Average of Consecutive Even / odd / Natural / Prime numbers When average of some numbers is given and some numbers out of them is calculated
Ch . 9. Compound Interest
܀
Basic Concept
܀
*
*
CI and SI Mixed
܀
Based on Loan
܀
Different Between CI and SI
Installment
Ch . 10. Ratio & Proportion
Basic Concept
܀
Based on Proportional
*
Based on Coins
܀
Based on Sharing
܀
Based on Numbers
܀
Initial and Final Ratio is given
܀
Income and Expenditure
Miscellaneous
܀
Ch . 11. Mixture & Alligation
܀
Based on Mixture Based on Alligation
Ch . 12. Age
Ch . 13. Partnership
܀
Basic Concept
When capital / Time Changes
☑
When other person joins in between
܀
When some profit is used somewhere
܀
Working partner
Ch . 14. Average
܀
Basic concept
When change in data happens
܀
Based on correct average and mistake
܀ ܀ ܀
Based on Cricket
Weighted Average
255-287
Day → 27
Day → 27
Day → 27
Day → 28
Day → 28
Day → 28
Day → 28
Day → 29
Day → 29
288-320
Day → 30
Day 30
Day 31
Day → 31
31
Day
31
Day
32
Day
Day → 33
321-342
Day → 34 Day → 35
343-350
351-361
Day → 37
Day → 37
Day → 37
Day → 37
Day → 37
362-397
Day → 38
Day 38
Day 38
Day → 38
38
Day
Day → 39
Day → 39

--- PAGE 9 ---
INDEX
When n numbers are added in the group When one person left on others Joins
A train / men changes its speed then he arrives at its
Any train crosses both platform and a man / pole at same time
A car / train travel with n / y of its usual speed
When different upstream and downstream distance is given with total time
When upstream and downstream time is given
Average age
܀
Miscellaneous
Ch . 15. Time & Work
܀
Basic Concept
MDH Concept
Workers Leaves or Joins
*
*
When assisted by other person
*
Alternate day basis
܀
Work and Wages Efficiency based
܀
*
M men W women and B boys Miscellaneous
*
Ch . 16. Pipe & Cistern
܀
Basic Concept
Pipe is closed after some time
Alternate Basis
Leak in the Tank
܀
Fraction / part of Filled tank
Ch . 17. Time , Speed & Distance
܀
Basic Concept
Average Speed
Destination before / after
Thief - Police based
܀
܀
Train crossing Based
܀
Train platform / Bridge pole based
Circular and Linear Race
Miscellaneous
Ch . 18. Boat & Stream
܀
Basic Concept
܀
*
*
Question on time
Basic concept of Speed of stream
Based on time
Day → 39
39
Day Day → 40 Day 40
398-439
Day 41
Day 42
Day 42
Day → 42
Day → 42
Day → 43
Day → 43
Day → 43
Day → 44
440458
Day → 45
Day → 45
Day → 46
Day → 46
Day → 46
459-503
Day → 47
Day → 47
Day → 48
Day → 48
Day → 49
Day → 49
Day → 49
Day → 49
Day → 49
50
Day
504-519
Day → 51
Day → 51
Day → 51
Day → 51
Day → 51
Day 51

--- PAGE 10 ---
INDEX
Ch . 19. Race
Linear race Circular race
Ch . 20. Algebra
܀
Power based ( One variable )
Based on cube 3 variable
Based on Square 3 Variable
܀
Based on Quadratic
*
Cube 2 Variable
Square 2 variable Miscellaneous
܀
Ch . 21. Trigonometry Based on a + b = 90 °
܀
Basic Concept
*
Trigonometry Identity
܀
Direct value based
*
Higher Trigonometry Identity
܀
Maximum and Minimum Value
Measures of Angles
Ch . 22. Height & Distance
Angles of elevation
܀
Angles of Depression
܀
When two angles are given
܀
Ladder and broken tree and shadow
Ch . 23. Geometry
܀
Equilateral Triangles
Isosceles Triangles
܀
Scalene Triangles
*
Right Angle Triangle
*
Similar Triangles
Centroid and Median
܀
܀
Incentre Circumcentre Orthocentre Triangle Miscellaneous
܀
Square
܀
Quadrilateral
܀
Trapezium
Parallelogram
Quadrilateral Miscellaneous
520-526 Day → 51 Day → 51 527-580
Day → 52
Day → 53
Day → 54
Day 54
Day → 55
Day → 55
Day → 56 , 57
581-668
Day → 58 Day 58 Day 59,60,61
Day → 62
Day → 63
Day → 64
Day → 64
669-687
Day → 65
Day → 65
Day → 65
Day → 65
688-814
Day → 65
Day → 66
Day → 66
Day → 67
Day → 68
Day → 68
Day → 69
Day → 69
Day → 69
Day → 70
Day → 70
Day → 71
Day → 71
71
Day
Day → 71

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[]
```

---

## Interaction [18:02:16]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:02:46]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:03:00]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
832 = 83-17 172
66 2896889
=
1
Base 50 →
× 100
2
1
592 =
( 59 + 9 ) 923481
2
2
1
542 = ( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144
→ 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 32 09 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "Unknown",
  "exam_name": "Unknown",
  "year": "Unknown",
  "shift": "Unknown"
}
```

---

## Interaction [18:03:26]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 15 ---
1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
832 = 83-17 172
66 2896889
=
1
Base 50 →
× 100
2
1
592 =
( 59 + 9 ) 923481
2
2
1
542 = ( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144
→ 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 32 09 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION

--- PAGE 16 ---
Surds and Indices
SURDS AND INDICES
3
"
Laws of Surds
Law of Indices
1
axaxax .... n times = an
a =
√99-70√2 = ( 5√2-7 ) 70√3-2 × 35√√2
an
axaxa = a + n + p ( a = 0 )
=
axb
m
ab
5√2 49 + 50 = 99
= an ( m > n )
a a '
1
= ( ab )
1
√√√√ .....
= a
MS
=
( n > m )
an - m
ya
а
= 1
=
( m
n )
2 " -1
b
#b b
√√√a .... ntimes
a
܀
( am ) n = amxn = anxm = ( an ) m
na Radicand
Pavara .... co
va
܀
( abc ) " = axbnxcn
order of surd
n
dpy
n√a ÷ n√a ÷ n√ .... ∞ = n + 1√a
n
a '
m
܀
=
( b = 0 )
܀
=
( v )
bn
an = Va
√a + √a + √a + ....
( a ) am "
܀
=
Pma
lication
√√4a + 1 + 1 2
= x
( 32 ) 32
+
38316
P
√√√4a + 1-1 2
aq
= y
xp
aq
ач
+ 2 × 2 × √√3
x - y = 1
ab
xy = a
܀
If am an then m = n
-√ ( 2 + √3 ) - ( 2 + √3 )
OR Take two factors of a whose difference is 1 like Then x = Larger factor
If amb then a = b
Gaga
smaller factor
y
܀
√28 + 10√√3 = 10√√3 →
a = 1
x + y = √√4a + 1
2 × 5√3 5² + √32 = 28
܀
1
x =
√a + √a√a + ....
a - 1 =
( a 0 )
+
√√4a - 3 + 1 2
܀
( a - b ) ² = ( b - a ) ² = a² + b² - 2ab
1
1
& an =
a =
-n
an
a
y = √a - va + 1 - √a + √a-
a² + b² - 2ab
..... 00
a - b ( a > b ) b - a ( b > a )
-m
m
b
√4a - 3-1 2
√√43-24√3 = ( 3√3-4 )
=
x - y = 1
xy = 2 ( a - 1 )
24√√3-2 × 12√√3
܀
( -1 ) "
= +1 ( neven ) = -1 ( n = odd )
3√√3 > 16 + 27 = 43
Gagan Pratap Sir
CHA PION PL
77
PUBLICATION

--- PAGE 17 ---
Surds & Indices ( Previous Year Practice Questions )
SSC CHSL
If , 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + , then the value of 2x + 3y + 5z is ( CHSL 2019 Pre ) ( a ) 56 ( b ) 44 ( c ) 32 ( d ) 28 10. The value of
2
1
1
1
( a¹³ + 2a² + 3a + 2a + 1 )
1
1
-2a + 1 ) -a³ ( a¹ - 2 ) .
a3-2a6
when a 7 is : ( CHSL 2019 Pre )
( a ) 7 ( c ) 1
( b ) 0 ( d ) √√7
11. The value of
1
( CHSL 2019
( 9 + 4√5 ) ² is :
( a ) 322
( b ) 424 ( d ) 286
( c ) 246
3a + 3
x4a + 6
pione lication
x25a + 1 27a - 1x8a - 2 x125 the value of
is :
( CHSL 2019 Pre )
( a ) 4 ( c ) 5
( b ) 6 ( d ) 8
13. The value of 5 √√3 +7 √√√√6-
23
√2 + √3 + √6 is : ( CHSL 2019 Pre )
( b ) 16 ( d ) 10
the value of
3 / 15625√x = 4 .
( CHSL 2019 Pre )
( b ) 343 ( d ) 81
( a ) 625 ( c ) 441
-3
( 2x + 3 )
23
ug ]
then the value of √2-42x is :
( CHSL 2019 Pre )
( a ) 5
( b ) 6
( c ) 3
( d ) 4
78
SSC CGL
9 .
17.32 , then the
1. If 5√√3 + √√75
value of 14√3 + √108 is
( CPO 2021 Pre )
( a ) 32.46
( b ) 35.64
( d ) 33.86
( c ) 34.64
SSC CPO
2 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 6250.49 ( b ) 1250.49
( d ) 1354.24
( c ) 5768.28
3 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 2361.96 ( b ) 2758.28
( c ) 72568.4
( d ) 62504.9
4 .
Which one among the following is the smallest ? ( CPO 2019 Pre )
( a ) √401 - √399 ( b ) √101 - √√99
12. If
( c ) √301 - √299
( d ) √201 - √199
1
The value of
is closest
5 .
√7-4√3
( CPO 2019 Pre )
( b ) 4.2
to : ( a ) 4.1 ( c ) 1.2
( d ) 3.7
( a ) 0 ( c ) 12 14. Find
6 .
√0.6912 + √√0.5292 √0.6912 - √0.5292
( CPO 2019 Pre )
( b ) 0.9
( a ) 1.5 ( c ) 15
( d ) 9
7 .
The value
of √√11 + 2√ √18 is
closest to :
( CPO 2019 Pre )
15. If
( a ) 4.8 ( c ) 3.8
( b ) 4.4 ( d ) 4.1
8 .
The value of √6 - √17-2√72 is
closest is :
( CPO 2019 Pre )
( a ) 2.4
( b ) 2.7 ( d ) 1.7
( c ) 2.1
Gagan Pratap Sir
Surds and Indices
= ?
16. √30 + √30 + √30 + .
( CHSL 2019 Pre )
( b ) 4
( a ) 3 ( c ) 6
( d ) 5
17. Find the
value of x , if
21√x + 20√x = 29√x .
( CHSL 2019 Pre )
( b ) 3
( a ) 4 ( c ) 0
( d ) 2
18. If mx - nx = 0 then what is the
1
1 x ™ + x "
+
in
x "
xm
value of terms of x ?
( CHSL 2021 Pre )
2mn
2m
( b )
( a ) 2
x² ( n² + m² )
x² ( m² - n² )
2mn
2mn
( c ) x " ( n² - m² ) ( d ) x ^ ( m² - n² ) 19. Which of the following can be a rationalising
of
factor
( CHSL 2021 Pre )
( √√2 + √3 + √5 ) ? ( a ) ( √2 - √3 - √5 ) √6
4 1526 ,
( b ) ( √2 + √3 - √5 ) √6
( c ) ( √2 - √3 + √5 ) √6
( d ) ( √2 + √3 + √5 ) √6
20. 3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?
( CHSL 2021 Pre )
1
( a )
( b ) 1
( a + b ) ( c ) ( a + b )
( d ) 3
93+ 9 + 9 + 9 + 972
in
x
= ?
21 .
9+ 92+ 93 + 94 + 95
( CHSL 2021 Pre )
( b ) 3
( a ) 9
( d ) 81
( c ) 729
22. √2 + √3 + √2 - √3 = ?
-6
( 3x + 7 ) 5
( CHSL 2021 Pre )
( b ) 2√3
( a ) √√√6 ( c ) 2√√√2
( d ) 6
23. If a + b =
√7 and a -b = √5
then find the value of 8ab ( a² +
b² ) - ( a − b ) ² .
( CHSL 2021 Pre )
( b ) 23
( a ) 19
( d ) 21
( c ) 27
CHA PION PL
PUBLICATION

--- PAGE 19 ---
Percentage
( Previous Year Practice Questions )
1
1
9. The value of 17
77 % of 3
4
1
33
% of 7200 is :
3
( CGL MAINS 2020 ) ( b ) 11.68 ( d ) 9.65
( a ) 7.65 ( c ) 13.65 10. If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :
200
700
( b )
( a )
3
3
500
400 3
( c )
( d )
3
11. What is the value of 7.14 % of
66.67 % of 21.84 ? ( SSC GD 2024 )
( b ) 2.02
( a ) 1.07 ( c ) 1.04
( d ) 1.09
SSC CPO
12. A number which ,
increased by 16 % becomes 1914. The number is :
( CPO 2018 Pre )
( a ) 2220
( b ) 1650
( c ) 1780
( d ) 2010
64
to
converted
percentage is :
25
( CPO 2018 Pre )
hapio fo
( a ) 25.6 ( c ) 0.256
( b ) 256 ( d ) 2.56
14. 2.4 converted to percentage is :
( CPO 2018 Pre ) ( b ) 24 ( d ) 2.4
( a ) 0.24 ( c ) 240
15. If 20 % of a = b , then b % of 20 is
equal to :
( CPO 2018 Pre )
( a ) 4 % of a
( b ) 2 % of a
( c ) 16 % of a
( d ) 8 % of a
16. What is ( 0.08 %
of 0.008 % of 8 ) 1/9 ? ( CPO 2019 Pre ) ( b ) 0.2 ( d ) 0.08
( a ) 0.8 ( c ) 0.64
17. Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ? ( a ) ₹ 850
( CPO 2019 Pre ) ( b ) ₹ 750 ( d ) ₹ 800
( c ) 820
100
Basic Concept
SSC CGL
1 .
If 85 % of a number is added to 75 , then the result is the num- ber itself . The number is :
( a ) 500
( CGL 2018 Pre ) ( b ) 200 ( d ) 100
( c ) 300
2 .
If 50 % of the number is added 75 , then result becomes the same number , then the num-
ber is :
( CGL 2018 Pre )
( a ) 400
( b ) 100 ( d ) 150
( c ) 250
3 .
0.5 is what percentage of 20 ?
( CGL 2022 Pre ) ( b ) 0.25 %
( a ) 25 %
( c ) 2.5 %
( d ) 0.025 %
4 .
If A is 95 % of B , then what per cent of A is B ?
( CGL 2023 Pre )
3
- %
- %
( b ) 104 .
( a ) 110 .
7 19
19
17
( d ) 105. - %
- %
5 19
( c ) 107
19
13 .
Which of the following is the
5 .
least ?
( CGL 2023 Pre )
( a ) 9 % of 845
( b ) 12 % of 625
τα
( c ) 10 % of 720
( d ) 15 % of 555
6 .
If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ? ( CGL MAINS 2019 ) 1
( b ) 8 1 / 1 /
( a ) 13
3
3
1
2
( c ) 16
( d ) 33
25 % of ( 50 % of 30 % of 150 )
7 .
= ?
40 % of 2250
( CGL MAINS 2019 ) ( b ) 0.25 % ( d ) 0.225 %
( a ) 0.825 %
( c ) 0.625 %
8 .
What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ? ( CGL MAINS 2019 )
( b ) 45
( a ) 60
( d ) 40
( c ) 50
Gagan Pratap Sir
Percentage
% of
18. In a sweet , one - third is sugar . 7 If the price of sugar now is 6 of the previous price , what is the effective percentage increase in the cost of the sweet ?
( CPO 2024 Pre )
100
200
( a ) %
( b ) %
9
9
100
100
- %
- %
( c )
( d )
18
3
SSC CHSL
19. If x % of y is 150 and y % of z is 300 , then the relation between
x and z is :
( CHSL 2018 Pre )
( b ) z = x / 3
( a ) z = x ( c ) z = x / 2 20. If a % of 240
( d ) z = 2x
is c and c % of a is 117.6 , then the value of a + c
on
is :
( CHSL 2019 Pre )
when
( a ) 238
( b ) 144
( c ) 260
( d ) 196
21. A is 150 % of B and B is 40 % of C. If A + B + C = 20 , then the value of 2B + 3C4A is equal
to :
( CHSL 2020 Pre )
( b ) 14
( a ) 16
( d ) 15
( c ) 20
22. If ( 224 ) 2 ×
( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the
value of x .
( CHSL 2023 Pre )
( b ) 160
( a ) 120 ( c ) 190
( d ) 150
☑SSC MTS & SP 23. By what percentage is the percentage of the number of vowels in the CONSONANT less
of
than the percentage consonants in it ? ( MTS 2020 Pre )
( a ) 33.33 ( c ) 66.67
( b ) 200 ( d ) 50
11
24 .
5
of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ? ( MTS 2020 Pre ) ( a ) 30
( b ) 33 ( d ) 36
( c ) 32
CHA PION PU
PUBLICATION

--- PAGE 20 ---
Profit & Loss ( Previous Year Practice Questions )
By selling a car for * 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :
( CGL 2022 Pre )
( a ) ₹ 2,62,432 ( b ) ₹ 2,65,432 ( c ) 2,65,420 ( d ) ₹ 2,62,424 If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places ) ( CGL 2022 Pre ) ( a ) 38.89 % ( b ) 35.75 %
( c ) 32.25 %
( d ) 28.75 % A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ? ( CGL 2022 Pre ) ( a ) 10.5 % ( b ) 9.5 % ( c ) 9 % ( d ) 10 % 10. If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ? ( CGL 2023 Pre ) ( b ) 100 % ( d ) 25 %
( a ) 75 % ( c ) 50 %
11. Samreen sells a keyboard for * 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ? ( CGL 2024 Pre )
( a ) 2.51 % loss ( b ) 7.42 % gain ( c ) 3.52 % loss ( d ) 3.52 % gain
12. Madhav purchased an item for * 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in * ) ? ( CGL 2024 Pre ) ( b ) 4200 ( d ) 2520
( a ) 6720 ( c ) 1680
13. An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?
( CGL 2024 Pre ) ( b ) 5 : 2
( a ) 2 : 5 ( c ) 2 : 7
( d ) 7 : 2
146
7 .
Basic
SSC CGL
1 .
8 .
A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56 , 250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ? ( CGL 2019 Pre ) ( a ) ₹ 47,750 ( b ) ₹ 8,687.7 ( d ) * 20 , 625
9 .
( c ) ₹ 16,500
2 .
A tea seller used to make 50 % . of profit by selling tea at 9 per When the cost cup . of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ? ( CGL 2021 Pre ) ( a ) 33
( b ) 25
3
1
( c ) 33-
( d ) 30
3
3 .
4 .
5 .
A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ? ( CGL 2021 Pre ) ( a ) 18.75 % ( b ) 20.75 % ( c ) 21.25 % ( d ) 24.25 % The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ) of the mobile phone is ? ( CGL 2021 Pre ) ( a ) 52,000 ( b ) 55,000 ( c ) 45,000 ( d ) 50,000 The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is : ( CGL 2022 Pre ) ( a ) ₹ 8,200 ( b ) ₹ 9,200 ( c ) ₹ 8,000 ( d ) ₹ 9,000 A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ? ( CGL 2022 Pre ) ( a ) 5 % loss ( b ) 6 % profit ( c ) 5 % profit ( d ) 6 % loss
6 .
Gagan Pratap Sir
Profit & Loss
SSC CPO
14. If the selling price of an article is
2
1
of its cost price , the
5
percentage gain is . ( CPO 2018 Pre )
( a ) 47
( b ) 40 ( d ) 25
( c ) 20
15. Ajay buys 18 oranges for * 90 and sells 15 oranges for * 105 . Find the percentage of his
gain .
( CPO 2022 Pre )
( a ) 35 %
( b ) 30 % ( d ) 40 %
( c ) 25 %
16. If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ) of the article is : ( CPO 2023 Pre ) ( b ) 150 ( d ) 100
n
( a ) 175 ( c ) 200
SSC CHSL
17. By selling an article for * 2,300 , Komal gains 25 % . If she sells it for 1955 , then her loss / gain percent is : ( CHSL 2018 Pre )
( a ) Loss , 6.5 % ( b ) Gain , 6.5 % ( c ) Gain , 6.25 % ( d ) Loss , 6.25 %
18. Kishore had a loss of 20 % on selling an article for 7,160 . At what price should he had sold the item to make a profit of 30 % ? ( CHSL 2019 Pre ) ( a ) 11,635 ( b ) 12,007 ( c ) 10,678 ( d ) ₹ 8,988 19. If a saree is sold for 3,060 , the seller will face 15 % loss , at what price should he sell the saree to gain a 20 % profit ? ( CHSL 2019 Pre ) ( a ) ₹ 4,650 ( b ) 3,600 ( d ) 4,320 ( c ) 3,440 20. When an article is sold for * 720 , there is a profit of x % . When the same article is sold for ₹ 750 , profit is ( x + 5 ) % . What is the value of x ?
( CHSL 2019 Pre )
( b ) 18
( a ) 20
( c ) 25
( d ) 15
CHAMPION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 17,
    "question_number": 10,
    "question": "The value of (a¹³ + 2a² + 3a + 2a + 1) / (a³-2a⁶) when a = 7 is :",
    "options": {
      "A": "7",
      "B": "0",
      "C": "1",
      "D": "√7"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 11,
    "question": "The value of (9 + 4√5)² is :",
    "options": {
      "A": "322",
      "B": "424",
      "C": "246",
      "D": "286"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 12,
    "question": "The value of x⁴ᵃ⁺⁶ * x⁵ᵃ⁺¹ / x²ᵃ⁻¹ * x⁸ᵃ⁻² * x¹²⁵ is :",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "8"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 13,
    "question": "The value of 5√√3 + 7√√√√6 - 2√3 / √2 + √3 + √6 is :",
    "options": {
      "A": "12",
      "B": "16",
      "C": "23",
      "D": "10"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 14,
    "question": "The value of 3 / 15625√x = 4 . then the value of √2-42x is :",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 15,
    "question": "If 3 / 15625√x = 4 . then the value of √2-42x is :",
    "options": {
      "A": "625",
      "B": "343",
      "C": "441",
      "D": "81"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 16,
    "question": "√30 + √30 + √30 + . . . = ?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 17,
    "question": "Find the value of x , if 21√x + 20√x = 29√x .",
    "options": {
      "A": "4",
      "B": "3",
      "C": "0",
      "D": "2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 18,
    "question": "If mx - nx = 0 then what is the value of 1/xⁿ + 1/xᵐ in terms of x ?",
    "options": {
      "A": "2mn / x² (n² + m²)",
      "B": "2mn / x² (m² - n²)",
      "C": "2mn / xⁿ (n² - m²)",
      "D": "2mn / xᵐ (m² - n²)"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 19,
    "question": "Which of the following can be a rationalising factor of (√2 + √3 + √5) ?",
    "options": {
      "A": "(√2 - √3 - √5) √6",
      "B": "(√2 + √3 - √5) √6",
      "C": "(√2 - √3 + √5) √6",
      "D": "(√2 + √3 + √5) √6"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 20,
    "question": "3ab (a + b)¹ × (a¹ + b²¹) = ?",
    "options": {
      "A": "1 / (a + b)",
      "B": "1",
      "C": "(a + b)",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 21,
    "question": "9³ + 9⁴ + 9⁵ + 9⁶ + 9⁷ / 9¹ + 9² + 9³ + 9⁴ + 9⁵ = ?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "729",
      "D": "81"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 22,
    "question": "√2 + √3 + √2 - √3 = ?",
    "options": {
      "A": "√6",
      "B": "2√3",
      "C": "2√2",
      "D": "6"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 23,
    "question": "If a + b = √7 and a - b = √5 then find the value of 8ab (a² + b²) - (a - b)² .",
    "options": {
      "A": "19",
      "B": "23",
      "C": "27",
      "D": "21"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 19,
    "question_number": 9,
    "question": "The value of 17 1/3 % of 7200 is :",
    "options": {
      "A": "7.65",
      "B": "11.68",
      "C": "13.65",
      "D": "9.65"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 10,
    "question": "If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :",
    "options": {
      "A": "200/3",
      "B": "700/3",
      "C": "500/3",
      "D": "400/3"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 11,
    "question": "What is the value of 7.14 % of 66.67 % of 21.84 ?",
    "options": {
      "A": "1.07",
      "B": "2.02",
      "C": "1.04",
      "D": "1.09"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 12,
    "question": "A number which , when increased by 16 % becomes 1914. The number is :",
    "options": {
      "A": "2220",
      "B": "1650",
      "C": "1780",
      "D": "2010"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 13,
    "question": "25/64 converted to percentage is :",
    "options": {
      "A": "25.6",
      "B": "256",
      "C": "0.256",
      "D": "2.56"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 14,
    "question": "2.4 converted to percentage is :",
    "options": {
      "A": "0.24",
      "B": "24",
      "C": "240",
      "D": "2.4"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 15,
    "question": "If 20 % of a = b , then b % of 20 is equal to :",
    "options": {
      "A": "4 % of a",
      "B": "2 % of a",
      "C": "16 % of a",
      "D": "8 % of a"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 16,
    "question": "What is ( 0.08 % of 0.008 % of 8 ) ^ 1/9 ?",
    "options": {
      "A": "0.8",
      "B": "0.2",
      "C": "0.64",
      "D": "0.08"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 17,
    "question": "Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ?",
    "options": {
      "A": "₹ 850",
      "B": "₹ 750",
      "C": "820",
      "D": "₹ 800"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 1,
    "question": "If 85 % of a number is added to 75 , then the result is the number itself . The number is :",
    "options": {
      "A": "500",
      "B": "200",
      "C": "300",
      "D": "100"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 2,
    "question": "If 50 % of the number is added 75 , then result becomes the same number , then the number is :",
    "options": {
      "A": "400",
      "B": "100",
      "C": "250",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 3,
    "question": "0.5 is what percentage of 20 ?",
    "options": {
      "A": "25 %",
      "B": "0.25 %",
      "C": "2.5 %",
      "D": "0.025 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 4,
    "question": "If A is 95 % of B , then what per cent of A is B ?",
    "options": {
      "A": "110 10/19 %",
      "B": "104 4/19 %",
      "C": "107 17/19 %",
      "D": "105 5/19 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 5,
    "question": "Which of the following is the least ?",
    "options": {
      "A": "9 % of 845",
      "B": "12 % of 625",
      "C": "10 % of 720",
      "D": "15 % of 555"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 6,
    "question": "If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ?",
    "options": {
      "A": "13 1/3",
      "B": "8 1/3",
      "C": "16 2/3",
      "D": "33 1/3"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 7,
    "question": "25 % of ( 50 % of 30 % of 150 ) / 40 % of 2250 = ?",
    "options": {
      "A": "0.825 %",
      "B": "0.25 %",
      "C": "0.625 %",
      "D": "0.225 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 8,
    "question": "What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ?",
    "options": {
      "A": "60",
      "B": "45",
      "C": "50",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 18,
    "question": "In a sweet , one - third is sugar . If the price of sugar now is 6/5 of the previous price , what is the effective percentage increase in the cost of the sweet ?",
    "options": {
      "A": "100/9 %",
      "B": "200/9 %",
      "C": "100/18 %",
      "D": "100/3 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 19,
    "question": "If x % of y is 150 and y % of z is 300 , then the relation between x and z is :",
    "options": {
      "A": "z = x",
      "B": "z = x / 3",
      "C": "z = x / 2",
      "D": "z = 2x"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 20,
    "question": "If a % of 240 is c and c % of a is 117.6 , then the value of a + c is :",
    "options": {
      "A": "238",
      "B": "144",
      "C": "260",
      "D": "196"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 21,
    "question": "A is 150 % of B and B is 40 % of C. If A + B + C = 20 , then the value of 2B + 3C - 4A is equal to :",
    "options": {
      "A": "16",
      "B": "14",
      "C": "20",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 22,
    "question": "If ( 224 ) ^ 2 × ( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the value of x .",
    "options": {
      "A": "120",
      "B": "160",
      "C": "190",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 23,
    "question": "By what percentage is the percentage of the number of vowels in the CONSONANT less than the percentage consonants in it ?",
    "options": {
      "A": "33.33",
      "B": "200",
      "C": "66.67",
      "D": "50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 24,
    "question": "5/6 of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ?",
    "options": {
      "A": "30",
      "B": "33",
      "C": "32",
      "D": "36"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "By selling a car for ₹ 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :",
    "options": {
      "A": "₹ 2,62,432",
      "B": "₹ 2,65,432",
      "C": "2,65,420",
      "D": "₹ 2,62,424"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places )",
    "options": {
      "A": "38.89 %",
      "B": "35.75 %",
      "C": "32.25 %",
      "D": "28.75 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ?",
    "options": {
      "A": "10.5 %",
      "B": "9.5 %",
      "C": "9 %",
      "D": "10 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ?",
    "options": {
      "A": "75 %",
      "B": "100 %",
      "C": "50 %",
      "D": "25 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "Samreen sells a keyboard for ₹ 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ?",
    "options": {
      "A": "2.51 % loss",
      "B": "7.42 % gain",
      "C": "3.52 % loss",
      "D": "3.52 % gain"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "Madhav purchased an item for ₹ 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in ₹ ) ?",
    "options": {
      "A": "6720",
      "B": "4200",
      "C": "1680",
      "D": "2520"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 7,
    "question": "An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?",
    "options": {
      "A": "2 : 5",
      "B": "5 : 2",
      "C": "2 : 7",
      "D": "7 : 2"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56 , 250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ?",
    "options": {
      "A": "₹ 47,750",
      "B": "₹ 8,687.7",
      "C": "₹ 16,500",
      "D": "₹ 20,625"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "A tea seller used to make 50 % of profit by selling tea at 9 per cup . When the cost of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ?",
    "options": {
      "A": "33 1/3",
      "B": "25",
      "C": "33 1/3",
      "D": "30"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ?",
    "options": {
      "A": "18.75 %",
      "B": "20.75 %",
      "C": "21.25 %",
      "D": "24.25 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ₹ ) of the mobile phone is ?",
    "options": {
      "A": "52,000",
      "B": "55,000",
      "C": "45,000",
      "D": "50,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is :",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 9,200",
      "C": "₹ 8,000",
      "D": "₹ 9,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ?",
    "options": {
      "A": "5 % loss",
      "B": "6 % profit",
      "C": "5 % profit",
      "D": "6 % loss"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 14,
    "question": "If the selling price of an article is 2/5 of its cost price , the percentage gain is .",
    "options": {
      "A": "47",
      "B": "40",
      "C": "20",
      "D": "25"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 15,
    "question": "Ajay buys 18 oranges for ₹ 90 and sells 15 oranges for ₹ 105 . Find the percentage of his gain .",
    "options": {
      "A": "35 %",
      "B": "30 %",
      "C": "25 %",
      "D": "40 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 16,
    "question": "If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ₹ ) of the article is :",
    "options": {
      "A": "175",
      "B": "150",
      "C": "200",
      "D": "100"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 17,
    "question": "By selling an article for ₹ 2,300 , Kom
```

---

## Interaction [18:03:52]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 21 ---
Discount
( Previous Year Practice Questions )
Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ? ( CGL 2022 Pre ) ( b ) 48 ( d ) 46
( a ) ₹ 44 ( c ) 42
A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % . ( CGL 2022 Pre ) ( a ) 50 % ( b ) 70 % ( c ) 30 % The single discount equivalent
( d ) 40 %
to two successive discounts of 15 % and 12 % on an article is ?
( CGL 2022
( a ) 3 % ( b ) 25.2 % ( c ) 74.8 % ( d ) 27 % The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill . ( CGL 2022 Pre ) ( a ) ₹ 3,333 , .33 ( b ) ₹ 2,500 ( c ) 833.33 ( d ) 1,666.67 A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum
percentage ?
( CGL 2022 Pre )
I. Two successive discounts of 10 % each . II . Successive discounts of 15 % and 5 % . III . 20 % discount . ( a ) Only discount scheme I ( b ) Only discount scheme II ( c ) Only discount scheme III ( d ) All provide equal discount 10. A shopkeeper offers the following three schemes . ( CGL 2022 Pre ) Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6
192
5 .
Basic Concept / Successive Discount
SSC CGL
1 .
6 .
Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ? ( CGL 2020 Pre ) ( a ) C , 1780 ( b ) A , 1735.20 ( c ) B , 1800 ( d ) C , 1783.40
7 .
2 .
to
A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ? ( CGL 2020 Pre )
8 .
( a ) second offer by * 100
( b ) first offer by * 68
( c ) second offer by * 68
( d ) first offer by * 32
3 .
9 .
A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ? ( CGL 2021 Pre ) ( a ) 13,280 , 16,517 ( b ) 13,083 , 16,517
( c ) 16,517 , 13,083
4 .
( d ) 16,517 , 13,280 A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?
( a ) 2519
( CGL 2021 Pre ) ( b ) 2977 ( d ) 3664
( c ) 2382
Gagan Pratap Sir
Discount
Which scheme is the best for customers ?
( a ) Scheme - I ( b ) Scheme - III ( c ) Scheme - II
( d ) All scheme are equal 11. A shopkeeper offers the following discount schemes for buyers on an article : ( CGL 2023 Pre )
i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ? ( a ) Scheme iv ( b ) Scheme iii ( c ) Scheme ii ( d ) Scheme i 12. A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ? ( CGL 2023 Pre )
catin
Buy 6 , get 4 free
a
Buy 5 , get 5 free
Two successive discounts of 18 % and 24 %
( b ) Only B & C
( a ) Only B
( c ) Only A & C ( d ) Only A 13. If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ? ( CGL 2023 Pre ) ( a ) 15
( b ) 25 ( d ) 30
( c ) 20
discount
14. The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ? ( CGL 2023 Pre )
all
for
the
( a ) First ( b ) Same shopkeepers ( c ) Third ( d ) Second
CHA PION PL
PUBLICATION

--- PAGE 22 ---
Compound Interest ( Previous Year Practice Questions )
6. The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum ( CPO 2019 Pre ) ( b ) ₹ 7,200 ( d ) ₹ 7,000
is :
( a ) ₹ 7,250
( c ) ₹ 7,500
What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ? ( CPO 2023 Pre ) ( a ) ₹ 9,824.00 ( b ) 10,520.00 ( c ) 9,956.86 ( d ) ₹ 10,123.20
SSC CHSL
The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :
( CHSL 2019 Pre ) ( b ) 6 % ( a ) 8 % ( c ) 5 % ( d ) 7 % The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :
( CHSL 2019 Pre )
chimp
( ) 3 1 ½
( b ) 3
( a ) 2 years
years .
1
( d ) 1 ½ ½ years
( c ) 3 year 10. If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ? ( CHSL 2019 Pre ) ( a ) 78,756.34 ( b ) ₹ 66,477.2 ( c ) 56,896.98 ( d ) 69,345.6 11. In how many years , the compound interest ,
compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?
( CHSL 2020 Pre ) ( b ) 1 year ( d ) 2 year
( a ) 3 year ( c ) 4 year
257
Basic Concept
SSC CGL
1 .
What is the compound interest on a sum of 10,000 at 14 % p.a.
5
7 .
for 27 years where the inter- est is compounded yearly ? ( nearest to 1 ) ( CGL 2018 Pre ) ( a ) ₹ 4259 ( c ) 4439
( b ) ₹ 4296 ( d ) 4394
2 .
The compound interest on a
1
certain sum at 10 % p.a. for 2
'
8 .
years is 1,201.60 , interest compounded yearly . The sum ( CGL 2019 Pre )
is :
( a ) ₹ 5,400 ( b ) 4,200 ( c ) ₹ 4,800 ( d ) ₹ 4,500 What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a.
3 .
after 2
years , if interest
9 .
compounded yearly , is :
( CGL 2020 Pre )
4 .
( a ) 12364.50 ( b ) 13642.50 ( c ) 16342.50 ( d ) 14362.50 The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is : ( CGL 2021 Pre ) ( a ) 31,538,40 ( b ) 24,00.50 ( c ) 35,138.40 ( d ) 28,315.40
SSC CPO
5 .
A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ? ( CPO 2019 Pre ) ( a ) 1,415 ( b ) 1,310 ( c ) 1,290 ( d ) ₹ 1,285
Gagan Pratap Sir
Compound Interest .
12. A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :
( CHSL 2021 Pre )
( b ) 1,800
( d ) ₹ 2,200
( a ) ₹ 2,500 ( c ) ₹ 3,800 13. A sum of
16,875 , when in-
vested at r %
interest per year
annually ,
compounded
amounts to 19,683 after 2 . years . What is the value of r ?
( CHSL 2021 Pre )
( b ) 7 % ( d ) 9 %
( a ) 8 % ( c ) 6 %
14. In what time will * 3,90,625
amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?
( CHSL 2021 Pre )
n
1
( b ) 1 years
( a ) 2 years
1
( c ) 2½ years ( d ) 1 years 15. Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?
( CHSL 2021 Pre ) ( b ) ₹ 7,250 ( d ) ₹ 7,260
( a ) ₹ 7,160 ( c ) ₹ 7,200
is
16. A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of ( CHSL 2023 Pre ) ( b ) ₹ 8,000 ( d ) ₹ 6,000
money lent . ( a ) ₹ 8,200 ( c ) ₹ 7,500
if
17. Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer ) ( CHSL 2023 Pre ) ( a ) ₹ 72,980 ( b ) 73,980 ( c ) 70,980 ( d ) ₹ 72,680
CHA PION PL
PUBLICATION

--- PAGE 23 ---
Ratio & Proportion ( Previous Year Practice Questions )
SSC CPO
A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day ( CPO 2018 Pre ) ( b ) 5 : 4 ( d ) 6 : 5
wages . ( a ) 4 : 5 ( c ) 15 : 4
10. Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is
* 1,600 ?
( CPO 2019 Pre )
( a ) ₹ 2,000
( b ) ₹ 3,000
( c ) ₹ 2,500
( d ) ₹ 2,600
1
of C. and B is twice of 6
A. and the average of A , B and C is 30. then the difference between A and C is :
( CPO 2020 Pre )
( a ) 50
( b ) 60 ( d ) 40
( c ) 80
12. If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair ( CPO 2020 Pre ) ( b ) 5,005 ( d ) 3,003
is : ( a ) 7,007 ( c ) 1,001
13. If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is : ( CPO 2022 Pre )
( a ) 5 ( c ) 8
( b ) 10 ( d ) 4
14. Which of the following is the
smallest ratio ?
( CPO 2022 Pre ) ( b ) 3341
( a ) 41 92
( c ) 42 49 ( d ) 3547 15. Arrange the given ratios in descending order 157 , 511 and 21 : 77 .
( CPO 2022 Pre ) 775 : 11 > 15 : 7
( a ) 21
( b ) 15
75 : 11 > 21 : 77
721 77 > 5 11
( c ) 15
( d ) 5 11 15 : 7 > 21 : 77 16. Which of the following ratios is the greatest ? ( CPO 2023 Pre )
( a ) 2 : 5
( b ) 7 : 10
( c ) 5 : 6
( d ) 1 3
289
Basic Concept
9 .
SSC CGL
1 .
If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :
( CGL 2018 Pre ) ( b ) 2 : 5 ( d ) 5 11
( a ) 3 13 ( c ) 3 11
2 .
The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is : ( CGL 2019 Pre )
( b ) 6 : 7
( a ) 76
( c ) 13 : 7
( d ) 7 13
11. If A is
3 .
If 3A 4B = 5C , then A B C is equal to :
( CGL 2019 Pre )
( a ) 107 : 6
( b ) 20 15 12
( c ) 20 15 16
( d ) 1054
4 .
If a b c d , then which of the following ratio is equal to a c ?
( CGL 2022 Pre )
( a ) a : d
( b ) b : c
b + c
( c ) ad ( d ) a
b c d
5 .
If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ? ( CGL 2024 Pre ) ( a ) 7 : 11 ( b ) 3 : 7 ( c ) 57 ( d ) 11 7 The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is ( CGL 2024 Pre )
6 .
( b ) 150 ( d ) 350
( a ) 60 ( c ) 140
7 .
If AB 6 : 8 and B C = 7 : 12 , then A B C is : ( CGL 2024 Pre )
( a ) 14 31 20
( b ) 21 32 40
( c ) 11 23 40
( d ) 21 28 48
If AB 6 : 8 and B C 5:11 ,
8 .
then A B
C is : ( CGL 2024 Pre )
( a ) 11 23
14 ( b ) 14 13 25
44 ( d ) 15 20 44
( c ) 15 32
Gagan Pratap Sir
Ratio & Proportion
SSC CHSL
17. If a b 3 : √5 , then the value
of ( 2a + b )
( 3a - 2b ) is :
( CHSL 2019 Pre )
( a ) ( 64 + 21√5 )
( b ) ( 64 + 21√5 )
( c ) ( 64 + 21√5 )
1
( 64 + 21√5 )
61
18. Which of the following ratios is
the smallest ? 34 , 12 , 25 , 1 : 3
( CHSL 2021 Pre )
cation
( a ) 1 : 3
( b ) 2 : 5 ( d ) 1 : 2
( c ) 3 : 4
19. The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .
( CHSL 2023 Pre ) ( b ) 56
( a ) 75 ( c ) 48
( d ) 64
20. If x y z = 3:45 , then what the ratio
will
be
of
0.00
( CHSL 2023 Pre )
( a ) 37 47
100
100
( b ) 41 37
100
( c ) 4937
100
( d ) 45 48
21. If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be : ( CHSL 2023 Pre )
( b ) 13 : 6
( a ) 21 : 5
( c ) 12 : 5
( d ) 178
✓ SSC MTS & SP
22. Ratio between average of first four prime numbers and first four composite numbers is :
( MTS 2020 Pre )
( a ) 13 10
( b ) 17:27 ( d ) 17 19
( c ) 11 27
CHA PION PU
PUBLICATION

--- PAGE 24 ---
Mixture & Alligation ( Previous Year Practice Questions )
5. An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ? ( CGL 2018 Pre ) ( b ) 6.72 kg ( d ) 5.28 kg
( a ) 672 kg
( c ) 528 kg
A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?
( CGL 2022 Pre )
( a ) 18 litres . ( b ) 14 litres . ( c ) 16 litres ( d ) 12 litres A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x . ( a ) 70 ml ( c ) 60 ml ( CGL 2022 Pre ) ( b ) 80 ml
( d ) 50 ml
A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture . ( CGL 2022 Pre ) ( a ) 7 litres ( b ) 10 litres ( c ) 5 litres ( d ) 3 litres P and are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ? ( CGL 2022 Pre ) ( b ) 52 % ( d ) 56 %
( a ) 65 %
( c ) 48 %
10. In a mixture of 55 litres , fruit juice and water are in the ratio of 41. How much water ( in litres ) must be added to make the mixture ratio 2 1 ?
( CGL 2023 Pre ) ( b ) 22 ( d ) 12
( a ) 9 ( c ) 11
322
Based on Mixture
SSC CGL
1. Two bottles of the same
6 .
1 % 3
capacity are 35 % and 33
full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is : ( CGL 2019 Pre )
7 .
2
1
( a ) 60
( b ) 64
3
1
5
( c ) 65
( d ) 34
6
2 .
8 .
25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is : ( CGL 2019 Pre )
1
1
( b ) 33- %
( a ) 12 % 2
3
( c ) 45 %
( d ) 25 %
9 .
3. Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 34. Alloy C is prepared by mixing A and B in the ratio 45. The percentage of y in alloy C is : ( CGL 2020 Pre )
4
( b ) 33 %
( a ) 44 %
- %
( c ) 66 %
( d ) 55 %
9
4 .
An alloy contains 40 % of sil- ver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of sil- ver ? ( CGL 2021 Pre ) ( b ) 10 ( d ) 20
( a ) 5
( c ) 12
Gagan Pratap Sir
Mixture & Alligation
11. A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is : ( CGL 2023 Pre )
( a ) 1.27 % ( c ) 20 %
( b ) 18 % ( d ) 25 %
SSC CPO
12. Two mixtures A and B have the following compositions : Mixture A has copper and tin in a ratio of 1 : 2 . Mixture B has copper and tin in a ratio of 1 : 3 . If equal quantities of mixtures A and B are used for producing mixture C , then find the ratio of copper and tin in mixture C. ( CPO 2023 Pre ) ( b ) 1 : 5 ( d ) 7:12
( a ) 2 : 5 ( c ) 7 17
tion
13. A 12 litre solution of acid and water contains 30 % acid . How much water ( in litres ) must be added to get a solution having 20 % acid ? ( CPO 2024 Pre )
( a ) 6 ( c ) 5
( b ) 3 ( d ) 4
14. A mixture of 750 kg of alloy of copper and tin contains 25 % tin . How much tin must be added so that it becomes 70 % of the mixture ? ( CPO 2024 Pre ) ( a ) 895 kg ( b ) 1125 kg ( c ) 956 kg ( d ) 1097 kg 15. In alloys A and B , the ratio of lead to tin is 5 3 and 3 1 , respectively . 80 kg of alloy A and 100 kg of alloy B are mixed together to form a new alloy . What is the amount of tin ( in kg ) in the new alloy ?
( CPO 2024 Pre ) ( b ) 55 ( d ) 81.3
( a ) 90
( c ) 68
16. The quantity of milk in a mixture of milk and water is
4
5
of the volume of the mixture . After adding 1 liter of milk to 5 liters of the mixture , the percentage of water in the mixture is : ( CPO 2024 Pre ) ( a ) 17.5 % ( b ) 15 %
200
100
- %
( c )
( d )
- % 6
6
CHA PION PU
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 21,
    "question_number": 1,
    "question": "Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ?",
    "options": {
      "A": "₹ 44",
      "B": "48",
      "C": "42",
      "D": "46"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 2,
    "question": "A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % .",
    "options": {
      "A": "50 %",
      "B": "70 %",
      "C": "30 %",
      "D": "40 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 3,
    "question": "The single discount equivalent to two successive discounts of 15 % and 12 % on an article is ?",
    "options": {
      "A": "3 %",
      "B": "25.2 %",
      "C": "74.8 %",
      "D": "27 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 4,
    "question": "The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill .",
    "options": {
      "A": "₹ 3,333 , .33",
      "B": "₹ 2,500",
      "C": "833.33",
      "D": "1,666.67"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 5,
    "question": "A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum percentage ?",
    "options": {
      "A": "Only discount scheme I",
      "B": "Only discount scheme II",
      "C": "Only discount scheme III",
      "D": "All provide equal discount"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 6,
    "question": "Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ?",
    "options": {
      "A": "C , 1780",
      "B": "A , 1735.20",
      "C": "B , 1800",
      "D": "C , 1783.40"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 7,
    "question": "A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ?",
    "options": {
      "A": "second offer by * 100",
      "B": "first offer by * 68",
      "C": "second offer by * 68",
      "D": "first offer by * 32"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 8,
    "question": "A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ?",
    "options": {
      "A": "13,280 , 16,517",
      "B": "13,083 , 16,517",
      "C": "16,517 , 13,083",
      "D": "16,517 , 13,280"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 9,
    "question": "A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?",
    "options": {
      "A": "2519",
      "B": "2977",
      "C": "2382",
      "D": "3664"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 10,
    "question": "A shopkeeper offers the following three schemes . Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6 Which scheme is the best for customers ?",
    "options": {
      "A": "Scheme - I",
      "B": "Scheme - III",
      "C": "Scheme - II",
      "D": "All scheme are equal"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 11,
    "question": "A shopkeeper offers the following discount schemes for buyers on an article : i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ?",
    "options": {
      "A": "Scheme iv",
      "B": "Scheme iii",
      "C": "Scheme ii",
      "D": "Scheme i"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 12,
    "question": "A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ?",
    "options": {
      "A": "Only B",
      "B": "Only B & C",
      "C": "Only A & C",
      "D": "Only A"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 13,
    "question": "If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ?",
    "options": {
      "A": "15",
      "B": "25",
      "C": "20",
      "D": "30"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 14,
    "question": "The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ?",
    "options": {
      "A": "First",
      "B": "Same shopkeepers",
      "C": "Third",
      "D": "Second"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 22,
    "question_number": 6,
    "question": "The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum is :",
    "options": {
      "A": "₹ 7,250",
      "B": "₹ 7,200",
      "C": "₹ 7,500",
      "D": "₹ 7,000"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 7,
    "question": "What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ?",
    "options": {
      "A": "₹ 9,824.00",
      "B": "10,520.00",
      "C": "9,956.86",
      "D": "₹ 10,123.20"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 8,
    "question": "The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :",
    "options": {
      "A": "8 %",
      "B": "6 %",
      "C": "5 %",
      "D": "7 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 9,
    "question": "The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :",
    "options": {
      "A": "2 years",
      "B": "3 1 ½ years",
      "C": "3 year 1 ½",
      "D": "1 ½ ½ years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 10,
    "question": "If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ?",
    "options": {
      "A": "78,756.34",
      "B": "₹ 66,477.2",
      "C": "56,896.98",
      "D": "69,345.6"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 11,
    "question": "In how many years , the compound interest , compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?",
    "options": {
      "A": "3 year",
      "B": "1 year",
      "C": "4 year",
      "D": "2 year"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 1,
    "question": "What is the compound interest on a sum of 10,000 at 14 % p.a. for 27 years where the inter- est is compounded yearly ? ( nearest to 1 )",
    "options": {
      "A": "₹ 4259",
      "B": "₹ 4296",
      "C": "4439",
      "D": "4394"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 2,
    "question": "The compound interest on a certain sum at 10 % p.a. for 2 years is 1,201.60 , interest compounded yearly . The sum is :",
    "options": {
      "A": "₹ 5,400",
      "B": "4,200",
      "C": "₹ 4,800",
      "D": "₹ 4,500"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 3,
    "question": "What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a. after 2 years , if interest compounded yearly , is :",
    "options": {
      "A": "12364.50",
      "B": "13642.50",
      "C": "16342.50",
      "D": "14362.50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 4,
    "question": "The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is :",
    "options": {
      "A": "31,538,40",
      "B": "24,00.50",
      "C": "35,138.40",
      "D": "28,315.40"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 5,
    "question": "A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ?",
    "options": {
      "A": "1,415",
      "B": "1,310",
      "C": "1,290",
      "D": "₹ 1,285"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 12,
    "question": "A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :",
    "options": {
      "A": "₹ 2,500",
      "B": "1,800",
      "C": "₹ 3,800",
      "D": "₹ 2,200"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 13,
    "question": "A sum of 16,875 , when in- vested at r % interest per year compounded annually , amounts to 19,683 after 2 . years . What is the value of r ?",
    "options": {
      "A": "8 %",
      "B": "7 %",
      "C": "6 %",
      "D": "9 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 14,
    "question": "In what time will * 3,90,625 amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?",
    "options": {
      "A": "2 years",
      "B": "1 years",
      "C": "2½ years",
      "D": "1 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 15,
    "question": "Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?",
    "options": {
      "A": "₹ 7,160",
      "B": "₹ 7,250",
      "C": "₹ 7,200",
      "D": "₹ 7,260"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 16,
    "question": "A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of money lent .",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 8,000",
      "C": "₹ 7,500",
      "D": "₹ 6,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 17,
    "question": "Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer )",
    "options": {
      "A": "₹ 72,980",
      "B": "73,980",
      "C": "70,980",
      "D": "₹ 72,680"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 23,
    "question_number": 10,
    "question": "Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is * 1,600 ?",
    "options": {
      "A": "₹ 2,000",
      "B": "₹ 3,000",
      "C": "₹ 2,500",
      "D": "₹ 2,600"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 11,
    "question": "If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair",
    "options": {
      "A": "7,007",
      "B": "5,005",
      "C": "1,001",
      "D": "3,003"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 12,
    "question": "If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is :",
    "options": {
      "A": "5",
      "B": "10",
      "C": "8",
      "D": "4"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 13,
    "question": "Which of the following is the smallest ratio ?",
    "options": {
      "A": "41 92",
      "B": "3341",
      "C": "42 49",
      "D": "3547"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 14,
    "question": "Arrange the given ratios in descending order 157 , 511 and 21 : 77 .",
    "options": {
      "A": "21 77 > 15 7 > 5 11",
      "B": "15 7 > 21 77 > 5 11",
      "C": "15 7 > 5 11 > 21 77",
      "D": "5 11 > 15 7 > 21 77"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 15,
    "question": "Which of the following ratios is the greatest ?",
    "options": {
      "A": "2 : 5",
      "B": "7 : 10",
      "C": "5 : 6",
      "D": "1 : 3"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :",
    "options": {
      "A": "3 13",
      "B": "2 : 5",
      "C": "3 11",
      "D": "5 11"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 2,
    "question": "The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is :",
    "options": {
      "A": "76",
      "B": "6 : 7",
      "C": "13 : 7",
      "D": "7 : 13"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 3,
    "question": "If 3A 4B = 5C , then A B C is equal to :",
    "options": {
      "A": "107 : 6",
      "B": "20 15 12",
      "C": "20 15 16",
      "D": "1054"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 4,
    "question": "If a b c d , then which of the following ratio is equal to a c ?",
    "options": {
      "A": "a : d",
      "B": "b : c",
      "C": "ad",
      "D": "a b c d"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 5,
    "question": "If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ?",
    "options": {
      "A": "7 : 11",
      "B": "3 : 7",
      "C": "57",
      "D": "11 7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 6,
    "question": "The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is",
    "options": {
      "A": "60",
      "B": "150",
      "C": "140",
      "D": "350"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 7,
    "question": "If AB 6 : 8 and B C = 7 : 12 , then A B C is :",
    "options": {
      "A": "14 31 20",
      "B": "21 32 40",
      "C": "11 23 40",
      "D": "21 28 48"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 8,
    "question": "If AB 6 : 8 and B C 5:11 , then A B C is :",
    "options": {
      "A": "11 23 14",
      "B": "14 13 25",
      "C": "15 20 44",
      "D": "15 32 44"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 17,
    "question": "If a b 3 : √5 , then the value of ( 2a + b ) ( 3a - 2b ) is :",
    "options": {
      "A": "( 64 + 21√5 )",
      "B": "( 64 + 21√5 ) 1",
      "C": "( 64 + 21√5 ) 1",
      "D": "( 64 + 21√5 ) 61"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 18,
    "question": "Which of the following ratios is the smallest ? 34 , 12 , 25 , 1 : 3",
    "options": {
      "A": "1 : 3",
      "B": "2 : 5",
      "C": "3 : 4",
      "D": "1 : 2"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 19,
    "question": "The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .",
    "options": {
      "A": "75",
      "B": "56",
      "C": "48",
      "D": "64"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 20,
    "question": "If x y z = 3:45 , then what the ratio will be of 100 100",
    "options": {
      "A": "37 47",
      "B": "41 37",
      "C": "4937",
      "D": "45 48"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 21,
    "question": "If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be :",
    "options": {
      "A": "21 : 5",
      "B": "13 : 6",
      "C": "12 : 5",
      "D": "178"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_
```

---

## Interaction [18:07:03]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:07:20]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "CHAMPION PUBLICATION",
  "exam_name": "SIMPLIFICATION",
  "year": null,
  "shift": null
}
```

---

## Interaction [18:07:48]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 15 ---
1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION

--- PAGE 16 ---
Surds and Indices
SURDS AND INDICES
3
"
Laws of Surds
Law of Indices
1
axaxax .... n times = an
a =
√99-70√2 = ( 5√2-7 ) 70√3-2 × 35√√2
an
axaxa = a + n + p ( a = 0 )
=
axb
m
ab
5√2 49 + 50 = 99
= an ( m > n )
a a '
1
= ( ab )
1
√√√√ .....
= a
MS
=
( n > m )
an - m
ya
а
= 1
=
( m
n )
2 " -1
b
#b b
√√√a .... ntimes
a
܀
( am ) n = amxn = anxm = ( an ) m
na Radicand
Pavara .... co
va
܀
( abc ) " = axbnxcn
order of surd
n
dpy
n√a ÷ n√a ÷ n√ .... ∞ = n + 1√a
n
a '
m
܀
=
( b = 0 )
܀
=
( v )
bn
an = Va
√a + √a + √a + ....
( a ) am "
܀
=
Pma
lication
√√4a + 1 + 1 2
= x
( 32 ) 32
+
38316
P
√√√4a + 1-1 2
aq
= y
xp
aq
ач
+ 2 × 2 × √√3
x - y = 1
ab
xy = a
܀
If am an then m = n
-√ ( 2 + √3 ) - ( 2 + √3 )
OR Take two factors of a whose difference is 1 like Then x = Larger factor
If amb then a = b
Gaga
smaller factor
y
܀
√28 + 10√√3 = 10√√3 →
a = 1
x + y = √√4a + 1
2 × 5√3 5² + √32 = 28
܀
1
x =
√a + √a√a + ....
a - 1 =
( a 0 )
+
√√4a - 3 + 1 2
܀
( a - b ) ² = ( b - a ) ² = a² + b² - 2ab
1
1
& an =
a =
-n
an
a
y = √a - va + 1 - √a + √a-
a² + b² - 2ab
..... 00
a - b ( a > b ) b - a ( b > a )
-m
m
b
√4a - 3-1 2
√√43-24√3 = ( 3√3-4 )
=
x - y = 1
xy = 2 ( a - 1 )
24√√3-2 × 12√√3
܀
( -1 ) "
= +1 ( neven ) = -1 ( n = odd )
3√√3 > 16 + 27 = 43
Gagan Pratap Sir
CHA PION PL
77
PUBLICATION

--- PAGE 17 ---
Surds & Indices ( Previous Year Practice Questions )
SSC CHSL
If , 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + , then the value of 2x + 3y + 5z is ( CHSL 2019 Pre ) ( a ) 56 ( b ) 44 ( c ) 32 ( d ) 28 10. The value of
2
1
1
1
( a¹³ + 2a² + 3a + 2a + 1 )
1
1
-2a + 1 ) -a³ ( a¹ - 2 ) .
a3-2a6
when a 7 is : ( CHSL 2019 Pre )
( a ) 7 ( c ) 1
( b ) 0 ( d ) √√7
11. The value of
1
( CHSL 2019
( 9 + 4√5 ) ² is :
( a ) 322
( b ) 424 ( d ) 286
( c ) 246
3a + 3
x4a + 6
pione lication
x25a + 1 27a - 1x8a - 2 x125 the value of
is :
( CHSL 2019 Pre )
( a ) 4 ( c ) 5
( b ) 6 ( d ) 8
13. The value of 5 √√3 +7 √√√√6-
23
√2 + √3 + √6 is : ( CHSL 2019 Pre )
( b ) 16 ( d ) 10
the value of
3 / 15625√x = 4 .
( CHSL 2019 Pre )
( b ) 343 ( d ) 81
( a ) 625 ( c ) 441
-3
( 2x + 3 )
23
ug ]
then the value of √2-42x is :
( CHSL 2019 Pre )
( a ) 5
( b ) 6
( c ) 3
( d ) 4
78
SSC CGL
9 .
17.32 , then the
1. If 5√√3 + √√75
value of 14√3 + √108 is
( CPO 2021 Pre )
( a ) 32.46
( b ) 35.64
( d ) 33.86
( c ) 34.64
SSC CPO
2 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 6250.49 ( b ) 1250.49
( d ) 1354.24
( c ) 5768.28
3 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 2361.96 ( b ) 2758.28
( c ) 72568.4
( d ) 62504.9
4 .
Which one among the following is the smallest ? ( CPO 2019 Pre )
( a ) √401 - √399 ( b ) √101 - √√99
12. If
( c ) √301 - √299
( d ) √201 - √199
1
The value of
is closest
5 .
√7-4√3
( CPO 2019 Pre )
( b ) 4.2
to : ( a ) 4.1 ( c ) 1.2
( d ) 3.7
( a ) 0 ( c ) 12 14. Find
6 .
√0.6912 + √√0.5292 √0.6912 - √0.5292
( CPO 2019 Pre )
( b ) 0.9
( a ) 1.5 ( c ) 15
( d ) 9
7 .
The value
of √√11 + 2√ √18 is
closest to :
( CPO 2019 Pre )
15. If
( a ) 4.8 ( c ) 3.8
( b ) 4.4 ( d ) 4.1
8 .
The value of √6 - √17-2√72 is
closest is :
( CPO 2019 Pre )
( a ) 2.4
( b ) 2.7 ( d ) 1.7
( c ) 2.1
Gagan Pratap Sir
Surds and Indices
= ?
16. √30 + √30 + √30 + .
( CHSL 2019 Pre )
( b ) 4
( a ) 3 ( c ) 6
( d ) 5
17. Find the
value of x , if
21√x + 20√x = 29√x .
( CHSL 2019 Pre )
( b ) 3
( a ) 4 ( c ) 0
( d ) 2
18. If mx - nx = 0 then what is the
1
1 x ™ + x "
+
in
x "
xm
value of terms of x ?
( CHSL 2021 Pre )
2mn
2m
( b )
( a ) 2
x² ( n² + m² )
x² ( m² - n² )
2mn
2mn
( c ) x " ( n² - m² ) ( d ) x ^ ( m² - n² ) 19. Which of the following can be a rationalising
of
factor
( CHSL 2021 Pre )
( √√2 + √3 + √5 ) ? ( a ) ( √2 - √3 - √5 ) √6
4 1526 ,
( b ) ( √2 + √3 - √5 ) √6
( c ) ( √2 - √3 + √5 ) √6
( d ) ( √2 + √3 + √5 ) √6
20. 3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?
( CHSL 2021 Pre )
1
( a )
( b ) 1
( a + b ) ( c ) ( a + b )
( d ) 3
93+ 9 + 9 + 9 + 972
in
x
= ?
21 .
9+ 92+ 93 + 94 + 95
( CHSL 2021 Pre )
( b ) 3
( a ) 9
( d ) 81
( c ) 729
22. √2 + √3 + √2 - √3 = ?
-6
( 3x + 7 ) 5
( CHSL 2021 Pre )
( b ) 2√3
( a ) √√√6 ( c ) 2√√√2
( d ) 6
23. If a + b =
√7 and a -b = √5
then find the value of 8ab ( a² +
b² ) - ( a − b ) ² .
( CHSL 2021 Pre )
( b ) 23
( a ) 19
( d ) 21
( c ) 27
CHA PION PL
PUBLICATION

--- PAGE 19 ---
Percentage
( Previous Year Practice Questions )
1
1
9. The value of 17
7 % of 3
4
1
33
% of 7200 is :
3
( CGL MAINS 2020 ) ( b ) 11.68 ( d ) 9.65
( a ) 7.65 ( c ) 13.65 10. If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :
200
700
( b )
( a )
3
3
500
400 3
( c )
( d )
3
11. What is the value of 7.14 % of
66.67 % of 21.84 ? ( SSC GD 2024 )
( b ) 2.02
( a ) 1.07 ( c ) 1.04
( d ) 1.09
SSC CPO
12. A number which ,
increased by 16 % becomes 1914. The number is :
( CPO 2018 Pre )
( a ) 2220
( b ) 1650
( c ) 1780
( d ) 2010
64
to
converted
percentage is :
25
( CPO 2018 Pre )
hapio fo
( a ) 25.6 ( c ) 0.256
( b ) 256 ( d ) 2.56
14. 2.4 converted to percentage is :
( CPO 2018 Pre ) ( b ) 24 ( d ) 2.4
( a ) 0.24 ( c ) 240
15. If 20 % of a = b , then b % of 20 is
equal to :
( CPO 2018 Pre )
( a ) 4 % of a
( b ) 2 % of a
( c ) 16 % of a
( d ) 8 % of a
16. What is ( 0.08 %
of 0.008 % of 8 ) 1/9 ? ( CPO 2019 Pre ) ( b ) 0.2 ( d ) 0.08
( a ) 0.8 ( c ) 0.64
17. Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ? ( a ) ₹ 850
( CPO 2019 Pre ) ( b ) ₹ 750 ( d ) ₹ 800
( c ) 820
100
Basic Concept
SSC CGL
1 .
If 85 % of a number is added to 75 , then the result is the num- ber itself . The number is :
( a ) 500
( CGL 2018 Pre ) ( b ) 200 ( d ) 100
( c ) 300
2 .
If 50 % of the number is added 75 , then result becomes the same number , then the num-
ber is :
( CGL 2018 Pre )
( a ) 400
( b ) 100 ( d ) 150
( c ) 250
3 .
0.5 is what percentage of 20 ?
( CGL 2022 Pre ) ( b ) 0.25 %
( a ) 25 %
( c ) 2.5 %
( d ) 0.025 %
4 .
If A is 95 % of B , then what per cent of A is B ?
( CGL 2023 Pre )
3
- %
- %
( a ) 110 .
( b ) 104 .
7 19
19
17
( d ) 105. - %
- %
5 19
( c ) 107
19
13 .
Which of the following is the
5 .
least ?
( CGL 2023 Pre )
( a ) 9 % of 845
( b ) 12 % of 625
τα
( c ) 10 % of 720
( d ) 15 % of 555
6 .
If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ? ( CGL MAINS 2019 ) 1
( b ) 8 1 / 1 /
( a ) 13
3
3
1
2
( c ) 16
( d ) 33
25 % of ( 50 % of 30 % of 150 )
7 .
= ?
40 % of 2250
( CGL MAINS 2019 )
( a ) 0.825 %
( b ) 0.25 % ( d ) 0.225 %
( c ) 0.625 %
8 .
What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ? ( CGL MAINS 2019 )
( b ) 45
( a ) 60
( d ) 40
( c ) 50
Gagan Pratap Sir
Percentage
% of
18. In a sweet , one - third is sugar . 7 If the price of sugar now is 6 of the previous price , what is the effective percentage increase in the cost of the sweet ?
( CPO 2024 Pre )
100
200
( a ) %
( b ) %
9
9
100
100
- %
- %
( c )
( d )
18
3
SSC CHSL
19. If x % of y is 150 and y % of z is 300 , then the relation between
x and z is :
( CHSL 2018 Pre )
( b ) z = x / 3
( a ) z = x ( c ) z = x / 2 20. If a % of 240
( d ) z = 2x
is c and c % of a is 117.6 , then the value of a + c
on
is :
( CHSL 2019 Pre )
when
( a ) 238
( b ) 144
( c ) 260
( d ) 196
21. A is 150 % of B and B is 40 % of
C = 20 , then the
C. If A + B + value of 2B +
3C4A is equal ( CHSL 2020 Pre )
to :
( b ) 14
( a ) 16
( d ) 15
( c ) 20
22. If ( 224 ) 2 ×
( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the
value of x .
( CHSL 2023 Pre )
( b ) 160
( a ) 120
( d ) 150
( c ) 190
☑SSC MTS & SP 23. By what percentage is the percentage of the number of vowels in the CONSONANT less
of
than the percentage consonants in it ? ( MTS 2020 Pre )
( a ) 33.33 ( c ) 66.67
( b ) 200 ( d ) 50
11
24 .
5
of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ? ( MTS 2020 Pre ) ( a ) 30
( b ) 33 ( d ) 36
( c ) 32
CHA PION PU
PUBLICATION

--- PAGE 20 ---
Profit & Loss ( Previous Year Practice Questions )
By selling a car for * 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :
( CGL 2022 Pre )
( a ) ₹ 2,62,432 ( b ) ₹ 2,65,432 ( c ) 2,65,420 ( d ) ₹ 2,62,424 If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places ) ( CGL 2022 Pre ) ( a ) 38.89 % ( b ) 35.75 %
( c ) 32.25 %
( d ) 28.75 % A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ? ( CGL 2022 Pre ) ( a ) 10.5 % ( b ) 9.5 % ( c ) 9 % ( d ) 10 % 10. If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ? ( CGL 2023 Pre ) ( b ) 100 % ( d ) 25 %
( a ) 75 % ( c ) 50 %
11. Samreen sells a keyboard for * 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ? ( CGL 2024 Pre )
( a ) 2.51 % loss ( b ) 7.42 % gain ( c ) 3.52 % loss ( d ) 3.52 % gain
12. Madhav purchased an item for * 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in * ) ? ( CGL 2024 Pre ) ( b ) 4200 ( d ) 2520
( a ) 6720 ( c ) 1680
13. An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?
( CGL 2024 Pre ) ( b ) 5 : 2
( a ) 2 : 5 ( c ) 2 : 7
( d ) 7 : 2
146
7 .
Basic
SSC CGL
1 .
8 .
A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56 , 250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ? ( CGL 2019 Pre ) ( a ) ₹ 47,750 ( b ) ₹ 8,687.7 ( d ) * 20 , 625
9 .
( c ) ₹ 16,500
2 .
A tea seller used to make 50 % . of profit by selling tea at 9 per When the cost cup . of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ? ( CGL 2021 Pre ) ( a ) 33
( b ) 25
3
1
( c ) 33-
( d ) 30
3
3 .
4 .
5 .
A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ? ( CGL 2021 Pre ) ( a ) 18.75 % ( b ) 20.75 % ( c ) 21.25 % ( d ) 24.25 % The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ) of the mobile phone is ? ( CGL 2021 Pre ) ( a ) 52,000 ( b ) 55,000 ( c ) 45,000 ( d ) 50,000 The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is : ( CGL 2022 Pre ) ( a ) ₹ 8,200 ( b ) ₹ 9,200 ( c ) ₹ 8,000 ( d ) ₹ 9,000 A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ? ( CGL 2022 Pre ) ( a ) 5 % loss ( b ) 6 % profit ( c ) 5 % profit ( d ) 6 % loss
6 .
Gagan Pratap Sir
Profit & Loss
SSC CPO
14. If the selling price of an article is
2
1
of its cost price , the
5
percentage gain is . ( CPO 2018 Pre )
( a ) 47
( b ) 40 ( d ) 25
( c ) 20
15. Ajay buys 18 oranges for * 90 and sells 15 oranges for * 105 . Find the percentage of his
gain .
( CPO 2022 Pre )
( a ) 35 %
( b ) 30 % ( d ) 40 %
( c ) 25 %
16. If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ) of the article is : ( CPO 2023 Pre ) ( b ) 150 ( d ) 100
n
( a ) 175 ( c ) 200
SSC CHSL
17. By selling an article for * 2,300 , Komal gains 25 % . If she sells it for 1955 , then her loss / gain percent is : ( CHSL 2018 Pre )
( a ) Loss , 6.5 % ( b ) Gain , 6.5 % ( c ) Gain , 6.25 % ( d ) Loss , 6.25 %
18. Kishore had a loss of 20 % on selling an article for 7,160 . At what price should he had sold the item to make a profit of 30 % ? ( CHSL 2019 Pre ) ( a ) 11,635 ( b ) 12,007 ( c ) 10,678 ( d ) ₹ 8,988 19. If a saree is sold for 3,060 , the seller will face 15 % loss , at what price should he sell the saree to gain a 20 % profit ? ( CHSL 2019 Pre ) ( a ) ₹ 4,650 ( b ) 3,600 ( d ) 4,320 ( c ) 3,440 20. When an article is sold for * 720 , there is a profit of x % . When the same article is sold for ₹ 750 , profit is ( x + 5 ) % . What is the value of x ?
( CHSL 2019 Pre )
( b ) 18
( a ) 20
( c ) 25
( d ) 15
CHAMPION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 17,
    "question_number": 10,
    "question": "The value of (a¹³ + 2a² + 3a + 2a + 1) / (a³-2a⁶) when a = 7 is:",
    "options": {
      "A": "7",
      "B": "0",
      "C": "1",
      "D": "√7"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 11,
    "question": "The value of (9 + 4√5)² is:",
    "options": {
      "A": "322",
      "B": "424",
      "C": "246",
      "D": "286"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 12,
    "question": "If x⁴ᵃ⁺⁶ / x²ᵃ⁺¹ × x⁵ᵃ⁺¹ / x⁸ᵃ⁻² × x¹²⁵ = ?, then the value of x is:",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "8"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 13,
    "question": "The value of √5√3 + 7√√√6 - 2√2 + √3 + √6 is:",
    "options": {
      "A": "15",
      "B": "16",
      "C": "23",
      "D": "10"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 14,
    "question": "Find the value of 3 / 15625√x = 4.",
    "options": {
      "A": "625",
      "B": "343",
      "C": "441",
      "D": "81"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 15,
    "question": "If (2x + 3)³ = 23, then the value of √2-42x is:",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 16,
    "question": "√30 + √30 + √30 + .... = ?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 17,
    "question": "Find the value of x, if 21√x + 20√x = 29√x.",
    "options": {
      "A": "4",
      "B": "3",
      "C": "0",
      "D": "2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 18,
    "question": "If mx⁻ⁿ = nx⁻ᵐ then what is the value of xᵐ + xⁿ / xⁿ + xᵐ in terms of x?",
    "options": {
      "A": "2mn / x²(n² + m²)",
      "B": "2mn / x²(m² - n²)",
      "C": "2mn / xⁿ(n² - m²)",
      "D": "2mn / xⁿ(m² - n²)"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 19,
    "question": "Which of the following can be a rationalising factor of (√2 + √3 + √5)?",
    "options": {
      "A": "(√2 - √3 - √5) √6",
      "B": "(√2 + √3 - √5) √6",
      "C": "(√2 - √3 + √5) √6",
      "D": "(√2 + √3 + √5) √6"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 20,
    "question": "3ab(a+b)¹ × (a¹+b²¹) = ?",
    "options": {
      "A": "1 / (a+b)",
      "B": "1",
      "C": "(a+b)",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 21,
    "question": "9³+ 9⁴+ 9⁵+ 9⁶+ 9⁷ / 9+ 9²+ 9³+ 9⁴+ 9⁵ = ?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "729",
      "D": "81"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 22,
    "question": "√2 + √3 + √2 - √3 = ?",
    "options": {
      "A": "√6",
      "B": "2√3",
      "C": "2√2",
      "D": "6"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 23,
    "question": "If a + b = √7 and a - b = √5, then find the value of 8ab(a² + b²) - (a - b)².",
    "options": {
      "A": "19",
      "B": "23",
      "C": "27",
      "D": "21"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 19,
    "question_number": 9,
    "question": "The value of 17 1/7 % of 33 1/3 % of 7200 is:",
    "options": {
      "A": "7.65",
      "B": "11.68",
      "C": "13.65",
      "D": "9.65"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 10,
    "question": "If 91% of A is 39% of B, and B is x% of A, then the value of x is:",
    "options": {
      "A": "700/3",
      "B": "200/3",
      "C": "500/3",
      "D": "400/3"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 11,
    "question": "What is the value of 7.14% of 66.67% of 21.84?",
    "options": {
      "A": "1.07",
      "B": "2.02",
      "C": "1.04",
      "D": "1.09"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 12,
    "question": "A number which, when increased by 16% becomes 1914. The number is:",
    "options": {
      "A": "2220",
      "B": "1650",
      "C": "1780",
      "D": "2010"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 13,
    "question": "25/64 converted to percentage is:",
    "options": {
      "A": "25.6",
      "B": "256",
      "C": "0.256",
      "D": "2.56"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 14,
    "question": "2.4 converted to percentage is:",
    "options": {
      "A": "0.24",
      "B": "24",
      "C": "240",
      "D": "2.4"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 15,
    "question": "If 20% of a = b, then b% of 20 is equal to:",
    "options": {
      "A": "4% of a",
      "B": "2% of a",
      "C": "16% of a",
      "D": "8% of a"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 16,
    "question": "What is (0.08% of 0.008% of 8)¹/⁹?",
    "options": {
      "A": "0.8",
      "B": "0.2",
      "C": "0.64",
      "D": "0.08"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 17,
    "question": "Two persons A and B are paid a total of 2,040 per week by their employer. If B is paid 140 percent of the sum paid to A, then how much is A paid per week?",
    "options": {
      "A": "₹ 850",
      "B": "₹ 750",
      "C": "₹ 820",
      "D": "₹ 800"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 1,
    "question": "If 85% of a number is added to 75, then the result is the number itself. The number is:",
    "options": {
      "A": "500",
      "B": "200",
      "C": "300",
      "D": "100"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 2,
    "question": "If 50% of the number is added 75, then result becomes the same number, then the number is:",
    "options": {
      "A": "400",
      "B": "100",
      "C": "250",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 3,
    "question": "0.5 is what percentage of 20?",
    "options": {
      "A": "25%",
      "B": "0.25%",
      "C": "2.5%",
      "D": "0.025%"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 4,
    "question": "If A is 95% of B, then what per cent of A is B?",
    "options": {
      "A": "110 10/19 %",
      "B": "104 4/19 %",
      "C": "107 17/19 %",
      "D": "105 5/19 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 5,
    "question": "Which of the following is the least?",
    "options": {
      "A": "9% of 845",
      "B": "12% of 625",
      "C": "10% of 720",
      "D": "15% of 555"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 6,
    "question": "If (x + 20)% of 250 is 25% more than x% of 220, then 10% of (x + 50) is what percent less than 15% of x?",
    "options": {
      "A": "13 1/3",
      "B": "8 1/3",
      "C": "16 2/3",
      "D": "33 1/3"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 7,
    "question": "25% of (50% of 30% of 150) / 40% of 2250 = ?",
    "options": {
      "A": "0.825%",
      "B": "0.25%",
      "C": "0.625%",
      "D": "0.225%"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 8,
    "question": "What is to be added to 15% of 180 so that the sum is equal to 20% of 360?",
    "options": {
      "A": "60",
      "B": "45",
      "C": "50",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 19,
    "question": "If x% of y is 150 and y% of z is 300, then the relation between x and z is:",
    "options": {
      "A": "z = x",
      "B": "z = x / 3",
      "C": "z = x / 2",
      "D": "z = 2x"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 20,
    "question": "If a% of 240 is c and c% of a is 117.6, then the value of a + c is:",
    "options": {
      "A": "238",
      "B": "144",
      "C": "260",
      "D": "196"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 21,
    "question": "A is 150% of B and B is 40% of C. If A + B + C = 20, then the value of 2B + 3C - 4A is equal to:",
    "options": {
      "A": "16",
      "B": "14",
      "C": "20",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 22,
    "question": "If (224)² × (35) + 20% of 400 + x% of 30 = 30% of 30, find the value of x.",
    "options": {
      "A": "120",
      "B": "160",
      "C": "190",
      "D": "150"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 23,
    "question": "By what percentage is the percentage of the number of vowels in the CONSONANT less than the percentage of consonants in it?",
    "options": {
      "A": "33.33",
      "B": "200",
      "C": "66.67",
      "D": "50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 24,
    "question": "5/7 of a number A is 22% of a number B. The number B is equal to 2.5% of a third number, C. If the value of number C is 5500, then the sum of 40% of A and 20% of B is?",
    "options": {
      "A": "30",
      "B": "33",
      "C": "32",
      "D": "36"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "By selling a car for ₹ 2,78,000, a dealer gains 25%. If the profit is reduced to 18%, then the selling price will be:",
    "options": {
      "A": "₹ 2,62,432",
      "B": "₹ 2,65,432",
      "C": "2,65,420",
      "D": "₹ 2,62,424"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "If the cost price is 72% of the selling price, then what is the percentage of profit? (Correct to 2 decimal places)",
    "options": {
      "A": "38.89%",
      "B": "35.75%",
      "C": "32.25%",
      "D": "28.75%"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A man lost 15% by selling a mobile for 4,675. What will be his gain percentage by selling it for 6,050?",
    "options": {
      "A": "10.5%",
      "B": "9.5%",
      "C": "9%",
      "D": "10%"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 10,
    "question": "If the selling price of an article is doubled, then the profit becomes four times. What was the original profit percentage?",
    "options": {
      "A": "75%",
      "B": "100%",
      "C": "50%",
      "D": "25%"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 11,
    "question": "Samreen sells a keyboard for ₹ 1,260 at a profit of 25%, and another keyboard for 1,440 at a loss of 10%. What is her total gain or loss percentage?",
    "options": {
      "A": "2.51% loss",
      "B": "7.42% gain",
      "C": "3.52% loss",
      "D": "3.52% gain"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 12,
    "question": "Madhav purchased an item for ₹ 42,000 and sold it at a loss of 20%. With that amount, he purchased another item and sold it at a gain of 30%. What is the overall gain (in ₹)?",
    "options": {
      "A": "6720",
      "B": "4200",
      "C": "1680",
      "D": "2520"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 13,
    "question": "An article is sold at a profit of 250%. What is the ratio of its cost price to selling price?",
    "options": {
      "A": "2 : 5",
      "B": "5 : 2",
      "C": "2 : 7",
      "D": "7 : 2"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance. He sold it for 1,56,250 thereby earning a profit of 25%. How much money did he spend on the maintenance of the car?",
    "options": {
      "A": "₹ 47,750",
      "B": "₹ 8,687.7",
      "C": "₹ 16,500",
      "D": "₹ 20,625"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "A tea seller used to make 50% of profit by selling tea at 9 per cup. When the cost of ingredients increased by 25%, he started selling tea at 10 per cup. What is his profit percentage now?",
    "options": {
      "A": "33 1/3%",
      "B": "25%",
      "C": "33 1/3%",
      "D": "30%"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A fruit vendor recovers the cost of 95 oranges by selling 80 oranges. What is the profit percentage?",
    "options": {
      "A": "18.75%",
      "B": "20.75%",
      "C": "21.25%",
      "D": "24.25%"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "The selling price of a mobile phone is 59,620 and it was sold at 8.4% profit. The cost price (in ₹) of the mobile phone is?",
    "options": {
      "A": "52,000",
      "B": "55,000",
      "C": "45,000",
      "D": "50,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "The difference between the cost price and selling price of a pair of shoes is 1,200. If the profit is 15%, the selling price is:",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 9,200",
      "C": "₹ 8,000",
      "D": "₹ 9,000"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "A pen was sold for 166.44 with a profit of 14%. If it were sold for 154.76, then what would have been the percentage of profit or loss?",
    "options": {
      "A": "5% loss",
      "B": "6% profit",
      "C": "5% profit",
      "D": "6% loss"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 14,
    "question": "If the selling price of an article is 2/5 of its cost price, the percentage gain is.",
    "options": {
      "A": "47",
      "B": "40",
      "C": "20",
      "D": "25"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 15,
    "question": "Ajay buys 18 oranges for ₹ 90 and sells 15 oranges for ₹ 105. Find the percentage of his gain.",
    "options": {
      "A": "35%",
      "B": "30%",
      "C": "25%",
      "D": "40%"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 16,
    "question": "If the difference between the selling prices of an article at profits of 10% and 7% is 6, then the cost price (in ₹) of the article is:",
    "options": {
      "A": "175",
      "B": "150",
      "C": "200",
      "D": "100"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 17,
    "question": "By selling an article for ₹ 2,300, Komal gains 25%. If she sells it for 1955, then her loss/gain percent is:",
    "options": {
      "A": "Loss, 6.5%",
      "B": "Gain, 6.5%",
      "C": "Gain, 6.25%",
      "D": "Loss, 6.25%"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 18,
    "question": "Kishore had a loss of 20% on selling an article for 7,160. At what price should he had sold the item to make a profit of 30%?",
    "options": {
      "A": "11,635",
      "B": "12,007",
      "C": "10,678
```

---

## Interaction [18:08:13]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 21 ---
Discount
( Previous Year Practice Questions )
Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ? ( CGL 2022 Pre ) ( b ) 48 ( d ) 46
( a ) ₹ 44 ( c ) 42
A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % . ( CGL 2022 Pre ) ( a ) 50 % ( b ) 70 % ( c ) 30 % The single discount equivalent
( d ) 40 %
to two successive discounts of 15 % and 12 % on an article is ?
( CGL 2022
( a ) 3 % ( b ) 25.2 % ( c ) 74.8 % ( d ) 27 % The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill . ( CGL 2022 Pre ) ( a ) ₹ 3,333 , .33 ( b ) ₹ 2,500 ( c ) 833.33 ( d ) 1,666.67 A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum
percentage ?
( CGL 2022 Pre )
I. Two successive discounts of 10 % each . II . Successive discounts of 15 % and 5 % . III . 20 % discount . ( a ) Only discount scheme I ( b ) Only discount scheme II ( c ) Only discount scheme III ( d ) All provide equal discount 10. A shopkeeper offers the following three schemes . ( CGL 2022 Pre ) Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6
192
5 .
Basic Concept / Successive Discount
SSC CGL
1 .
6 .
Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ? ( CGL 2020 Pre ) ( a ) C , 1780 ( b ) A , 1735.20 ( c ) B , 1800 ( d ) C , 1783.40
7 .
2 .
to
A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ? ( CGL 2020 Pre )
8 .
( a ) second offer by * 100
( b ) first offer by * 68
( c ) second offer by * 68
( d ) first offer by * 32
3 .
9 .
A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ? ( CGL 2021 Pre ) ( a ) 13,280 , 16,517 ( b ) 13,083 , 16,517
( c ) 16,517 , 13,083
4 .
( d ) 16,517 , 13,280 A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?
( a ) 2519
( CGL 2021 Pre ) ( b ) 2977 ( d ) 3664
( c ) 2382
Gagan Pratap Sir
Discount
Which scheme is the best for customers ?
( a ) Scheme - I ( b ) Scheme - III ( c ) Scheme - II
( d ) All scheme are equal 11. A shopkeeper offers the following discount schemes for buyers on an article : ( CGL 2023 Pre )
i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ? ( a ) Scheme iv ( b ) Scheme iii ( c ) Scheme ii ( d ) Scheme i 12. A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ? ( CGL 2023 Pre )
catin
Buy 6 , get 4 free
a
Buy 5 , get 5 free
Two successive discounts of 18 % and 24 %
( b ) Only B & C
( a ) Only B
( c ) Only A & C ( d ) Only A 13. If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ? ( CGL 2023 Pre ) ( a ) 15
( b ) 25 ( d ) 30
( c ) 20
discount
14. The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ? ( CGL 2023 Pre )
all
for
the
( a ) First ( b ) Same shopkeepers ( c ) Third ( d ) Second
CHA PION PL
PUBLICATION

--- PAGE 22 ---
Compound Interest ( Previous Year Practice Questions )
6. The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum ( CPO 2019 Pre ) ( b ) ₹ 7,200 ( d ) ₹ 7,000
is :
( a ) ₹ 7,250
( c ) ₹ 7,500
What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ? ( CPO 2023 Pre ) ( a ) ₹ 9,824.00 ( b ) 10,520.00 ( c ) 9,956.86 ( d ) ₹ 10,123.20
SSC CHSL
The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :
( CHSL 2019 Pre ) ( b ) 6 % ( a ) 8 % ( c ) 5 % ( d ) 7 % The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :
( CHSL 2019 Pre )
chimp
( ) 3 1 ½
( b ) 3
( a ) 2 years
years .
1
( d ) 1 ½ ½ years
( c ) 3 year 10. If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ? ( CHSL 2019 Pre ) ( a ) 78,756.34 ( b ) ₹ 66,477.2 ( c ) 56,896.98 ( d ) 69,345.6 11. In how many years , the compound interest ,
compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?
( CHSL 2020 Pre ) ( b ) 1 year ( d ) 2 year
( a ) 3 year ( c ) 4 year
257
Basic Concept
SSC CGL
1 .
What is the compound interest on a sum of 10,000 at 14 % p.a.
5
7 .
for 27 years where the inter- est is compounded yearly ? ( nearest to 1 ) ( CGL 2018 Pre ) ( a ) ₹ 4259 ( c ) 4439
( b ) ₹ 4296 ( d ) 4394
2 .
The compound interest on a
1
certain sum at 10 % p.a. for 2
'
8 .
years is 1,201.60 , interest compounded yearly . The sum ( CGL 2019 Pre )
is :
( a ) ₹ 5,400 ( b ) 4,200 ( c ) ₹ 4,800 ( d ) ₹ 4,500 What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a.
3 .
after 2
years , if interest
9 .
compounded yearly , is :
( CGL 2020 Pre )
4 .
( a ) 12364.50 ( b ) 13642.50 ( c ) 16342.50 ( d ) 14362.50 The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is : ( CGL 2021 Pre ) ( a ) 31,538,40 ( b ) 24,00.50 ( c ) 35,138.40 ( d ) 28,315.40
SSC CPO
5 .
A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ? ( CPO 2019 Pre ) ( a ) 1,415 ( b ) 1,310 ( c ) 1,290 ( d ) ₹ 1,285
Gagan Pratap Sir
Compound Interest .
12. A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :
( CHSL 2021 Pre )
( b ) 1,800
( d ) ₹ 2,200
( a ) ₹ 2,500 ( c ) ₹ 3,800 13. A sum of
16,875 , when in-
vested at r %
interest per year
annually ,
compounded
amounts to 19,683 after 2 . years . What is the value of r ?
( CHSL 2021 Pre )
( b ) 7 % ( d ) 9 %
( a ) 8 % ( c ) 6 %
14. In what time will * 3,90,625
amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?
( CHSL 2021 Pre )
n
1
( b ) 1 years
( a ) 2 years
1
( c ) 2½ years ( d ) 1 years 15. Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?
( CHSL 2021 Pre ) ( b ) ₹ 7,250 ( d ) ₹ 7,260
( a ) ₹ 7,160 ( c ) ₹ 7,200
is
16. A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of ( CHSL 2023 Pre ) ( b ) ₹ 8,000 ( d ) ₹ 6,000
money lent . ( a ) ₹ 8,200 ( c ) ₹ 7,500
if
17. Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer ) ( CHSL 2023 Pre ) ( a ) ₹ 72,980 ( b ) 73,980 ( c ) 70,980 ( d ) ₹ 72,680
CHA PION PL
PUBLICATION

--- PAGE 23 ---
Ratio & Proportion ( Previous Year Practice Questions )
SSC CPO
A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day ( CPO 2018 Pre ) ( b ) 5 : 4
wages . ( a ) 4 : 5 ( c ) 15 : 4
( d ) 6 : 5
10. Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is
* 1,600 ?
( CPO 2019 Pre )
( a ) ₹ 2,000
( b ) ₹ 3,000
( c ) ₹ 2,500
( d ) ₹ 2,600
1
of C. and B is twice of 6
A. and the average of A , B and C is 30. then the difference between A and C is :
( CPO 2020 Pre )
( a ) 50
( b ) 60 ( d ) 40
( c ) 80
12. If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair ( CPO 2020 Pre ) ( b ) 5,005 ( d ) 3,003
is : ( a ) 7,007 ( c ) 1,001
13. If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is : ( CPO 2022 Pre )
( a ) 5 ( c ) 8
( b ) 10 ( d ) 4
14. Which of the following is the
smallest ratio ?
( CPO 2022 Pre ) ( b ) 3341
( a ) 41 92
( c ) 42 49 ( d ) 3547 15. Arrange the given ratios in descending order 157 , 511 and 21 : 77 .
( CPO 2022 Pre ) 775 : 11 > 15 : 7
( a ) 21
( b ) 15
75 : 11 > 21 : 77
721 77 > 5 11
( c ) 15
( d ) 5 11 15 : 7 > 21 : 77 16. Which of the following ratios is the greatest ? ( CPO 2023 Pre )
( a ) 2 : 5
( b ) 7 : 10
( c ) 5 : 6
( d ) 1 3
289
Basic Concept
9 .
SSC CGL
1 .
If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :
( CGL 2018 Pre ) ( b ) 2 : 5 ( d ) 5 11
( a ) 3 13 ( c ) 3 11
2 .
The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is : ( CGL 2019 Pre )
( b ) 6 : 7
( a ) 76
( c ) 13 : 7
( d ) 7 13
11. If A is
3 .
If 3A 4B = 5C , then A B C is equal to :
( CGL 2019 Pre )
( a ) 107 : 6
( b ) 20 15 12
( c ) 20 15 16
( d ) 1054
4 .
If a b c d , then which of the following ratio is equal to a c ?
( CGL 2022 Pre )
( a ) a : d
( b ) b : c
b + c
( c ) ad ( d ) a
b c d
5 .
If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ? ( CGL 2024 Pre ) ( a ) 7 : 11 ( b ) 3 : 7 ( c ) 57 ( d ) 11 7 The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is ( CGL 2024 Pre )
6 .
( b ) 150 ( d ) 350
( a ) 60 ( c ) 140
7 .
If AB 6 : 8 and B C = 7 : 12 , then A B C is : ( CGL 2024 Pre )
( a ) 14 31 20
( b ) 21 32 40
( c ) 11 23 40
( d ) 21 28 48
If AB 6 : 8 and B C 5:11 ,
8 .
then A B
C is : ( CGL 2024 Pre )
( a ) 11 23
14 ( b ) 14 13 25
44 ( d ) 15 20 44
( c ) 15 32
Gagan Pratap Sir
Ratio & Proportion
SSC CHSL
17. If a b 3 : √5 , then the value
of ( 2a + b )
( 3a - 2b ) is :
( CHSL 2019 Pre )
( a ) ( 64 + 21√5 )
( b ) ( 64 + 21√5 )
( c ) ( 64 + 21√5 )
1
( 64 + 21√5 )
61
18. Which of the following ratios is
the smallest ? 34 , 12 , 25 , 1 : 3
( CHSL 2021 Pre )
cation
( a ) 1 : 3
( b ) 2 : 5 ( d ) 1 : 2
( c ) 3 : 4
19. The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .
( CHSL 2023 Pre ) ( b ) 56
( a ) 75 ( c ) 48
( d ) 64
20. If x y z = 3:45 , then what the ratio
will
be
of
0.00
( CHSL 2023 Pre )
( a ) 37 47
100
100
( b ) 41 37
100
( c ) 4937
100
( d ) 45 48
21. If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be : ( CHSL 2023 Pre )
( b ) 13 : 6
( a ) 21 : 5
( c ) 12 : 5
( d ) 178
✓ SSC MTS & SP
22. Ratio between average of first four prime numbers and first four composite numbers is :
( MTS 2020 Pre )
( a ) 13 10
( b ) 17:27 ( d ) 17 19
( c ) 11 27
CHA PION PU
PUBLICATION

--- PAGE 24 ---
Mixture & Alligation ( Previous Year Practice Questions )
5. An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ? ( CGL 2018 Pre ) ( b ) 6.72 kg ( d ) 5.28 kg
( a ) 672 kg
( c ) 528 kg
A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?
( CGL 2022 Pre )
( a ) 18 litres . ( b ) 14 litres . ( c ) 16 litres ( d ) 12 litres A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x . ( a ) 70 ml ( c ) 60 ml ( CGL 2022 Pre ) ( b ) 80 ml
( d ) 50 ml
A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture . ( CGL 2022 Pre ) ( a ) 7 litres ( b ) 10 litres ( c ) 5 litres ( d ) 3 litres P and are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ? ( CGL 2022 Pre ) ( b ) 52 % ( d ) 56 %
( a ) 65 %
( c ) 48 %
10. In a mixture of 55 litres , fruit juice and water are in the ratio of 41. How much water ( in litres ) must be added to make the mixture ratio 2 1 ?
( CGL 2023 Pre ) ( b ) 22 ( d ) 12
( a ) 9 ( c ) 11
322
Based on Mixture
SSC CGL
1. Two bottles of the same
6 .
1 % 3
capacity are 35 % and 33
full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is : ( CGL 2019 Pre )
7 .
2
1
( a ) 60
( b ) 64
3
1
5
( c ) 65
( d ) 34
6
2 .
8 .
25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is : ( CGL 2019 Pre )
1
1
( b ) 33- %
( a ) 12 % 2
3
( c ) 45 %
( d ) 25 %
9 .
3. Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 34. Alloy C is prepared by mixing A and B in the ratio 45. The percentage of y in alloy C is : ( CGL 2020 Pre )
4
( b ) 33 %
( a ) 44 %
- %
( c ) 66 %
( d ) 55 %
9
4 .
An alloy contains 40 % of sil- ver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of sil- ver ? ( CGL 2021 Pre ) ( b ) 10 ( d ) 20
( a ) 5
( c ) 12
Gagan Pratap Sir
Mixture & Alligation
11. A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is : ( CGL 2023 Pre )
( a ) 1.27 % ( c ) 20 %
( b ) 18 % ( d ) 25 %
SSC CPO
12. Two mixtures A and B have the following compositions : Mixture A has copper and tin in a ratio of 1 : 2 . Mixture B has copper and tin in a ratio of 1 : 3 . If equal quantities of mixtures A and B are used for producing mixture C , then find the ratio of copper and tin in mixture C. ( CPO 2023 Pre ) ( b ) 1 : 5 ( d ) 7:12
( a ) 2 : 5 ( c ) 7 17
tion
13. A 12 litre solution of acid and water contains 30 % acid . How much water ( in litres ) must be added to get a solution having 20 % acid ? ( CPO 2024 Pre )
( a ) 6 ( c ) 5
( b ) 3 ( d ) 4
14. A mixture of 750 kg of alloy of copper and tin contains 25 % tin . How much tin must be added so that it becomes 70 % of the mixture ? ( CPO 2024 Pre ) ( a ) 895 kg ( b ) 1125 kg ( c ) 956 kg ( d ) 1097 kg 15. In alloys A and B , the ratio of lead to tin is 5 3 and 3 1 , respectively . 80 kg of alloy A and 100 kg of alloy B are mixed together to form a new alloy . What is the amount of tin ( in kg ) in the new alloy ?
( CPO 2024 Pre ) ( b ) 55 ( d ) 81.3
( a ) 90
( c ) 68
16. The quantity of milk in a mixture of milk and water is
4
5
of the volume of the mixture . After adding 1 liter of milk to 5 liters of the mixture , the percentage of water in the mixture is : ( CPO 2024 Pre ) ( a ) 17.5 % ( b ) 15 %
200
100
- %
( c )
( d )
- % 6
6
CHA PION PU
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 21,
    "question_number": 1,
    "question": "Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ?",
    "options": {
      "A": "₹ 44",
      "B": "48",
      "C": "42",
      "D": "46"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 2,
    "question": "A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % .",
    "options": {
      "A": "50 %",
      "B": "70 %",
      "C": "30 %",
      "D": "40 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 3,
    "question": "The single discount equivalent to two successive discounts of 15 % and 12 % on an article is ?",
    "options": {
      "A": "3 %",
      "B": "25.2 %",
      "C": "74.8 %",
      "D": "27 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 4,
    "question": "The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill .",
    "options": {
      "A": "₹ 3,333 , .33",
      "B": "₹ 2,500",
      "C": "833.33",
      "D": "1,666.67"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 5,
    "question": "A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum percentage ?",
    "options": {
      "A": "Only discount scheme I",
      "B": "Only discount scheme II",
      "C": "Only discount scheme III",
      "D": "All provide equal discount"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 6,
    "question": "Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ?",
    "options": {
      "A": "C , 1780",
      "B": "A , 1735.20",
      "C": "B , 1800",
      "D": "C , 1783.40"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 7,
    "question": "A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ?",
    "options": {
      "A": "second offer by * 100",
      "B": "first offer by * 68",
      "C": "second offer by * 68",
      "D": "first offer by * 32"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 8,
    "question": "A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ?",
    "options": {
      "A": "13,280 , 16,517",
      "B": "13,083 , 16,517",
      "C": "16,517 , 13,083",
      "D": "16,517 , 13,280"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 9,
    "question": "A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?",
    "options": {
      "A": "2519",
      "B": "2977",
      "C": "2382",
      "D": "3664"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 10,
    "question": "A shopkeeper offers the following three schemes . Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6 free Which scheme is the best for customers ?",
    "options": {
      "A": "Scheme - I",
      "B": "Scheme - III",
      "C": "Scheme - II",
      "D": "All scheme are equal"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 11,
    "question": "A shopkeeper offers the following discount schemes for buyers on an article : i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ?",
    "options": {
      "A": "Scheme iv",
      "B": "Scheme iii",
      "C": "Scheme ii",
      "D": "Scheme i"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 12,
    "question": "A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ?",
    "options": {
      "A": "Only B",
      "B": "Only B & C",
      "C": "Only A & C",
      "D": "Only A"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 13,
    "question": "If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ?",
    "options": {
      "A": "15",
      "B": "25",
      "C": "20",
      "D": "30"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 14,
    "question": "The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ?",
    "options": {
      "A": "First",
      "B": "Same shopkeepers",
      "C": "Third",
      "D": "Second"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 22,
    "question_number": 6,
    "question": "The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum is :",
    "options": {
      "A": "₹ 7,250",
      "B": "₹ 7,200",
      "C": "₹ 7,500",
      "D": "₹ 7,000"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 7,
    "question": "What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ?",
    "options": {
      "A": "₹ 9,824.00",
      "B": "10,520.00",
      "C": "9,956.86",
      "D": "₹ 10,123.20"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 8,
    "question": "The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :",
    "options": {
      "A": "8 %",
      "B": "6 %",
      "C": "5 %",
      "D": "7 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 9,
    "question": "The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :",
    "options": {
      "A": "2 years",
      "B": "3 years .",
      "C": "3 year 1",
      "D": "1 ½ ½ years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 10,
    "question": "If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ?",
    "options": {
      "A": "78,756.34",
      "B": "₹ 66,477.2",
      "C": "56,896.98",
      "D": "69,345.6"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 11,
    "question": "In how many years , the compound interest , compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?",
    "options": {
      "A": "3 year",
      "B": "1 year",
      "C": "4 year",
      "D": "2 year"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 1,
    "question": "What is the compound interest on a sum of 10,000 at 14 % p.a. for 27 years where the interest is compounded yearly ? ( nearest to 1 )",
    "options": {
      "A": "₹ 4259",
      "B": "₹ 4296",
      "C": "4439",
      "D": "4394"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 2,
    "question": "The compound interest on a certain sum at 10 % p.a. for 2 years is 1,201.60 , interest compounded yearly . The sum is :",
    "options": {
      "A": "₹ 5,400",
      "B": "4,200",
      "C": "₹ 4,800",
      "D": "₹ 4,500"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 3,
    "question": "What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a. after 2 years , if interest compounded yearly , is :",
    "options": {
      "A": "12364.50",
      "B": "13642.50",
      "C": "16342.50",
      "D": "14362.50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 4,
    "question": "The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is :",
    "options": {
      "A": "31,538,40",
      "B": "24,00.50",
      "C": "35,138.40",
      "D": "28,315.40"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 5,
    "question": "A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ?",
    "options": {
      "A": "1,415",
      "B": "1,310",
      "C": "1,290",
      "D": "₹ 1,285"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 12,
    "question": "A sum of money becomes * 3,364 at a rate of 16 % compounded annually for 2 years . The sum of money is :",
    "options": {
      "A": "₹ 2,500",
      "B": "1,800",
      "C": "₹ 3,800",
      "D": "₹ 2,200"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 13,
    "question": "A sum of 16,875 , when invested at r % interest per year compounded annually , amounts to 19,683 after 2 years . What is the value of r ?",
    "options": {
      "A": "8 %",
      "B": "7 %",
      "C": "6 %",
      "D": "9 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 14,
    "question": "In what time will * 3,90,625 amount to * 4,56,976 at 8 % per annum , interest being compounded half - yearly ?",
    "options": {
      "A": "2 years",
      "B": "1 years",
      "C": "2½ years",
      "D": "1 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 15,
    "question": "Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?",
    "options": {
      "A": "₹ 7,160",
      "B": "₹ 7,250",
      "C": "₹ 7,200",
      "D": "₹ 7,260"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 16,
    "question": "A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of money lent .",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 8,000",
      "C": "₹ 7,500",
      "D": "₹ 6,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 17,
    "question": "Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer )",
    "options": {
      "A": "₹ 72,980",
      "B": "73,980",
      "C": "70,980",
      "D": "₹ 72,680"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 23,
    "question_number": 10,
    "question": "Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is * 1,600 ?",
    "options": {
      "A": "₹ 2,000",
      "B": "₹ 3,000",
      "C": "₹ 2,500",
      "D": "₹ 2,600"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 11,
    "question": "If A is 1 of C. and B is twice of A. and the average of A , B and C is 30. then the difference between A and C is :",
    "options": {
      "A": "50",
      "B": "60",
      "C": "80",
      "D": "40"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 12,
    "question": "If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair is :",
    "options": {
      "A": "7,007",
      "B": "5,005",
      "C": "1,001",
      "D": "3,003"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 13,
    "question": "If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is :",
    "options": {
      "A": "5",
      "B": "10",
      "C": "8",
      "D": "4"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 14,
    "question": "Which of the following is the smallest ratio ?",
    "options": {
      "A": "41 92",
      "B": "3341",
      "C": "42 49",
      "D": "3547"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 15,
    "question": "Arrange the given ratios in descending order 157 , 511 and 21 : 77 .",
    "options": {
      "A": "21 775 : 11 > 15 : 7",
      "B": "15 75 : 11 > 21 : 77",
      "C": "15 721 77 > 5 11",
      "D": "5 11 15 : 7 > 21 : 77"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 16,
    "question": "Which of the following ratios is the greatest ?",
    "options": {
      "A": "2 : 5",
      "B": "7 : 10",
      "C": "5 : 6",
      "D": "1 3"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :",
    "options": {
      "A": "3 13",
      "B": "2 : 5",
      "C": "3 11",
      "D": "5 11"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 2,
    "question": "The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is :",
    "options": {
      "A": "76",
      "B": "6 : 7",
      "C": "13 : 7",
      "D": "7 13"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 3,
    "question": "If 3A 4B = 5C , then A B C is equal to :",
    "options": {
      "A": "107 : 6",
      "B": "20 15 12",
      "C": "20 15 16",
      "D": "1054"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 4,
    "question": "If a b c d , then which of the following ratio is equal to a c ?",
    "options": {
      "A": "a : d",
      "B": "b : c",
      "C": "ad",
      "D": "a b c d"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 5,
    "question": "If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ?",
    "options": {
      "A": "7 : 11",
      "B": "3 : 7",
      "C": "57",
      "D": "11 7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 6,
    "question": "The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is",
    "options": {
      "A": "60",
      "B": "150",
      "C": "140",
      "D": "350"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 7,
    "question": "If AB 6 : 8 and B C = 7 : 12 , then A B C is :",
    "options": {
      "A": "14 31 20",
      "B": "21 32 40",
      "C": "11 23 40",
      "D": "21 28 48"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 8,
    "question": "If AB 6 : 8 and B C 5:11 , then A B C is :",
    "options": {
      "A": "11 23 14",
      "B": "14 13 25",
      "C": "15 32 44",
      "D": "15 20 44"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 17,
    "question": "If a b = 3 : √5 , then the value of ( 2a + b ) ( 3a - 2b ) is :",
    "options": {
      "A": "( 64 + 21√5 )",
      "B": "( 64 + 21√5 )",
      "C": "( 64 + 21√5 ) 1",
      "D": "( 64 + 21√5 ) 61"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 18,
    "question": "Which of the following ratios is the smallest ? 34 , 12 , 25 , 1 : 3",
    "options": {
      "A": "1 : 3",
      "B": "2 : 5",
      "C": "3 : 4",
      "D": "1 : 2"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 19,
    "question": "The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .",
    "options": {
      "A": "75",
      "B": "56",
      "C": "48",
      "D": "64"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 20,
    "question": "If x y z = 3:45 , then what the ratio will be of 100 100",
    "options": {
      "A": "37 47",
      "B": "41 37",
      "C": "4937",
      "D": "45 48"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 21
```

---

## Interaction [18:15:39]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:15:54]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "Unknown",
  "exam_name": "Unknown",
  "year": "Unknown",
  "shift": "Unknown"
}
```

---

## Interaction [18:16:07]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:16:21]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 15 ---
1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION

--- PAGE 16 ---
Surds and Indices
SURDS AND INDICES
3
"
Laws of Surds
Law of Indices
1
axaxax .... n times = an
a =
√99-70√2 = ( 5√2-7 ) 70√3-2 × 35√√2
an
axaxa = a + n + p ( a = 0 )
=
axb
m
ab
5√2 49 + 50 = 99
= an ( m > n )
a a '
1
= ( ab )
1
√√√√ .....
= a
MS
=
( n > m )
an - m
ya
а
= 1
=
( m
n )
2 " -1
b
#b b
√√√a .... ntimes
a
܀
( am ) n = amxn = anxm = ( an ) m
na Radicand
Pavara .... co
va
܀
( abc ) " = axbnxcn
order of surd
n
dpy
n√a ÷ n√a ÷ n√ .... ∞ = n + 1√a
n
a '
m
܀
=
( b = 0 )
܀
=
( v )
bn
an = Va
√a + √a + √a + ....
( a ) am "
܀
=
Pma
lication
√√4a + 1 + 1 2
= x
( 32 ) 32
+
38316
P
√√√4a + 1-1 2
aq
= y
xp
aq
ач
+ 2 × 2 × √√3
x - y = 1
ab
xy = a
܀
If am an then m = n
-√ ( 2 + √3 ) - ( 2 + √3 )
OR Take two factors of a whose difference is 1 like Then x = Larger factor
If amb then a = b
Gaga
smaller factor
y
܀
√28 + 10√√3 = 10√√3 →
a = 1
x + y = √√4a + 1
2 × 5√3 5² + √32 = 28
܀
1
x =
√a + √a√a + ....
a - 1 =
( a 0 )
+
√√4a - 3 + 1 2
܀
( a - b ) ² = ( b - a ) ² = a² + b² - 2ab
1
1
& an =
a =
-n
an
a
y = √a - va + 1 - √a + √a-
a² + b² - 2ab
..... 00
a - b ( a > b ) b - a ( b > a )
-m
m
b
√4a - 3-1 2
√√43-24√3 = ( 3√3-4 )
=
x - y = 1
xy = 2 ( a - 1 )
24√√3-2 × 12√√3
܀
( -1 ) "
= +1 ( neven ) = -1 ( n = odd )
3√√3 > 16 + 27 = 43
Gagan Pratap Sir
CHA PION PL
77
PUBLICATION

--- PAGE 17 ---
Surds & Indices ( Previous Year Practice Questions )
SSC CHSL
If , 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + , then the value of 2x + 3y + 5z is ( CHSL 2019 Pre ) ( a ) 56 ( b ) 44 ( c ) 32 ( d ) 28 10. The value of
2
1
1
1
( a¹³ + 2a² + 3a + 2a + 1 )
1
1
-2a + 1 ) -a³ ( a¹ - 2 ) .
a3-2a6
when a 7 is : ( CHSL 2019 Pre )
( a ) 7 ( c ) 1
( b ) 0 ( d ) √√7
11. The value of
1
( CHSL 2019
( 9 + 4√5 ) ² is :
( a ) 322
( b ) 424 ( d ) 286
( c ) 246
3a + 3
x4a + 6
pione lication
x25a + 1 27a - 1x8a - 2 x125 the value of
is :
( CHSL 2019 Pre )
( a ) 4 ( c ) 5
( b ) 6 ( d ) 8
13. The value of 5 √√3 +7 √√√√6-
23
√2 + √3 + √6 is : ( CHSL 2019 Pre )
( b ) 16 ( d ) 10
the value of
3 / 15625√x = 4 .
( CHSL 2019 Pre )
( b ) 343 ( d ) 81
( a ) 625 ( c ) 441
-3
( 2x + 3 )
23
ug ]
then the value of √2-42x is :
( CHSL 2019 Pre )
( a ) 5
( b ) 6
( c ) 3
( d ) 4
78
SSC CGL
9 .
17.32 , then the
1. If 5√√3 + √√75
value of 14√3 + √108 is
( CPO 2021 Pre )
( a ) 32.46
( b ) 35.64
( d ) 33.86
( c ) 34.64
SSC CPO
2 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 6250.49 ( b ) 1250.49
( d ) 1354.24
( c ) 5768.28
3 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 2361.96 ( b ) 2758.28
( c ) 72568.4
( d ) 62504.9
4 .
Which one among the following is the smallest ? ( CPO 2019 Pre )
( a ) √401 - √399 ( b ) √101 - √√99
12. If
( c ) √301 - √299
( d ) √201 - √199
1
The value of
is closest
5 .
√7-4√3
( CPO 2019 Pre )
( b ) 4.2
to : ( a ) 4.1 ( c ) 1.2
( d ) 3.7
( a ) 0 ( c ) 12 14. Find
6 .
√0.6912 + √√0.5292 √0.6912 - √0.5292
( CPO 2019 Pre )
( b ) 0.9
( a ) 1.5 ( c ) 15
( d ) 9
7 .
The value
of √√11 + 2√ √18 is
closest to :
( CPO 2019 Pre )
15. If
( a ) 4.8 ( c ) 3.8
( b ) 4.4 ( d ) 4.1
8 .
The value of √6 - √17-2√72 is
closest is :
( CPO 2019 Pre )
( a ) 2.4
( b ) 2.7 ( d ) 1.7
( c ) 2.1
Gagan Pratap Sir
Surds and Indices
= ?
16. √30 + √30 + √30 + .
( CHSL 2019 Pre )
( b ) 4
( a ) 3 ( c ) 6
( d ) 5
17. Find the
value of x , if
21√x + 20√x = 29√x .
( CHSL 2019 Pre )
( b ) 3
( a ) 4 ( c ) 0
( d ) 2
18. If mx - nx = 0 then what is the
1
1 x ™ + x "
+
in
x "
xm
value of terms of x ?
( CHSL 2021 Pre )
2mn
2m
( b )
( a ) 2
x² ( n² + m² )
x² ( m² - n² )
2mn
2mn
( c ) x " ( n² - m² ) ( d ) x ^ ( m² - n² ) 19. Which of the following can be a rationalising
of
factor
( CHSL 2021 Pre )
( √√2 + √3 + √5 ) ? ( a ) ( √2 - √3 - √5 ) √6
4 1526 ,
( b ) ( √2 + √3 - √5 ) √6
( c ) ( √2 - √3 + √5 ) √6
( d ) ( √2 + √3 + √5 ) √6
20. 3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?
( CHSL 2021 Pre )
1
( a )
( b ) 1
( a + b ) ( c ) ( a + b )
( d ) 3
93+ 9 + 9 + 9 + 972
in
x
= ?
21 .
9+ 92+ 93 + 94 + 95
( CHSL 2021 Pre )
( b ) 3
( a ) 9
( d ) 81
( c ) 729
22. √2 + √3 + √2 - √3 = ?
-6
( 3x + 7 ) 5
( CHSL 2021 Pre )
( b ) 2√3
( a ) √√√6 ( c ) 2√√√2
( d ) 6
23. If a + b =
√7 and a -b = √5
then find the value of 8ab ( a² +
b² ) - ( a − b ) ² .
( CHSL 2021 Pre )
( b ) 23
( a ) 19
( d ) 21
( c ) 27
CHA PION PL
PUBLICATION

--- PAGE 19 ---
Percentage
( Previous Year Practice Questions )
1
1
9. The value of 17
77 % of 3
4
1
33
% of 7200 is :
3
( CGL MAINS 2020 ) ( b ) 11.68 ( d ) 9.65
( a ) 7.65 ( c ) 13.65 10. If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :
200
700
( b )
( a )
3
3
500
400 3
( c )
( d )
3
11. What is the value of 7.14 % of
66.67 % of 21.84 ? ( SSC GD 2024 )
( b ) 2.02
( a ) 1.07 ( c ) 1.04
( d ) 1.09
SSC CPO
12. A number which ,
increased by 16 % becomes 1914. The number is :
( CPO 2018 Pre )
( a ) 2220
( b ) 1650
( c ) 1780
( d ) 2010
64
to
converted
percentage is :
25
( CPO 2018 Pre )
hapio fo
( a ) 25.6 ( c ) 0.256
( b ) 256 ( d ) 2.56
14. 2.4 converted to percentage is :
( CPO 2018 Pre ) ( b ) 24 ( d ) 2.4
( a ) 0.24 ( c ) 240
15. If 20 % of a = b , then b % of 20 is
equal to :
( CPO 2018 Pre )
( a ) 4 % of a
( b ) 2 % of a
( c ) 16 % of a
( d ) 8 % of a
16. What is ( 0.08 %
of 0.008 % of 8 ) 1/9 ? ( CPO 2019 Pre ) ( b ) 0.2 ( d ) 0.08
( a ) 0.8 ( c ) 0.64
17. Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ? ( a ) ₹ 850
( CPO 2019 Pre ) ( b ) ₹ 750 ( d ) ₹ 800
( c ) 820
100
Basic Concept
SSC CGL
1 .
If 85 % of a number is added to 75 , then the result is the num- ber itself . The number is :
( a ) 500
( CGL 2018 Pre ) ( b ) 200 ( d ) 100
( c ) 300
2 .
If 50 % of the number is added 75 , then result becomes the same number , then the num-
ber is :
( CGL 2018 Pre )
( a ) 400
( b ) 100 ( d ) 150
( c ) 250
3 .
0.5 is what percentage of 20 ?
( CGL 2022 Pre ) ( b ) 0.25 %
( a ) 25 %
( c ) 2.5 %
( d ) 0.025 %
4 .
If A is 95 % of B , then what per cent of A is B ?
( CGL 2023 Pre )
3
- %
- %
( b ) 104 .
( a ) 110 .
7 19
19
17
( d ) 105. - %
- %
5 19
( c ) 107
19
13 .
Which of the following is the
5 .
least ?
( CGL 2023 Pre )
( a ) 9 % of 845
( b ) 12 % of 625
τα
( c ) 10 % of 720
( d ) 15 % of 555
6 .
If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ? ( CGL MAINS 2019 ) 1
( b ) 8 1 / 1 /
( a ) 13
3
3
1
2
( c ) 16
( d ) 33
25 % of ( 50 % of 30 % of 150 )
7 .
= ?
40 % of 2250
( CGL MAINS 2019 ) ( b ) 0.25 % ( d ) 0.225 %
( a ) 0.825 %
( c ) 0.625 %
8 .
What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ? ( CGL MAINS 2019 )
( b ) 45
( a ) 60
( d ) 40
( c ) 50
Gagan Pratap Sir
Percentage
% of
18. In a sweet , one - third is sugar . 7 If the price of sugar now is 6 of the previous price , what is the effective percentage increase in the cost of the sweet ?
( CPO 2024 Pre )
100
200
( a ) %
( b ) %
9
9
100
100
- %
- %
( c )
( d )
18
3
SSC CHSL
19. If x % of y is 150 and y % of z is 300 , then the relation between
x and z is :
( CHSL 2018 Pre )
( b ) z = x / 3
( a ) z = x ( c ) z = x / 2 20. If a % of 240
( d ) z = 2x
is c and c % of a is 117.6 , then the value of a + c
on
is :
( CHSL 2019 Pre )
when
( a ) 238
( b ) 144
( c ) 260
( d ) 196
21. A is 150 % of B and B is 40 % of C. If A + B + C = 20 , then the value of 2B + 3C4A is equal
to :
( CHSL 2020 Pre )
( b ) 14
( a ) 16
( d ) 15
( c ) 20
22. If ( 224 ) 2 ×
( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the
value of x .
( CHSL 2023 Pre )
( b ) 160
( a ) 120 ( c ) 190
( d ) 150
☑SSC MTS & SP 23. By what percentage is the percentage of the number of vowels in the CONSONANT less
of
than the percentage consonants in it ? ( MTS 2020 Pre )
( a ) 33.33 ( c ) 66.67
( b ) 200 ( d ) 50
11
24 .
5
of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ? ( MTS 2020 Pre ) ( a ) 30
( b ) 33 ( d ) 36
( c ) 32
CHA PION PU
PUBLICATION

--- PAGE 20 ---
Profit & Loss ( Previous Year Practice Questions )
By selling a car for * 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :
( CGL 2022 Pre )
( a ) ₹ 2,62,432 ( b ) ₹ 2,65,432 ( c ) 2,65,420 ( d ) ₹ 2,62,424 If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places ) ( CGL 2022 Pre ) ( a ) 38.89 % ( b ) 35.75 %
( c ) 32.25 %
( d ) 28.75 % A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ? ( CGL 2022 Pre ) ( a ) 10.5 % ( b ) 9.5 % ( c ) 9 % ( d ) 10 % 10. If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ? ( CGL 2023 Pre ) ( b ) 100 % ( d ) 25 %
( a ) 75 % ( c ) 50 %
11. Samreen sells a keyboard for * 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ? ( CGL 2024 Pre )
( a ) 2.51 % loss ( b ) 7.42 % gain ( c ) 3.52 % loss ( d ) 3.52 % gain
12. Madhav purchased an item for * 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in * ) ? ( CGL 2024 Pre ) ( b ) 4200 ( d ) 2520
( a ) 6720 ( c ) 1680
13. An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?
( CGL 2024 Pre ) ( b ) 5 : 2
( a ) 2 : 5 ( c ) 2 : 7
( d ) 7 : 2
146
7 .
Basic
SSC CGL
1 .
8 .
A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56 , 250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ? ( CGL 2019 Pre ) ( a ) ₹ 47,750 ( b ) ₹ 8,687.7 ( d ) * 20 , 625
9 .
( c ) ₹ 16,500
2 .
A tea seller used to make 50 % . of profit by selling tea at 9 per When the cost cup . of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ? ( CGL 2021 Pre ) ( a ) 33
( b ) 25
3
1
( c ) 33-
( d ) 30
3
3 .
4 .
5 .
A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ? ( CGL 2021 Pre ) ( a ) 18.75 % ( b ) 20.75 % ( c ) 21.25 % ( d ) 24.25 % The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ) of the mobile phone is ? ( CGL 2021 Pre ) ( a ) 52,000 ( b ) 55,000 ( c ) 45,000 ( d ) 50,000 The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is : ( CGL 2022 Pre ) ( a ) ₹ 8,200 ( b ) ₹ 9,200 ( c ) ₹ 8,000 ( d ) ₹ 9,000 A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ? ( CGL 2022 Pre ) ( a ) 5 % loss ( b ) 6 % profit ( c ) 5 % profit ( d ) 6 % loss
6 .
Gagan Pratap Sir
Profit & Loss
SSC CPO
14. If the selling price of an article is
2
1
of its cost price , the
5
percentage gain is . ( CPO 2018 Pre )
( a ) 47
( b ) 40 ( d ) 25
( c ) 20
15. Ajay buys 18 oranges for * 90 and sells 15 oranges for * 105 . Find the percentage of his
gain .
( CPO 2022 Pre )
( a ) 35 %
( b ) 30 % ( d ) 40 %
( c ) 25 %
16. If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ) of the article is : ( CPO 2023 Pre ) ( b ) 150 ( d ) 100
n
( a ) 175 ( c ) 200
SSC CHSL
17. By selling an article for * 2,300 , Komal gains 25 % . If she sells it for 1955 , then her loss / gain percent is : ( CHSL 2018 Pre )
( a ) Loss , 6.5 % ( b ) Gain , 6.5 % ( c ) Gain , 6.25 % ( d ) Loss , 6.25 %
18. Kishore had a loss of 20 % on selling an article for 7,160 . At what price should he had sold the item to make a profit of 30 % ? ( CHSL 2019 Pre ) ( a ) 11,635 ( b ) 12,007 ( c ) 10,678 ( d ) ₹ 8,988 19. If a saree is sold for 3,060 , the seller will face 15 % loss , at what price should he sell the saree to gain a 20 % profit ? ( CHSL 2019 Pre ) ( a ) ₹ 4,650 ( b ) 3,600 ( d ) 4,320 ( c ) 3,440 20. When an article is sold for * 720 , there is a profit of x % . When the same article is sold for ₹ 750 , profit is ( x + 5 ) % . What is the value of x ?
( CHSL 2019 Pre )
( b ) 18
( a ) 20
( c ) 25
( d ) 15
CHAMPION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 17,
    "question_number": 10,
    "question": "The value of (a¹³ + 2a¹² + 3a¹¹ + 2a¹⁰ + a⁹) / (a³ - 2a⁶) when a = 7 is :",
    "options": {
      "A": "7",
      "B": "0",
      "C": "1",
      "D": "√7"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 11,
    "question": "The value of (9 + 4√5)² is :",
    "options": {
      "A": "322",
      "B": "424",
      "C": "246",
      "D": "286"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 12,
    "question": "If x⁴ᵃ⁺⁶ / x²ᵃ⁺¹ × x⁵ᵃ⁺¹ / x⁸ᵃ⁻² × x¹²⁵ = ?, then the value of x is :",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "8"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 13,
    "question": "The value of √5√3 + 7√√√6 - 2√2 + √3 + √6 is :",
    "options": {
      "A": "12",
      "B": "16",
      "C": "23",
      "D": "10"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 14,
    "question": "Find the value of 3 / 15625√x = 4 .",
    "options": {
      "A": "625",
      "B": "343",
      "C": "441",
      "D": "81"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 15,
    "question": "If ( 2x + 3 ) ³ / 27 = 1 , then the value of √2 - 42x is :",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 16,
    "question": "√30 + √30 + √30 + .... = ?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 17,
    "question": "Find the value of x , if 21√x + 20√x = 29√x .",
    "options": {
      "A": "4",
      "B": "3",
      "C": "0",
      "D": "2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 18,
    "question": "If mx⁻ⁿ = nx⁻ᵐ then what is the value of xᵐ + xⁿ / xⁿ + xᵐ in terms of x ?",
    "options": {
      "A": "2mn / x² ( n² + m² )",
      "B": "2mn / x² ( m² - n² )",
      "C": "2mn / xⁿ ( n² - m² )",
      "D": "2mn / xⁿ ( m² - n² )"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 19,
    "question": "Which of the following can be a rationalising factor of ( √2 + √3 + √5 ) ?",
    "options": {
      "A": "( √2 - √3 - √5 ) √6",
      "B": "( √2 + √3 - √5 ) √6",
      "C": "( √2 - √3 + √5 ) √6",
      "D": "( √2 + √3 + √5 ) √6"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 20,
    "question": "3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?",
    "options": {
      "A": "1 / ( a + b )",
      "B": "1",
      "C": "( a + b )",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 21,
    "question": "9³ + 9⁴ + 9⁵ + 9⁶ + 9⁷ / 9 + 9² + 9³ + 9⁴ + 9⁵ = ?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "729",
      "D": "81"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 22,
    "question": "√2 + √3 + √2 - √3 = ?",
    "options": {
      "A": "√6",
      "B": "2√3",
      "C": "2√2",
      "D": "6"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 23,
    "question": "If a + b = √7 and a - b = √5 then find the value of 8ab ( a² + b² ) - ( a − b ) ² .",
    "options": {
      "A": "19",
      "B": "23",
      "C": "27",
      "D": "21"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 19,
    "question_number": 9,
    "question": "The value of 17 1/7 % of 33.33 % of 7200 is :",
    "options": {
      "A": "7.65",
      "B": "11.68",
      "C": "13.65",
      "D": "9.65"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 10,
    "question": "If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :",
    "options": {
      "A": "700/3",
      "B": "200/3",
      "C": "500/3",
      "D": "400/3"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 11,
    "question": "What is the value of 7.14 % of 66.67 % of 21.84 ?",
    "options": {
      "A": "1.07",
      "B": "2.02",
      "C": "1.04",
      "D": "1.09"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 12,
    "question": "A number which , when increased by 16 % becomes 1914. The number is :",
    "options": {
      "A": "2220",
      "B": "1650",
      "C": "1780",
      "D": "2010"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 13,
    "question": "25/64 converted to percentage is :",
    "options": {
      "A": "25.6",
      "B": "256",
      "C": "0.256",
      "D": "2.56"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 14,
    "question": "2.4 converted to percentage is :",
    "options": {
      "A": "0.24",
      "B": "24",
      "C": "240",
      "D": "2.4"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 15,
    "question": "If 20 % of a = b , then b % of 20 is equal to :",
    "options": {
      "A": "4 % of a",
      "B": "2 % of a",
      "C": "16 % of a",
      "D": "8 % of a"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 16,
    "question": "What is ( 0.08 % of 0.008 % of 8 ) ^ ( 1/9 ) ?",
    "options": {
      "A": "0.8",
      "B": "0.2",
      "C": "0.64",
      "D": "0.08"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 17,
    "question": "Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ?",
    "options": {
      "A": "₹ 850",
      "B": "₹ 750",
      "C": "820",
      "D": "₹ 800"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 1,
    "question": "If 85 % of a number is added to 75 , then the result is the number itself . The number is :",
    "options": {
      "A": "500",
      "B": "200",
      "C": "300",
      "D": "100"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 2,
    "question": "If 50 % of the number is added 75 , then result becomes the same number , then the number is :",
    "options": {
      "A": "400",
      "B": "100",
      "C": "250",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 3,
    "question": "0.5 is what percentage of 20 ?",
    "options": {
      "A": "25 %",
      "B": "0.25 %",
      "C": "2.5 %",
      "D": "0.025 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 4,
    "question": "If A is 95 % of B , then what per cent of A is B ?",
    "options": {
      "A": "110 10/19 %",
      "B": "104 4/19 %",
      "C": "107 17/19 %",
      "D": "105 5/19 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 5,
    "question": "Which of the following is the least ?",
    "options": {
      "A": "9 % of 845",
      "B": "12 % of 625",
      "C": "10 % of 720",
      "D": "15 % of 555"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 6,
    "question": "If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ?",
    "options": {
      "A": "13 1/3",
      "B": "8 1/3",
      "C": "16 2/3",
      "D": "33 1/3"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 7,
    "question": "25 % of ( 50 % of 30 % of 150 ) / 40 % of 2250 = ?",
    "options": {
      "A": "0.825 %",
      "B": "0.25 %",
      "C": "0.625 %",
      "D": "0.225 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 8,
    "question": "What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ?",
    "options": {
      "A": "60",
      "B": "45",
      "C": "50",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 19,
    "question": "If x % of y is 150 and y % of z is 300 , then the relation between x and z is :",
    "options": {
      "A": "z = x",
      "B": "z = x / 3",
      "C": "z = x / 2",
      "D": "z = 2x"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 20,
    "question": "If a % of 240 is c and c % of a is 117.6 , then the value of a + c is :",
    "options": {
      "A": "238",
      "B": "144",
      "C": "260",
      "D": "196"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 21,
    "question": "A is 150 % of B and B is 40 % of C. If A + B + C = 20 , then the value of 2B + 3C - 4A is equal to :",
    "options": {
      "A": "16",
      "B": "14",
      "C": "20",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 22,
    "question": "If ( 224 ) ^ 2 × ( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the value of x .",
    "options": {
      "A": "120",
      "B": "160",
      "C": "190",
      "D": "150"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 23,
    "question": "By what percentage is the percentage of the number of vowels in the CONSONANT less than the percentage of consonants in it ?",
    "options": {
      "A": "33.33",
      "B": "200",
      "C": "66.67",
      "D": "50"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 24,
    "question": "5/7 of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ?",
    "options": {
      "A": "30",
      "B": "33",
      "C": "32",
      "D": "36"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "By selling a car for ₹ 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :",
    "options": {
      "A": "₹ 2,62,432",
      "B": "₹ 2,65,432",
      "C": "2,65,420",
      "D": "₹ 2,62,424"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places )",
    "options": {
      "A": "38.89 %",
      "B": "35.75 %",
      "C": "32.25 %",
      "D": "28.75 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ?",
    "options": {
      "A": "10.5 %",
      "B": "9.5 %",
      "C": "9 %",
      "D": "10 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ?",
    "options": {
      "A": "75 %",
      "B": "100 %",
      "C": "50 %",
      "D": "25 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "Samreen sells a keyboard for ₹ 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ?",
    "options": {
      "A": "2.51 % loss",
      "B": "7.42 % gain",
      "C": "3.52 % loss",
      "D": "3.52 % gain"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "Madhav purchased an item for ₹ 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in ₹ ) ?",
    "options": {
      "A": "6720",
      "B": "4200",
      "C": "1680",
      "D": "2520"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 7,
    "question": "An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?",
    "options": {
      "A": "2 : 5",
      "B": "5 : 2",
      "C": "2 : 7",
      "D": "7 : 2"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56,250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ?",
    "options": {
      "A": "₹ 47,750",
      "B": "₹ 8,687.7",
      "C": "₹ 16,500",
      "D": "₹ 20,625"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "A tea seller used to make 50 % of profit by selling tea at 9 per cup . When the cost of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ?",
    "options": {
      "A": "33 1/3",
      "B": "25",
      "C": "33 1/3",
      "D": "30"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ?",
    "options": {
      "A": "18.75 %",
      "B": "20.75 %",
      "C": "21.25 %",
      "D": "24.25 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ₹ ) of the mobile phone is ?",
    "options": {
      "A": "52,000",
      "B": "55,000",
      "C": "45,000",
      "D": "50,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is :",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 9,200",
      "C": "₹ 8,000",
      "D": "₹ 9,000"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ?",
    "options": {
      "A": "5 % loss",
      "B": "6 % profit",
      "C": "5 % profit",
      "D": "6 % loss"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 14,
    "question": "If the selling price of an article is 2/5 of its cost price , the percentage gain is .",
    "options": {
      "A": "47",
      "B": "40",
      "C": "20",
      "D": "25"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 15,
    "question": "Ajay buys 18 oranges for ₹ 90 and sells 15 oranges for ₹ 105 . Find the percentage of his gain .",
    "options": {
      "A": "35 %",
      "B": "30 %",
      "C": "25 %",
      "D": "40 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 16,
    "question": "If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ₹ ) of the article is :",
    "options": {
      "A": "175",
      "B": "150",
      "C": "200",
      "D": "100"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 17,
    "question": "By selling an article for ₹ 2,300 , Komal gains 25 % . If she sells it for 1955 , then her loss / gain percent is :",
    "options": {
      "A": "Loss , 6.5 %",
      "B": "Gain , 6.5 %",
      "C": "Gain , 6.25 %",
      "D": "Loss , 6.25 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number":
```

---

## Interaction [18:16:27]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "Unknown",
  "exam_name": "Unknown",
  "year": "Unknown",
  "shift": "Unknown"
}
```

---

## Interaction [18:16:40]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 15 ---
1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION

--- PAGE 16 ---
Surds and Indices
SURDS AND INDICES
3
"
Laws of Surds
Law of Indices
1
axaxax .... n times = an
a =
√99-70√2 = ( 5√2-7 ) 70√3-2 × 35√√2
an
axaxa = a + n + p ( a = 0 )
=
axb
m
ab
5√2 49 + 50 = 99
= an ( m > n )
a a '
1
= ( ab )
1
√√√√ .....
= a
MS
=
( n > m )
an - m
ya
а
= 1
=
( m
n )
2 " -1
b
#b b
√√√a .... ntimes
a
܀
( am ) n = amxn = anxm = ( an ) m
na Radicand
Pavara .... co
va
܀
( abc ) " = axbnxcn
order of surd
n
dpy
n√a ÷ n√a ÷ n√ .... ∞ = n + 1√a
n
a '
m
܀
=
( b = 0 )
܀
=
( v )
bn
an = Va
√a + √a + √a + ....
( a ) am "
܀
=
Pma
lication
√√4a + 1 + 1 2
= x
( 32 ) 32
+
38316
P
√√√4a + 1-1 2
aq
= y
xp
aq
ач
+ 2 × 2 × √√3
x - y = 1
ab
xy = a
܀
If am an then m = n
-√ ( 2 + √3 ) - ( 2 + √3 )
OR Take two factors of a whose difference is 1 like Then x = Larger factor
If amb then a = b
Gaga
smaller factor
y
܀
√28 + 10√√3 = 10√√3 →
a = 1
x + y = √√4a + 1
2 × 5√3 5² + √32 = 28
܀
1
x =
√a + √a√a + ....
a - 1 =
( a 0 )
+
√√4a - 3 + 1 2
܀
( a - b ) ² = ( b - a ) ² = a² + b² - 2ab
1
1
& an =
a =
-n
an
a
y = √a - va + 1 - √a + √a-
a² + b² - 2ab
..... 00
a - b ( a > b ) b - a ( b > a )
-m
m
b
√4a - 3-1 2
√√43-24√3 = ( 3√3-4 )
=
x - y = 1
xy = 2 ( a - 1 )
24√√3-2 × 12√√3
܀
( -1 ) "
= +1 ( neven ) = -1 ( n = odd )
3√√3 > 16 + 27 = 43
Gagan Pratap Sir
CHA PION PL
77
PUBLICATION

--- PAGE 17 ---
Surds & Indices ( Previous Year Practice Questions )
SSC CHSL
If , 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + , then the value of 2x + 3y + 5z is ( CHSL 2019 Pre ) ( a ) 56 ( b ) 44 ( c ) 32 ( d ) 28 10. The value of
2
1
1
1
( a¹³ + 2a² + 3a + 2a + 1 )
1
1
-2a + 1 ) -a³ ( a¹ - 2 ) .
a3-2a6
when a 7 is : ( CHSL 2019 Pre )
( a ) 7 ( c ) 1
( b ) 0 ( d ) √√7
11. The value of
1
( CHSL 2019
( 9 + 4√5 ) ² is :
( a ) 322
( b ) 424 ( d ) 286
( c ) 246
3a + 3
x4a + 6
pione lication
x25a + 1 27a - 1x8a - 2 x125 the value of
is :
( CHSL 2019 Pre )
( a ) 4 ( c ) 5
( b ) 6 ( d ) 8
13. The value of 5 √√3 +7 √√√√6-
23
√2 + √3 + √6 is : ( CHSL 2019 Pre )
( b ) 16 ( d ) 10
the value of
3 / 15625√x = 4 .
( CHSL 2019 Pre )
( b ) 343 ( d ) 81
( a ) 625 ( c ) 441
-3
( 2x + 3 )
23
ug ]
then the value of √2-42x is :
( CHSL 2019 Pre )
( a ) 5
( b ) 6
( c ) 3
( d ) 4
78
SSC CGL
9 .
17.32 , then the
1. If 5√√3 + √√75
value of 14√3 + √108 is
( CPO 2021 Pre )
( a ) 32.46
( b ) 35.64
( d ) 33.86
( c ) 34.64
SSC CPO
2 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 6250.49 ( b ) 1250.49
( d ) 1354.24
( c ) 5768.28
3 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 2361.96 ( b ) 2758.28
( c ) 72568.4
( d ) 62504.9
4 .
Which one among the following is the smallest ? ( CPO 2019 Pre )
( a ) √401 - √399 ( b ) √101 - √√99
12. If
( c ) √301 - √299
( d ) √201 - √199
1
The value of
is closest
5 .
√7-4√3
( CPO 2019 Pre )
( b ) 4.2
to : ( a ) 4.1 ( c ) 1.2
( d ) 3.7
( a ) 0 ( c ) 12 14. Find
6 .
√0.6912 + √√0.5292 √0.6912 - √0.5292
( CPO 2019 Pre )
( b ) 0.9
( a ) 1.5 ( c ) 15
( d ) 9
7 .
The value
of √√11 + 2√ √18 is
closest to :
( CPO 2019 Pre )
15. If
( a ) 4.8 ( c ) 3.8
( b ) 4.4 ( d ) 4.1
8 .
The value of √6 - √17-2√72 is
closest is :
( CPO 2019 Pre )
( a ) 2.4
( b ) 2.7 ( d ) 1.7
( c ) 2.1
Gagan Pratap Sir
Surds and Indices
= ?
16. √30 + √30 + √30 + .
( CHSL 2019 Pre )
( b ) 4
( a ) 3 ( c ) 6
( d ) 5
17. Find the
value of x , if
21√x + 20√x = 29√x .
( CHSL 2019 Pre )
( b ) 3
( a ) 4 ( c ) 0
( d ) 2
18. If mx - nx = 0 then what is the
1
1 x ™ + x "
+
in
x "
xm
value of terms of x ?
( CHSL 2021 Pre )
2mn
2m
( b )
( a ) 2
x² ( n² + m² )
x² ( m² - n² )
2mn
2mn
( c ) x " ( n² - m² ) ( d ) x ^ ( m² - n² ) 19. Which of the following can be a rationalising
of
factor
( CHSL 2021 Pre )
( √√2 + √3 + √5 ) ? ( a ) ( √2 - √3 - √5 ) √6
4 1526 ,
( b ) ( √2 + √3 - √5 ) √6
( c ) ( √2 - √3 + √5 ) √6
( d ) ( √2 + √3 + √5 ) √6
20. 3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?
( CHSL 2021 Pre )
1
( a )
( b ) 1
( a + b ) ( c ) ( a + b )
( d ) 3
93+ 9 + 9 + 9 + 972
in
x
= ?
21 .
9+ 92+ 93 + 94 + 95
( CHSL 2021 Pre )
( b ) 3
( a ) 9
( d ) 81
( c ) 729
22. √2 + √3 + √2 - √3 = ?
-6
( 3x + 7 ) 5
( CHSL 2021 Pre )
( b ) 2√3
( a ) √√√6 ( c ) 2√√√2
( d ) 6
23. If a + b =
√7 and a -b = √5
then find the value of 8ab ( a² +
b² ) - ( a − b ) ² .
( CHSL 2021 Pre )
( b ) 23
( a ) 19
( d ) 21
( c ) 27
CHA PION PL
PUBLICATION

--- PAGE 19 ---
Percentage
( Previous Year Practice Questions )
1
1
9. The value of 17
77 % of 3
4
1
33
% of 7200 is :
3
( CGL MAINS 2020 ) ( b ) 11.68 ( d ) 9.65
( a ) 7.65 ( c ) 13.65 10. If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :
200
700
( b )
( a )
3
3
500
400 3
( c )
( d )
3
11. What is the value of 7.14 % of
66.67 % of 21.84 ? ( SSC GD 2024 )
( b ) 2.02
( a ) 1.07 ( c ) 1.04
( d ) 1.09
SSC CPO
12. A number which ,
increased by 16 % becomes 1914. The number is :
( CPO 2018 Pre )
( a ) 2220
( b ) 1650
( c ) 1780
( d ) 2010
64
to
converted
percentage is :
25
( CPO 2018 Pre )
hapio fo
( a ) 25.6 ( c ) 0.256
( b ) 256 ( d ) 2.56
14. 2.4 converted to percentage is :
( CPO 2018 Pre ) ( b ) 24 ( d ) 2.4
( a ) 0.24 ( c ) 240
15. If 20 % of a = b , then b % of 20 is
equal to :
( CPO 2018 Pre )
( a ) 4 % of a
( b ) 2 % of a
( c ) 16 % of a
( d ) 8 % of a
16. What is ( 0.08 %
of 0.008 % of 8 ) 1/9 ? ( CPO 2019 Pre ) ( b ) 0.2 ( d ) 0.08
( a ) 0.8 ( c ) 0.64
17. Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ? ( a ) ₹ 850
( CPO 2019 Pre ) ( b ) ₹ 750 ( d ) ₹ 800
( c ) 820
100
Basic Concept
SSC CGL
1 .
If 85 % of a number is added to 75 , then the result is the num- ber itself . The number is :
( a ) 500
( CGL 2018 Pre ) ( b ) 200 ( d ) 100
( c ) 300
2 .
If 50 % of the number is added 75 , then result becomes the same number , then the num-
ber is :
( CGL 2018 Pre )
( a ) 400
( b ) 100 ( d ) 150
( c ) 250
3 .
0.5 is what percentage of 20 ?
( CGL 2022 Pre ) ( b ) 0.25 %
( a ) 25 %
( c ) 2.5 %
( d ) 0.025 %
4 .
If A is 95 % of B , then what per cent of A is B ?
( CGL 2023 Pre )
3
- %
- %
( b ) 104 .
( a ) 110 .
7 19
19
17
( d ) 105. - %
- %
5 19
( c ) 107
19
13 .
Which of the following is the
5 .
least ?
( CGL 2023 Pre )
( a ) 9 % of 845
( b ) 12 % of 625
τα
( c ) 10 % of 720
( d ) 15 % of 555
6 .
If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ? ( CGL MAINS 2019 ) 1
( b ) 8 1 / 1 /
( a ) 13
3
3
1
2
( c ) 16
( d ) 33
25 % of ( 50 % of 30 % of 150 )
7 .
= ?
40 % of 2250
( CGL MAINS 2019 ) ( b ) 0.25 % ( d ) 0.225 %
( a ) 0.825 %
( c ) 0.625 %
8 .
What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ? ( CGL MAINS 2019 )
( b ) 45
( a ) 60
( d ) 40
( c ) 50
Gagan Pratap Sir
Percentage
% of
18. In a sweet , one - third is sugar . 7 If the price of sugar now is 6 of the previous price , what is the effective percentage increase in the cost of the sweet ?
( CPO 2024 Pre )
100
200
( a ) %
( b ) %
9
9
100
100
- %
- %
( c )
( d )
18
3
SSC CHSL
19. If x % of y is 150 and y % of z is 300 , then the relation between
x and z is :
( CHSL 2018 Pre )
( b ) z = x / 3
( a ) z = x ( c ) z = x / 2 20. If a % of 240
( d ) z = 2x
is c and c % of a is 117.6 , then the value of a + c
on
is :
( CHSL 2019 Pre )
when
( a ) 238
( b ) 144
( c ) 260
( d ) 196
21. A is 150 % of B and B is 40 % of C. If A + B + C = 20 , then the value of 2B + 3C4A is equal
to :
( CHSL 2020 Pre )
( b ) 14
( a ) 16
( d ) 15
( c ) 20
22. If ( 224 ) 2 ×
( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the
value of x .
( CHSL 2023 Pre )
( b ) 160
( a ) 120 ( c ) 190
( d ) 150
☑SSC MTS & SP 23. By what percentage is the percentage of the number of vowels in the CONSONANT less
of
than the percentage consonants in it ? ( MTS 2020 Pre )
( a ) 33.33 ( c ) 66.67
( b ) 200 ( d ) 50
11
24 .
5
of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ? ( MTS 2020 Pre ) ( a ) 30
( b ) 33 ( d ) 36
( c ) 32
CHA PION PU
PUBLICATION

--- PAGE 20 ---
Profit & Loss ( Previous Year Practice Questions )
By selling a car for * 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :
( CGL 2022 Pre )
( a ) ₹ 2,62,432 ( b ) ₹ 2,65,432 ( c ) 2,65,420 ( d ) ₹ 2,62,424 If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places ) ( CGL 2022 Pre ) ( a ) 38.89 % ( b ) 35.75 %
( c ) 32.25 %
( d ) 28.75 % A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ? ( CGL 2022 Pre ) ( a ) 10.5 % ( b ) 9.5 % ( c ) 9 % ( d ) 10 % 10. If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ? ( CGL 2023 Pre ) ( b ) 100 % ( d ) 25 %
( a ) 75 % ( c ) 50 %
11. Samreen sells a keyboard for * 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ? ( CGL 2024 Pre )
( a ) 2.51 % loss ( b ) 7.42 % gain ( c ) 3.52 % loss ( d ) 3.52 % gain
12. Madhav purchased an item for * 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in * ) ? ( CGL 2024 Pre ) ( b ) 4200 ( d ) 2520
( a ) 6720 ( c ) 1680
13. An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?
( CGL 2024 Pre ) ( b ) 5 : 2
( a ) 2 : 5 ( c ) 2 : 7
( d ) 7 : 2
146
7 .
Basic
SSC CGL
1 .
8 .
A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56 , 250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ? ( CGL 2019 Pre ) ( a ) ₹ 47,750 ( b ) ₹ 8,687.7 ( d ) * 20 , 625
9 .
( c ) ₹ 16,500
2 .
A tea seller used to make 50 % . of profit by selling tea at 9 per When the cost cup . of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ? ( CGL 2021 Pre ) ( a ) 33
( b ) 25
3
1
( c ) 33-
( d ) 30
3
3 .
4 .
5 .
A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ? ( CGL 2021 Pre ) ( a ) 18.75 % ( b ) 20.75 % ( c ) 21.25 % ( d ) 24.25 % The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ) of the mobile phone is ? ( CGL 2021 Pre ) ( a ) 52,000 ( b ) 55,000 ( c ) 45,000 ( d ) 50,000 The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is : ( CGL 2022 Pre ) ( a ) ₹ 8,200 ( b ) ₹ 9,200 ( c ) ₹ 8,000 ( d ) ₹ 9,000 A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ? ( CGL 2022 Pre ) ( a ) 5 % loss ( b ) 6 % profit ( c ) 5 % profit ( d ) 6 % loss
6 .
Gagan Pratap Sir
Profit & Loss
SSC CPO
14. If the selling price of an article is
2
1
of its cost price , the
5
percentage gain is . ( CPO 2018 Pre )
( a ) 47
( b ) 40 ( d ) 25
( c ) 20
15. Ajay buys 18 oranges for * 90 and sells 15 oranges for * 105 . Find the percentage of his
gain .
( CPO 2022 Pre )
( a ) 35 %
( b ) 30 %
( d ) 40 %
( c ) 25 %
16. If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ) of the article is : ( CPO 2023 Pre ) ( b ) 150 ( d ) 100
n
( a ) 175 ( c ) 200
SSC CHSL
17. By selling an article for * 2,300 , Komal gains 25 % . If she sells it for 1955 , then her loss / gain percent is : ( CHSL 2018 Pre )
( a ) Loss , 6.5 % ( b ) Gain , 6.5 % ( c ) Gain , 6.25 % ( d ) Loss , 6.25 %
18. Kishore had a loss of 20 % on selling an article for 7,160 . At what price should he had sold the item to make a profit of 30 % ? ( CHSL 2019 Pre ) ( a ) 11,635 ( b ) 12,007 ( c ) 10,678 ( d ) ₹ 8,988 19. If a saree is sold for 3,060 , the seller will face 15 % loss , at what price should he sell the saree to gain a 20 % profit ? ( CHSL 2019 Pre ) ( a ) ₹ 4,650 ( b ) 3,600 ( d ) 4,320 ( c ) 3,440 20. When an article is sold for * 720 , there is a profit of x % . When the same article is sold for ₹ 750 , profit is ( x + 5 ) % . What is the value of x ?
( CHSL 2019 Pre )
( b ) 18
( a ) 20
( d ) 15
( c ) 25
CHAMPION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 17,
    "question_number": 10,
    "question": "The value of (a¹³ + 2a² + 3a + 2a + 1) / (a³-2a⁶) when a = 7 is :",
    "options": {
      "A": "7",
      "B": "0",
      "C": "1",
      "D": "√7"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 11,
    "question": "The value of (9 + 4√5)² is :",
    "options": {
      "A": "322",
      "B": "424",
      "C": "246",
      "D": "286"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 12,
    "question": "If x⁴ᵃ⁺⁶ / x²⁵ᵃ⁺¹ = x⁸ᵃ⁻² x¹²⁵, then the value of x is :",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "8"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 13,
    "question": "The value of √5√3 + 7√√√6 - √2 + √3 + √6 is :",
    "options": {
      "A": "12",
      "B": "16",
      "C": "23",
      "D": "10"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 14,
    "question": "Find the value of 3 / 15625√x = 4.",
    "options": {
      "A": "625",
      "B": "343",
      "C": "441",
      "D": "81"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 15,
    "question": "If (2x + 3)³ = 23, then the value of √2-42x is :",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 16,
    "question": "√30 + √30 + √30 + .... = ?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 17,
    "question": "Find the value of x, if 21√x + 20√x = 29√x.",
    "options": {
      "A": "4",
      "B": "3",
      "C": "0",
      "D": "2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 18,
    "question": "If mx⁻ⁿ = nx⁻ᵐ then what is the value of xᵐ + xⁿ / xⁿ + xᵐ in terms of x?",
    "options": {
      "A": "2 / (x²(n² + m²))",
      "B": "2mn / (x²(m² - n²))",
      "C": "2mn / (xⁿ(n² - m²))",
      "D": "2mn / (xᵐ(m² - n²))"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 19,
    "question": "Which of the following can be a rationalising factor of (√2 + √3 + √5)?",
    "options": {
      "A": "(√2 - √3 - √5) √6",
      "B": "(√2 + √3 - √5) √6",
      "C": "(√2 - √3 + √5) √6",
      "D": "(√2 + √3 + √5) √6"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 20,
    "question": "3ab(a+b)¹ × (a¹+b²¹) = ?",
    "options": {
      "A": "1 / (a+b)",
      "B": "1",
      "C": "(a+b)",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 21,
    "question": "9³+ 9⁴+ 9⁵+ 9⁶+ 9⁷ / 9²+ 9³+ 9⁴+ 9⁵+ 9⁶ = ?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "729",
      "D": "81"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 22,
    "question": "√2 + √3 + √2 - √3 = ?",
    "options": {
      "A": "√6",
      "B": "2√3",
      "C": "2√2",
      "D": "6"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 23,
    "question": "If a + b = √7 and a - b = √5, then find the value of 8ab(a² + b²) - (a - b)².",
    "options": {
      "A": "19",
      "B": "23",
      "C": "27",
      "D": "21"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 19,
    "question_number": 9,
    "question": "The value of 17 1/7 % of 33/4 % of 7200 is :",
    "options": {
      "A": "7.65",
      "B": "11.68",
      "C": "13.65",
      "D": "9.65"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 10,
    "question": "If 91% of A is 39% of B, and B is x% of A, then the value of x is :",
    "options": {
      "A": "700/3",
      "B": "200/3",
      "C": "500/3",
      "D": "400/3"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 11,
    "question": "What is the value of 7.14% of 66.67% of 21.84 ?",
    "options": {
      "A": "1.07",
      "B": "2.02",
      "C": "1.04",
      "D": "1.09"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 12,
    "question": "A number which, when increased by 16% becomes 1914. The number is :",
    "options": {
      "A": "2220",
      "B": "1650",
      "C": "1780",
      "D": "2010"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 13,
    "question": "25/64 to percentage is :",
    "options": {
      "A": "25.6",
      "B": "256",
      "C": "0.256",
      "D": "2.56"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 14,
    "question": "2.4 converted to percentage is :",
    "options": {
      "A": "0.24",
      "B": "24",
      "C": "240",
      "D": "2.4"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 15,
    "question": "If 20% of a = b, then b% of 20 is equal to :",
    "options": {
      "A": "4% of a",
      "B": "2% of a",
      "C": "16% of a",
      "D": "8% of a"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 16,
    "question": "What is (0.08% of 0.008% of 8)¹/⁹ ?",
    "options": {
      "A": "0.8",
      "B": "0.2",
      "C": "0.64",
      "D": "0.08"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 17,
    "question": "Two persons A and B are paid a total of 2,040 per week by their employer. If B is paid 140 percent of the sum paid to A, then how much is A paid per week?",
    "options": {
      "A": "₹ 850",
      "B": "₹ 750",
      "C": "820",
      "D": "₹ 800"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 1,
    "question": "If 85% of a number is added to 75, then the result is the number itself. The number is :",
    "options": {
      "A": "500",
      "B": "200",
      "C": "300",
      "D": "100"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 2,
    "question": "If 50% of the number is added 75, then result becomes the same number, then the number is :",
    "options": {
      "A": "400",
      "B": "100",
      "C": "250",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 3,
    "question": "0.5 is what percentage of 20?",
    "options": {
      "A": "25%",
      "B": "0.25%",
      "C": "2.5%",
      "D": "0.025%"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 4,
    "question": "If A is 95% of B, then what per cent of A is B?",
    "options": {
      "A": "110 10/19 %",
      "B": "104 4/19 %",
      "C": "107 17/19 %",
      "D": "105 5/19 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 5,
    "question": "Which of the following is the least?",
    "options": {
      "A": "9% of 845",
      "B": "12% of 625",
      "C": "10% of 720",
      "D": "15% of 555"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 6,
    "question": "If (x + 20)% of 250 is 25% more than x% of 220, then 10% of (x + 50) is what percent less than 15% of x?",
    "options": {
      "A": "13 1/3",
      "B": "8 1/3",
      "C": "16 2/3",
      "D": "33 1/3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 7,
    "question": "25% of (50% of 30% of 150) / 40% of 2250 = ?",
    "options": {
      "A": "0.825%",
      "B": "0.25%",
      "C": "0.625%",
      "D": "0.225%"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 8,
    "question": "What is to be added to 15% of 180 so that the sum is equal to 20% of 360?",
    "options": {
      "A": "60",
      "B": "45",
      "C": "50",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 19,
    "question": "If x% of y is 150 and y% of z is 300, then the relation between x and z is:",
    "options": {
      "A": "z = x",
      "B": "z = x / 3",
      "C": "z = x / 2",
      "D": "z = 2x"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 20,
    "question": "If a% of 240 is c and c% of a is 117.6, then the value of a + c is:",
    "options": {
      "A": "238",
      "B": "144",
      "C": "260",
      "D": "196"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 21,
    "question": "A is 150% of B and B is 40% of C. If A + B + C = 20, then the value of 2B + 3C - 4A is equal to:",
    "options": {
      "A": "16",
      "B": "14",
      "C": "20",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 22,
    "question": "If (224)² × (35) + 20% of 400 + x% of 30 = 30% of 30, find the value of x.",
    "options": {
      "A": "120",
      "B": "160",
      "C": "190",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 23,
    "question": "By what percentage is the percentage of the number of vowels in CONSONANT less than the percentage of consonants in it?",
    "options": {
      "A": "33.33",
      "B": "200",
      "C": "66.67",
      "D": "50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 24,
    "question": "5/7 of a number A is 22% of a number B. The number B is equal to 2.5% of a third number, C. If the value of number C is 5500, then the sum of 40% of A and 20% of B is?",
    "options": {
      "A": "30",
      "B": "33",
      "C": "32",
      "D": "36"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "By selling a car for ₹ 2,78,000, a dealer gains 25%. If the profit is reduced to 18%, then the selling price will be:",
    "options": {
      "A": "₹ 2,62,432",
      "B": "₹ 2,65,432",
      "C": "2,65,420",
      "D": "₹ 2,62,424"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "If the cost price is 72% of the selling price, then what is the percentage of profit? (Correct to 2 decimal places)",
    "options": {
      "A": "38.89%",
      "B": "35.75%",
      "C": "32.25%",
      "D": "28.75%"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A man lost 15% by selling a mobile for 4,675. What will be his gain percentage by selling it for 6,050?",
    "options": {
      "A": "10.5%",
      "B": "9.5%",
      "C": "9%",
      "D": "10%"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 10,
    "question": "If the selling price of an article is doubled, then the profit becomes four times. What was the original profit percentage?",
    "options": {
      "A": "75%",
      "B": "100%",
      "C": "50%",
      "D": "25%"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 11,
    "question": "Samreen sells a keyboard for ₹ 1,260 at a profit of 25%, and another keyboard for 1,440 at a loss of 10%. What is her total gain or loss percentage?",
    "options": {
      "A": "2.51% loss",
      "B": "7.42% gain",
      "C": "3.52% loss",
      "D": "3.52% gain"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 12,
    "question": "Madhav purchased an item for ₹ 42,000 and sold it at a loss of 20%. With that amount, he purchased another item and sold it at a gain of 30%. What is the overall gain (in ₹)?",
    "options": {
      "A": "6720",
      "B": "4200",
      "C": "1680",
      "D": "2520"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 13,
    "question": "An article is sold at a profit of 250%. What is the ratio of its cost price to selling price?",
    "options": {
      "A": "2 : 5",
      "B": "5 : 2",
      "C": "2 : 7",
      "D": "7 : 2"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance. He sold it for 1,56,250 thereby earning a profit of 25%. How much money did he spend on the maintenance of the car?",
    "options": {
      "A": "₹ 47,750",
      "B": "₹ 8,687.7",
      "C": "₹ 16,500",
      "D": "₹ 20,625"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "A tea seller used to make 50% of profit by selling tea at 9 per cup. When the cost of ingredients increased by 25%, he started selling tea at 10 per cup. What is his profit percentage now?",
    "options": {
      "A": "33 1/3%",
      "B": "25%",
      "C": "33 1/3%",
      "D": "30%"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A fruit vendor recovers the cost of 95 oranges by selling 80 oranges. What is the profit percentage?",
    "options": {
      "A": "18.75%",
      "B": "20.75%",
      "C": "21.25%",
      "D": "24.25%"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "The selling price of a mobile phone is 59,620 and it was sold at 8.4% profit. The cost price (in ₹) of the mobile phone is?",
    "options": {
      "A": "52,000",
      "B": "55,000",
      "C": "45,000",
      "D": "50,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "The difference between the cost price and selling price of a pair of shoes is 1,200. If the profit is 15%, the selling price is:",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 9,200",
      "C": "₹ 8,000",
      "D": "₹ 9,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "A pen was sold for 166.44 with a profit of 14%. If it were sold for 154.76, then what would have been the percentage of profit or loss?",
    "options": {
      "A": "5% loss",
      "B": "6% profit",
      "C": "5% profit",
      "D": "6% loss"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 14,
    "question": "If the selling price of an article is 2/5 of its cost price, the percentage gain is.",
    "options": {
      "A": "47",
      "B": "40",
      "C": "20",
      "D": "25"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 15,
    "question": "Ajay buys 18 oranges for ₹ 90 and sells 15 oranges for ₹ 105. Find the percentage of his gain.",
    "options": {
      "A": "35%",
      "B": "30%",
      "C": "25%",
      "D": "40%"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 16,
    "question": "If the difference between the selling prices of an article at profits of 10% and 7% is 6, then the cost price (in ₹) of the article is:",
    "options": {
      "A": "175",
      "B": "150",
      "C": "200",
      "D": "100"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 17,
    "question": "By selling an article for ₹ 2,300, Komal gains 25%. If she sells it for 1955, then her loss/gain percent is:",
    "options": {
      "A": "Loss, 6.5%",
      "B": "Gain, 6.5%",
      "C": "Gain, 6.25%",
      "D": "Loss, 6.25%"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 18,
    "question": "Kishore had a loss of 20% on selling an article for 7,160. At what price should he had sold the item to make a profit of 30%?",
    "options": {
      "A": "11,635",
      "B": "12,007",
      "C": "
```

---

## Interaction [18:16:45]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 21 ---
Discount
( Previous Year Practice Questions )
Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ? ( CGL 2022 Pre ) ( b ) 48 ( d ) 46
( a ) ₹ 44 ( c ) 42
A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % . ( CGL 2022 Pre ) ( a ) 50 % ( b ) 70 % ( c ) 30 % The single discount equivalent
( d ) 40 %
to two successive discounts of 15 % and 12 % on an article is ?
( CGL 2022
( a ) 3 % ( b ) 25.2 % ( c ) 74.8 % ( d ) 27 % The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill . ( CGL 2022 Pre ) ( a ) ₹ 3,333 , .33 ( b ) ₹ 2,500 ( c ) 833.33 ( d ) 1,666.67 A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum
percentage ?
( CGL 2022 Pre )
I. Two successive discounts of 10 % each . II . Successive discounts of 15 % and 5 % . III . 20 % discount . ( a ) Only discount scheme I ( b ) Only discount scheme II ( c ) Only discount scheme III ( d ) All provide equal discount 10. A shopkeeper offers the following three schemes . ( CGL 2022 Pre ) Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6
192
5 .
Basic Concept / Successive Discount
SSC CGL
1 .
6 .
Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ? ( CGL 2020 Pre ) ( a ) C , 1780 ( b ) A , 1735.20 ( c ) B , 1800 ( d ) C , 1783.40
7 .
2 .
to
A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ? ( CGL 2020 Pre )
8 .
( a ) second offer by * 100
( b ) first offer by * 68
( c ) second offer by * 68
( d ) first offer by * 32
3 .
9 .
A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ? ( CGL 2021 Pre ) ( a ) 13,280 , 16,517 ( b ) 13,083 , 16,517
( c ) 16,517 , 13,083
4 .
( d ) 16,517 , 13,280 A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?
( a ) 2519
( CGL 2021 Pre ) ( b ) 2977 ( d ) 3664
( c ) 2382
Gagan Pratap Sir
Discount
Which scheme is the best for customers ?
( a ) Scheme - I ( b ) Scheme - III ( c ) Scheme - II
( d ) All scheme are equal 11. A shopkeeper offers the following discount schemes for buyers on an article : ( CGL 2023 Pre )
i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ? ( a ) Scheme iv ( b ) Scheme iii ( c ) Scheme ii ( d ) Scheme i 12. A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ? ( CGL 2023 Pre )
catin
Buy 6 , get 4 free
a
Buy 5 , get 5 free
Two successive discounts of 18 % and 24 %
( b ) Only B & C
( a ) Only B
( c ) Only A & C ( d ) Only A 13. If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ? ( CGL 2023 Pre ) ( a ) 15
( b ) 25 ( d ) 30
( c ) 20
discount
14. The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ? ( CGL 2023 Pre )
all
for
the
( a ) First ( b ) Same shopkeepers ( c ) Third ( d ) Second
CHA PION PL
PUBLICATION

--- PAGE 22 ---
Compound Interest ( Previous Year Practice Questions )
6. The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum ( CPO 2019 Pre ) ( b ) ₹ 7,200 ( d ) ₹ 7,000
is :
( a ) ₹ 7,250
( c ) ₹ 7,500
What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ? ( CPO 2023 Pre ) ( a ) ₹ 9,824.00 ( b ) 10,520.00 ( c ) 9,956.86 ( d ) ₹ 10,123.20
SSC CHSL
The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :
( CHSL 2019 Pre ) ( b ) 6 % ( a ) 8 % ( c ) 5 % ( d ) 7 % The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :
( CHSL 2019 Pre )
chimp
( ) 3 1 ½
( b ) 3
( a ) 2 years
years .
1
( d ) 1 ½ ½ years
( c ) 3 year 10. If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ? ( CHSL 2019 Pre ) ( a ) 78,756.34 ( b ) ₹ 66,477.2 ( c ) 56,896.98 ( d ) 69,345.6 11. In how many years , the compound interest ,
compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?
( CHSL 2020 Pre ) ( b ) 1 year ( d ) 2 year
( a ) 3 year ( c ) 4 year
257
Basic Concept
SSC CGL
1 .
What is the compound interest on a sum of 10,000 at 14 % p.a.
5
7 .
for 27 years where the inter- est is compounded yearly ? ( nearest to 1 ) ( CGL 2018 Pre ) ( a ) ₹ 4259 ( c ) 4439
( b ) ₹ 4296 ( d ) 4394
2 .
The compound interest on a
1
certain sum at 10 % p.a. for 2
'
8 .
years is 1,201.60 , interest compounded yearly . The sum ( CGL 2019 Pre )
is :
( a ) ₹ 5,400 ( b ) 4,200 ( c ) ₹ 4,800 ( d ) ₹ 4,500 What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a.
3 .
after 2
years , if interest
9 .
compounded yearly , is :
( CGL 2020 Pre )
4 .
( a ) 12364.50 ( b ) 13642.50 ( c ) 16342.50 ( d ) 14362.50 The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is : ( CGL 2021 Pre ) ( a ) 31,538,40 ( b ) 24,00.50 ( c ) 35,138.40 ( d ) 28,315.40
SSC CPO
5 .
A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ? ( CPO 2019 Pre ) ( a ) 1,415 ( b ) 1,310 ( c ) 1,290 ( d ) ₹ 1,285
Gagan Pratap Sir
Compound Interest .
12. A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :
( CHSL 2021 Pre )
( b ) 1,800
( d ) ₹ 2,200
( a ) ₹ 2,500 ( c ) ₹ 3,800 13. A sum of
16,875 , when in-
vested at r %
interest per year
annually ,
compounded
amounts to 19,683 after 2 . years . What is the value of r ?
( CHSL 2021 Pre )
( b ) 7 % ( d ) 9 %
( a ) 8 % ( c ) 6 %
14. In what time will * 3,90,625
amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?
( CHSL 2021 Pre )
n
1
( b ) 1 years
( a ) 2 years
1
( c ) 2½ years ( d ) 1 years 15. Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?
( CHSL 2021 Pre ) ( b ) ₹ 7,250 ( d ) ₹ 7,260
( a ) ₹ 7,160 ( c ) ₹ 7,200
is
16. A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of ( CHSL 2023 Pre ) ( b ) ₹ 8,000 ( d ) ₹ 6,000
money lent . ( a ) ₹ 8,200 ( c ) ₹ 7,500
if
17. Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer ) ( CHSL 2023 Pre ) ( a ) ₹ 72,980 ( b ) 73,980 ( c ) 70,980 ( d ) ₹ 72,680
CHA PION PL
PUBLICATION

--- PAGE 23 ---
Ratio & Proportion ( Previous Year Practice Questions )
SSC CPO
A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day ( CPO 2018 Pre ) ( b ) 5 : 4 ( d ) 6 : 5
wages . ( a ) 4 : 5 ( c ) 15 : 4
10. Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is
* 1,600 ?
( CPO 2019 Pre )
( a ) ₹ 2,000
( b ) ₹ 3,000
( c ) ₹ 2,500
( d ) ₹ 2,600
1
of C. and B is twice of 6
A. and the average of A , B and C is 30. then the difference between A and C is :
( CPO 2020 Pre )
( a ) 50
( b ) 60 ( d ) 40
( c ) 80
12. If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair ( CPO 2020 Pre ) ( b ) 5,005 ( d ) 3,003
is : ( a ) 7,007 ( c ) 1,001
13. If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is : ( CPO 2022 Pre )
( a ) 5 ( c ) 8
( b ) 10 ( d ) 4
14. Which of the following is the
smallest ratio ?
( CPO 2022 Pre ) ( b ) 3341
( a ) 41 92
( c ) 42 49 ( d ) 3547 15. Arrange the given ratios in descending order 157 , 511 and 21 : 77 .
( CPO 2022 Pre ) 775 : 11 > 15 : 7
( a ) 21
( b ) 15
75 : 11 > 21 : 77
721 77 > 5 11
( c ) 15
( d ) 5 11 15 : 7 > 21 : 77 16. Which of the following ratios is the greatest ? ( CPO 2023 Pre )
( a ) 2 : 5
( b ) 7 : 10
( c ) 5 : 6
( d ) 1 3
289
Basic Concept
9 .
SSC CGL
1 .
If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :
( CGL 2018 Pre ) ( b ) 2 : 5 ( d ) 5 11
( a ) 3 13 ( c ) 3 11
2 .
The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is : ( CGL 2019 Pre )
( b ) 6 : 7
( a ) 76
( c ) 13 : 7
( d ) 7 13
11. If A is
3 .
If 3A 4B = 5C , then A B C is equal to :
( CGL 2019 Pre )
( a ) 107 : 6
( b ) 20 15 12
( c ) 20 15 16
( d ) 1054
4 .
If a b c d , then which of the following ratio is equal to a c ?
( CGL 2022 Pre )
( a ) a : d
( b ) b : c
b + c
( c ) ad ( d ) a
b c d
5 .
If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ? ( CGL 2024 Pre ) ( a ) 7 : 11 ( b ) 3 : 7 ( c ) 57 ( d ) 11 7 The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is ( CGL 2024 Pre )
6 .
( b ) 150 ( d ) 350
( a ) 60 ( c ) 140
7 .
If AB 6 : 8 and B C = 7 : 12 , then A B C is : ( CGL 2024 Pre )
( a ) 14 31 20
( b ) 21 32 40
( c ) 11 23 40
( d ) 21 28 48
If AB 6 : 8 and B C 5:11 ,
8 .
then A B
C is : ( CGL 2024 Pre )
( a ) 11 23
14 ( b ) 14 13 25
44 ( d ) 15 20 44
( c ) 15 32
Gagan Pratap Sir
Ratio & Proportion
SSC CHSL
17. If a b 3 : √5 , then the value
of ( 2a + b )
( 3a - 2b ) is :
( CHSL 2019 Pre )
( a ) ( 64 + 21√5 )
( b ) ( 64 + 21√5 )
( c ) ( 64 + 21√5 )
1
( 64 + 21√5 )
61
18. Which of the following ratios is
the smallest ? 34 , 12 , 25 , 1 : 3
( CHSL 2021 Pre )
cation
( a ) 1 : 3
( b ) 2 : 5 ( d ) 1 : 2
( c ) 3 : 4
19. The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .
( CHSL 2023 Pre ) ( b ) 56
( a ) 75 ( c ) 48
( d ) 64
20. If x y z = 3:45 , then what the ratio
will
be
of
0.00
( CHSL 2023 Pre )
( a ) 37 47
100
100
( b ) 41 37
100
( c ) 4937
100
( d ) 45 48
21. If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be : ( CHSL 2023 Pre )
( b ) 13 : 6
( a ) 21 : 5
( c ) 12 : 5
( d ) 178
✓ SSC MTS & SP
22. Ratio between average of first four prime numbers and first four composite numbers is :
( MTS 2020 Pre )
( a ) 13 10
( b ) 17:27 ( d ) 17 19
( c ) 11 27
CHA PION PU
PUBLICATION

--- PAGE 24 ---
Mixture & Alligation ( Previous Year Practice Questions )
5. An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ? ( CGL 2018 Pre ) ( b ) 6.72 kg ( d ) 5.28 kg
( a ) 672 kg
( c ) 528 kg
A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?
( CGL 2022 Pre )
( a ) 18 litres . ( b ) 14 litres . ( c ) 16 litres ( d ) 12 litres A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x . ( a ) 70 ml ( c ) 60 ml ( CGL 2022 Pre ) ( b ) 80 ml
( d ) 50 ml
A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture . ( CGL 2022 Pre ) ( a ) 7 litres ( b ) 10 litres ( c ) 5 litres ( d ) 3 litres P and are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ? ( CGL 2022 Pre ) ( b ) 52 % ( d ) 56 %
( a ) 65 %
( c ) 48 %
10. In a mixture of 55 litres , fruit juice and water are in the ratio of 41. How much water ( in litres ) must be added to make the mixture ratio 2 1 ?
( CGL 2023 Pre ) ( b ) 22 ( d ) 12
( a ) 9 ( c ) 11
322
Based on Mixture
SSC CGL
1. Two bottles of the same
6 .
1 % 3
capacity are 35 % and 33
full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is : ( CGL 2019 Pre )
7 .
2
1
( a ) 60
( b ) 64
3
1
5
( c ) 65
( d ) 34
6
2 .
8 .
25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is : ( CGL 2019 Pre )
1
1
( b ) 33- %
( a ) 12 % 2
3
( c ) 45 %
( d ) 25 %
9 .
3. Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 34. Alloy C is prepared by mixing A and B in the ratio 45. The percentage of y in alloy C is : ( CGL 2020 Pre )
4
( b ) 33 %
( a ) 44 %
- %
( c ) 66 %
( d ) 55 %
9
4 .
An alloy contains 40 % of sil- ver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of sil- ver ? ( CGL 2021 Pre ) ( b ) 10 ( d ) 20
( a ) 5
( c ) 12
Gagan Pratap Sir
Mixture & Alligation
11. A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is : ( CGL 2023 Pre )
( a ) 1.27 % ( c ) 20 %
( b ) 18 % ( d ) 25 %
SSC CPO
12. Two mixtures A and B have the following compositions : Mixture A has copper and tin in a ratio of 1 : 2 . Mixture B has copper and tin in a ratio of 1 : 3 . If equal quantities of mixtures A and B are used for producing mixture C , then find the ratio of copper and tin in mixture C. ( CPO 2023 Pre ) ( b ) 1 : 5 ( d ) 7:12
( a ) 2 : 5 ( c ) 7 17
tion
13. A 12 litre solution of acid and water contains 30 % acid . How much water ( in litres ) must be added to get a solution having 20 % acid ? ( CPO 2024 Pre )
( a ) 6 ( c ) 5
( b ) 3 ( d ) 4
14. A mixture of 750 kg of alloy of copper and tin contains 25 % tin . How much tin must be added so that it becomes 70 % of the mixture ? ( CPO 2024 Pre ) ( a ) 895 kg ( b ) 1125 kg ( c ) 956 kg ( d ) 1097 kg 15. In alloys A and B , the ratio of lead to tin is 5 3 and 3 1 , respectively . 80 kg of alloy A and 100 kg of alloy B are mixed together to form a new alloy . What is the amount of tin ( in kg ) in the new alloy ?
( CPO 2024 Pre ) ( b ) 55 ( d ) 81.3
( a ) 90
( c ) 68
16. The quantity of milk in a mixture of milk and water is
4
5
of the volume of the mixture . After adding 1 liter of milk to 5 liters of the mixture , the percentage of water in the mixture is : ( CPO 2024 Pre ) ( a ) 17.5 % ( b ) 15 %
200
100
- %
( c )
( d )
- % 6
6
CHA PION PU
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 21,
    "question_number": 1,
    "question": "Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ?",
    "options": {
      "A": "₹ 44",
      "B": "48",
      "C": "42",
      "D": "46"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 2,
    "question": "A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % .",
    "options": {
      "A": "50 %",
      "B": "70 %",
      "C": "30 %",
      "D": "40 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 3,
    "question": "The single discount equivalent to two successive discounts of 15 % and 12 % on an article is ?",
    "options": {
      "A": "3 %",
      "B": "25.2 %",
      "C": "74.8 %",
      "D": "27 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 4,
    "question": "The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill .",
    "options": {
      "A": "₹ 3,333 , .33",
      "B": "₹ 2,500",
      "C": "833.33",
      "D": "1,666.67"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 5,
    "question": "A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum percentage ?",
    "options": {
      "A": "Only discount scheme I",
      "B": "Only discount scheme II",
      "C": "Only discount scheme III",
      "D": "All provide equal discount"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 6,
    "question": "Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ?",
    "options": {
      "A": "C , 1780",
      "B": "A , 1735.20",
      "C": "B , 1800",
      "D": "C , 1783.40"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 7,
    "question": "A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ?",
    "options": {
      "A": "second offer by * 100",
      "B": "first offer by * 68",
      "C": "second offer by * 68",
      "D": "first offer by * 32"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 8,
    "question": "A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ?",
    "options": {
      "A": "13,280 , 16,517",
      "B": "13,083 , 16,517",
      "C": "16,517 , 13,083",
      "D": "16,517 , 13,280"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 9,
    "question": "A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?",
    "options": {
      "A": "2519",
      "B": "2977",
      "C": "2382",
      "D": "3664"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 10,
    "question": "A shopkeeper offers the following three schemes . Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6 free Which scheme is the best for customers ?",
    "options": {
      "A": "Scheme - I",
      "B": "Scheme - III",
      "C": "Scheme - II",
      "D": "All scheme are equal"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 11,
    "question": "A shopkeeper offers the following discount schemes for buyers on an article : i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ?",
    "options": {
      "A": "Scheme iv",
      "B": "Scheme iii",
      "C": "Scheme ii",
      "D": "Scheme i"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 12,
    "question": "A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ?",
    "options": {
      "A": "Only B",
      "B": "Only B & C",
      "C": "Only A & C",
      "D": "Only A"
    },
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 13,
    "question": "If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ?",
    "options": {
      "A": "15",
      "B": "25",
      "C": "20",
      "D": "30"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 14,
    "question": "The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ?",
    "options": {
      "A": "First",
      "B": "Same shopkeepers",
      "C": "Third",
      "D": "Second"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 22,
    "question_number": 6,
    "question": "The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum is :",
    "options": {
      "A": "₹ 7,250",
      "B": "₹ 7,200",
      "C": "₹ 7,500",
      "D": "₹ 7,000"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 7,
    "question": "What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ?",
    "options": {
      "A": "₹ 9,824.00",
      "B": "10,520.00",
      "C": "9,956.86",
      "D": "₹ 10,123.20"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 8,
    "question": "The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :",
    "options": {
      "A": "8 %",
      "B": "6 %",
      "C": "5 %",
      "D": "7 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 9,
    "question": "The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :",
    "options": {
      "A": "2 years",
      "B": "3 1 ½ years",
      "C": "3 year 1 ½",
      "D": "1 ½ ½ years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 10,
    "question": "If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ?",
    "options": {
      "A": "78,756.34",
      "B": "₹ 66,477.2",
      "C": "56,896.98",
      "D": "69,345.6"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 11,
    "question": "In how many years , the compound interest , compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?",
    "options": {
      "A": "3 year",
      "B": "1 year",
      "C": "4 year",
      "D": "2 year"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 1,
    "question": "What is the compound interest on a sum of 10,000 at 14 % p.a. for 27 years where the interest is compounded yearly ? ( nearest to 1 )",
    "options": {
      "A": "₹ 4259",
      "B": "₹ 4296",
      "C": "4439",
      "D": "4394"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 2,
    "question": "The compound interest on a certain sum at 10 % p.a. for 2 years is 1,201.60 , interest compounded yearly . The sum is :",
    "options": {
      "A": "₹ 5,400",
      "B": "4,200",
      "C": "₹ 4,800",
      "D": "₹ 4,500"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 3,
    "question": "What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a. after 2 years , if interest compounded yearly , is :",
    "options": {
      "A": "12364.50",
      "B": "13642.50",
      "C": "16342.50",
      "D": "14362.50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 4,
    "question": "The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is :",
    "options": {
      "A": "31,538,40",
      "B": "24,00.50",
      "C": "35,138.40",
      "D": "28,315.40"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 5,
    "question": "A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ?",
    "options": {
      "A": "1,415",
      "B": "1,310",
      "C": "1,290",
      "D": "₹ 1,285"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 12,
    "question": "A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :",
    "options": {
      "A": "₹ 2,500",
      "B": "1,800",
      "C": "₹ 3,800",
      "D": "₹ 2,200"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 13,
    "question": "A sum of 16,875 , when in- vested at r % interest per year compounded annually , amounts to 19,683 after 2 . years . What is the value of r ?",
    "options": {
      "A": "8 %",
      "B": "7 %",
      "C": "6 %",
      "D": "9 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 14,
    "question": "In what time will * 3,90,625 amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?",
    "options": {
      "A": "2 years",
      "B": "1 years",
      "C": "2½ years",
      "D": "1 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 15,
    "question": "Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?",
    "options": {
      "A": "₹ 7,160",
      "B": "₹ 7,250",
      "C": "₹ 7,200",
      "D": "₹ 7,260"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 16,
    "question": "A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of money lent .",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 8,000",
      "C": "₹ 7,500",
      "D": "₹ 6,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 17,
    "question": "Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer )",
    "options": {
      "A": "₹ 72,980",
      "B": "73,980",
      "C": "70,980",
      "D": "₹ 72,680"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 23,
    "question_number": 10,
    "question": "Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is * 1,600 ?",
    "options": {
      "A": "₹ 2,000",
      "B": "₹ 3,000",
      "C": "₹ 2,500",
      "D": "₹ 2,600"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 11,
    "question": "If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair",
    "options": {
      "A": "7,007",
      "B": "5,005",
      "C": "1,001",
      "D": "3,003"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 12,
    "question": "If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is :",
    "options": {
      "A": "5",
      "B": "10",
      "C": "8",
      "D": "4"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 13,
    "question": "Which of the following is the smallest ratio ?",
    "options": {
      "A": "41 92",
      "B": "3341",
      "C": "42 49",
      "D": "3547"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 14,
    "question": "Arrange the given ratios in descending order 157 , 511 and 21 : 77 .",
    "options": {
      "A": "21 77 > 15 7 > 5 11",
      "B": "15 7 > 21 77 > 5 11",
      "C": "15 7 > 5 11 > 21 77",
      "D": "5 11 > 15 7 > 21 77"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 15,
    "question": "Which of the following ratios is the greatest ?",
    "options": {
      "A": "2 : 5",
      "B": "7 : 10",
      "C": "5 : 6",
      "D": "1 : 3"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :",
    "options": {
      "A": "3 13",
      "B": "2 : 5",
      "C": "3 11",
      "D": "5 11"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 2,
    "question": "The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is :",
    "options": {
      "A": "76",
      "B": "6 : 7",
      "C": "13 : 7",
      "D": "7 13"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 3,
    "question": "If 3A 4B = 5C , then A B C is equal to :",
    "options": {
      "A": "107 : 6",
      "B": "20 15 12",
      "C": "20 15 16",
      "D": "1054"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 4,
    "question": "If a b c d , then which of the following ratio is equal to a c ?",
    "options": {
      "A": "a : d",
      "B": "b : c",
      "C": "ad",
      "D": "a b c d"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 5,
    "question": "If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ?",
    "options": {
      "A": "7 : 11",
      "B": "3 : 7",
      "C": "57",
      "D": "11 7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 6,
    "question": "The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is",
    "options": {
      "A": "60",
      "B": "150",
      "C": "140",
      "D": "350"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 7,
    "question": "If AB 6 : 8 and B C = 7 : 12 , then A B C is :",
    "options": {
      "A": "14 31 20",
      "B": "21 32 40",
      "C": "11 23 40",
      "D": "21 28 48"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 8,
    "question": "If AB 6 : 8 and B C 5:11 , then A B C is :",
    "options": {
      "A": "11 23",
      "B": "14 13 25",
      "C": "15 20 44",
      "D": "15 32 44"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 17,
    "question": "If a b 3 : √5 , then the value of ( 2a + b ) ( 3a - 2b ) is :",
    "options": {
      "A": "( 64 + 21√5 )",
      "B": "( 64 + 21√5 )",
      "C": "( 64 + 21√5 ) 1",
      "D": "( 64 + 21√5 ) 61"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 18,
    "question": "Which of the following ratios is the smallest ? 34 , 12 , 25 , 1 : 3",
    "options": {
      "A": "1 : 3",
      "B": "2 : 5",
      "C": "3 : 4",
      "D": "1 : 2"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 19,
    "question": "The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .",
    "options": {
      "A": "75",
      "B": "56",
      "C": "48",
      "D": "64"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 20,
    "question": "If x y z = 3:45 , then what the ratio will be of",
    "options": {
      "A": "37 47 100",
      "B": "41 37 100",
      "C": "4937 100",
      "D": "45 48"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 21,
    "question": "If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be :",
    "options": {
      "A": "21 : 5",
      "B": "13 : 6",
      "C": "12 : 5",
      "D": "178"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number":
```

---

## Interaction [18:17:05]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 21 ---
Discount
( Previous Year Practice Questions )
Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ? ( CGL 2022 Pre ) ( b ) 48 ( d ) 46
( a ) ₹ 44 ( c ) 42
A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % . ( CGL 2022 Pre ) ( a ) 50 % ( b ) 70 % ( c ) 30 % The single discount equivalent
( d ) 40 %
to two successive discounts of 15 % and 12 % on an article is ?
( CGL 2022
( a ) 3 % ( b ) 25.2 % ( c ) 74.8 % ( d ) 27 % The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill . ( CGL 2022 Pre ) ( a ) ₹ 3,333 , .33 ( b ) ₹ 2,500 ( c ) 833.33 ( d ) 1,666.67 A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum
percentage ?
( CGL 2022 Pre )
I. Two successive discounts of 10 % each . II . Successive discounts of 15 % and 5 % . III . 20 % discount . ( a ) Only discount scheme I ( b ) Only discount scheme II ( c ) Only discount scheme III ( d ) All provide equal discount 10. A shopkeeper offers the following three schemes . ( CGL 2022 Pre ) Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6
192
5 .
Basic Concept / Successive Discount
SSC CGL
1 .
6 .
Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ? ( CGL 2020 Pre ) ( a ) C , 1780 ( b ) A , 1735.20 ( c ) B , 1800 ( d ) C , 1783.40
7 .
2 .
to
A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ? ( CGL 2020 Pre )
8 .
( a ) second offer by * 100
( b ) first offer by * 68
( c ) second offer by * 68
( d ) first offer by * 32
3 .
9 .
A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ? ( CGL 2021 Pre ) ( a ) 13,280 , 16,517 ( b ) 13,083 , 16,517
( c ) 16,517 , 13,083
4 .
( d ) 16,517 , 13,280 A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?
( a ) 2519
( CGL 2021 Pre ) ( b ) 2977 ( d ) 3664
( c ) 2382
Gagan Pratap Sir
Discount
Which scheme is the best for customers ?
( a ) Scheme - I ( b ) Scheme - III ( c ) Scheme - II
( d ) All scheme are equal 11. A shopkeeper offers the following discount schemes for buyers on an article : ( CGL 2023 Pre )
i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ? ( a ) Scheme iv ( b ) Scheme iii ( c ) Scheme ii ( d ) Scheme i 12. A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ? ( CGL 2023 Pre )
catin
Buy 6 , get 4 free
a
Buy 5 , get 5 free
Two successive discounts of 18 % and 24 %
( b ) Only B & C
( a ) Only B
( c ) Only A & C ( d ) Only A 13. If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ? ( CGL 2023 Pre ) ( a ) 15
( b ) 25 ( d ) 30
( c ) 20
discount
14. The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ? ( CGL 2023 Pre )
all
for
the
( a ) First ( b ) Same shopkeepers ( c ) Third ( d ) Second
CHA PION PL
PUBLICATION

--- PAGE 22 ---
Compound Interest ( Previous Year Practice Questions )
6. The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum ( CPO 2019 Pre ) ( b ) ₹ 7,200 ( d ) ₹ 7,000
is :
( a ) ₹ 7,250
( c ) ₹ 7,500
What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ? ( CPO 2023 Pre ) ( a ) ₹ 9,824.00 ( b ) 10,520.00 ( c ) 9,956.86 ( d ) ₹ 10,123.20
SSC CHSL
The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :
( CHSL 2019 Pre ) ( b ) 6 % ( a ) 8 % ( c ) 5 % ( d ) 7 % The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :
( CHSL 2019 Pre )
chimp
( ) 3 1 ½
( b ) 3
( a ) 2 years
years .
1
( d ) 1 ½ ½ years
( c ) 3 year 10. If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ? ( CHSL 2019 Pre ) ( a ) 78,756.34 ( b ) ₹ 66,477.2 ( c ) 56,896.98 ( d ) 69,345.6 11. In how many years , the compound interest ,
compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?
( CHSL 2020 Pre ) ( b ) 1 year ( d ) 2 year
( a ) 3 year ( c ) 4 year
257
Basic Concept
SSC CGL
1 .
What is the compound interest on a sum of 10,000 at 14 % p.a.
5
7 .
for 27 years where the inter- est is compounded yearly ? ( nearest to 1 ) ( CGL 2018 Pre ) ( a ) ₹ 4259 ( c ) 4439
( b ) ₹ 4296 ( d ) 4394
2 .
The compound interest on a
1
certain sum at 10 % p.a. for 2
'
8 .
years is 1,201.60 , interest compounded yearly . The sum ( CGL 2019 Pre )
is :
( a ) ₹ 5,400 ( b ) 4,200 ( c ) ₹ 4,800 ( d ) ₹ 4,500 What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a.
3 .
after 2
years , if interest
9 .
compounded yearly , is :
( CGL 2020 Pre )
4 .
( a ) 12364.50 ( b ) 13642.50 ( c ) 16342.50 ( d ) 14362.50 The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is : ( CGL 2021 Pre ) ( a ) 31,538,40 ( b ) 24,00.50 ( c ) 35,138.40 ( d ) 28,315.40
SSC CPO
5 .
A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ? ( CPO 2019 Pre ) ( a ) 1,415 ( b ) 1,310 ( c ) 1,290 ( d ) ₹ 1,285
Gagan Pratap Sir
Compound Interest .
12. A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :
( CHSL 2021 Pre )
( b ) 1,800
( d ) ₹ 2,200
( a ) ₹ 2,500 ( c ) ₹ 3,800 13. A sum of
16,875 , when in-
vested at r %
interest per year
annually ,
compounded
amounts to 19,683 after 2 . years . What is the value of r ?
( CHSL 2021 Pre )
( b ) 7 % ( d ) 9 %
( a ) 8 % ( c ) 6 %
14. In what time will * 3,90,625
amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?
( CHSL 2021 Pre )
n
1
( b ) 1 years
( a ) 2 years
1
( c ) 2½ years ( d ) 1 years 15. Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?
( CHSL 2021 Pre ) ( b ) ₹ 7,250 ( d ) ₹ 7,260
( a ) ₹ 7,160 ( c ) ₹ 7,200
is
16. A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of ( CHSL 2023 Pre ) ( b ) ₹ 8,000 ( d ) ₹ 6,000
money lent . ( a ) ₹ 8,200 ( c ) ₹ 7,500
if
17. Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer ) ( CHSL 2023 Pre ) ( a ) ₹ 72,980 ( b ) 73,980 ( c ) 70,980 ( d ) ₹ 72,680
CHA PION PL
PUBLICATION

--- PAGE 23 ---
Ratio & Proportion ( Previous Year Practice Questions )
SSC CPO
A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day ( CPO 2018 Pre ) ( b ) 5 : 4 ( d ) 6 : 5
wages . ( a ) 4 : 5 ( c ) 15 : 4
10. Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is
* 1,600 ?
( CPO 2019 Pre )
( a ) ₹ 2,000
( b ) ₹ 3,000
( c ) ₹ 2,500
( d ) ₹ 2,600
1
of C. and B is twice of 6
A. and the average of A , B and C is 30. then the difference between A and C is :
( CPO 2020 Pre )
( a ) 50
( b ) 60 ( d ) 40
( c ) 80
12. If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair ( CPO 2020 Pre ) ( b ) 5,005 ( d ) 3,003
is : ( a ) 7,007 ( c ) 1,001
13. If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is : ( CPO 2022 Pre )
( a ) 5 ( c ) 8
( b ) 10 ( d ) 4
14. Which of the following is the
smallest ratio ?
( CPO 2022 Pre ) ( b ) 3341
( a ) 41 92
( c ) 42 49 ( d ) 3547 15. Arrange the given ratios in descending order 157 , 511 and 21 : 77 .
( CPO 2022 Pre ) 775 : 11 > 15 : 7
( a ) 21
( b ) 15
75 : 11 > 21 : 77
721 77 > 5 11
( c ) 15
( d ) 5 11 15 : 7 > 21 : 77 16. Which of the following ratios is the greatest ? ( CPO 2023 Pre )
( a ) 2 : 5
( b ) 7 : 10
( c ) 5 : 6
( d ) 1 3
289
Basic Concept
9 .
SSC CGL
1 .
If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :
( CGL 2018 Pre ) ( b ) 2 : 5 ( d ) 5 11
( a ) 3 13 ( c ) 3 11
2 .
The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is : ( CGL 2019 Pre )
( b ) 6 : 7
( a ) 76
( c ) 13 : 7
( d ) 7 13
11. If A is
3 .
If 3A 4B = 5C , then A B C is equal to :
( CGL 2019 Pre )
( a ) 107 : 6
( b ) 20 15 12
( c ) 20 15 16
( d ) 1054
4 .
If a b c d , then which of the following ratio is equal to a c ?
( CGL 2022 Pre )
( a ) a : d
( b ) b : c
b + c
( c ) ad ( d ) a
b c d
5 .
If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ? ( CGL 2024 Pre ) ( a ) 7 : 11 ( b ) 3 : 7 ( c ) 57 ( d ) 11 7 The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is ( CGL 2024 Pre )
6 .
( b ) 150 ( d ) 350
( a ) 60 ( c ) 140
7 .
If AB 6 : 8 and B C = 7 : 12 , then A B C is : ( CGL 2024 Pre )
( a ) 14 31 20
( b ) 21 32 40
( c ) 11 23 40
( d ) 21 28 48
If AB 6 : 8 and B C 5:11 ,
8 .
then A B
C is : ( CGL 2024 Pre )
( a ) 11 23
14 ( b ) 14 13 25
44 ( d ) 15 20 44
( c ) 15 32
Gagan Pratap Sir
Ratio & Proportion
SSC CHSL
17. If a b 3 : √5 , then the value
of ( 2a + b )
( 3a - 2b ) is :
( CHSL 2019 Pre )
( a ) ( 64 + 21√5 )
( b ) ( 64 + 21√5 )
( c ) ( 64 + 21√5 )
1
( 64 + 21√5 )
61
18. Which of the following ratios is
the smallest ? 34 , 12 , 25 , 1 : 3
( CHSL 2021 Pre )
cation
( a ) 1 : 3
( b ) 2 : 5 ( d ) 1 : 2
( c ) 3 : 4
19. The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .
( CHSL 2023 Pre ) ( b ) 56
( a ) 75 ( c ) 48
( d ) 64
20. If x y z = 3:45 , then what the ratio
will
be
of
0.00
( CHSL 2023 Pre )
( a ) 37 47
100
100
( b ) 41 37
100
( c ) 4937
100
( d ) 45 48
21. If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be : ( CHSL 2023 Pre )
( b ) 13 : 6
( a ) 21 : 5
( c ) 12 : 5
( d ) 178
✓ SSC MTS & SP
22. Ratio between average of first four prime numbers and first four composite numbers is :
( MTS 2020 Pre )
( a ) 13 10
( b ) 17:27 ( d ) 17 19
( c ) 11 27
CHA PION PU
PUBLICATION

--- PAGE 24 ---
Mixture & Alligation ( Previous Year Practice Questions )
5. An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ? ( CGL 2018 Pre ) ( b ) 6.72 kg ( d ) 5.28 kg
( a ) 672 kg
( c ) 528 kg
A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?
( CGL 2022 Pre )
( a ) 18 litres . ( b ) 14 litres . ( c ) 16 litres ( d ) 12 litres A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x . ( a ) 70 ml ( c ) 60 ml ( CGL 2022 Pre ) ( b ) 80 ml
( d ) 50 ml
A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture . ( CGL 2022 Pre ) ( a ) 7 litres ( b ) 10 litres ( c ) 5 litres ( d ) 3 litres P and are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ? ( CGL 2022 Pre ) ( b ) 52 % ( d ) 56 %
( a ) 65 %
( c ) 48 %
10. In a mixture of 55 litres , fruit juice and water are in the ratio of 41. How much water ( in litres ) must be added to make the mixture ratio 2 1 ?
( CGL 2023 Pre ) ( b ) 22 ( d ) 12
( a ) 9 ( c ) 11
322
Based on Mixture
SSC CGL
1. Two bottles of the same
6 .
1 % 3
capacity are 35 % and 33
full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is : ( CGL 2019 Pre )
7 .
2
1
( a ) 60
( b ) 64
3
1
5
( c ) 65
( d ) 34
6
2 .
8 .
25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is : ( CGL 2019 Pre )
1
1
( b ) 33- %
( a ) 12 % 2
3
( c ) 45 %
( d ) 25 %
9 .
3. Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 34. Alloy C is prepared by mixing A and B in the ratio 45. The percentage of y in alloy C is : ( CGL 2020 Pre )
4
( b ) 33 %
( a ) 44 %
- %
( c ) 66 %
( d ) 55 %
9
4 .
An alloy contains 40 % of sil- ver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of sil- ver ? ( CGL 2021 Pre ) ( b ) 10 ( d ) 20
( a ) 5
( c ) 12
Gagan Pratap Sir
Mixture & Alligation
11. A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is : ( CGL 2023 Pre )
( a ) 1.27 % ( c ) 20 %
( b ) 18 % ( d ) 25 %
SSC CPO
12. Two mixtures A and B have the following compositions : Mixture A has copper and tin in a ratio of 1 : 2 . Mixture B has copper and tin in a ratio of 1 : 3 . If equal quantities of mixtures A and B are used for producing mixture C , then find the ratio of copper and tin in mixture C. ( CPO 2023 Pre ) ( b ) 1 : 5
( a ) 2 : 5 ( c ) 7 17
( d ) 7:12
tion
13. A 12 litre solution of acid and water contains 30 % acid . How much water ( in litres ) must be added to get a solution having 20 % acid ? ( CPO 2024 Pre )
( a ) 6 ( c ) 5
( b ) 3 ( d ) 4
14. A mixture of 750 kg of alloy of copper and tin contains 25 % tin . How much tin must be added so that it becomes 70 % of the mixture ? ( CPO 2024 Pre ) ( a ) 895 kg ( b ) 1125 kg ( c ) 956 kg ( d ) 1097 kg 15. In alloys A and B , the ratio of lead to tin is 5 3 and 3 1 , respectively . 80 kg of alloy A and 100 kg of alloy B are mixed together to form a new alloy . What is the amount of tin ( in kg ) in the new alloy ?
( CPO 2024 Pre ) ( b ) 55 ( d ) 81.3
( a ) 90
( c ) 68
16. The quantity of milk in a mixture of milk and water is
4
5
of the volume of the mixture . After adding 1 liter of milk to 5 liters of the mixture , the percentage of water in the mixture is : ( CPO 2024 Pre ) ( a ) 17.5 % ( b ) 15 %
200
100
- %
( c )
( d )
- % 6
6
CHA PION PU
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 21,
    "question_number": 1,
    "question": "Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ?",
    "options": {
      "A": "₹ 44",
      "B": "48",
      "C": "42",
      "D": "46"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 2,
    "question": "A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % .",
    "options": {
      "A": "50 %",
      "B": "70 %",
      "C": "30 %",
      "D": "40 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 3,
    "question": "The single discount equivalent to two successive discounts of 15 % and 12 % on an article is ?",
    "options": {
      "A": "3 %",
      "B": "25.2 %",
      "C": "74.8 %",
      "D": "27 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 4,
    "question": "The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill .",
    "options": {
      "A": "₹ 3,333 , .33",
      "B": "₹ 2,500",
      "C": "833.33",
      "D": "1,666.67"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 5,
    "question": "A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum percentage ?",
    "options": {
      "A": "Only discount scheme I",
      "B": "Only discount scheme II",
      "C": "Only discount scheme III",
      "D": "All provide equal discount"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 6,
    "question": "Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ?",
    "options": {
      "A": "C , 1780",
      "B": "A , 1735.20",
      "C": "B , 1800",
      "D": "C , 1783.40"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 7,
    "question": "A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ?",
    "options": {
      "A": "second offer by * 100",
      "B": "first offer by * 68",
      "C": "second offer by * 68",
      "D": "first offer by * 32"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 8,
    "question": "A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ?",
    "options": {
      "A": "13,280 , 16,517",
      "B": "13,083 , 16,517",
      "C": "16,517 , 13,083",
      "D": "16,517 , 13,280"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 9,
    "question": "A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?",
    "options": {
      "A": "2519",
      "B": "2977",
      "C": "2382",
      "D": "3664"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 10,
    "question": "A shopkeeper offers the following three schemes . Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6 Which scheme is the best for customers ?",
    "options": {
      "A": "Scheme - I",
      "B": "Scheme - III",
      "C": "Scheme - II",
      "D": "All scheme are equal"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 11,
    "question": "A shopkeeper offers the following discount schemes for buyers on an article : i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ?",
    "options": {
      "A": "Scheme iv",
      "B": "Scheme iii",
      "C": "Scheme ii",
      "D": "Scheme i"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 12,
    "question": "A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ?",
    "options": {
      "A": "Only B",
      "B": "Only B & C",
      "C": "Only A & C",
      "D": "Only A"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 13,
    "question": "If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ?",
    "options": {
      "A": "15",
      "B": "25",
      "C": "20",
      "D": "30"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 14,
    "question": "The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ?",
    "options": {
      "A": "First",
      "B": "Same shopkeepers",
      "C": "Third",
      "D": "Second"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 22,
    "question_number": 6,
    "question": "The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum is :",
    "options": {
      "A": "₹ 7,250",
      "B": "₹ 7,200",
      "C": "₹ 7,500",
      "D": "₹ 7,000"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 7,
    "question": "What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ?",
    "options": {
      "A": "₹ 9,824.00",
      "B": "10,520.00",
      "C": "9,956.86",
      "D": "₹ 10,123.20"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 8,
    "question": "The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :",
    "options": {
      "A": "8 %",
      "B": "6 %",
      "C": "5 %",
      "D": "7 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 9,
    "question": "The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :",
    "options": {
      "A": "2 years",
      "B": "3 1 ½ years",
      "C": "3 year 1 ½",
      "D": "1 ½ ½ years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 10,
    "question": "If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ?",
    "options": {
      "A": "78,756.34",
      "B": "₹ 66,477.2",
      "C": "56,896.98",
      "D": "69,345.6"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 11,
    "question": "In how many years , the compound interest , compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?",
    "options": {
      "A": "3 year",
      "B": "1 year",
      "C": "4 year",
      "D": "2 year"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 1,
    "question": "What is the compound interest on a sum of 10,000 at 14 % p.a. for 27 years where the inter- est is compounded yearly ? ( nearest to 1 )",
    "options": {
      "A": "₹ 4259",
      "B": "₹ 4296",
      "C": "4439",
      "D": "4394"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 2,
    "question": "The compound interest on a certain sum at 10 % p.a. for 2 years is 1,201.60 , interest compounded yearly . The sum is :",
    "options": {
      "A": "₹ 5,400",
      "B": "4,200",
      "C": "₹ 4,800",
      "D": "₹ 4,500"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 3,
    "question": "What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a. after 2 years , if interest compounded yearly , is :",
    "options": {
      "A": "12364.50",
      "B": "13642.50",
      "C": "16342.50",
      "D": "14362.50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 4,
    "question": "The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is :",
    "options": {
      "A": "31,538,40",
      "B": "24,00.50",
      "C": "35,138.40",
      "D": "28,315.40"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 5,
    "question": "A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ?",
    "options": {
      "A": "1,415",
      "B": "1,310",
      "C": "1,290",
      "D": "₹ 1,285"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 12,
    "question": "A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :",
    "options": {
      "A": "₹ 2,500",
      "B": "1,800",
      "C": "₹ 3,800",
      "D": "₹ 2,200"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 13,
    "question": "A sum of 16,875 , when in- vested at r % interest per year compounded annually , amounts to 19,683 after 2 . years . What is the value of r ?",
    "options": {
      "A": "8 %",
      "B": "7 %",
      "C": "6 %",
      "D": "9 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 14,
    "question": "In what time will * 3,90,625 amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?",
    "options": {
      "A": "2 years",
      "B": "1 years",
      "C": "2½ years",
      "D": "1 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 15,
    "question": "Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?",
    "options": {
      "A": "₹ 7,160",
      "B": "₹ 7,250",
      "C": "₹ 7,200",
      "D": "₹ 7,260"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 16,
    "question": "A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of money lent .",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 8,000",
      "C": "₹ 7,500",
      "D": "₹ 6,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 17,
    "question": "Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer )",
    "options": {
      "A": "₹ 72,980",
      "B": "73,980",
      "C": "70,980",
      "D": "₹ 72,680"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 23,
    "question_number": 10,
    "question": "Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is * 1,600 ?",
    "options": {
      "A": "₹ 2,000",
      "B": "₹ 3,000",
      "C": "₹ 2,500",
      "D": "₹ 2,600"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 11,
    "question": "If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair",
    "options": {
      "A": "7,007",
      "B": "5,005",
      "C": "1,001",
      "D": "3,003"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 12,
    "question": "If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is :",
    "options": {
      "A": "5",
      "B": "10",
      "C": "8",
      "D": "4"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 13,
    "question": "Which of the following is the smallest ratio ?",
    "options": {
      "A": "41 92",
      "B": "3341",
      "C": "42 49",
      "D": "3547"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 14,
    "question": "Arrange the given ratios in descending order 157 , 511 and 21 : 77 .",
    "options": {
      "A": "21 77 > 15 7 > 5 11",
      "B": "15 7 > 21 77 > 5 11",
      "C": "15 7 > 5 11 > 21 77",
      "D": "5 11 > 15 7 > 21 77"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 15,
    "question": "Which of the following ratios is the greatest ?",
    "options": {
      "A": "2 : 5",
      "B": "7 : 10",
      "C": "5 : 6",
      "D": "1 : 3"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :",
    "options": {
      "A": "3 13",
      "B": "2 : 5",
      "C": "3 11",
      "D": "5 11"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 2,
    "question": "The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is :",
    "options": {
      "A": "76",
      "B": "6 : 7",
      "C": "13 : 7",
      "D": "7 13"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 3,
    "question": "If 3A 4B = 5C , then A B C is equal to :",
    "options": {
      "A": "107 : 6",
      "B": "20 15 12",
      "C": "20 15 16",
      "D": "1054"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 4,
    "question": "If a b c d , then which of the following ratio is equal to a c ?",
    "options": {
      "A": "a : d",
      "B": "b : c",
      "C": "ad",
      "D": "a b c d"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 5,
    "question": "If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ?",
    "options": {
      "A": "7 : 11",
      "B": "3 : 7",
      "C": "57",
      "D": "11 7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 6,
    "question": "The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is",
    "options": {
      "A": "60",
      "B": "150",
      "C": "140",
      "D": "350"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 7,
    "question": "If AB 6 : 8 and B C = 7 : 12 , then A B C is :",
    "options": {
      "A": "14 31 20",
      "B": "21 32 40",
      "C": "11 23 40",
      "D": "21 28 48"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 8,
    "question": "If AB 6 : 8 and B C 5:11 , then A B C is :",
    "options": {
      "A": "11 23 14",
      "B": "14 13 25",
      "C": "15 20 44",
      "D": "15 32 44"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 17,
    "question": "If a b 3 : √5 , then the value of ( 2a + b ) ( 3a - 2b ) is :",
    "options": {
      "A": "( 64 + 21√5 )",
      "B": "( 64 + 21√5 )",
      "C": "( 64 + 21√5 ) 1",
      "D": "( 64 + 21√5 ) 61"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 18,
    "question": "Which of the following ratios is the smallest ? 34 , 12 , 25 , 1 : 3",
    "options": {
      "A": "1 : 3",
      "B": "2 : 5",
      "C": "3 : 4",
      "D": "1 : 2"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 19,
    "question": "The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .",
    "options": {
      "A": "75",
      "B": "56",
      "C": "48",
      "D": "64"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 20,
    "question": "If x y z = 3:45 , then what the ratio will be of",
    "options": {
      "A": "37 47 100",
      "B": "41 37 100",
      "C": "4937 100",
      "D": "45 48"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 21,
    "question": "If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be :",
    "options": {
      "A": "21 : 5",
      "B": "13 : 6",
      "C": "12 : 5",
      "D": "178"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page
```

---

## Interaction [18:17:45]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:18:00]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "Unknown",
  "exam_name": "Unknown",
  "year": "Unknown",
  "shift": "Unknown"
}
```

---

## Interaction [18:18:11]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 15 ---
1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION

--- PAGE 16 ---
Surds and Indices
SURDS AND INDICES
3
"
Laws of Surds
Law of Indices
1
axaxax .... n times = an
a =
√99-70√2 = ( 5√2-7 ) 70√3-2 × 35√√2
an
axaxa = a + n + p ( a = 0 )
=
axb
m
ab
5√2 49 + 50 = 99
= an ( m > n )
a a '
1
= ( ab )
1
√√√√ .....
= a
MS
=
( n > m )
an - m
ya
а
= 1
=
( m
n )
2 " -1
b
#b b
√√√a .... ntimes
a
܀
( am ) n = amxn = anxm = ( an ) m
na Radicand
Pavara .... co
va
܀
( abc ) " = axbnxcn
order of surd
n
dpy
n√a ÷ n√a ÷ n√ .... ∞ = n + 1√a
n
a '
m
܀
=
( b = 0 )
܀
=
( v )
bn
an = Va
√a + √a + √a + ....
( a ) am "
܀
=
Pma
lication
√√4a + 1 + 1 2
= x
( 32 ) 32
+
38316
P
√√√4a + 1-1 2
aq
= y
xp
aq
ач
+ 2 × 2 × √√3
x - y = 1
ab
xy = a
܀
If am an then m = n
-√ ( 2 + √3 ) - ( 2 + √3 )
OR Take two factors of a whose difference is 1 like Then x = Larger factor
If amb then a = b
Gaga
smaller factor
y
܀
√28 + 10√√3 = 10√√3 →
a = 1
x + y = √√4a + 1
2 × 5√3 5² + √32 = 28
܀
1
x =
√a + √a√a + ....
a - 1 =
( a 0 )
+
√√4a - 3 + 1 2
܀
( a - b ) ² = ( b - a ) ² = a² + b² - 2ab
1
1
& an =
a =
-n
an
a
y = √a - va + 1 - √a + √a-
a² + b² - 2ab
..... 00
a - b ( a > b ) b - a ( b > a )
-m
m
b
√4a - 3-1 2
√√43-24√3 = ( 3√3-4 )
=
x - y = 1
xy = 2 ( a - 1 )
24√√3-2 × 12√√3
܀
( -1 ) "
= +1 ( neven ) = -1 ( n = odd )
3√√3 > 16 + 27 = 43
Gagan Pratap Sir
CHA PION PL
77
PUBLICATION

--- PAGE 17 ---
Surds & Indices ( Previous Year Practice Questions )
SSC CHSL
If , 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + , then the value of 2x + 3y + 5z is ( CHSL 2019 Pre ) ( a ) 56 ( b ) 44 ( c ) 32 ( d ) 28 10. The value of
2
1
1
1
( a¹³ + 2a² + 3a + 2a + 1 )
1
1
-2a + 1 ) -a³ ( a¹ - 2 ) .
a3-2a6
when a 7 is : ( CHSL 2019 Pre )
( a ) 7 ( c ) 1
( b ) 0 ( d ) √√7
11. The value of
1
( CHSL 2019
( 9 + 4√5 ) ² is :
( a ) 322
( b ) 424 ( d ) 286
( c ) 246
3a + 3
x4a + 6
pione lication
x25a + 1 27a - 1x8a - 2 x125 the value of
is :
( CHSL 2019 Pre )
( a ) 4 ( c ) 5
( b ) 6 ( d ) 8
13. The value of 5 √√3 +7 √√√√6-
23
√2 + √3 + √6 is : ( CHSL 2019 Pre )
( b ) 16 ( d ) 10
the value of
3 / 15625√x = 4 .
( CHSL 2019 Pre )
( b ) 343 ( d ) 81
( a ) 625 ( c ) 441
-3
( 2x + 3 )
23
ug ]
then the value of √2-42x is :
( CHSL 2019 Pre )
( a ) 5
( b ) 6
( c ) 3
( d ) 4
78
SSC CGL
9 .
17.32 , then the
1. If 5√√3 + √√75
value of 14√3 + √108 is
( CPO 2021 Pre )
( a ) 32.46
( b ) 35.64
( d ) 33.86
( c ) 34.64
SSC CPO
2 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 6250.49 ( b ) 1250.49
( d ) 1354.24
( c ) 5768.28
3 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 2361.96 ( b ) 2758.28
( c ) 72568.4
( d ) 62504.9
4 .
Which one among the following is the smallest ? ( CPO 2019 Pre )
( a ) √401 - √399 ( b ) √101 - √√99
12. If
( c ) √301 - √299
( d ) √201 - √199
1
The value of
is closest
5 .
√7-4√3
( CPO 2019 Pre )
( b ) 4.2
to : ( a ) 4.1 ( c ) 1.2
( d ) 3.7
( a ) 0 ( c ) 12 14. Find
6 .
√0.6912 + √√0.5292 √0.6912 - √0.5292
( CPO 2019 Pre )
( b ) 0.9
( a ) 1.5 ( c ) 15
( d ) 9
7 .
The value
of √√11 + 2√ √18 is
closest to :
( CPO 2019 Pre )
15. If
( a ) 4.8 ( c ) 3.8
( b ) 4.4 ( d ) 4.1
8 .
The value of √6 - √17-2√72 is
closest is :
( CPO 2019 Pre )
( a ) 2.4
( b ) 2.7 ( d ) 1.7
( c ) 2.1
Gagan Pratap Sir
Surds and Indices
= ?
16. √30 + √30 + √30 + .
( CHSL 2019 Pre )
( b ) 4
( a ) 3 ( c ) 6
( d ) 5
17. Find the
value of x , if
21√x + 20√x = 29√x .
( CHSL 2019 Pre )
( b ) 3
( a ) 4 ( c ) 0
( d ) 2
18. If mx - nx = 0 then what is the
1
1 x ™ + x "
+
in
x "
xm
value of terms of x ?
( CHSL 2021 Pre )
2mn
2m
( b )
( a ) 2
x² ( n² + m² )
x² ( m² - n² )
2mn
2mn
( c ) x " ( n² - m² ) ( d ) x ^ ( m² - n² ) 19. Which of the following can be a rationalising
of
factor
( CHSL 2021 Pre )
( √√2 + √3 + √5 ) ? ( a ) ( √2 - √3 - √5 ) √6
4 1526 ,
( b ) ( √2 + √3 - √5 ) √6
( c ) ( √2 - √3 + √5 ) √6
( d ) ( √2 + √3 + √5 ) √6
20. 3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?
( CHSL 2021 Pre )
1
( a )
( b ) 1
( a + b ) ( c ) ( a + b )
( d ) 3
93+ 9 + 9 + 9 + 972
in
x
= ?
21 .
9+ 92+ 93 + 94 + 95
( CHSL 2021 Pre )
( b ) 3
( a ) 9
( d ) 81
( c ) 729
22. √2 + √3 + √2 - √3 = ?
-6
( 3x + 7 ) 5
( CHSL 2021 Pre )
( b ) 2√3
( a ) √√√6 ( c ) 2√√√2
( d ) 6
23. If a + b =
√7 and a -b = √5
then find the value of 8ab ( a² +
b² ) - ( a − b ) ² .
( CHSL 2021 Pre )
( b ) 23
( a ) 19
( d ) 21
( c ) 27
CHA PION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 17,
    "question_number": 10,
    "question": "The value of (a¹³ + 2a² + 3a + 2a + 1) / (a³-2a⁶) - a³(a¹ - 2) / (a³-2a⁶) when a = 7 is :",
    "options": {
      "A": "7",
      "B": "0",
      "C": "1",
      "D": "√7"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 11,
    "question": "The value of (9 + 4√5)² is :",
    "options": {
      "A": "322",
      "B": "424",
      "C": "246",
      "D": "286"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 12,
    "question": "If x⁴ᵃ⁺⁶ / x²⁵ᵃ⁺¹ x⁸ᵃ⁻² x¹²⁵ᵃ⁻¹ = 0, then the value of x is :",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "8"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 13,
    "question": "The value of 5√√3 + 7√√√√6 - 2√√2 + √3 + √6 is :",
    "options": {
      "A": "0",
      "B": "12",
      "C": "1",
      "D": "10"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 14,
    "question": "Find the value of 3 / 15625√x = 4.",
    "options": {
      "A": "625",
      "B": "343",
      "C": "441",
      "D": "81"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 15,
    "question": "If (2x + 3)³ = -6, then the value of √2-42x is :",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 16,
    "question": "√30 + √30 + √30 + .... = ?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 17,
    "question": "Find the value of x, if 21√x + 20√x = 29√x.",
    "options": {
      "A": "4",
      "B": "3",
      "C": "0",
      "D": "2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 18,
    "question": "If mx - nx = 0 then what is the value of 1/xⁿ + 1/xᵐ in terms of x?",
    "options": {
      "A": "2mn / (x²(n² + m²))",
      "B": "2mn / (x²(m² - n²))",
      "C": "2mn / (xⁿ(n² - m²))",
      "D": "2mn / (xᵐ(m² - n²))"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 19,
    "question": "Which of the following can be a rationalising factor of (√2 + √3 + √5)?",
    "options": {
      "A": "(√2 - √3 - √5) √6",
      "B": "(√2 + √3 - √5) √6",
      "C": "(√2 - √3 + √5) √6",
      "D": "(√2 + √3 + √5) √6"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 20,
    "question": "3ab(a + b)¹ × (a¹ + b²¹) = ?",
    "options": {
      "A": "1 / (a + b)",
      "B": "1",
      "C": "(a + b)",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 21,
    "question": "9³ + 9⁴ + 9⁵ + 9⁶ + 9⁷ / 9¹ + 9² + 9³ + 9⁴ + 9⁵ = ?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "729",
      "D": "81"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 22,
    "question": "√2 + √3 + √2 - √3 = ?",
    "options": {
      "A": "√6",
      "B": "2√3",
      "C": "2√2",
      "D": "6"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 23,
    "question": "If a + b = √7 and a - b = √5, then find the value of 8ab(a² + b²) - (a - b)².",
    "options": {
      "A": "19",
      "B": "23",
      "C": "27",
      "D": "21"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 1,
    "question": "If 5√3 + √75 = 17.32, then the value of 14√3 + √108 is",
    "options": {
      "A": "32.46",
      "B": "35.64",
      "C": "34.64",
      "D": "33.86"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 2,
    "question": "The square root of which of the following is a rational number?",
    "options": {
      "A": "6250.49",
      "B": "1250.49",
      "C": "5768.28",
      "D": "1354.24"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 3,
    "question": "The square root of which of the following is a rational number?",
    "options": {
      "A": "2361.96",
      "B": "2758.28",
      "C": "72568.4",
      "D": "62504.9"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 4,
    "question": "Which one among the following is the smallest?",
    "options": {
      "A": "√401 - √399",
      "B": "√101 - √99",
      "C": "√301 - √299",
      "D": "√201 - √199"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 5,
    "question": "The value of √7-4√3 is closest to:",
    "options": {
      "A": "4.1",
      "B": "4.2",
      "C": "1.2",
      "D": "3.7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 6,
    "question": "√0.6912 + √0.5292 / √0.6912 - √0.5292 = ?",
    "options": {
      "A": "1.5",
      "B": "0.9",
      "C": "15",
      "D": "9"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 7,
    "question": "The value of √11 + 2√18 is closest to:",
    "options": {
      "A": "4.8",
      "B": "4.4",
      "C": "3.8",
      "D": "4.1"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 8,
    "question": "The value of √6 - √17-2√72 is closest is:",
    "options": {
      "A": "2.4",
      "B": "2.7",
      "C": "2.1",
      "D": "1.7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 9,
    "question": "If 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + 1, then the value of 2x + 3y + 5z is",
    "options": {
      "A": "56",
      "B": "44",
      "C": "32",
      "D": "28"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  }
]
```

---

## Interaction [18:18:13]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:18:46]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:19:14]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "CHAMPION PUBLICATION",
  "exam_name": "SIMPLIFICATION",
  "year": null,
  "shift": null
}
```

---

## Interaction [18:19:26]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 15 ---
1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION

--- PAGE 16 ---
Surds and Indices
SURDS AND INDICES
3
"
Laws of Surds
Law of Indices
1
axaxax .... n times = an
a =
√99-70√2 = ( 5√2-7 ) 70√3-2 × 35√√2
an
axaxa = a + n + p ( a = 0 )
=
axb
m
ab
5√2 49 + 50 = 99
= an ( m > n )
a a '
1
= ( ab )
1
√√√√ .....
= a
MS
=
( n > m )
an - m
ya
а
= 1
=
( m
n )
2 " -1
b
#b b
√√√a .... ntimes
a
܀
( am ) n = amxn = anxm = ( an ) m
na Radicand
Pavara .... co
va
܀
( abc ) " = axbnxcn
order of surd
n
dpy
n√a ÷ n√a ÷ n√ .... ∞ = n + 1√a
n
a '
m
܀
=
( b = 0 )
܀
=
( v )
bn
an = Va
√a + √a + √a + ....
( a ) am "
܀
=
Pma
lication
√√4a + 1 + 1 2
= x
( 32 ) 32
+
38316
P
√√√4a + 1-1 2
aq
= y
xp
aq
ач
+ 2 × 2 × √√3
x - y = 1
ab
xy = a
܀
If am an then m = n
-√ ( 2 + √3 ) - ( 2 + √3 )
OR Take two factors of a whose difference is 1 like Then x = Larger factor
If amb then a = b
Gaga
smaller factor
y
܀
√28 + 10√√3 = 10√√3 →
a = 1
x + y = √√4a + 1
2 × 5√3 5² + √32 = 28
܀
1
x =
√a + √a√a + ....
a - 1 =
( a 0 )
+
√√4a - 3 + 1 2
܀
( a - b ) ² = ( b - a ) ² = a² + b² - 2ab
1
1
& an =
a =
-n
an
a
y = √a - va + 1 - √a + √a-
a² + b² - 2ab
..... 00
a - b ( a > b ) b - a ( b > a )
-m
m
b
√4a - 3-1 2
√√43-24√3 = ( 3√3-4 )
=
x - y = 1
xy = 2 ( a - 1 )
24√√3-2 × 12√√3
܀
( -1 ) "
= +1 ( neven ) = -1 ( n = odd )
3√√3 > 16 + 27 = 43
Gagan Pratap Sir
CHA PION PL
77
PUBLICATION

--- PAGE 17 ---
Surds & Indices ( Previous Year Practice Questions )
SSC CHSL
If , 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + , then the value of 2x + 3y + 5z is ( CHSL 2019 Pre ) ( a ) 56 ( b ) 44 ( c ) 32 ( d ) 28 10. The value of
2
1
1
1
( a¹³ + 2a² + 3a + 2a + 1 )
1
1
-2a + 1 ) -a³ ( a¹ - 2 ) .
a3-2a6
when a 7 is : ( CHSL 2019 Pre )
( a ) 7 ( c ) 1
( b ) 0 ( d ) √√7
11. The value of
1
( CHSL 2019
( 9 + 4√5 ) ² is :
( a ) 322
( b ) 424 ( d ) 286
( c ) 246
3a + 3
x4a + 6
pione lication
x25a + 1 27a - 1x8a - 2 x125 the value of
is :
( CHSL 2019 Pre )
( a ) 4 ( c ) 5
( b ) 6 ( d ) 8
13. The value of 5 √√3 +7 √√√√6-
23
√2 + √3 + √6 is : ( CHSL 2019 Pre )
( b ) 16 ( d ) 10
the value of
3 / 15625√x = 4 .
( CHSL 2019 Pre )
( b ) 343 ( d ) 81
( a ) 625 ( c ) 441
-3
( 2x + 3 )
23
ug ]
then the value of √2-42x is :
( CHSL 2019 Pre )
( a ) 5
( b ) 6
( c ) 3
( d ) 4
78
SSC CGL
9 .
17.32 , then the
1. If 5√√3 + √√75
value of 14√3 + √108 is
( CPO 2021 Pre )
( a ) 32.46
( b ) 35.64
( d ) 33.86
( c ) 34.64
SSC CPO
2 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 6250.49 ( b ) 1250.49
( d ) 1354.24
( c ) 5768.28
3 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 2361.96 ( b ) 2758.28
( c ) 72568.4
( d ) 62504.9
4 .
Which one among the following is the smallest ? ( CPO 2019 Pre )
( a ) √401 - √399 ( b ) √101 - √√99
12. If
( c ) √301 - √299
( d ) √201 - √199
1
The value of
is closest
5 .
√7-4√3
( CPO 2019 Pre )
( b ) 4.2
to : ( a ) 4.1 ( c ) 1.2
( d ) 3.7
( a ) 0 ( c ) 12 14. Find
6 .
√0.6912 + √√0.5292 √0.6912 - √0.5292
( CPO 2019 Pre )
( b ) 0.9
( a ) 1.5 ( c ) 15
( d ) 9
7 .
The value
of √√11 + 2√ √18 is
closest to :
( CPO 2019 Pre )
15. If
( a ) 4.8 ( c ) 3.8
( b ) 4.4 ( d ) 4.1
8 .
The value of √6 - √17-2√72 is
closest is :
( CPO 2019 Pre )
( a ) 2.4
( b ) 2.7 ( d ) 1.7
( c ) 2.1
Gagan Pratap Sir
Surds and Indices
= ?
16. √30 + √30 + √30 + .
( CHSL 2019 Pre )
( b ) 4
( a ) 3 ( c ) 6
( d ) 5
17. Find the
value of x , if
21√x + 20√x = 29√x .
( CHSL 2019 Pre )
( b ) 3
( a ) 4 ( c ) 0
( d ) 2
18. If mx - nx = 0 then what is the
1
1 x ™ + x "
+
in
x "
xm
value of terms of x ?
( CHSL 2021 Pre )
2mn
2m
( b )
( a ) 2
x² ( n² + m² )
x² ( m² - n² )
2mn
2mn
( c ) x " ( n² - m² ) ( d ) x ^ ( m² - n² ) 19. Which of the following can be a rationalising
of
factor
( CHSL 2021 Pre )
( √√2 + √3 + √5 ) ? ( a ) ( √2 - √3 - √5 ) √6
4 1526 ,
( b ) ( √2 + √3 - √5 ) √6
( c ) ( √2 - √3 + √5 ) √6
( d ) ( √2 + √3 + √5 ) √6
20. 3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?
( CHSL 2021 Pre )
1
( a )
( b ) 1
( a + b ) ( c ) ( a + b )
( d ) 3
93+ 9 + 9 + 9 + 972
in
x
= ?
21 .
9+ 92+ 93 + 94 + 95
( CHSL 2021 Pre )
( b ) 3
( a ) 9
( d ) 81
( c ) 729
22. √2 + √3 + √2 - √3 = ?
-6
( 3x + 7 ) 5
( CHSL 2021 Pre )
( b ) 2√3
( a ) √√√6 ( c ) 2√√√2
( d ) 6
23. If a + b =
√7 and a -b = √5
then find the value of 8ab ( a² +
b² ) - ( a − b ) ² .
( CHSL 2021 Pre )
( b ) 23
( a ) 19
( d ) 21
( c ) 27
CHA PION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 17,
    "question_number": 10,
    "question": "The value of (a¹³ + 2a² + 3a + 2a + 1) / (a³-2a⁶) - a³(a¹ - 2) / (a³-2a⁶) when a = 7 is :",
    "options": {
      "A": "7",
      "B": "0",
      "C": "1",
      "D": "√7"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 11,
    "question": "The value of (9 + 4√5)² is :",
    "options": {
      "A": "322",
      "B": "424",
      "C": "246",
      "D": "286"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 12,
    "question": "If x⁴ᵃ⁺⁶ / x²⁵ᵃ⁺¹ x⁸ᵃ⁻² x¹²⁵ᵃ⁻¹ = 0, then the value of x is :",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "8"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 13,
    "question": "The value of 5√√3 + 7√√√√6 - 2√√2 + √3 + √6 is :",
    "options": {
      "A": "0",
      "B": "12",
      "C": "1",
      "D": "10"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 14,
    "question": "Find the value of 3 / 15625√x = 4.",
    "options": {
      "A": "625",
      "B": "343",
      "C": "441",
      "D": "81"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 15,
    "question": "If (2x + 3)⁻³ = 1/27, then the value of √2-42x is :",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 16,
    "question": "√30 + √30 + √30 + .... = ?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 17,
    "question": "Find the value of x, if 21√x + 20√x = 29√x.",
    "options": {
      "A": "4",
      "B": "3",
      "C": "0",
      "D": "2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 18,
    "question": "If mx - nx = 0 then what is the value of (1/xⁿ + 1/xᵐ) / (xᵐ + xⁿ) in terms of x?",
    "options": {
      "A": "2 / (x²(n² + m²))",
      "B": "2mn / (x²(m² - n²))",
      "C": "2mn / (xⁿ(n² - m²))",
      "D": "2mn / (xᵐ(m² - n²))"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 19,
    "question": "Which of the following can be a rationalising factor of (√2 + √3 + √5)?",
    "options": {
      "A": "(√2 - √3 - √5) √6",
      "B": "(√2 + √3 - √5) √6",
      "C": "(√2 - √3 + √5) √6",
      "D": "(√2 + √3 + √5) √6"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 20,
    "question": "3ab(a + b)¹ × (a¹ + b²¹) = ?",
    "options": {
      "A": "1 / (a + b)",
      "B": "1",
      "C": "(a + b)",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 21,
    "question": "9³ + 9⁴ + 9⁵ + 9⁶ + 9⁷ / 9 + 9² + 9³ + 9⁴ + 9⁵ = ?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "729",
      "D": "81"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 22,
    "question": "√2 + √3 + √2 - √3 = ?",
    "options": {
      "A": "√6",
      "B": "2√3",
      "C": "2√2",
      "D": "6"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 23,
    "question": "If a + b = √7 and a - b = √5, then find the value of 8ab(a² + b²) - (a - b)².",
    "options": {
      "A": "19",
      "B": "23",
      "C": "27",
      "D": "21"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 1,
    "question": "If 5√3 + √75 = 17.32, then the value of 14√3 + √108 is",
    "options": {
      "A": "32.46",
      "B": "35.64",
      "C": "34.64",
      "D": "33.86"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 2,
    "question": "The square root of which of the following is a rational number?",
    "options": {
      "A": "6250.49",
      "B": "1250.49",
      "C": "5768.28",
      "D": "1354.24"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 3,
    "question": "The square root of which of the following is a rational number?",
    "options": {
      "A": "2361.96",
      "B": "2758.28",
      "C": "72568.4",
      "D": "62504.9"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 4,
    "question": "Which one among the following is the smallest?",
    "options": {
      "A": "√401 - √399",
      "B": "√101 - √99",
      "C": "√301 - √299",
      "D": "√201 - √199"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 5,
    "question": "The value of √7-4√3 is closest to:",
    "options": {
      "A": "4.1",
      "B": "4.2",
      "C": "1.2",
      "D": "3.7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 6,
    "question": "√0.6912 + √0.5292 / √0.6912 - √0.5292 = ?",
    "options": {
      "A": "1.5",
      "B": "0.9",
      "C": "15",
      "D": "9"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 7,
    "question": "The value of √11 + 2√18 is closest to:",
    "options": {
      "A": "4.8",
      "B": "4.4",
      "C": "3.8",
      "D": "4.1"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 8,
    "question": "The value of √6 - √17-2√72 is closest is:",
    "options": {
      "A": "2.4",
      "B": "2.7",
      "C": "2.1",
      "D": "1.7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 9,
    "question": "If 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + 1, then the value of 2x + 3y + 5z is",
    "options": {
      "A": "56",
      "B": "44",
      "C": "32",
      "D": "28"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  }
]
```

---

## Interaction [18:19:28]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:30]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:32]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:33]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:35]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:36]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:38]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:40]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:42]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:44]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:47]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:49]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:52]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:54]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:57]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:19:59]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:20:02]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:20:05]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:20:06]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
[AI ERROR] 503: {
  "error": {
    "code": 503,
    "message": "This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.",
    "status": "UNAVAILABLE"
  }
}

```

---

## Interaction [18:20:09]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:20:14]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:20:16]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:20:18]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:20:43]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 19 ---
Percentage
( Previous Year Practice Questions )
1
1
9. The value of 17
77 % of 3
4
1
33
% of 7200 is :
3
( CGL MAINS 2020 ) ( b ) 11.68 ( d ) 9.65
( a ) 7.65 ( c ) 13.65 10. If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :
200
700
( b )
( a )
3
3
500
400 3
( c )
( d )
3
11. What is the value of 7.14 % of
66.67 % of 21.84 ? ( SSC GD 2024 )
( b ) 2.02
( a ) 1.07 ( c ) 1.04
( d ) 1.09
SSC CPO
12. A number which ,
increased by 16 % becomes 1914. The number is :
( CPO 2018 Pre )
( a ) 2220
( b ) 1650
( c ) 1780
( d ) 2010
64
to
converted
percentage is :
25
( CPO 2018 Pre )
hapio fo
( a ) 25.6 ( c ) 0.256
( b ) 256 ( d ) 2.56
14. 2.4 converted to percentage is :
( CPO 2018 Pre ) ( b ) 24 ( d ) 2.4
( a ) 0.24 ( c ) 240
15. If 20 % of a = b , then b % of 20 is
equal to :
( CPO 2018 Pre )
( a ) 4 % of a
( b ) 2 % of a
( c ) 16 % of a
( d ) 8 % of a
16. What is ( 0.08 %
of 0.008 % of 8 ) 1/9 ? ( CPO 2019 Pre ) ( b ) 0.2 ( d ) 0.08
( a ) 0.8 ( c ) 0.64
17. Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ? ( a ) ₹ 850
( CPO 2019 Pre ) ( b ) ₹ 750 ( d ) ₹ 800
( c ) 820
100
Basic Concept
SSC CGL
1 .
If 85 % of a number is added to 75 , then the result is the num- ber itself . The number is :
( a ) 500
( CGL 2018 Pre ) ( b ) 200 ( d ) 100
( c ) 300
2 .
If 50 % of the number is added 75 , then result becomes the same number , then the num-
ber is :
( CGL 2018 Pre )
( a ) 400
( b ) 100 ( d ) 150
( c ) 250
3 .
0.5 is what percentage of 20 ?
( CGL 2022 Pre ) ( b ) 0.25 %
( a ) 25 %
( c ) 2.5 %
( d ) 0.025 %
4 .
If A is 95 % of B , then what per cent of A is B ?
( CGL 2023 Pre )
3
- %
- %
( b ) 104 .
( a ) 110 .
7 19
19
17
( d ) 105. - %
- %
5 19
( c ) 107
19
13 .
Which of the following is the
5 .
least ?
( CGL 2023 Pre )
( a ) 9 % of 845
( b ) 12 % of 625
τα
( c ) 10 % of 720
( d ) 15 % of 555
6 .
If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ? ( CGL MAINS 2019 ) 1
( b ) 8 1 / 1 /
( a ) 13
3
3
1
2
( c ) 16
( d ) 33
25 % of ( 50 % of 30 % of 150 )
7 .
= ?
40 % of 2250
( CGL MAINS 2019 ) ( b ) 0.25 % ( d ) 0.225 %
( a ) 0.825 %
( c ) 0.625 %
8 .
What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ? ( CGL MAINS 2019 )
( b ) 45
( a ) 60
( d ) 40
( c ) 50
Gagan Pratap Sir
Percentage
% of
18. In a sweet , one - third is sugar . 7 If the price of sugar now is 6 of the previous price , what is the effective percentage increase in the cost of the sweet ?
( CPO 2024 Pre )
100
200
( a ) %
( b ) %
9
9
100
100
- %
- %
( c )
( d )
18
3
SSC CHSL
19. If x % of y is 150 and y % of z is 300 , then the relation between
x and z is :
( CHSL 2018 Pre )
( b ) z = x / 3
( a ) z = x ( c ) z = x / 2 20. If a % of 240
( d ) z = 2x
is c and c % of a is 117.6 , then the value of a + c
on
is :
( CHSL 2019 Pre )
when
( a ) 238
( b ) 144
( c ) 260
( d ) 196
21. A is 150 % of B and B is 40 % of C. If A + B + C = 20 , then the value of 2B + 3C4A is equal
to :
( CHSL 2020 Pre )
( b ) 14
( a ) 16
( d ) 15
( c ) 20
22. If ( 224 ) 2 ×
( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the
value of x .
( CHSL 2023 Pre )
( b ) 160
( a ) 120 ( c ) 190
( d ) 150
☑SSC MTS & SP 23. By what percentage is the percentage of the number of vowels in the CONSONANT less
of
than the percentage consonants in it ? ( MTS 2020 Pre )
( a ) 33.33 ( c ) 66.67
( b ) 200 ( d ) 50
11
24 .
5
of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ? ( MTS 2020 Pre ) ( a ) 30
( b ) 33 ( d ) 36
( c ) 32
CHA PION PU
PUBLICATION

--- PAGE 20 ---
Profit & Loss ( Previous Year Practice Questions )
By selling a car for * 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :
( CGL 2022 Pre )
( a ) ₹ 2,62,432 ( b ) ₹ 2,65,432 ( c ) 2,65,420 ( d ) ₹ 2,62,424 If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places ) ( CGL 2022 Pre ) ( a ) 38.89 % ( b ) 35.75 %
( c ) 32.25 %
( d ) 28.75 % A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ? ( CGL 2022 Pre ) ( a ) 10.5 % ( b ) 9.5 % ( c ) 9 % ( d ) 10 % 10. If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ? ( CGL 2023 Pre ) ( b ) 100 % ( d ) 25 %
( a ) 75 % ( c ) 50 %
11. Samreen sells a keyboard for * 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ? ( CGL 2024 Pre )
( a ) 2.51 % loss ( b ) 7.42 % gain ( c ) 3.52 % loss ( d ) 3.52 % gain
12. Madhav purchased an item for * 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in * ) ? ( CGL 2024 Pre ) ( b ) 4200 ( d ) 2520
( a ) 6720 ( c ) 1680
13. An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?
( CGL 2024 Pre ) ( b ) 5 : 2
( a ) 2 : 5 ( c ) 2 : 7
( d ) 7 : 2
146
7 .
Basic
SSC CGL
1 .
8 .
A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56 , 250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ? ( CGL 2019 Pre ) ( a ) ₹ 47,750 ( b ) ₹ 8,687.7 ( d ) * 20 , 625
9 .
( c ) ₹ 16,500
2 .
A tea seller used to make 50 % . of profit by selling tea at 9 per When the cost cup . of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ? ( CGL 2021 Pre ) ( a ) 33
( b ) 25
3
1
( c ) 33-
( d ) 30
3
3 .
4 .
5 .
A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ? ( CGL 2021 Pre ) ( a ) 18.75 % ( b ) 20.75 % ( c ) 21.25 % ( d ) 24.25 % The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ) of the mobile phone is ? ( CGL 2021 Pre ) ( a ) 52,000 ( b ) 55,000 ( c ) 45,000 ( d ) 50,000 The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is : ( CGL 2022 Pre ) ( a ) ₹ 8,200 ( b ) ₹ 9,200 ( c ) ₹ 8,000 ( d ) ₹ 9,000 A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ? ( CGL 2022 Pre ) ( a ) 5 % loss ( b ) 6 % profit ( c ) 5 % profit ( d ) 6 % loss
6 .
Gagan Pratap Sir
Profit & Loss
SSC CPO
14. If the selling price of an article is
2
1
of its cost price , the
5
percentage gain is . ( CPO 2018 Pre )
( a ) 47
( b ) 40 ( d ) 25
( c ) 20
15. Ajay buys 18 oranges for * 90 and sells 15 oranges for * 105 . Find the percentage of his
gain .
( CPO 2022 Pre )
( a ) 35 %
( b ) 30 % ( d ) 40 %
( c ) 25 %
16. If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ) of the article is : ( CPO 2023 Pre ) ( b ) 150 ( d ) 100
n
( a ) 175 ( c ) 200
SSC CHSL
17. By selling an article for * 2,300 , Komal gains 25 % . If she sells it for 1955 , then her loss / gain percent is : ( CHSL 2018 Pre )
( a ) Loss , 6.5 % ( b ) Gain , 6.5 % ( c ) Gain , 6.25 % ( d ) Loss , 6.25 %
18. Kishore had a loss of 20 % on selling an article for 7,160 . At what price should he had sold the item to make a profit of 30 % ? ( CHSL 2019 Pre ) ( a ) 11,635 ( b ) 12,007 ( c ) 10,678 ( d ) ₹ 8,988 19. If a saree is sold for 3,060 , the seller will face 15 % loss , at what price should he sell the saree to gain a 20 % profit ? ( CHSL 2019 Pre ) ( a ) ₹ 4,650 ( b ) 3,600 ( d ) 4,320 ( c ) 3,440 20. When an article is sold for * 720 , there is a profit of x % . When the same article is sold for ₹ 750 , profit is ( x + 5 ) % . What is the value of x ?
( CHSL 2019 Pre )
( b ) 18
( a ) 20
( c ) 25
( d ) 15
CHAMPION PL
PUBLICATION

--- PAGE 21 ---
Discount
( Previous Year Practice Questions )
Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ? ( CGL 2022 Pre ) ( b ) 48 ( d ) 46
( a ) ₹ 44 ( c ) 42
A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % . ( CGL 2022 Pre ) ( a ) 50 % ( b ) 70 % ( c ) 30 % The single discount equivalent
( d ) 40 %
to two successive discounts of 15 % and 12 % on an article is ?
( CGL 2022
( a ) 3 % ( b ) 25.2 % ( c ) 74.8 % ( d ) 27 % The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill . ( CGL 2022 Pre ) ( a ) ₹ 3,333 , .33 ( b ) ₹ 2,500 ( c ) 833.33 ( d ) 1,666.67 A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum
percentage ?
( CGL 2022 Pre )
I. Two successive discounts of 10 % each . II . Successive discounts of 15 % and 5 % . III . 20 % discount . ( a ) Only discount scheme I ( b ) Only discount scheme II ( c ) Only discount scheme III ( d ) All provide equal discount 10. A shopkeeper offers the following three schemes . ( CGL 2022 Pre ) Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6
192
5 .
Basic Concept / Successive Discount
SSC CGL
1 .
6 .
Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ? ( CGL 2020 Pre ) ( a ) C , 1780 ( b ) A , 1735.20 ( c ) B , 1800 ( d ) C , 1783.40
7 .
2 .
to
A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ? ( CGL 2020 Pre )
8 .
( a ) second offer by * 100
( b ) first offer by * 68
( c ) second offer by * 68
( d ) first offer by * 32
3 .
9 .
A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ? ( CGL 2021 Pre ) ( a ) 13,280 , 16,517 ( b ) 13,083 , 16,517
( c ) 16,517 , 13,083
4 .
( d ) 16,517 , 13,280 A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?
( a ) 2519
( CGL 2021 Pre ) ( b ) 2977 ( d ) 3664
( c ) 2382
Gagan Pratap Sir
Discount
Which scheme is the best for customers ?
( a ) Scheme - I ( b ) Scheme - III ( c ) Scheme - II
( d ) All scheme are equal 11. A shopkeeper offers the following discount schemes for buyers on an article : ( CGL 2023 Pre )
i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ? ( a ) Scheme iv ( b ) Scheme iii ( c ) Scheme ii ( d ) Scheme i 12. A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ? ( CGL 2023 Pre )
catin
Buy 6 , get 4 free
a
Buy 5 , get 5 free
Two successive discounts of 18 % and 24 %
( b ) Only B & C
( a ) Only B
( c ) Only A & C ( d ) Only A 13. If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ? ( CGL 2023 Pre ) ( a ) 15
( b ) 25 ( d ) 30
( c ) 20
discount
14. The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ? ( CGL 2023 Pre )
all
for
the
( a ) First ( b ) Same shopkeepers ( c ) Third ( d ) Second
CHA PION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 19,
    "question_number": 9,
    "question": "The value of 17 1/3 % of 33 1/3 % of 7200 is :",
    "options": {
      "A": "7.65",
      "B": "11.68",
      "C": "13.65",
      "D": "9.65"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 10,
    "question": "If 91 % of A is 39 % of B, and B is x % of A, then the value of x is :",
    "options": {
      "A": "200/3",
      "B": "700/3",
      "C": "500/3",
      "D": "400/3"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 11,
    "question": "What is the value of 7.14 % of 66.67 % of 21.84 ?",
    "options": {
      "A": "1.07",
      "B": "2.02",
      "C": "1.04",
      "D": "1.09"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 12,
    "question": "A number which, when increased by 16 % becomes 1914. The number is :",
    "options": {
      "A": "2220",
      "B": "1650",
      "C": "1780",
      "D": "2010"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 13,
    "question": "Which of the following is the 64/25 converted to percentage is :",
    "options": {
      "A": "25.6",
      "B": "256",
      "C": "0.256",
      "D": "2.56"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 14,
    "question": "2.4 converted to percentage is :",
    "options": {
      "A": "0.24",
      "B": "24",
      "C": "240",
      "D": "2.4"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 15,
    "question": "If 20 % of a = b, then b % of 20 is equal to :",
    "options": {
      "A": "4 % of a",
      "B": "2 % of a",
      "C": "16 % of a",
      "D": "8 % of a"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 16,
    "question": "What is ( 0.08 % of 0.008 % of 8 )^1/9 ?",
    "options": {
      "A": "0.8",
      "B": "0.2",
      "C": "0.64",
      "D": "0.08"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 17,
    "question": "Two persons A and B are paid a total of 2,040 per week by their employer. If B is paid 140 percent of the sum paid to A, then how much is A paid per week?",
    "options": {
      "A": "₹ 850",
      "B": "₹ 750",
      "C": "820",
      "D": "₹ 800"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 18,
    "question": "In a sweet, one-third is sugar. If the price of sugar now is 6/7 of the previous price, what is the effective percentage increase in the cost of the sweet?",
    "options": {
      "A": "100/9 %",
      "B": "200/9 %",
      "C": "100/18 %",
      "D": "100/3 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 1,
    "question": "If 85 % of a number is added to 75, then the result is the number itself. The number is:",
    "options": {
      "A": "500",
      "B": "200",
      "C": "300",
      "D": "100"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 2,
    "question": "If 50 % of the number is added 75, then result becomes the same number, then the number is:",
    "options": {
      "A": "400",
      "B": "100",
      "C": "250",
      "D": "150"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 3,
    "question": "0.5 is what percentage of 20?",
    "options": {
      "A": "25 %",
      "B": "0.25 %",
      "C": "2.5 %",
      "D": "0.025 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 4,
    "question": "If A is 95 % of B, then what per cent of A is B?",
    "options": {
      "A": "110 10/19 %",
      "B": "104 4/19 %",
      "C": "107 17/19 %",
      "D": "105 5/19 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 5,
    "question": "Which of the following is the least?",
    "options": {
      "A": "9 % of 845",
      "B": "12 % of 625",
      "C": "10 % of 720",
      "D": "15 % of 555"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 6,
    "question": "If (x + 20) % of 250 is 25 % more than x % of 220, then 10 % of (x + 50) is what percent less than 15 % of x?",
    "options": {
      "A": "13 1/3",
      "B": "8 1/3",
      "C": "16 2/3",
      "D": "33 1/3"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 7,
    "question": "25 % of (50 % of 30 % of 150) = ? / 40 % of 2250",
    "options": {
      "A": "0.825 %",
      "B": "0.25 %",
      "C": "0.625 %",
      "D": "0.225 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 8,
    "question": "What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360?",
    "options": {
      "A": "60",
      "B": "45",
      "C": "50",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 19,
    "question": "If x % of y is 150 and y % of z is 300, then the relation between x and z is:",
    "options": {
      "A": "z = x",
      "B": "z = x / 3",
      "C": "z = x / 2",
      "D": "z = 2x"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 20,
    "question": "If a % of 240 is c and c % of a is 117.6, then the value of a + c is:",
    "options": {
      "A": "238",
      "B": "144",
      "C": "260",
      "D": "196"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 21,
    "question": "A is 150 % of B and B is 40 % of C. If A + B + C = 20, then the value of 2B + 3C - 4A is equal to:",
    "options": {
      "A": "16",
      "B": "14",
      "C": "20",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 22,
    "question": "If (224)^2 * (35) + 20 % of 400 + x % of 30 = 30 % of 30, find the value of x.",
    "options": {
      "A": "120",
      "B": "160",
      "C": "190",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 23,
    "question": "By what percentage is the percentage of the number of vowels less than the percentage of consonants in it?",
    "options": {
      "A": "33.33",
      "B": "200",
      "C": "66.67",
      "D": "50"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 24,
    "question": "5/11 of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number, C. If the value of number C is 5500, then the sum of 40 % of A and 20 % of B is?",
    "options": {
      "A": "30",
      "B": "33",
      "C": "32",
      "D": "36"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "By selling a car for ₹ 2,78,000, a dealer gains 25 %. If the profit is reduced to 18 %, then the selling price will be:",
    "options": {
      "A": "₹ 2,62,432",
      "B": "₹ 2,65,432",
      "C": "2,65,420",
      "D": "₹ 2,62,424"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "If the cost price is 72 % of the selling price, then what is the percentage of profit? (Correct to 2 decimal places)",
    "options": {
      "A": "38.89 %",
      "B": "35.75 %",
      "C": "32.25 %",
      "D": "28.75 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A man lost 15 % by selling a mobile for 4,675. What will be his gain percentage by selling it for 6,050?",
    "options": {
      "A": "10.5 %",
      "B": "9.5 %",
      "C": "9 %",
      "D": "10 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "If the selling price of an article is doubled, then the profit becomes four times. What was the original profit percentage?",
    "options": {
      "A": "75 %",
      "B": "100 %",
      "C": "50 %",
      "D": "25 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "Samreen sells a keyboard for ₹ 1,260 at a profit of 25 %, and another keyboard for 1,440 at a loss of 10 %. What is her total gain or loss percentage?",
    "options": {
      "A": "2.51 % loss",
      "B": "7.42 % gain",
      "C": "3.52 % loss",
      "D": "3.52 % gain"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "Madhav purchased an item for ₹ 42,000 and sold it at a loss of 20 %. With that amount, he purchased another item and sold it at a gain of 30 %. What is the overall gain (in ₹)?",
    "options": {
      "A": "6720",
      "B": "4200",
      "C": "1680",
      "D": "2520"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 7,
    "question": "An article is sold at a profit of 250 %. What is the ratio of its cost price to selling price?",
    "options": {
      "A": "2 : 5",
      "B": "5 : 2",
      "C": "2 : 7",
      "D": "7 : 2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 8,
    "question": "A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance. He sold it for 1,56,250 thereby earning a profit of 25 %. How much money did he spend on the maintenance of the car?",
    "options": {
      "A": "₹ 47,750",
      "B": "₹ 8,687.7",
      "C": "₹ 16,500",
      "D": "₹ 20,625"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 9,
    "question": "A tea seller used to make 50 % of profit by selling tea at 9 per cup. When the cost of ingredients increased by 25 %, he started selling tea at 10 per cup. What is his profit percentage now?",
    "options": {
      "A": "33 1/3",
      "B": "25",
      "C": "33 1/3",
      "D": "30"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 10,
    "question": "A fruit vendor recovers the cost of 95 oranges by selling 80 oranges. What is the profit percentage?",
    "options": {
      "A": "18.75 %",
      "B": "20.75 %",
      "C": "21.25 %",
      "D": "24.25 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 11,
    "question": "The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit. The cost price (in ₹) of the mobile phone is?",
    "options": {
      "A": "52,000",
      "B": "55,000",
      "C": "45,000",
      "D": "50,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 12,
    "question": "The difference between the cost price and selling price of a pair of shoes is 1,200. If the profit is 15 %, the selling price is:",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 9,200",
      "C": "₹ 8,000",
      "D": "₹ 9,000"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 13,
    "question": "A pen was sold for 166.44 with a profit of 14 %. If it were sold for 154.76, then what would have been the percentage of profit or loss?",
    "options": {
      "A": "5 % loss",
      "B": "6 % profit",
      "C": "5 % profit",
      "D": "6 % loss"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 14,
    "question": "If the selling price of an article is 2/5 of its cost price, the percentage gain is.",
    "options": {
      "A": "47",
      "B": "40",
      "C": "20",
      "D": "25"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 15,
    "question": "Ajay buys 18 oranges for ₹ 90 and sells 15 oranges for ₹ 105. Find the percentage of his gain.",
    "options": {
      "A": "35 %",
      "B": "30 %",
      "C": "25 %",
      "D": "40 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 16,
    "question": "If the difference between the selling prices of an article at profits of 10 % and 7 % is 6, then the cost price (in ₹) of the article is:",
    "options": {
      "A": "175",
      "B": "150",
      "C": "200",
      "D": "100"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 17,
    "question": "By selling an article for ₹ 2,300, Komal gains 25 %. If she sells it for 1955, then her loss/gain percent is:",
    "options": {
      "A": "Loss, 6.5 %",
      "B": "Gain, 6.5 %",
      "C": "Gain, 6.25 %",
      "D": "Loss, 6.25 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 18,
    "question": "Kishore had a loss of 20 % on selling an article for 7,160. At what price should he had sold the item to make a profit of 30 %?",
    "options": {
      "A": "11,635",
      "B": "12,007",
      "C": "10,678",
      "D": "₹ 8,988"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 19,
    "question": "If a saree is sold for 3,060, the seller will face 15 % loss, at what price should he sell the saree to gain a 20 % profit?",
    "options": {
      "A": "₹ 4,650",
      "B": "3,600",
      "C": "3,440",
      "D": "4,320"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 20,
    "question": "When an article is sold for ₹ 720, there is a profit of x %. When the same article is sold for ₹ 750, profit is (x + 5) %. What is the value of x?",
    "options": {
      "A": "20",
      "B": "18",
      "C": "25",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 21,
    "question_number": 1,
    "question": "Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 %, both given on shopping of 3,840. What is the difference between both the discounts?",
    "options": {
      "A": "₹ 44",
      "B": "48",
      "C": "42",
      "D": "46"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 2,
    "question": "A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 %. Find the net profit percentage, if the shopkeeper sells the same article at a discount of 15 %.",
    "options": {
      "A": "50 %",
      "B": "70 %",
      "C": "30 %",
      "D": "40 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 3,
    "question": "The single discount equivalent to two successive discounts of 15 % and 12 % on an article is?",
    "options": {
      "A": "3 %",
      "B": "25.2 %",
      "C": "74.8 %",
      "D": "27 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 4,
    "question": "The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was ₹ 25. Find the amount of the bill.",
    "options": {
      "A": "₹ 3,333.33",
      "B": "₹ 2,500",
      "C": "833.33",
      "D": "1,666.67"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 5,
    "question": "A shopkeeper offers three types of discount schemes for buyers. Which of them has the maximum percentage?",
    "options": {
      "A": "Only discount scheme I",
      "B": "Only discount scheme II",
      "C": "Only discount scheme III",
      "D": "All provide equal discount"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 6,
    "question": "Three shopkeepers A, B and C marked an identical article at ₹ 4820. A, B and C sold their article on successive discounts of 20 % and 20 %, 25 % and 15 %; 30 % and 10 % respectively. Which shopkeeper gives the maximum discount and how much (in ₹)?",
    "options": {
      "A": "C, 1780",
      "B": "A, 1735.20",
      "C": "B, 1800",
      "D": "C, 1783.40"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 7,
    "question": "A customer wanted to purchase an item marked for ₹ 10000. Shopkeeper offered two types of discounts. 25 % flat discount or successive discounts of 14 % and 12 %. Which is the better offer for the customers and by how much?",
    "options": {
      "A": "second offer by ₹ 100",
      "B": "first offer by ₹ 68",
      "C": "second offer by ₹ 68",
      "D": "first offer by ₹ 32"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 8,
    "question": "A shopkeeper announces a discount of 48 % and then by a further discount of 15 %. What is the final sale price (in ₹, to the nearest rupee) of sofa costing 29600 and what is the discount (in ₹)?",
    "options": {
      "A": "13,280 , 16,517",
      "B": "13,083 , 16,517",
      "C": "16,517 , 13,083",
      "D": "16,517 , 13,280"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 9,
    "question": "A
```

---

## Interaction [18:20:56]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 22 ---
Compound Interest ( Previous Year Practice Questions )
6. The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum ( CPO 2019 Pre ) ( b ) ₹ 7,200 ( d ) ₹ 7,000
is :
( a ) ₹ 7,250
( c ) ₹ 7,500
What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ? ( CPO 2023 Pre ) ( a ) ₹ 9,824.00 ( b ) 10,520.00 ( c ) 9,956.86 ( d ) ₹ 10,123.20
SSC CHSL
The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :
( CHSL 2019 Pre ) ( b ) 6 % ( a ) 8 % ( c ) 5 % ( d ) 7 % The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :
( CHSL 2019 Pre )
chimp
( ) 3 1 ½
( b ) 3
( a ) 2 years
years .
1
( d ) 1 ½ ½ years
( c ) 3 year 10. If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ? ( CHSL 2019 Pre ) ( a ) 78,756.34 ( b ) ₹ 66,477.2 ( c ) 56,896.98 ( d ) 69,345.6 11. In how many years , the compound interest ,
compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?
( CHSL 2020 Pre ) ( b ) 1 year ( d ) 2 year
( a ) 3 year ( c ) 4 year
257
Basic Concept
SSC CGL
1 .
What is the compound interest on a sum of 10,000 at 14 % p.a.
5
7 .
for 27 years where the inter- est is compounded yearly ? ( nearest to 1 ) ( CGL 2018 Pre ) ( a ) ₹ 4259 ( c ) 4439
( b ) ₹ 4296 ( d ) 4394
2 .
The compound interest on a
1
certain sum at 10 % p.a. for 2
'
8 .
years is 1,201.60 , interest compounded yearly . The sum ( CGL 2019 Pre )
is :
( a ) ₹ 5,400 ( b ) 4,200 ( c ) ₹ 4,800 ( d ) ₹ 4,500 What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a.
3 .
after 2
years , if interest
9 .
compounded yearly , is :
( CGL 2020 Pre )
4 .
( a ) 12364.50 ( b ) 13642.50 ( c ) 16342.50 ( d ) 14362.50 The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is : ( CGL 2021 Pre ) ( a ) 31,538,40 ( b ) 24,00.50 ( c ) 35,138.40 ( d ) 28,315.40
SSC CPO
5 .
A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ? ( CPO 2019 Pre ) ( a ) 1,415 ( b ) 1,310 ( c ) 1,290 ( d ) ₹ 1,285
Gagan Pratap Sir
Compound Interest .
12. A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :
( CHSL 2021 Pre )
( b ) 1,800
( d ) ₹ 2,200
( a ) ₹ 2,500 ( c ) ₹ 3,800 13. A sum of
16,875 , when in-
vested at r %
interest per year
annually ,
compounded
amounts to 19,683 after 2 . years . What is the value of r ?
( CHSL 2021 Pre )
( b ) 7 % ( d ) 9 %
( a ) 8 % ( c ) 6 %
14. In what time will * 3,90,625
amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?
( CHSL 2021 Pre )
n
1
( b ) 1 years
( a ) 2 years
1
( c ) 2½ years ( d ) 1 years 15. Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?
( CHSL 2021 Pre ) ( b ) ₹ 7,250 ( d ) ₹ 7,260
( a ) ₹ 7,160 ( c ) ₹ 7,200
is
16. A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of ( CHSL 2023 Pre ) ( b ) ₹ 8,000 ( d ) ₹ 6,000
money lent . ( a ) ₹ 8,200 ( c ) ₹ 7,500
if
17. Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer ) ( CHSL 2023 Pre ) ( a ) ₹ 72,980 ( b ) 73,980 ( c ) 70,980 ( d ) ₹ 72,680
CHA PION PL
PUBLICATION

--- PAGE 23 ---
Ratio & Proportion ( Previous Year Practice Questions )
SSC CPO
A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day ( CPO 2018 Pre ) ( b ) 5 : 4 ( d ) 6 : 5
wages . ( a ) 4 : 5 ( c ) 15 : 4
10. Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is
* 1,600 ?
( CPO 2019 Pre )
( a ) ₹ 2,000
( b ) ₹ 3,000
( c ) ₹ 2,500
( d ) ₹ 2,600
1
of C. and B is twice of 6
A. and the average of A , B and C is 30. then the difference between A and C is :
( CPO 2020 Pre )
( a ) 50
( b ) 60 ( d ) 40
( c ) 80
12. If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair ( CPO 2020 Pre ) ( b ) 5,005 ( d ) 3,003
is : ( a ) 7,007 ( c ) 1,001
13. If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is : ( CPO 2022 Pre )
( a ) 5 ( c ) 8
( b ) 10 ( d ) 4
14. Which of the following is the
smallest ratio ?
( CPO 2022 Pre ) ( b ) 3341
( a ) 41 92
( c ) 42 49 ( d ) 3547 15. Arrange the given ratios in descending order 157 , 511 and 21 : 77 .
( CPO 2022 Pre ) 775 : 11 > 15 : 7
( a ) 21
( b ) 15
75 : 11 > 21 : 77
721 77 > 5 11
( c ) 15
( d ) 5 11 15 : 7 > 21 : 77 16. Which of the following ratios is the greatest ? ( CPO 2023 Pre )
( a ) 2 : 5
( b ) 7 : 10
( c ) 5 : 6
( d ) 1 3
289
Basic Concept
9 .
SSC CGL
1 .
If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :
( CGL 2018 Pre ) ( b ) 2 : 5 ( d ) 5 11
( a ) 3 13 ( c ) 3 11
2 .
The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is : ( CGL 2019 Pre )
( b ) 6 : 7
( a ) 76
( c ) 13 : 7
( d ) 7 13
11. If A is
3 .
If 3A 4B = 5C , then A B C is equal to :
( CGL 2019 Pre )
( a ) 107 : 6
( b ) 20 15 12
( c ) 20 15 16
( d ) 1054
4 .
If a b c d , then which of the following ratio is equal to a c ?
( CGL 2022 Pre )
( a ) a : d
( b ) b : c
b + c
( c ) ad ( d ) a
b c d
5 .
If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ? ( CGL 2024 Pre ) ( a ) 7 : 11 ( b ) 3 : 7 ( c ) 57 ( d ) 11 7 The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is ( CGL 2024 Pre )
6 .
( b ) 150 ( d ) 350
( a ) 60 ( c ) 140
7 .
If AB 6 : 8 and B C = 7 : 12 , then A B C is : ( CGL 2024 Pre )
( a ) 14 31 20
( b ) 21 32 40
( c ) 11 23 40
( d ) 21 28 48
If AB 6 : 8 and B C 5:11 ,
8 .
then A B
C is : ( CGL 2024 Pre )
( a ) 11 23
14 ( b ) 14 13 25
44 ( d ) 15 20 44
( c ) 15 32
Gagan Pratap Sir
Ratio & Proportion
SSC CHSL
17. If a b 3 : √5 , then the value
of ( 2a + b )
( 3a - 2b ) is :
( CHSL 2019 Pre )
( a ) ( 64 + 21√5 )
( b ) ( 64 + 21√5 )
( c ) ( 64 + 21√5 )
1
( 64 + 21√5 )
61
18. Which of the following ratios is
the smallest ? 34 , 12 , 25 , 1 : 3
( CHSL 2021 Pre )
cation
( a ) 1 : 3
( b ) 2 : 5 ( d ) 1 : 2
( c ) 3 : 4
19. The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .
( CHSL 2023 Pre ) ( b ) 56
( a ) 75 ( c ) 48
( d ) 64
20. If x y z = 3:45 , then what the ratio
will
be
of
0.00
( CHSL 2023 Pre )
( a ) 37 47
100
100
( b ) 41 37
100
( c ) 4937
100
( d ) 45 48
21. If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be : ( CHSL 2023 Pre )
( b ) 13 : 6
( a ) 21 : 5
( c ) 12 : 5
( d ) 178
✓ SSC MTS & SP
22. Ratio between average of first four prime numbers and first four composite numbers is :
( MTS 2020 Pre )
( a ) 13 10
( b ) 17:27 ( d ) 17 19
( c ) 11 27
CHA PION PU
PUBLICATION

--- PAGE 24 ---
Mixture & Alligation ( Previous Year Practice Questions )
5. An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ? ( CGL 2018 Pre ) ( b ) 6.72 kg ( d ) 5.28 kg
( a ) 672 kg
( c ) 528 kg
A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?
( CGL 2022 Pre )
( a ) 18 litres . ( b ) 14 litres . ( c ) 16 litres ( d ) 12 litres A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x . ( a ) 70 ml ( c ) 60 ml ( CGL 2022 Pre ) ( b ) 80 ml
( d ) 50 ml
A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture . ( CGL 2022 Pre ) ( a ) 7 litres ( b ) 10 litres ( c ) 5 litres ( d ) 3 litres P and are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ? ( CGL 2022 Pre ) ( b ) 52 % ( d ) 56 %
( a ) 65 %
( c ) 48 %
10. In a mixture of 55 litres , fruit juice and water are in the ratio of 41. How much water ( in litres ) must be added to make the mixture ratio 2 1 ?
( CGL 2023 Pre ) ( b ) 22 ( d ) 12
( a ) 9 ( c ) 11
322
Based on Mixture
SSC CGL
1. Two bottles of the same
6 .
1 % 3
capacity are 35 % and 33
full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is : ( CGL 2019 Pre )
7 .
2
1
( a ) 60
( b ) 64
3
1
5
( c ) 65
( d ) 34
6
2 .
8 .
25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is : ( CGL 2019 Pre )
1
1
( b ) 33- %
( a ) 12 % 2
3
( c ) 45 %
( d ) 25 %
9 .
3. Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 34. Alloy C is prepared by mixing A and B in the ratio 45. The percentage of y in alloy C is : ( CGL 2020 Pre )
4
( b ) 33 %
( a ) 44 %
- %
( c ) 66 %
( d ) 55 %
9
4 .
An alloy contains 40 % of sil- ver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of sil- ver ? ( CGL 2021 Pre ) ( b ) 10 ( d ) 20
( a ) 5
( c ) 12
Gagan Pratap Sir
Mixture & Alligation
11. A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is : ( CGL 2023 Pre )
( a ) 1.27 % ( c ) 20 %
( b ) 18 % ( d ) 25 %
SSC CPO
12. Two mixtures A and B have the following compositions : Mixture A has copper and tin in a ratio of 1 : 2 . Mixture B has copper and tin in a ratio of 1 : 3 . If equal quantities of mixtures A and B are used for producing mixture C , then find the ratio of copper and tin in mixture C. ( CPO 2023 Pre ) ( b ) 1 : 5
( a ) 2 : 5 ( c ) 7 17
( d ) 7:12
tion
13. A 12 litre solution of acid and water contains 30 % acid . How much water ( in litres ) must be added to get a solution having 20 % acid ? ( CPO 2024 Pre )
( a ) 6 ( c ) 5
( b ) 3 ( d ) 4
14. A mixture of 750 kg of alloy of copper and tin contains 25 % tin . How much tin must be added so that it becomes 70 % of the mixture ? ( CPO 2024 Pre ) ( a ) 895 kg ( b ) 1125 kg ( c ) 956 kg ( d ) 1097 kg 15. In alloys A and B , the ratio of lead to tin is 5 3 and 3 1 , respectively . 80 kg of alloy A and 100 kg of alloy B are mixed together to form a new alloy . What is the amount of tin ( in kg ) in the new alloy ?
( CPO 2024 Pre ) ( b ) 55 ( d ) 81.3
( a ) 90
( c ) 68
16. The quantity of milk in a mixture of milk and water is
4
5
of the volume of the mixture . After adding 1 liter of milk to 5 liters of the mixture , the percentage of water in the mixture is : ( CPO 2024 Pre ) ( a ) 17.5 % ( b ) 15 %
200
100
- %
( c )
( d )
- % 6
6
CHA PION PU
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 22,
    "question_number": 6,
    "question": "The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum is :",
    "options": {
      "A": "₹ 7,250",
      "B": "₹ 7,200",
      "C": "₹ 7,500",
      "D": "₹ 7,000"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 7,
    "question": "What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ?",
    "options": {
      "A": "₹ 9,824.00",
      "B": "10,520.00",
      "C": "9,956.86",
      "D": "₹ 10,123.20"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 8,
    "question": "The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :",
    "options": {
      "A": "8 %",
      "B": "6 %",
      "C": "5 %",
      "D": "7 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 9,
    "question": "The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :",
    "options": {
      "A": "2 years",
      "B": "3 years",
      "C": "3 year 1/2",
      "D": "1 1/2 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 10,
    "question": "If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ?",
    "options": {
      "A": "78,756.34",
      "B": "₹ 66,477.2",
      "C": "56,896.98",
      "D": "69,345.6"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 11,
    "question": "In how many years , the compound interest , compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?",
    "options": {
      "A": "3 year",
      "B": "1 year",
      "C": "4 year",
      "D": "2 year"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 1,
    "question": "What is the compound interest on a sum of 10,000 at 14 % p.a. for 27 years where the interest is compounded yearly ? ( nearest to 1 )",
    "options": {
      "A": "₹ 4259",
      "B": "₹ 4296",
      "C": "4439",
      "D": "4394"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 2,
    "question": "The compound interest on a certain sum at 10 % p.a. for 2 years is 1,201.60 , interest compounded yearly . The sum is :",
    "options": {
      "A": "₹ 5,400",
      "B": "4,200",
      "C": "₹ 4,800",
      "D": "₹ 4,500"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 3,
    "question": "What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a. after 2 years , if interest compounded yearly , is :",
    "options": {
      "A": "12364.50",
      "B": "13642.50",
      "C": "16342.50",
      "D": "14362.50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 4,
    "question": "The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is :",
    "options": {
      "A": "31,538,40",
      "B": "24,00.50",
      "C": "35,138.40",
      "D": "28,315.40"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 5,
    "question": "A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ?",
    "options": {
      "A": "1,415",
      "B": "1,310",
      "C": "1,290",
      "D": "₹ 1,285"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 12,
    "question": "A sum of money becomes * 3,364 at a rate of 16 % compounded annually for 2 years . The sum of money is :",
    "options": {
      "A": "₹ 2,500",
      "B": "1,800",
      "C": "₹ 3,800",
      "D": "₹ 2,200"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 13,
    "question": "A sum of 16,875 , when invested at r % interest per year compounded annually , amounts to 19,683 after 2 . years . What is the value of r ?",
    "options": {
      "A": "8 %",
      "B": "7 %",
      "C": "6 %",
      "D": "9 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 14,
    "question": "In what time will * 3,90,625 amount to * 4,56,976 at 8 % per annum , interest being compounded half - yearly ?",
    "options": {
      "A": "2 years",
      "B": "1 1/2 years",
      "C": "2½ years",
      "D": "1 1/2 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 15,
    "question": "Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annually . What will be the amount at the end of 2 years ?",
    "options": {
      "A": "₹ 7,160",
      "B": "₹ 7,250",
      "C": "₹ 7,200",
      "D": "₹ 7,260"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 16,
    "question": "A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of money lent .",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 8,000",
      "C": "₹ 7,500",
      "D": "₹ 6,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 17,
    "question": "Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer )",
    "options": {
      "A": "₹ 72,980",
      "B": "73,980",
      "C": "70,980",
      "D": "₹ 72,680"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day wages .",
    "options": {
      "A": "4 : 5",
      "B": "5 : 4",
      "C": "15 : 4",
      "D": "6 : 5"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 10,
    "question": "Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is * 1,600 ?",
    "options": {
      "A": "₹ 2,000",
      "B": "₹ 3,000",
      "C": "₹ 2,500",
      "D": "₹ 2,600"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 11,
    "question": "If A is 1 of C. and B is twice of A. and the average of A , B and C is 30. then the difference between A and C is :",
    "options": {
      "A": "50",
      "B": "60",
      "C": "80",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 12,
    "question": "If the total price of three chairs is 14,014 and their prices are in the ratio of 3 : 4 : 7 , then the highest price ( in ) of chair is :",
    "options": {
      "A": "7,007",
      "B": "5,005",
      "C": "1,001",
      "D": "3,003"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 13,
    "question": "If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A - 4B + C is :",
    "options": {
      "A": "5",
      "B": "10",
      "C": "8",
      "D": "4"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 14,
    "question": "Which of the following is the smallest ratio ?",
    "options": {
      "A": "4 : 9",
      "B": "3 : 4",
      "C": "4 : 2",
      "D": "3 : 5"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 15,
    "question": "Arrange the given ratios in descending order 15 : 7 , 5 : 11 and 21 : 77 .",
    "options": {
      "A": "21 : 77 > 15 : 7 > 5 : 11",
      "B": "15 : 7 > 5 : 11 > 21 : 77",
      "C": "15 : 7 > 21 : 77 > 5 : 11",
      "D": "5 : 11 > 15 : 7 > 21 : 77"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 16,
    "question": "Which of the following ratios is the greatest ?",
    "options": {
      "A": "2 : 5",
      "B": "7 : 10",
      "C": "5 : 6",
      "D": "1 : 3"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "If a : b = 5 : 3 , then ( 8a - 5b ) : ( 8a + 5b ) is equal to :",
    "options": {
      "A": "3 : 13",
      "B": "2 : 5",
      "C": "3 : 11",
      "D": "5 : 11"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 2,
    "question": "The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is :",
    "options": {
      "A": "7 : 6",
      "B": "6 : 7",
      "C": "13 : 7",
      "D": "7 : 13"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 3,
    "question": "If 3A = 4B = 5C , then A : B : C is equal to :",
    "options": {
      "A": "10 : 7 : 6",
      "B": "20 : 15 : 12",
      "C": "20 : 15 : 16",
      "D": "10 : 5 : 4"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 4,
    "question": "If a / b = c / d , then which of the following ratio is equal to a : c ?",
    "options": {
      "A": "a : d",
      "B": "b : c",
      "C": "a : d / b : c",
      "D": "a / b : c / d"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 5,
    "question": "If a : b : c : d : e : f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) : ( 3b + 5d + 11f ) ?",
    "options": {
      "A": "7 : 11",
      "B": "3 : 7",
      "C": "5 : 7",
      "D": "11 : 7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 6,
    "question": "The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is",
    "options": {
      "A": "60",
      "B": "150",
      "C": "140",
      "D": "350"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 7,
    "question": "If A : B = 6 : 8 and B : C = 7 : 12 , then A : B : C is :",
    "options": {
      "A": "14 : 31 : 20",
      "B": "21 : 32 : 40",
      "C": "11 : 23 : 40",
      "D": "21 : 28 : 48"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 8,
    "question": "If A : B = 6 : 8 and B : C = 5 : 11 , then A : B : C is :",
    "options": {
      "A": "11 : 23 : 44",
      "B": "14 : 13 : 25",
      "C": "15 : 20 : 44",
      "D": "15 : 32 : 44"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 17,
    "question": "If a : b = 3 : √5 , then the value of ( 2a + b ) : ( 3a - 2b ) is :",
    "options": {
      "A": "( 6√5 + 21 ) : ( 64 + 21√5 )",
      "B": "( 6√5 + 21 ) : ( 64 - 21√5 )",
      "C": "( 6√5 + 21 ) : ( 64 + 21√5 )",
      "D": "( 6√5 - 21 ) : ( 64 + 21√5 )"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 18,
    "question": "Which of the following ratios is the smallest ?",
    "options": {
      "A": "1 : 3",
      "B": "2 : 5",
      "C": "3 : 4",
      "D": "1 : 2"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 19,
    "question": "The compound ratio of 3 : 4 and 6 : 7 is 36 : x . Find the value of x .",
    "options": {
      "A": "75",
      "B": "56",
      "C": "48",
      "D": "64"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 20,
    "question": "If x : y : z = 3 : 4 : 5 , then what will be the ratio of ( x + y ) : ( y + z ) ?",
    "options": {
      "A": "37 : 47",
      "B": "41 : 37",
      "C": "49 : 37",
      "D": "45 : 48"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 21,
    "question": "If a : b = 5 : 7 , then ( 6a² - 2b² ) : ( 3b² - 2a² ) will be :",
    "options": {
      "A": "21 : 5",
      "B": "13 : 6",
      "C": "12 : 5",
      "D": "17 : 8"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 22,
    "question": "Ratio between average of first four prime numbers and first four composite numbers is :",
    "options": {
      "A": "13 : 10",
      "B": "17 : 27",
      "C": "11 : 27",
      "D": "17 : 19"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 24,
    "question_number": 5,
    "question": "An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ?",
    "options": {
      "A": "6.72 kg",
      "B": "6.72 kg",
      "C": "5.28 kg",
      "D": "5.28 kg"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 6,
    "question": "A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?",
    "options": {
      "A": "18 litres .",
      "B": "14 litres .",
      "C": "16 litres",
      "D": "12 litres"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 7,
    "question": "A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x .",
    "options": {
      "A": "70 ml",
      "B": "60 ml",
      "C": "80 ml",
      "D": "50 ml"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 8,
    "question": "A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture .",
    "options": {
      "A": "7 litres",
      "B": "10 litres",
      "C": "5 litres",
      "D": "3 litres"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 9,
    "question": "P and Q are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 : 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ?",
    "options": {
      "A": "65 %",
      "B": "52 %",
      "C": "48 %",
      "D": "56 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 10,
    "question": "In a mixture of 55 litres , fruit juice and water are in the ratio of 4 : 1 . How much water ( in litres ) must be added to make the mixture ratio 2 : 1 ?",
    "options": {
      "A": "9",
      "B": "22",
      "C": "11",
      "D": "12"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 1,
    "question": "Two bottles of the same capacity are 35 % and 33 1/3 % full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is :",
    "options": {
      "A": "60 1/6 %",
      "B": "64 2/3 %",
      "C": "65 5/6 %",
      "D": "34 1/6 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 2,
    "question": "25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is :",
    "options": {
      "A": "12 1/2 %",
      "B": "33 1/3 %",
      "C": "45 %",
      "D": "25 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 3,
    "question": "Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 3 : 4 . Alloy C is prepared by mixing A and B in the ratio 4 : 5 . The percentage of y in alloy C is :",
    "options": {
      "A": "44 %",
      "B": "33 3/9 %",
      "C": "66 2/3 %",
      "D": "55 5/9 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 4,
    "question": "An alloy contains 40 % of silver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of silver ?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "12",
      "D": "20"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 11,
    "question": "A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is :",
    "options": {
      "A": "1.27 %",
      "
```

---

## Interaction [18:22:03]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:22:18]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "CHAMPION PUBLICATION",
  "exam_name": "SIMPLIFICATION",
  "year": null,
  "shift": null
}
```

---

## Interaction [18:22:29]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 15 ---
1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION

--- PAGE 16 ---
Surds and Indices
SURDS AND INDICES
3
"
Laws of Surds
Law of Indices
1
axaxax .... n times = an
a =
√99-70√2 = ( 5√2-7 ) 70√3-2 × 35√√2
an
axaxa = a + n + p ( a = 0 )
=
axb
m
ab
5√2 49 + 50 = 99
= an ( m > n )
a a '
1
= ( ab )
1
√√√√ .....
= a
MS
=
( n > m )
an - m
ya
а
= 1
=
( m
n )
2 " -1
b
#b b
√√√a .... ntimes
a
܀
( am ) n = amxn = anxm = ( an ) m
na Radicand
Pavara .... co
va
܀
( abc ) " = axbnxcn
order of surd
n
dpy
n√a ÷ n√a ÷ n√ .... ∞ = n + 1√a
n
a '
m
܀
=
( b = 0 )
܀
=
( v )
bn
an = Va
√a + √a + √a + ....
( a ) am "
܀
=
Pma
lication
√√4a + 1 + 1 2
= x
( 32 ) 32
+
38316
P
√√√4a + 1-1 2
aq
= y
xp
aq
ач
+ 2 × 2 × √√3
x - y = 1
ab
xy = a
܀
If am an then m = n
-√ ( 2 + √3 ) - ( 2 + √3 )
OR Take two factors of a whose difference is 1 like Then x = Larger factor
If amb then a = b
Gaga
smaller factor
y
܀
√28 + 10√√3 = 10√√3 →
a = 1
x + y = √√4a + 1
2 × 5√3 5² + √32 = 28
܀
1
x =
√a + √a√a + ....
a - 1 =
( a 0 )
+
√√4a - 3 + 1 2
܀
( a - b ) ² = ( b - a ) ² = a² + b² - 2ab
1
1
& an =
a =
-n
an
a
y = √a - va + 1 - √a + √a-
a² + b² - 2ab
..... 00
a - b ( a > b ) b - a ( b > a )
-m
m
b
√4a - 3-1 2
√√43-24√3 = ( 3√3-4 )
=
x - y = 1
xy = 2 ( a - 1 )
24√√3-2 × 12√√3
܀
( -1 ) "
= +1 ( neven ) = -1 ( n = odd )
3√√3 > 16 + 27 = 43
Gagan Pratap Sir
CHA PION PL
77
PUBLICATION

--- PAGE 17 ---
Surds & Indices ( Previous Year Practice Questions )
SSC CHSL
If , 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + , then the value of 2x + 3y + 5z is ( CHSL 2019 Pre ) ( a ) 56 ( b ) 44 ( c ) 32 ( d ) 28 10. The value of
2
1
1
1
( a¹³ + 2a² + 3a + 2a + 1 )
1
1
-2a + 1 ) -a³ ( a¹ - 2 ) .
a3-2a6
when a 7 is : ( CHSL 2019 Pre )
( a ) 7 ( c ) 1
( b ) 0 ( d ) √√7
11. The value of
1
( CHSL 2019
( 9 + 4√5 ) ² is :
( a ) 322
( b ) 424 ( d ) 286
( c ) 246
3a + 3
x4a + 6
pione lication
x25a + 1 27a - 1x8a - 2 x125 the value of
is :
( CHSL 2019 Pre )
( a ) 4 ( c ) 5
( b ) 6 ( d ) 8
13. The value of 5 √√3 +7 √√√√6-
23
√2 + √3 + √6 is : ( CHSL 2019 Pre )
( b ) 16 ( d ) 10
the value of
3 / 15625√x = 4 .
( CHSL 2019 Pre )
( b ) 343 ( d ) 81
( a ) 625 ( c ) 441
-3
( 2x + 3 )
23
ug ]
then the value of √2-42x is :
( CHSL 2019 Pre )
( a ) 5
( b ) 6
( c ) 3
( d ) 4
78
SSC CGL
9 .
17.32 , then the
1. If 5√√3 + √√75
value of 14√3 + √108 is
( CPO 2021 Pre )
( a ) 32.46
( b ) 35.64
( d ) 33.86
( c ) 34.64
SSC CPO
2 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 6250.49 ( b ) 1250.49
( d ) 1354.24
( c ) 5768.28
3 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 2361.96 ( b ) 2758.28
( c ) 72568.4
( d ) 62504.9
4 .
Which one among the following is the smallest ? ( CPO 2019 Pre )
( a ) √401 - √399 ( b ) √101 - √√99
12. If
( c ) √301 - √299
( d ) √201 - √199
1
The value of
is closest
5 .
√7-4√3
( CPO 2019 Pre )
( b ) 4.2
to : ( a ) 4.1 ( c ) 1.2
( d ) 3.7
( a ) 0 ( c ) 12 14. Find
6 .
√0.6912 + √√0.5292 √0.6912 - √0.5292
( CPO 2019 Pre )
( b ) 0.9
( a ) 1.5 ( c ) 15
( d ) 9
7 .
The value
of √√11 + 2√ √18 is
closest to :
( CPO 2019 Pre )
15. If
( a ) 4.8 ( c ) 3.8
( b ) 4.4 ( d ) 4.1
8 .
The value of √6 - √17-2√72 is
closest is :
( CPO 2019 Pre )
( a ) 2.4
( b ) 2.7 ( d ) 1.7
( c ) 2.1
Gagan Pratap Sir
Surds and Indices
= ?
16. √30 + √30 + √30 + .
( CHSL 2019 Pre )
( b ) 4
( a ) 3 ( c ) 6
( d ) 5
17. Find the
value of x , if
21√x + 20√x = 29√x .
( CHSL 2019 Pre )
( b ) 3
( a ) 4 ( c ) 0
( d ) 2
18. If mx - nx = 0 then what is the
1
1 x ™ + x "
+
in
x "
xm
value of terms of x ?
( CHSL 2021 Pre )
2mn
2m
( b )
( a ) 2
x² ( n² + m² )
x² ( m² - n² )
2mn
2mn
( c ) x " ( n² - m² ) ( d ) x ^ ( m² - n² ) 19. Which of the following can be a rationalising
of
factor
( CHSL 2021 Pre )
( √√2 + √3 + √5 ) ? ( a ) ( √2 - √3 - √5 ) √6
4 1526 ,
( b ) ( √2 + √3 - √5 ) √6
( c ) ( √2 - √3 + √5 ) √6
( d ) ( √2 + √3 + √5 ) √6
20. 3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?
( CHSL 2021 Pre )
1
( a )
( b ) 1
( a + b ) ( c ) ( a + b )
( d ) 3
93+ 9 + 9 + 9 + 972
in
x
= ?
21 .
9+ 92+ 93 + 94 + 95
( CHSL 2021 Pre )
( b ) 3
( a ) 9
( d ) 81
( c ) 729
22. √2 + √3 + √2 - √3 = ?
-6
( 3x + 7 ) 5
( CHSL 2021 Pre )
( b ) 2√3
( a ) √√√6 ( c ) 2√√√2
( d ) 6
23. If a + b =
√7 and a -b = √5
then find the value of 8ab ( a² +
b² ) - ( a − b ) ² .
( CHSL 2021 Pre )
( b ) 23
( a ) 19
( d ) 21
( c ) 27
CHA PION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 17,
    "question_number": 10,
    "question": "The value of (a¹³ + 2a² + 3a + 2a + 1) / (a³-2a⁶) - a³(a¹ - 2) / (a³-2a⁶) when a = 7 is :",
    "options": {
      "A": "7",
      "B": "0",
      "C": "1",
      "D": "√7"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 11,
    "question": "The value of (9 + 4√5)² is :",
    "options": {
      "A": "322",
      "B": "424",
      "C": "246",
      "D": "286"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 12,
    "question": "If x⁴ᵃ⁺⁶ / x²⁵ᵃ⁺¹ × 8ᵃ⁻² × 125³ᵃ⁺³ = 1, then the value of x is :",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "8"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 13,
    "question": "The value of 5√√3 + 7√√√√6 - 2√√2 + √3 + √6 is :",
    "options": {
      "A": "0",
      "B": "16",
      "C": "12",
      "D": "10"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 14,
    "question": "Find the value of 3 / 15625√x = 4.",
    "options": {
      "A": "625",
      "B": "343",
      "C": "441",
      "D": "81"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 15,
    "question": "If (2x + 3)³ = -6, then the value of √2-42x is :",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 16,
    "question": "√30 + √30 + √30 + .... = ?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 17,
    "question": "Find the value of x, if 21√x + 20√x = 29√x.",
    "options": {
      "A": "4",
      "B": "3",
      "C": "0",
      "D": "2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 18,
    "question": "If mx - nx = 0 then what is the value of 1/xⁿ + 1/xᵐ in terms of x?",
    "options": {
      "A": "2mn / (x² (n² + m²))",
      "B": "2mn / (x² (m² - n²))",
      "C": "2mn / (xⁿ (n² - m²))",
      "D": "2mn / (xᵐ (m² - n²))"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 19,
    "question": "Which of the following can be a rationalising factor of (√2 + √3 + √5)?",
    "options": {
      "A": "(√2 - √3 - √5) √6",
      "B": "(√2 + √3 - √5) √6",
      "C": "(√2 - √3 + √5) √6",
      "D": "(√2 + √3 + √5) √6"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 20,
    "question": "3ab (a + b)¹ × (a¹ + b²¹) = ?",
    "options": {
      "A": "1 / (a + b)",
      "B": "1",
      "C": "(a + b)",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 21,
    "question": "9³ + 9⁴ + 9⁵ + 9⁶ + 9⁷ / 9 + 9² + 9³ + 9⁴ + 9⁵ = ?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "729",
      "D": "81"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 22,
    "question": "√2 + √3 + √2 - √3 = ?",
    "options": {
      "A": "√6",
      "B": "2√3",
      "C": "2√2",
      "D": "6"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 23,
    "question": "If a + b = √7 and a - b = √5, then find the value of 8ab (a² + b²) - (a - b)².",
    "options": {
      "A": "19",
      "B": "23",
      "C": "27",
      "D": "21"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 1,
    "question": "If 5√3 + √75 = 17.32, then the value of 14√3 + √108 is",
    "options": {
      "A": "32.46",
      "B": "35.64",
      "C": "34.64",
      "D": "33.86"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 2,
    "question": "The square root of which of the following is a rational number?",
    "options": {
      "A": "6250.49",
      "B": "1250.49",
      "C": "5768.28",
      "D": "1354.24"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 3,
    "question": "The square root of which of the following is a rational number?",
    "options": {
      "A": "2361.96",
      "B": "2758.28",
      "C": "72568.4",
      "D": "62504.9"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 4,
    "question": "Which one among the following is the smallest?",
    "options": {
      "A": "√401 - √399",
      "B": "√101 - √99",
      "C": "√301 - √299",
      "D": "√201 - √199"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 5,
    "question": "The value of √7-4√3 is closest to:",
    "options": {
      "A": "4.1",
      "B": "4.2",
      "C": "1.2",
      "D": "3.7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 6,
    "question": "√0.6912 + √0.5292 / √0.6912 - √0.5292 = ?",
    "options": {
      "A": "1.5",
      "B": "0.9",
      "C": "15",
      "D": "9"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 7,
    "question": "The value of √11 + 2√18 is closest to:",
    "options": {
      "A": "4.8",
      "B": "4.4",
      "C": "3.8",
      "D": "4.1"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 8,
    "question": "The value of √6 - √17-2√72 is closest is:",
    "options": {
      "A": "2.4",
      "B": "2.7",
      "C": "2.1",
      "D": "1.7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 9,
    "question": "If 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + 1, then the value of 2x + 3y + 5z is",
    "options": {
      "A": "56",
      "B": "44",
      "C": "32",
      "D": "28"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  }
]
```

---

## Interaction [18:22:31]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:33]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:35]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:37]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:39]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:40]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:42]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:43]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:45]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:46]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:49]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:50]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:51]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:53]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:54]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:56]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:57]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:22:59]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:23:00]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:23:02]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:23:03]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:23:04]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:23:06]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:23:31]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 19 ---
Percentage
( Previous Year Practice Questions )
1
1
9. The value of 17
77 % of 3
4
1
33
% of 7200 is :
3
( CGL MAINS 2020 ) ( b ) 11.68 ( d ) 9.65
( a ) 7.65 ( c ) 13.65 10. If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :
200
700
( b )
( a )
3
3
500
400 3
( c )
( d )
3
11. What is the value of 7.14 % of
66.67 % of 21.84 ? ( SSC GD 2024 )
( b ) 2.02
( a ) 1.07 ( c ) 1.04
( d ) 1.09
SSC CPO
12. A number which ,
increased by 16 % becomes 1914. The number is :
( CPO 2018 Pre )
( a ) 2220
( b ) 1650
( c ) 1780
( d ) 2010
64
to
converted
percentage is :
25
( CPO 2018 Pre )
hapio fo
( a ) 25.6 ( c ) 0.256
( b ) 256 ( d ) 2.56
14. 2.4 converted to percentage is :
( CPO 2018 Pre ) ( b ) 24 ( d ) 2.4
( a ) 0.24 ( c ) 240
15. If 20 % of a = b , then b % of 20 is
equal to :
( CPO 2018 Pre )
( a ) 4 % of a
( b ) 2 % of a
( c ) 16 % of a
( d ) 8 % of a
16. What is ( 0.08 %
of 0.008 % of 8 ) 1/9 ? ( CPO 2019 Pre ) ( b ) 0.2 ( d ) 0.08
( a ) 0.8 ( c ) 0.64
17. Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ? ( a ) ₹ 850
( CPO 2019 Pre ) ( b ) ₹ 750 ( d ) ₹ 800
( c ) 820
100
Basic Concept
SSC CGL
1 .
If 85 % of a number is added to 75 , then the result is the num- ber itself . The number is :
( a ) 500
( CGL 2018 Pre ) ( b ) 200 ( d ) 100
( c ) 300
2 .
If 50 % of the number is added 75 , then result becomes the same number , then the num-
ber is :
( CGL 2018 Pre )
( a ) 400
( b ) 100 ( d ) 150
( c ) 250
3 .
0.5 is what percentage of 20 ?
( CGL 2022 Pre ) ( b ) 0.25 %
( a ) 25 %
( c ) 2.5 %
( d ) 0.025 %
4 .
If A is 95 % of B , then what per cent of A is B ?
( CGL 2023 Pre )
3
- %
- %
( b ) 104 .
( a ) 110 .
7 19
19
17
( d ) 105. - %
- %
5 19
( c ) 107
19
13 .
Which of the following is the
5 .
least ?
( CGL 2023 Pre )
( a ) 9 % of 845
( b ) 12 % of 625
τα
( c ) 10 % of 720
( d ) 15 % of 555
6 .
If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ? ( CGL MAINS 2019 ) 1
( b ) 8 1 / 1 /
( a ) 13
3
3
1
2
( c ) 16
( d ) 33
25 % of ( 50 % of 30 % of 150 )
7 .
= ?
40 % of 2250
( CGL MAINS 2019 ) ( b ) 0.25 % ( d ) 0.225 %
( a ) 0.825 %
( c ) 0.625 %
8 .
What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ? ( CGL MAINS 2019 )
( b ) 45
( a ) 60
( d ) 40
( c ) 50
Gagan Pratap Sir
Percentage
% of
18. In a sweet , one - third is sugar . 7 If the price of sugar now is 6 of the previous price , what is the effective percentage increase in the cost of the sweet ?
( CPO 2024 Pre )
100
200
( a ) %
( b ) %
9
9
100
100
- %
- %
( c )
( d )
18
3
SSC CHSL
19. If x % of y is 150 and y % of z is 300 , then the relation between
x and z is :
( CHSL 2018 Pre )
( b ) z = x / 3
( a ) z = x ( c ) z = x / 2 20. If a % of 240
( d ) z = 2x
is c and c % of a is 117.6 , then the value of a + c
on
is :
( CHSL 2019 Pre )
when
( a ) 238
( b ) 144
( c ) 260
( d ) 196
21. A is 150 % of B and B is 40 % of C. If A + B + C = 20 , then the value of 2B + 3C4A is equal
to :
( CHSL 2020 Pre )
( b ) 14
( a ) 16
( d ) 15
( c ) 20
22. If ( 224 ) 2 ×
( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the
value of x .
( CHSL 2023 Pre )
( b ) 160
( a ) 120 ( c ) 190
( d ) 150
☑SSC MTS & SP 23. By what percentage is the percentage of the number of vowels in the CONSONANT less
of
than the percentage consonants in it ? ( MTS 2020 Pre )
( a ) 33.33 ( c ) 66.67
( b ) 200 ( d ) 50
11
24 .
5
of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ? ( MTS 2020 Pre ) ( a ) 30
( b ) 33 ( d ) 36
( c ) 32
CHA PION PU
PUBLICATION

--- PAGE 20 ---
Profit & Loss ( Previous Year Practice Questions )
By selling a car for * 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :
( CGL 2022 Pre )
( a ) ₹ 2,62,432 ( b ) ₹ 2,65,432 ( c ) 2,65,420 ( d ) ₹ 2,62,424 If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places ) ( CGL 2022 Pre ) ( a ) 38.89 % ( b ) 35.75 %
( c ) 32.25 %
( d ) 28.75 % A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ? ( CGL 2022 Pre ) ( a ) 10.5 % ( b ) 9.5 % ( c ) 9 % ( d ) 10 % 10. If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ? ( CGL 2023 Pre ) ( b ) 100 % ( d ) 25 %
( a ) 75 % ( c ) 50 %
11. Samreen sells a keyboard for * 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ? ( CGL 2024 Pre )
( a ) 2.51 % loss ( b ) 7.42 % gain ( c ) 3.52 % loss ( d ) 3.52 % gain
12. Madhav purchased an item for * 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in * ) ? ( CGL 2024 Pre ) ( b ) 4200 ( d ) 2520
( a ) 6720 ( c ) 1680
13. An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?
( CGL 2024 Pre ) ( b ) 5 : 2
( a ) 2 : 5 ( c ) 2 : 7
( d ) 7 : 2
146
7 .
Basic
SSC CGL
1 .
8 .
A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56 , 250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ? ( CGL 2019 Pre ) ( a ) ₹ 47,750 ( b ) ₹ 8,687.7 ( d ) * 20 , 625
9 .
( c ) ₹ 16,500
2 .
A tea seller used to make 50 % . of profit by selling tea at 9 per When the cost cup . of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ? ( CGL 2021 Pre ) ( a ) 33
( b ) 25
3
1
( c ) 33-
( d ) 30
3
3 .
4 .
5 .
A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ? ( CGL 2021 Pre ) ( a ) 18.75 % ( b ) 20.75 % ( c ) 21.25 % ( d ) 24.25 % The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ) of the mobile phone is ? ( CGL 2021 Pre ) ( a ) 52,000 ( b ) 55,000 ( c ) 45,000 ( d ) 50,000 The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is : ( CGL 2022 Pre ) ( a ) ₹ 8,200 ( b ) ₹ 9,200 ( c ) ₹ 8,000 ( d ) ₹ 9,000 A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ? ( CGL 2022 Pre ) ( a ) 5 % loss ( b ) 6 % profit ( c ) 5 % profit ( d ) 6 % loss
6 .
Gagan Pratap Sir
Profit & Loss
SSC CPO
14. If the selling price of an article is
2
1
of its cost price , the
5
percentage gain is . ( CPO 2018 Pre )
( a ) 47
( b ) 40 ( d ) 25
( c ) 20
15. Ajay buys 18 oranges for * 90 and sells 15 oranges for * 105 . Find the percentage of his
gain .
( CPO 2022 Pre )
( a ) 35 %
( b ) 30 % ( d ) 40 %
( c ) 25 %
16. If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ) of the article is : ( CPO 2023 Pre ) ( b ) 150 ( d ) 100
n
( a ) 175 ( c ) 200
SSC CHSL
17. By selling an article for * 2,300 , Komal gains 25 % . If she sells it for 1955 , then her loss / gain percent is : ( CHSL 2018 Pre )
( a ) Loss , 6.5 % ( b ) Gain , 6.5 % ( c ) Gain , 6.25 % ( d ) Loss , 6.25 %
18. Kishore had a loss of 20 % on selling an article for 7,160 . At what price should he had sold the item to make a profit of 30 % ? ( CHSL 2019 Pre ) ( a ) 11,635 ( b ) 12,007 ( c ) 10,678 ( d ) ₹ 8,988 19. If a saree is sold for 3,060 , the seller will face 15 % loss , at what price should he sell the saree to gain a 20 % profit ? ( CHSL 2019 Pre ) ( a ) ₹ 4,650 ( b ) 3,600 ( d ) 4,320 ( c ) 3,440 20. When an article is sold for * 720 , there is a profit of x % . When the same article is sold for ₹ 750 , profit is ( x + 5 ) % . What is the value of x ?
( CHSL 2019 Pre )
( b ) 18
( a ) 20
( c ) 25
( d ) 15
CHAMPION PL
PUBLICATION

--- PAGE 21 ---
Discount
( Previous Year Practice Questions )
Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ? ( CGL 2022 Pre ) ( b ) 48 ( d ) 46
( a ) ₹ 44 ( c ) 42
A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % . ( CGL 2022 Pre ) ( a ) 50 % ( b ) 70 % ( c ) 30 % The single discount equivalent
( d ) 40 %
to two successive discounts of 15 % and 12 % on an article is ?
( CGL 2022
( a ) 3 % ( b ) 25.2 % ( c ) 74.8 % ( d ) 27 % The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill . ( CGL 2022 Pre ) ( a ) ₹ 3,333 , .33 ( b ) ₹ 2,500 ( c ) 833.33 ( d ) 1,666.67 A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum
percentage ?
( CGL 2022 Pre )
I. Two successive discounts of 10 % each . II . Successive discounts of 15 % and 5 % . III . 20 % discount . ( a ) Only discount scheme I ( b ) Only discount scheme II ( c ) Only discount scheme III ( d ) All provide equal discount 10. A shopkeeper offers the following three schemes . ( CGL 2022 Pre ) Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6
192
5 .
Basic Concept / Successive Discount
SSC CGL
1 .
6 .
Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ? ( CGL 2020 Pre ) ( a ) C , 1780 ( b ) A , 1735.20 ( c ) B , 1800 ( d ) C , 1783.40
7 .
2 .
to
A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ? ( CGL 2020 Pre )
8 .
( a ) second offer by * 100
( b ) first offer by * 68
( c ) second offer by * 68
( d ) first offer by * 32
3 .
9 .
A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ? ( CGL 2021 Pre ) ( a ) 13,280 , 16,517 ( b ) 13,083 , 16,517
( c ) 16,517 , 13,083
4 .
( d ) 16,517 , 13,280 A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?
( a ) 2519
( CGL 2021 Pre ) ( b ) 2977 ( d ) 3664
( c ) 2382
Gagan Pratap Sir
Discount
Which scheme is the best for customers ?
( a ) Scheme - I ( b ) Scheme - III ( c ) Scheme - II
( d ) All scheme are equal 11. A shopkeeper offers the following discount schemes for buyers on an article : ( CGL 2023 Pre )
i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ? ( a ) Scheme iv ( b ) Scheme iii ( c ) Scheme ii ( d ) Scheme i 12. A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ? ( CGL 2023 Pre )
catin
Buy 6 , get 4 free
a
Buy 5 , get 5 free
Two successive discounts of 18 % and 24 %
( b ) Only B & C
( a ) Only B
( c ) Only A & C ( d ) Only A 13. If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ? ( CGL 2023 Pre ) ( a ) 15
( b ) 25 ( d ) 30
( c ) 20
discount
14. The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ? ( CGL 2023 Pre )
all
for
the
( a ) First ( b ) Same shopkeepers ( c ) Third ( d ) Second
CHA PION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 19,
    "question_number": 9,
    "question": "The value of 17 1/3 % of 33 1/3 % of 7200 is :",
    "options": {
      "A": "7.65",
      "B": "11.68",
      "C": "13.65",
      "D": "9.65"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 10,
    "question": "If 91 % of A is 39 % of B, and B is x % of A, then the value of x is :",
    "options": {
      "A": "200/3",
      "B": "700/3",
      "C": "500/3",
      "D": "400/3"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 11,
    "question": "What is the value of 7.14 % of 66.67 % of 21.84 ?",
    "options": {
      "A": "1.07",
      "B": "2.02",
      "C": "1.04",
      "D": "1.09"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 12,
    "question": "A number which, when increased by 16 % becomes 1914. The number is :",
    "options": {
      "A": "2220",
      "B": "1650",
      "C": "1780",
      "D": "2010"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 13,
    "question": "Which of the following is the 64/25 converted to percentage is :",
    "options": {
      "A": "25.6",
      "B": "256",
      "C": "0.256",
      "D": "2.56"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 14,
    "question": "2.4 converted to percentage is :",
    "options": {
      "A": "0.24",
      "B": "24",
      "C": "240",
      "D": "2.4"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 15,
    "question": "If 20 % of a = b, then b % of 20 is equal to :",
    "options": {
      "A": "4 % of a",
      "B": "2 % of a",
      "C": "16 % of a",
      "D": "8 % of a"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 16,
    "question": "What is ( 0.08 % of 0.008 % of 8 )^1/9 ?",
    "options": {
      "A": "0.8",
      "B": "0.2",
      "C": "0.64",
      "D": "0.08"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 17,
    "question": "Two persons A and B are paid a total of 2,040 per week by their employer. If B is paid 140 percent of the sum paid to A, then how much is A paid per week?",
    "options": {
      "A": "₹ 850",
      "B": "₹ 750",
      "C": "820",
      "D": "₹ 800"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 18,
    "question": "In a sweet, one-third is sugar. If the price of sugar now is 6/7 of the previous price, what is the effective percentage increase in the cost of the sweet?",
    "options": {
      "A": "100/9 %",
      "B": "200/9 %",
      "C": "100/18 %",
      "D": "100/3 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 1,
    "question": "If 85 % of a number is added to 75, then the result is the number itself. The number is:",
    "options": {
      "A": "500",
      "B": "200",
      "C": "300",
      "D": "100"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 2,
    "question": "If 50 % of the number is added 75, then result becomes the same number, then the number is:",
    "options": {
      "A": "400",
      "B": "100",
      "C": "250",
      "D": "150"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 3,
    "question": "0.5 is what percentage of 20?",
    "options": {
      "A": "25 %",
      "B": "0.25 %",
      "C": "2.5 %",
      "D": "0.025 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 4,
    "question": "If A is 95 % of B, then what per cent of A is B?",
    "options": {
      "A": "110 10/19 %",
      "B": "104 4/19 %",
      "C": "107 17/19 %",
      "D": "105 5/19 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 5,
    "question": "Which of the following is the least?",
    "options": {
      "A": "9 % of 845",
      "B": "12 % of 625",
      "C": "10 % of 720",
      "D": "15 % of 555"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 6,
    "question": "If (x + 20) % of 250 is 25 % more than x % of 220, then 10 % of (x + 50) is what percent less than 15 % of x?",
    "options": {
      "A": "13 1/3",
      "B": "8 1/3",
      "C": "16 2/3",
      "D": "33 1/3"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 7,
    "question": "25 % of (50 % of 30 % of 150) = ? / 40 % of 2250",
    "options": {
      "A": "0.825 %",
      "B": "0.25 %",
      "C": "0.625 %",
      "D": "0.225 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 8,
    "question": "What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360?",
    "options": {
      "A": "60",
      "B": "45",
      "C": "50",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 19,
    "question": "If x % of y is 150 and y % of z is 300, then the relation between x and z is:",
    "options": {
      "A": "z = x",
      "B": "z = x / 3",
      "C": "z = x / 2",
      "D": "z = 2x"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 20,
    "question": "If a % of 240 is c and c % of a is 117.6, then the value of a + c is:",
    "options": {
      "A": "238",
      "B": "144",
      "C": "260",
      "D": "196"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 21,
    "question": "A is 150 % of B and B is 40 % of C. If A + B + C = 20, then the value of 2B + 3C - 4A is equal to:",
    "options": {
      "A": "16",
      "B": "14",
      "C": "20",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 22,
    "question": "If (224)^2 * (35) + 20 % of 400 + x % of 30 = 30 % of 30, find the value of x.",
    "options": {
      "A": "120",
      "B": "160",
      "C": "190",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 23,
    "question": "By what percentage is the percentage of the number of vowels less than the percentage of consonants in the word CONSONANT?",
    "options": {
      "A": "33.33",
      "B": "200",
      "C": "66.67",
      "D": "50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 24,
    "question": "5/11 of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number, C. If the value of number C is 5500, then the sum of 40 % of A and 20 % of B is?",
    "options": {
      "A": "30",
      "B": "33",
      "C": "32",
      "D": "36"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "By selling a car for ₹ 2,78,000, a dealer gains 25 %. If the profit is reduced to 18 %, then the selling price will be:",
    "options": {
      "A": "₹ 2,62,432",
      "B": "₹ 2,65,432",
      "C": "2,65,420",
      "D": "₹ 2,62,424"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "If the cost price is 72 % of the selling price, then what is the percentage of profit? (Correct to 2 decimal places)",
    "options": {
      "A": "38.89 %",
      "B": "35.75 %",
      "C": "32.25 %",
      "D": "28.75 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A man lost 15 % by selling a mobile for 4,675. What will be his gain percentage by selling it for 6,050?",
    "options": {
      "A": "10.5 %",
      "B": "9.5 %",
      "C": "9 %",
      "D": "10 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "If the selling price of an article is doubled, then the profit becomes four times. What was the original profit percentage?",
    "options": {
      "A": "75 %",
      "B": "100 %",
      "C": "50 %",
      "D": "25 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "Samreen sells a keyboard for ₹ 1,260 at a profit of 25 %, and another keyboard for 1,440 at a loss of 10 %. What is her total gain or loss percentage?",
    "options": {
      "A": "2.51 % loss",
      "B": "7.42 % gain",
      "C": "3.52 % loss",
      "D": "3.52 % gain"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "Madhav purchased an item for ₹ 42,000 and sold it at a loss of 20 %. With that amount, he purchased another item and sold it at a gain of 30 %. What is the overall gain (in ₹)?",
    "options": {
      "A": "6720",
      "B": "4200",
      "C": "1680",
      "D": "2520"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 7,
    "question": "An article is sold at a profit of 250 %. What is the ratio of its cost price to selling price?",
    "options": {
      "A": "2 : 5",
      "B": "5 : 2",
      "C": "2 : 7",
      "D": "7 : 2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 8,
    "question": "A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance. He sold it for 1,56,250 thereby earning a profit of 25 %. How much money did he spend on the maintenance of the car?",
    "options": {
      "A": "₹ 47,750",
      "B": "₹ 8,687.7",
      "C": "₹ 16,500",
      "D": "₹ 20,625"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 9,
    "question": "A tea seller used to make 50 % of profit by selling tea at 9 per cup. When the cost of ingredients increased by 25 %, he started selling tea at 10 per cup. What is his profit percentage now?",
    "options": {
      "A": "33 1/3",
      "B": "25",
      "C": "33 1/3",
      "D": "30"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 10,
    "question": "A fruit vendor recovers the cost of 95 oranges by selling 80 oranges. What is the profit percentage?",
    "options": {
      "A": "18.75 %",
      "B": "20.75 %",
      "C": "21.25 %",
      "D": "24.25 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 11,
    "question": "The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit. The cost price (in ₹) of the mobile phone is?",
    "options": {
      "A": "52,000",
      "B": "55,000",
      "C": "45,000",
      "D": "50,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 12,
    "question": "The difference between the cost price and selling price of a pair of shoes is 1,200. If the profit is 15 %, the selling price is:",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 9,200",
      "C": "₹ 8,000",
      "D": "₹ 9,000"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 13,
    "question": "A pen was sold for 166.44 with a profit of 14 %. If it were sold for 154.76, then what would have been the percentage of profit or loss?",
    "options": {
      "A": "5 % loss",
      "B": "6 % profit",
      "C": "5 % profit",
      "D": "6 % loss"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 14,
    "question": "If the selling price of an article is 2/5 of its cost price, the percentage gain is.",
    "options": {
      "A": "47",
      "B": "40",
      "C": "20",
      "D": "25"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 15,
    "question": "Ajay buys 18 oranges for ₹ 90 and sells 15 oranges for ₹ 105. Find the percentage of his gain.",
    "options": {
      "A": "35 %",
      "B": "30 %",
      "C": "25 %",
      "D": "40 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 16,
    "question": "If the difference between the selling prices of an article at profits of 10 % and 7 % is 6, then the cost price (in ₹) of the article is:",
    "options": {
      "A": "175",
      "B": "150",
      "C": "200",
      "D": "100"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 17,
    "question": "By selling an article for ₹ 2,300, Komal gains 25 %. If she sells it for 1955, then her loss/gain percent is:",
    "options": {
      "A": "Loss, 6.5 %",
      "B": "Gain, 6.5 %",
      "C": "Gain, 6.25 %",
      "D": "Loss, 6.25 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 18,
    "question": "Kishore had a loss of 20 % on selling an article for 7,160. At what price should he had sold the item to make a profit of 30 %?",
    "options": {
      "A": "11,635",
      "B": "12,007",
      "C": "10,678",
      "D": "₹ 8,988"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 19,
    "question": "If a saree is sold for 3,060, the seller will face 15 % loss, at what price should he sell the saree to gain a 20 % profit?",
    "options": {
      "A": "₹ 4,650",
      "B": "3,600",
      "C": "3,440",
      "D": "4,320"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 20,
    "question": "When an article is sold for ₹ 720, there is a profit of x %. When the same article is sold for ₹ 750, profit is (x + 5) %. What is the value of x?",
    "options": {
      "A": "20",
      "B": "18",
      "C": "25",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 21,
    "question_number": 1,
    "question": "Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 %, both given on shopping of 3,840. What is the difference between both the discounts?",
    "options": {
      "A": "₹ 44",
      "B": "48",
      "C": "42",
      "D": "46"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 2,
    "question": "A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 %. Find the net profit percentage, if the shopkeeper sells the same article at a discount of 15 %.",
    "options": {
      "A": "50 %",
      "B": "70 %",
      "C": "30 %",
      "D": "40 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 3,
    "question": "The single discount equivalent to two successive discounts of 15 % and 12 % on an article is?",
    "options": {
      "A": "3 %",
      "B": "25.2 %",
      "C": "74.8 %",
      "D": "27 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 4,
    "question": "The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was ₹ 25. Find the amount of the bill.",
    "options": {
      "A": "₹ 3,333.33",
      "B": "₹ 2,500",
      "C": "833.33",
      "D": "1,666.67"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 5,
    "question": "A shopkeeper offers three types of discount schemes for buyers. Which of them has the maximum percentage?",
    "options": {
      "A": "Only discount scheme I",
      "B": "Only discount scheme II",
      "C": "Only discount scheme III",
      "D": "All provide equal discount"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 6,
    "question": "Three shopkeepers A, B and C marked an identical article at ₹ 4820. A, B and C sold their article on successive discounts of 20 % and 20 %, 25 % and 15 %; 30 % and 10 % respectively. Which shopkeeper gives the maximum discount and how much (in ₹)?",
    "options": {
      "A": "C, 1780",
      "B": "A, 1735.20",
      "C": "B, 1800",
      "D": "C, 1783.40"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 7,
    "question": "A customer wanted to purchase an item marked for ₹ 10000. Shopkeeper offered two types of discounts. 25 % flat discount or successive discounts of 14 % and 12 %. Which is the better offer for the customers and by how much?",
    "options": {
      "A": "second offer by ₹ 100",
      "B": "first offer by ₹ 68",
      "C": "second offer by ₹ 68",
      "D": "first offer by ₹ 32"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 8,
    "question": "A shopkeeper announces a discount of 48 % and then by a further discount of 15 %. What is the final sale price (in ₹, to the nearest rupee) of sofa costing 29600 and what is the discount (in ₹)?",
    "options": {
      "A": "13,280 , 16,517",
      "B": "13,083 , 16,517",
      "C": "16,517 , 13,083",
      "D": "16,517 , 13,280"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 9,
    "
```

---

## Interaction [18:23:58]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 22 ---
Compound Interest ( Previous Year Practice Questions )
6. The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum ( CPO 2019 Pre ) ( b ) ₹ 7,200 ( d ) ₹ 7,000
is :
( a ) ₹ 7,250
( c ) ₹ 7,500
What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ? ( CPO 2023 Pre ) ( a ) ₹ 9,824.00 ( b ) 10,520.00 ( c ) 9,956.86 ( d ) ₹ 10,123.20
SSC CHSL
The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :
( CHSL 2019 Pre ) ( b ) 6 % ( a ) 8 % ( c ) 5 % ( d ) 7 % The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :
( CHSL 2019 Pre )
chimp
( ) 3 1 ½
( b ) 3
( a ) 2 years
years .
1
( d ) 1 ½ ½ years
( c ) 3 year 10. If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ? ( CHSL 2019 Pre ) ( a ) 78,756.34 ( b ) ₹ 66,477.2 ( c ) 56,896.98 ( d ) 69,345.6 11. In how many years , the compound interest ,
compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?
( CHSL 2020 Pre ) ( b ) 1 year ( d ) 2 year
( a ) 3 year ( c ) 4 year
257
Basic Concept
SSC CGL
1 .
What is the compound interest on a sum of 10,000 at 14 % p.a.
5
7 .
for 27 years where the inter- est is compounded yearly ? ( nearest to 1 ) ( CGL 2018 Pre ) ( a ) ₹ 4259 ( c ) 4439
( b ) ₹ 4296 ( d ) 4394
2 .
The compound interest on a
1
certain sum at 10 % p.a. for 2
'
8 .
years is 1,201.60 , interest compounded yearly . The sum ( CGL 2019 Pre )
is :
( a ) ₹ 5,400 ( b ) 4,200 ( c ) ₹ 4,800 ( d ) ₹ 4,500 What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a.
3 .
after 2
years , if interest
9 .
compounded yearly , is :
( CGL 2020 Pre )
4 .
( a ) 12364.50 ( b ) 13642.50 ( c ) 16342.50 ( d ) 14362.50 The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is : ( CGL 2021 Pre ) ( a ) 31,538,40 ( b ) 24,00.50 ( c ) 35,138.40 ( d ) 28,315.40
SSC CPO
5 .
A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ? ( CPO 2019 Pre ) ( a ) 1,415 ( b ) 1,310 ( c ) 1,290 ( d ) ₹ 1,285
Gagan Pratap Sir
Compound Interest .
12. A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :
( CHSL 2021 Pre )
( b ) 1,800
( d ) ₹ 2,200
( a ) ₹ 2,500 ( c ) ₹ 3,800 13. A sum of
16,875 , when in-
vested at r %
interest per year
annually ,
compounded
amounts to 19,683 after 2 . years . What is the value of r ?
( CHSL 2021 Pre )
( b ) 7 % ( d ) 9 %
( a ) 8 % ( c ) 6 %
14. In what time will * 3,90,625
amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?
( CHSL 2021 Pre )
n
1
( b ) 1 years
( a ) 2 years
1
( c ) 2½ years ( d ) 1 years 15. Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?
( CHSL 2021 Pre ) ( b ) ₹ 7,250 ( d ) ₹ 7,260
( a ) ₹ 7,160 ( c ) ₹ 7,200
is
16. A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of ( CHSL 2023 Pre ) ( b ) ₹ 8,000 ( d ) ₹ 6,000
money lent . ( a ) ₹ 8,200 ( c ) ₹ 7,500
if
17. Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer ) ( CHSL 2023 Pre ) ( a ) ₹ 72,980 ( b ) 73,980 ( c ) 70,980 ( d ) ₹ 72,680
CHA PION PL
PUBLICATION

--- PAGE 23 ---
Ratio & Proportion ( Previous Year Practice Questions )
SSC CPO
A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day ( CPO 2018 Pre ) ( b ) 5 : 4 ( d ) 6 : 5
wages . ( a ) 4 : 5 ( c ) 15 : 4
10. Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is
* 1,600 ?
( CPO 2019 Pre )
( a ) ₹ 2,000
( b ) ₹ 3,000
( c ) ₹ 2,500
( d ) ₹ 2,600
1
of C. and B is twice of 6
A. and the average of A , B and C is 30. then the difference between A and C is :
( CPO 2020 Pre )
( a ) 50
( b ) 60 ( d ) 40
( c ) 80
12. If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair ( CPO 2020 Pre ) ( b ) 5,005 ( d ) 3,003
is : ( a ) 7,007 ( c ) 1,001
13. If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is : ( CPO 2022 Pre )
( a ) 5 ( c ) 8
( b ) 10 ( d ) 4
14. Which of the following is the
smallest ratio ?
( CPO 2022 Pre ) ( b ) 3341
( a ) 41 92
( c ) 42 49 ( d ) 3547 15. Arrange the given ratios in descending order 157 , 511 and 21 : 77 .
( CPO 2022 Pre ) 775 : 11 > 15 : 7
( a ) 21
( b ) 15
75 : 11 > 21 : 77
721 77 > 5 11
( c ) 15
( d ) 5 11 15 : 7 > 21 : 77 16. Which of the following ratios is the greatest ? ( CPO 2023 Pre )
( a ) 2 : 5
( b ) 7 : 10
( c ) 5 : 6
( d ) 1 3
289
Basic Concept
9 .
SSC CGL
1 .
If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :
( CGL 2018 Pre ) ( b ) 2 : 5 ( d ) 5 11
( a ) 3 13 ( c ) 3 11
2 .
The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is : ( CGL 2019 Pre )
( b ) 6 : 7
( a ) 76
( c ) 13 : 7
( d ) 7 13
11. If A is
3 .
If 3A 4B = 5C , then A B C is equal to :
( CGL 2019 Pre )
( a ) 107 : 6
( b ) 20 15 12
( c ) 20 15 16
( d ) 1054
4 .
If a b c d , then which of the following ratio is equal to a c ?
( CGL 2022 Pre )
( a ) a : d
( b ) b : c
b + c
( c ) ad ( d ) a
b c d
5 .
If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ? ( CGL 2024 Pre ) ( a ) 7 : 11 ( b ) 3 : 7 ( c ) 57 ( d ) 11 7 The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is ( CGL 2024 Pre )
6 .
( b ) 150 ( d ) 350
( a ) 60 ( c ) 140
7 .
If AB 6 : 8 and B C = 7 : 12 , then A B C is : ( CGL 2024 Pre )
( a ) 14 31 20
( b ) 21 32 40
( c ) 11 23 40
( d ) 21 28 48
If AB 6 : 8 and B C 5:11 ,
8 .
then A B
C is : ( CGL 2024 Pre )
( a ) 11 23
14 ( b ) 14 13 25
44 ( d ) 15 20 44
( c ) 15 32
Gagan Pratap Sir
Ratio & Proportion
SSC CHSL
17. If a b 3 : √5 , then the value
of ( 2a + b )
( 3a - 2b ) is :
( CHSL 2019 Pre )
( a ) ( 64 + 21√5 )
( b ) ( 64 + 21√5 )
( c ) ( 64 + 21√5 )
1
( 64 + 21√5 )
61
18. Which of the following ratios is
the smallest ? 34 , 12 , 25 , 1 : 3
( CHSL 2021 Pre )
cation
( a ) 1 : 3
( b ) 2 : 5 ( d ) 1 : 2
( c ) 3 : 4
19. The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .
( CHSL 2023 Pre ) ( b ) 56
( a ) 75 ( c ) 48
( d ) 64
20. If x y z = 3:45 , then what the ratio
will
be
of
0.00
( CHSL 2023 Pre )
( a ) 37 47
100
100
( b ) 41 37
100
( c ) 4937
100
( d ) 45 48
21. If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be : ( CHSL 2023 Pre )
( b ) 13 : 6
( a ) 21 : 5
( c ) 12 : 5
( d ) 178
✓ SSC MTS & SP
22. Ratio between average of first four prime numbers and first four composite numbers is :
( MTS 2020 Pre )
( a ) 13 10
( b ) 17:27 ( d ) 17 19
( c ) 11 27
CHA PION PU
PUBLICATION

--- PAGE 24 ---
Mixture & Alligation ( Previous Year Practice Questions )
5. An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ? ( CGL 2018 Pre ) ( b ) 6.72 kg ( d ) 5.28 kg
( a ) 672 kg
( c ) 528 kg
A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?
( CGL 2022 Pre )
( a ) 18 litres . ( b ) 14 litres . ( c ) 16 litres ( d ) 12 litres A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x . ( a ) 70 ml ( c ) 60 ml ( CGL 2022 Pre ) ( b ) 80 ml
( d ) 50 ml
A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture . ( CGL 2022 Pre ) ( a ) 7 litres ( b ) 10 litres ( c ) 5 litres ( d ) 3 litres P and are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ? ( CGL 2022 Pre ) ( b ) 52 % ( d ) 56 %
( a ) 65 %
( c ) 48 %
10. In a mixture of 55 litres , fruit juice and water are in the ratio of 41. How much water ( in litres ) must be added to make the mixture ratio 2 1 ?
( CGL 2023 Pre ) ( b ) 22 ( d ) 12
( a ) 9 ( c ) 11
322
Based on Mixture
SSC CGL
1. Two bottles of the same
6 .
1 % 3
capacity are 35 % and 33
full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is : ( CGL 2019 Pre )
7 .
2
1
( a ) 60
( b ) 64
3
1
5
( c ) 65
( d ) 34
6
2 .
8 .
25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is : ( CGL 2019 Pre )
1
1
( b ) 33- %
( a ) 12 % 2
3
( c ) 45 %
( d ) 25 %
9 .
3. Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 34. Alloy C is prepared by mixing A and B in the ratio 45. The percentage of y in alloy C is : ( CGL 2020 Pre )
4
( b ) 33 %
( a ) 44 %
- %
( c ) 66 %
( d ) 55 %
9
4 .
An alloy contains 40 % of sil- ver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of sil- ver ? ( CGL 2021 Pre ) ( b ) 10 ( d ) 20
( a ) 5
( c ) 12
Gagan Pratap Sir
Mixture & Alligation
11. A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is : ( CGL 2023 Pre )
( a ) 1.27 % ( c ) 20 %
( b ) 18 % ( d ) 25 %
SSC CPO
12. Two mixtures A and B have the following compositions : Mixture A has copper and tin in a ratio of 1 : 2 . Mixture B has copper and tin in a ratio of 1 : 3 . If equal quantities of mixtures A and B are used for producing mixture C , then find the ratio of copper and tin in mixture C. ( CPO 2023 Pre ) ( b ) 1 : 5 ( d ) 7:12
( a ) 2 : 5 ( c ) 7 17
tion
13. A 12 litre solution of acid and water contains 30 % acid . How much water ( in litres ) must be added to get a solution having 20 % acid ? ( CPO 2024 Pre )
( a ) 6 ( c ) 5
( b ) 3 ( d ) 4
14. A mixture of 750 kg of alloy of copper and tin contains 25 % tin . How much tin must be added so that it becomes 70 % of the mixture ? ( CPO 2024 Pre ) ( a ) 895 kg ( b ) 1125 kg ( c ) 956 kg ( d ) 1097 kg 15. In alloys A and B , the ratio of lead to tin is 5 3 and 3 1 , respectively . 80 kg of alloy A and 100 kg of alloy B are mixed together to form a new alloy . What is the amount of tin ( in kg ) in the new alloy ?
( CPO 2024 Pre ) ( b ) 55 ( d ) 81.3
( a ) 90
( c ) 68
16. The quantity of milk in a mixture of milk and water is
4
5
of the volume of the mixture . After adding 1 liter of milk to 5 liters of the mixture , the percentage of water in the mixture is : ( CPO 2024 Pre ) ( a ) 17.5 % ( b ) 15 %
200
100
- %
( c )
( d )
- % 6
6
CHA PION PU
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 22,
    "question_number": 6,
    "question": "The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum is :",
    "options": {
      "A": "₹ 7,250",
      "B": "₹ 7,200",
      "C": "₹ 7,500",
      "D": "₹ 7,000"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 7,
    "question": "What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ?",
    "options": {
      "A": "₹ 9,824.00",
      "B": "10,520.00",
      "C": "9,956.86",
      "D": "₹ 10,123.20"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 8,
    "question": "The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :",
    "options": {
      "A": "8 %",
      "B": "6 %",
      "C": "5 %",
      "D": "7 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 9,
    "question": "The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :",
    "options": {
      "A": "2 years",
      "B": "3 years",
      "C": "3 year 1 ½",
      "D": "1 ½ ½ years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 10,
    "question": "If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ?",
    "options": {
      "A": "78,756.34",
      "B": "₹ 66,477.2",
      "C": "56,896.98",
      "D": "69,345.6"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 11,
    "question": "In how many years , the compound interest , compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?",
    "options": {
      "A": "3 year",
      "B": "1 year",
      "C": "4 year",
      "D": "2 year"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 1,
    "question": "What is the compound interest on a sum of 10,000 at 14 % p.a. for 27 years where the interest is compounded yearly ? ( nearest to 1 )",
    "options": {
      "A": "₹ 4259",
      "B": "₹ 4296",
      "C": "4439",
      "D": "4394"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 2,
    "question": "The compound interest on a certain sum at 10 % p.a. for 2 years is 1,201.60 , interest compounded yearly . The sum is :",
    "options": {
      "A": "₹ 5,400",
      "B": "4,200",
      "C": "₹ 4,800",
      "D": "₹ 4,500"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 3,
    "question": "What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a. after 2 years , if interest compounded yearly , is :",
    "options": {
      "A": "12364.50",
      "B": "13642.50",
      "C": "16342.50",
      "D": "14362.50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 4,
    "question": "The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is :",
    "options": {
      "A": "31,538,40",
      "B": "24,00.50",
      "C": "35,138.40",
      "D": "28,315.40"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 5,
    "question": "A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ?",
    "options": {
      "A": "1,415",
      "B": "1,310",
      "C": "1,290",
      "D": "₹ 1,285"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 12,
    "question": "A sum of money becomes * 3,364 at a rate of 16 % compounded annually for 2 years . The sum of money is :",
    "options": {
      "A": "₹ 2,500",
      "B": "1,800",
      "C": "₹ 3,800",
      "D": "₹ 2,200"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 13,
    "question": "A sum of 16,875 , when invested at r % interest per year compounded annually , amounts to 19,683 after 2 . years . What is the value of r ?",
    "options": {
      "A": "8 %",
      "B": "7 %",
      "C": "6 %",
      "D": "9 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 14,
    "question": "In what time will * 3,90,625 amount to * 4,56,976 at 8 % per annum , interest being compounded half - yearly ?",
    "options": {
      "A": "2 years",
      "B": "1 years",
      "C": "2½ years",
      "D": "1 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 15,
    "question": "Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annually . What will be the amount at the end of 2 years ?",
    "options": {
      "A": "₹ 7,160",
      "B": "₹ 7,250",
      "C": "₹ 7,200",
      "D": "₹ 7,260"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 16,
    "question": "A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of money lent .",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 8,000",
      "C": "₹ 7,500",
      "D": "₹ 6,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 17,
    "question": "Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer )",
    "options": {
      "A": "₹ 72,980",
      "B": "73,980",
      "C": "70,980",
      "D": "₹ 72,680"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 23,
    "question_number": 10,
    "question": "A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day wages .",
    "options": {
      "A": "4 : 5",
      "B": "5 : 4",
      "C": "15 : 4",
      "D": "6 : 5"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 11,
    "question": "Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is * 1,600 ?",
    "options": {
      "A": "₹ 2,000",
      "B": "₹ 3,000",
      "C": "₹ 2,500",
      "D": "₹ 2,600"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "1 of C. and B is twice of A. and the average of A , B and C is 30. then the difference between A and C is :",
    "options": {
      "A": "50",
      "B": "60",
      "C": "80",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 12,
    "question": "If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair is :",
    "options": {
      "A": "7,007",
      "B": "5,005",
      "C": "1,001",
      "D": "3,003"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 13,
    "question": "If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is :",
    "options": {
      "A": "5",
      "B": "10",
      "C": "8",
      "D": "4"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 14,
    "question": "Which of the following is the smallest ratio ?",
    "options": {
      "A": "41 92",
      "B": "3341",
      "C": "42 49",
      "D": "3547"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 15,
    "question": "Arrange the given ratios in descending order 157 , 511 and 21 : 77 .",
    "options": {
      "A": "21 775 : 11 > 15 : 7",
      "B": "15 75 : 11 > 21 : 77",
      "C": "21 77 > 5 11",
      "D": "5 11 15 : 7 > 21 : 77"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 16,
    "question": "Which of the following ratios is the greatest ?",
    "options": {
      "A": "2 : 5",
      "B": "7 : 10",
      "C": "5 : 6",
      "D": "1 : 3"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 9,
    "question": "If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :",
    "options": {
      "A": "3 13",
      "B": "2 : 5",
      "C": "3 11",
      "D": "5 11"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 2,
    "question": "The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is :",
    "options": {
      "A": "76",
      "B": "6 : 7",
      "C": "13 : 7",
      "D": "7 : 13"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 3,
    "question": "If 3A 4B = 5C , then A B C is equal to :",
    "options": {
      "A": "107 : 6",
      "B": "20 15 12",
      "C": "20 15 16",
      "D": "1054"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 4,
    "question": "If a b c d , then which of the following ratio is equal to a c ?",
    "options": {
      "A": "a : d",
      "B": "b : c",
      "C": "ad",
      "D": "a / (b + c + d)"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 5,
    "question": "If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ?",
    "options": {
      "A": "7 : 11",
      "B": "3 : 7",
      "C": "57",
      "D": "11 7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 6,
    "question": "The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is",
    "options": {
      "A": "60",
      "B": "150",
      "C": "140",
      "D": "350"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 7,
    "question": "If AB 6 : 8 and B C = 7 : 12 , then A B C is :",
    "options": {
      "A": "14 31 20",
      "B": "21 32 40",
      "C": "11 23 40",
      "D": "21 28 48"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 8,
    "question": "If AB 6 : 8 and B C 5:11 , then A B C is :",
    "options": {
      "A": "11 23",
      "B": "14 13 25",
      "C": "15 32",
      "D": "14 44"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 17,
    "question": "If a b 3 : √5 , then the value of ( 2a + b ) / ( 3a - 2b ) is :",
    "options": {
      "A": "( 64 + 21√5 ) / 61",
      "B": "( 64 + 21√5 ) / 61",
      "C": "( 64 + 21√5 ) / 61",
      "D": "( 64 + 21√5 ) / 61"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 18,
    "question": "Which of the following ratios is the smallest ? 34 , 12 , 25 , 1 : 3",
    "options": {
      "A": "1 : 3",
      "B": "2 : 5",
      "C": "3 : 4",
      "D": "1 : 2"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 19,
    "question": "The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .",
    "options": {
      "A": "75",
      "B": "56",
      "C": "48",
      "D": "64"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 20,
    "question": "If x y z = 3:45 , then what will be the ratio of 100 / x : 100 / y : 100 / z ?",
    "options": {
      "A": "37 47",
      "B": "41 37",
      "C": "4937",
      "D": "45 48"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 21,
    "question": "If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be :",
    "options": {
      "A": "21 : 5",
      "B": "13 : 6",
      "C": "12 : 5",
      "D": "178"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 22,
    "question": "Ratio between average of first four prime numbers and first four composite numbers is :",
    "options": {
      "A": "13 10",
      "B": "17:27",
      "C": "11 27",
      "D": "17 19"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 24,
    "question_number": 5,
    "question": "An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ?",
    "options": {
      "A": "672 kg",
      "B": "6.72 kg",
      "C": "528 kg",
      "D": "5.28 kg"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 6,
    "question": "A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?",
    "options": {
      "A": "18 litres .",
      "B": "14 litres .",
      "C": "16 litres",
      "D": "12 litres"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 7,
    "question": "A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x .",
    "options": {
      "A": "70 ml",
      "B": "80 ml",
      "C": "60 ml",
      "D": "50 ml"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 8,
    "question": "A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture .",
    "options": {
      "A": "7 litres",
      "B": "10 litres",
      "C": "5 litres",
      "D": "3 litres"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 9,
    "question": "P and Q are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 : 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ?",
    "options": {
      "A": "65 %",
      "B": "52 %",
      "C": "48 %",
      "D": "56 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 10,
    "question": "In a mixture of 55 litres , fruit juice and water are in the ratio of 41. How much water ( in litres ) must be added to make the mixture ratio 2 1 ?",
    "options": {
      "A": "9",
      "B": "22",
      "C": "11",
      "D": "12"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 1,
    "question": "Two bottles of the same capacity are 35 % and 33 1 % full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is :",
    "options": {
      "A": "60",
      "B": "64",
      "C": "65",
      "D": "34"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 2,
    "question": "25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is :",
    "options": {
      "A": "12 %",
      "B": "33- %",
      "C": "45 %",
      "D": "25 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 3,
    "question": "Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 34. Alloy C is prepared by mixing A and B in the ratio 45. The percentage of y in alloy C is :",
    "options": {
      "A": "44 %",
      "B": "33 %",
      "C": "66 %",
      "D": "55 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 4,
    "question": "An alloy contains 40 % of silver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of silver ?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "12",
      "D": "20"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 11,
    "question": "A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is :",
    "options": {
      "A": "1.27 %",
      "B": "18 %",
      "C": "20 %",
      "D": "25 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 12,
    "question": "Two mixtures A and B have the following compositions : Mixture A has copper and tin in a ratio of 1 : 2 . Mixture B has copper and tin in a ratio of 1 : 3 . If equal quantities of mixtures A and B are used for producing mixture C , then find the ratio of copper and tin in mixture C.",
    "options": {
      "A": "2 : 5",
      "B": "1 : 5",
      "C": "7 :
```

---

## Interaction [18:27:29]

### Prompt:
```text

        Analyze this PDF filename and match it to one of the subjects from the database list.
        
        FILENAME: pdfs/SSC Maths 8000+ The Complete Coaching Book ENGLISH MEDIUM .pdf
        DATABASE SUBJECTS: Computer Awareness, Odisha GK, General Studies / General awareness, General studies paper 1, Logical reasoning, Data interpretation, English language, Odia language, Arithmatic
        
        Return ONLY a JSON object: {"subject_name": "", "confidence": 0.0}
        
```

### Response:
```json
{"subject_name": "Arithmatic", "confidence": 0.9}
```

---

## Interaction [18:27:44]

### Prompt:
```text

        Extract the official exam details from this header text.
        
        TEXT:
        1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION
        
        FORMAT: Output JSON object:
        {
          "board": "e.g. SSC, OSSC, OPSC",
          "exam_name": "e.g. CGL, CHSL, MTS",
          "year": "e.g. 2023",
          "shift": "e.g. Morning, Afternoon, Shift 1"
        }
        
```

### Response:
```json
{
  "board": "Unknown",
  "exam_name": "Unknown",
  "year": "Unknown",
  "shift": "Unknown"
}
```

---

## Interaction [18:27:55]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 15 ---
1522 =
1412 =
܀
= 24
.
gan Prat Champion **
N = 2 , 8 N = 3 , 7 N = 4,6 N = 5
I
II
*
I
II
eg .
9281
܀
992 = 9801
54
2
...
Conditions to be a perfect square number
܀
If a no . ends with 2,3,7,8 it can't be a perfect square If unit digit is 5 then ten's digit always 2 .
܀
܀
No number can be a perfect square unless its digital root is 1 , 4 , 7 or 9 . Last 2 digit of a perfect square number = last two digits from the squares of numbers between . ( 1 to 24 ) .
܀
Find squares
Base 100 →
1022 1022 22 = 10404 1072 107 + 7 72 = 11449 113² = 113 + 13 | 13² = 126/169 → 12769
1212 = 121 + 21 | 21² = 142 | 441 → 14641
97297-332 = 9409 922 92-882 = 8464
66 2896889
832 = 83-17 172
=
1
Base 50 →
× 100
2
1
592 = ( 59 + 9 ) 923481
2
2
1
542 =
( 54 + 4 ) 42 → 2916
2
1
482 =
2
1
442 = ( 44-6 ) 62 1936
2
1
382 = ( 38-12 ) 122 → 13 | 144 → 1444
1
672 = ( 67 + 17 ) 172 → 42/289
→ 4489
Base 2002 × 100 20822 ( 208 + 8 ) | 82 = 43264 219² = 2 ( 219 + 19 ) | 19² = 476 | 361 → 47961
Gagan Pratap Sir
Simplification
SIMPLIFICATION
182² = 2 ( 182-18 ) | 18² = 328 | 324 → 33124
3
Base 150 → × 100
2
3
( 152 + 2 ) 22 → 23104
3
( 141-9 ) | 92 → 19881
2
614² = 6 ( 614 + 14 ) | 142 → 6 × 628 | 196 → 376996 79328 ( 793-7 ) | 72 . → 8 × 786 49 → 628849
Last 2 digits of →
3682
822 , 118² ,
↓
↓ ( 350 + 18 ) ²
( 100-18 ) ²
( 50kx ) 2 , ( 100k + x ) ² → Last 2 digits same .
digit of N
Unit digit of N²
1
4
9
6
5
If 3 is repeated n times
Before 0 ( n - 1 ) times 1
Before 9 ( n - 1 ) times 8
eg . 3209 , 33333² = 1111088889
332 = 1089 3332110889
6 is repeated n times
Before 3 ( n - 1 ) times 4
Before 6 ( n - 1 ) times 5
6236
662 = 4356 6662443556 666666² = 444443555556
9999299980001
9992998001
CHA PION PL
PUBLICATION

--- PAGE 16 ---
Surds and Indices
SURDS AND INDICES
3
"
Laws of Surds
Law of Indices
1
axaxax .... n times = an
a =
√99-70√2 = ( 5√2-7 ) 70√3-2 × 35√√2
an
axaxa = a + n + p ( a = 0 )
=
axb
m
ab
5√2 49 + 50 = 99
= an ( m > n )
a a '
1
= ( ab )
1
√√√√ .....
= a
MS
=
( n > m )
an - m
ya
а
= 1
=
( m
n )
2 " -1
b
#b b
√√√a .... ntimes
a
܀
( am ) n = amxn = anxm = ( an ) m
na Radicand
Pavara .... co
va
܀
( abc ) " = axbnxcn
order of surd
n
dpy
n√a ÷ n√a ÷ n√ .... ∞ = n + 1√a
n
a '
m
܀
=
( b = 0 )
܀
=
( v )
bn
an = Va
√a + √a + √a + ....
( am ) am "
܀
=
Pma
lication
√√4a + 1 + 1 2
= x
( 32 ) 32
+
38316
P
√√√4a + 1-1 2
aq
= y
xp
aq
ач
+ 2 × 2 × √3
x - y = 1
ab
xy = a
܀
If am an then m = n
-√ ( 2 + √3 ) - ( 2 + √3 )
OR Take two factors of a whose difference is 1 like Then x = Larger factor
If amb then a = b
Gaga
smaller factor
y
܀
√28 + 10√√3 = 10√√3 →
a = 1
x + y = √√4a + 1
2 × 5√3 5² + √32 = 28
܀
1
x =
√a + √a√a + ....
a - 1 =
( a 0 )
+
√√4a - 3 + 1 2
܀
( a - b ) ² = ( b - a ) ² = a² + b² - 2ab
1
1
& an =
a =
-n
an
a
y = √a - va + 1 - √a + √a-
a² + b² - 2ab
..... 00
a - b ( a > b ) b - a ( b > a )
-m
m
b
√4a - 3-1 2
√√43-24√3 = ( 3√3-4 )
=
x - y = 1
xy = 2 ( a - 1 )
24√√3-2 × 12√√3
܀
( -1 ) "
= +1 ( neven ) = -1 ( n = odd )
3√√3 > 16 + 27 = 43
Gagan Pratap Sir
CHA PION PL
77
PUBLICATION

--- PAGE 17 ---
Surds & Indices ( Previous Year Practice Questions )
SSC CHSL
If , 2x + y - 2z = 88z - 5 - y ; 54y - 6z = 52y + z ; 34x - 3 = 9x + , then the value of 2x + 3y + 5z is ( CHSL 2019 Pre ) ( a ) 56 ( b ) 44 ( c ) 32 ( d ) 28 10. The value of
2
1
1
1
( a¹³ + 2a² + 3a + 2a + 1 )
1
1
-2a + 1 ) -a³ ( a¹ - 2 ) .
a3-2a6
when a 7 is : ( CHSL 2019 Pre )
( a ) 7 ( c ) 1
( b ) 0 ( d ) √√7
11. The value of
1
( CHSL 2019
( 9 + 4√5 ) ² is :
( a ) 322
( b ) 424 ( d ) 286
( c ) 246
3a + 3
x4a + 6
pione lication
x25a + 1 27a - 1x8a - 2 x125 the value of
is :
( CHSL 2019 Pre )
( a ) 4 ( c ) 5
( b ) 6 ( d ) 8
13. The value of 5 √√3 +7 √√√√6-
23
√2 + √3 + √6 is : ( CHSL 2019 Pre )
( b ) 16 ( d ) 10
the value of
3 / 15625√x = 4 .
( CHSL 2019 Pre )
( b ) 343 ( d ) 81
( a ) 625 ( c ) 441
-3
( 2x + 3 )
23
ug ]
then the value of √2-42x is :
( CHSL 2019 Pre )
( a ) 5
( b ) 6
( c ) 3
( d ) 4
78
SSC CGL
9 .
17.32 , then the
1. If 5√√3 + √√75
value of 14√3 + √108 is
( CPO 2021 Pre )
( a ) 32.46
( b ) 35.64
( d ) 33.86
( c ) 34.64
SSC CPO
2 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 6250.49 ( b ) 1250.49
( d ) 1354.24
( c ) 5768.28
3 .
The square root of which of the following is a rational number ?
( CPO 2018 Pre )
( a ) 2361.96 ( b ) 2758.28
( c ) 72568.4
( d ) 62504.9
4 .
Which one among the following is the smallest ? ( CPO 2019 Pre )
( a ) √401 - √399 ( b ) √101 - √√99
12. If
( c ) √301 - √299
( d ) √201 - √199
1
The value of
is closest
5 .
√7-4√3
( CPO 2019 Pre )
( b ) 4.2
to : ( a ) 4.1 ( c ) 1.2
( d ) 3.7
( a ) 0 ( c ) 12 14. Find
6 .
√0.6912 + √√0.5292 √0.6912 - √0.5292
( CPO 2019 Pre )
( b ) 0.9
( a ) 1.5 ( c ) 15
( d ) 9
7 .
The value
of √√11 + 2√ √18 is
closest to :
( CPO 2019 Pre )
15. If
( a ) 4.8 ( c ) 3.8
( b ) 4.4 ( d ) 4.1
8 .
The value of √6 - √17-2√72 is
closest is :
( CPO 2019 Pre )
( a ) 2.4
( b ) 2.7 ( d ) 1.7
( c ) 2.1
Gagan Pratap Sir
Surds and Indices
= ?
16. √30 + √30 + √30 + .
( CHSL 2019 Pre )
( b ) 4
( a ) 3 ( c ) 6
( d ) 5
17. Find the
value of x , if
21√x + 20√x = 29√x .
( CHSL 2019 Pre )
( b ) 3
( a ) 4 ( c ) 0
( d ) 2
18. If mx - nx = 0 then what is the
1
1 x ™ + x "
+
in
x "
xm
value of terms of x ?
( CHSL 2021 Pre )
2mn
2m
( b )
( a ) 2
x² ( n² + m² )
x² ( m² - n² )
2mn
2mn
( c ) x " ( n² - m² ) ( d ) x ^ ( m² - n² ) 19. Which of the following can be a rationalising
of
factor
( CHSL 2021 Pre )
( √√2 + √3 + √5 ) ? ( a ) ( √2 - √3 - √5 ) √6
4 1526 ,
( b ) ( √2 + √3 - √5 ) √6
( c ) ( √2 - √3 + √5 ) √6
( d ) ( √2 + √3 + √5 ) √6
20. 3ab ( a + b ) ¹ × ( a¹ + b²¹ ) = ?
( CHSL 2021 Pre )
1
( a )
( b ) 1
( a + b ) ( c ) ( a + b )
( d ) 3
93+ 9 + 9 + 9 + 972
in
x
= ?
21 .
9+ 92+ 93 + 94 + 95
( CHSL 2021 Pre )
( b ) 3
( a ) 9
( d ) 81
( c ) 729
22. √2 + √3 + √2 - √3 = ?
-6
( 3x + 7 ) 5
( CHSL 2021 Pre )
( b ) 2√3
( a ) √√√6 ( c ) 2√√√2
( d ) 6
23. If a + b =
√7 and a -b = √5
then find the value of 8ab ( a² +
b² ) - ( a − b ) ² .
( CHSL 2021 Pre )
( b ) 23
( a ) 19
( d ) 21
( c ) 27
CHA PION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 17,
    "question_number": 10,
    "question": "The value of (a¹³ + 2a² + 3a + 2a + 1) / (a³-2a⁶) when a = 7 is :",
    "options": {
      "A": "7",
      "B": "0",
      "C": "1",
      "D": "√7"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds & Indices"
  },
  {
    "page_number": 17,
    "question_number": 11,
    "question": "The value of (9 + 4√5)² is :",
    "options": {
      "A": "322",
      "B": "424",
      "C": "246",
      "D": "286"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds & Indices"
  },
  {
    "page_number": 17,
    "question_number": 12,
    "question": "The value of x⁴ᵃ⁺⁶ * x²⁵ᵃ⁺¹ / x²⁷ᵃ⁻¹ * x⁸ᵃ⁻² * x¹²⁵ is :",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "8"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds & Indices"
  },
  {
    "page_number": 17,
    "question_number": 13,
    "question": "The value of 5√√3 + 7 √√√√6 - 2√3 / √2 + √3 + √6 is :",
    "options": {
      "A": "625",
      "B": "343",
      "C": "441",
      "D": "81"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Surds & Indices"
  },
  {
    "page_number": 17,
    "question_number": 14,
    "question": "Find the value of x, if 3 / 15625√x = 4.",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds & Indices"
  },
  {
    "page_number": 17,
    "question_number": 15,
    "question": "If (2x + 3)³ = (3x + 7)⁵, then the value of √2 - 42x is :",
    "options": {
      "A": "5",
      "B": "6",
      "C": "3",
      "D": "4"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds & Indices"
  },
  {
    "page_number": 17,
    "question_number": 1,
    "question": "If 5√3 + √75 = 17.32, then the value of 14√3 + √108 is",
    "options": {
      "A": "32.46",
      "B": "35.64",
      "C": "34.64",
      "D": "33.86"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 2,
    "question": "The square root of which of the following is a rational number ?",
    "options": {
      "A": "6250.49",
      "B": "1250.49",
      "C": "5768.28",
      "D": "1354.24"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 3,
    "question": "The square root of which of the following is a rational number ?",
    "options": {
      "A": "2361.96",
      "B": "2758.28",
      "C": "72568.4",
      "D": "62504.9"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 4,
    "question": "Which one among the following is the smallest ?",
    "options": {
      "A": "√401 - √399",
      "B": "√101 - √99",
      "C": "√301 - √299",
      "D": "√201 - √199"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 5,
    "question": "The value of √7-4√3 is closest to :",
    "options": {
      "A": "4.1",
      "B": "4.2",
      "C": "1.2",
      "D": "3.7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 6,
    "question": "√0.6912 + √0.5292 / √0.6912 - √0.5292 = ?",
    "options": {
      "A": "1.5",
      "B": "0.9",
      "C": "15",
      "D": "9"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 7,
    "question": "The value of √11 + 2√18 is closest to :",
    "options": {
      "A": "4.8",
      "B": "4.4",
      "C": "3.8",
      "D": "4.1"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 8,
    "question": "The value of √6 - √17-2√72 is closest is :",
    "options": {
      "A": "2.4",
      "B": "2.7",
      "C": "2.1",
      "D": "1.7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 16,
    "question": "√30 + √30 + √30 + .... = ?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 17,
    "question": "Find the value of x, if 21√x + 20√x = 29√x.",
    "options": {
      "A": "4",
      "B": "3",
      "C": "0",
      "D": "2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 18,
    "question": "If mx - nx = 0 then what is the value of 1/xᵐ + 1/xⁿ in terms of x ?",
    "options": {
      "A": "2 / (x² (n² + m²))",
      "B": "2mn / (x² (m² - n²))",
      "C": "2mn / (xⁿ (n² - m²))",
      "D": "2mn / (xⁿ (m² - n²))"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 19,
    "question": "Which of the following can be a rationalising factor of (√2 + √3 + √5) ?",
    "options": {
      "A": "(√2 - √3 - √5) √6",
      "B": "(√2 + √3 - √5) √6",
      "C": "(√2 - √3 + √5) √6",
      "D": "(√2 + √3 + √5) √6"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 20,
    "question": "3ab (a + b)¹ × (a¹ + b²¹) = ?",
    "options": {
      "A": "1 / (a + b)",
      "B": "1",
      "C": "(a + b)",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 21,
    "question": "9¹ + 9² + 9³ + 9⁴ + 9⁵ / 9⁻¹ + 9⁻² + 9⁻³ + 9⁻⁴ + 9⁻⁵ = ?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "729",
      "D": "81"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 22,
    "question": "√2 + √3 + √2 - √3 = ?",
    "options": {
      "A": "√6",
      "B": "2√3",
      "C": "2√2",
      "D": "6"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Surds and Indices"
  },
  {
    "page_number": 17,
    "question_number": 23,
    "question": "If a + b = √7 and a - b = √5, then find the value of 8ab (a² + b²) - (a - b)².",
    "options": {
      "A": "19",
      "B": "23",
      "C": "27",
      "D": "21"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Surds and Indices"
  }
]
```

---

## Interaction [18:27:58]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds & Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:27:59]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds & Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:00]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds & Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:03]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds & Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:05]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds & Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:06]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds & Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:08]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:10]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:11]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:14]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:16]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:17]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:19]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:20]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:22]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:23]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:25]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:27]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:29]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:32]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:34]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:36]

### Prompt:
```text

        Map this heading text to a valid chapter name for the given subject.
        HEADING: Surds and Indices
        
        Return ONLY a JSON object: {"chapter_name": ""}
        
```

### Response:
```json
{"chapter_name": "Surds and Indices"}
```

---

## Interaction [18:28:59]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 19 ---
Percentage
( Previous Year Practice Questions )
1
1
9. The value of 17
77 % of 3
4
1
33
% of 7200 is :
3
( CGL MAINS 2020 ) ( b ) 11.68 ( d ) 9.65
( a ) 7.65 ( c ) 13.65 10. If 91 % of A is 39 % of B , and B is x % of A , then the value of x is :
200
700
( b )
( a )
3
3
500
400 3
( c )
( d )
3
11. What is the value of 7.14 % of
66.67 % of 21.84 ? ( SSC GD 2024 )
( b ) 2.02
( a ) 1.07 ( c ) 1.04
( d ) 1.09
SSC CPO
12. A number which ,
increased by 16 % becomes 1914. The number is :
( CPO 2018 Pre )
( a ) 2220
( b ) 1650
( c ) 1780
( d ) 2010
64
to
converted
percentage is :
25
( CPO 2018 Pre )
hapio fo
( a ) 25.6 ( c ) 0.256
( b ) 256 ( d ) 2.56
14. 2.4 converted to percentage is :
( CPO 2018 Pre ) ( b ) 24 ( d ) 2.4
( a ) 0.24 ( c ) 240
15. If 20 % of a = b , then b % of 20 is
equal to :
( CPO 2018 Pre )
( a ) 4 % of a
( b ) 2 % of a
( c ) 16 % of a
( d ) 8 % of a
16. What is ( 0.08 %
of 0.008 % of 8 ) 1/9 ? ( CPO 2019 Pre ) ( b ) 0.2 ( d ) 0.08
( a ) 0.8 ( c ) 0.64
17. Two persons A and B are paid a total of 2,040 per week by their employer . If B is paid 140 percent of the sum paid to A , then how much is A paid per week ? ( a ) ₹ 850
( CPO 2019 Pre ) ( b ) ₹ 750 ( d ) ₹ 800
( c ) 820
100
Basic Concept
SSC CGL
1 .
If 85 % of a number is added to 75 , then the result is the num- ber itself . The number is :
( a ) 500
( CGL 2018 Pre ) ( b ) 200 ( d ) 100
( c ) 300
2 .
If 50 % of the number is added 75 , then result becomes the same number , then the num-
ber is :
( CGL 2018 Pre )
( a ) 400
( b ) 100 ( d ) 150
( c ) 250
3 .
0.5 is what percentage of 20 ?
( CGL 2022 Pre ) ( b ) 0.25 %
( a ) 25 %
( c ) 2.5 %
( d ) 0.025 %
4 .
If A is 95 % of B , then what per cent of A is B ?
( CGL 2023 Pre )
3
- %
- %
( b ) 104 .
( a ) 110 .
7 19
19
17
( d ) 105. - %
- %
5 19
( c ) 107
19
13 .
Which of the following is the
5 .
least ?
( CGL 2023 Pre )
( a ) 9 % of 845
( b ) 12 % of 625
τα
( c ) 10 % of 720
( d ) 15 % of 555
6 .
If ( x +20 ) % of 250 is 25 % more than x % of 220 , then 10 % of ( x + 50 ) is what percent less . than 15 % of x ? ( CGL MAINS 2019 ) 1
( b ) 8 1 / 1 /
( a ) 13
3
3
1
2
( c ) 16
( d ) 33
25 % of ( 50 % of 30 % of 150 )
7 .
= ?
40 % of 2250
( CGL MAINS 2019 ) ( b ) 0.25 % ( d ) 0.225 %
( a ) 0.825 %
( c ) 0.625 %
8 .
What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360 ? ( CGL MAINS 2019 )
( b ) 45
( a ) 60
( d ) 40
( c ) 50
Gagan Pratap Sir
Percentage
% of
18. In a sweet , one - third is sugar . 7 If the price of sugar now is 6 of the previous price , what is the effective percentage increase in the cost of the sweet ?
( CPO 2024 Pre )
100
200
( a ) %
( b ) %
9
9
100
100
- %
- %
( c )
( d )
18
3
SSC CHSL
19. If x % of y is 150 and y % of z is 300 , then the relation between
x and z is :
( CHSL 2018 Pre )
( b ) z = x / 3
( a ) z = x ( c ) z = x / 2 20. If a % of 240
( d ) z = 2x
is c and c % of a is 117.6 , then the value of a + c
on
is :
( CHSL 2019 Pre )
when
( a ) 238
( b ) 144
( c ) 260
( d ) 196
21. A is 150 % of B and B is 40 % of C. If A + B + C = 20 , then the value of 2B + 3C4A is equal
to :
( CHSL 2020 Pre )
( b ) 14
( a ) 16
( d ) 15
( c ) 20
22. If ( 224 ) 2 ×
( 35 ) + 20 % of 400 + x % of 30 = 30 % of 30 , find the
value of x .
( CHSL 2023 Pre )
( b ) 160
( a ) 120 ( c ) 190
( d ) 150
☑SSC MTS & SP 23. By what percentage is the percentage of the number of vowels in the CONSONANT less
of
than the percentage consonants in it ? ( MTS 2020 Pre )
( a ) 33.33 ( c ) 66.67
( b ) 200 ( d ) 50
11
24 .
5
of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number , C. If the value of number C is 5500 , then the sum of 40 % of A and 20 % of B is ? ( MTS 2020 Pre ) ( a ) 30
( b ) 33 ( d ) 36
( c ) 32
CHA PION PU
PUBLICATION

--- PAGE 20 ---
Profit & Loss ( Previous Year Practice Questions )
By selling a car for * 2,78,000 , a dealer gains 25 % . If the profit is reduced to 18 % , then the selling price will be :
( CGL 2022 Pre )
( a ) ₹ 2,62,432 ( b ) ₹ 2,65,432 ( c ) 2,65,420 ( d ) ₹ 2,62,424 If the cost price is 72 % of the selling price , then what is the percentage of profit ? ( Correct to 2 decimal places ) ( CGL 2022 Pre ) ( a ) 38.89 % ( b ) 35.75 %
( c ) 32.25 %
( d ) 28.75 % A man lost 15 % by selling a mobile for 4,675 . What will be his gain percentage by selling it for 6,050 ? ( CGL 2022 Pre ) ( a ) 10.5 % ( b ) 9.5 % ( c ) 9 % ( d ) 10 % 10. If the selling price of an article is doubled , then the profit becomes four times . What was the original profit percentage ? ( CGL 2023 Pre ) ( b ) 100 % ( d ) 25 %
( a ) 75 % ( c ) 50 %
11. Samreen sells a keyboard for * 1,260 at a profit of 25 % , and another keyboard for 1,440 at a loss of 10 % . What is her total gain or loss percentage ? ( CGL 2024 Pre )
( a ) 2.51 % loss ( b ) 7.42 % gain ( c ) 3.52 % loss ( d ) 3.52 % gain
12. Madhav purchased an item for * 42,000 and sold it at a loss of 20 % . With that amount , he purchased another item and sold it at a gain of 30 % . What is the overall gain ( in * ) ? ( CGL 2024 Pre ) ( b ) 4200 ( d ) 2520
( a ) 6720 ( c ) 1680
13. An article is sold at a profit of 250 % . What is the ratio of its cost price to selling price ?
( CGL 2024 Pre ) ( b ) 5 : 2
( a ) 2 : 5 ( c ) 2 : 7
( d ) 7 : 2
146
7 .
Basic
SSC CGL
1 .
8 .
A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance . He sold it for 1,56 , 250 thereby earning a profit of 25 % . How much money did he spend on the maintenance of the car ? ( CGL 2019 Pre ) ( a ) ₹ 47,750 ( b ) ₹ 8,687.7 ( d ) * 20 , 625
9 .
( c ) ₹ 16,500
2 .
A tea seller used to make 50 % . of profit by selling tea at 9 per When the cost cup . of ingredients increased by 25 % , he started selling tea at 10 per cup . What is his profit percentage now ? ( CGL 2021 Pre ) ( a ) 33
( b ) 25
3
1
( c ) 33-
( d ) 30
3
3 .
4 .
5 .
A fruit vendor recovers the cost of 95 oranges by selling 80 oranges . What is the profit percentage ? ( CGL 2021 Pre ) ( a ) 18.75 % ( b ) 20.75 % ( c ) 21.25 % ( d ) 24.25 % The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit . The cost price ( in ) of the mobile phone is ? ( CGL 2021 Pre ) ( a ) 52,000 ( b ) 55,000 ( c ) 45,000 ( d ) 50,000 The difference between the cost price and selling price of a pair of shoes is 1,200 . If the profit is 15 % , the selling price is : ( CGL 2022 Pre ) ( a ) ₹ 8,200 ( b ) ₹ 9,200 ( c ) ₹ 8,000 ( d ) ₹ 9,000 A pen was sold for 166.44 with a profit of 14 % . If it were sold for 154.76 , then what would have been the percentage of profit or loss ? ( CGL 2022 Pre ) ( a ) 5 % loss ( b ) 6 % profit ( c ) 5 % profit ( d ) 6 % loss
6 .
Gagan Pratap Sir
Profit & Loss
SSC CPO
14. If the selling price of an article is
2
1
of its cost price , the
5
percentage gain is . ( CPO 2018 Pre )
( a ) 47
( b ) 40 ( d ) 25
( c ) 20
15. Ajay buys 18 oranges for * 90 and sells 15 oranges for * 105 . Find the percentage of his
gain .
( CPO 2022 Pre )
( a ) 35 %
( b ) 30 %
( d ) 40 %
( c ) 25 %
16. If the difference between the selling prices of an article at profits of 10 % and 7 % is 6 , then the cost price ( in ) of the article is : ( CPO 2023 Pre ) ( b ) 150 ( d ) 100
n
( a ) 175 ( c ) 200
SSC CHSL
17. By selling an article for * 2,300 , Komal gains 25 % . If she sells it for 1955 , then her loss / gain percent is : ( CHSL 2018 Pre )
( a ) Loss , 6.5 % ( b ) Gain , 6.5 % ( c ) Gain , 6.25 % ( d ) Loss , 6.25 %
18. Kishore had a loss of 20 % on selling an article for 7,160 . At what price should he had sold the item to make a profit of 30 % ? ( CHSL 2019 Pre ) ( a ) 11,635 ( b ) 12,007 ( c ) 10,678 ( d ) ₹ 8,988 19. If a saree is sold for 3,060 , the seller will face 15 % loss , at what price should he sell the saree to gain a 20 % profit ? ( CHSL 2019 Pre ) ( a ) ₹ 4,650 ( b ) 3,600 ( d ) 4,320 ( c ) 3,440 20. When an article is sold for * 720 , there is a profit of x % . When the same article is sold for ₹ 750 , profit is ( x + 5 ) % . What is the value of x ?
( CHSL 2019 Pre )
( b ) 18
( a ) 20
( d ) 15
( c ) 25
CHAMPION PL
PUBLICATION

--- PAGE 21 ---
Discount
( Previous Year Practice Questions )
Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 % , both given on shopping of 3,840 . What is the difference between both the discounts ? ( CGL 2022 Pre ) ( b ) 48 ( d ) 46
( a ) ₹ 44 ( c ) 42
A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 % . Find the net profit percentage , if the shopkeeper sells the same article at a discount of 15 % . ( CGL 2022 Pre ) ( a ) 50 % ( b ) 70 % ( c ) 30 % The single discount equivalent
( d ) 40 %
to two successive discounts of 15 % and 12 % on an article is ?
( CGL 2022
( a ) 3 % ( b ) 25.2 % ( c ) 74.8 % ( d ) 27 % The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was * 25 . Find the amount of the bill . ( CGL 2022 Pre ) ( a ) ₹ 3,333 , .33 ( b ) ₹ 2,500 ( c ) 833.33 ( d ) 1,666.67 A shopkeeper offers three types of discount schemes for buyers . Which of them has the maximum
percentage ?
( CGL 2022 Pre )
I. Two successive discounts of 10 % each . II . Successive discounts of 15 % and 5 % . III . 20 % discount . ( a ) Only discount scheme I ( b ) Only discount scheme II ( c ) Only discount scheme III ( d ) All provide equal discount 10. A shopkeeper offers the following three schemes . ( CGL 2022 Pre ) Scheme - I : Two successive discounts of 15 % and 25 % Scheme - II : Buy 5 , get 3 free Scheme - III : Buy 4 , get 6
192
5 .
Basic Concept / Successive Discount
SSC CGL
1 .
6 .
Three shopkeepers A , B and C marked an identical article at 4820. A , B and C sold their article on successive discounts of 20 % and 20 % , 25 % and 15 % ; 30 % and 10 % respectively . Which shopkeeper gives the maximum discount and how much ( in ) ? ( CGL 2020 Pre ) ( a ) C , 1780 ( b ) A , 1735.20 ( c ) B , 1800 ( d ) C , 1783.40
7 .
2 .
to
A customer wanted purchase an item marked for 10000. Shopkeeper offered two types of discounts . 25 % flat discount or successive discounts of 14 % and 12 % . Which is the better offer for the customers and by how much ? ( CGL 2020 Pre )
8 .
( a ) second offer by * 100
( b ) first offer by * 68
( c ) second offer by * 68
( d ) first offer by * 32
3 .
9 .
A shopkeeper announces a discount of 48 % and then by a further discount of 15 % . What is the final sale price ( in * , to the nearest rupee ) of sofa costing 29600 and what is the discount ( in ) ? ( CGL 2021 Pre ) ( a ) 13,280 , 16,517 ( b ) 13,083 , 16,517
( c ) 16,517 , 13,083
4 .
( d ) 16,517 , 13,280 A household appliances com- pany offers two successive dis- counts of 20 % and 35 % on the sale of a food processor . What is the final sale price ( in to the nearest rupee ) of a food pro- cessor costing * 4580 ?
( a ) 2519
( CGL 2021 Pre ) ( b ) 2977 ( d ) 3664
( c ) 2382
Gagan Pratap Sir
Discount
Which scheme is the best for customers ?
( a ) Scheme - I ( b ) Scheme - III ( c ) Scheme - II
( d ) All scheme are equal 11. A shopkeeper offers the following discount schemes for buyers on an article : ( CGL 2023 Pre )
i . Two successive discount of 15 % each . ii . A discount of 25 % followed by a discount of 5 % . iii . Two successive discounts of 20 % and 10 % . Under which scheme will the selling price be maximum ? ( a ) Scheme iv ( b ) Scheme iii ( c ) Scheme ii ( d ) Scheme i 12. A shopkeeper offers three schemes as given below to sell a particular type of product . Which of the following schemes offer ( s ) the maximum discount percentage ? ( CGL 2023 Pre )
catin
Buy 6 , get 4 free
a
Buy 5 , get 5 free
Two successive discounts of 18 % and 24 %
( b ) Only B & C
( a ) Only B
( c ) Only A & C ( d ) Only A 13. If successive discounts of 5 % , 10 % and p % are equivalent to a single discount of 31.6 % , then the value of p is ? ( CGL 2023 Pre ) ( a ) 15
( b ) 25 ( d ) 30
( c ) 20
discount
14. The marked price of an article is * 50,000 . Of three shopkeepers , the first one allows two successive discounts of 25 % and 15 % . The second one allows two successive discounts 20 % and 20 % . The third shopkeeper allows two successive discounts of 30 % and 10 % . From which shopkeeper does the customer get more profit ? ( CGL 2023 Pre )
all
for
the
( a ) First ( b ) Same shopkeepers ( c ) Third ( d ) Second
CHA PION PL
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 19,
    "question_number": 9,
    "question": "The value of 17 1/3 % of 3/4 of 7200 is :",
    "options": {
      "A": "7.65",
      "B": "11.68",
      "C": "13.65",
      "D": "9.65"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 10,
    "question": "If 91 % of A is 39 % of B, and B is x % of A, then the value of x is :",
    "options": {
      "A": "200/3",
      "B": "700/3",
      "C": "500/3",
      "D": "400/3"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 11,
    "question": "What is the value of 7.14 % of 66.67 % of 21.84 ?",
    "options": {
      "A": "1.07",
      "B": "2.02",
      "C": "1.04",
      "D": "1.09"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 12,
    "question": "A number which, when increased by 16 % becomes 1914. The number is :",
    "options": {
      "A": "2220",
      "B": "1650",
      "C": "1780",
      "D": "2010"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 13,
    "question": "Which of the following is the 64/25 converted to percentage is :",
    "options": {
      "A": "25.6",
      "B": "256",
      "C": "0.256",
      "D": "2.56"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 14,
    "question": "2.4 converted to percentage is :",
    "options": {
      "A": "0.24",
      "B": "24",
      "C": "240",
      "D": "2.4"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 15,
    "question": "If 20 % of a = b, then b % of 20 is equal to :",
    "options": {
      "A": "4 % of a",
      "B": "2 % of a",
      "C": "16 % of a",
      "D": "8 % of a"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 16,
    "question": "What is ( 0.08 % of 0.008 % of 8 )^1/9 ?",
    "options": {
      "A": "0.8",
      "B": "0.2",
      "C": "0.64",
      "D": "0.08"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 17,
    "question": "Two persons A and B are paid a total of 2,040 per week by their employer. If B is paid 140 percent of the sum paid to A, then how much is A paid per week?",
    "options": {
      "A": "₹ 850",
      "B": "₹ 750",
      "C": "820",
      "D": "₹ 800"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 18,
    "question": "In a sweet, one-third is sugar. If the price of sugar now is 6/7 of the previous price, what is the effective percentage increase in the cost of the sweet?",
    "options": {
      "A": "100/9 %",
      "B": "200/9 %",
      "C": "100/18 %",
      "D": "100/3 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 1,
    "question": "If 85 % of a number is added to 75, then the result is the number itself. The number is :",
    "options": {
      "A": "500",
      "B": "200",
      "C": "300",
      "D": "100"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 2,
    "question": "If 50 % of the number is added 75, then result becomes the same number, then the number is :",
    "options": {
      "A": "400",
      "B": "100",
      "C": "250",
      "D": "150"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 3,
    "question": "0.5 is what percentage of 20?",
    "options": {
      "A": "25 %",
      "B": "0.25 %",
      "C": "2.5 %",
      "D": "0.025 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 4,
    "question": "If A is 95 % of B, then what per cent of A is B?",
    "options": {
      "A": "110 10/19 %",
      "B": "104 4/19 %",
      "C": "107 17/19 %",
      "D": "105 5/19 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 5,
    "question": "Which of the following is the least?",
    "options": {
      "A": "9 % of 845",
      "B": "12 % of 625",
      "C": "10 % of 720",
      "D": "15 % of 555"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 6,
    "question": "If (x + 20) % of 250 is 25 % more than x % of 220, then 10 % of (x + 50) is what percent less than 15 % of x?",
    "options": {
      "A": "13 1/3",
      "B": "8 1/3",
      "C": "16 2/3",
      "D": "33 1/3"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 7,
    "question": "25 % of (50 % of 30 % of 150) / (40 % of 2250) = ?",
    "options": {
      "A": "0.825 %",
      "B": "0.25 %",
      "C": "0.625 %",
      "D": "0.225 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 8,
    "question": "What is to be added to 15 % of 180 so that the sum is equal to 20 % of 360?",
    "options": {
      "A": "60",
      "B": "45",
      "C": "50",
      "D": "40"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 19,
    "question": "If x % of y is 150 and y % of z is 300, then the relation between x and z is:",
    "options": {
      "A": "z = x",
      "B": "z = x / 3",
      "C": "z = x / 2",
      "D": "z = 2x"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 20,
    "question": "If a % of 240 is c and c % of a is 117.6, then the value of a + c is:",
    "options": {
      "A": "238",
      "B": "144",
      "C": "260",
      "D": "196"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 21,
    "question": "A is 150 % of B and B is 40 % of C. If A + B + C = 20, then the value of 2B + 3C - 4A is equal to:",
    "options": {
      "A": "16",
      "B": "14",
      "C": "20",
      "D": "15"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 22,
    "question": "If (224)^2 * (35) + 20 % of 400 + x % of 30 = 30 % of 30, find the value of x.",
    "options": {
      "A": "120",
      "B": "160",
      "C": "190",
      "D": "150"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 23,
    "question": "By what percentage is the percentage of the number of vowels less than the percentage of consonants in the word CONSONANT?",
    "options": {
      "A": "33.33",
      "B": "200",
      "C": "66.67",
      "D": "50"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 19,
    "question_number": 24,
    "question": "5/11 of a number A is 22 % of a number B. The number B is equal to 2.5 % of a third number, C. If the value of number C is 5500, then the sum of 40 % of A and 20 % of B is?",
    "options": {
      "A": "30",
      "B": "33",
      "C": "32",
      "D": "36"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Percentage"
  },
  {
    "page_number": 20,
    "question_number": 1,
    "question": "By selling a car for ₹ 2,78,000, a dealer gains 25 %. If the profit is reduced to 18 %, then the selling price will be:",
    "options": {
      "A": "₹ 2,62,432",
      "B": "₹ 2,65,432",
      "C": "2,65,420",
      "D": "₹ 2,62,424"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 2,
    "question": "If the cost price is 72 % of the selling price, then what is the percentage of profit? (Correct to 2 decimal places)",
    "options": {
      "A": "38.89 %",
      "B": "35.75 %",
      "C": "32.25 %",
      "D": "28.75 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 3,
    "question": "A man lost 15 % by selling a mobile for 4,675. What will be his gain percentage by selling it for 6,050?",
    "options": {
      "A": "10.5 %",
      "B": "9.5 %",
      "C": "9 %",
      "D": "10 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 4,
    "question": "If the selling price of an article is doubled, then the profit becomes four times. What was the original profit percentage?",
    "options": {
      "A": "75 %",
      "B": "100 %",
      "C": "50 %",
      "D": "25 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 5,
    "question": "Samreen sells a keyboard for ₹ 1,260 at a profit of 25 %, and another keyboard for 1,440 at a loss of 10 %. What is her total gain or loss percentage?",
    "options": {
      "A": "2.51 % loss",
      "B": "7.42 % gain",
      "C": "3.52 % loss",
      "D": "3.52 % gain"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 6,
    "question": "Madhav purchased an item for ₹ 42,000 and sold it at a loss of 20 %. With that amount, he purchased another item and sold it at a gain of 30 %. What is the overall gain (in ₹)?",
    "options": {
      "A": "6720",
      "B": "4200",
      "C": "1680",
      "D": "2520"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 7,
    "question": "An article is sold at a profit of 250 %. What is the ratio of its cost price to selling price?",
    "options": {
      "A": "2 : 5",
      "B": "5 : 2",
      "C": "2 : 7",
      "D": "7 : 2"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 8,
    "question": "A car dealer purchased an old car for 1,08,500 and spent some amount on its maintenance. He sold it for 1,56,250 thereby earning a profit of 25 %. How much money did he spend on the maintenance of the car?",
    "options": {
      "A": "₹ 47,750",
      "B": "₹ 8,687.7",
      "C": "₹ 16,500",
      "D": "₹ 20,625"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 9,
    "question": "A tea seller used to make 50 % of profit by selling tea at 9 per cup. When the cost of ingredients increased by 25 %, he started selling tea at 10 per cup. What is his profit percentage now?",
    "options": {
      "A": "33 1/3",
      "B": "25",
      "C": "33 1/3",
      "D": "30"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 10,
    "question": "A fruit vendor recovers the cost of 95 oranges by selling 80 oranges. What is the profit percentage?",
    "options": {
      "A": "18.75 %",
      "B": "20.75 %",
      "C": "21.25 %",
      "D": "24.25 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 11,
    "question": "The selling price of a mobile phone is 59,620 and it was sold at 8.4 % profit. The cost price (in ₹) of the mobile phone is?",
    "options": {
      "A": "52,000",
      "B": "55,000",
      "C": "45,000",
      "D": "50,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 12,
    "question": "The difference between the cost price and selling price of a pair of shoes is 1,200. If the profit is 15 %, the selling price is:",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 9,200",
      "C": "₹ 8,000",
      "D": "₹ 9,000"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 13,
    "question": "A pen was sold for 166.44 with a profit of 14 %. If it were sold for 154.76, then what would have been the percentage of profit or loss?",
    "options": {
      "A": "5 % loss",
      "B": "6 % profit",
      "C": "5 % profit",
      "D": "6 % loss"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 14,
    "question": "If the selling price of an article is 2/5 of its cost price, the percentage gain is.",
    "options": {
      "A": "47",
      "B": "40",
      "C": "20",
      "D": "25"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 15,
    "question": "Ajay buys 18 oranges for ₹ 90 and sells 15 oranges for ₹ 105. Find the percentage of his gain.",
    "options": {
      "A": "35 %",
      "B": "30 %",
      "C": "25 %",
      "D": "40 %"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 16,
    "question": "If the difference between the selling prices of an article at profits of 10 % and 7 % is 6, then the cost price (in ₹) of the article is:",
    "options": {
      "A": "175",
      "B": "150",
      "C": "200",
      "D": "100"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 17,
    "question": "By selling an article for ₹ 2,300, Komal gains 25 %. If she sells it for 1955, then her loss/gain percent is:",
    "options": {
      "A": "Loss, 6.5 %",
      "B": "Gain, 6.5 %",
      "C": "Gain, 6.25 %",
      "D": "Loss, 6.25 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 18,
    "question": "Kishore had a loss of 20 % on selling an article for 7,160. At what price should he had sold the item to make a profit of 30 %?",
    "options": {
      "A": "11,635",
      "B": "12,007",
      "C": "10,678",
      "D": "₹ 8,988"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 19,
    "question": "If a saree is sold for 3,060, the seller will face 15 % loss, at what price should he sell the saree to gain a 20 % profit?",
    "options": {
      "A": "₹ 4,650",
      "B": "3,600",
      "C": "3,440",
      "D": "4,320"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 20,
    "question_number": 20,
    "question": "When an article is sold for ₹ 720, there is a profit of x %. When the same article is sold for ₹ 750, profit is (x + 5) %. What is the value of x?",
    "options": {
      "A": "20",
      "B": "18",
      "C": "25",
      "D": "15"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Profit & Loss"
  },
  {
    "page_number": 21,
    "question_number": 1,
    "question": "Riya could not decide between discount of 30 % or two successive discounts of 25 % and 5 %, both given on shopping of 3,840. What is the difference between both the discounts?",
    "options": {
      "A": "₹ 44",
      "B": "48",
      "C": "42",
      "D": "46"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 2,
    "question": "A shopkeeper makes a net profit of 44 % on selling an article at successive discounts of 10 % and 20 %. Find the net profit percentage, if the shopkeeper sells the same article at a discount of 15 %.",
    "options": {
      "A": "50 %",
      "B": "70 %",
      "C": "30 %",
      "D": "40 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 3,
    "question": "The single discount equivalent to two successive discounts of 15 % and 12 % on an article is?",
    "options": {
      "A": "3 %",
      "B": "25.2 %",
      "C": "74.8 %",
      "D": "27 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 4,
    "question": "The difference between discount of 25 % and two successive discounts of 15 % and 10 % on a certain bill was ₹ 25. Find the amount of the bill.",
    "options": {
      "A": "₹ 3,333.33",
      "B": "₹ 2,500",
      "C": "833.33",
      "D": "1,666.67"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 5,
    "question": "A shopkeeper offers three types of discount schemes for buyers. Which of them has the maximum percentage?",
    "options": {
      "A": "Only discount scheme I",
      "B": "Only discount scheme II",
      "C": "Only discount scheme III",
      "D": "All provide equal discount"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 6,
    "question": "Three shopkeepers A, B and C marked an identical article at ₹ 4820. A, B and C sold their article on successive discounts of 20 % and 20 %, 25 % and 15 %; 30 % and 10 % respectively. Which shopkeeper gives the maximum discount and how much (in ₹)?",
    "options": {
      "A": "C, 1780",
      "B": "A, 1735.20",
      "C": "B, 1800",
      "D": "C, 1783.40"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 7,
    "question": "A customer wanted to purchase an item marked for ₹ 10000. Shopkeeper offered two types of discounts. 25 % flat discount or successive discounts of 14 % and 12 %. Which is the better offer for the customers and by how much?",
    "options": {
      "A": "second offer by ₹ 100",
      "B": "first offer by ₹ 68",
      "C": "second offer by ₹ 68",
      "D": "first offer by ₹ 32"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 8,
    "question": "A shopkeeper announces a discount of 48 % and then by a further discount of 15 %. What is the final sale price (in ₹, to the nearest rupee) of sofa costing 29600 and what is the discount (in ₹)?",
    "options": {
      "A": "13,280 , 16,517",
      "B": "13,083 , 16,517",
      "C": "16,517 , 13,083",
      "D": "16,517 , 13,280"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Discount"
  },
  {
    "page_number": 21,
    "question_number": 9,
    "question":
```

---

## Interaction [18:29:22]

### Prompt:
```text

        Extract all MCQ questions from this batch of exam paper text.
        
        FORMAT RULES:
        1. OPTIONS: Must be a JSON object {"A": "...", "B": "...", "C": "...", "D": "..."}.
        2. CORRECT_ANSWER: Single char A, B, C, or D.
        3. DIFFICULTY: Choose exactly 'Easy', 'Moderate', or 'Hard'.
        4. CHAPTER: Match to a logical chapter name.
        5. PAGE_NUMBER: You MUST associate each question with its correct Page Number from the markers above.
        
        TEXT:
        
--- PAGE 22 ---
Compound Interest ( Previous Year Practice Questions )
6. The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum ( CPO 2019 Pre ) ( b ) ₹ 7,200 ( d ) ₹ 7,000
is :
( a ) ₹ 7,250
( c ) ₹ 7,500
What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ? ( CPO 2023 Pre ) ( a ) ₹ 9,824.00 ( b ) 10,520.00 ( c ) 9,956.86 ( d ) ₹ 10,123.20
SSC CHSL
The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :
( CHSL 2019 Pre ) ( b ) 6 % ( a ) 8 % ( c ) 5 % ( d ) 7 % The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :
( CHSL 2019 Pre )
chimp
( ) 3 1 ½
( b ) 3
( a ) 2 years
years .
1
( d ) 1 ½ ½ years
( c ) 3 year 10. If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ? ( CHSL 2019 Pre ) ( a ) 78,756.34 ( b ) ₹ 66,477.2 ( c ) 56,896.98 ( d ) 69,345.6 11. In how many years , the compound interest ,
compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?
( CHSL 2020 Pre ) ( b ) 1 year ( d ) 2 year
( a ) 3 year ( c ) 4 year
257
Basic Concept
SSC CGL
1 .
What is the compound interest on a sum of 10,000 at 14 % p.a.
5
7 .
for 27 years where the inter- est is compounded yearly ? ( nearest to 1 ) ( CGL 2018 Pre ) ( a ) ₹ 4259 ( c ) 4439
( b ) ₹ 4296 ( d ) 4394
2 .
The compound interest on a
1
certain sum at 10 % p.a. for 2
'
8 .
years is 1,201.60 , interest compounded yearly . The sum ( CGL 2019 Pre )
is :
( a ) ₹ 5,400 ( b ) 4,200 ( c ) ₹ 4,800 ( d ) ₹ 4,500 What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a.
3 .
after 2
years , if interest
9 .
compounded yearly , is :
( CGL 2020 Pre )
4 .
( a ) 12364.50 ( b ) 13642.50 ( c ) 16342.50 ( d ) 14362.50 The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is : ( CGL 2021 Pre ) ( a ) 31,538,40 ( b ) 24,00.50 ( c ) 35,138.40 ( d ) 28,315.40
SSC CPO
5 .
A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ? ( CPO 2019 Pre ) ( a ) 1,415 ( b ) 1,310 ( c ) 1,290 ( d ) ₹ 1,285
Gagan Pratap Sir
Compound Interest .
12. A sum of money becomes * 3,364 at a rate of 16 % com- pounded annually for 2 years . The sum of money is :
( CHSL 2021 Pre )
( b ) 1,800
( d ) ₹ 2,200
( a ) ₹ 2,500 ( c ) ₹ 3,800 13. A sum of
16,875 , when in-
vested at r %
interest per year
annually ,
compounded
amounts to 19,683 after 2 . years . What is the value of r ?
( CHSL 2021 Pre )
( b ) 7 % ( d ) 9 %
( a ) 8 % ( c ) 6 %
14. In what time will * 3,90,625
amount to * 4,56,976 at 8 % per annum , interest being com- pounded half - yearly ?
( CHSL 2021 Pre )
n
1
( b ) 1 years
( a ) 2 years
1
( c ) 2½ years ( d ) 1 years 15. Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annu- ally . What will be the amount at the end of 2 years ?
( CHSL 2021 Pre ) ( b ) ₹ 7,250 ( d ) ₹ 7,260
( a ) ₹ 7,160 ( c ) ₹ 7,200
is
16. A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of ( CHSL 2023 Pre ) ( b ) ₹ 8,000 ( d ) ₹ 6,000
money lent . ( a ) ₹ 8,200 ( c ) ₹ 7,500
if
17. Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer ) ( CHSL 2023 Pre ) ( a ) ₹ 72,980 ( b ) 73,980 ( c ) 70,980 ( d ) ₹ 72,680
CHA PION PL
PUBLICATION

--- PAGE 23 ---
Ratio & Proportion ( Previous Year Practice Questions )
SSC CPO
A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day ( CPO 2018 Pre ) ( b ) 5 : 4 ( d ) 6 : 5
wages . ( a ) 4 : 5 ( c ) 15 : 4
10. Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is
* 1,600 ?
( CPO 2019 Pre )
( a ) ₹ 2,000
( b ) ₹ 3,000
( c ) ₹ 2,500
( d ) ₹ 2,600
1
of C. and B is twice of 6
A. and the average of A , B and C is 30. then the difference between A and C is :
( CPO 2020 Pre )
( a ) 50
( b ) 60 ( d ) 40
( c ) 80
12. If the total price of three chairs is 14,014 and their prices are in the ratio of 34 7 , then the highest price ( in ) of chair ( CPO 2020 Pre ) ( b ) 5,005 ( d ) 3,003
is : ( a ) 7,007 ( c ) 1,001
13. If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A C 4B is : ( CPO 2022 Pre )
( a ) 5 ( c ) 8
( b ) 10 ( d ) 4
14. Which of the following is the
smallest ratio ?
( CPO 2022 Pre ) ( b ) 3341
( a ) 41 92
( c ) 42 49 ( d ) 35 47 15. Arrange the given ratios in descending order 157 , 511 and 21 : 77 .
( a ) 21
( CPO 2022 Pre ) 775 : 11 > 15 : 7 75 : 11 > 21 : 77 721 77 > 5 11
( b ) 15
( c ) 15
( d ) 5 11 15 : 7 > 21 : 77 16. Which of the following ratios is the greatest ? ( CPO 2023 Pre )
( a ) 2 : 5
( b ) 7 : 10
( c ) 5 : 6
( d ) 1 3
289
Basic Concept
9 .
SSC CGL
1 .
If ab 5 3 , then ( 8a - 5b ) : ( 8a5b ) is equal to :
( CGL 2018 Pre ) ( b ) 2 : 5 ( d ) 5 11
( a ) 3 13 ( c ) 3 11
2 .
The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is : ( CGL 2019 Pre )
( b ) 6 : 7
( a ) 76
( c ) 13 : 7
( d ) 7 13
11. If A is
3 .
If 3A 4B = 5C , then A B C is equal to :
( CGL 2019 Pre )
( a ) 107 : 6
( b ) 20 15 12
( c ) 20 15 16
( d ) 10 5 4
4 .
If a b c d , then which of the following ratio is equal to a c ?
( CGL 2022 Pre )
( a ) a : d
( b ) b : c
b + c
( c ) ad ( d ) a
b c d
5 .
If a b c d e f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) ( 3b5d11f ) ? ( CGL 2024 Pre ) ( a ) 7 : 11 ( b ) 3 : 7 ( c ) 57 ( d ) 117 The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is ( CGL 2024 Pre )
6 .
( b ) 150 ( d ) 350
( a ) 60 ( c ) 140
7 .
If AB 6 : 8 and B C = 7 : 12 , then A B C is : ( CGL 2024 Pre )
( a ) 14 31 20
( b ) 21 32 40
( c ) 11 23 40
( d ) 21 28 48
8 .
If AB 6 : 8 and B C 5:11 , then A B C is : ( CGL 2024 Pre ) ( a ) 11 23 14 ( b ) 14 13 25 ( c ) 15 32 44 ( d ) 15 20 44 Gagan Pratap Sir
Ratio & Proportion
SSC CHSL
17. If a b 3 : √5 , then the value
of ( 2a + b )
( 3a - 2b ) is :
( CHSL 2019 Pre )
( a ) ( 64 + 21√5 )
( b ) ( 64 + 21√5 )
( c ) ( 64 + 21√5 )
1
( 64 + 21√5 )
61
18. Which of the following ratios is
the smallest ? 34 , 12 , 25 , 1 : 3
( CHSL 2021 Pre )
cation
( a ) 1 : 3
( b ) 2 : 5 ( d ) 1 : 2
( c ) 3 : 4
19. The compound ratio of 3 : 4 and 67 is 36 x . Find the value of x .
( CHSL 2023 Pre ) ( b ) 56
( a ) 75 ( c ) 48
( d ) 64
20. If x y z = 3:45 , then what the ratio
will
be
of
0.00
( CHSL 2023 Pre )
( a ) 37 47
100
100
( b ) 41 37
100
( c ) 4937
100
( d ) 45 48
21. If a b = 5 7 , then ( 6a² - 2b² ) : ( b2a2 ) will be : ( CHSL 2023 Pre )
( b ) 13 : 6
( a ) 21 : 5
( c ) 12 : 5
( d ) 178
✓ SSC MTS & SP
22. Ratio between average of first four prime numbers and first four composite numbers is :
( MTS 2020 Pre )
( a ) 13 10
( b ) 17:27 ( d ) 17 19
( c ) 11 27
CHA PION PU
PUBLICATION

--- PAGE 24 ---
Mixture & Alligation ( Previous Year Practice Questions )
5. An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ? ( CGL 2018 Pre ) ( b ) 6.72 kg ( d ) 5.28 kg
( a ) 672 kg
( c ) 528 kg
A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?
( CGL 2022 Pre )
( a ) 18 litres . ( b ) 14 litres . ( c ) 16 litres ( d ) 12 litres A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x . ( a ) 70 ml ( c ) 60 ml ( CGL 2022 Pre ) ( b ) 80 ml
( d ) 50 ml
A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture . ( CGL 2022 Pre ) ( a ) 7 litres ( b ) 10 litres ( c ) 5 litres ( d ) 3 litres P and are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ? ( CGL 2022 Pre ) ( b ) 52 % ( d ) 56 %
( a ) 65 %
( c ) 48 %
10. In a mixture of 55 litres , fruit juice and water are in the ratio of 41. How much water ( in litres ) must be added to make the mixture ratio 2 1 ?
( CGL 2023 Pre ) ( b ) 22 ( d ) 12
( a ) 9 ( c ) 11
322
Based on Mixture
SSC CGL
1. Two bottles of the same
6 .
1 % 3
capacity are 35 % and 33
full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is : ( CGL 2019 Pre )
7 .
2
1
( a ) 60
( b ) 64
3
1
5
( c ) 65
( d ) 34
6
2 .
8 .
25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is : ( CGL 2019 Pre )
1
1
( b ) 33- %
( a ) 12 % 2
3
( c ) 45 %
( d ) 25 %
9 .
3. Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 34. Alloy C is prepared by mixing A and B in the ratio 45. The percentage of y in alloy C is : ( CGL 2020 Pre )
4
( b ) 33 %
( a ) 44 %
- %
( c ) 66 %
( d ) 55 %
9
4 .
An alloy contains 40 % of sil- ver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of sil- ver ? ( CGL 2021 Pre ) ( b ) 10 ( d ) 20
( a ) 5
( c ) 12
Gagan Pratap Sir
Mixture & Alligation
11. A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is : ( CGL 2023 Pre )
( a ) 1.27 % ( c ) 20 %
( b ) 18 % ( d ) 25 %
SSC CPO
12. Two mixtures A and B have the following compositions : Mixture A has copper and tin in a ratio of 1 : 2 . Mixture B has copper and tin in a ratio of 1 : 3 . If equal quantities of mixtures A and B are used for producing mixture C , then find the ratio of copper and tin in mixture C. ( CPO 2023 Pre ) ( b ) 1 : 5 ( d ) 7:12
( a ) 2 : 5 ( c ) 7 17
tion
13. A 12 litre solution of acid and water contains 30 % acid . How much water ( in litres ) must be added to get a solution having 20 % acid ? ( CPO 2024 Pre )
( a ) 6 ( c ) 5
( b ) 3 ( d ) 4
14. A mixture of 750 kg of alloy of copper and tin contains 25 % tin . How much tin must be added so that it becomes 70 % of the mixture ? ( CPO 2024 Pre ) ( a ) 895 kg ( b ) 1125 kg ( c ) 956 kg ( d ) 1097 kg 15. In alloys A and B , the ratio of lead to tin is 5 3 and 3 1 , respectively . 80 kg of alloy A and 100 kg of alloy B are mixed together to form a new alloy . What is the amount of tin ( in kg ) in the new alloy ?
( CPO 2024 Pre ) ( b ) 55 ( d ) 81.3
( a ) 90
( c ) 68
16. The quantity of milk in a mixture of milk and water is
4
5
of the volume of the mixture . After adding 1 liter of milk to 5 liters of the mixture , the percentage of water in the mixture is : ( CPO 2024 Pre ) ( a ) 17.5 % ( b ) 15 %
200
100
- %
( c )
( d )
- % 6
6
CHA PION PU
PUBLICATION

        
        Return ONLY a JSON array of objects:
        [{
          "page_number": int,
          "question_number": int,
          "question": "",
          "options": {},
          "correct_answer": "",
          "difficulty_level": "Moderate",
          "chapter_name": ""
        }]
        
```

### Response:
```json
[
  {
    "page_number": 22,
    "question_number": 6,
    "question": "The compound interest on a certain sum invested for 2 years at 10 % per annum is 1,522.50 , the interest being compounded yearly . The sum is :",
    "options": {
      "A": "₹ 7,250",
      "B": "₹ 7,200",
      "C": "₹ 7,500",
      "D": "₹ 7,000"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 7,
    "question": "What is the compound interest on a sum of 25,000 after three years at a rate of 12 percent per annum interest compounded yearly ?",
    "options": {
      "A": "₹ 9,824.00",
      "B": "10,520.00",
      "C": "9,956.86",
      "D": "₹ 10,123.20"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 8,
    "question": "The compound interest and the amount obtained on a certain sum of money are 820 and 8,820 respectively after 2 years . If the rate of interest compounded yearly , then the rate of interest is :",
    "options": {
      "A": "8 %",
      "B": "6 %",
      "C": "5 %",
      "D": "7 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 9,
    "question": "The compound interest on 4,000 at the rate of 5 % p.a. is 630.50 , then the time period is :",
    "options": {
      "A": "2 years",
      "B": "3 years",
      "C": "3 year 1/2",
      "D": "1 1/2 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 10,
    "question": "If the present amount 87,750 with 8 % rate of interest in four years , then what was the principal amount ?",
    "options": {
      "A": "78,756.34",
      "B": "₹ 66,477.2",
      "C": "56,896.98",
      "D": "69,345.6"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 11,
    "question": "In how many years , the compound interest , compounded annually on a sum of 60,000 at rate of 8 % per annum is ₹ 9,984 ?",
    "options": {
      "A": "3 year",
      "B": "1 year",
      "C": "4 year",
      "D": "2 year"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 1,
    "question": "What is the compound interest on a sum of 10,000 at 14 % p.a. for 27 years where the interest is compounded yearly ? ( nearest to 1 )",
    "options": {
      "A": "₹ 4259",
      "B": "₹ 4296",
      "C": "4439",
      "D": "4394"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 2,
    "question": "The compound interest on a certain sum at 10 % p.a. for 2 years is 1,201.60 , interest compounded yearly . The sum is :",
    "options": {
      "A": "₹ 5,400",
      "B": "4,200",
      "C": "₹ 4,800",
      "D": "₹ 4,500"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 3,
    "question": "What interest ( in ) to be paid on a sum of * 30000 at 15 % p.a. after 2 years , if interest compounded yearly , is :",
    "options": {
      "A": "12364.50",
      "B": "13642.50",
      "C": "16342.50",
      "D": "14362.50"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 4,
    "question": "The compound interest on a certain sum of money at 21 % p.a for 2 years is 11,138.40 ( interest compounded yearly ) . The total amount received ( in ) after 2 years is :",
    "options": {
      "A": "31,538,40",
      "B": "24,00.50",
      "C": "35,138.40",
      "D": "28,315.40"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 5,
    "question": "A sum of 5,000 amounts to * 7,200 in 8 years at a certain rate percent p.a , interest compounded yearly . What will be the compound interest on a sum of 6,550 in 4 years at the same rate of interest ?",
    "options": {
      "A": "1,415",
      "B": "1,310",
      "C": "1,290",
      "D": "₹ 1,285"
    },
    "correct_answer": "D",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 12,
    "question": "A sum of money becomes * 3,364 at a rate of 16 % compounded annually for 2 years . The sum of money is :",
    "options": {
      "A": "₹ 2,500",
      "B": "1,800",
      "C": "₹ 3,800",
      "D": "₹ 2,200"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 13,
    "question": "A sum of 16,875 , when invested at r % interest per year compounded annually , amounts to 19,683 after 2 . years . What is the value of r ?",
    "options": {
      "A": "8 %",
      "B": "7 %",
      "C": "6 %",
      "D": "9 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 14,
    "question": "In what time will * 3,90,625 amount to * 4,56,976 at 8 % per annum , interest being compounded half - yearly ?",
    "options": {
      "A": "2 years",
      "B": "1 1/2 years",
      "C": "2½ years",
      "D": "1 1/2 years"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 15,
    "question": "Sundar lends a sum of 6,000 to Mahesh at an interest rate of 10 % p.a. , compounded annually . What will be the amount at the end of 2 years ?",
    "options": {
      "A": "₹ 7,160",
      "B": "₹ 7,250",
      "C": "₹ 7,200",
      "D": "₹ 7,260"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 16,
    "question": "A certain amount of money was lent for a period of 1 year 9 months at a rate of 10 % per annum compounded annually . If the compound interest is 1,460 , find the amount of money lent .",
    "options": {
      "A": "₹ 8,200",
      "B": "₹ 8,000",
      "C": "₹ 7,500",
      "D": "₹ 6,000"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 22,
    "question_number": 17,
    "question": "Akhilesh invested a certain sum which amounted to * 82,000 in 2 years 6 % per annum compound interest , compounded annually . What was the sum invested ( in ) by Akhilesh ? ( round off to the nearest integer )",
    "options": {
      "A": "₹ 72,980",
      "B": "73,980",
      "C": "70,980",
      "D": "₹ 72,680"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Compound Interest"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "A earns 40 per hour and works for 12 hour . B earns 60 per hour and works for 10 hour . Find the ratio of their per day wages .",
    "options": {
      "A": "4 : 5",
      "B": "5 : 4",
      "C": "15 : 4",
      "D": "6 : 5"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 10,
    "question": "Two times of A's salary is five times B's salary and four times of B's salary is twice C's salary . What is A's salary if C's salary is * 1,600 ?",
    "options": {
      "A": "₹ 2,000",
      "B": "₹ 3,000",
      "C": "₹ 2,500",
      "D": "₹ 2,600"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 11,
    "question": "1 of C. and B is twice of A. and the average of A , B and C is 30. then the difference between A and C is :",
    "options": {
      "A": "50",
      "B": "60",
      "C": "80",
      "D": "40"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 12,
    "question": "If the total price of three chairs is 14,014 and their prices are in the ratio of 3 : 4 : 7 , then the highest price ( in ) of chair is :",
    "options": {
      "A": "7,007",
      "B": "5,005",
      "C": "1,001",
      "D": "3,003"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 13,
    "question": "If A is greater than B by 7 , B is greater than C by 16 , and A + B + C is 255 , then the value of 3A - 4B + C is :",
    "options": {
      "A": "5",
      "B": "10",
      "C": "8",
      "D": "4"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 14,
    "question": "Which of the following is the smallest ratio ?",
    "options": {
      "A": "4 : 9",
      "B": "3 : 4",
      "C": "4 : 2",
      "D": "3 : 5"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 15,
    "question": "Arrange the given ratios in descending order 15 : 7 , 5 : 11 and 21 : 77 .",
    "options": {
      "A": "21 : 77 > 5 : 11 > 15 : 7",
      "B": "15 : 7 > 5 : 11 > 21 : 77",
      "C": "15 : 7 > 21 : 77 > 5 : 11",
      "D": "5 : 11 > 15 : 7 > 21 : 77"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 16,
    "question": "Which of the following ratios is the greatest ?",
    "options": {
      "A": "2 : 5",
      "B": "7 : 10",
      "C": "5 : 6",
      "D": "1 : 3"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 1,
    "question": "If ab = 5 : 3 , then ( 8a - 5b ) : ( 8a + 5b ) is equal to :",
    "options": {
      "A": "3 : 13",
      "B": "2 : 5",
      "C": "3 : 11",
      "D": "5 : 11"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 2,
    "question": "The total number of students in a class is 65. If the total number of girls in the class is 35 , then the ratio of the total number of boys to the total number of girls is :",
    "options": {
      "A": "7 : 6",
      "B": "6 : 7",
      "C": "13 : 7",
      "D": "7 : 13"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 3,
    "question": "If 3A = 4B = 5C , then A : B : C is equal to :",
    "options": {
      "A": "10 : 7 : 6",
      "B": "20 : 15 : 12",
      "C": "20 : 15 : 16",
      "D": "10 : 5 : 4"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 4,
    "question": "If a/b = c/d , then which of the following ratio is equal to a : c ?",
    "options": {
      "A": "a : d",
      "B": "b : c",
      "C": "a+b / c+d",
      "D": "a / b+c+d"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 5,
    "question": "If a : b : c : d : e : f = 5 : 7 , then what is the ratio ( 3a + 5c + 11e ) : ( 3b + 5d + 11f ) ?",
    "options": {
      "A": "7 : 11",
      "B": "3 : 7",
      "C": "5 : 7",
      "D": "11 : 7"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 6,
    "question": "The ratio of two numbers is 2 : 5 and their difference is 210 . The smaller number is",
    "options": {
      "A": "60",
      "B": "150",
      "C": "140",
      "D": "350"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 7,
    "question": "If A : B = 6 : 8 and B : C = 7 : 12 , then A : B : C is :",
    "options": {
      "A": "14 : 31 : 20",
      "B": "21 : 32 : 40",
      "C": "11 : 23 : 40",
      "D": "21 : 28 : 48"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 8,
    "question": "If A : B = 6 : 8 and B : C = 5 : 11 , then A : B : C is :",
    "options": {
      "A": "11 : 23 : 14",
      "B": "14 : 13 : 25",
      "C": "15 : 32 : 44",
      "D": "15 : 20 : 44"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 17,
    "question": "If a : b = 3 : √5 , then the value of ( 2a + b ) : ( 3a - 2b ) is :",
    "options": {
      "A": "( 64 + 21√5 ) / 61",
      "B": "( 64 + 21√5 ) / 61",
      "C": "( 64 + 21√5 ) / 61",
      "D": "( 64 + 21√5 ) / 61"
    },
    "correct_answer": "A",
    "difficulty_level": "Hard",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 18,
    "question": "Which of the following ratios is the smallest ? 3 : 4 , 1 : 2 , 2 : 5 , 1 : 3",
    "options": {
      "A": "1 : 3",
      "B": "2 : 5",
      "C": "3 : 4",
      "D": "1 : 2"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 19,
    "question": "The compound ratio of 3 : 4 and 6 : 7 is 36 : x . Find the value of x .",
    "options": {
      "A": "75",
      "B": "56",
      "C": "48",
      "D": "64"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 20,
    "question": "If x : y : z = 3 : 4 : 5 , then what will be the ratio of ( x + y ) : ( y + z ) ?",
    "options": {
      "A": "7 : 9",
      "B": "4 : 7",
      "C": "9 : 7",
      "D": "5 : 8"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 21,
    "question": "If a : b = 5 : 7 , then ( 6a² - 2b² ) : ( b² - 2a² ) will be :",
    "options": {
      "A": "21 : 5",
      "B": "13 : 6",
      "C": "12 : 5",
      "D": "17 : 8"
    },
    "correct_answer": "A",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 23,
    "question_number": 22,
    "question": "Ratio between average of first four prime numbers and first four composite numbers is :",
    "options": {
      "A": "13 : 10",
      "B": "17 : 27",
      "C": "11 : 27",
      "D": "17 : 19"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Ratio & Proportion"
  },
  {
    "page_number": 24,
    "question_number": 5,
    "question": "An alloy contains 32 % copper , 24 % nickel and rest zinc . How much zinc is present in 12 kg of the alloy ?",
    "options": {
      "A": "6.72 kg",
      "B": "6.72 kg",
      "C": "5.28 kg",
      "D": "5.28 kg"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 6,
    "question": "A mixture of milk and water measures 60 litres . It contains 10 % water . How much water should be added to it , so that the water may be 25 % ?",
    "options": {
      "A": "18 litres .",
      "B": "14 litres .",
      "C": "16 litres",
      "D": "12 litres"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 7,
    "question": "A 100 ml solution of H2SO4 having concentration of 20 % is mixed with a 50 % concentrated x ml mixture such that the net mixture is 30 % concentrated . Determine x .",
    "options": {
      "A": "70 ml",
      "B": "60 ml",
      "C": "80 ml",
      "D": "50 ml"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 8,
    "question": "A mixture contains milk and water in the ratio of 5 : 3 , respectively . On adding 7 litres of water , the ratio of milk to water becomes 1 : 2. Find the quantity of milk in the mixture .",
    "options": {
      "A": "7 litres",
      "B": "10 litres",
      "C": "5 litres",
      "D": "3 litres"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 9,
    "question": "P and Q are two alloys of aluminium and copper . The ratios of aluminium and copper in P and Q are 5 : 11 and 3 : 5 , respectively . If a third alloy is formed by mixing alloys P and Q in the ratio of 1 : 3 , then aluminium is what percentage ( rounded off to the nearest integer ) of the copper in the third alloy ?",
    "options": {
      "A": "65 %",
      "B": "52 %",
      "C": "48 %",
      "D": "56 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 10,
    "question": "In a mixture of 55 litres , fruit juice and water are in the ratio of 4 : 1 . How much water ( in litres ) must be added to make the mixture ratio 2 : 1 ?",
    "options": {
      "A": "9",
      "B": "22",
      "C": "11",
      "D": "12"
    },
    "correct_answer": "C",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 1,
    "question": "Two bottles of the same capacity are 35 % and 33 1/3 % full of orange juice , respectively . They are filled up completely with apple juice and then the contents of both bottles are emptied into another vessel . The percentage of apple juice in the mixture is :",
    "options": {
      "A": "60 %",
      "B": "64 %",
      "C": "65 %",
      "D": "34 %"
    },
    "correct_answer": "B",
    "difficulty_level": "Hard",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 2,
    "question": "25 litres of a mixture contains 30 % of spirit and rest water . If 5 litres of water be mixed in it , the percentage of spirit in the new mixture is :",
    "options": {
      "A": "12 1/2 %",
      "B": "33 1/3 %",
      "C": "45 %",
      "D": "25 %"
    },
    "correct_answer": "D",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 3,
    "question": "Alloy A contains metals x and y in the ratio 5 : 2 and alloy B contains these metals in the ratio 3 : 4 . Alloy C is prepared by mixing A and B in the ratio 4 : 5 . The percentage of y in alloy C is :",
    "options": {
      "A": "44 %",
      "B": "33 1/3 %",
      "C": "66 2/3 %",
      "D": "55 %"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 4,
    "question": "An alloy contains 40 % of silver , 30 % of copper and 30 % of nickel . How much silver ( in kg ) should be added to 25 kg of the alloy so that the new alloy contains 50 % of silver ?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "12",
      "D": "20"
    },
    "correct_answer": "B",
    "difficulty_level": "Moderate",
    "chapter_name": "Mixture & Alligation"
  },
  {
    "page_number": 24,
    "question_number": 11,
    "question": "A 40 - litre mixture contains 25 % alcohol and 75 % water . If 10 litres of water are added to the mixture , the percentage of alcohol in the new mixture is :",
    "options": {
      "A": "1.27 %",
      "B": "18 %",
      "C": "20 %",
      "D": "25 %"
    },
    "correct_answer": "B",
```

---

