# AI Conversation Log: pipeline_Arihant_Computer_Awareness_pdf_0
Model: gemini-2.5-flash-lite
Date: 2026-04-14T21:02:35.418682

## Interaction [21:02:39]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment to map it to the database.
    This segment is from approximately 0% into the book.
    
    
PRE-VALIDATED MATCHES FROM DATABASE (USE THESE IF APPLICABLE):
{
  "matched_exams": [
    {
      "id": "f773d816-8ffc-45bc-a843-c75db9a47f19",
      "name": "Computer Awareness",
      "full_name": "Computer Awareness",
      "exam_board_id": "f81eea7e-3e58-4fe6-ac6c-82682450a830"
    }
  ],
  "matched_subjects": [
    {
      "id": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
      "name": "Computer Awareness"
    },
    {
      "id": "0d3e0ab3-f9d9-4a35-9e17-4c5a6025b177",
      "name": "General Studies / General awareness",
      "description": "Polity, Economy, History, Geography, Odisha GK & Current Affairs."
    }
  ],
  "matched_boards": []
}

    AVAILABLE SUBJECTS IN DATABASE:
    - Computer Awareness (ID: 6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00)
- Odisha GK (ID: 78b5ec35-a949-4088-b223-23923f82e0cf)
- General Studies / General awareness (ID: 0d3e0ab3-f9d9-4a35-9e17-4c5a6025b177)
- General studies paper 1 (ID: cf5df30d-4878-48f3-a60f-c862e70b57e4)
- Logical reasoning (ID: ceea035c-e61b-44b1-a025-ac8ac10e27e7)
- Data interpretation (ID: 39c37bed-8596-4ce1-a8fb-40ed45ff446f)
- English language (ID: 0499cc86-c4d2-4117-aaa7-3d9b21d3847b)
- Odia language (ID: 1da2e126-4a2d-4f9b-b3d9-559c64ad126d)
- Arithmatic (ID: 7dee4ca4-f673-4fb4-b51e-ca3ee132bb35)

    INSTRUCTIONS:
    1. EXAM_BOARD: Short name (e.g. OSSC, OPSC, SSC).
    2. EXAM_NAME: Short name of the exam (e.g. CGL, RI, ASO).
    3. YEAR: The year mentioned for the exam if any.
    4. SUBJECT: Pick the MOST relevant subject name from the list above.
    5. CHAPTER: The SPECIFIC Chapter or Unit name being discussed in this block.
    6. CONFIDENCE: A score between 0 and 1.

    FORMAT: Output ONLY a JSON object.
    {
      "exam_board": "",
      "exam_name": "",
      "year": "",
      "subject": "",
      "chapter": "",
      "confidence": 0.0
    }

    CONTEXT TEXT (SEGMENT AT 0%):
    arihant
Jobscaptain
LEARN, REVISE
PRACTICE
COMPUTER
AWARENESS
Detailed Synopsis
Practice Questions
Previous Years' Exam Questions
10 Practice Sets
Useful for
IBPS, SBI (BANK PO & CLERK)
SSC, Railways & Other Exams

--- PAGE BREAK ---

CONTENTS
1. Introduction to Computer
2. Computer Architecture
1-11
12-17
3. Input and Output Devices
4. Computer Memory
18-30
31-39
5. Data Representation
40-46
6. Computer Software
47-56
7. Operating System (OS)
57-68
8. Microsoft Windows
69-76
9. Microsoft Office
77-93
10. Database Concepts
94-101
11. Data Communication and Networking
102-115
12. Internet and its Services
116-132
13. Computer Security
133-143
Infoworld Updates
144-146
Abbreviations
147-150
Glossary
151-162
Practice Sets (1-10)
163-192

--- PAGE BREAK ---

www.bankbooks.in
1
Introduction to
Computer
A computer is an electronic machine that accepts data from the user, processes the data by
performing calculations and operations on it and generates the desired output as a result. The
term computer is derived from the Latin word 'computerae' which means 'to compute'.
Generally, computer is the combination of Hardware and
Software which converts data into information. Computer
operates on set of instructions only, they cannot think as human
being.
Scanner
Monitor
Mouse
CPU
Keyboard
A Computer System
Printer
Functioning of a Computer System
Computer is responsible for performing four basic functions
1. Input Information or data that is entered into a computer
is called input. It sends data and instructions to the Central
Processing Unit (CPU).
2. Processing It is the sequence of actions taken on data to
convert it into information which is meaningful to the user. It
can be calculations, comparisons or decisions taken by the
computer.
3. Output It makes processed data available to the user.
4. Storage It stores data and programs permanently.
Terms Related to
Computer
Hardware Hardware is the
collection of physical elements
that constitute a computer
system. It is a comprehensive
term for all the physical parts of a
computer. e.g., display screens,
disks, keyboards. mouse,
printers, scanner, chips, etc.
Software It is a set of programs
and procedures. Software tells
the hardware what to do and how
to accomplish a task. e.g., web
browsers, word processors, etc.
Data Unprocessed raw facts
and figures, like numbers, text on
pieces of paper, are known as
data.
Information When data is
processed, organized, structured
or presented in a given context so
as to be useful, then it is called
information.
Instruction It is a command
given to a computer in the
computer language by the user.
Program It is a set of instructions
given to a computer in order to
perform some task.

--- PAGE BREAK ---

2
www.bankbooks.in
Computer Awareness
Intr
History of Computer Evolution
Computer is not the creation of one day, rather it took a long period for the development of modern computer.
Invention Inventor
Abacus
China
Time
16th
century
Napier's
John
1617
Bones
Napier
Pascaline

    
```

### Response:
```json
{
  "exam_board": null,
  "exam_name": null,
  "year": null,
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Introduction to Computer",
  "confidence": 0.95
}
```

---

## Interaction [21:02:50]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Introduction to Computer
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    arihant
Jobscaptain
LEARN, REVISE
PRACTICE
COMPUTER
AWARENESS
Detailed Synopsis
Practice Questions
Previous Years' Exam Questions
10 Practice Sets
Useful for
IBPS, SBI (BANK PO & CLERK)
SSC, Railways & Other Exams

--- PAGE BREAK ---

CONTENTS
1. Introduction to Computer
2. Computer Architecture
1-11
12-17
3. Input and Output Devices
4. Computer Memory
18-30
31-39
5. Data Representation
40-46
6. Computer Software
47-56
7. Operating System (OS)
57-68
8. Microsoft Windows
69-76
9. Microsoft Office
77-93
10. Database Concepts
94-101
11. Data Communication and Networking
102-115
12. Internet and its Services
116-132
13. Computer Security
133-143
Infoworld Updates
144-146
Abbreviations
147-150
Glossary
151-162
Practice Sets (1-10)
163-192

--- PAGE BREAK ---

www.bankbooks.in
1
Introduction to
Computer
A computer is an electronic machine that accepts data from the user, processes the data by
performing calculations and operations on it and generates the desired output as a result. The
term computer is derived from the Latin word 'computerae' which means 'to compute'.
Generally, computer is the combination of Hardware and
Software which converts data into information. Computer
operates on set of instructions only, they cannot think as human
being.
Scanner
Monitor
Mouse
CPU
Keyboard
A Computer System
Printer
Functioning of a Computer System
Computer is responsible for performing four basic functions
1. Input Information or data that is entered into a computer
is called input. It sends data and instructions to the Central
Processing Unit (CPU).
2. Processing It is the sequence of actions taken on data to
convert it into information which is meaningful to the user. It
can be calculations, comparisons or decisions taken by the
computer.
3. Output It makes processed data available to the user.
4. Storage It stores data and programs permanently.
Terms Related to
Computer
Hardware Hardware is the
collection of physical elements
that constitute a computer
system. It is a comprehensive
term for all the physical parts of a
computer. e.g., display screens,
disks, keyboards. mouse,
printers, scanner, chips, etc.
Software It is a set of programs
and procedures. Software tells
the hardware what to do and how
to accomplish a task. e.g., web
browsers, word processors, etc.
Data Unprocessed raw facts
and figures, like numbers, text on
pieces of paper, are known as
data.
Information When data is
processed, organized, structured
or presented in a given context so
as to be useful, then it is called
information.
Instruction It is a command
given to a computer in the
computer language by the user.
Program It is a set of instructions
given to a computer in order to
perform some task.

--- PAGE BREAK ---

2
www.bankbooks.in
Computer Awareness
Intr
History of Computer Evolution
Computer is not the creation of one day, rather it took a long period for the development of modern computer.
Invention Inventor
Abacus
China
Time
16th
century
Napier's
John
1617
Bones
Napier
Pascaline
Blaise
Pascal
1642
Characteristics
First mechanical calculating device.
• It used set of beads for representing unit.
.
A horizontal rod represent the one, tens,
hundred, etc.
Three dimensional structure.
Holding numbers 0 to 9 only.
Represent graphical structure of
calculating result.
First mechanical adding machine.
It was structured like rectangular box, with
eight disc (represent number of units).
• The term carry was introduced in this
period.
Card of
Holes for
Joseph
Jacquard
1801
.
First mechanical loom.
+
Mainly weaved a silk based pattern.
Weaving
Pattern
Analytical
Engine
Charles
Babbage
1834-71
•
Tabulating Herman
Machine
1880
Hollerith
MARK-I
Howard
Aiken
1944
ENIAC
JP Eckert
and JW
Mauchly
1950
EDSAC
John Von
Neumann
1946-52
UNIVAC
Eckert and 1951
JW
Mauchly
IBM-650
Computer
IBM
Company
1954
• Used punched card for the sequence of
operation.
To program the machine, it used
two-punchcard.
• First general-purpose computer.
•
Stored program in the form of 'pegs' also.
called barrels.
It used punched cards with round holes.
. Read one card at a time.
Consists of interlocking panels of small
glass, counters, switches and control
circuits.
Data can be entered manually.
It is a combination of twenty
accumulators.
It can also tiggered different operations.
It was first computer which provided
storage capacity.
Capable of storing instructions and data
in memory.
Also calculate table of squares and a list
of prime numbers.
• First general-purpose electronic computer
with large amount of input and output.
Performed both numeric and textual
information.
• Provided input/output units converting
alphabetical and special characters to
two-digit decimal code.
Applications
• Used for addition and subtraction
operation.
• Calculation of square roots can also be
performed.
Perform multiplication on numbers.
Technology used for calculation called
Rabdologia.
• Operation performed on the embedded
rods.
Perform addition and subtraction of two
numbers.
Mainly designed with regard to the
pressure of liquid.
Simplified the process of Textiles.
Generally used for basic arithmetic
operations.
It was a decimal machine used sign and
magnitude for representation of a
number.
It was the first electromechanical
machine, which was designed to
process the data for census in 1890.
Mainly used in the war effort during World
War-II.
Magnetic drums are used for storage.
• First electronic digital computer.
Used for weather prediction, atomic energy
calculation and other scientific uses.
First computer program was run on
machine.
Used mercury delay lines for memory and
vacuum tubes for logic.
• Used magnetic tapes as input and
output.
•
Payroll processing
Oil refinery design
Market research analysis

--- PAGE BREAK ---

nd
Introduction to Computer
Generations of Computer
A generation refers to the state of improvement in the development of system. Computers are built of Electromechanical, before generation. Each
generation of computer is characterized by a major technological development that fundamentally changed the way, computers operate.
Generation Year
Switching
Device
Storage
Device
Speed
Operating
System
Language
First
1940-56 Vacuum tubes
Magnetic
drums
333
micro
second
Batch
operating
system
Machine language
(Binary number Os
and 1s)
Second
1956-63 Transistors
Magnetic
core
10 micro
second
technology
Time-sharing
system,
Multitasking
Assembly
language, high
level language
OS
Magnetic
Third
1964-71- Integrated
core as
100
nano
seconds
Real-time
system
High level language
•
Circuits
(ICs)
primary
(FORTRAN,
COBOL) ALGOL
storage
medium
Fourth
1971-
Present
Large Scale
Semi
Integrated (LSI)
conductor
10 pico
second
circuit
memory,
Time sharing
network, GUI
interface.
PASCAL, ADA,
COBOL-74
FORTRAN IV
microprocessor
Winchester
disk
Fifth
Present Super Large
and
Scale Integrated
Beyond (SLSI) chips
Characteristic
Fastest computing device.
• Generate large amount of
heat.
• Non-portable.
• More reliable and less prone
to hardware failure.
⚫ Portable and generate less
amount of heat.
Consumed less power.
Highly sophisticated
technology required.
→ More reliable and portable.
This generation leads to
better communication and
resource sharing.
⚫ Parallel processing
Application
Used for scientific
purpose
e.g., ENIAC,
UNIVAC
Used for
commercial
production
e.g., PDP-8.
IBM-1401
Database
management
system
e.g., NCR-395,
B6500
Distributed system,
e.g., Intel 4004 chip,
Macintosh.
Artificial intelligence
• Intel core microprocessor is
implemented.
e.g., Robotics
• Enables mega chips
3

--- PAGE BREAK ---

4
www.bankbook.in
Computer Awareness
BY
Tit-Bits
Charles Babbage is called the father of computer.
Alan Turing is known as the father of modern
computer.
The First Computer architecture was introduced by
John Von Neumann in 1948.
electronic computer
was the first
EDVAC
constructed at the Moore School of Engineering
(USA).
ENIAC was the world's first successful electronic
computer which was developed by the two.
scientists namely JP Eckert and J W Mauchy. It was
the beginning of first generation computer.
Classification of Computer
Computers are mainly classified as two types
Binary number system was suggested by John von
Neumann
Microprocessor is the main concept behind fourth
generation of computer.
In 1971, Ted Hoff invented Intel 4004 chip which was
the world's first single chip microprocessor.
Transistors were invented by Bell laboratory of
and were made
America in
semiconductors like germanium and silicon.
1953
up
of
In 1958. Jack St. Clair Kilby and Robert Noyce
invented the first IC. IC was made up of silicon
material and consists of thousands of transistors on
a single chip.
Classification of Computer
Based on Size
Based on Work
Based on Purpose
Microcomputer
Minicomputer
Analog
Computer
Hybrid
Computer
General
Purpose
Special
Purpose
Mainframe
Computer
Supercomputer
Digital
Computer
Based on Size
On the basis of size, computer are categorise as
follows
1. Microcomputer
Microcomputers are the least powerful, yet the
most widely used and fastest growing type of
computers and are also called portable
computers. Microcomputer consists of three
basic categories of physical equipment i.e system
unit, input/output and memory.
Some types of microcomputer are
Desktop Computer or Personal Computer
(PC) These are small, relatively inexpensive
computers. These are based on the micro-
processor technology (Integrated Circuit).
Notebook Notebook computers, also known as
ultra book or laptop, are portable lightweight and
into most briefcases. They include
fit
rechargeable battery, so these can work anywhere.
Laptops were developed by Alan Kay.
Handheld Computers or Palmtops These are
the smallest and are designed to fit into the palm.
So, these are also known as Palmtop/PDA. They
are practical for certain functions such as phone
books and calendars. They use the for input
instead of keyboard.
pen
Tablet Computer They have key features of the
notebook computer, but it can accept input from
a pen instead of the keyboard or mouse.
Smart Phones Smart phones are cellular phones
that function both as a phone and as a small PC.
They may use a pen or may have a small
keyboard. They can be connected to the internet
wirelessly. Apple, Blackberry, Nokia are some
manufacturers of smart phones.
I

--- PAGE BREAK ---

n
h
S
f
f
e
า
า
www.bankbook.in
Introduction to Computer
2. Mainframe Computer
Mainframe computers are those having large internal
memory storage and comprehensive range of software.
Mainframe computer serves as a backbone for the entire
business world. It is considered as the heart of a network
of computers or terminals that allows a large number of
people to work at the same time. Mainframe computers
are IBM-370, IBM-S/390, UNIVAC-1110.
3. Minicomputer
Minicomputers are smaller in size, faster, cost lower than
mainframe computers. Initially, the minicomputer was
designed to carry out some specific tasks, like engineering
and Computer Aided Design (CAD) calculations. But
now, they are being used as central computer which is
called as Server. Mini computers are IBM-17, DEC
PDP-11, HP-9000, etc.
4. Supercomputer
Supercomputers are the fastest and the most expensive
machines. They have high processing speed compared to
other computers. The speed of supercomputers are
measured in FLOPS (Floating Point Operations Per
Second).
Supercomputers are used for highly calculationintensive
tasks, such as weather foresting, nuclear research,
military agencies and scientific research laboratories.
Supercomputers are most powerful, large in size and
memory, compared to all other computers.
Tit-Bits
Siddhartha was the first computer developed in India.
The world's first computer called the Z1, was invented by
Konrad Zuse.
CRAY-1 was the world's first supercomputer introduced by
Seymour R CRAY in 1976.
PARAM was the first supercomputer developed in India in
1990. It is a series of gigaflops, assembled by C-DAC in
Pune.
PARAM YUVA II is the latest machine in the series of
PARAM made by
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Computer Term Derivation",
      "statement": "The term 'computer' is derived from the Latin word 'computerae', meaning 'to compute'."
    },
    {
      "concept": "Computer Composition",
      "statement": "Generally, a computer is the combination of Hardware and Software."
    },
    {
      "concept": "Computer Operation",
      "statement": "Computers operate on a set of instructions only; they cannot think like human beings."
    },
    {
      "concept": "Computer Basic Functions",
      "statement": "A computer is responsible for performing four basic functions: Input, Processing, Output, and Storage."
    },
    {
      "concept": "Abacus",
      "statement": "The Abacus, invented in China in the 16th century, was the first mechanical calculating device."
    },
    {
      "concept": "Napier's Bones",
      "statement": "Napier's Bones, invented by John Napier in 1617, could perform multiplication on numbers."
    },
    {
      "concept": "Pascaline",
      "statement": "The Pascaline, invented by Blaise Pascal in 1642, was the first mechanical adding machine."
    },
    {
      "concept": "Jacquard Loom",
      "statement": "Joseph Jacquard's Card of Holes for Weaving in 1801 was the first mechanical loom, mainly used to weave silk patterns."
    },
    {
      "concept": "Analytical Engine",
      "statement": "Charles Babbage designed the Analytical Engine between 1834-71, which used punched cards for the sequence of operations."
    },
    {
      "concept": "Tabulating Machine",
      "statement": "Herman Hollerith's Tabulating Machine in 1880 used punched cards with round holes and was designed to process data for the 1890 census."
    },
    {
      "concept": "MARK-I",
      "statement": "Howard Aiken's MARK-I in 1944 was the first electromechanical machine, mainly used in the war effort during World War-II."
    },
    {
      "concept": "ENIAC",
      "statement": "ENIAC, developed by J.P. Eckert and J.W. Mauchly in 1950, was the first general-purpose electronic computer with large amounts of input and output."
    },
    {
      "concept": "EDSAC",
      "statement": "EDSAC, developed by John Von Neumann between 1946-52, was the first electronic digital computer and the first computer program was run on it."
    },
    {
      "concept": "UNIVAC",
      "statement": "UNIVAC, developed by Eckert and Mauchly in 1951, was used for payroll processing, oil refinery design, and market research analysis."
    },
    {
      "concept": "IBM-650",
      "statement": "The IBM-650, introduced by IBM Company in 1954, was a decimal machine used for addition and subtraction."
    },
    {
      "concept": "Generations of Computer",
      "statement": "A generation refers to the state of improvement in the development of computer systems, with each generation characterized by a major technological development."
    },
    {
      "concept": "First Generation Computers (1940-56)",
      "statement": "First generation computers used vacuum tubes for switching, magnetic drums for storage, were slow (333 microseconds), used batch operating systems, and were programmed in machine language (binary)."
    },
    {
      "concept": "Second Generation Computers (1956-63)",
      "statement": "Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking OS, and were programmed in assembly and high-level languages."
    },
    {
      "concept": "Third Generation Computers (1964-71)",
      "statement": "Third generation computers used Integrated Circuits (ICs), magnetic core for primary storage, were very fast (100 nanoseconds), used real-time systems, and were programmed in high-level languages like FORTRAN and COBOL."
    },
    {
      "concept": "Fourth Generation Computers (1971-Present)",
      "statement": "Fourth generation computers use Large Scale Integrated (LSI) circuits and microprocessors, have very high speed (10 picoseconds), use time-sharing networks and GUI interfaces, and are programmed in languages like PASCAL and ADA."
    },
    {
      "concept": "Fifth Generation Computers (Present and Beyond)",
      "statement": "Fifth generation computers use Super Large Scale Integrated (SLSI) chips, are the fastest, and are used for artificial intelligence and robotics."
    },
    {
      "concept": "Father of Computer",
      "statement": "Charles Babbage is called the father of the computer."
    },
    {
      "concept": "Father of Modern Computer",
      "statement": "Alan Turing is known as the father of modern computer."
    },
    {
      "concept": "First Computer Architecture",
      "statement": "The first computer architecture was introduced by John Von Neumann in 1948."
    },
    {
      "concept": "First Electronic Computer Construction",
      "statement": "EDVAC was the first electronic computer constructed at the Moore School of Engineering (USA)."
    },
    {
      "concept": "First Successful Electronic Computer",
      "statement": "ENIAC was the world's first successful electronic computer, developed by J.P. Eckert and J.W. Mauchy."
    },
    {
      "concept": "Binary Number System Suggestion",
      "statement": "The binary number system was suggested by John von Neumann."
    },
    {
      "concept": "Microprocessor Concept",
      "statement": "The microprocessor is the main concept behind the fourth generation of computers."
    },
    {
      "concept": "First Single Chip Microprocessor",
      "statement": "In 1971, Ted Hoff invented the Intel 4004 chip, the world's first single-chip microprocessor."
    },
    {
      "concept": "Transistor Invention",
      "statement": "Transistors were invented by Bell Laboratories in America in 1953 and were made of semiconductors like germanium and silicon."
    },
    {
      "concept": "Integrated Circuit (IC) Invention",
      "statement": "In 1958, Jack St. Clair Kilby and Robert Noyce invented the first IC, made of silicon and containing thousands of transistors on a single chip."
    },
    {
      "concept": "Computer Classification",
      "statement": "Computers are mainly classified based on Size, Work, and Purpose."
    },
    {
      "concept": "Microcomputer Characteristics",
      "statement": "Microcomputers are the least powerful, most widely used, fastest growing, and portable type of computers."
    },
    {
      "concept": "Desktop Computer/Personal Computer (PC)",
      "statement": "Desktop computers or PCs are small, relatively inexpensive, and based on microprocessor technology (Integrated Circuit)."
    },
    {
      "concept": "Notebook Computer Characteristics",
      "statement": "Notebook computers (laptops, ultrabooks) are portable, lightweight, fit into briefcases, and include rechargeable batteries."
    },
    {
      "concept": "Handheld Computer/Palmtop Characteristics",
      "statement": "Handheld computers or palmtops are the smallest, designed to fit in the palm, and use a pen for input."
    },
    {
      "concept": "Tablet Computer Characteristics",
      "statement": "Tablet computers have key features of notebooks but accept input from a pen instead of a keyboard or mouse."
    },
    {
      "concept": "Smart Phone Characteristics",
      "statement": "Smart phones are cellular phones that function as both a phone and a small PC, may use a pen or small keyboard, and can connect to the internet wirelessly."
    },
    {
      "concept": "Mainframe Computer Characteristics",
      "statement": "Mainframe computers have large internal memory storage, a comprehensive range of software, and serve as the backbone for businesses, allowing many users to work simultaneously."
    },
    {
      "concept": "Minicomputer Characteristics",
      "statement": "Minicomputers are smaller, faster, and less expensive than mainframes; they were initially designed for specific tasks but are now used as servers."
    },
    {
      "concept": "Supercomputer Characteristics",
      "statement": "Supercomputers are the fastest and most expensive machines with high processing speeds, measured in FLOPS, and are used for highly calculation-intensive tasks."
    },
    {
      "concept": "First Computer Developed in India",
      "statement": "Siddhartha was the first computer developed in India."
    },
    {
      "concept": "World's First Computer",
      "statement": "The world's first computer, the Z1, was invented by Konrad Zuse."
    },
    {
      "concept": "World's First Supercomputer",
      "statement": "CRAY-1 was the world's first supercomputer introduced by Seymour R. CRAY in 1976."
    },
    {
      "concept": "First Supercomputer Developed in India",
      "statement": "PARAM was the first supercomputer developed in India in 1990, a series of gigaflops assembled by C-DAC in Pune."
    }
  ],
  "definitions": [
    {
      "term": "Computer",
      "meaning": "An electronic machine that accepts data from the user, processes it by performing calculations and operations, and generates desired output as a result."
    },
    {
      "term": "Hardware",
      "meaning": "The collection of physical elements that constitute a computer system; all the physical parts of a computer (e.g., display screens, disks, keyboards, mouse, printers, scanner, chips)."
    },
    {
      "term": "Software",
      "meaning": "A set of programs and procedures that tells the hardware what to do and how to accomplish a task (e.g., web browsers, word processors)."
    },
    {
      "term": "Data",
      "meaning": "Unprocessed raw facts and figures, such as numbers or text on pieces of paper."
    },
    {
      "term": "Information",
      "meaning": "Data that has been processed, organized, structured, or presented in a given context to be useful."
    },
    {
      "term": "Input",
      "meaning": "Information or data that is entered into a computer; it sends data and instructions to the Central Processing Unit (CPU)."
    },
    {
      "term": "Processing",
      "meaning": "The sequence of actions taken on data to convert it into meaningful information, involving calculations, comparisons, or decisions made by the computer."
    },
    {
      "term": "Output",
      "meaning": "The result of processing that makes processed data available to the user."
    },
    {
      "term": "Storage",
      "meaning": "The function of storing data and programs permanently."
    },
    {
      "term": "Instruction",
      "meaning": "A command given to a computer in a computer language by the user."
    },
    {
      "term": "Program",
      "meaning": "A set of instructions given to a computer to perform a specific task."
    },
    {
      "term": "Generation of Computer",
      "meaning": "A stage in the development of computer technology characterized by a major technological advancement."
    },
    {
      "term": "Microcomputer",
      "meaning": "A type of computer categorized by size; it is the least powerful, most widely used, and fastest growing type, often portable."
    },
    {
      "term": "Desktop Computer / Personal Computer (PC)",
      "meaning": "A type of microcomputer that is small, relatively inexpensive, and based on microprocessor technology."
    },
    {
      "term": "Notebook Computer",
      "meaning": "A portable, lightweight microcomputer, also known as an ultrabook or laptop, that includes a rechargeable battery."
    },
    {
      "term": "Handheld Computer / Palmtop / PDA",
      "meaning": "The smallest type of microcomputer, designed to fit in the palm, often using a pen for input."
    },
    {
      "term": "Tablet Computer",
      "meaning": "A type of computer similar to a notebook but accepts input from a pen instead of a keyboard or mouse."
    },
    {
      "term": "Smart Phone",
      "meaning": "A cellular phone that functions as both a phone and a small PC, capable of wireless internet connection."
    },
    {
      "term": "Mainframe Computer",
      "meaning": "A large computer with extensive memory and software capabilities, serving as a central hub for many users simultaneously."
    },
    {
      "term": "Minicomputer",
      "meaning": "A computer smaller, faster, and less expensive than a mainframe, often used as a server."
    },
    {
      "term": "Supercomputer",
      "meaning": "The fastest and most expensive type of computer, designed for highly complex calculations and measured in FLOPS."
    },
    {
      "term": "FLOPS",
      "meaning": "Floating Point Operations Per Second, a unit used to measure the speed of supercomputers."
    }
  ]
}
```

---

## Interaction [21:04:17]

### Prompt:
```text

    Generate 15 high-fidelity MCQs for Introduction to Computer.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Computer Term Derivation",
      "statement": "The term 'computer' is derived from the Latin word 'computerae', meaning 'to compute'."
    },
    {
      "concept": "Computer Composition",
      "statement": "Generally, a computer is the combination of Hardware and Software."
    },
    {
      "concept": "Computer Operation",
      "statement": "Computers operate on a set of instructions only; they cannot think like human beings."
    },
    {
      "concept": "Computer Basic Functions",
      "statement": "A computer is responsible for performing four basic functions: Input, Processing, Output, and Storage."
    },
    {
      "concept": "Abacus",
      "statement": "The Abacus, invented in China in the 16th century, was the first mechanical calculating device."
    },
    {
      "concept": "Napier's Bones",
      "statement": "Napier's Bones, invented by John Napier in 1617, could perform multiplication on numbers."
    },
    {
      "concept": "Pascaline",
      "statement": "The Pascaline, invented by Blaise Pascal in 1642, was the first mechanical adding machine."
    },
    {
      "concept": "Jacquard Loom",
      "statement": "Joseph Jacquard's Card of Holes for Weaving in 1801 was the first mechanical loom, mainly used to weave silk patterns."
    },
    {
      "concept": "Analytical Engine",
      "statement": "Charles Babbage designed the Analytical Engine between 1834-71, which used punched cards for the sequence of operations."
    },
    {
      "concept": "Tabulating Machine",
      "statement": "Herman Hollerith's Tabulating Machine in 1880 used punched cards with round holes and was designed to process data for the 1890 census."
    },
    {
      "concept": "MARK-I",
      "statement": "Howard Aiken's MARK-I in 1944 was the first electromechanical machine, mainly used in the war effort during World War-II."
    },
    {
      "concept": "ENIAC",
      "statement": "ENIAC, developed by J.P. Eckert and J.W. Mauchly in 1950, was the first general-purpose electronic computer with large amounts of input and output."
    },
    {
      "concept": "EDSAC",
      "statement": "EDSAC, developed by John Von Neumann between 1946-52, was the first electronic digital computer and the first computer program was run on it."
    },
    {
      "concept": "UNIVAC",
      "statement": "UNIVAC, developed by Eckert and Mauchly in 1951, was used for payroll processing, oil refinery design, and market research analysis."
    },
    {
      "concept": "IBM-650",
      "statement": "The IBM-650, introduced by IBM Company in 1954, was a decimal machine used for addition and subtraction."
    },
    {
      "concept": "Generations of Computer",
      "statement": "A generation refers to the state of improvement in the development of computer systems, with each generation characterized by a major technological development."
    },
    {
      "concept": "First Generation Computers (1940-56)",
      "statement": "First generation computers used vacuum tubes for switching, magnetic drums for storage, were slow (333 microseconds), used batch operating systems, and were programmed in machine language (binary)."
    },
    {
      "concept": "Second Generation Computers (1956-63)",
      "statement": "Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking OS, and were programmed in assembly and high-level languages."
    },
    {
      "concept": "Third Generation Computers (1964-71)",
      "statement": "Third generation computers used Integrated Circuits (ICs), magnetic core for primary storage, were very fast (100 nanoseconds), used real-time systems, and were programmed in high-level languages like FORTRAN and COBOL."
    },
    {
      "concept": "Fourth Generation Computers (1971-Present)",
      "statement": "Fourth generation computers use Large Scale Integrated (LSI) circuits and microprocessors, have very high speed (10 picoseconds), use time-sharing networks and GUI interfaces, and are programmed in languages like PASCAL and ADA."
    },
    {
      "concept": "Fifth Generation Computers (Present and Beyond)",
      "statement": "Fifth generation computers use Super Large Scale Integrated (SLSI) chips, are the fastest, and are used for artificial intelligence and robotics."
    },
    {
      "concept": "Father of Computer",
      "statement": "Charles Babbage is called the father of the computer."
    },
    {
      "concept": "Father of Modern Computer",
      "statement": "Alan Turing is known as the father of modern computer."
    },
    {
      "concept": "First Computer Architecture",
      "statement": "The first computer architecture was introduced by John Von Neumann in 1948."
    },
    {
      "concept": "First Electronic Computer Construction",
      "statement": "EDVAC was the first electronic computer constructed at the Moore School of Engineering (USA)."
    },
    {
      "concept": "First Successful Electronic Computer",
      "statement": "ENIAC was the world's first successful electronic computer, developed by J.P. Eckert and J.W. Mauchy."
    },
    {
      "concept": "Binary Number System Suggestion",
      "statement": "The binary number system was suggested by John von Neumann."
    },
    {
      "concept": "Microprocessor Concept",
      "statement": "The microprocessor is the main concept behind the fourth generation of computers."
    },
    {
      "concept": "First Single Chip Microprocessor",
      "statement": "In 1971, Ted Hoff invented the Intel 4004 chip, the world's first single-chip microprocessor."
    },
    {
      "concept": "Transistor Invention",
      "statement": "Transistors were invented by Bell Laboratories in America in 1953 and were made of semiconductors like germanium and silicon."
    },
    {
      "concept": "Integrated Circuit (IC) Invention",
      "statement": "In 1958, Jack St. Clair Kilby and Robert Noyce invented the first IC, made of silicon and containing thousands of transistors on a single chip."
    },
    {
      "concept": "Computer Classification",
      "statement": "Computers are mainly classified based on Size, Work, and Purpose."
    },
    {
      "concept": "Microcomputer Characteristics",
      "statement": "Microcomputers are the least powerful, most widely used, fastest growing, and portable type of computers."
    },
    {
      "concept": "Desktop Computer/Personal Computer (PC)",
      "statement": "Desktop computers or PCs are small, relatively inexpensive, and based on microprocessor technology (Integrated Circuit)."
    },
    {
      "concept": "Notebook Computer Characteristics",
      "statement": "Notebook computers (laptops, ultrabooks) are portable, lightweight, fit into briefcases, and include rechargeable batteries."
    },
    {
      "concept": "Handheld Computer/Palmtop Characteristics",
      "statement": "Handheld computers or palmtops are the smallest, designed to fit in the palm, and use a pen for input."
    },
    {
      "concept": "Tablet Computer Characteristics",
      "statement": "Tablet computers have key features of notebooks but accept input from a pen instead of a keyboard or mouse."
    },
    {
      "concept": "Smart Phone Characteristics",
      "statement": "Smart phones are cellular phones that function as both a phone and a small PC, may use a pen or small keyboard, and can connect to the internet wirelessly."
    },
    {
      "concept": "Mainframe Computer Characteristics",
      "statement": "Mainframe computers have large internal memory storage, a comprehensive range of software, and serve as the backbone for businesses, allowing many users to work simultaneously."
    },
    {
      "concept": "Minicomputer Characteristics",
      "statement": "Minicomputers are smaller, faster, and less expensive than mainframes; they were initially designed for specific tasks but are now used as servers."
    },
    {
      "concept": "Supercomputer Characteristics",
      "statement": "Supercomputers are the fastest and most expensive machines with high processing speeds, measured in FLOPS, and are used for highly calculation-intensive tasks."
    },
    {
      "concept": "First Computer Developed in India",
      "statement": "Siddhartha was the first computer developed in India."
    },
    {
      "concept": "World's First Computer",
      "statement": "The world's first computer, the Z1, was invented by Konrad Zuse."
    },
    {
      "concept": "World's First Supercomputer",
      "statement": "CRAY-1 was the world's first supercomputer introduced by Seymour R. CRAY in 1976."
    },
    {
      "concept": "First Supercomputer Developed in India",
      "statement": "PARAM was the first supercomputer developed in India in 1990, a series of gigaflops assembled by C-DAC in Pune."
    }
  ],
  "definitions": [
    {
      "term": "Computer",
      "meaning": "An electronic machine that accepts data from the user, processes it by performing calculations and operations, and generates desired output as a result."
    },
    {
      "term": "Hardware",
      "meaning": "The collection of physical elements that constitute a computer system; all the physical parts of a computer (e.g., display screens, disks, keyboards, mouse, printers, scanner, chips)."
    },
    {
      "term": "Software",
      "meaning": "A set of programs and procedures that tells the hardware what to do and how to accomplish a task (e.g., web browsers, word processors)."
    },
    {
      "term": "Data",
      "meaning": "Unprocessed raw facts and figures, such as numbers or text on pieces of paper."
    },
    {
      "term": "Information",
      "meaning": "Data that has been processed, organized, structured, or presented in a given context to be useful."
    },
    {
      "term": "Input",
      "meaning": "Information or data that is entered into a computer; it sends data and instructions to the Central Processing Unit (CPU)."
    },
    {
      "term": "Processing",
      "meaning": "The sequence of actions taken on data to convert it into meaningful information, involving calculations, comparisons, or decisions made by the computer."
    },
    {
      "term": "Output",
      "meaning": "The result of processing that makes processed data available to the user."
    },
    {
      "term": "Storage",
      "meaning": "The function of storing data and programs permanently."
    },
    {
      "term": "Instruction",
      "meaning": "A command given to a computer in a computer language by the user."
    },
    {
      "term": "Program",
      "meaning": "A set of instructions given to a computer to perform a specific task."
    },
    {
      "term": "Generation of Computer",
      "meaning": "A stage in the development of computer technology characterized by a major technological advancement."
    },
    {
      "term": "Microcomputer",
      "meaning": "A type of computer categorized by size; it is the least powerful, most widely used, and fastest growing type, often portable."
    },
    {
      "term": "Desktop Computer / Personal Computer (PC)",
      "meaning": "A type of microcomputer that is small, relatively inexpensive, and based on microprocessor technology."
    },
    {
      "term": "Notebook Computer",
      "meaning": "A portable, lightweight microcomputer, also known as an ultrabook or laptop, that includes a rechargeable battery."
    },
    {
      "term": "Handheld Computer / Palmtop / PDA",
      "meaning": "The smallest type of microcomputer, designed to fit in the palm, often using a pen for input."
    },
    {
      "term": "Tablet Computer",
      "meaning": "A type of computer similar to a notebook but accepts input from a pen instead of a keyboard or mouse."
    },
    {
      "term": "Smart Phone",
      "meaning": "A cellular phone that functions as both a phone and a small PC, capable of wireless internet connection."
    },
    {
      "term": "Mainframe Computer",
      "meaning": "A large computer with extensive memory and software capabilities, serving as a central hub for many users simultaneously."
    },
    {
      "term": "Minicomputer",
      "meaning": "A computer smaller, faster, and less expensive than a mainframe, often used as a server."
    },
    {
      "term": "Supercomputer",
      "meaning": "The fastest and most expensive type of computer, designed for highly complex calculations and measured in FLOPS."
    },
    {
      "term": "FLOPS",
      "meaning": "Floating Point Operations Per Second, a unit used to measure the speed of supercomputers."
    }
  ]
}

    CONSTRAINTS:
    - Include "source_snippet": A direct sentence from the PDF that proves the answer.
    - AI Goal: No hallucinations. If fact is not in KB, do not invent it.
    - DO NOT include explanations.

    FORMAT: Output ONLY a JSON array of objects.
    [{ "question": "", "options": { "A":"", "B":"", "C":"", "D":"" }, "correct_answer": "", "explanation": "", "difficulty_level": "", "source_snippet": "" }]
    
```

### Response:
```json
[
  {
    "question": "What is the primary meaning of the Latin word 'computerae' from which the term 'computer' is derived?",
    "options": {
      "A": "To store",
      "B": "To process",
      "C": "To compute",
      "D": "To display"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The term 'computer' is derived from the Latin word 'computerae', meaning 'to compute'."
  },
  {
    "question": "What are the two fundamental components that generally constitute a computer?",
    "options": {
      "A": "Data and Information",
      "B": "Hardware and Software",
      "C": "Input and Output",
      "D": "Processing and Storage"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Generally, a computer is the combination of Hardware and Software."
  },
  {
    "question": "According to the knowledge base, how do computers operate in relation to human thinking?",
    "options": {
      "A": "They can think and reason like humans.",
      "B": "They operate on a set of instructions only and cannot think like humans.",
      "C": "They are programmed to mimic human thought processes.",
      "D": "They possess artificial intelligence to understand complex emotions."
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Computers operate on a set of instructions only; they cannot think like human beings."
  },
  {
    "question": "Which of the following are the four basic functions a computer is responsible for performing?",
    "options": {
      "A": "Input, Processing, Communication, and Networking",
      "B": "Input, Processing, Output, and Storage",
      "C": "Data Entry, Calculation, Reporting, and Archiving",
      "D": "Reading, Writing, Executing, and Deleting"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A computer is responsible for performing four basic functions: Input, Processing, Output, and Storage."
  },
  {
    "question": "Which early calculating device, invented in China in the 16th century, is considered the first mechanical calculating device?",
    "options": {
      "A": "Pascaline",
      "B": "Napier's Bones",
      "C": "Analytical Engine",
      "D": "Abacus"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The Abacus, invented in China in the 16th century, was the first mechanical calculating device."
  },
  {
    "question": "Who is credited with inventing Napier's Bones, a device that could perform multiplication?",
    "options": {
      "A": "Blaise Pascal",
      "B": "John Napier",
      "C": "Charles Babbage",
      "D": "Herman Hollerith"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Napier's Bones, invented by John Napier in 1617, could perform multiplication on numbers."
  },
  {
    "question": "The Pascaline, invented by Blaise Pascal in 1642, is recognized as the first of what type of machine?",
    "options": {
      "A": "Mechanical loom",
      "B": "Electromechanical machine",
      "C": "Mechanical adding machine",
      "D": "Electronic digital computer"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The Pascaline, invented by Blaise Pascal in 1642, was the first mechanical adding machine."
  },
  {
    "question": "What significant innovation did Joseph Jacquard introduce in 1801 related to weaving?",
    "options": {
      "A": "The first electronic calculator",
      "B": "A Card of Holes for Weaving, the first mechanical loom",
      "C": "The concept of stored programs",
      "D": "The transistor"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Joseph Jacquard's Card of Holes for Weaving in 1801 was the first mechanical loom, mainly used to weave silk patterns."
  },
  {
    "question": "Charles Babbage designed the Analytical Engine, which utilized a specific method for sequencing operations. What was this method?",
    "options": {
      "A": "Magnetic tape",
      "B": "Punched cards",
      "C": "Vacuum tubes",
      "D": "Integrated circuits"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Charles Babbage designed the Analytical Engine between 1834-71, which used punched cards for the sequence of operations."
  },
  {
    "question": "Herman Hollerith's Tabulating Machine, designed for the 1890 census, used punched cards with what specific feature?",
    "options": {
      "A": "Rectangular holes",
      "B": "Round holes",
      "C": "Slit holes",
      "D": "No holes, only magnetic stripes"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Herman Hollerith's Tabulating Machine in 1880 used punched cards with round holes and was designed to process data for the 1890 census."
  },
  {
    "question": "Which computer, developed by Howard Aiken in 1944, was the first electromechanical machine primarily used during World War-II?",
    "options": {
      "A": "ENIAC",
      "B": "EDSAC",
      "C": "MARK-I",
      "D": "UNIVAC"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Howard Aiken's MARK-I in 1944 was the first electromechanical machine, mainly used in the war effort during World War-II."
  },
  {
    "question": "What technological component characterized the first generation of computers (1940-1956) for switching purposes?",
    "options": {
      "A": "Transistors",
      "B": "Integrated Circuits (ICs)",
      "C": "Vacuum tubes",
      "D": "Microprocessors"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "First generation computers used vacuum tubes for switching, magnetic drums for storage, were slow (333 microseconds), used batch operating systems, and were programmed in machine language (binary)."
  },
  {
    "question": "Second generation computers (1956-1963) replaced vacuum tubes with what new technology for switching?",
    "options": {
      "A": "Integrated Circuits (ICs)",
      "B": "Microprocessors",
      "C": "Transistors",
      "D": "SLSI chips"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking OS, and were programmed in assembly and high-level languages."
  },
  {
    "question": "What major technological advancement defined the third generation of computers (1964-1971)?",
    "options": {
      "A": "Vacuum tubes",
      "B": "Transistors",
      "C": "Large Scale Integrated (LSI) circuits",
      "D": "Integrated Circuits (ICs)"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Third generation computers used Integrated Circuits (ICs), magnetic core for primary storage, were very fast (100 nanoseconds), used real-time systems, and were programmed in high-level languages like FORTRAN and COBOL."
  },
  {
    "question": "The concept of the microprocessor is the main technological feature associated with which generation of computers?",
    "options": {
      "A": "Second Generation",
      "B": "Third Generation",
      "C": "Fourth Generation",
      "D": "Fifth Generation"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The microprocessor is the main concept behind the fourth generation of computers."
  }
]
```

---

## Interaction [21:04:19]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary meaning of the Latin word 'computerae' from which the term 'computer' is derived?
        Proposed Answer: C (To compute)
        Source Snippet provided by Writer: The term 'computer' is derived from the Latin word 'computerae', meaning 'to compute'.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the Latin word 'computerae' means 'to compute', which aligns perfectly with the proposed answer 'C (To compute)'."}
```

---

## Interaction [21:04:28]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What are the two fundamental components that generally constitute a computer?
        Proposed Answer: B (Hardware and Software)
        Source Snippet provided by Writer: Generally, a computer is the combination of Hardware and Software.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that a computer is the combination of Hardware and Software, which directly supports the proposed answer."}
```

---

## Interaction [21:04:31]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: According to the knowledge base, how do computers operate in relation to human thinking?
        Proposed Answer: B (They operate on a set of instructions only and cannot think like humans.)
        Source Snippet provided by Writer: Computers operate on a set of instructions only; they cannot think like human beings.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that computers operate on a set of instructions only and cannot think like humans, which perfectly matches the proposed answer."}
```

---

## Interaction [21:04:35]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which early calculating device, invented in China in the 16th century, is considered the first mechanical calculating device?
        Proposed Answer: D (Abacus)
        Source Snippet provided by Writer: The Abacus, invented in China in the 16th century, was the first mechanical calculating device.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the Abacus, invented in China in the 16th century, was the first mechanical calculating device, which fully supports the proposed answer."}
```

---

## Interaction [21:04:39]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Who is credited with inventing Napier's Bones, a device that could perform multiplication?
        Proposed Answer: B (John Napier)
        Source Snippet provided by Writer: Napier's Bones, invented by John Napier in 1617, could perform multiplication on numbers.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'Napier's Bones, invented by John Napier...' which directly supports the proposed answer that John Napier is credited with inventing Napier's Bones."}
```

---

## Interaction [21:04:42]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: The Pascaline, invented by Blaise Pascal in 1642, is recognized as the first of what type of machine?
        Proposed Answer: C (Mechanical adding machine)
        Source Snippet provided by Writer: The Pascaline, invented by Blaise Pascal in 1642, was the first mechanical adding machine.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the Pascaline was the 'first mechanical adding machine', which directly supports the proposed answer."}
```

---

## Interaction [21:04:45]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What significant innovation did Joseph Jacquard introduce in 1801 related to weaving?
        Proposed Answer: B (A Card of Holes for Weaving, the first mechanical loom)
        Source Snippet provided by Writer: Joseph Jacquard's Card of Holes for Weaving in 1801 was the first mechanical loom, mainly used to weave silk patterns.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that Joseph Jacquard's 'Card of Holes for Weaving' in 1801 was the 'first mechanical loom'. This directly supports the proposed answer which identifies this invention and its significance."}
```

---

## Interaction [21:04:48]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Charles Babbage designed the Analytical Engine, which utilized a specific method for sequencing operations. What was this method?
        Proposed Answer: B (Punched cards)
        Source Snippet provided by Writer: Charles Babbage designed the Analytical Engine between 1834-71, which used punched cards for the sequence of operations.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the Analytical Engine 'used punched cards for the sequence of operations', which directly supports the proposed answer that the method was 'Punched cards'."}
```

---

## Interaction [21:04:51]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Herman Hollerith's Tabulating Machine, designed for the 1890 census, used punched cards with what specific feature?
        Proposed Answer: B (Round holes)
        Source Snippet provided by Writer: Herman Hollerith's Tabulating Machine in 1880 used punched cards with round holes and was designed to process data for the 1890 census.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that Herman Hollerith's Tabulating Machine used punched cards with round holes, directly supporting the proposed answer B (Round holes). The question is also factually accurate regarding the machine and its purpose for the 1890 census."}
```

---

## Interaction [21:04:53]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which computer, developed by Howard Aiken in 1944, was the first electromechanical machine primarily used during World War-II?
        Proposed Answer: C (MARK-I)
        Source Snippet provided by Writer: Howard Aiken's MARK-I in 1944 was the first electromechanical machine, mainly used in the war effort during World War-II.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that Howard Aiken's MARK-I, developed in 1944, was the first electromechanical machine primarily used during World War-II, directly supporting the proposed answer."}
```

---

## Interaction [21:08:32]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment to map it to the database.
    This segment is from approximately 0% into the book.
    
    
PRE-VALIDATED MATCHES FROM DATABASE (USE THESE IF APPLICABLE):
{
  "matched_exams": [
    {
      "id": "f773d816-8ffc-45bc-a843-c75db9a47f19",
      "name": "Computer Awareness",
      "full_name": "Computer Awareness",
      "exam_board_id": "f81eea7e-3e58-4fe6-ac6c-82682450a830"
    }
  ],
  "matched_subjects": [
    {
      "id": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
      "name": "Computer Awareness"
    },
    {
      "id": "0d3e0ab3-f9d9-4a35-9e17-4c5a6025b177",
      "name": "General Studies / General awareness",
      "description": "Polity, Economy, History, Geography, Odisha GK & Current Affairs."
    }
  ],
  "matched_boards": []
}

    AVAILABLE SUBJECTS IN DATABASE:
    - Computer Awareness (ID: 6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00)
- Odisha GK (ID: 78b5ec35-a949-4088-b223-23923f82e0cf)
- General Studies / General awareness (ID: 0d3e0ab3-f9d9-4a35-9e17-4c5a6025b177)
- General studies paper 1 (ID: cf5df30d-4878-48f3-a60f-c862e70b57e4)
- Logical reasoning (ID: ceea035c-e61b-44b1-a025-ac8ac10e27e7)
- Data interpretation (ID: 39c37bed-8596-4ce1-a8fb-40ed45ff446f)
- English language (ID: 0499cc86-c4d2-4117-aaa7-3d9b21d3847b)
- Odia language (ID: 1da2e126-4a2d-4f9b-b3d9-559c64ad126d)
- Arithmatic (ID: 7dee4ca4-f673-4fb4-b51e-ca3ee132bb35)

    INSTRUCTIONS:
    1. EXAM_BOARD: Short name (e.g. OSSC, OPSC, SSC).
    2. EXAM_NAME: Short name of the exam (e.g. CGL, RI, ASO).
    3. YEAR: The year mentioned for the exam if any.
    4. SUBJECT: Pick the MOST relevant subject name from the list above.
    5. CHAPTER: The SPECIFIC Chapter or Unit name being discussed in this block.
    6. CONFIDENCE: A score between 0 and 1.

    FORMAT: Output ONLY a JSON object.
    {
      "exam_board": "",
      "exam_name": "",
      "year": "",
      "subject": "",
      "chapter": "",
      "confidence": 0.0
    }

    CONTEXT TEXT (SEGMENT AT 0%):
    arihant
Jobscaptain
LEARN, REVISE
PRACTICE
COMPUTER
AWARENESS
Detailed Synopsis
Practice Questions
Previous Years' Exam Questions
10 Practice Sets
Useful for
IBPS, SBI (BANK PO & CLERK)
SSC, Railways & Other Exams

--- PAGE BREAK ---

CONTENTS
1. Introduction to Computer
2. Computer Architecture
1-11
12-17
3. Input and Output Devices
4. Computer Memory
18-30
31-39
5. Data Representation
40-46
6. Computer Software
47-56
7. Operating System (OS)
57-68
8. Microsoft Windows
69-76
9. Microsoft Office
77-93
10. Database Concepts
94-101
11. Data Communication and Networking
102-115
12. Internet and its Services
116-132
13. Computer Security
133-143
Infoworld Updates
144-146
Abbreviations
147-150
Glossary
151-162
Practice Sets (1-10)
163-192

--- PAGE BREAK ---

www.bankbooks.in
1
Introduction to
Computer
A computer is an electronic machine that accepts data from the user, processes the data by
performing calculations and operations on it and generates the desired output as a result. The
term computer is derived from the Latin word 'computerae' which means 'to compute'.
Generally, computer is the combination of Hardware and
Software which converts data into information. Computer
operates on set of instructions only, they cannot think as human
being.
Scanner
Monitor
Mouse
CPU
Keyboard
A Computer System
Printer
Functioning of a Computer System
Computer is responsible for performing four basic functions
1. Input Information or data that is entered into a computer
is called input. It sends data and instructions to the Central
Processing Unit (CPU).
2. Processing It is the sequence of actions taken on data to
convert it into information which is meaningful to the user. It
can be calculations, comparisons or decisions taken by the
computer.
3. Output It makes processed data available to the user.
4. Storage It stores data and programs permanently.
Terms Related to
Computer
Hardware Hardware is the
collection of physical elements
that constitute a computer
system. It is a comprehensive
term for all the physical parts of a
computer. e.g., display screens,
disks, keyboards. mouse,
printers, scanner, chips, etc.
Software It is a set of programs
and procedures. Software tells
the hardware what to do and how
to accomplish a task. e.g., web
browsers, word processors, etc.
Data Unprocessed raw facts
and figures, like numbers, text on
pieces of paper, are known as
data.
Information When data is
processed, organized, structured
or presented in a given context so
as to be useful, then it is called
information.
Instruction It is a command
given to a computer in the
computer language by the user.
Program It is a set of instructions
given to a computer in order to
perform some task.

--- PAGE BREAK ---

2
www.bankbooks.in
Computer Awareness
Intr
History of Computer Evolution
Computer is not the creation of one day, rather it took a long period for the development of modern computer.
Invention Inventor
Abacus
China
Time
16th
century
Napier's
John
1617
Bones
Napier
Pascaline

    
```

### Response:
```json
{
  "exam_board": "",
  "exam_name": "",
  "year": "",
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Introduction to Computer",
  "confidence": 0.95
}
```

---

## Interaction [21:08:44]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Introduction to Computer
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    arihant
Jobscaptain
LEARN, REVISE
PRACTICE
COMPUTER
AWARENESS
Detailed Synopsis
Practice Questions
Previous Years' Exam Questions
10 Practice Sets
Useful for
IBPS, SBI (BANK PO & CLERK)
SSC, Railways & Other Exams

--- PAGE BREAK ---

CONTENTS
1. Introduction to Computer
2. Computer Architecture
1-11
12-17
3. Input and Output Devices
4. Computer Memory
18-30
31-39
5. Data Representation
40-46
6. Computer Software
47-56
7. Operating System (OS)
57-68
8. Microsoft Windows
69-76
9. Microsoft Office
77-93
10. Database Concepts
94-101
11. Data Communication and Networking
102-115
12. Internet and its Services
116-132
13. Computer Security
133-143
Infoworld Updates
144-146
Abbreviations
147-150
Glossary
151-162
Practice Sets (1-10)
163-192

--- PAGE BREAK ---

www.bankbooks.in
1
Introduction to
Computer
A computer is an electronic machine that accepts data from the user, processes the data by
performing calculations and operations on it and generates the desired output as a result. The
term computer is derived from the Latin word 'computerae' which means 'to compute'.
Generally, computer is the combination of Hardware and
Software which converts data into information. Computer
operates on set of instructions only, they cannot think as human
being.
Scanner
Monitor
Mouse
CPU
Keyboard
A Computer System
Printer
Functioning of a Computer System
Computer is responsible for performing four basic functions
1. Input Information or data that is entered into a computer
is called input. It sends data and instructions to the Central
Processing Unit (CPU).
2. Processing It is the sequence of actions taken on data to
convert it into information which is meaningful to the user. It
can be calculations, comparisons or decisions taken by the
computer.
3. Output It makes processed data available to the user.
4. Storage It stores data and programs permanently.
Terms Related to
Computer
Hardware Hardware is the
collection of physical elements
that constitute a computer
system. It is a comprehensive
term for all the physical parts of a
computer. e.g., display screens,
disks, keyboards. mouse,
printers, scanner, chips, etc.
Software It is a set of programs
and procedures. Software tells
the hardware what to do and how
to accomplish a task. e.g., web
browsers, word processors, etc.
Data Unprocessed raw facts
and figures, like numbers, text on
pieces of paper, are known as
data.
Information When data is
processed, organized, structured
or presented in a given context so
as to be useful, then it is called
information.
Instruction It is a command
given to a computer in the
computer language by the user.
Program It is a set of instructions
given to a computer in order to
perform some task.

--- PAGE BREAK ---

2
www.bankbooks.in
Computer Awareness
Intr
History of Computer Evolution
Computer is not the creation of one day, rather it took a long period for the development of modern computer.
Invention Inventor
Abacus
China
Time
16th
century
Napier's
John
1617
Bones
Napier
Pascaline
Blaise
Pascal
1642
Characteristics
First mechanical calculating device.
• It used set of beads for representing unit.
.
A horizontal rod represent the one, tens,
hundred, etc.
Three dimensional structure.
Holding numbers 0 to 9 only.
Represent graphical structure of
calculating result.
First mechanical adding machine.
It was structured like rectangular box, with
eight disc (represent number of units).
• The term carry was introduced in this
period.
Card of
Holes for
Joseph
Jacquard
1801
.
First mechanical loom.
+
Mainly weaved a silk based pattern.
Weaving
Pattern
Analytical
Engine
Charles
Babbage
1834-71
•
Tabulating Herman
Machine
1880
Hollerith
MARK-I
Howard
Aiken
1944
ENIAC
JP Eckert
and JW
Mauchly
1950
EDSAC
John Von
Neumann
1946-52
UNIVAC
Eckert and 1951
JW
Mauchly
IBM-650
Computer
IBM
Company
1954
• Used punched card for the sequence of
operation.
To program the machine, it used
two-punchcard.
• First general-purpose computer.
•
Stored program in the form of 'pegs' also.
called barrels.
It used punched cards with round holes.
. Read one card at a time.
Consists of interlocking panels of small
glass, counters, switches and control
circuits.
Data can be entered manually.
It is a combination of twenty
accumulators.
It can also tiggered different operations.
It was first computer which provided
storage capacity.
Capable of storing instructions and data
in memory.
Also calculate table of squares and a list
of prime numbers.
• First general-purpose electronic computer
with large amount of input and output.
Performed both numeric and textual
information.
• Provided input/output units converting
alphabetical and special characters to
two-digit decimal code.
Applications
• Used for addition and subtraction
operation.
• Calculation of square roots can also be
performed.
Perform multiplication on numbers.
Technology used for calculation called
Rabdologia.
• Operation performed on the embedded
rods.
Perform addition and subtraction of two
numbers.
Mainly designed with regard to the
pressure of liquid.
Simplified the process of Textiles.
Generally used for basic arithmetic
operations.
It was a decimal machine used sign and
magnitude for representation of a
number.
It was the first electromechanical
machine, which was designed to
process the data for census in 1890.
Mainly used in the war effort during World
War-II.
Magnetic drums are used for storage.
• First electronic digital computer.
Used for weather prediction, atomic energy
calculation and other scientific uses.
First computer program was run on
machine.
Used mercury delay lines for memory and
vacuum tubes for logic.
• Used magnetic tapes as input and
output.
•
Payroll processing
Oil refinery design
Market research analysis

--- PAGE BREAK ---

nd
Introduction to Computer
Generations of Computer
A generation refers to the state of improvement in the development of system. Computers are built of Electromechanical, before generation. Each
generation of computer is characterized by a major technological development that fundamentally changed the way, computers operate.
Generation Year
Switching
Device
Storage
Device
Speed
Operating
System
Language
First
1940-56 Vacuum tubes
Magnetic
drums
333
micro
second
Batch
operating
system
Machine language
(Binary number Os
and 1s)
Second
1956-63 Transistors
Magnetic
core
10 micro
second
technology
Time-sharing
system,
Multitasking
Assembly
language, high
level language
OS
Magnetic
Third
1964-71- Integrated
core as
100
nano
seconds
Real-time
system
High level language
•
Circuits
(ICs)
primary
(FORTRAN,
COBOL) ALGOL
storage
medium
Fourth
1971-
Present
Large Scale
Semi
Integrated (LSI)
conductor
10 pico
second
circuit
memory,
Time sharing
network, GUI
interface.
PASCAL, ADA,
COBOL-74
FORTRAN IV
microprocessor
Winchester
disk
Fifth
Present Super Large
and
Scale Integrated
Beyond (SLSI) chips
Characteristic
Fastest computing device.
• Generate large amount of
heat.
• Non-portable.
• More reliable and less prone
to hardware failure.
⚫ Portable and generate less
amount of heat.
Consumed less power.
Highly sophisticated
technology required.
→ More reliable and portable.
This generation leads to
better communication and
resource sharing.
⚫ Parallel processing
Application
Used for scientific
purpose
e.g., ENIAC,
UNIVAC
Used for
commercial
production
e.g., PDP-8.
IBM-1401
Database
management
system
e.g., NCR-395,
B6500
Distributed system,
e.g., Intel 4004 chip,
Macintosh.
Artificial intelligence
• Intel core microprocessor is
implemented.
e.g., Robotics
• Enables mega chips
3

--- PAGE BREAK ---

4
www.bankbook.in
Computer Awareness
BY
Tit-Bits
Charles Babbage is called the father of computer.
Alan Turing is known as the father of modern
computer.
The First Computer architecture was introduced by
John Von Neumann in 1948.
electronic computer
was the first
EDVAC
constructed at the Moore School of Engineering
(USA).
ENIAC was the world's first successful electronic
computer which was developed by the two.
scientists namely JP Eckert and J W Mauchy. It was
the beginning of first generation computer.
Classification of Computer
Computers are mainly classified as two types
Binary number system was suggested by John von
Neumann
Microprocessor is the main concept behind fourth
generation of computer.
In 1971, Ted Hoff invented Intel 4004 chip which was
the world's first single chip microprocessor.
Transistors were invented by Bell laboratory of
and were made
America in
semiconductors like germanium and silicon.
1953
up
of
In 1958. Jack St. Clair Kilby and Robert Noyce
invented the first IC. IC was made up of silicon
material and consists of thousands of transistors on
a single chip.
Classification of Computer
Based on Size
Based on Work
Based on Purpose
Microcomputer
Minicomputer
Analog
Computer
Hybrid
Computer
General
Purpose
Special
Purpose
Mainframe
Computer
Supercomputer
Digital
Computer
Based on Size
On the basis of size, computer are categorise as
follows
1. Microcomputer
Microcomputers are the least powerful, yet the
most widely used and fastest growing type of
computers and are also called portable
computers. Microcomputer consists of three
basic categories of physical equipment i.e system
unit, input/output and memory.
Some types of microcomputer are
Desktop Computer or Personal Computer
(PC) These are small, relatively inexpensive
computers. These are based on the micro-
processor technology (Integrated Circuit).
Notebook Notebook computers, also known as
ultra book or laptop, are portable lightweight and
into most briefcases. They include
fit
rechargeable battery, so these can work anywhere.
Laptops were developed by Alan Kay.
Handheld Computers or Palmtops These are
the smallest and are designed to fit into the palm.
So, these are also known as Palmtop/PDA. They
are practical for certain functions such as phone
books and calendars. They use the for input
instead of keyboard.
pen
Tablet Computer They have key features of the
notebook computer, but it can accept input from
a pen instead of the keyboard or mouse.
Smart Phones Smart phones are cellular phones
that function both as a phone and as a small PC.
They may use a pen or may have a small
keyboard. They can be connected to the internet
wirelessly. Apple, Blackberry, Nokia are some
manufacturers of smart phones.
I

--- PAGE BREAK ---

n
h
S
f
f
e
า
า
www.bankbook.in
Introduction to Computer
2. Mainframe Computer
Mainframe computers are those having large internal
memory storage and comprehensive range of software.
Mainframe computer serves as a backbone for the entire
business world. It is considered as the heart of a network
of computers or terminals that allows a large number of
people to work at the same time. Mainframe computers
are IBM-370, IBM-S/390, UNIVAC-1110.
3. Minicomputer
Minicomputers are smaller in size, faster, cost lower than
mainframe computers. Initially, the minicomputer was
designed to carry out some specific tasks, like engineering
and Computer Aided Design (CAD) calculations. But
now, they are being used as central computer which is
called as Server. Mini computers are IBM-17, DEC
PDP-11, HP-9000, etc.
4. Supercomputer
Supercomputers are the fastest and the most expensive
machines. They have high processing speed compared to
other computers. The speed of supercomputers are
measured in FLOPS (Floating Point Operations Per
Second).
Supercomputers are used for highly calculationintensive
tasks, such as weather foresting, nuclear research,
military agencies and scientific research laboratories.
Supercomputers are most powerful, large in size and
memory, compared to all other computers.
Tit-Bits
Siddhartha was the first computer developed in India.
The world's first computer called the Z1, was invented by
Konrad Zuse.
CRAY-1 was the world's first supercomputer introduced by
Seymour R CRAY in 1976.
PARAM was the first supercomputer developed in India in
1990. It is a series of gigaflops, assembled by C-DAC in
Pune.
PARAM YUVA II is the latest machine in the series of
PARAM made by
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Computer Term Derivation",
      "statement": "The term 'computer' is derived from the Latin word 'computerae', which means 'to compute'."
    },
    {
      "concept": "Computer Composition",
      "statement": "Generally, a computer is the combination of Hardware and Software."
    },
    {
      "concept": "Computer Operation",
      "statement": "Computers operate on a set of instructions only; they cannot think like human beings."
    },
    {
      "concept": "Abacus",
      "statement": "The Abacus was the first mechanical calculating device, invented in China in the 16th century, using beads for representation and horizontal rods for units."
    },
    {
      "concept": "Napier's Bones",
      "statement": "Napier's Bones, invented by John Napier in 1617, was a mechanical device with a horizontal rod representing units and could hold numbers 0 to 9."
    },
    {
      "concept": "Pascaline",
      "statement": "The Pascaline, invented by Blaise Pascal in 1642, was the first mechanical adding machine with eight discs and introduced the term 'carry'."
    },
    {
      "concept": "Jacquard Loom",
      "statement": "Joseph Jacquard's Card of Holes for Weaving (1801) was the first mechanical loom, mainly used for weaving silk patterns."
    },
    {
      "concept": "Analytical Engine",
      "statement": "Charles Babbage's Analytical Engine (1834-71) used punched cards for the sequence of operations and was considered the first general-purpose computer."
    },
    {
      "concept": "Tabulating Machine",
      "statement": "Herman Hollerith's Tabulating Machine (1880) used punched cards with round holes and was designed to process data for the 1890 census."
    },
    {
      "concept": "MARK-I",
      "statement": "Howard Aiken's MARK-I (1944) was the first electromechanical machine, mainly used in the war effort during World War-II, and used magnetic drums for storage."
    },
    {
      "concept": "ENIAC",
      "statement": "ENIAC, developed by J.P. Eckert and J.W. Mauchly (1950), was the first general-purpose electronic computer with large input/output capabilities and performed both numeric and textual information."
    },
    {
      "concept": "EDSAC",
      "statement": "EDSAC, developed by John Von Neumann (1946-52), was the first electronic digital computer and was capable of storing instructions and data in memory."
    },
    {
      "concept": "UNIVAC",
      "statement": "UNIVAC, developed by Eckert and Mauchly (1951), was the first general-purpose electronic computer with large input and output units."
    },
    {
      "concept": "IBM-650",
      "statement": "The IBM-650 (1954) was a decimal machine used for payroll processing, oil refinery design, and market research analysis."
    },
    {
      "concept": "First Generation Computers (1940-56)",
      "statement": "First generation computers used vacuum tubes for switching, magnetic drums for storage, were slow (333 microseconds), used batch operating systems, and were programmed in machine language (binary)."
    },
    {
      "concept": "Second Generation Computers (1956-63)",
      "statement": "Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking operating systems, and were programmed in assembly and high-level languages."
    },
    {
      "concept": "Third Generation Computers (1964-71)",
      "statement": "Third generation computers used Integrated Circuits (ICs), magnetic core for primary storage, were very fast (100 nanoseconds), used real-time operating systems, and were programmed in high-level languages like FORTRAN and COBOL."
    },
    {
      "concept": "Fourth Generation Computers (1971-Present)",
      "statement": "Fourth generation computers use Large Scale Integrated (LSI) circuits and microprocessors, have semiconductor memory and Winchester disks for storage, are extremely fast (10 picoseconds), use time-sharing and GUI interfaces, and are programmed in languages like PASCAL and ADA."
    },
    {
      "concept": "Fifth Generation Computers (Present and Beyond)",
      "statement": "Fifth generation computers use Super Large Scale Integrated (SLSI) chips, enable parallel processing, and are characterized by artificial intelligence and robotics."
    },
    {
      "concept": "Father of Computer",
      "statement": "Charles Babbage is called the father of the computer."
    },
    {
      "concept": "Father of Modern Computer",
      "statement": "Alan Turing is known as the father of modern computer."
    },
    {
      "concept": "First Computer Architecture",
      "statement": "The first computer architecture was introduced by John Von Neumann in 1948."
    },
    {
      "concept": "First Electronic Computer Construction",
      "statement": "EDVAC was the first electronic computer constructed at the Moore School of Engineering (USA)."
    },
    {
      "concept": "First Successful Electronic Computer",
      "statement": "ENIAC was the world's first successful electronic computer, developed by J.P. Eckert and J.W. Mauchy."
    },
    {
      "concept": "Binary Number System Suggestion",
      "statement": "The binary number system was suggested by John von Neumann."
    },
    {
      "concept": "Microprocessor Concept",
      "statement": "The microprocessor is the main concept behind the fourth generation of computers."
    },
    {
      "concept": "First Single Chip Microprocessor",
      "statement": "In 1971, Ted Hoff invented the Intel 4004 chip, the world's first single-chip microprocessor."
    },
    {
      "concept": "Transistor Invention",
      "statement": "Transistors were invented by Bell Laboratories in America in 1953 and were made of semiconductors like germanium and silicon."
    },
    {
      "concept": "Integrated Circuit (IC) Invention",
      "statement": "In 1958, Jack St. Clair Kilby and Robert Noyce invented the first IC, made of silicon and containing thousands of transistors on a single chip."
    },
    {
      "concept": "Computer Classification",
      "statement": "Computers are mainly classified based on Size, Work, and Purpose."
    },
    {
      "concept": "Microcomputer Characteristics",
      "statement": "Microcomputers are the least powerful, most widely used, and fastest-growing type of computers, also known as portable computers."
    },
    {
      "concept": "Desktop Computer/Personal Computer (PC)",
      "statement": "Desktop computers or Personal Computers (PCs) are small, relatively inexpensive, and based on microprocessor technology (Integrated Circuit)."
    },
    {
      "concept": "Notebook Computer Characteristics",
      "statement": "Notebook computers, also known as ultrabooks or laptops, are portable, lightweight, include rechargeable batteries, and can work anywhere."
    },
    {
      "concept": "Handheld Computer/Palmtop Characteristics",
      "statement": "Handheld computers or Palmtops are the smallest, designed to fit in the palm, and use a pen for input instead of a keyboard."
    },
    {
      "concept": "Tablet Computer Characteristics",
      "statement": "Tablet computers have key features of notebook computers but accept input from a pen instead of a keyboard or mouse."
    },
    {
      "concept": "Smart Phone Characteristics",
      "statement": "Smart phones are cellular phones that function as both a phone and a small PC, may use a pen or small keyboard, and can connect to the internet wirelessly."
    },
    {
      "concept": "Mainframe Computer Characteristics",
      "statement": "Mainframe computers have large internal memory storage, a comprehensive range of software, and serve as the backbone for businesses, allowing many users to work simultaneously."
    },
    {
      "concept": "Minicomputer Characteristics",
      "statement": "Minicomputers are smaller, faster, and less expensive than mainframe computers, initially designed for specific tasks like CAD, and now often used as servers."
    },
    {
      "concept": "Supercomputer Characteristics",
      "statement": "Supercomputers are the fastest and most expensive machines with high processing speeds measured in FLOPS, used for calculation-intensive tasks like weather forecasting and nuclear research."
    },
    {
      "concept": "First Computer in India",
      "statement": "Siddhartha was the first computer developed in India."
    },
    {
      "concept": "World's First Computer",
      "statement": "The world's first computer, the Z1, was invented by Konrad Zuse."
    },
    {
      "concept": "World's First Supercomputer",
      "statement": "CRAY-1 was the world's first supercomputer introduced by Seymour R. CRAY in 1976."
    },
    {
      "concept": "First Supercomputer in India",
      "statement": "PARAM was the first supercomputer developed in India in 1990, a series of gigaflops assembled by C-DAC in Pune."
    }
  ],
  "definitions": [
    {
      "term": "Computer",
      "meaning": "An electronic machine that accepts data from the user, processes it by performing calculations and operations, and generates desired output as a result."
    },
    {
      "term": "Hardware",
      "meaning": "The collection of physical elements that constitute a computer system; all the physical parts of a computer, e.g., display screens, disks, keyboards, mouse, printers, scanner, chips."
    },
    {
      "term": "Software",
      "meaning": "A set of programs and procedures that tells the hardware what to do and how to accomplish a task, e.g., web browsers, word processors."
    },
    {
      "term": "Data",
      "meaning": "Unprocessed raw facts and figures, like numbers or text on pieces of paper."
    },
    {
      "term": "Information",
      "meaning": "Data that has been processed, organized, structured, or presented in a given context so as to be useful."
    },
    {
      "term": "Instruction",
      "meaning": "A command given to a computer in computer language by the user."
    },
    {
      "term": "Program",
      "meaning": "A set of instructions given to a computer in order to perform some task."
    },
    {
      "term": "Input",
      "meaning": "Information or data that is entered into a computer; it sends data and instructions to the Central Processing Unit (CPU)."
    },
    {
      "term": "Processing",
      "meaning": "The sequence of actions taken on data to convert it into meaningful information, which can include calculations, comparisons, or decisions made by the computer."
    },
    {
      "term": "Output",
      "meaning": "The result of processing data, making the processed data available to the user."
    },
    {
      "term": "Storage",
      "meaning": "The function of a computer system that stores data and programs permanently."
    },
    {
      "term": "Generation of Computer",
      "meaning": "A generation refers to the state of improvement in the development of a computer system, characterized by a major technological development that fundamentally changes how computers operate."
    },
    {
      "term": "Microcomputer",
      "meaning": "A type of computer categorized by size; it is the least powerful, most widely used, and fastest-growing type, often called portable computers."
    },
    {
      "term": "Mainframe Computer",
      "meaning": "A type of computer categorized by size; it has large internal memory storage, a comprehensive range of software, and serves as a central hub for many users."
    },
    {
      "term": "Minicomputer",
      "meaning": "A type of computer categorized by size; it is smaller, faster, and less expensive than a mainframe computer, often used as a server."
    },
    {
      "term": "Supercomputer",
      "meaning": "A type of computer categorized by size; it is the fastest and most expensive machine with high processing speed, used for highly calculation-intensive tasks."
    },
    {
      "term": "Analog Computer",
      "meaning": "A type of computer classified based on work; it deals with continuous data."
    },
    {
      "term": "Digital Computer",
      "meaning": "A type of computer classified based on work; it deals with discrete data (binary numbers)."
    },
    {
      "term": "Hybrid Computer",
      "meaning": "A type of computer classified based on work; it combines features of both analog and digital computers."
    },
    {
      "term": "General Purpose Computer",
      "meaning": "A type of computer classified based on purpose; it can perform a wide variety of tasks."
    },
    {
      "term": "Special Purpose Computer",
      "meaning": "A type of computer classified based on purpose; it is designed to perform a specific task."
    },
    {
      "term": "FLOPS",
      "meaning": "Floating Point Operations Per Second, a unit used to measure the speed of supercomputers."
    }
  ]
}
```

---

## Interaction [21:10:09]

### Prompt:
```text

    Generate 3 high-fidelity MCQs for Introduction to Computer.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Computer Term Derivation",
      "statement": "The term 'computer' is derived from the Latin word 'computerae', which means 'to compute'."
    },
    {
      "concept": "Computer Composition",
      "statement": "Generally, a computer is the combination of Hardware and Software."
    },
    {
      "concept": "Computer Operation",
      "statement": "Computers operate on a set of instructions only; they cannot think like human beings."
    },
    {
      "concept": "Abacus",
      "statement": "The Abacus was the first mechanical calculating device, invented in China in the 16th century, using beads for representation and horizontal rods for units."
    },
    {
      "concept": "Napier's Bones",
      "statement": "Napier's Bones, invented by John Napier in 1617, was a mechanical device with a horizontal rod representing units and could hold numbers 0 to 9."
    },
    {
      "concept": "Pascaline",
      "statement": "The Pascaline, invented by Blaise Pascal in 1642, was the first mechanical adding machine with eight discs and introduced the term 'carry'."
    },
    {
      "concept": "Jacquard Loom",
      "statement": "Joseph Jacquard's Card of Holes for Weaving (1801) was the first mechanical loom, mainly used for weaving silk patterns."
    },
    {
      "concept": "Analytical Engine",
      "statement": "Charles Babbage's Analytical Engine (1834-71) used punched cards for the sequence of operations and was considered the first general-purpose computer."
    },
    {
      "concept": "Tabulating Machine",
      "statement": "Herman Hollerith's Tabulating Machine (1880) used punched cards with round holes and was designed to process data for the 1890 census."
    },
    {
      "concept": "MARK-I",
      "statement": "Howard Aiken's MARK-I (1944) was the first electromechanical machine, mainly used in the war effort during World War-II, and used magnetic drums for storage."
    },
    {
      "concept": "ENIAC",
      "statement": "ENIAC, developed by J.P. Eckert and J.W. Mauchly (1950), was the first general-purpose electronic computer with large input/output capabilities and performed both numeric and textual information."
    },
    {
      "concept": "EDSAC",
      "statement": "EDSAC, developed by John Von Neumann (1946-52), was the first electronic digital computer and was capable of storing instructions and data in memory."
    },
    {
      "concept": "UNIVAC",
      "statement": "UNIVAC, developed by Eckert and Mauchly (1951), was the first general-purpose electronic computer with large input and output units."
    },
    {
      "concept": "IBM-650",
      "statement": "The IBM-650 (1954) was a decimal machine used for payroll processing, oil refinery design, and market research analysis."
    },
    {
      "concept": "First Generation Computers (1940-56)",
      "statement": "First generation computers used vacuum tubes for switching, magnetic drums for storage, were slow (333 microseconds), used batch operating systems, and were programmed in machine language (binary)."
    },
    {
      "concept": "Second Generation Computers (1956-63)",
      "statement": "Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking operating systems, and were programmed in assembly and high-level languages."
    },
    {
      "concept": "Third Generation Computers (1964-71)",
      "statement": "Third generation computers used Integrated Circuits (ICs), magnetic core for primary storage, were very fast (100 nanoseconds), used real-time operating systems, and were programmed in high-level languages like FORTRAN and COBOL."
    },
    {
      "concept": "Fourth Generation Computers (1971-Present)",
      "statement": "Fourth generation computers use Large Scale Integrated (LSI) circuits and microprocessors, have semiconductor memory and Winchester disks for storage, are extremely fast (10 picoseconds), use time-sharing and GUI interfaces, and are programmed in languages like PASCAL and ADA."
    },
    {
      "concept": "Fifth Generation Computers (Present and Beyond)",
      "statement": "Fifth generation computers use Super Large Scale Integrated (SLSI) chips, enable parallel processing, and are characterized by artificial intelligence and robotics."
    },
    {
      "concept": "Father of Computer",
      "statement": "Charles Babbage is called the father of the computer."
    },
    {
      "concept": "Father of Modern Computer",
      "statement": "Alan Turing is known as the father of modern computer."
    },
    {
      "concept": "First Computer Architecture",
      "statement": "The first computer architecture was introduced by John Von Neumann in 1948."
    },
    {
      "concept": "First Electronic Computer Construction",
      "statement": "EDVAC was the first electronic computer constructed at the Moore School of Engineering (USA)."
    },
    {
      "concept": "First Successful Electronic Computer",
      "statement": "ENIAC was the world's first successful electronic computer, developed by J.P. Eckert and J.W. Mauchy."
    },
    {
      "concept": "Binary Number System Suggestion",
      "statement": "The binary number system was suggested by John von Neumann."
    },
    {
      "concept": "Microprocessor Concept",
      "statement": "The microprocessor is the main concept behind the fourth generation of computers."
    },
    {
      "concept": "First Single Chip Microprocessor",
      "statement": "In 1971, Ted Hoff invented the Intel 4004 chip, the world's first single-chip microprocessor."
    },
    {
      "concept": "Transistor Invention",
      "statement": "Transistors were invented by Bell Laboratories in America in 1953 and were made of semiconductors like germanium and silicon."
    },
    {
      "concept": "Integrated Circuit (IC) Invention",
      "statement": "In 1958, Jack St. Clair Kilby and Robert Noyce invented the first IC, made of silicon and containing thousands of transistors on a single chip."
    },
    {
      "concept": "Computer Classification",
      "statement": "Computers are mainly classified based on Size, Work, and Purpose."
    },
    {
      "concept": "Microcomputer Characteristics",
      "statement": "Microcomputers are the least powerful, most widely used, and fastest-growing type of computers, also known as portable computers."
    },
    {
      "concept": "Desktop Computer/Personal Computer (PC)",
      "statement": "Desktop computers or Personal Computers (PCs) are small, relatively inexpensive, and based on microprocessor technology (Integrated Circuit)."
    },
    {
      "concept": "Notebook Computer Characteristics",
      "statement": "Notebook computers, also known as ultrabooks or laptops, are portable, lightweight, include rechargeable batteries, and can work anywhere."
    },
    {
      "concept": "Handheld Computer/Palmtop Characteristics",
      "statement": "Handheld computers or Palmtops are the smallest, designed to fit in the palm, and use a pen for input instead of a keyboard."
    },
    {
      "concept": "Tablet Computer Characteristics",
      "statement": "Tablet computers have key features of notebook computers but accept input from a pen instead of a keyboard or mouse."
    },
    {
      "concept": "Smart Phone Characteristics",
      "statement": "Smart phones are cellular phones that function as both a phone and a small PC, may use a pen or small keyboard, and can connect to the internet wirelessly."
    },
    {
      "concept": "Mainframe Computer Characteristics",
      "statement": "Mainframe computers have large internal memory storage, a comprehensive range of software, and serve as the backbone for businesses, allowing many users to work simultaneously."
    },
    {
      "concept": "Minicomputer Characteristics",
      "statement": "Minicomputers are smaller, faster, and less expensive than mainframe computers, initially designed for specific tasks like CAD, and now often used as servers."
    },
    {
      "concept": "Supercomputer Characteristics",
      "statement": "Supercomputers are the fastest and most expensive machines with high processing speeds measured in FLOPS, used for calculation-intensive tasks like weather forecasting and nuclear research."
    },
    {
      "concept": "First Computer in India",
      "statement": "Siddhartha was the first computer developed in India."
    },
    {
      "concept": "World's First Computer",
      "statement": "The world's first computer, the Z1, was invented by Konrad Zuse."
    },
    {
      "concept": "World's First Supercomputer",
      "statement": "CRAY-1 was the world's first supercomputer introduced by Seymour R. CRAY in 1976."
    },
    {
      "concept": "First Supercomputer in India",
      "statement": "PARAM was the first supercomputer developed in India in 1990, a series of gigaflops assembled by C-DAC in Pune."
    }
  ],
  "definitions": [
    {
      "term": "Computer",
      "meaning": "An electronic machine that accepts data from the user, processes it by performing calculations and operations, and generates desired output as a result."
    },
    {
      "term": "Hardware",
      "meaning": "The collection of physical elements that constitute a computer system; all the physical parts of a computer, e.g., display screens, disks, keyboards, mouse, printers, scanner, chips."
    },
    {
      "term": "Software",
      "meaning": "A set of programs and procedures that tells the hardware what to do and how to accomplish a task, e.g., web browsers, word processors."
    },
    {
      "term": "Data",
      "meaning": "Unprocessed raw facts and figures, like numbers or text on pieces of paper."
    },
    {
      "term": "Information",
      "meaning": "Data that has been processed, organized, structured, or presented in a given context so as to be useful."
    },
    {
      "term": "Instruction",
      "meaning": "A command given to a computer in computer language by the user."
    },
    {
      "term": "Program",
      "meaning": "A set of instructions given to a computer in order to perform some task."
    },
    {
      "term": "Input",
      "meaning": "Information or data that is entered into a computer; it sends data and instructions to the Central Processing Unit (CPU)."
    },
    {
      "term": "Processing",
      "meaning": "The sequence of actions taken on data to convert it into meaningful information, which can include calculations, comparisons, or decisions made by the computer."
    },
    {
      "term": "Output",
      "meaning": "The result of processing data, making the processed data available to the user."
    },
    {
      "term": "Storage",
      "meaning": "The function of a computer system that stores data and programs permanently."
    },
    {
      "term": "Generation of Computer",
      "meaning": "A generation refers to the state of improvement in the development of a computer system, characterized by a major technological development that fundamentally changes how computers operate."
    },
    {
      "term": "Microcomputer",
      "meaning": "A type of computer categorized by size; it is the least powerful, most widely used, and fastest-growing type, often called portable computers."
    },
    {
      "term": "Mainframe Computer",
      "meaning": "A type of computer categorized by size; it has large internal memory storage, a comprehensive range of software, and serves as a central hub for many users."
    },
    {
      "term": "Minicomputer",
      "meaning": "A type of computer categorized by size; it is smaller, faster, and less expensive than a mainframe computer, often used as a server."
    },
    {
      "term": "Supercomputer",
      "meaning": "A type of computer categorized by size; it is the fastest and most expensive machine with high processing speed, used for highly calculation-intensive tasks."
    },
    {
      "term": "Analog Computer",
      "meaning": "A type of computer classified based on work; it deals with continuous data."
    },
    {
      "term": "Digital Computer",
      "meaning": "A type of computer classified based on work; it deals with discrete data (binary numbers)."
    },
    {
      "term": "Hybrid Computer",
      "meaning": "A type of computer classified based on work; it combines features of both analog and digital computers."
    },
    {
      "term": "General Purpose Computer",
      "meaning": "A type of computer classified based on purpose; it can perform a wide variety of tasks."
    },
    {
      "term": "Special Purpose Computer",
      "meaning": "A type of computer classified based on purpose; it is designed to perform a specific task."
    },
    {
      "term": "FLOPS",
      "meaning": "Floating Point Operations Per Second, a unit used to measure the speed of supercomputers."
    }
  ]
}

    CONSTRAINTS:
    - Include "source_snippet": A direct sentence from the PDF that proves the answer.
    - AI Goal: No hallucinations. If fact is not in KB, do not invent it.
    - DO NOT include explanations.

    FORMAT: Output ONLY a JSON array of objects.
    [{ "question": "", "options": { "A":"", "B":"", "C":"", "D":"" }, "correct_answer": "", "explanation": "", "difficulty_level": "", "source_snippet": "" }]
    
```

### Response:
```json
[
  {
    "question": "Which of the following best describes the fundamental components of a computer?",
    "options": {
      "A": "Hardware and Software",
      "B": "CPU and Memory",
      "C": "Input and Output Devices",
      "D": "Algorithms and Data"
    },
    "correct_answer": "A",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Generally, a computer is the combination of Hardware and Software."
  },
  {
    "question": "The term 'computer' is derived from a Latin word that means what?",
    "options": {
      "A": "To calculate",
      "B": "To process",
      "C": "To store",
      "D": "To compute"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The term 'computer' is derived from the Latin word 'computerae', which means 'to compute'."
  },
  {
    "question": "Which of the following is considered the first mechanical calculating device, invented in China?",
    "options": {
      "A": "Napier's Bones",
      "B": "Pascaline",
      "C": "Abacus",
      "D": "Analytical Engine"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "The Abacus was the first mechanical calculating device, invented in China in the 16th century, using beads for representation and horizontal rods for units."
  }
]
```

---

## Interaction [11:07:58]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment. 
    You MUST map this segment to one of the EXISTING CHAPTERS listed below.
    
    
    STRICT RULE: If the text does not fit into any of the chapters below, you MUST output "UNKNOWN" for the chapter field. 
    DO NOT invent a chapter name.

    ALLOWED CHAPTERS FOR Arihant Computer Awareness.pdf:
    - Database Concepts
- Computer Fundamentals
- Hardware & Software
- MS Office (Word, Excel, PowerPoint)
- Internet & Networking
- Database & Programming Basics
- MS-Word
- MS-Excel
- Operating System
- Digital Literacy
- Introduction to Computer
    
    
PRE-VALIDATED MATCHES FROM DATABASE (USE THESE IF APPLICABLE):
{
  "matched_exams": [
    {
      "id": "f773d816-8ffc-45bc-a843-c75db9a47f19",
      "name": "Computer Awareness",
      "full_name": "Computer Awareness",
      "exam_board_id": "f81eea7e-3e58-4fe6-ac6c-82682450a830"
    }
  ],
  "matched_subjects": [
    {
      "id": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
      "name": "Computer Awareness"
    },
    {
      "id": "0d3e0ab3-f9d9-4a35-9e17-4c5a6025b177",
      "name": "General Studies / General awareness",
      "description": "Polity, Economy, History, Geography, Odisha GK & Current Affairs."
    }
  ],
  "matched_boards": []
}

    FORMAT: Output ONLY a JSON object.
    {
      "exam_board": "",
      "exam_name": "",
      "year": "",
      "subject": "pick from discovery",
      "chapter": "PICK FROM ALLOWED LIST OR 'UNKNOWN'",
      "confidence": 0.0
    }

    CONTEXT TEXT (SEGMENT AT 0%):
    arihant
Jobscaptain
LEARN, REVISE
PRACTICE
COMPUTER
AWARENESS
Detailed Synopsis
Practice Questions
Previous Years' Exam Questions
10 Practice Sets
Useful for
IBPS, SBI (BANK PO & CLERK)
SSC, Railways & Other Exams

--- PAGE BREAK ---

CONTENTS
1. Introduction to Computer
2. Computer Architecture
1-11
12-17
3. Input and Output Devices
4. Computer Memory
18-30
31-39
5. Data Representation
40-46
6. Computer Software
47-56
7. Operating System (OS)
57-68
8. Microsoft Windows
69-76
9. Microsoft Office
77-93
10. Database Concepts
94-101
11. Data Communication and Networking
102-115
12. Internet and its Services
116-132
13. Computer Security
133-143
Infoworld Updates
144-146
Abbreviations
147-150
Glossary
151-162
Practice Sets (1-10)
163-192

--- PAGE BREAK ---

www.bankbooks.in
1
Introduction to
Computer
A computer is an electronic machine that accepts data from the user, processes the data by
performing calculations and operations on it and generates the desired output as a result. The
term computer is derived from the Latin word 'computerae' which means 'to compute'.
Generally, computer is the combination of Hardware and
Software which converts data into information. Computer
operates on set of instructions only, they cannot think as human
being.
Scanner
Monitor
Mouse
CPU
Keyboard
A Computer System
Printer
Functioning of a Computer System
Computer is responsible for performing four basic functions
1. Input Information or data that is entered into a computer
is called input. It sends data and instructions to the Central
Processing Unit (CPU).
2. Processing It is the sequence of actions taken on data to
convert it into information which is meaningful to the user. It
can be calculations, comparisons or decisions taken by the
computer.
3. Output It makes processed data available to the user.
4. Storage It stores data and programs permanently.
Terms Related to
Computer
Hardware Hardware is the
collection of physical elements
that constitute a computer
system. It is a comprehensive
term for all the physical parts of a
computer. e.g., display screens,
disks, keyboards. mouse,
printers, scanner, chips, etc.
Software It is a set of programs
and procedures. Software tells
the hardware what to do and how
to accomplish a task. e.g., web
browsers, word processors, etc.
Data Unprocessed raw facts
and figures, like numbers, text on
pieces of paper, are known as
data.
Information When data is
processed, organized, structured
or presented in a given context so
as to be useful, then it is called
information.
Instruction It is a command
given to a computer in the
computer language by the user.
Program It is a set of instructions
given to a computer in order to
perform some task.

--- PAGE BREAK ---

2
www.bankbooks.in
Computer Awareness
Intr
History of Computer Evolution
Computer is not the creation of one day, rather it took a long period for the development of modern computer.
Invention Inventor
Abacus
China
Time
16th
century
Napier's
John
1617
Bones
Napier
Pascaline

    
```

### Response:
```json
{
  "exam_board": "",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Introduction to Computer",
  "confidence": 0.95
}
```

---

## Interaction [11:08:08]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Introduction to Computer
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    arihant
Jobscaptain
LEARN, REVISE
PRACTICE
COMPUTER
AWARENESS
Detailed Synopsis
Practice Questions
Previous Years' Exam Questions
10 Practice Sets
Useful for
IBPS, SBI (BANK PO & CLERK)
SSC, Railways & Other Exams

--- PAGE BREAK ---

CONTENTS
1. Introduction to Computer
2. Computer Architecture
1-11
12-17
3. Input and Output Devices
4. Computer Memory
18-30
31-39
5. Data Representation
40-46
6. Computer Software
47-56
7. Operating System (OS)
57-68
8. Microsoft Windows
69-76
9. Microsoft Office
77-93
10. Database Concepts
94-101
11. Data Communication and Networking
102-115
12. Internet and its Services
116-132
13. Computer Security
133-143
Infoworld Updates
144-146
Abbreviations
147-150
Glossary
151-162
Practice Sets (1-10)
163-192

--- PAGE BREAK ---

www.bankbooks.in
1
Introduction to
Computer
A computer is an electronic machine that accepts data from the user, processes the data by
performing calculations and operations on it and generates the desired output as a result. The
term computer is derived from the Latin word 'computerae' which means 'to compute'.
Generally, computer is the combination of Hardware and
Software which converts data into information. Computer
operates on set of instructions only, they cannot think as human
being.
Scanner
Monitor
Mouse
CPU
Keyboard
A Computer System
Printer
Functioning of a Computer System
Computer is responsible for performing four basic functions
1. Input Information or data that is entered into a computer
is called input. It sends data and instructions to the Central
Processing Unit (CPU).
2. Processing It is the sequence of actions taken on data to
convert it into information which is meaningful to the user. It
can be calculations, comparisons or decisions taken by the
computer.
3. Output It makes processed data available to the user.
4. Storage It stores data and programs permanently.
Terms Related to
Computer
Hardware Hardware is the
collection of physical elements
that constitute a computer
system. It is a comprehensive
term for all the physical parts of a
computer. e.g., display screens,
disks, keyboards. mouse,
printers, scanner, chips, etc.
Software It is a set of programs
and procedures. Software tells
the hardware what to do and how
to accomplish a task. e.g., web
browsers, word processors, etc.
Data Unprocessed raw facts
and figures, like numbers, text on
pieces of paper, are known as
data.
Information When data is
processed, organized, structured
or presented in a given context so
as to be useful, then it is called
information.
Instruction It is a command
given to a computer in the
computer language by the user.
Program It is a set of instructions
given to a computer in order to
perform some task.

--- PAGE BREAK ---

2
www.bankbooks.in
Computer Awareness
Intr
History of Computer Evolution
Computer is not the creation of one day, rather it took a long period for the development of modern computer.
Invention Inventor
Abacus
China
Time
16th
century
Napier's
John
1617
Bones
Napier
Pascaline
Blaise
Pascal
1642
Characteristics
First mechanical calculating device.
• It used set of beads for representing unit.
.
A horizontal rod represent the one, tens,
hundred, etc.
Three dimensional structure.
Holding numbers 0 to 9 only.
Represent graphical structure of
calculating result.
First mechanical adding machine.
It was structured like rectangular box, with
eight disc (represent number of units).
• The term carry was introduced in this
period.
Card of
Holes for
Joseph
Jacquard
1801
.
First mechanical loom.
+
Mainly weaved a silk based pattern.
Weaving
Pattern
Analytical
Engine
Charles
Babbage
1834-71
•
Tabulating Herman
Machine
1880
Hollerith
MARK-I
Howard
Aiken
1944
ENIAC
JP Eckert
and JW
Mauchly
1950
EDSAC
John Von
Neumann
1946-52
UNIVAC
Eckert and 1951
JW
Mauchly
IBM-650
Computer
IBM
Company
1954
• Used punched card for the sequence of
operation.
To program the machine, it used
two-punchcard.
• First general-purpose computer.
•
Stored program in the form of 'pegs' also.
called barrels.
It used punched cards with round holes.
. Read one card at a time.
Consists of interlocking panels of small
glass, counters, switches and control
circuits.
Data can be entered manually.
It is a combination of twenty
accumulators.
It can also tiggered different operations.
It was first computer which provided
storage capacity.
Capable of storing instructions and data
in memory.
Also calculate table of squares and a list
of prime numbers.
• First general-purpose electronic computer
with large amount of input and output.
Performed both numeric and textual
information.
• Provided input/output units converting
alphabetical and special characters to
two-digit decimal code.
Applications
• Used for addition and subtraction
operation.
• Calculation of square roots can also be
performed.
Perform multiplication on numbers.
Technology used for calculation called
Rabdologia.
• Operation performed on the embedded
rods.
Perform addition and subtraction of two
numbers.
Mainly designed with regard to the
pressure of liquid.
Simplified the process of Textiles.
Generally used for basic arithmetic
operations.
It was a decimal machine used sign and
magnitude for representation of a
number.
It was the first electromechanical
machine, which was designed to
process the data for census in 1890.
Mainly used in the war effort during World
War-II.
Magnetic drums are used for storage.
• First electronic digital computer.
Used for weather prediction, atomic energy
calculation and other scientific uses.
First computer program was run on
machine.
Used mercury delay lines for memory and
vacuum tubes for logic.
• Used magnetic tapes as input and
output.
•
Payroll processing
Oil refinery design
Market research analysis

--- PAGE BREAK ---

nd
Introduction to Computer
Generations of Computer
A generation refers to the state of improvement in the development of system. Computers are built of Electromechanical, before generation. Each
generation of computer is characterized by a major technological development that fundamentally changed the way, computers operate.
Generation Year
Switching
Device
Storage
Device
Speed
Operating
System
Language
First
1940-56 Vacuum tubes
Magnetic
drums
333
micro
second
Batch
operating
system
Machine language
(Binary number Os
and 1s)
Second
1956-63 Transistors
Magnetic
core
10 micro
second
technology
Time-sharing
system,
Multitasking
Assembly
language, high
level language
OS
Magnetic
Third
1964-71- Integrated
core as
100
nano
seconds
Real-time
system
High level language
•
Circuits
(ICs)
primary
(FORTRAN,
COBOL) ALGOL
storage
medium
Fourth
1971-
Present
Large Scale
Semi
Integrated (LSI)
conductor
10 pico
second
circuit
memory,
Time sharing
network, GUI
interface.
PASCAL, ADA,
COBOL-74
FORTRAN IV
microprocessor
Winchester
disk
Fifth
Present Super Large
and
Scale Integrated
Beyond (SLSI) chips
Characteristic
Fastest computing device.
• Generate large amount of
heat.
• Non-portable.
• More reliable and less prone
to hardware failure.
⚫ Portable and generate less
amount of heat.
Consumed less power.
Highly sophisticated
technology required.
→ More reliable and portable.
This generation leads to
better communication and
resource sharing.
⚫ Parallel processing
Application
Used for scientific
purpose
e.g., ENIAC,
UNIVAC
Used for
commercial
production
e.g., PDP-8.
IBM-1401
Database
management
system
e.g., NCR-395,
B6500
Distributed system,
e.g., Intel 4004 chip,
Macintosh.
Artificial intelligence
• Intel core microprocessor is
implemented.
e.g., Robotics
• Enables mega chips
3

--- PAGE BREAK ---

4
www.bankbook.in
Computer Awareness
BY
Tit-Bits
Charles Babbage is called the father of computer.
Alan Turing is known as the father of modern
computer.
The First Computer architecture was introduced by
John Von Neumann in 1948.
electronic computer
was the first
EDVAC
constructed at the Moore School of Engineering
(USA).
ENIAC was the world's first successful electronic
computer which was developed by the two.
scientists namely JP Eckert and J W Mauchy. It was
the beginning of first generation computer.
Classification of Computer
Computers are mainly classified as two types
Binary number system was suggested by John von
Neumann
Microprocessor is the main concept behind fourth
generation of computer.
In 1971, Ted Hoff invented Intel 4004 chip which was
the world's first single chip microprocessor.
Transistors were invented by Bell laboratory of
and were made
America in
semiconductors like germanium and silicon.
1953
up
of
In 1958. Jack St. Clair Kilby and Robert Noyce
invented the first IC. IC was made up of silicon
material and consists of thousands of transistors on
a single chip.
Classification of Computer
Based on Size
Based on Work
Based on Purpose
Microcomputer
Minicomputer
Analog
Computer
Hybrid
Computer
General
Purpose
Special
Purpose
Mainframe
Computer
Supercomputer
Digital
Computer
Based on Size
On the basis of size, computer are categorise as
follows
1. Microcomputer
Microcomputers are the least powerful, yet the
most widely used and fastest growing type of
computers and are also called portable
computers. Microcomputer consists of three
basic categories of physical equipment i.e system
unit, input/output and memory.
Some types of microcomputer are
Desktop Computer or Personal Computer
(PC) These are small, relatively inexpensive
computers. These are based on the micro-
processor technology (Integrated Circuit).
Notebook Notebook computers, also known as
ultra book or laptop, are portable lightweight and
into most briefcases. They include
fit
rechargeable battery, so these can work anywhere.
Laptops were developed by Alan Kay.
Handheld Computers or Palmtops These are
the smallest and are designed to fit into the palm.
So, these are also known as Palmtop/PDA. They
are practical for certain functions such as phone
books and calendars. They use the for input
instead of keyboard.
pen
Tablet Computer They have key features of the
notebook computer, but it can accept input from
a pen instead of the keyboard or mouse.
Smart Phones Smart phones are cellular phones
that function both as a phone and as a small PC.
They may use a pen or may have a small
keyboard. They can be connected to the internet
wirelessly. Apple, Blackberry, Nokia are some
manufacturers of smart phones.
I

--- PAGE BREAK ---

n
h
S
f
f
e
า
า
www.bankbook.in
Introduction to Computer
2. Mainframe Computer
Mainframe computers are those having large internal
memory storage and comprehensive range of software.
Mainframe computer serves as a backbone for the entire
business world. It is considered as the heart of a network
of computers or terminals that allows a large number of
people to work at the same time. Mainframe computers
are IBM-370, IBM-S/390, UNIVAC-1110.
3. Minicomputer
Minicomputers are smaller in size, faster, cost lower than
mainframe computers. Initially, the minicomputer was
designed to carry out some specific tasks, like engineering
and Computer Aided Design (CAD) calculations. But
now, they are being used as central computer which is
called as Server. Mini computers are IBM-17, DEC
PDP-11, HP-9000, etc.
4. Supercomputer
Supercomputers are the fastest and the most expensive
machines. They have high processing speed compared to
other computers. The speed of supercomputers are
measured in FLOPS (Floating Point Operations Per
Second).
Supercomputers are used for highly calculationintensive
tasks, such as weather foresting, nuclear research,
military agencies and scientific research laboratories.
Supercomputers are most powerful, large in size and
memory, compared to all other computers.
Tit-Bits
Siddhartha was the first computer developed in India.
The world's first computer called the Z1, was invented by
Konrad Zuse.
CRAY-1 was the world's first supercomputer introduced by
Seymour R CRAY in 1976.
PARAM was the first supercomputer developed in India in
1990. It is a series of gigaflops, assembled by C-DAC in
Pune.
PARAM YUVA II is the latest machine in the series of
PARAM made by
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Computer Term Derivation",
      "statement": "The term 'computer' is derived from the Latin word 'computerae', meaning 'to compute'."
    },
    {
      "concept": "Computer Composition",
      "statement": "Generally, a computer is the combination of Hardware and Software."
    },
    {
      "concept": "Computer Operation",
      "statement": "Computers operate on a set of instructions only; they cannot think like human beings."
    },
    {
      "concept": "Computer Basic Functions",
      "statement": "A computer system performs four basic functions: Input, Processing, Output, and Storage."
    },
    {
      "concept": "Input Function",
      "statement": "Input is information or data entered into a computer, which sends data and instructions to the CPU."
    },
    {
      "concept": "Processing Function",
      "statement": "Processing is the sequence of actions taken on data to convert it into meaningful information, involving calculations, comparisons, or decisions."
    },
    {
      "concept": "Output Function",
      "statement": "Output makes processed data available to the user."
    },
    {
      "concept": "Storage Function",
      "statement": "Storage permanently stores data and programs."
    },
    {
      "concept": "Abacus",
      "statement": "The Abacus, invented in China in the 16th century, was the first mechanical calculating device using beads for representation."
    },
    {
      "concept": "Napier's Bones",
      "statement": "Napier's Bones, invented by John Napier in 1617, used a horizontal rod to represent units, tens, hundreds, etc., and could hold numbers 0 to 9."
    },
    {
      "concept": "Pascaline",
      "statement": "The Pascaline, invented by Blaise Pascal in 1642, was the first mechanical adding machine with eight discs and introduced the term 'carry'."
    },
    {
      "concept": "Jacquard Loom",
      "statement": "Joseph Jacquard's Card of Holes for Weaving Pattern in 1801 was the first mechanical loom, mainly used for weaving silk patterns."
    },
    {
      "concept": "Analytical Engine",
      "statement": "Charles Babbage's Analytical Engine (1834-71) used punched cards for the sequence of operations and was the first general-purpose computer."
    },
    {
      "concept": "Tabulating Machine",
      "statement": "Herman Hollerith's Tabulating Machine (1880) used punched cards with round holes and was designed to process data for the 1890 census."
    },
    {
      "concept": "MARK-I",
      "statement": "Howard Aiken's MARK-I (1944) was the first electromechanical machine, mainly used in the war effort during World War-II, and used magnetic drums for storage."
    },
    {
      "concept": "ENIAC",
      "statement": "ENIAC (1950), developed by J.P. Eckert and J.W. Mauchly, was the first general-purpose electronic computer with large input/output capabilities and performed both numeric and textual information processing."
    },
    {
      "concept": "EDSAC",
      "statement": "EDSAC (1946-52), developed by John Von Neumann, was the first electronic digital computer, capable of storing instructions and data in memory, and used mercury delay lines for memory."
    },
    {
      "concept": "UNIVAC",
      "statement": "UNIVAC (1951), by Eckert and Mauchly, was the first general-purpose electronic computer with large input/output, performing both numeric and textual information."
    },
    {
      "concept": "IBM-650",
      "statement": "The IBM-650 (1954) was a decimal machine used for payroll processing, oil refinery design, and market research analysis."
    },
    {
      "concept": "Generations of Computers",
      "statement": "Generations of computers refer to stages of development characterized by major technological advancements."
    },
    {
      "concept": "First Generation Computers (1940-56)",
      "statement": "First generation computers used vacuum tubes for switching, magnetic drums for storage, were slow (333 microseconds), used batch operating systems, and were programmed in machine language."
    },
    {
      "concept": "Second Generation Computers (1956-63)",
      "statement": "Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking OS, and supported assembly and high-level languages."
    },
    {
      "concept": "Third Generation Computers (1964-71)",
      "statement": "Third generation computers used Integrated Circuits (ICs), magnetic core for primary storage, were very fast (100 nanoseconds), used real-time systems, and high-level languages like FORTRAN and COBOL."
    },
    {
      "concept": "Fourth Generation Computers (1971-Present)",
      "statement": "Fourth generation computers use Large Scale Integrated (LSI) circuits and microprocessors, are extremely fast (10 picoseconds), utilize time-sharing networks and GUIs, and support languages like PASCAL and ADA."
    },
    {
      "concept": "Fifth Generation Computers (Present and Beyond)",
      "statement": "Fifth generation computers use Super Large Scale Integrated (SLSI) chips, are the fastest, and are focused on artificial intelligence and parallel processing."
    },
    {
      "concept": "Charles Babbage",
      "statement": "Charles Babbage is known as the father of the computer."
    },
    {
      "concept": "Alan Turing",
      "statement": "Alan Turing is known as the father of modern computer."
    },
    {
      "concept": "John Von Neumann",
      "statement": "The first computer architecture was introduced by John Von Neumann in 1948. He also suggested the binary number system."
    },
    {
      "concept": "EDVAC",
      "statement": "EDVAC was the first electronic computer constructed at the Moore School of Engineering (USA)."
    },
    {
      "concept": "ENIAC",
      "statement": "ENIAC was the world's first successful electronic computer, developed by J.P. Eckert and J.W. Mauchly, marking the beginning of the first generation."
    },
    {
      "concept": "Microprocessor",
      "statement": "The microprocessor is the main concept behind the fourth generation of computers."
    },
    {
      "concept": "Intel 4004 Chip",
      "statement": "In 1971, Ted Hoff invented the Intel 4004 chip, the world's first single-chip microprocessor."
    },
    {
      "concept": "Transistor Invention",
      "statement": "Transistors were invented by Bell Laboratories in America in 1953, made from semiconductors like germanium and silicon."
    },
    {
      "concept": "Integrated Circuit (IC) Invention",
      "statement": "In 1958, Jack St. Clair Kilby and Robert Noyce invented the first IC, made of silicon and containing thousands of transistors on a single chip."
    },
    {
      "concept": "Computer Classification",
      "statement": "Computers are mainly classified based on Size, Work, and Purpose."
    },
    {
      "concept": "Microcomputer Characteristics",
      "statement": "Microcomputers are the least powerful, most widely used, and fastest-growing type of computers, also known as portable computers."
    },
    {
      "concept": "Desktop Computer",
      "statement": "Desktop computers, or Personal Computers (PCs), are small, inexpensive, and based on microprocessor technology."
    },
    {
      "concept": "Notebook Computer",
      "statement": "Notebook computers (laptops, ultrabooks) are portable, lightweight, include rechargeable batteries, and can work anywhere."
    },
    {
      "concept": "Handheld Computers",
      "statement": "Handheld computers (palmtops, PDAs) are the smallest, designed to fit in the palm, and use a pen for input."
    },
    {
      "concept": "Tablet Computer",
      "statement": "Tablet computers accept input from a pen and share key features with notebook computers."
    },
    {
      "concept": "Smart Phones",
      "statement": "Smart phones are cellular phones that function as both a phone and a small PC, can use a pen or keyboard, and connect to the internet wirelessly."
    },
    {
      "concept": "Mainframe Computer Characteristics",
      "statement": "Mainframe computers have large internal memory, comprehensive software, and serve as the backbone for businesses, allowing many users to work simultaneously."
    },
    {
      "concept": "Minicomputer Characteristics",
      "statement": "Minicomputers are smaller, faster, and cheaper than mainframes; initially designed for specific tasks, they are now used as servers."
    },
    {
      "concept": "Supercomputer Characteristics",
      "statement": "Supercomputers are the fastest and most expensive machines with high processing speeds measured in FLOPS, used for highly calculation-intensive tasks."
    },
    {
      "concept": "Siddhartha Computer",
      "statement": "Siddhartha was the first computer developed in India."
    },
    {
      "concept": "Z1 Computer",
      "statement": "The world's first computer, the Z1, was invented by Konrad Zuse."
    },
    {
      "concept": "CRAY-1 Supercomputer",
      "statement": "CRAY-1 was the world's first supercomputer, introduced by Seymour R. CRAY in 1976."
    },
    {
      "concept": "PARAM Supercomputer",
      "statement": "PARAM was the first supercomputer developed in India in 1990 by C-DAC, Pune."
    }
  ],
  "definitions": [
    {
      "term": "Computer",
      "meaning": "An electronic machine that accepts data, processes it, and generates output."
    },
    {
      "term": "Hardware",
      "meaning": "The collection of physical elements that constitute a computer system; all physical parts of a computer (e.g., display screens, disks, keyboards, mouse, printers, scanner, chips)."
    },
    {
      "term": "Software",
      "meaning": "A set of programs and procedures that tells the hardware what to do and how to accomplish a task (e.g., web browsers, word processors)."
    },
    {
      "term": "Data",
      "meaning": "Unprocessed raw facts and figures, such as numbers or text."
    },
    {
      "term": "Information",
      "meaning": "Data that has been processed, organized, structured, or presented in a context to be useful."
    },
    {
      "term": "Instruction",
      "meaning": "A command given to a computer in a computer language by the user."
    },
    {
      "term": "Program",
      "meaning": "A set of instructions given to a computer to perform a specific task."
    },
    {
      "term": "Generation (of Computer)",
      "meaning": "A stage of improvement in the development of computer systems, characterized by a major technological development."
    },
    {
      "term": "Microcomputer",
      "meaning": "A type of computer that is small, relatively inexpensive, and widely used, often portable."
    },
    {
      "term": "Mainframe Computer",
      "meaning": "A large, powerful computer with extensive memory and software, serving as a central hub for many users."
    },
    {
      "term": "Minicomputer",
      "meaning": "A computer smaller, faster, and less expensive than a mainframe, often used as a server."
    },
    {
      "term": "Supercomputer",
      "meaning": "The fastest and most expensive type of computer, designed for highly complex calculations."
    },
    {
      "term": "FLOPS",
      "meaning": "Floating Point Operations Per Second, a unit used to measure the speed of supercomputers."
    },
    {
      "term": "Desktop Computer / Personal Computer (PC)",
      "meaning": "A small, relatively inexpensive computer based on microprocessor technology."
    },
    {
      "term": "Notebook Computer / Laptop / Ultrabook",
      "meaning": "A portable, lightweight computer with a rechargeable battery."
    },
    {
      "term": "Handheld Computer / Palmtop / PDA",
      "meaning": "The smallest type of computer, designed to fit in the palm, often using a pen for input."
    },
    {
      "term": "Tablet Computer",
      "meaning": "A computer with features of a notebook that accepts input from a pen."
    },
    {
      "term": "Smart Phone",
      "meaning": "A cellular phone that also functions as a small PC, capable of internet connectivity."
    }
  ]
}
```

---

## Interaction [11:09:26]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Introduction to Computer.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Computer Term Derivation",
      "statement": "The term 'computer' is derived from the Latin word 'computerae', meaning 'to compute'."
    },
    {
      "concept": "Computer Composition",
      "statement": "Generally, a computer is the combination of Hardware and Software."
    },
    {
      "concept": "Computer Operation",
      "statement": "Computers operate on a set of instructions only; they cannot think like human beings."
    },
    {
      "concept": "Computer Basic Functions",
      "statement": "A computer system performs four basic functions: Input, Processing, Output, and Storage."
    },
    {
      "concept": "Input Function",
      "statement": "Input is information or data entered into a computer, which sends data and instructions to the CPU."
    },
    {
      "concept": "Processing Function",
      "statement": "Processing is the sequence of actions taken on data to convert it into meaningful information, involving calculations, comparisons, or decisions."
    },
    {
      "concept": "Output Function",
      "statement": "Output makes processed data available to the user."
    },
    {
      "concept": "Storage Function",
      "statement": "Storage permanently stores data and programs."
    },
    {
      "concept": "Abacus",
      "statement": "The Abacus, invented in China in the 16th century, was the first mechanical calculating device using beads for representation."
    },
    {
      "concept": "Napier's Bones",
      "statement": "Napier's Bones, invented by John Napier in 1617, used a horizontal rod to represent units, tens, hundreds, etc., and could hold numbers 0 to 9."
    },
    {
      "concept": "Pascaline",
      "statement": "The Pascaline, invented by Blaise Pascal in 1642, was the first mechanical adding machine with eight discs and introduced the term 'carry'."
    },
    {
      "concept": "Jacquard Loom",
      "statement": "Joseph Jacquard's Card of Holes for Weaving Pattern in 1801 was the first mechanical loom, mainly used for weaving silk patterns."
    },
    {
      "concept": "Analytical Engine",
      "statement": "Charles Babbage's Analytical Engine (1834-71) used punched cards for the sequence of operations and was the first general-purpose computer."
    },
    {
      "concept": "Tabulating Machine",
      "statement": "Herman Hollerith's Tabulating Machine (1880) used punched cards with round holes and was designed to process data for the 1890 census."
    },
    {
      "concept": "MARK-I",
      "statement": "Howard Aiken's MARK-I (1944) was the first electromechanical machine, mainly used in the war effort during World War-II, and used magnetic drums for storage."
    },
    {
      "concept": "ENIAC",
      "statement": "ENIAC (1950), developed by J.P. Eckert and J.W. Mauchly, was the first general-purpose electronic computer with large input/output capabilities and performed both numeric and textual information processing."
    },
    {
      "concept": "EDSAC",
      "statement": "EDSAC (1946-52), developed by John Von Neumann, was the first electronic digital computer, capable of storing instructions and data in memory, and used mercury delay lines for memory."
    },
    {
      "concept": "UNIVAC",
      "statement": "UNIVAC (1951), by Eckert and Mauchly, was the first general-purpose electronic computer with large input/output, performing both numeric and textual information."
    },
    {
      "concept": "IBM-650",
      "statement": "The IBM-650 (1954) was a decimal machine used for payroll processing, oil refinery design, and market research analysis."
    },
    {
      "concept": "Generations of Computers",
      "statement": "Generations of computers refer to stages of development characterized by major technological advancements."
    },
    {
      "concept": "First Generation Computers (1940-56)",
      "statement": "First generation computers used vacuum tubes for switching, magnetic drums for storage, were slow (333 microseconds), used batch operating systems, and were programmed in machine language."
    },
    {
      "concept": "Second Generation Computers (1956-63)",
      "statement": "Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking OS, and supported assembly and high-level languages."
    },
    {
      "concept": "Third Generation Computers (1964-71)",
      "statement": "Third generation computers used Integrated Circuits (ICs), magnetic core for primary storage, were very fast (100 nanoseconds), used real-time systems, and high-level languages like FORTRAN and COBOL."
    },
    {
      "concept": "Fourth Generation Computers (1971-Present)",
      "statement": "Fourth generation computers use Large Scale Integrated (LSI) circuits and microprocessors, are extremely fast (10 picoseconds), utilize time-sharing networks and GUIs, and support languages like PASCAL and ADA."
    },
    {
      "concept": "Fifth Generation Computers (Present and Beyond)",
      "statement": "Fifth generation computers use Super Large Scale Integrated (SLSI) chips, are the fastest, and are focused on artificial intelligence and parallel processing."
    },
    {
      "concept": "Charles Babbage",
      "statement": "Charles Babbage is known as the father of the computer."
    },
    {
      "concept": "Alan Turing",
      "statement": "Alan Turing is known as the father of modern computer."
    },
    {
      "concept": "John Von Neumann",
      "statement": "The first computer architecture was introduced by John Von Neumann in 1948. He also suggested the binary number system."
    },
    {
      "concept": "EDVAC",
      "statement": "EDVAC was the first electronic computer constructed at the Moore School of Engineering (USA)."
    },
    {
      "concept": "ENIAC",
      "statement": "ENIAC was the world's first successful electronic computer, developed by J.P. Eckert and J.W. Mauchly, marking the beginning of the first generation."
    },
    {
      "concept": "Microprocessor",
      "statement": "The microprocessor is the main concept behind the fourth generation of computers."
    },
    {
      "concept": "Intel 4004 Chip",
      "statement": "In 1971, Ted Hoff invented the Intel 4004 chip, the world's first single-chip microprocessor."
    },
    {
      "concept": "Transistor Invention",
      "statement": "Transistors were invented by Bell Laboratories in America in 1953, made from semiconductors like germanium and silicon."
    },
    {
      "concept": "Integrated Circuit (IC) Invention",
      "statement": "In 1958, Jack St. Clair Kilby and Robert Noyce invented the first IC, made of silicon and containing thousands of transistors on a single chip."
    },
    {
      "concept": "Computer Classification",
      "statement": "Computers are mainly classified based on Size, Work, and Purpose."
    },
    {
      "concept": "Microcomputer Characteristics",
      "statement": "Microcomputers are the least powerful, most widely used, and fastest-growing type of computers, also known as portable computers."
    },
    {
      "concept": "Desktop Computer",
      "statement": "Desktop computers, or Personal Computers (PCs), are small, inexpensive, and based on microprocessor technology."
    },
    {
      "concept": "Notebook Computer",
      "statement": "Notebook computers (laptops, ultrabooks) are portable, lightweight, include rechargeable batteries, and can work anywhere."
    },
    {
      "concept": "Handheld Computers",
      "statement": "Handheld computers (palmtops, PDAs) are the smallest, designed to fit in the palm, and use a pen for input."
    },
    {
      "concept": "Tablet Computer",
      "statement": "Tablet computers accept input from a pen and share key features with notebook computers."
    },
    {
      "concept": "Smart Phones",
      "statement": "Smart phones are cellular phones that function as both a phone and a small PC, can use a pen or keyboard, and connect to the internet wirelessly."
    },
    {
      "concept": "Mainframe Computer Characteristics",
      "statement": "Mainframe computers have large internal memory, comprehensive software, and serve as the backbone for businesses, allowing many users to work simultaneously."
    },
    {
      "concept": "Minicomputer Characteristics",
      "statement": "Minicomputers are smaller, faster, and cheaper than mainframes; initially designed for specific tasks, they are now used as servers."
    },
    {
      "concept": "Supercomputer Characteristics",
      "statement": "Supercomputers are the fastest and most expensive machines with high processing speeds measured in FLOPS, used for highly calculation-intensive tasks."
    },
    {
      "concept": "Siddhartha Computer",
      "statement": "Siddhartha was the first computer developed in India."
    },
    {
      "concept": "Z1 Computer",
      "statement": "The world's first computer, the Z1, was invented by Konrad Zuse."
    },
    {
      "concept": "CRAY-1 Supercomputer",
      "statement": "CRAY-1 was the world's first supercomputer, introduced by Seymour R. CRAY in 1976."
    },
    {
      "concept": "PARAM Supercomputer",
      "statement": "PARAM was the first supercomputer developed in India in 1990 by C-DAC, Pune."
    }
  ],
  "definitions": [
    {
      "term": "Computer",
      "meaning": "An electronic machine that accepts data, processes it, and generates output."
    },
    {
      "term": "Hardware",
      "meaning": "The collection of physical elements that constitute a computer system; all physical parts of a computer (e.g., display screens, disks, keyboards, mouse, printers, scanner, chips)."
    },
    {
      "term": "Software",
      "meaning": "A set of programs and procedures that tells the hardware what to do and how to accomplish a task (e.g., web browsers, word processors)."
    },
    {
      "term": "Data",
      "meaning": "Unprocessed raw facts and figures, such as numbers or text."
    },
    {
      "term": "Information",
      "meaning": "Data that has been processed, organized, structured, or presented in a context to be useful."
    },
    {
      "term": "Instruction",
      "meaning": "A command given to a computer in a computer language by the user."
    },
    {
      "term": "Program",
      "meaning": "A set of instructions given to a computer to perform a specific task."
    },
    {
      "term": "Generation (of Computer)",
      "meaning": "A stage of improvement in the development of computer systems, characterized by a major technological development."
    },
    {
      "term": "Microcomputer",
      "meaning": "A type of computer that is small, relatively inexpensive, and widely used, often portable."
    },
    {
      "term": "Mainframe Computer",
      "meaning": "A large, powerful computer with extensive memory and software, serving as a central hub for many users."
    },
    {
      "term": "Minicomputer",
      "meaning": "A computer smaller, faster, and less expensive than a mainframe, often used as a server."
    },
    {
      "term": "Supercomputer",
      "meaning": "The fastest and most expensive type of computer, designed for highly complex calculations."
    },
    {
      "term": "FLOPS",
      "meaning": "Floating Point Operations Per Second, a unit used to measure the speed of supercomputers."
    },
    {
      "term": "Desktop Computer / Personal Computer (PC)",
      "meaning": "A small, relatively inexpensive computer based on microprocessor technology."
    },
    {
      "term": "Notebook Computer / Laptop / Ultrabook",
      "meaning": "A portable, lightweight computer with a rechargeable battery."
    },
    {
      "term": "Handheld Computer / Palmtop / PDA",
      "meaning": "The smallest type of computer, designed to fit in the palm, often using a pen for input."
    },
    {
      "term": "Tablet Computer",
      "meaning": "A computer with features of a notebook that accepts input from a pen."
    },
    {
      "term": "Smart Phone",
      "meaning": "A cellular phone that also functions as a small PC, capable of internet connectivity."
    }
  ]
}

    CONSTRAINTS:
    - Include "source_snippet": A direct sentence from the PDF that proves the answer.
    - AI Goal: No hallucinations. If fact is not in KB, do not invent it.
    - DO NOT include explanations.

    FORMAT: Output ONLY a JSON array of objects.
    [{ "question": "", "options": { "A":"", "B":"", "C":"", "D":"" }, "correct_answer": "", "explanation": "", "difficulty_level": "", "source_snippet": "" }]
    
```

### Response:
```json
[
  {
    "question": "What is the primary function of a computer system, as defined by its basic operations?",
    "options": {
      "A": "Input, Processing, Output, and Storage",
      "B": "Calculation, Communication, Creation, and Consumption",
      "C": "Hardware, Software, Network, and User",
      "D": "Data Entry, Analysis, Reporting, and Archiving"
    },
    "correct_answer": "A",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A computer system performs four basic functions: Input, Processing, Output, and Storage."
  },
  {
    "question": "Which historical calculating device, invented in China, used beads for representing numbers?",
    "options": {
      "A": "Napier's Bones",
      "B": "Pascaline",
      "C": "Abacus",
      "D": "Analytical Engine"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The Abacus, invented in China in the 16th century, was the first mechanical calculating device using beads for representation."
  },
  {
    "question": "Who is widely recognized as the 'father of the computer'?",
    "options": {
      "A": "Alan Turing",
      "B": "Charles Babbage",
      "C": "John Von Neumann",
      "D": "Herman Hollerith"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Charles Babbage is known as the father of the computer."
  },
  {
    "question": "The term 'computer' originates from which Latin word, meaning 'to compute'?",
    "options": {
      "A": "Computare",
      "B": "Calculare",
      "C": "Computerae",
      "D": "Processare"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "The term 'computer' is derived from the Latin word 'computerae', meaning 'to compute'."
  },
  {
    "question": "Which of the following inventions by Charles Babbage is considered the first general-purpose computer?",
    "options": {
      "A": "Difference Engine",
      "B": "Analytical Engine",
      "C": "Tabulating Machine",
      "D": "Pascaline"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Charles Babbage's Analytical Engine (1834-71) used punched cards for the sequence of operations and was the first general-purpose computer."
  },
  {
    "question": "What technological component characterized the first generation of computers (1940-1956)?",
    "options": {
      "A": "Transistors",
      "B": "Integrated Circuits (ICs)",
      "C": "Microprocessors",
      "D": "Vacuum Tubes"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "First generation computers used vacuum tubes for switching, magnetic drums for storage, were slow (333 microseconds), used batch operating systems, and were programmed in machine language."
  },
  {
    "question": "Which generation of computers is characterized by the use of transistors and was faster than the first generation?",
    "options": {
      "A": "First Generation",
      "B": "Second Generation",
      "C": "Third Generation",
      "D": "Fourth Generation"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking OS, and supported assembly and high-level languages."
  },
  {
    "question": "What is the main technological innovation that defines the fourth generation of computers (1971-Present)?",
    "options": {
      "A": "Vacuum Tubes",
      "B": "Transistors",
      "C": "Integrated Circuits (ICs)",
      "D": "Microprocessors"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "The microprocessor is the main concept behind the fourth generation of computers."
  },
  {
    "question": "According to the knowledge base, what are computers primarily classified based on?",
    "options": {
      "A": "Speed, Memory, and Cost",
      "B": "Size, Work, and Purpose",
      "C": "Operating System, Programming Language, and Application",
      "D": "Input Devices, Output Devices, and Processing Unit"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Computers are mainly classified based on Size, Work, and Purpose."
  },
  {
    "question": "Which type of computer is described as the fastest and most expensive, used for highly calculation-intensive tasks?",
    "options": {
      "A": "Mainframe Computer",
      "B": "Minicomputer",
      "C": "Microcomputer",
      "D": "Supercomputer"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Supercomputers are the fastest and most expensive machines with high processing speeds measured in FLOPS, used for highly calculation-intensive tasks."
  }
]
```

---

## Interaction [11:09:29]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary function of a computer system, as defined by its basic operations?
        Proposed Answer: A (Input, Processing, Output, and Storage)
        Source Snippet provided by Writer: A computer system performs four basic functions: Input, Processing, Output, and Storage.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet explicitly lists the four basic functions of a computer system as Input, Processing, Output, and Storage, which directly matches the proposed answer 'A (Input, Processing, Output, and Storage)'."
}
```

---

## Interaction [11:09:31]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which historical calculating device, invented in China, used beads for representing numbers?
        Proposed Answer: C (Abacus)
        Source Snippet provided by Writer: The Abacus, invented in China in the 16th century, was the first mechanical calculating device using beads for representation.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet states the Abacus was invented in the 16th century, but historical records indicate it was invented much earlier, around the 2nd century BCE. This factual inaccuracy in the source snippet means it does not fully and accurately prove the proposed answer in the context of historical accuracy."}
```

---

## Interaction [11:09:35]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: The term 'computer' originates from which Latin word, meaning 'to compute'?
        Proposed Answer: C (Computerae)
        Source Snippet provided by Writer: The term 'computer' is derived from the Latin word 'computerae', meaning 'to compute'.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet states the Latin word is 'computerae', but the proposed answer is 'C (Computerae)'. The 'C' is not part of the Latin word and suggests a multiple-choice option that is not present in the provided context. Therefore, the proposed answer is not directly proven by the snippet."}
```

---

## Interaction [11:09:37]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following inventions by Charles Babbage is considered the first general-purpose computer?
        Proposed Answer: B (Analytical Engine)
        Source Snippet provided by Writer: Charles Babbage's Analytical Engine (1834-71) used punched cards for the sequence of operations and was the first general-purpose computer.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that Charles Babbage's Analytical Engine was the first general-purpose computer, directly supporting the proposed answer."}
```

---

## Interaction [11:09:40]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which generation of computers is characterized by the use of transistors and was faster than the first generation?
        Proposed Answer: B (Second Generation)
        Source Snippet provided by Writer: Second generation computers used transistors, magnetic core for storage, were faster (10 microseconds), used time-sharing and multitasking OS, and supported assembly and high-level languages.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the second generation computers used transistors and were faster than the first generation, directly supporting the proposed answer."}
```

---

## Interaction [11:09:43]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the main technological innovation that defines the fourth generation of computers (1971-Present)?
        Proposed Answer: D (Microprocessors)
        Source Snippet provided by Writer: The microprocessor is the main concept behind the fourth generation of computers.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the microprocessor is the main concept behind the fourth generation of computers, which factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [11:09:45]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: According to the knowledge base, what are computers primarily classified based on?
        Proposed Answer: B (Size, Work, and Purpose)
        Source Snippet provided by Writer: Computers are mainly classified based on Size, Work, and Purpose.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that computers are mainly classified based on Size, Work, and Purpose, which perfectly matches the proposed answer B."}
```

---

## Interaction [11:09:47]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which type of computer is described as the fastest and most expensive, used for highly calculation-intensive tasks?
        Proposed Answer: D (Supercomputer)
        Source Snippet provided by Writer: Supercomputers are the fastest and most expensive machines with high processing speeds measured in FLOPS, used for highly calculation-intensive tasks.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Supercomputers are the fastest and most expensive machines... used for highly calculation-intensive tasks,' which perfectly matches the proposed answer and the question's description."}
```

---

