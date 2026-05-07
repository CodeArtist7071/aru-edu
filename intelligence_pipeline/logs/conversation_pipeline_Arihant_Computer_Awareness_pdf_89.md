# AI Conversation Log: pipeline_Arihant_Computer_Awareness_pdf_89
Model: gemini-2.5-flash-lite
Date: 2026-04-15T10:38:36.392921

## Interaction [10:38:39]

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

    CONTEXT TEXT (SEGMENT AT 89%):
     computer (4) Notebook computer
(5) Microcomputer
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Practice Set 4
Downloaded From: www.EasyEngineering.net
า
is wrong?
oft
ol by adobe
ware
a flowchart
h references
face
S
l computer
ter system
to machine
ments on a
S
pagination
page,
in
the rest of
browser
S devices
essing cycle
found in a
puter
computer
16.
Which of the following is not true about
computer files?
(1) They are collections of data saved to a storage
medium
(2) Every file has a file name
(3) A file extension is established by the user to
indicate the file's contents
(4) Files usually contain data
(5) None of the above
17. All of the following are examples of real
security and privacy risks except
(1) hackers
(3) viruses
(5) None of these
18. Compiler is the
(2) spam
(4) identity theft
(1) name given to the computer operator
(2) part of the digital machine to store the
information
(3) translator of source program to object
(4) part of arithmetic logic unit
(5) operator of boolean algebra
19. Main memory
is
(1) Random Access Memory (RAM)
(2) Read Only Memory (ROM)
(3) Serial Access Memory (SAM)
(4) Storage Memory (SM)
(5) None of the above
20. Which of the following is the smallest and
fastest computer imitating brain working?
(1) Supercomputer
(3) Param-1000
(5) None of these
(2) Quantum computer
(4) IBM chips
21. A Compact Disc (CD) is a data storage of
which type?
(1) Magnetic
(3) Electrical
(5) None of these
(2) Optical
(4) Electromechanical
22. Which of the following is not a language for
computer programming?
(2) Pascal
(1) Windows
(4) Cobol
(5) All of these
(3) Basic
23. A computer with CPU speed around
100 million instructions per second with the
word length of around 64 bits is known as
(1) super computer
(3) micro computer
(5) None of these
(2) mini computer
(4) macro computer
24. The term gigabyte refers to
(1) 1024 bytes
(3) 1024 megabytes
(5) None of these
(2) 1024 kilobytes
173
(4) 1024 gigabytes
25. Which of the following is not one of the four
major data processing functions of a computer?
(1) Gathering data
(2) Processing data into information
(3) Analysing the data or information
(4) Storing the data or information
(5) None of the above
26. When you connect to this service your
computer is communicating with a server at
your Internet Service Provider (ISP).
(1) Modem
(4) Server
(2) Internet
(5) Computer
(3) Intranet
27. These are computers that excel at executing
many different computer programs at the
same time.
(1) Mainframes (2) Mini
(4) Digital
(3) Macro
(5) Hybrid
28. Hard disk drives and CD drives are examples
of
(1) back up
(4) All of these
(2) storing
(3) storage
(5) None of these
software to create
29. You would use
spreadsheets, type documents and edit
photos.
(1) application (2) utility
(4) operating (5) None of these
(3) system
30. These are computers that support hundreds
or thousands of users simultaneously.
(1) Super
(2) Macro
(4) Mainframes (5) Digital
(3) Mini
31. A......is a microprocess
    
```

### Response:
```json
{
  "exam_board": "",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Computer Fundamentals",
  "confidence": 0.95
}
```

---

## Interaction [10:38:48]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Computer Fundamentals
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
     computer (4) Notebook computer
(5) Microcomputer
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Practice Set 4
Downloaded From: www.EasyEngineering.net
า
is wrong?
oft
ol by adobe
ware
a flowchart
h references
face
S
l computer
ter system
to machine
ments on a
S
pagination
page,
in
the rest of
browser
S devices
essing cycle
found in a
puter
computer
16.
Which of the following is not true about
computer files?
(1) They are collections of data saved to a storage
medium
(2) Every file has a file name
(3) A file extension is established by the user to
indicate the file's contents
(4) Files usually contain data
(5) None of the above
17. All of the following are examples of real
security and privacy risks except
(1) hackers
(3) viruses
(5) None of these
18. Compiler is the
(2) spam
(4) identity theft
(1) name given to the computer operator
(2) part of the digital machine to store the
information
(3) translator of source program to object
(4) part of arithmetic logic unit
(5) operator of boolean algebra
19. Main memory
is
(1) Random Access Memory (RAM)
(2) Read Only Memory (ROM)
(3) Serial Access Memory (SAM)
(4) Storage Memory (SM)
(5) None of the above
20. Which of the following is the smallest and
fastest computer imitating brain working?
(1) Supercomputer
(3) Param-1000
(5) None of these
(2) Quantum computer
(4) IBM chips
21. A Compact Disc (CD) is a data storage of
which type?
(1) Magnetic
(3) Electrical
(5) None of these
(2) Optical
(4) Electromechanical
22. Which of the following is not a language for
computer programming?
(2) Pascal
(1) Windows
(4) Cobol
(5) All of these
(3) Basic
23. A computer with CPU speed around
100 million instructions per second with the
word length of around 64 bits is known as
(1) super computer
(3) micro computer
(5) None of these
(2) mini computer
(4) macro computer
24. The term gigabyte refers to
(1) 1024 bytes
(3) 1024 megabytes
(5) None of these
(2) 1024 kilobytes
173
(4) 1024 gigabytes
25. Which of the following is not one of the four
major data processing functions of a computer?
(1) Gathering data
(2) Processing data into information
(3) Analysing the data or information
(4) Storing the data or information
(5) None of the above
26. When you connect to this service your
computer is communicating with a server at
your Internet Service Provider (ISP).
(1) Modem
(4) Server
(2) Internet
(5) Computer
(3) Intranet
27. These are computers that excel at executing
many different computer programs at the
same time.
(1) Mainframes (2) Mini
(4) Digital
(3) Macro
(5) Hybrid
28. Hard disk drives and CD drives are examples
of
(1) back up
(4) All of these
(2) storing
(3) storage
(5) None of these
software to create
29. You would use
spreadsheets, type documents and edit
photos.
(1) application (2) utility
(4) operating (5) None of these
(3) system
30. These are computers that support hundreds
or thousands of users simultaneously.
(1) Super
(2) Macro
(4) Mainframes (5) Digital
(3) Mini
31. A......is a microprocessor-based computing
device.
(1) personal computing (2) mainframe
(3) workstation
(5) None of these
(4) server
32. An e-mail account includes a storage area,
often called a (n)
(1) attachment (2) hyperlink
(4) IP address
(5) None of these
(3) mailbox
33. Data becomes......when it is presented in a
format that people can understand and use.
(1) processed
(2) graphs
(4) presentation (5) None of these
(3) information
Download

--- PAGE BREAK ---

Downloaded
174
34. A set of computer programs that helps a
computer monitor itself and function more
efficiently is a/an
(1) windows
(3) DBMS
(5) None of these
(2) system software
(4) applications software
35. A......converts all the statements in a program
in a single batch and the resulting collection
of instructions is placed in a new file.
(1) converter
(4) instruction
36. One thousand bytes is a
(1) kilobyte
(4) terabyte
(2) compiler
(3) interpreter
(5) None of these
(2) megabyte
(5) None of these
(3) gigabyte
37. Which one of the following is not a broadband
communication medium?
(1) Microwave
(3) Twisted pair
(5) None of these
(2) Fibre optic cable
(4) Coaxial cable
38. Which of the following performs modulation
and demodulation?
(1) Coaxial cable (2) Satellite
(3) Modem
(4) Optical fibre (5) None of these
39. Who is the father of computer?
Computer Awareness
42. The memory sizes in mainframe computer
and advanced technology micro computers
are expressed as
(1) bytes
(2) kilo-bytes
(4) megabytes (5) None of these
(3) bits
43. A prefix for billion which is equal to.....
called as billi.
(1) 100
(4) 10
(2) 10000
(3) 1000
(5) None of these
44. Each model of a computer has a unique
(1) assembly language (2) machine language
(3) high level language (4) All of these
(5) None of these
45. One kilobyte =......byte.
(1) 1250
(4) 1000
46. To move the
document press
(1) Ctrl + Esc
(4) Ctrl + C
(2) 2088
(3) 1024
(5) None of these
cursor to the end of the
(2) Ctrl + End
(5) None of these
(3) Ctrl + B
3
(2) Ctrl + B
(4) Ctrl + C
47. The shortcut key to print documents is
(1) Ctrl + A
(3) Ctrl + P
(5) None of these
4
(1) Charles Babbage
(3) Issac Newton
(2) John Napier
(4) Oughtred
(5) None of these
40. The function of Esc key is
(1) to end the action
(2) goto last action
(3) to repeat the last action
(4) to begin the action
48. Viruses, Trojan horses and worms are
(1) able to harm computer system
(2) unable to detect if affected on computer
(3) user-friendly applications
(4) harmless applications resident on computer
(5) None of the above
5.
(5) None of the above
41. Which of the following is not an advatnage of
magnetic disk storage?
(1) The access time of magnetic disk is much less
than that of magnetic tape
(2) Disk storage is longer lasting than magnetic tape
(3) Disk storage is less expensive than tape storage
(4) All of the above
(5) None of the above
49. Which of the below is used to browse
internet?
(1) Skype
(3) Google
(5) Yahoo
(2) Facebook
(4) Firefox
50. Internet banking is done over
(1) internet
(3) loptop
(5) tab
ANSWERS
(2) mobile
(4) computer
1. (1)
2. (3)
3. (1)
4. (2)
5. (4)
6. (4)
7. (3)
8. (2)
11. (1)
12. (2)
13. (2)
14. (4)
15. (3)
16.
(3)
17. (2)
18. (3)
9. (2)
19. (1)
21.
(2)
22. (1)
23.
(1)
24. (3)
25. (3)
26.
(2)
27. (1)
28. (4)
29. (1)
31. (1) 32. (3)
33.
(3)
34.
(2)
35. (2)
36. (1)
37. (2)
38.
(3)
39. (1)
41. (4) 42. (4)
43.
(4)
44. (2)
45. (3)
46. (2) 47. (3)
48. (1)
10. (3)
20.
30.
40. (2)
50. (1)
49. (4)
Downloaded From: www.EasyEngineering.net
6.
7.
8.

--- PAGE BREAK ---

ness
e computers
computers
3) bits
ual to......is
3) 1000
anique
language
se
1024
nd of the
O Ctrl + B
ts is
are
uter
mputer
browse
Downloaded From: www.EasyEngineering.net
Practice Set 5
1. It is the science that attempts to produce
machines that display the same type of
intelligence that humans do
(1) Nanoscience
(2) Nanotechnology
(3) Simulation
(4) Artificial Intelligence (AI)
(5) None of the above
2. The name for the way that computers
manipulate data into information is called
(1) programming (2) processing
(3) storing
(4) organising (5) None of these
3. After a picture has been taken with a digital
camera and processed appropriately, the
actual print of the picture is considered
(1) data
(4) the process
(2) output
(3) input
(5) None of these
4. Computers use which language to process
data?
(1) Processing
(3) Binary
(5) None of these
(2) Kilobyte
(4) Representational
5. In the binary language, each letter of the
alphabet, each number and each special
character is made up of a unique combination
of
(1) eight bytes
(3) eight characters
(5) None of these
(2) eight kilobytes
(4) eight bits
6. A string of eight Os and 1s is called a
(2) byte
(5) None of these
(3) kilobyte
(2) Bit
(3) Gigabyte
(5) None of these
10. (3)
20. (2)
30.
(2)
40.
50. (1)
(1) megabyte
(4) gigabyte
(1) Kilobyte
7. It is approximately one billion bytes.
(4) Megabyte
8. It is approximately a million bytes.
(1) Gigabyte
(3) Megabyte
(5) None of these
(2) Kilobyte
(4) Terabyte
9. It is any part of the computer that you can
physically touch.
(1) Hardware
(3) A peripheral
(5) None of these
(2) A device
(4) An application
10. All of the following are examples of storage
devices except.
(1) Hard disk drives
(3) Floppy disk drives
(5) None of these
(2) Printers
(4) CD drives
11. It is also called the brain of the computer, is
responsible for processing data.
(1) Motherboard
(2) Memory
(3) RAM
(4) Central Processing Unit (CPU)
(5) None of the above
12. Word processing, spreadsheet and photo-
editing are examples of
(1) application software
(2) system software
(3) operating system software
(4) platform software
(5) None of the above
(3) Memory
13. It is a set of computer programs used on a
computer to help perform tasks.
(1) An instruction (2) Software
(4) A processor (5) None of these
14. It is the set of programs that enables your
computer hardware devices and application
software to work together.
(1) Management
(2) Processing
(3) Utility software
(4) System software
(5) None of these
15. The PC (Personal Computer) and the Apple
Macintosh are examples of two different
(1) platforms
(3) programs
(5) None of these
(2) applications
(4) storage devices
Downloaded From: www.Easyl

--- PAGE BREAK ---

176
Downloaded From: www.EasyEngineering.net
16. Servers are computers that provide resources
to other computers connected to a
(1) network
(3) supercomputer
(5) None of these
(2) mainframe
(4) client
17. These are specially designed computers that
perform complex calculations extremely
rapidly.
(1) Servers
(3) Laptops
(5) None of these
(2) Supercomputers
(4) Mainframes
18. DSL is an example of which connection?
(1) Network
(4) Broadband
(2) Wireless
(5) None of these
(3) Slow
19. Which of the following is the correct order of
the four major functions of a computer?
(1) Process, A Output, A Input, A Storage
(2) Input, A Output, A Process, A Storage
(3) Process, A Storage, A Input, A Output
(4) Input, A Process, A Output, A Storage
(5) None of the above
20. How many bits are equal to one byte?
(1) Eight
(3) One thousand
(5) None of these
(2) Two
(4) One million
21. (1010), equivalent decimal number is
(1)8
(5) 12
(2) 9
(3) 10
(4) 11
22. Which software helps you carry out tasks,
such as typing a document or creating a
spreadsheet?
(1) System
(3) Utility
(5) None of these
(2) Application
(4) Operating
23. They are the fastest and most expensive
computers.
(1) Super
(4) Mainframe
(3) Macro
(2) Mini
(5) Hybrid
(2) Bit
(3) Kilobyte
(5) Lieya byte
24. It is approximately 1000 bytes
(1) Byte
(4) Megabyte
25. The devices on a computer system that let
you see the processed information are known
as
(1) input device
(3) memory device
(5) None of these
(2) storing device
(4) output device
Computer Awareness
26. It is the set of computer instructions or
programs that enables the hardware to
perform different tasks.
(1) Software
(3) Utility
(5) None of these
(2) Hardware
(4) Both '1' and '2'
27. It controls the way in which the computer
system functions and provides a means by
which users can interact with the computer?
(2) The operating system
(1) The platform
(3) Application software (4) The motherboard
(5) None of these
28. The operating system is the most common
type of
(1) communication software
(2) application software
(3) system software
(4) word-processing software
(5) None of the above
29. The steps and tasks neded to process data,
such as responses to questions or clicking an
icon, are called
(1) instructions
(2) the operating system
(3) application software (4) the system unit
(5) None of these
30. The two broad categories of software are
(1) word processing and spreadsheet
(2) transaction and application
(3) windows and Mac OS
(4) system and application
(5) None of the above
31. It is the program that manages the hardware
of the computer system including the CPU,
memory storage devices and input/output
devices.
(1) Software
(3) Hardware
(5) None of these
(2) Operating system
(4) System software
32. Input, output and processing devices
grouped to
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Computer Files",
      "statement": "Files are collections of data saved to a storage medium, and every file has a file name. Files usually contain data."
    },
    {
      "concept": "Computer Processing Functions",
      "statement": "The four major data processing functions of a computer are: Gathering data, Processing data into information, Storing the data or information."
    },
    {
      "concept": "Internet Connection",
      "statement": "When you connect to the internet, your computer is communicating with a server at your Internet Service Provider (ISP)."
    },
    {
      "concept": "Application Software",
      "statement": "Application software is used to create spreadsheets, type documents, and edit photos."
    },
    {
      "concept": "Data to Information",
      "statement": "Data becomes information when it is presented in a format that people can understand and use."
    },
    {
      "concept": "System Software",
      "statement": "System software is a set of computer programs that helps a computer monitor itself and function more efficiently."
    },
    {
      "concept": "Compiler Function",
      "statement": "A compiler converts all the statements in a program in a single batch and the resulting collection of instructions is placed in a new file."
    },
    {
      "concept": "Broadband Communication",
      "statement": "Microwave, Fibre optic cable, Coaxial cable are examples of broadband communication media. Twisted pair is not."
    },
    {
      "concept": "Modulation/Demodulation",
      "statement": "A modem performs modulation and demodulation."
    },
    {
      "concept": "Father of Computer",
      "statement": "Charles Babbage is considered the father of the computer."
    },
    {
      "concept": "Esc Key Function",
      "statement": "The Esc key is used to end the action."
    },
    {
      "concept": "Malicious Software",
      "statement": "Viruses, Trojan horses and worms are able to harm computer systems."
    },
    {
      "concept": "Internet Browsing",
      "statement": "Firefox is used to browse the internet."
    },
    {
      "concept": "Internet Banking",
      "statement": "Internet banking is done over the internet."
    },
    {
      "concept": "Artificial Intelligence",
      "statement": "Artificial Intelligence (AI) is the science that attempts to produce machines that display the same type of intelligence that humans do."
    },
    {
      "concept": "Data to Information Transformation",
      "statement": "The way computers manipulate data into information is called processing."
    },
    {
      "concept": "Digital Camera Output",
      "statement": "After a picture has been taken with a digital camera and processed appropriately, the actual print of the picture is considered output."
    },
    {
      "concept": "Computer Language",
      "statement": "Computers use binary language to process data."
    },
    {
      "concept": "Binary Representation",
      "statement": "In the binary language, each letter of the alphabet, each number and each special character is made up of a unique combination of eight bits."
    },
    {
      "concept": "Byte Definition",
      "statement": "A string of eight Os and 1s is called a byte."
    },
    {
      "concept": "Gigabyte Definition",
      "statement": "A gigabyte is approximately one billion bytes."
    },
    {
      "concept": "Megabyte Definition",
      "statement": "A megabyte is approximately a million bytes."
    },
    {
      "concept": "Hardware Definition",
      "statement": "Hardware is any part of the computer that you can physically touch."
    },
    {
      "concept": "CPU Function",
      "statement": "The Central Processing Unit (CPU) is responsible for processing data and is often called the brain of the computer."
    },
    {
      "concept": "Application Software Examples",
      "statement": "Word processing, spreadsheet, and photo-editing are examples of application software."
    },
    {
      "concept": "Software Definition",
      "statement": "Software is a set of computer programs used on a computer to help perform tasks."
    },
    {
      "concept": "System Software Function",
      "statement": "System software is the set of programs that enables your computer hardware devices and application software to work together."
    },
    {
      "concept": "Server Function",
      "statement": "Servers are computers that provide resources to other computers connected to a network."
    },
    {
      "concept": "Supercomputers",
      "statement": "Supercomputers are specially designed computers that perform complex calculations extremely rapidly and are the fastest and most expensive computers."
    },
    {
      "concept": "DSL Connection",
      "statement": "DSL is an example of a broadband connection."
    },
    {
      "concept": "Computer Functions Order",
      "statement": "The correct order of the four major functions of a computer is: Input, Process, Output, Storage."
    },
    {
      "concept": "Byte to Bits Conversion",
      "statement": "Eight bits are equal to one byte."
    },
    {
      "concept": "Application Software Task",
      "statement": "Application software helps you carry out tasks, such as typing a document or creating a spreadsheet."
    },
    {
      "concept": "Kilobyte Definition",
      "statement": "A kilobyte is approximately 1000 bytes."
    },
    {
      "concept": "Output Devices",
      "statement": "The devices on a computer system that let you see the processed information are known as output devices."
    },
    {
      "concept": "Software Definition (Alternative)",
      "statement": "Software is the set of computer instructions or programs that enables the hardware to perform different tasks."
    },
    {
      "concept": "Operating System Function",
      "statement": "The operating system controls the way in which the computer system functions and provides a means by which users can interact with the computer."
    },
    {
      "concept": "Operating System Type",
      "statement": "The operating system is the most common type of system software."
    },
    {
      "concept": "Instructions",
      "statement": "The steps and tasks needed to process data, such as responses to questions or clicking an icon, are called instructions."
    },
    {
      "concept": "Software Categories",
      "statement": "The two broad categories of software are system and application."
    },
    {
      "concept": "Operating System Role",
      "statement": "The operating system is the program that manages the hardware of the computer system including the CPU, memory storage devices and input/output devices."
    }
  ],
  "definitions": [
    {
      "term": "Notebook computer",
      "meaning": "A type of computer."
    },
    {
      "term": "Microcomputer",
      "meaning": "A type of computer."
    },
    {
      "term": "File extension",
      "meaning": "Established by the user to indicate the file's contents."
    },
    {
      "term": "Compiler",
      "meaning": "A translator of source program to object."
    },
    {
      "term": "Main memory",
      "meaning": "Random Access Memory (RAM)."
    },
    {
      "term": "Quantum computer",
      "meaning": "A computer imitating brain working, smallest and fastest."
    },
    {
      "term": "Compact Disc (CD)",
      "meaning": "A data storage of optical type."
    },
    {
      "term": "Windows",
      "meaning": "Not a language for computer programming."
    },
    {
      "term": "Super computer",
      "meaning": "A computer with CPU speed around 100 million instructions per second with the word length of around 64 bits."
    },
    {
      "term": "Gigabyte",
      "meaning": "A unit of data storage, equivalent to 1024 megabytes."
    },
    {
      "term": "Server",
      "meaning": "A computer that your computer communicates with when you connect to the internet."
    },
    {
      "term": "Mainframes",
      "meaning": "Computers that excel at executing many different computer programs at the same time and support hundreds or thousands of users simultaneously."
    },
    {
      "term": "Hard disk drives and CD drives",
      "meaning": "Examples of storage."
    },
    {
      "term": "Application software",
      "meaning": "Software used to create spreadsheets, type documents and edit photos."
    },
    {
      "term": "Personal computing",
      "meaning": "A microprocessor-based computing device."
    },
    {
      "term": "Mailbox",
      "meaning": "A storage area for an e-mail account."
    },
    {
      "term": "Information",
      "meaning": "Data when it is presented in a format that people can understand and use."
    },
    {
      "term": "System software",
      "meaning": "A set of computer programs that helps a computer monitor itself and function more efficiently."
    },
    {
      "term": "Converter",
      "meaning": "A device that converts all the statements in a program in a single batch."
    },
    {
      "term": "Kilobyte",
      "meaning": "One thousand bytes."
    },
    {
      "term": "Modem",
      "meaning": "Performs modulation and demodulation."
    },
    {
      "term": "Bits",
      "meaning": "Memory sizes in mainframe computer and advanced technology micro computers are expressed as."
    },
    {
      "term": "Billion",
      "meaning": "A prefix for billion which is equal to 10 called as billi."
    },
    {
      "term": "Machine language",
      "meaning": "Each model of a computer has a unique."
    },
    {
      "term": "Ctrl + End",
      "meaning": "Shortcut to move the cursor to the end of the document."
    },
    {
      "term": "Ctrl + P",
      "meaning": "Shortcut key to print documents."
    },
    {
      "term": "Hardware",
      "meaning": "Any part of the computer that you can physically touch."
    },
    {
      "term": "Central Processing Unit (CPU)",
      "meaning": "The brain of the computer, responsible for processing data."
    },
    {
      "term": "Application software",
      "meaning": "Software that helps you carry out tasks, such as typing a document or creating a spreadsheet."
    },
    {
      "term": "Software",
      "meaning": "A set of computer programs used on a computer to help perform tasks."
    },
    {
      "term": "System software",
      "meaning": "The set of programs that enables your computer hardware devices and application software to work together."
    },
    {
      "term": "Platforms",
      "meaning": "PC (Personal Computer) and Apple Macintosh are examples of two different."
    },
    {
      "term": "Network",
      "meaning": "Servers provide resources to other computers connected to a."
    },
    {
      "term": "Supercomputers",
      "meaning": "Specially designed computers that perform complex calculations extremely rapidly."
    },
    {
      "term": "Broadband",
      "meaning": "DSL is an example of this type of connection."
    },
    {
      "term": "Output device",
      "meaning": "Devices on a computer system that let you see the processed information."
    },
    {
      "term": "Software",
      "meaning": "The set of computer instructions or programs that enables the hardware to perform different tasks."
    },
    {
      "term": "The operating system",
      "meaning": "Controls the way in which the computer system functions and provides a means by which users can interact with the computer."
    },
    {
      "term": "System software",
      "meaning": "The operating system is the most common type of."
    },
    {
      "term": "Instructions",
      "meaning": "The steps and tasks needed to process data, such as responses to questions or clicking an icon."
    },
    {
      "term": "System and application",
      "meaning": "The two broad categories of software."
    },
    {
      "term": "Operating system",
      "meaning": "The program that manages the hardware of the computer system including the CPU, memory storage devices and input/output devices."
    }
  ]
}
```

---

## Interaction [10:40:39]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Computer Fundamentals.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Computer Files",
      "statement": "Files are collections of data saved to a storage medium, and every file has a file name. Files usually contain data."
    },
    {
      "concept": "Computer Processing Functions",
      "statement": "The four major data processing functions of a computer are: Gathering data, Processing data into information, Storing the data or information."
    },
    {
      "concept": "Internet Connection",
      "statement": "When you connect to the internet, your computer is communicating with a server at your Internet Service Provider (ISP)."
    },
    {
      "concept": "Application Software",
      "statement": "Application software is used to create spreadsheets, type documents, and edit photos."
    },
    {
      "concept": "Data to Information",
      "statement": "Data becomes information when it is presented in a format that people can understand and use."
    },
    {
      "concept": "System Software",
      "statement": "System software is a set of computer programs that helps a computer monitor itself and function more efficiently."
    },
    {
      "concept": "Compiler Function",
      "statement": "A compiler converts all the statements in a program in a single batch and the resulting collection of instructions is placed in a new file."
    },
    {
      "concept": "Broadband Communication",
      "statement": "Microwave, Fibre optic cable, Coaxial cable are examples of broadband communication media. Twisted pair is not."
    },
    {
      "concept": "Modulation/Demodulation",
      "statement": "A modem performs modulation and demodulation."
    },
    {
      "concept": "Father of Computer",
      "statement": "Charles Babbage is considered the father of the computer."
    },
    {
      "concept": "Esc Key Function",
      "statement": "The Esc key is used to end the action."
    },
    {
      "concept": "Malicious Software",
      "statement": "Viruses, Trojan horses and worms are able to harm computer systems."
    },
    {
      "concept": "Internet Browsing",
      "statement": "Firefox is used to browse the internet."
    },
    {
      "concept": "Internet Banking",
      "statement": "Internet banking is done over the internet."
    },
    {
      "concept": "Artificial Intelligence",
      "statement": "Artificial Intelligence (AI) is the science that attempts to produce machines that display the same type of intelligence that humans do."
    },
    {
      "concept": "Data to Information Transformation",
      "statement": "The way computers manipulate data into information is called processing."
    },
    {
      "concept": "Digital Camera Output",
      "statement": "After a picture has been taken with a digital camera and processed appropriately, the actual print of the picture is considered output."
    },
    {
      "concept": "Computer Language",
      "statement": "Computers use binary language to process data."
    },
    {
      "concept": "Binary Representation",
      "statement": "In the binary language, each letter of the alphabet, each number and each special character is made up of a unique combination of eight bits."
    },
    {
      "concept": "Byte Definition",
      "statement": "A string of eight Os and 1s is called a byte."
    },
    {
      "concept": "Gigabyte Definition",
      "statement": "A gigabyte is approximately one billion bytes."
    },
    {
      "concept": "Megabyte Definition",
      "statement": "A megabyte is approximately a million bytes."
    },
    {
      "concept": "Hardware Definition",
      "statement": "Hardware is any part of the computer that you can physically touch."
    },
    {
      "concept": "CPU Function",
      "statement": "The Central Processing Unit (CPU) is responsible for processing data and is often called the brain of the computer."
    },
    {
      "concept": "Application Software Examples",
      "statement": "Word processing, spreadsheet, and photo-editing are examples of application software."
    },
    {
      "concept": "Software Definition",
      "statement": "Software is a set of computer programs used on a computer to help perform tasks."
    },
    {
      "concept": "System Software Function",
      "statement": "System software is the set of programs that enables your computer hardware devices and application software to work together."
    },
    {
      "concept": "Server Function",
      "statement": "Servers are computers that provide resources to other computers connected to a network."
    },
    {
      "concept": "Supercomputers",
      "statement": "Supercomputers are specially designed computers that perform complex calculations extremely rapidly and are the fastest and most expensive computers."
    },
    {
      "concept": "DSL Connection",
      "statement": "DSL is an example of a broadband connection."
    },
    {
      "concept": "Computer Functions Order",
      "statement": "The correct order of the four major functions of a computer is: Input, Process, Output, Storage."
    },
    {
      "concept": "Byte to Bits Conversion",
      "statement": "Eight bits are equal to one byte."
    },
    {
      "concept": "Application Software Task",
      "statement": "Application software helps you carry out tasks, such as typing a document or creating a spreadsheet."
    },
    {
      "concept": "Kilobyte Definition",
      "statement": "A kilobyte is approximately 1000 bytes."
    },
    {
      "concept": "Output Devices",
      "statement": "The devices on a computer system that let you see the processed information are known as output devices."
    },
    {
      "concept": "Software Definition (Alternative)",
      "statement": "Software is the set of computer instructions or programs that enables the hardware to perform different tasks."
    },
    {
      "concept": "Operating System Function",
      "statement": "The operating system controls the way in which the computer system functions and provides a means by which users can interact with the computer."
    },
    {
      "concept": "Operating System Type",
      "statement": "The operating system is the most common type of system software."
    },
    {
      "concept": "Instructions",
      "statement": "The steps and tasks needed to process data, such as responses to questions or clicking an icon, are called instructions."
    },
    {
      "concept": "Software Categories",
      "statement": "The two broad categories of software are system and application."
    },
    {
      "concept": "Operating System Role",
      "statement": "The operating system is the program that manages the hardware of the computer system including the CPU, memory storage devices and input/output devices."
    }
  ],
  "definitions": [
    {
      "term": "Notebook computer",
      "meaning": "A type of computer."
    },
    {
      "term": "Microcomputer",
      "meaning": "A type of computer."
    },
    {
      "term": "File extension",
      "meaning": "Established by the user to indicate the file's contents."
    },
    {
      "term": "Compiler",
      "meaning": "A translator of source program to object."
    },
    {
      "term": "Main memory",
      "meaning": "Random Access Memory (RAM)."
    },
    {
      "term": "Quantum computer",
      "meaning": "A computer imitating brain working, smallest and fastest."
    },
    {
      "term": "Compact Disc (CD)",
      "meaning": "A data storage of optical type."
    },
    {
      "term": "Windows",
      "meaning": "Not a language for computer programming."
    },
    {
      "term": "Super computer",
      "meaning": "A computer with CPU speed around 100 million instructions per second with the word length of around 64 bits."
    },
    {
      "term": "Gigabyte",
      "meaning": "A unit of data storage, equivalent to 1024 megabytes."
    },
    {
      "term": "Server",
      "meaning": "A computer that your computer communicates with when you connect to the internet."
    },
    {
      "term": "Mainframes",
      "meaning": "Computers that excel at executing many different computer programs at the same time and support hundreds or thousands of users simultaneously."
    },
    {
      "term": "Hard disk drives and CD drives",
      "meaning": "Examples of storage."
    },
    {
      "term": "Application software",
      "meaning": "Software used to create spreadsheets, type documents and edit photos."
    },
    {
      "term": "Personal computing",
      "meaning": "A microprocessor-based computing device."
    },
    {
      "term": "Mailbox",
      "meaning": "A storage area for an e-mail account."
    },
    {
      "term": "Information",
      "meaning": "Data when it is presented in a format that people can understand and use."
    },
    {
      "term": "System software",
      "meaning": "A set of computer programs that helps a computer monitor itself and function more efficiently."
    },
    {
      "term": "Converter",
      "meaning": "A device that converts all the statements in a program in a single batch."
    },
    {
      "term": "Kilobyte",
      "meaning": "One thousand bytes."
    },
    {
      "term": "Modem",
      "meaning": "Performs modulation and demodulation."
    },
    {
      "term": "Bits",
      "meaning": "Memory sizes in mainframe computer and advanced technology micro computers are expressed as."
    },
    {
      "term": "Billion",
      "meaning": "A prefix for billion which is equal to 10 called as billi."
    },
    {
      "term": "Machine language",
      "meaning": "Each model of a computer has a unique."
    },
    {
      "term": "Ctrl + End",
      "meaning": "Shortcut to move the cursor to the end of the document."
    },
    {
      "term": "Ctrl + P",
      "meaning": "Shortcut key to print documents."
    },
    {
      "term": "Hardware",
      "meaning": "Any part of the computer that you can physically touch."
    },
    {
      "term": "Central Processing Unit (CPU)",
      "meaning": "The brain of the computer, responsible for processing data."
    },
    {
      "term": "Application software",
      "meaning": "Software that helps you carry out tasks, such as typing a document or creating a spreadsheet."
    },
    {
      "term": "Software",
      "meaning": "A set of computer programs used on a computer to help perform tasks."
    },
    {
      "term": "System software",
      "meaning": "The set of programs that enables your computer hardware devices and application software to work together."
    },
    {
      "term": "Platforms",
      "meaning": "PC (Personal Computer) and Apple Macintosh are examples of two different."
    },
    {
      "term": "Network",
      "meaning": "Servers provide resources to other computers connected to a."
    },
    {
      "term": "Supercomputers",
      "meaning": "Specially designed computers that perform complex calculations extremely rapidly."
    },
    {
      "term": "Broadband",
      "meaning": "DSL is an example of this type of connection."
    },
    {
      "term": "Output device",
      "meaning": "Devices on a computer system that let you see the processed information."
    },
    {
      "term": "Software",
      "meaning": "The set of computer instructions or programs that enables the hardware to perform different tasks."
    },
    {
      "term": "The operating system",
      "meaning": "Controls the way in which the computer system functions and provides a means by which users can interact with the computer."
    },
    {
      "term": "System software",
      "meaning": "The operating system is the most common type of."
    },
    {
      "term": "Instructions",
      "meaning": "The steps and tasks needed to process data, such as responses to questions or clicking an icon."
    },
    {
      "term": "System and application",
      "meaning": "The two broad categories of software."
    },
    {
      "term": "Operating system",
      "meaning": "The program that manages the hardware of the computer system including the CPU, memory storage devices and input/output devices."
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
    "question": "Which of the following is considered the 'brain' of the computer, responsible for processing data?",
    "options": {
      "A": "RAM",
      "B": "Hard Drive",
      "C": "CPU",
      "D": "Motherboard"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The Central Processing Unit (CPU) is responsible for processing data and is often called the brain of the computer."
  },
  {
    "question": "What are the four major data processing functions of a computer?",
    "options": {
      "A": "Input, Processing, Output, Storage",
      "B": "Gathering, Processing, Storing, Displaying",
      "C": "Reading, Writing, Executing, Deleting",
      "D": "Searching, Sorting, Filtering, Reporting"
    },
    "correct_answer": "A",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "The four major data processing functions of a computer are: Gathering data, Processing data into information, Storing the data or information."
  },
  {
    "question": "Which type of software is used to create spreadsheets, type documents, and edit photos?",
    "options": {
      "A": "System Software",
      "B": "Application Software",
      "C": "Utility Software",
      "D": "Malware"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Application software is used to create spreadsheets, type documents, and edit photos."
  },
  {
    "question": "What is a collection of data saved to a storage medium called?",
    "options": {
      "A": "A program",
      "B": "A file",
      "C": "A directory",
      "D": "A database"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Files are collections of data saved to a storage medium, and every file has a file name. Files usually contain data."
  },
  {
    "question": "Charles Babbage is widely recognized as the:",
    "options": {
      "A": "Inventor of the internet",
      "B": "Father of the computer",
      "C": "Creator of the first operating system",
      "D": "Pioneer of artificial intelligence"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Charles Babbage is considered the father of the computer."
  },
  {
    "question": "Which of the following is an example of broadband communication media?",
    "options": {
      "A": "Twisted pair cable",
      "B": "Coaxial cable",
      "C": "Ethernet cable",
      "D": "USB cable"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Microwave, Fibre optic cable, Coaxial cable are examples of broadband communication media. Twisted pair is not."
  },
  {
    "question": "What is the primary function of a modem?",
    "options": {
      "A": "To store data",
      "B": "To process data",
      "C": "To perform modulation and demodulation",
      "D": "To display information"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "A modem performs modulation and demodulation."
  },
  {
    "question": "When you connect to the internet, your computer is communicating with a server at your:",
    "options": {
      "A": "Local Area Network (LAN)",
      "B": "Internet Service Provider (ISP)",
      "C": "Domain Name System (DNS)",
      "D": "World Wide Web (WWW)"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "When you connect to the internet, your computer is communicating with a server at your Internet Service Provider (ISP)."
  },
  {
    "question": "A string of eight 0s and 1s is called a:",
    "options": {
      "A": "Bit",
      "B": "Byte",
      "C": "Kilobyte",
      "D": "Megabyte"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A string of eight Os and 1s is called a byte."
  },
  {
    "question": "Which of the following is a type of malicious software that can harm computer systems?",
    "options": {
      "A": "Antivirus",
      "B": "Firewall",
      "C": "Worm",
      "D": "Browser"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Viruses, Trojan horses and worms are able to harm computer systems."
  }
]
```

---

## Interaction [10:40:41]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is considered the 'brain' of the computer, responsible for processing data?
        Proposed Answer: C (CPU)
        Source Snippet provided by Writer: The Central Processing Unit (CPU) is responsible for processing data and is often called the brain of the computer.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the CPU is responsible for processing data and is called the 'brain' of the computer, directly supporting the proposed answer."}
```

---

## Interaction [10:40:44]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What are the four major data processing functions of a computer?
        Proposed Answer: A (Input, Processing, Output, Storage)
        Source Snippet provided by Writer: The four major data processing functions of a computer are: Gathering data, Processing data into information, Storing the data or information.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet mentions 'Gathering data', 'Processing data into information', and 'Storing the data or information'. This covers Input, Processing, and Storage, but it does not explicitly mention Output. Therefore, the source snippet does not fully prove the proposed answer which includes Output as a major function."}
```

---

## Interaction [10:40:46]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which type of software is used to create spreadsheets, type documents, and edit photos?
        Proposed Answer: B (Application Software)
        Source Snippet provided by Writer: Application software is used to create spreadsheets, type documents, and edit photos.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Application software is used to create spreadsheets, type documents, and edit photos,' which factually proves the proposed answer 'B (Application Software)' and confirms the question is not a hallucination."}
```

---

## Interaction [10:40:49]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is a collection of data saved to a storage medium called?
        Proposed Answer: B (A file)
        Source Snippet provided by Writer: Files are collections of data saved to a storage medium, and every file has a file name. Files usually contain data.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'Files are collections of data saved to a storage medium', which directly supports the proposed answer that a collection of data saved to a storage medium is called a file."}
```

---

## Interaction [10:40:52]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Charles Babbage is widely recognized as the:
        Proposed Answer: B (Father of the computer)
        Source Snippet provided by Writer: Charles Babbage is considered the father of the computer.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that Charles Babbage is considered the father of the computer, which factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [10:40:54]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is an example of broadband communication media?
        Proposed Answer: B (Coaxial cable)
        Source Snippet provided by Writer: Microwave, Fibre optic cable, Coaxial cable are examples of broadband communication media. Twisted pair is not.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly lists 'Coaxial cable' as an example of broadband communication media, directly supporting the proposed answer. The question is factually accurate based on the provided snippet."}
```

---

## Interaction [10:40:56]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary function of a modem?
        Proposed Answer: C (To perform modulation and demodulation)
        Source Snippet provided by Writer: A modem performs modulation and demodulation.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a modem performs modulation and demodulation, which is exactly what the proposed answer (C) indicates as its primary function."}
```

---

## Interaction [10:40:59]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: When you connect to the internet, your computer is communicating with a server at your:
        Proposed Answer: B (Internet Service Provider (ISP))
        Source Snippet provided by Writer: When you connect to the internet, your computer is communicating with a server at your Internet Service Provider (ISP).

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that when connecting to the internet, a computer communicates with a server at its Internet Service Provider (ISP), which factually proves the proposed answer 'B (Internet Service Provider (ISP))'. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [10:41:01]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: A string of eight 0s and 1s is called a:
        Proposed Answer: B (Byte)
        Source Snippet provided by Writer: A string of eight Os and 1s is called a byte.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'A string of eight Os and 1s is called a byte', which factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [10:41:04]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is a type of malicious software that can harm computer systems?
        Proposed Answer: C (Worm)
        Source Snippet provided by Writer: Viruses, Trojan horses and worms are able to harm computer systems.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'worms are able to harm computer systems', which directly supports the proposed answer that a worm is a type of malicious software that can harm computer systems. The question is also factually accurate."}
```

---

