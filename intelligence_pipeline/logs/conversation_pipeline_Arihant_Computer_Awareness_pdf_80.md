# AI Conversation Log: pipeline_Arihant_Computer_Awareness_pdf_80
Model: gemini-2.5-flash-lite
Date: 2026-04-14T20:12:18.820128

## Interaction [20:12:22]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment to map it to the database.
    This segment is from approximately 80% into the book.
    
    
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

    CONTEXT TEXT (SEGMENT AT 80%):
     their relative positions by
means of address that indicate the physical location
of the data.
Disk Operating System (DOS) An operating system
which contains the disk oriented commands and
uses disk devices for permanent storage.
Directory In computing, a directory is an entity in a
file system which contains a group of files and other
directories. A directory contained inside another
directory is called a sub-directory of that directory.
Together, the directories form a hierarchy or a tree
structure.
Dot Matrix Printer A Dot Matrix Printer refers to a
type of computer printer with a print head that runs
back and forth on the page and prints by impact,
striking an ink-soaked cloth ribbon against the paper,
much like a typewriter.
Domain Name A unique name that identifies a
particular website and represents the name of the
server where the web pages reside.
Dots Per Inch (DPI) It is defined as the measure of
the resolution of a printer, scanner or monitor. It refers
to the number of dots in a one inch line. The more
dots per inch, the higher the resolution.
Download It refers to the act of transmitting data from
a remote computer on the internet or other network to
one's own computer.
Drag-and-Drop In computer graphical user
interfaces, drag and drop is the action of clicking on
a virtual object and dragging it to a different location
or onto another virtual object.
Computer Awareness
Dual Core The pentium dual core brand was used for
mainstream X-86 architecture microprocessor from Intel
Dumb Terminal A computer terminal with no
processing or programming capabilities, generally used
for simple data entry or retrieval tasks.
DVD DVD is an optical disk storage media format that
can be used for data storage including movies with high
quality video and sound.
Dynamic RAM DRAM (Dynamic Random Access
Memory) is a type of random access memory which
stores each bit of data in a separate capacitor.
E
EBCDIC EBCDIC (Extended Binary Coded Decimal
Interchange Code) is an 8-bit character encoding used
on IBM mainframe operating systems, like Z/OS, S/390,
AS/400 and i5/OS.
E-Commerce Electronic commerce is a type of industry
where buying and selling of product or services is
conducted over electronic systems such as the intranet
and other computer network.
Editing The process of changing information by
inserting, deleting, replacing, rearranging and
reformation.
EDO (Extended Data Output) RAM This form of
dynamic RAM speeds access to memory locations by
working on a simple assumption-the next time memory
is accessed, it will be at a contiguous address in a
contiguous chunk of hardware.
Electrically Erasable Programmable Read Only Memory
(EEPROM) A special type of Programmable Read Only
Memory (PROM) that can be erased by exposing it to
an electrical charge. It retains its contents even when
the power is turned off.
Electronic Data Processing (EDP) A data processing
through equipment that is predominantly electronic such
as digital computer.
E-mail Electronic m
    
```

### Response:
```json
{
  "exam_board": null,
  "exam_name": null,
  "year": null,
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Computer Awareness",
  "confidence": 0.95
}
```

---

## Interaction [20:12:37]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Computer Awareness
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
     their relative positions by
means of address that indicate the physical location
of the data.
Disk Operating System (DOS) An operating system
which contains the disk oriented commands and
uses disk devices for permanent storage.
Directory In computing, a directory is an entity in a
file system which contains a group of files and other
directories. A directory contained inside another
directory is called a sub-directory of that directory.
Together, the directories form a hierarchy or a tree
structure.
Dot Matrix Printer A Dot Matrix Printer refers to a
type of computer printer with a print head that runs
back and forth on the page and prints by impact,
striking an ink-soaked cloth ribbon against the paper,
much like a typewriter.
Domain Name A unique name that identifies a
particular website and represents the name of the
server where the web pages reside.
Dots Per Inch (DPI) It is defined as the measure of
the resolution of a printer, scanner or monitor. It refers
to the number of dots in a one inch line. The more
dots per inch, the higher the resolution.
Download It refers to the act of transmitting data from
a remote computer on the internet or other network to
one's own computer.
Drag-and-Drop In computer graphical user
interfaces, drag and drop is the action of clicking on
a virtual object and dragging it to a different location
or onto another virtual object.
Computer Awareness
Dual Core The pentium dual core brand was used for
mainstream X-86 architecture microprocessor from Intel
Dumb Terminal A computer terminal with no
processing or programming capabilities, generally used
for simple data entry or retrieval tasks.
DVD DVD is an optical disk storage media format that
can be used for data storage including movies with high
quality video and sound.
Dynamic RAM DRAM (Dynamic Random Access
Memory) is a type of random access memory which
stores each bit of data in a separate capacitor.
E
EBCDIC EBCDIC (Extended Binary Coded Decimal
Interchange Code) is an 8-bit character encoding used
on IBM mainframe operating systems, like Z/OS, S/390,
AS/400 and i5/OS.
E-Commerce Electronic commerce is a type of industry
where buying and selling of product or services is
conducted over electronic systems such as the intranet
and other computer network.
Editing The process of changing information by
inserting, deleting, replacing, rearranging and
reformation.
EDO (Extended Data Output) RAM This form of
dynamic RAM speeds access to memory locations by
working on a simple assumption-the next time memory
is accessed, it will be at a contiguous address in a
contiguous chunk of hardware.
Electrically Erasable Programmable Read Only Memory
(EEPROM) A special type of Programmable Read Only
Memory (PROM) that can be erased by exposing it to
an electrical charge. It retains its contents even when
the power is turned off.
Electronic Data Processing (EDP) A data processing
through equipment that is predominantly electronic such
as digital computer.
E-mail Electronic mail, abbreviated e-mail is a method
of composing, sending, storing and receiving messages
over electronic communication systems.
Encapsulation It is a mechanism that associates the
code and the data it manipulates into a single unit and
keeps them safe from external interference..
Encryption In cryptography, encryption is the process of
encoding messages (or information) in such a way that
hackers cannot read it, but the authorised users can
access it.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ch
d
ges
and
Glossary
Downloaded From: www.EasyEngineering.net
End User Any individual who uses the information
generated by a computer based system.
Entity An entity is something that has certain attributes
or properties which may be assigned values.
EPROM An EPROM (Erasable Programmable Read Only
Memory) is a type of computer memory chip that retains
its data when its power supply is switched off.
Escape Key A key that permits the user to leave one
segment of a program and move to another.
Excel Excel allows you to create spreadsheets much like
paper ledgers that can perform automatic calculations.
Exe (.exe) It is a common filename extension denoting an
executable file (a program) in the DOS, MS- Windows.
Execution Time The total time required to execute a
program on a particular system.
Extranet A technology that permits the users of one
organisation's intranet to enter portions of another
organisation's intranet in order to conduct business
transactions or collaborate on joint projects.
F
Fax It stands for 'Facsimile machine'. It is used to
transmit a copy of a document electronically.
Field The attributes of an entity are written as fields in
the table representation.
File A collection of information stored electronically and
treated as a unit by a computer. Every file must have its
own distinctive name.
File Allocation Table (FAT) It is the name of a computer
file system architecture. The FAT file system is a legacy
file system which is simple and robust.
File Manager The file manager is an operating system
utility that provides a user interface to work with file
systems.
File Server A computer on a network that stores the
programs and data files shared by the users of the
network.
Firewall A security system usually consisting of hardware
and software that prevents unauthorised persons from
accessing certain parts of a program database or
network.
Firmware
Firmware is the technology which has the
combination of both hardware and software. It provides
necessary instructions for how the device communicates
with other computer hardware.
155
Flash Memory It is a type of non-volatile computer
storage chip that can be electrically erased and
reprogrammed. It was developed using EEPROM.
Floating-point Numbers Signed numbers held in a
fraction exponent format.
Floppy disk A floppy disk is a data storage device
that is composed of a circular piece of thin, flexible
(i.e., floppy) magnetic storage medium encased in
a square or rectangular plastic walled.
Flowcharts Flowcharts are the means of visually
representing the flow of data through an
information processing system, the operations
performed within the system and the sequence in
which they are performed.
Foreign Key A field in a database table, which
links it to another related table.
FORTRAN Its name stands for FORmula
TRANslating system. The language was designed
at IBM for scientific computing. The components
were very simple and provided the programmer
with low-level access to the computer's innards.
Format To set margins, tabs, font or line spacing
in layout of a document.
Frame The basic packages of information on a
network channel.
Frequency The number of oscillations of a signal
per unit of time. It is usually expressed in cycles
per second (cps or hertz Hz)..
Freeware A form of software distribution where
the author retains copyright of the software but
makes the program available to others at no cost.
Function Key A special key on a computer
keyboard or a terminal devices keyboard that is
used to perform specific functions. These keys
are programmable so that a software product
can put the function keys to specific uses.
Many keyboards have function keys labelled from
F₁ to F10
G
Garbage In Garbage Out (GIGO)
It pertains to the
fact that most computer errors are not machine
errors, they are data errors caused by incorrect
input data.
Gateway A device that is used to joint together
two networks having different base protocols.
Downloaded From: www Es Engineering.net

--- PAGE BREAK ---

156
Downloaded From: www.EasyEngineering.net
Gigabyte A gigabyte is a unit of information or
computer storage equal to approximately one billion
bytes.
Gigahertz (GHz) A measurement used to identify the
speed of the central processing unit. One gigahertz is
equal to 1 billion cycles per second.
Glitch A hardware problem that causes a computer to
malfunction or crash.
Gopher A protocol used for locating and transferring
information on the internet. It is an internet search tool
that allows users to access textual information.
Graphic Interchange Format (GIF) A simple file
format for pictures and photographs, that are
compressed so they can be sent quickly.
Graphical User Interface A Graphical User Interface
(or GUI) is a method of interacting with a computer
through a metaphor of direct manipulating of graphical
images and widgets in addition to text.
Groupware It is a software that allows networked
individual to form groups and collaborate on
documents, programs or database.
H
Hacker A computer criminal who penetrates and
tempers with computer programs or systems.
Hard Disk A hard disk is a non-volatile data storage
device that stores data on a magnetic surface layered
onto disk platters.
Hardware The mechanical, magnetic, electronic and
electrical components that comprises a computer system
such as CPU, monitor, keyboard and mouse, etc.
High-Level Programming Languages A high-level
programming language is a programming language
that is more user-friendly, to some extent
platform-independent and abstract from low-level
computer processor operations such as memory
accesses.
Hit A single request for information made by a client
computer from a web server.
Home Page A starting point or a doorway to the
website. It refers to the web page that identifies a
website and contains the hyperlink to other web page in
the website.
Host Computer A computer that provides information
or a service to other computers on the internet. Every
host computer has its own unique host name.
Computer Awareness
Hub A network device that connects multiple
computers on a LAN, so that they can communicate
with one another.
Hyperlink An image or portion of text on a web page
that is linked to another web page.
Hybrid Computer Hybrid computers are made by
taking the best features of the analog computer and
digital computer. A simple example of this type is the
computer used in hospitals.
HyperText Transfer Protocol (HTTP) It is an
important protocol used on the world wide web for
moving hypertext files across the internet. It requires
an HTTP client program on one end and HTTP server
program on other end.
I
Icon A symbol (such as picture or a folder) that
represents a certain function on your computer. When
the user clicks on the icon, the appropriate function is
executed.
Impact Printers Impact printers transfer the image
onto paper through a printing mechanism that strikes
the paper called ribbon. Examples of impact printers
are dot matrix printers and daisy wheel printers.
Information Information is the summarization of data
according to a certain pre-defined purpose.
Ink-Jet Printer In an ink-jet printer, characters are
formed as a result of electrically charged or heated
ink being sprayed in fine jets onto the paper.
Individual nozzles in the printing head produce high
resolution characters.
Input In order to give instructions to a computer, the
information has to be supplied to it. This information
is given to the computers through an input device
such as keyboard, mouse, scanner etc.
Instant Messaging (IM) A chat program that lets
people communicate over the internet in real time.
Instruction A command or order given to a
computer to perform a task.
Instruction Cycle Fetching and decoding operations
of the machine cycle.
Interface A device or program that helps a user to
communicate with a computer.
Intelligent Terminal Intelligent terminals are those
which necessarily have processing power and
non-volatile data storage space.
K
to
tr
C
K
di
St
ab
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
mess
e
unicate
eb page
de by
er and
e is the
b for
equires
P server
Chat
er. When
nction is
image
I strikes
printers
S.
of data
s are
eated
e high
uter, the
mation
vice
lets
ime.
erations
user to
hose
Glossary
Interpreter A program that converts and executes the
source code into machine code line by line.
Internet The internet (also known simply as the net)
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Directory",
      "statement": "A directory contained inside another directory is called a sub-directory of that directory."
    },
    {
      "concept": "Dots Per Inch (DPI)",
      "statement": "The more dots per inch, the higher the resolution."
    },
    {
      "concept": "E-Commerce",
      "statement": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
    },
    {
      "concept": "Encapsulation",
      "statement": "Encapsulation is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
    },
    {
      "concept": "Encryption",
      "statement": "In cryptography, encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
    },
    {
      "concept": "EPROM",
      "statement": "An EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when its power supply is switched off."
    },
    {
      "concept": "File",
      "statement": "Every file must have its own distinctive name."
    },
    {
      "concept": "File Allocation Table (FAT)",
      "statement": "The FAT file system is a legacy file system which is simple and robust."
    },
    {
      "concept": "Firmware",
      "statement": "Firmware provides necessary instructions for how the device communicates with other computer hardware."
    },
    {
      "concept": "Floating-point Numbers",
      "statement": "Floating-point numbers are signed numbers held in a fraction exponent format."
    },
    {
      "concept": "Flowcharts",
      "statement": "Flowcharts are the means of visually representing the flow of data through an information processing system, the operations performed within the system and the sequence in which they are performed."
    },
    {
      "concept": "Frequency",
      "statement": "Frequency is the number of oscillations of a signal per unit of time."
    },
    {
      "concept": "Function Key",
      "statement": "Function keys are programmable so that a software product can put the function keys to specific uses."
    },
    {
      "concept": "Garbage In Garbage Out (GIGO)",
      "statement": "Most computer errors are not machine errors, they are data errors caused by incorrect input data."
    },
    {
      "concept": "Gigabyte",
      "statement": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
    },
    {
      "concept": "Gigahertz (GHz)",
      "statement": "One gigahertz is equal to 1 billion cycles per second."
    },
    {
      "concept": "Glitch",
      "statement": "A glitch is a hardware problem that causes a computer to malfunction or crash."
    },
    {
      "concept": "Gopher",
      "statement": "Gopher is an internet search tool that allows users to access textual information."
    },
    {
      "concept": "Graphic Interchange Format (GIF)",
      "statement": "GIF is a simple file format for pictures and photographs, that are compressed so they can be sent quickly."
    },
    {
      "concept": "Hard Disk",
      "statement": "A hard disk is a non-volatile data storage device that stores data on a magnetic surface layered onto disk platters."
    },
    {
      "concept": "High-Level Programming Languages",
      "statement": "A high-level programming language is more user-friendly, to some extent platform-independent and abstract from low-level computer processor operations such as memory accesses."
    },
    {
      "concept": "Hit",
      "statement": "A hit is a single request for information made by a client computer from a web server."
    },
    {
      "concept": "Home Page",
      "statement": "A home page refers to the web page that identifies a website and contains the hyperlink to other web pages in the website."
    },
    {
      "concept": "Host Computer",
      "statement": "Every host computer has its own unique host name."
    },
    {
      "concept": "Impact Printers",
      "statement": "Impact printers transfer the image onto paper through a printing mechanism that strikes the paper called a ribbon."
    },
    {
      "concept": "Information",
      "statement": "Information is the summarization of data according to a certain pre-defined purpose."
    },
    {
      "concept": "Ink-Jet Printer",
      "statement": "Individual nozzles in the printing head of an ink-jet printer produce high resolution characters."
    },
    {
      "concept": "Input",
      "statement": "Information is given to computers through an input device such as a keyboard, mouse, or scanner."
    },
    {
      "concept": "Instruction Cycle",
      "statement": "The instruction cycle consists of fetching and decoding operations of the machine cycle."
    },
    {
      "concept": "Intelligent Terminal",
      "statement": "Intelligent terminals have processing power and non-volatile data storage space."
    },
    {
      "concept": "Interpreter",
      "statement": "An interpreter converts and executes source code into machine code line by line."
    },
    {
      "concept": "Internet",
      "statement": "The internet is also known simply as the net."
    }
  ],
  "definitions": [
    {
      "term": "Disk Operating System (DOS)",
      "meaning": "An operating system which contains the disk oriented commands and uses disk devices for permanent storage."
    },
    {
      "term": "Directory",
      "meaning": "In computing, a directory is an entity in a file system which contains a group of files and other directories."
    },
    {
      "term": "Dot Matrix Printer",
      "meaning": "A Dot Matrix Printer refers to a type of computer printer with a print head that runs back and forth on the page and prints by impact, striking an ink-soaked cloth ribbon against the paper, much like a typewriter."
    },
    {
      "term": "Domain Name",
      "meaning": "A unique name that identifies a particular website and represents the name of the server where the web pages reside."
    },
    {
      "term": "Dots Per Inch (DPI)",
      "meaning": "It is defined as the measure of the resolution of a printer, scanner or monitor. It refers to the number of dots in a one inch line."
    },
    {
      "term": "Download",
      "meaning": "It refers to the act of transmitting data from a remote computer on the internet or other network to one's own computer."
    },
    {
      "term": "Drag-and-Drop",
      "meaning": "In computer graphical user interfaces, drag and drop is the action of clicking on a virtual object and dragging it to a different location or onto another virtual object."
    },
    {
      "term": "Dual Core",
      "meaning": "The pentium dual core brand was used for mainstream X-86 architecture microprocessors from Intel."
    },
    {
      "term": "Dumb Terminal",
      "meaning": "A computer terminal with no processing or programming capabilities, generally used for simple data entry or retrieval tasks."
    },
    {
      "term": "DVD",
      "meaning": "DVD is an optical disk storage media format that can be used for data storage including movies with high quality video and sound."
    },
    {
      "term": "Dynamic RAM",
      "meaning": "DRAM (Dynamic Random Access Memory) is a type of random access memory which stores each bit of data in a separate capacitor."
    },
    {
      "term": "EBCDIC",
      "meaning": "EBCDIC (Extended Binary Coded Decimal Interchange Code) is an 8-bit character encoding used on IBM mainframe operating systems, like Z/OS, S/390, AS/400 and i5/OS."
    },
    {
      "term": "E-Commerce",
      "meaning": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
    },
    {
      "term": "Editing",
      "meaning": "The process of changing information by inserting, deleting, replacing, rearranging and reformation."
    },
    {
      "term": "EDO (Extended Data Output) RAM",
      "meaning": "This form of dynamic RAM speeds access to memory locations by working on a simple assumption-the next time memory is accessed, it will be at a contiguous address in a contiguous chunk of hardware."
    },
    {
      "term": "Electrically Erasable Programmable Read Only Memory (EEPROM)",
      "meaning": "A special type of Programmable Read Only Memory (PROM) that can be erased by exposing it to an electrical charge. It retains its contents even when the power is turned off."
    },
    {
      "term": "Electronic Data Processing (EDP)",
      "meaning": "A data processing through equipment that is predominantly electronic such as a digital computer."
    },
    {
      "term": "E-mail",
      "meaning": "Electronic mail, abbreviated e-mail is a method of composing, sending, storing and receiving messages over electronic communication systems."
    },
    {
      "term": "Encapsulation",
      "meaning": "It is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
    },
    {
      "term": "Encryption",
      "meaning": "In cryptography, encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
    },
    {
      "term": "End User",
      "meaning": "Any individual who uses the information generated by a computer based system."
    },
    {
      "term": "Entity",
      "meaning": "An entity is something that has certain attributes or properties which may be assigned values."
    },
    {
      "term": "EPROM",
      "meaning": "An EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when its power supply is switched off."
    },
    {
      "term": "Escape Key",
      "meaning": "A key that permits the user to leave one segment of a program and move to another."
    },
    {
      "term": "Excel",
      "meaning": "Excel allows you to create spreadsheets much like paper ledgers that can perform automatic calculations."
    },
    {
      "term": "Exe (.exe)",
      "meaning": "It is a common filename extension denoting an executable file (a program) in DOS and MS-Windows."
    },
    {
      "term": "Execution Time",
      "meaning": "The total time required to execute a program on a particular system."
    },
    {
      "term": "Extranet",
      "meaning": "A technology that permits the users of one organization's intranet to enter portions of another organization's intranet in order to conduct business transactions or collaborate on joint projects."
    },
    {
      "term": "Fax",
      "meaning": "It stands for 'Facsimile machine'. It is used to transmit a copy of a document electronically."
    },
    {
      "term": "Field",
      "meaning": "The attributes of an entity are written as fields in the table representation."
    },
    {
      "term": "File",
      "meaning": "A collection of information stored electronically and treated as a unit by a computer."
    },
    {
      "term": "File Allocation Table (FAT)",
      "meaning": "It is the name of a computer file system architecture."
    },
    {
      "term": "File Manager",
      "meaning": "The file manager is an operating system utility that provides a user interface to work with file systems."
    },
    {
      "term": "File Server",
      "meaning": "A computer on a network that stores the programs and data files shared by the users of the network."
    },
    {
      "term": "Firewall",
      "meaning": "A security system usually consisting of hardware and software that prevents unauthorized persons from accessing certain parts of a program database or network."
    },
    {
      "term": "Firmware",
      "meaning": "Firmware is the technology which has the combination of both hardware and software."
    },
    {
      "term": "Flash Memory",
      "meaning": "It is a type of non-volatile computer storage chip that can be electrically erased and reprogrammed. It was developed using EEPROM."
    },
    {
      "term": "Floating-point Numbers",
      "meaning": "Signed numbers held in a fraction exponent format."
    },
    {
      "term": "Floppy disk",
      "meaning": "A floppy disk is a data storage device that is composed of a circular piece of thin, flexible (i.e., floppy) magnetic storage medium encased in a square or rectangular plastic walled."
    },
    {
      "term": "Flowcharts",
      "meaning": "Flowcharts are the means of visually representing the flow of data through an information processing system, the operations performed within the system and the sequence in which they are performed."
    },
    {
      "term": "Foreign Key",
      "meaning": "A field in a database table, which links it to another related table."
    },
    {
      "term": "FORTRAN",
      "meaning": "Its name stands for FORmula TRANslating system. The language was designed at IBM for scientific computing."
    },
    {
      "term": "Format",
      "meaning": "To set margins, tabs, font or line spacing in the layout of a document."
    },
    {
      "term": "Frame",
      "meaning": "The basic packages of information on a network channel."
    },
    {
      "term": "Frequency",
      "meaning": "It is usually expressed in cycles per second (cps or hertz Hz)."
    },
    {
      "term": "Freeware",
      "meaning": "A form of software distribution where the author retains copyright of the software but makes the program available to others at no cost."
    },
    {
      "term": "Function Key",
      "meaning": "A special key on a computer keyboard or a terminal device's keyboard that is used to perform specific functions."
    },
    {
      "term": "Garbage In Garbage Out (GIGO)",
      "meaning": "It pertains to the fact that most computer errors are not machine errors, they are data errors caused by incorrect input data."
    },
    {
      "term": "Gateway",
      "meaning": "A device that is used to join together two networks having different base protocols."
    },
    {
      "term": "Gigabyte",
      "meaning": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
    },
    {
      "term": "Gigahertz (GHz)",
      "meaning": "A measurement used to identify the speed of the central processing unit."
    },
    {
      "term": "Glitch",
      "meaning": "A hardware problem that causes a computer to malfunction or crash."
    },
    {
      "term": "Gopher",
      "meaning": "A protocol used for locating and transferring information on the internet. It is an internet search tool that allows users to access textual information."
    },
    {
      "term": "Graphic Interchange Format (GIF)",
      "meaning": "A simple file format for pictures and photographs, that are compressed so they can be sent quickly."
    },
    {
      "term": "Graphical User Interface",
      "meaning": "A Graphical User Interface (or GUI) is a method of interacting with a computer through a metaphor of direct manipulating of graphical images and widgets in addition to text."
    },
    {
      "term": "Groupware",
      "meaning": "It is software that allows networked individuals to form groups and collaborate on documents, programs or databases."
    },
    {
      "term": "Hacker",
      "meaning": "A computer criminal who penetrates and tampers with computer programs or systems."
    },
    {
      "term": "Hard Disk",
      "meaning": "A hard disk is a non-volatile data storage device that stores data on a magnetic surface layered onto disk platters."
    },
    {
      "term": "Hardware",
      "meaning": "The mechanical, magnetic, electronic and electrical components that comprise a computer system such as CPU, monitor, keyboard and mouse, etc."
    },
    {
      "term": "High-Level Programming Languages",
      "meaning": "A high-level programming language is a programming language that is more user-friendly, to some extent platform-independent and abstract from low-level computer processor operations such as memory accesses."
    },
    {
      "term": "Hit",
      "meaning": "A single request for information made by a client computer from a web server."
    },
    {
      "term": "Home Page",
      "meaning": "A starting point or a doorway to the website. It refers to the web page that identifies a website and contains the hyperlink to other web pages in the website."
    },
    {
      "term": "Host Computer",
      "meaning": "A computer that provides information or a service to other computers on the internet."
    },
    {
      "term": "Hub",
      "meaning": "A network device that connects multiple computers on a LAN, so that they can communicate with one another."
    },
    {
      "term": "Hyperlink",
      "meaning": "An image or portion of text on a web page that is linked to another web page."
    },
    {
      "term": "Hybrid Computer",
      "meaning": "Hybrid computers are made by taking the best features of the analog computer and digital computer."
    },
    {
      "term": "HyperText Transfer Protocol (HTTP)",
      "meaning": "It is an important protocol used on the world wide web for moving hypertext files across the internet. It requires an HTTP client program on one end and HTTP server program on the other end."
    },
    {
      "term": "Icon",
      "meaning": "A symbol (such as a picture or a folder) that represents a certain function on your computer. When the user clicks on the icon, the appropriate function is executed."
    },
    {
      "term": "Impact Printers",
      "meaning": "Impact printers transfer the image onto paper through a printing mechanism that strikes the paper called ribbon. Examples of impact printers are dot matrix printers and daisy wheel printers."
    },
    {
      "term": "Information",
      "meaning": "The summarization of data according to a certain pre-defined purpose."
    },
    {
      "term": "Ink-Jet Printer",
      "meaning": "In an ink-jet printer, characters are formed as a result of electrically charged or heated ink being sprayed in fine jets onto the paper."
    },
    {
      "term": "Input",
      "meaning": "In order to give instructions to a computer, the information has to be supplied to it. This information is given to the computers through an input device such as keyboard, mouse, scanner etc."
    },
    {
      "term": "Instant Messaging (IM)",
      "meaning": "A chat program that lets people communicate over the internet in real time."
    },
    {
      "term": "Instruction",
      "meaning": "A command or order given to a computer to perform a task."
    },
    {
      "term": "Instruction Cycle",
      "meaning": "Fetching and decoding operations of the machine cycle."
    },
    {
      "term": "Interface",
      "meaning": "A device or program that helps a user to communicate with a computer."
    },
    {
      "term": "Intelligent Terminal",
      "meaning": "Intelligent terminals are those which necessarily have processing power and non-volatile data storage space."
    },
    {
      "term": "Interpreter",
      "meaning": "A program that converts and executes the source code into machine code line by line."
    },
    {
      "term": "Internet",
      "meaning": "The internet (also known simply as the net)."
    }
  ]
}
```

---

## Interaction [20:15:10]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Computer Awareness.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Directory",
      "statement": "A directory contained inside another directory is called a sub-directory of that directory."
    },
    {
      "concept": "Dots Per Inch (DPI)",
      "statement": "The more dots per inch, the higher the resolution."
    },
    {
      "concept": "E-Commerce",
      "statement": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
    },
    {
      "concept": "Encapsulation",
      "statement": "Encapsulation is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
    },
    {
      "concept": "Encryption",
      "statement": "In cryptography, encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
    },
    {
      "concept": "EPROM",
      "statement": "An EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when its power supply is switched off."
    },
    {
      "concept": "File",
      "statement": "Every file must have its own distinctive name."
    },
    {
      "concept": "File Allocation Table (FAT)",
      "statement": "The FAT file system is a legacy file system which is simple and robust."
    },
    {
      "concept": "Firmware",
      "statement": "Firmware provides necessary instructions for how the device communicates with other computer hardware."
    },
    {
      "concept": "Floating-point Numbers",
      "statement": "Floating-point numbers are signed numbers held in a fraction exponent format."
    },
    {
      "concept": "Flowcharts",
      "statement": "Flowcharts are the means of visually representing the flow of data through an information processing system, the operations performed within the system and the sequence in which they are performed."
    },
    {
      "concept": "Frequency",
      "statement": "Frequency is the number of oscillations of a signal per unit of time."
    },
    {
      "concept": "Function Key",
      "statement": "Function keys are programmable so that a software product can put the function keys to specific uses."
    },
    {
      "concept": "Garbage In Garbage Out (GIGO)",
      "statement": "Most computer errors are not machine errors, they are data errors caused by incorrect input data."
    },
    {
      "concept": "Gigabyte",
      "statement": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
    },
    {
      "concept": "Gigahertz (GHz)",
      "statement": "One gigahertz is equal to 1 billion cycles per second."
    },
    {
      "concept": "Glitch",
      "statement": "A glitch is a hardware problem that causes a computer to malfunction or crash."
    },
    {
      "concept": "Gopher",
      "statement": "Gopher is an internet search tool that allows users to access textual information."
    },
    {
      "concept": "Graphic Interchange Format (GIF)",
      "statement": "GIF is a simple file format for pictures and photographs, that are compressed so they can be sent quickly."
    },
    {
      "concept": "Hard Disk",
      "statement": "A hard disk is a non-volatile data storage device that stores data on a magnetic surface layered onto disk platters."
    },
    {
      "concept": "High-Level Programming Languages",
      "statement": "A high-level programming language is more user-friendly, to some extent platform-independent and abstract from low-level computer processor operations such as memory accesses."
    },
    {
      "concept": "Hit",
      "statement": "A hit is a single request for information made by a client computer from a web server."
    },
    {
      "concept": "Home Page",
      "statement": "A home page refers to the web page that identifies a website and contains the hyperlink to other web pages in the website."
    },
    {
      "concept": "Host Computer",
      "statement": "Every host computer has its own unique host name."
    },
    {
      "concept": "Impact Printers",
      "statement": "Impact printers transfer the image onto paper through a printing mechanism that strikes the paper called a ribbon."
    },
    {
      "concept": "Information",
      "statement": "Information is the summarization of data according to a certain pre-defined purpose."
    },
    {
      "concept": "Ink-Jet Printer",
      "statement": "Individual nozzles in the printing head of an ink-jet printer produce high resolution characters."
    },
    {
      "concept": "Input",
      "statement": "Information is given to computers through an input device such as a keyboard, mouse, or scanner."
    },
    {
      "concept": "Instruction Cycle",
      "statement": "The instruction cycle consists of fetching and decoding operations of the machine cycle."
    },
    {
      "concept": "Intelligent Terminal",
      "statement": "Intelligent terminals have processing power and non-volatile data storage space."
    },
    {
      "concept": "Interpreter",
      "statement": "An interpreter converts and executes source code into machine code line by line."
    },
    {
      "concept": "Internet",
      "statement": "The internet is also known simply as the net."
    }
  ],
  "definitions": [
    {
      "term": "Disk Operating System (DOS)",
      "meaning": "An operating system which contains the disk oriented commands and uses disk devices for permanent storage."
    },
    {
      "term": "Directory",
      "meaning": "In computing, a directory is an entity in a file system which contains a group of files and other directories."
    },
    {
      "term": "Dot Matrix Printer",
      "meaning": "A Dot Matrix Printer refers to a type of computer printer with a print head that runs back and forth on the page and prints by impact, striking an ink-soaked cloth ribbon against the paper, much like a typewriter."
    },
    {
      "term": "Domain Name",
      "meaning": "A unique name that identifies a particular website and represents the name of the server where the web pages reside."
    },
    {
      "term": "Dots Per Inch (DPI)",
      "meaning": "It is defined as the measure of the resolution of a printer, scanner or monitor. It refers to the number of dots in a one inch line."
    },
    {
      "term": "Download",
      "meaning": "It refers to the act of transmitting data from a remote computer on the internet or other network to one's own computer."
    },
    {
      "term": "Drag-and-Drop",
      "meaning": "In computer graphical user interfaces, drag and drop is the action of clicking on a virtual object and dragging it to a different location or onto another virtual object."
    },
    {
      "term": "Dual Core",
      "meaning": "The pentium dual core brand was used for mainstream X-86 architecture microprocessors from Intel."
    },
    {
      "term": "Dumb Terminal",
      "meaning": "A computer terminal with no processing or programming capabilities, generally used for simple data entry or retrieval tasks."
    },
    {
      "term": "DVD",
      "meaning": "DVD is an optical disk storage media format that can be used for data storage including movies with high quality video and sound."
    },
    {
      "term": "Dynamic RAM",
      "meaning": "DRAM (Dynamic Random Access Memory) is a type of random access memory which stores each bit of data in a separate capacitor."
    },
    {
      "term": "EBCDIC",
      "meaning": "EBCDIC (Extended Binary Coded Decimal Interchange Code) is an 8-bit character encoding used on IBM mainframe operating systems, like Z/OS, S/390, AS/400 and i5/OS."
    },
    {
      "term": "E-Commerce",
      "meaning": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
    },
    {
      "term": "Editing",
      "meaning": "The process of changing information by inserting, deleting, replacing, rearranging and reformation."
    },
    {
      "term": "EDO (Extended Data Output) RAM",
      "meaning": "This form of dynamic RAM speeds access to memory locations by working on a simple assumption-the next time memory is accessed, it will be at a contiguous address in a contiguous chunk of hardware."
    },
    {
      "term": "Electrically Erasable Programmable Read Only Memory (EEPROM)",
      "meaning": "A special type of Programmable Read Only Memory (PROM) that can be erased by exposing it to an electrical charge. It retains its contents even when the power is turned off."
    },
    {
      "term": "Electronic Data Processing (EDP)",
      "meaning": "A data processing through equipment that is predominantly electronic such as a digital computer."
    },
    {
      "term": "E-mail",
      "meaning": "Electronic mail, abbreviated e-mail is a method of composing, sending, storing and receiving messages over electronic communication systems."
    },
    {
      "term": "Encapsulation",
      "meaning": "It is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
    },
    {
      "term": "Encryption",
      "meaning": "In cryptography, encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
    },
    {
      "term": "End User",
      "meaning": "Any individual who uses the information generated by a computer based system."
    },
    {
      "term": "Entity",
      "meaning": "An entity is something that has certain attributes or properties which may be assigned values."
    },
    {
      "term": "EPROM",
      "meaning": "An EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when its power supply is switched off."
    },
    {
      "term": "Escape Key",
      "meaning": "A key that permits the user to leave one segment of a program and move to another."
    },
    {
      "term": "Excel",
      "meaning": "Excel allows you to create spreadsheets much like paper ledgers that can perform automatic calculations."
    },
    {
      "term": "Exe (.exe)",
      "meaning": "It is a common filename extension denoting an executable file (a program) in DOS and MS-Windows."
    },
    {
      "term": "Execution Time",
      "meaning": "The total time required to execute a program on a particular system."
    },
    {
      "term": "Extranet",
      "meaning": "A technology that permits the users of one organization's intranet to enter portions of another organization's intranet in order to conduct business transactions or collaborate on joint projects."
    },
    {
      "term": "Fax",
      "meaning": "It stands for 'Facsimile machine'. It is used to transmit a copy of a document electronically."
    },
    {
      "term": "Field",
      "meaning": "The attributes of an entity are written as fields in the table representation."
    },
    {
      "term": "File",
      "meaning": "A collection of information stored electronically and treated as a unit by a computer."
    },
    {
      "term": "File Allocation Table (FAT)",
      "meaning": "It is the name of a computer file system architecture."
    },
    {
      "term": "File Manager",
      "meaning": "The file manager is an operating system utility that provides a user interface to work with file systems."
    },
    {
      "term": "File Server",
      "meaning": "A computer on a network that stores the programs and data files shared by the users of the network."
    },
    {
      "term": "Firewall",
      "meaning": "A security system usually consisting of hardware and software that prevents unauthorized persons from accessing certain parts of a program database or network."
    },
    {
      "term": "Firmware",
      "meaning": "Firmware is the technology which has the combination of both hardware and software."
    },
    {
      "term": "Flash Memory",
      "meaning": "It is a type of non-volatile computer storage chip that can be electrically erased and reprogrammed. It was developed using EEPROM."
    },
    {
      "term": "Floating-point Numbers",
      "meaning": "Signed numbers held in a fraction exponent format."
    },
    {
      "term": "Floppy disk",
      "meaning": "A floppy disk is a data storage device that is composed of a circular piece of thin, flexible (i.e., floppy) magnetic storage medium encased in a square or rectangular plastic walled."
    },
    {
      "term": "Flowcharts",
      "meaning": "Flowcharts are the means of visually representing the flow of data through an information processing system, the operations performed within the system and the sequence in which they are performed."
    },
    {
      "term": "Foreign Key",
      "meaning": "A field in a database table, which links it to another related table."
    },
    {
      "term": "FORTRAN",
      "meaning": "Its name stands for FORmula TRANslating system. The language was designed at IBM for scientific computing."
    },
    {
      "term": "Format",
      "meaning": "To set margins, tabs, font or line spacing in the layout of a document."
    },
    {
      "term": "Frame",
      "meaning": "The basic packages of information on a network channel."
    },
    {
      "term": "Frequency",
      "meaning": "It is usually expressed in cycles per second (cps or hertz Hz)."
    },
    {
      "term": "Freeware",
      "meaning": "A form of software distribution where the author retains copyright of the software but makes the program available to others at no cost."
    },
    {
      "term": "Function Key",
      "meaning": "A special key on a computer keyboard or a terminal device's keyboard that is used to perform specific functions."
    },
    {
      "term": "Garbage In Garbage Out (GIGO)",
      "meaning": "It pertains to the fact that most computer errors are not machine errors, they are data errors caused by incorrect input data."
    },
    {
      "term": "Gateway",
      "meaning": "A device that is used to join together two networks having different base protocols."
    },
    {
      "term": "Gigabyte",
      "meaning": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
    },
    {
      "term": "Gigahertz (GHz)",
      "meaning": "A measurement used to identify the speed of the central processing unit."
    },
    {
      "term": "Glitch",
      "meaning": "A hardware problem that causes a computer to malfunction or crash."
    },
    {
      "term": "Gopher",
      "meaning": "A protocol used for locating and transferring information on the internet. It is an internet search tool that allows users to access textual information."
    },
    {
      "term": "Graphic Interchange Format (GIF)",
      "meaning": "A simple file format for pictures and photographs, that are compressed so they can be sent quickly."
    },
    {
      "term": "Graphical User Interface",
      "meaning": "A Graphical User Interface (or GUI) is a method of interacting with a computer through a metaphor of direct manipulating of graphical images and widgets in addition to text."
    },
    {
      "term": "Groupware",
      "meaning": "It is software that allows networked individuals to form groups and collaborate on documents, programs or databases."
    },
    {
      "term": "Hacker",
      "meaning": "A computer criminal who penetrates and tampers with computer programs or systems."
    },
    {
      "term": "Hard Disk",
      "meaning": "A hard disk is a non-volatile data storage device that stores data on a magnetic surface layered onto disk platters."
    },
    {
      "term": "Hardware",
      "meaning": "The mechanical, magnetic, electronic and electrical components that comprise a computer system such as CPU, monitor, keyboard and mouse, etc."
    },
    {
      "term": "High-Level Programming Languages",
      "meaning": "A high-level programming language is a programming language that is more user-friendly, to some extent platform-independent and abstract from low-level computer processor operations such as memory accesses."
    },
    {
      "term": "Hit",
      "meaning": "A single request for information made by a client computer from a web server."
    },
    {
      "term": "Home Page",
      "meaning": "A starting point or a doorway to the website. It refers to the web page that identifies a website and contains the hyperlink to other web pages in the website."
    },
    {
      "term": "Host Computer",
      "meaning": "A computer that provides information or a service to other computers on the internet."
    },
    {
      "term": "Hub",
      "meaning": "A network device that connects multiple computers on a LAN, so that they can communicate with one another."
    },
    {
      "term": "Hyperlink",
      "meaning": "An image or portion of text on a web page that is linked to another web page."
    },
    {
      "term": "Hybrid Computer",
      "meaning": "Hybrid computers are made by taking the best features of the analog computer and digital computer."
    },
    {
      "term": "HyperText Transfer Protocol (HTTP)",
      "meaning": "It is an important protocol used on the world wide web for moving hypertext files across the internet. It requires an HTTP client program on one end and HTTP server program on the other end."
    },
    {
      "term": "Icon",
      "meaning": "A symbol (such as a picture or a folder) that represents a certain function on your computer. When the user clicks on the icon, the appropriate function is executed."
    },
    {
      "term": "Impact Printers",
      "meaning": "Impact printers transfer the image onto paper through a printing mechanism that strikes the paper called ribbon. Examples of impact printers are dot matrix printers and daisy wheel printers."
    },
    {
      "term": "Information",
      "meaning": "The summarization of data according to a certain pre-defined purpose."
    },
    {
      "term": "Ink-Jet Printer",
      "meaning": "In an ink-jet printer, characters are formed as a result of electrically charged or heated ink being sprayed in fine jets onto the paper."
    },
    {
      "term": "Input",
      "meaning": "In order to give instructions to a computer, the information has to be supplied to it. This information is given to the computers through an input device such as keyboard, mouse, scanner etc."
    },
    {
      "term": "Instant Messaging (IM)",
      "meaning": "A chat program that lets people communicate over the internet in real time."
    },
    {
      "term": "Instruction",
      "meaning": "A command or order given to a computer to perform a task."
    },
    {
      "term": "Instruction Cycle",
      "meaning": "Fetching and decoding operations of the machine cycle."
    },
    {
      "term": "Interface",
      "meaning": "A device or program that helps a user to communicate with a computer."
    },
    {
      "term": "Intelligent Terminal",
      "meaning": "Intelligent terminals are those which necessarily have processing power and non-volatile data storage space."
    },
    {
      "term": "Interpreter",
      "meaning": "A program that converts and executes the source code into machine code line by line."
    },
    {
      "term": "Internet",
      "meaning": "The internet (also known simply as the net)."
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
    "question": "What is a directory that is contained within another directory called?",
    "options": {
      "A": "Sub-directory",
      "B": "Parent directory",
      "C": "Child directory",
      "D": "Root directory"
    },
    "correct_answer": "A",
    "source_snippet": "A directory contained inside another directory is called a sub-directory of that directory."
  },
  {
    "question": "What does DPI stand for, and what does it measure?",
    "options": {
      "A": "Dots Per Inch, a measure of printer resolution",
      "B": "Digital Pixel Units, a measure of screen clarity",
      "C": "Data Processing Units, a measure of processing speed",
      "D": "Direct Port Access, a measure of network speed"
    },
    "correct_answer": "A",
    "source_snippet": "It is defined as the measure of the resolution of a printer, scanner or monitor. It refers to the number of dots in a one inch line."
  },
  {
    "question": "Which term describes the mechanism that associates code and data into a single unit, protecting them from external interference?",
    "options": {
      "A": "Encapsulation",
      "B": "Abstraction",
      "C": "Inheritance",
      "D": "Polymorphism"
    },
    "correct_answer": "A",
    "source_snippet": "Encapsulation is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
  },
  {
    "question": "What is the process of encoding messages to prevent unauthorized access?",
    "options": {
      "A": "Encryption",
      "B": "Decryption",
      "C": "Hashing",
      "D": "Compression"
    },
    "correct_answer": "A",
    "source_snippet": "In cryptography, encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
  },
  {
    "question": "What type of computer memory chip retains its data even when the power supply is switched off?",
    "options": {
      "A": "EPROM",
      "B": "RAM",
      "C": "SRAM",
      "D": "ROM"
    },
    "correct_answer": "A",
    "source_snippet": "An EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when its power supply is switched off."
  },
  {
    "question": "According to the GIGO principle, what is the most common cause of computer errors?",
    "options": {
      "A": "Incorrect input data",
      "B": "Machine malfunctions",
      "C": "Software bugs",
      "D": "Power surges"
    },
    "correct_answer": "A",
    "source_snippet": "Most computer errors are not machine errors, they are data errors caused by incorrect input data."
  },
  {
    "question": "What is a Gigabyte (GB) approximately equal to?",
    "options": {
      "A": "One billion bytes",
      "B": "One million bytes",
      "C": "One trillion bytes",
      "D": "One thousand bytes"
    },
    "correct_answer": "A",
    "source_snippet": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
  },
  {
    "question": "What does a Gigahertz (GHz) measure?",
    "options": {
      "A": "1 billion cycles per second",
      "B": "1 million cycles per second",
      "C": "1 thousand cycles per second",
      "D": "1 cycle per second"
    },
    "correct_answer": "A",
    "source_snippet": "One gigahertz is equal to 1 billion cycles per second."
  },
  {
    "question": "What is a 'glitch' in the context of computer hardware?",
    "options": {
      "A": "A hardware problem causing malfunction or crash",
      "B": "A software error in the operating system",
      "C": "A network connectivity issue",
      "D": "A user input error"
    },
    "correct_answer": "A",
    "source_snippet": "A glitch is a hardware problem that causes a computer to malfunction or crash."
  },
  {
    "question": "What is the primary function of firmware?",
    "options": {
      "A": "To provide instructions for hardware communication",
      "B": "To store user data",
      "C": "To execute application programs",
      "D": "To manage network connections"
    },
    "correct_answer": "A",
    "source_snippet": "Firmware provides necessary instructions for how the device communicates with other computer hardware."
  }
]
```

---

## Interaction [20:15:13]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is a directory that is contained within another directory called?
        Proposed Answer: A (Sub-directory)
        Source Snippet provided by Writer: A directory contained inside another directory is called a sub-directory of that directory.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'A directory contained inside another directory is called a sub-directory', which factually proves the proposed answer 'A (Sub-directory)'. The question is also factually accurate and does not contain hallucinations."}
```

---

## Interaction [20:15:17]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What does DPI stand for, and what does it measure?
        Proposed Answer: A (Dots Per Inch, a measure of printer resolution)
        Source Snippet provided by Writer: It is defined as the measure of the resolution of a printer, scanner or monitor. It refers to the number of dots in a one inch line.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet explicitly states that DPI is a measure of printer resolution and refers to the number of dots in a one-inch line, which directly supports the proposed answer."
}
```

---

## Interaction [20:15:21]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which term describes the mechanism that associates code and data into a single unit, protecting them from external interference?
        Proposed Answer: A (Encapsulation)
        Source Snippet provided by Writer: Encapsulation is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet directly defines encapsulation as the mechanism that associates code and data into a single unit and protects them from external interference, which perfectly matches the proposed answer and the question."
}
```

---

## Interaction [20:15:24]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the process of encoding messages to prevent unauthorized access?
        Proposed Answer: A (Encryption)
        Source Snippet provided by Writer: In cryptography, encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly defines encryption as the process of encoding messages to prevent unauthorized access, thus factually proving the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [20:15:28]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What type of computer memory chip retains its data even when the power supply is switched off?
        Proposed Answer: A (EPROM)
        Source Snippet provided by Writer: An EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when its power supply is switched off.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when the power supply is switched off, directly supporting the proposed answer."}
```

---

## Interaction [20:15:31]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: According to the GIGO principle, what is the most common cause of computer errors?
        Proposed Answer: A (Incorrect input data)
        Source Snippet provided by Writer: Most computer errors are not machine errors, they are data errors caused by incorrect input data.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Most computer errors are not machine errors, they are data errors caused by incorrect input data.' This directly supports the proposed answer that incorrect input data is the most common cause of computer errors, aligning with the GIGO principle."}
```

---

## Interaction [20:15:35]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is a Gigabyte (GB) approximately equal to?
        Proposed Answer: A (One billion bytes)
        Source Snippet provided by Writer: A gigabyte is a unit of information or computer storage equal to approximately one billion bytes.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that a gigabyte is equal to approximately one billion bytes, which directly supports the proposed answer."}
```

---

## Interaction [20:15:39]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What does a Gigahertz (GHz) measure?
        Proposed Answer: A (1 billion cycles per second)
        Source Snippet provided by Writer: One gigahertz is equal to 1 billion cycles per second.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that one gigahertz is equal to 1 billion cycles per second, which factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [20:15:42]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is a 'glitch' in the context of computer hardware?
        Proposed Answer: A (A hardware problem causing malfunction or crash)
        Source Snippet provided by Writer: A glitch is a hardware problem that causes a computer to malfunction or crash.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a 'glitch' is a hardware problem causing malfunction or crash, which perfectly matches the proposed answer."}
```

---

## Interaction [20:15:46]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary function of firmware?
        Proposed Answer: A (To provide instructions for hardware communication)
        Source Snippet provided by Writer: Firmware provides necessary instructions for how the device communicates with other computer hardware.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that firmware 'provides necessary instructions for how the device communicates with other computer hardware,' which is precisely what the proposed answer (A) states. The question is also factually accurate."}
```

---

## Interaction [20:18:48]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment to map it to the database.
    This segment is from approximately 80% into the book.
    
    
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

    CONTEXT TEXT (SEGMENT AT 80%):
     their relative positions by
means of address that indicate the physical location
of the data.
Disk Operating System (DOS) An operating system
which contains the disk oriented commands and
uses disk devices for permanent storage.
Directory In computing, a directory is an entity in a
file system which contains a group of files and other
directories. A directory contained inside another
directory is called a sub-directory of that directory.
Together, the directories form a hierarchy or a tree
structure.
Dot Matrix Printer A Dot Matrix Printer refers to a
type of computer printer with a print head that runs
back and forth on the page and prints by impact,
striking an ink-soaked cloth ribbon against the paper,
much like a typewriter.
Domain Name A unique name that identifies a
particular website and represents the name of the
server where the web pages reside.
Dots Per Inch (DPI) It is defined as the measure of
the resolution of a printer, scanner or monitor. It refers
to the number of dots in a one inch line. The more
dots per inch, the higher the resolution.
Download It refers to the act of transmitting data from
a remote computer on the internet or other network to
one's own computer.
Drag-and-Drop In computer graphical user
interfaces, drag and drop is the action of clicking on
a virtual object and dragging it to a different location
or onto another virtual object.
Computer Awareness
Dual Core The pentium dual core brand was used for
mainstream X-86 architecture microprocessor from Intel
Dumb Terminal A computer terminal with no
processing or programming capabilities, generally used
for simple data entry or retrieval tasks.
DVD DVD is an optical disk storage media format that
can be used for data storage including movies with high
quality video and sound.
Dynamic RAM DRAM (Dynamic Random Access
Memory) is a type of random access memory which
stores each bit of data in a separate capacitor.
E
EBCDIC EBCDIC (Extended Binary Coded Decimal
Interchange Code) is an 8-bit character encoding used
on IBM mainframe operating systems, like Z/OS, S/390,
AS/400 and i5/OS.
E-Commerce Electronic commerce is a type of industry
where buying and selling of product or services is
conducted over electronic systems such as the intranet
and other computer network.
Editing The process of changing information by
inserting, deleting, replacing, rearranging and
reformation.
EDO (Extended Data Output) RAM This form of
dynamic RAM speeds access to memory locations by
working on a simple assumption-the next time memory
is accessed, it will be at a contiguous address in a
contiguous chunk of hardware.
Electrically Erasable Programmable Read Only Memory
(EEPROM) A special type of Programmable Read Only
Memory (PROM) that can be erased by exposing it to
an electrical charge. It retains its contents even when
the power is turned off.
Electronic Data Processing (EDP) A data processing
through equipment that is predominantly electronic such
as digital computer.
E-mail Electronic m
    
```

### Response:
```json
{
  "exam_board": null,
  "exam_name": null,
  "year": null,
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Computer Awareness",
  "confidence": 0.95
}
```

---

## Interaction [20:18:56]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Computer Awareness
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
     their relative positions by
means of address that indicate the physical location
of the data.
Disk Operating System (DOS) An operating system
which contains the disk oriented commands and
uses disk devices for permanent storage.
Directory In computing, a directory is an entity in a
file system which contains a group of files and other
directories. A directory contained inside another
directory is called a sub-directory of that directory.
Together, the directories form a hierarchy or a tree
structure.
Dot Matrix Printer A Dot Matrix Printer refers to a
type of computer printer with a print head that runs
back and forth on the page and prints by impact,
striking an ink-soaked cloth ribbon against the paper,
much like a typewriter.
Domain Name A unique name that identifies a
particular website and represents the name of the
server where the web pages reside.
Dots Per Inch (DPI) It is defined as the measure of
the resolution of a printer, scanner or monitor. It refers
to the number of dots in a one inch line. The more
dots per inch, the higher the resolution.
Download It refers to the act of transmitting data from
a remote computer on the internet or other network to
one's own computer.
Drag-and-Drop In computer graphical user
interfaces, drag and drop is the action of clicking on
a virtual object and dragging it to a different location
or onto another virtual object.
Computer Awareness
Dual Core The pentium dual core brand was used for
mainstream X-86 architecture microprocessor from Intel
Dumb Terminal A computer terminal with no
processing or programming capabilities, generally used
for simple data entry or retrieval tasks.
DVD DVD is an optical disk storage media format that
can be used for data storage including movies with high
quality video and sound.
Dynamic RAM DRAM (Dynamic Random Access
Memory) is a type of random access memory which
stores each bit of data in a separate capacitor.
E
EBCDIC EBCDIC (Extended Binary Coded Decimal
Interchange Code) is an 8-bit character encoding used
on IBM mainframe operating systems, like Z/OS, S/390,
AS/400 and i5/OS.
E-Commerce Electronic commerce is a type of industry
where buying and selling of product or services is
conducted over electronic systems such as the intranet
and other computer network.
Editing The process of changing information by
inserting, deleting, replacing, rearranging and
reformation.
EDO (Extended Data Output) RAM This form of
dynamic RAM speeds access to memory locations by
working on a simple assumption-the next time memory
is accessed, it will be at a contiguous address in a
contiguous chunk of hardware.
Electrically Erasable Programmable Read Only Memory
(EEPROM) A special type of Programmable Read Only
Memory (PROM) that can be erased by exposing it to
an electrical charge. It retains its contents even when
the power is turned off.
Electronic Data Processing (EDP) A data processing
through equipment that is predominantly electronic such
as digital computer.
E-mail Electronic mail, abbreviated e-mail is a method
of composing, sending, storing and receiving messages
over electronic communication systems.
Encapsulation It is a mechanism that associates the
code and the data it manipulates into a single unit and
keeps them safe from external interference..
Encryption In cryptography, encryption is the process of
encoding messages (or information) in such a way that
hackers cannot read it, but the authorised users can
access it.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ch
d
ges
and
Glossary
Downloaded From: www.EasyEngineering.net
End User Any individual who uses the information
generated by a computer based system.
Entity An entity is something that has certain attributes
or properties which may be assigned values.
EPROM An EPROM (Erasable Programmable Read Only
Memory) is a type of computer memory chip that retains
its data when its power supply is switched off.
Escape Key A key that permits the user to leave one
segment of a program and move to another.
Excel Excel allows you to create spreadsheets much like
paper ledgers that can perform automatic calculations.
Exe (.exe) It is a common filename extension denoting an
executable file (a program) in the DOS, MS- Windows.
Execution Time The total time required to execute a
program on a particular system.
Extranet A technology that permits the users of one
organisation's intranet to enter portions of another
organisation's intranet in order to conduct business
transactions or collaborate on joint projects.
F
Fax It stands for 'Facsimile machine'. It is used to
transmit a copy of a document electronically.
Field The attributes of an entity are written as fields in
the table representation.
File A collection of information stored electronically and
treated as a unit by a computer. Every file must have its
own distinctive name.
File Allocation Table (FAT) It is the name of a computer
file system architecture. The FAT file system is a legacy
file system which is simple and robust.
File Manager The file manager is an operating system
utility that provides a user interface to work with file
systems.
File Server A computer on a network that stores the
programs and data files shared by the users of the
network.
Firewall A security system usually consisting of hardware
and software that prevents unauthorised persons from
accessing certain parts of a program database or
network.
Firmware
Firmware is the technology which has the
combination of both hardware and software. It provides
necessary instructions for how the device communicates
with other computer hardware.
155
Flash Memory It is a type of non-volatile computer
storage chip that can be electrically erased and
reprogrammed. It was developed using EEPROM.
Floating-point Numbers Signed numbers held in a
fraction exponent format.
Floppy disk A floppy disk is a data storage device
that is composed of a circular piece of thin, flexible
(i.e., floppy) magnetic storage medium encased in
a square or rectangular plastic walled.
Flowcharts Flowcharts are the means of visually
representing the flow of data through an
information processing system, the operations
performed within the system and the sequence in
which they are performed.
Foreign Key A field in a database table, which
links it to another related table.
FORTRAN Its name stands for FORmula
TRANslating system. The language was designed
at IBM for scientific computing. The components
were very simple and provided the programmer
with low-level access to the computer's innards.
Format To set margins, tabs, font or line spacing
in layout of a document.
Frame The basic packages of information on a
network channel.
Frequency The number of oscillations of a signal
per unit of time. It is usually expressed in cycles
per second (cps or hertz Hz)..
Freeware A form of software distribution where
the author retains copyright of the software but
makes the program available to others at no cost.
Function Key A special key on a computer
keyboard or a terminal devices keyboard that is
used to perform specific functions. These keys
are programmable so that a software product
can put the function keys to specific uses.
Many keyboards have function keys labelled from
F₁ to F10
G
Garbage In Garbage Out (GIGO)
It pertains to the
fact that most computer errors are not machine
errors, they are data errors caused by incorrect
input data.
Gateway A device that is used to joint together
two networks having different base protocols.
Downloaded From: www Es Engineering.net

--- PAGE BREAK ---

156
Downloaded From: www.EasyEngineering.net
Gigabyte A gigabyte is a unit of information or
computer storage equal to approximately one billion
bytes.
Gigahertz (GHz) A measurement used to identify the
speed of the central processing unit. One gigahertz is
equal to 1 billion cycles per second.
Glitch A hardware problem that causes a computer to
malfunction or crash.
Gopher A protocol used for locating and transferring
information on the internet. It is an internet search tool
that allows users to access textual information.
Graphic Interchange Format (GIF) A simple file
format for pictures and photographs, that are
compressed so they can be sent quickly.
Graphical User Interface A Graphical User Interface
(or GUI) is a method of interacting with a computer
through a metaphor of direct manipulating of graphical
images and widgets in addition to text.
Groupware It is a software that allows networked
individual to form groups and collaborate on
documents, programs or database.
H
Hacker A computer criminal who penetrates and
tempers with computer programs or systems.
Hard Disk A hard disk is a non-volatile data storage
device that stores data on a magnetic surface layered
onto disk platters.
Hardware The mechanical, magnetic, electronic and
electrical components that comprises a computer system
such as CPU, monitor, keyboard and mouse, etc.
High-Level Programming Languages A high-level
programming language is a programming language
that is more user-friendly, to some extent
platform-independent and abstract from low-level
computer processor operations such as memory
accesses.
Hit A single request for information made by a client
computer from a web server.
Home Page A starting point or a doorway to the
website. It refers to the web page that identifies a
website and contains the hyperlink to other web page in
the website.
Host Computer A computer that provides information
or a service to other computers on the internet. Every
host computer has its own unique host name.
Computer Awareness
Hub A network device that connects multiple
computers on a LAN, so that they can communicate
with one another.
Hyperlink An image or portion of text on a web page
that is linked to another web page.
Hybrid Computer Hybrid computers are made by
taking the best features of the analog computer and
digital computer. A simple example of this type is the
computer used in hospitals.
HyperText Transfer Protocol (HTTP) It is an
important protocol used on the world wide web for
moving hypertext files across the internet. It requires
an HTTP client program on one end and HTTP server
program on other end.
I
Icon A symbol (such as picture or a folder) that
represents a certain function on your computer. When
the user clicks on the icon, the appropriate function is
executed.
Impact Printers Impact printers transfer the image
onto paper through a printing mechanism that strikes
the paper called ribbon. Examples of impact printers
are dot matrix printers and daisy wheel printers.
Information Information is the summarization of data
according to a certain pre-defined purpose.
Ink-Jet Printer In an ink-jet printer, characters are
formed as a result of electrically charged or heated
ink being sprayed in fine jets onto the paper.
Individual nozzles in the printing head produce high
resolution characters.
Input In order to give instructions to a computer, the
information has to be supplied to it. This information
is given to the computers through an input device
such as keyboard, mouse, scanner etc.
Instant Messaging (IM) A chat program that lets
people communicate over the internet in real time.
Instruction A command or order given to a
computer to perform a task.
Instruction Cycle Fetching and decoding operations
of the machine cycle.
Interface A device or program that helps a user to
communicate with a computer.
Intelligent Terminal Intelligent terminals are those
which necessarily have processing power and
non-volatile data storage space.
K
to
tr
C
K
di
St
ab
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
mess
e
unicate
eb page
de by
er and
e is the
b for
equires
P server
Chat
er. When
nction is
image
I strikes
printers
S.
of data
s are
eated
e high
uter, the
mation
vice
lets
ime.
erations
user to
hose
Glossary
Interpreter A program that converts and executes the
source code into machine code line by line.
Internet The internet (also known simply as the net)
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Directory",
      "statement": "A directory contained inside another directory is called a sub-directory of that directory."
    },
    {
      "concept": "Dots Per Inch (DPI)",
      "statement": "The more dots per inch, the higher the resolution."
    },
    {
      "concept": "E-Commerce",
      "statement": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
    },
    {
      "concept": "Encapsulation",
      "statement": "Encapsulation is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
    },
    {
      "concept": "Encryption",
      "statement": "Encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
    },
    {
      "concept": "File",
      "statement": "Every file must have its own distinctive name."
    },
    {
      "concept": "File Allocation Table (FAT)",
      "statement": "The FAT file system is a legacy file system which is simple and robust."
    },
    {
      "concept": "Firmware",
      "statement": "Firmware provides necessary instructions for how the device communicates with other computer hardware."
    },
    {
      "concept": "Flash Memory",
      "statement": "Flash memory was developed using EEPROM."
    },
    {
      "concept": "Floating-point Numbers",
      "statement": "Floating-point numbers are signed numbers held in a fraction exponent format."
    },
    {
      "concept": "Flowcharts",
      "statement": "Flowcharts are the means of visually representing the flow of data through an information processing system, the operations performed within the system and the sequence in which they are performed."
    },
    {
      "concept": "FORTRAN",
      "statement": "The FORTRAN language was designed at IBM for scientific computing."
    },
    {
      "concept": "Frequency",
      "statement": "Frequency is usually expressed in cycles per second (cps or hertz Hz)."
    },
    {
      "concept": "Freeware",
      "statement": "Freeware is a form of software distribution where the author retains copyright of the software but makes the program available to others at no cost."
    },
    {
      "concept": "Function Key",
      "statement": "Function keys are programmable so that a software product can put the function keys to specific uses."
    },
    {
      "concept": "Garbage In Garbage Out (GIGO)",
      "statement": "Most computer errors are not machine errors, they are data errors caused by incorrect input data."
    },
    {
      "concept": "Gigabyte",
      "statement": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
    },
    {
      "concept": "Gigahertz (GHz)",
      "statement": "One gigahertz is equal to 1 billion cycles per second."
    },
    {
      "concept": "Glitch",
      "statement": "A glitch is a hardware problem that causes a computer to malfunction or crash."
    },
    {
      "concept": "Gopher",
      "statement": "Gopher is an internet search tool that allows users to access textual information."
    },
    {
      "concept": "Graphic Interchange Format (GIF)",
      "statement": "GIF is a simple file format for pictures and photographs, that are compressed so they can be sent quickly."
    },
    {
      "concept": "Graphical User Interface",
      "statement": "A Graphical User Interface (GUI) is a method of interacting with a computer through a metaphor of direct manipulating of graphical images and widgets in addition to text."
    },
    {
      "concept": "Groupware",
      "statement": "Groupware is software that allows networked individuals to form groups and collaborate on documents, programs or databases."
    },
    {
      "concept": "Hacker",
      "statement": "A hacker is a computer criminal who penetrates and tampers with computer programs or systems."
    },
    {
      "concept": "Hard Disk",
      "statement": "A hard disk is a non-volatile data storage device that stores data on a magnetic surface layered onto disk platters."
    },
    {
      "concept": "High-Level Programming Languages",
      "statement": "High-level programming languages are more user-friendly, to some extent platform-independent and abstract from low-level computer processor operations such as memory accesses."
    },
    {
      "concept": "Hit",
      "statement": "A hit is a single request for information made by a client computer from a web server."
    },
    {
      "concept": "Home Page",
      "statement": "A home page is the web page that identifies a website and contains the hyperlink to other web pages in the website."
    },
    {
      "concept": "Host Computer",
      "statement": "Every host computer has its own unique host name."
    },
    {
      "concept": "Impact Printers",
      "statement": "Examples of impact printers are dot matrix printers and daisy wheel printers."
    },
    {
      "concept": "Information",
      "statement": "Information is the summarization of data according to a certain pre-defined purpose."
    },
    {
      "concept": "Ink-Jet Printer",
      "statement": "Individual nozzles in the printing head produce high resolution characters."
    },
    {
      "concept": "Input",
      "statement": "Information is given to computers through an input device such as keyboard, mouse, scanner etc."
    },
    {
      "concept": "Instant Messaging (IM)",
      "statement": "Instant Messaging (IM) is a chat program that lets people communicate over the internet in real time."
    },
    {
      "concept": "Instruction Cycle",
      "statement": "The instruction cycle consists of fetching and decoding operations of the machine cycle."
    },
    {
      "concept": "Internet",
      "statement": "The internet is also known simply as the net."
    },
    {
      "concept": "Interpreter",
      "statement": "An interpreter converts and executes source code into machine code line by line."
    }
  ],
  "definitions": [
    {
      "term": "Disk Operating System (DOS)",
      "meaning": "An operating system which contains the disk oriented commands and uses disk devices for permanent storage."
    },
    {
      "term": "Directory",
      "meaning": "In computing, a directory is an entity in a file system which contains a group of files and other directories."
    },
    {
      "term": "Dot Matrix Printer",
      "meaning": "A Dot Matrix Printer refers to a type of computer printer with a print head that runs back and forth on the page and prints by impact, striking an ink-soaked cloth ribbon against the paper, much like a typewriter."
    },
    {
      "term": "Domain Name",
      "meaning": "A unique name that identifies a particular website and represents the name of the server where the web pages reside."
    },
    {
      "term": "Dots Per Inch (DPI)",
      "meaning": "It is defined as the measure of the resolution of a printer, scanner or monitor. It refers to the number of dots in a one inch line."
    },
    {
      "term": "Download",
      "meaning": "It refers to the act of transmitting data from a remote computer on the internet or other network to one's own computer."
    },
    {
      "term": "Drag-and-Drop",
      "meaning": "In computer graphical user interfaces, drag and drop is the action of clicking on a virtual object and dragging it to a different location or onto another virtual object."
    },
    {
      "term": "Dual Core",
      "meaning": "The pentium dual core brand was used for mainstream X-86 architecture microprocessor from Intel."
    },
    {
      "term": "Dumb Terminal",
      "meaning": "A computer terminal with no processing or programming capabilities, generally used for simple data entry or retrieval tasks."
    },
    {
      "term": "DVD",
      "meaning": "DVD is an optical disk storage media format that can be used for data storage including movies with high quality video and sound."
    },
    {
      "term": "Dynamic RAM",
      "meaning": "DRAM (Dynamic Random Access Memory) is a type of random access memory which stores each bit of data in a separate capacitor."
    },
    {
      "term": "EBCDIC",
      "meaning": "EBCDIC (Extended Binary Coded Decimal Interchange Code) is an 8-bit character encoding used on IBM mainframe operating systems, like Z/OS, S/390, AS/400 and i5/OS."
    },
    {
      "term": "E-Commerce",
      "meaning": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
    },
    {
      "term": "Editing",
      "meaning": "The process of changing information by inserting, deleting, replacing, rearranging and reformation."
    },
    {
      "term": "EDO (Extended Data Output) RAM",
      "meaning": "This form of dynamic RAM speeds access to memory locations by working on a simple assumption-the next time memory is accessed, it will be at a contiguous address in a contiguous chunk of hardware."
    },
    {
      "term": "Electrically Erasable Programmable Read Only Memory (EEPROM)",
      "meaning": "A special type of Programmable Read Only Memory (PROM) that can be erased by exposing it to an electrical charge. It retains its contents even when the power is turned off."
    },
    {
      "term": "Electronic Data Processing (EDP)",
      "meaning": "A data processing through equipment that is predominantly electronic such as digital computer."
    },
    {
      "term": "E-mail",
      "meaning": "Electronic mail, abbreviated e-mail is a method of composing, sending, storing and receiving messages over electronic communication systems."
    },
    {
      "term": "Encapsulation",
      "meaning": "It is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
    },
    {
      "term": "Encryption",
      "meaning": "In cryptography, encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
    },
    {
      "term": "End User",
      "meaning": "Any individual who uses the information generated by a computer based system."
    },
    {
      "term": "Entity",
      "meaning": "An entity is something that has certain attributes or properties which may be assigned values."
    },
    {
      "term": "EPROM",
      "meaning": "An EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when its power supply is switched off."
    },
    {
      "term": "Escape Key",
      "meaning": "A key that permits the user to leave one segment of a program and move to another."
    },
    {
      "term": "Excel",
      "meaning": "Excel allows you to create spreadsheets much like paper ledgers that can perform automatic calculations."
    },
    {
      "term": "Exe (.exe)",
      "meaning": "It is a common filename extension denoting an executable file (a program) in the DOS, MS- Windows."
    },
    {
      "term": "Execution Time",
      "meaning": "The total time required to execute a program on a particular system."
    },
    {
      "term": "Extranet",
      "meaning": "A technology that permits the users of one organisation's intranet to enter portions of another organisation's intranet in order to conduct business transactions or collaborate on joint projects."
    },
    {
      "term": "Fax",
      "meaning": "It stands for 'Facsimile machine'. It is used to transmit a copy of a document electronically."
    },
    {
      "term": "Field",
      "meaning": "The attributes of an entity are written as fields in the table representation."
    },
    {
      "term": "File",
      "meaning": "A collection of information stored electronically and treated as a unit by a computer."
    },
    {
      "term": "File Allocation Table (FAT)",
      "meaning": "It is the name of a computer file system architecture."
    },
    {
      "term": "File Manager",
      "meaning": "The file manager is an operating system utility that provides a user interface to work with file systems."
    },
    {
      "term": "File Server",
      "meaning": "A computer on a network that stores the programs and data files shared by the users of the network."
    },
    {
      "term": "Firewall",
      "meaning": "A security system usually consisting of hardware and software that prevents unauthorised persons from accessing certain parts of a program database or network."
    },
    {
      "term": "Firmware",
      "meaning": "Firmware is the technology which has the combination of both hardware and software."
    },
    {
      "term": "Flash Memory",
      "meaning": "It is a type of non-volatile computer storage chip that can be electrically erased and reprogrammed."
    },
    {
      "term": "Floating-point Numbers",
      "meaning": "Signed numbers held in a fraction exponent format."
    },
    {
      "term": "Floppy disk",
      "meaning": "A floppy disk is a data storage device that is composed of a circular piece of thin, flexible (i.e., floppy) magnetic storage medium encased in a square or rectangular plastic walled."
    },
    {
      "term": "Flowcharts",
      "meaning": "Flowcharts are the means of visually representing the flow of data through an information processing system, the operations performed within the system and the sequence in which they are performed."
    },
    {
      "term": "Foreign Key",
      "meaning": "A field in a database table, which links it to another related table."
    },
    {
      "term": "FORTRAN",
      "meaning": "Its name stands for FORmula TRANslating system. The language was designed at IBM for scientific computing."
    },
    {
      "term": "Format",
      "meaning": "To set margins, tabs, font or line spacing in the layout of a document."
    },
    {
      "term": "Frame",
      "meaning": "The basic packages of information on a network channel."
    },
    {
      "term": "Frequency",
      "meaning": "The number of oscillations of a signal per unit of time."
    },
    {
      "term": "Freeware",
      "meaning": "A form of software distribution where the author retains copyright of the software but makes the program available to others at no cost."
    },
    {
      "term": "Function Key",
      "meaning": "A special key on a computer keyboard or a terminal device's keyboard that is used to perform specific functions."
    },
    {
      "term": "Garbage In Garbage Out (GIGO)",
      "meaning": "It pertains to the fact that most computer errors are not machine errors, they are data errors caused by incorrect input data."
    },
    {
      "term": "Gateway",
      "meaning": "A device that is used to join together two networks having different base protocols."
    },
    {
      "term": "Gigabyte",
      "meaning": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
    },
    {
      "term": "Gigahertz (GHz)",
      "meaning": "A measurement used to identify the speed of the central processing unit."
    },
    {
      "term": "Glitch",
      "meaning": "A hardware problem that causes a computer to malfunction or crash."
    },
    {
      "term": "Gopher",
      "meaning": "A protocol used for locating and transferring information on the internet. It is an internet search tool that allows users to access textual information."
    },
    {
      "term": "Graphic Interchange Format (GIF)",
      "meaning": "A simple file format for pictures and photographs, that are compressed so they can be sent quickly."
    },
    {
      "term": "Graphical User Interface",
      "meaning": "A Graphical User Interface (or GUI) is a method of interacting with a computer through a metaphor of direct manipulating of graphical images and widgets in addition to text."
    },
    {
      "term": "Groupware",
      "meaning": "It is a software that allows networked individuals to form groups and collaborate on documents, programs or databases."
    },
    {
      "term": "Hacker",
      "meaning": "A computer criminal who penetrates and tempers with computer programs or systems."
    },
    {
      "term": "Hard Disk",
      "meaning": "A hard disk is a non-volatile data storage device that stores data on a magnetic surface layered onto disk platters."
    },
    {
      "term": "Hardware",
      "meaning": "The mechanical, magnetic, electronic and electrical components that comprises a computer system such as CPU, monitor, keyboard and mouse, etc."
    },
    {
      "term": "High-Level Programming Languages",
      "meaning": "A high-level programming language is a programming language that is more user-friendly, to some extent platform-independent and abstract from low-level computer processor operations such as memory accesses."
    },
    {
      "term": "Hit",
      "meaning": "A single request for information made by a client computer from a web server."
    },
    {
      "term": "Home Page",
      "meaning": "A starting point or a doorway to the website."
    },
    {
      "term": "Host Computer",
      "meaning": "A computer that provides information or a service to other computers on the internet."
    },
    {
      "term": "Hub",
      "meaning": "A network device that connects multiple computers on a LAN, so that they can communicate with one another."
    },
    {
      "term": "Hyperlink",
      "meaning": "An image or portion of text on a web page that is linked to another web page."
    },
    {
      "term": "Hybrid Computer",
      "meaning": "Hybrid computers are made by taking the best features of the analog computer and digital computer."
    },
    {
      "term": "HyperText Transfer Protocol (HTTP)",
      "meaning": "It is an important protocol used on the world wide web for moving hypertext files across the internet. It requires an HTTP client program on one end and HTTP server program on other end."
    },
    {
      "term": "Icon",
      "meaning": "A symbol (such as picture or a folder) that represents a certain function on your computer. When the user clicks on the icon, the appropriate function is executed."
    },
    {
      "term": "Impact Printers",
      "meaning": "Impact printers transfer the image onto paper through a printing mechanism that strikes the paper called ribbon."
    },
    {
      "term": "Information",
      "meaning": "The summarization of data according to a certain pre-defined purpose."
    },
    {
      "term": "Ink-Jet Printer",
      "meaning": "In an ink-jet printer, characters are formed as a result of electrically charged or heated ink being sprayed in fine jets onto the paper."
    },
    {
      "term": "Input",
      "meaning": "In order to give instructions to a computer, the information has to be supplied to it."
    },
    {
      "term": "Instant Messaging (IM)",
      "meaning": "A chat program that lets people communicate over the internet in real time."
    },
    {
      "term": "Instruction",
      "meaning": "A command or order given to a computer to perform a task."
    },
    {
      "term": "Instruction Cycle",
      "meaning": "Fetching and decoding operations of the machine cycle."
    },
    {
      "term": "Interface",
      "meaning": "A device or program that helps a user to communicate with a computer."
    },
    {
      "term": "Intelligent Terminal",
      "meaning": "Intelligent terminals are those which necessarily have processing power and non-volatile data storage space."
    },
    {
      "term": "Internet",
      "meaning": "The internet (also known simply as the net)"
    },
    {
      "term": "Interpreter",
      "meaning": "A program that converts and executes the source code into machine code line by line."
    }
  ]
}
```

---

## Interaction [20:21:09]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Computer Awareness.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Directory",
      "statement": "A directory contained inside another directory is called a sub-directory of that directory."
    },
    {
      "concept": "Dots Per Inch (DPI)",
      "statement": "The more dots per inch, the higher the resolution."
    },
    {
      "concept": "E-Commerce",
      "statement": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
    },
    {
      "concept": "Encapsulation",
      "statement": "Encapsulation is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
    },
    {
      "concept": "Encryption",
      "statement": "Encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
    },
    {
      "concept": "File",
      "statement": "Every file must have its own distinctive name."
    },
    {
      "concept": "File Allocation Table (FAT)",
      "statement": "The FAT file system is a legacy file system which is simple and robust."
    },
    {
      "concept": "Firmware",
      "statement": "Firmware provides necessary instructions for how the device communicates with other computer hardware."
    },
    {
      "concept": "Flash Memory",
      "statement": "Flash memory was developed using EEPROM."
    },
    {
      "concept": "Floating-point Numbers",
      "statement": "Floating-point numbers are signed numbers held in a fraction exponent format."
    },
    {
      "concept": "Flowcharts",
      "statement": "Flowcharts are the means of visually representing the flow of data through an information processing system, the operations performed within the system and the sequence in which they are performed."
    },
    {
      "concept": "FORTRAN",
      "statement": "The FORTRAN language was designed at IBM for scientific computing."
    },
    {
      "concept": "Frequency",
      "statement": "Frequency is usually expressed in cycles per second (cps or hertz Hz)."
    },
    {
      "concept": "Freeware",
      "statement": "Freeware is a form of software distribution where the author retains copyright of the software but makes the program available to others at no cost."
    },
    {
      "concept": "Function Key",
      "statement": "Function keys are programmable so that a software product can put the function keys to specific uses."
    },
    {
      "concept": "Garbage In Garbage Out (GIGO)",
      "statement": "Most computer errors are not machine errors, they are data errors caused by incorrect input data."
    },
    {
      "concept": "Gigabyte",
      "statement": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
    },
    {
      "concept": "Gigahertz (GHz)",
      "statement": "One gigahertz is equal to 1 billion cycles per second."
    },
    {
      "concept": "Glitch",
      "statement": "A glitch is a hardware problem that causes a computer to malfunction or crash."
    },
    {
      "concept": "Gopher",
      "statement": "Gopher is an internet search tool that allows users to access textual information."
    },
    {
      "concept": "Graphic Interchange Format (GIF)",
      "statement": "GIF is a simple file format for pictures and photographs, that are compressed so they can be sent quickly."
    },
    {
      "concept": "Graphical User Interface",
      "statement": "A Graphical User Interface (GUI) is a method of interacting with a computer through a metaphor of direct manipulating of graphical images and widgets in addition to text."
    },
    {
      "concept": "Groupware",
      "statement": "Groupware is software that allows networked individuals to form groups and collaborate on documents, programs or databases."
    },
    {
      "concept": "Hacker",
      "statement": "A hacker is a computer criminal who penetrates and tampers with computer programs or systems."
    },
    {
      "concept": "Hard Disk",
      "statement": "A hard disk is a non-volatile data storage device that stores data on a magnetic surface layered onto disk platters."
    },
    {
      "concept": "High-Level Programming Languages",
      "statement": "High-level programming languages are more user-friendly, to some extent platform-independent and abstract from low-level computer processor operations such as memory accesses."
    },
    {
      "concept": "Hit",
      "statement": "A hit is a single request for information made by a client computer from a web server."
    },
    {
      "concept": "Home Page",
      "statement": "A home page is the web page that identifies a website and contains the hyperlink to other web pages in the website."
    },
    {
      "concept": "Host Computer",
      "statement": "Every host computer has its own unique host name."
    },
    {
      "concept": "Impact Printers",
      "statement": "Examples of impact printers are dot matrix printers and daisy wheel printers."
    },
    {
      "concept": "Information",
      "statement": "Information is the summarization of data according to a certain pre-defined purpose."
    },
    {
      "concept": "Ink-Jet Printer",
      "statement": "Individual nozzles in the printing head produce high resolution characters."
    },
    {
      "concept": "Input",
      "statement": "Information is given to computers through an input device such as keyboard, mouse, scanner etc."
    },
    {
      "concept": "Instant Messaging (IM)",
      "statement": "Instant Messaging (IM) is a chat program that lets people communicate over the internet in real time."
    },
    {
      "concept": "Instruction Cycle",
      "statement": "The instruction cycle consists of fetching and decoding operations of the machine cycle."
    },
    {
      "concept": "Internet",
      "statement": "The internet is also known simply as the net."
    },
    {
      "concept": "Interpreter",
      "statement": "An interpreter converts and executes source code into machine code line by line."
    }
  ],
  "definitions": [
    {
      "term": "Disk Operating System (DOS)",
      "meaning": "An operating system which contains the disk oriented commands and uses disk devices for permanent storage."
    },
    {
      "term": "Directory",
      "meaning": "In computing, a directory is an entity in a file system which contains a group of files and other directories."
    },
    {
      "term": "Dot Matrix Printer",
      "meaning": "A Dot Matrix Printer refers to a type of computer printer with a print head that runs back and forth on the page and prints by impact, striking an ink-soaked cloth ribbon against the paper, much like a typewriter."
    },
    {
      "term": "Domain Name",
      "meaning": "A unique name that identifies a particular website and represents the name of the server where the web pages reside."
    },
    {
      "term": "Dots Per Inch (DPI)",
      "meaning": "It is defined as the measure of the resolution of a printer, scanner or monitor. It refers to the number of dots in a one inch line."
    },
    {
      "term": "Download",
      "meaning": "It refers to the act of transmitting data from a remote computer on the internet or other network to one's own computer."
    },
    {
      "term": "Drag-and-Drop",
      "meaning": "In computer graphical user interfaces, drag and drop is the action of clicking on a virtual object and dragging it to a different location or onto another virtual object."
    },
    {
      "term": "Dual Core",
      "meaning": "The pentium dual core brand was used for mainstream X-86 architecture microprocessor from Intel."
    },
    {
      "term": "Dumb Terminal",
      "meaning": "A computer terminal with no processing or programming capabilities, generally used for simple data entry or retrieval tasks."
    },
    {
      "term": "DVD",
      "meaning": "DVD is an optical disk storage media format that can be used for data storage including movies with high quality video and sound."
    },
    {
      "term": "Dynamic RAM",
      "meaning": "DRAM (Dynamic Random Access Memory) is a type of random access memory which stores each bit of data in a separate capacitor."
    },
    {
      "term": "EBCDIC",
      "meaning": "EBCDIC (Extended Binary Coded Decimal Interchange Code) is an 8-bit character encoding used on IBM mainframe operating systems, like Z/OS, S/390, AS/400 and i5/OS."
    },
    {
      "term": "E-Commerce",
      "meaning": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
    },
    {
      "term": "Editing",
      "meaning": "The process of changing information by inserting, deleting, replacing, rearranging and reformation."
    },
    {
      "term": "EDO (Extended Data Output) RAM",
      "meaning": "This form of dynamic RAM speeds access to memory locations by working on a simple assumption-the next time memory is accessed, it will be at a contiguous address in a contiguous chunk of hardware."
    },
    {
      "term": "Electrically Erasable Programmable Read Only Memory (EEPROM)",
      "meaning": "A special type of Programmable Read Only Memory (PROM) that can be erased by exposing it to an electrical charge. It retains its contents even when the power is turned off."
    },
    {
      "term": "Electronic Data Processing (EDP)",
      "meaning": "A data processing through equipment that is predominantly electronic such as digital computer."
    },
    {
      "term": "E-mail",
      "meaning": "Electronic mail, abbreviated e-mail is a method of composing, sending, storing and receiving messages over electronic communication systems."
    },
    {
      "term": "Encapsulation",
      "meaning": "It is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
    },
    {
      "term": "Encryption",
      "meaning": "In cryptography, encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
    },
    {
      "term": "End User",
      "meaning": "Any individual who uses the information generated by a computer based system."
    },
    {
      "term": "Entity",
      "meaning": "An entity is something that has certain attributes or properties which may be assigned values."
    },
    {
      "term": "EPROM",
      "meaning": "An EPROM (Erasable Programmable Read Only Memory) is a type of computer memory chip that retains its data when its power supply is switched off."
    },
    {
      "term": "Escape Key",
      "meaning": "A key that permits the user to leave one segment of a program and move to another."
    },
    {
      "term": "Excel",
      "meaning": "Excel allows you to create spreadsheets much like paper ledgers that can perform automatic calculations."
    },
    {
      "term": "Exe (.exe)",
      "meaning": "It is a common filename extension denoting an executable file (a program) in the DOS, MS- Windows."
    },
    {
      "term": "Execution Time",
      "meaning": "The total time required to execute a program on a particular system."
    },
    {
      "term": "Extranet",
      "meaning": "A technology that permits the users of one organisation's intranet to enter portions of another organisation's intranet in order to conduct business transactions or collaborate on joint projects."
    },
    {
      "term": "Fax",
      "meaning": "It stands for 'Facsimile machine'. It is used to transmit a copy of a document electronically."
    },
    {
      "term": "Field",
      "meaning": "The attributes of an entity are written as fields in the table representation."
    },
    {
      "term": "File",
      "meaning": "A collection of information stored electronically and treated as a unit by a computer."
    },
    {
      "term": "File Allocation Table (FAT)",
      "meaning": "It is the name of a computer file system architecture."
    },
    {
      "term": "File Manager",
      "meaning": "The file manager is an operating system utility that provides a user interface to work with file systems."
    },
    {
      "term": "File Server",
      "meaning": "A computer on a network that stores the programs and data files shared by the users of the network."
    },
    {
      "term": "Firewall",
      "meaning": "A security system usually consisting of hardware and software that prevents unauthorised persons from accessing certain parts of a program database or network."
    },
    {
      "term": "Firmware",
      "meaning": "Firmware is the technology which has the combination of both hardware and software."
    },
    {
      "term": "Flash Memory",
      "meaning": "It is a type of non-volatile computer storage chip that can be electrically erased and reprogrammed."
    },
    {
      "term": "Floating-point Numbers",
      "meaning": "Signed numbers held in a fraction exponent format."
    },
    {
      "term": "Floppy disk",
      "meaning": "A floppy disk is a data storage device that is composed of a circular piece of thin, flexible (i.e., floppy) magnetic storage medium encased in a square or rectangular plastic walled."
    },
    {
      "term": "Flowcharts",
      "meaning": "Flowcharts are the means of visually representing the flow of data through an information processing system, the operations performed within the system and the sequence in which they are performed."
    },
    {
      "term": "Foreign Key",
      "meaning": "A field in a database table, which links it to another related table."
    },
    {
      "term": "FORTRAN",
      "meaning": "Its name stands for FORmula TRANslating system. The language was designed at IBM for scientific computing."
    },
    {
      "term": "Format",
      "meaning": "To set margins, tabs, font or line spacing in the layout of a document."
    },
    {
      "term": "Frame",
      "meaning": "The basic packages of information on a network channel."
    },
    {
      "term": "Frequency",
      "meaning": "The number of oscillations of a signal per unit of time."
    },
    {
      "term": "Freeware",
      "meaning": "A form of software distribution where the author retains copyright of the software but makes the program available to others at no cost."
    },
    {
      "term": "Function Key",
      "meaning": "A special key on a computer keyboard or a terminal device's keyboard that is used to perform specific functions."
    },
    {
      "term": "Garbage In Garbage Out (GIGO)",
      "meaning": "It pertains to the fact that most computer errors are not machine errors, they are data errors caused by incorrect input data."
    },
    {
      "term": "Gateway",
      "meaning": "A device that is used to join together two networks having different base protocols."
    },
    {
      "term": "Gigabyte",
      "meaning": "A gigabyte is a unit of information or computer storage equal to approximately one billion bytes."
    },
    {
      "term": "Gigahertz (GHz)",
      "meaning": "A measurement used to identify the speed of the central processing unit."
    },
    {
      "term": "Glitch",
      "meaning": "A hardware problem that causes a computer to malfunction or crash."
    },
    {
      "term": "Gopher",
      "meaning": "A protocol used for locating and transferring information on the internet. It is an internet search tool that allows users to access textual information."
    },
    {
      "term": "Graphic Interchange Format (GIF)",
      "meaning": "A simple file format for pictures and photographs, that are compressed so they can be sent quickly."
    },
    {
      "term": "Graphical User Interface",
      "meaning": "A Graphical User Interface (or GUI) is a method of interacting with a computer through a metaphor of direct manipulating of graphical images and widgets in addition to text."
    },
    {
      "term": "Groupware",
      "meaning": "It is a software that allows networked individuals to form groups and collaborate on documents, programs or databases."
    },
    {
      "term": "Hacker",
      "meaning": "A computer criminal who penetrates and tempers with computer programs or systems."
    },
    {
      "term": "Hard Disk",
      "meaning": "A hard disk is a non-volatile data storage device that stores data on a magnetic surface layered onto disk platters."
    },
    {
      "term": "Hardware",
      "meaning": "The mechanical, magnetic, electronic and electrical components that comprises a computer system such as CPU, monitor, keyboard and mouse, etc."
    },
    {
      "term": "High-Level Programming Languages",
      "meaning": "A high-level programming language is a programming language that is more user-friendly, to some extent platform-independent and abstract from low-level computer processor operations such as memory accesses."
    },
    {
      "term": "Hit",
      "meaning": "A single request for information made by a client computer from a web server."
    },
    {
      "term": "Home Page",
      "meaning": "A starting point or a doorway to the website."
    },
    {
      "term": "Host Computer",
      "meaning": "A computer that provides information or a service to other computers on the internet."
    },
    {
      "term": "Hub",
      "meaning": "A network device that connects multiple computers on a LAN, so that they can communicate with one another."
    },
    {
      "term": "Hyperlink",
      "meaning": "An image or portion of text on a web page that is linked to another web page."
    },
    {
      "term": "Hybrid Computer",
      "meaning": "Hybrid computers are made by taking the best features of the analog computer and digital computer."
    },
    {
      "term": "HyperText Transfer Protocol (HTTP)",
      "meaning": "It is an important protocol used on the world wide web for moving hypertext files across the internet. It requires an HTTP client program on one end and HTTP server program on other end."
    },
    {
      "term": "Icon",
      "meaning": "A symbol (such as picture or a folder) that represents a certain function on your computer. When the user clicks on the icon, the appropriate function is executed."
    },
    {
      "term": "Impact Printers",
      "meaning": "Impact printers transfer the image onto paper through a printing mechanism that strikes the paper called ribbon."
    },
    {
      "term": "Information",
      "meaning": "The summarization of data according to a certain pre-defined purpose."
    },
    {
      "term": "Ink-Jet Printer",
      "meaning": "In an ink-jet printer, characters are formed as a result of electrically charged or heated ink being sprayed in fine jets onto the paper."
    },
    {
      "term": "Input",
      "meaning": "In order to give instructions to a computer, the information has to be supplied to it."
    },
    {
      "term": "Instant Messaging (IM)",
      "meaning": "A chat program that lets people communicate over the internet in real time."
    },
    {
      "term": "Instruction",
      "meaning": "A command or order given to a computer to perform a task."
    },
    {
      "term": "Instruction Cycle",
      "meaning": "Fetching and decoding operations of the machine cycle."
    },
    {
      "term": "Interface",
      "meaning": "A device or program that helps a user to communicate with a computer."
    },
    {
      "term": "Intelligent Terminal",
      "meaning": "Intelligent terminals are those which necessarily have processing power and non-volatile data storage space."
    },
    {
      "term": "Internet",
      "meaning": "The internet (also known simply as the net)"
    },
    {
      "term": "Interpreter",
      "meaning": "A program that converts and executes the source code into machine code line by line."
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
    "question": "What is a directory contained within another directory called?",
    "options": {
      "A": "Root directory",
      "B": "Sub-directory",
      "C": "Parent directory",
      "D": "Child directory"
    },
    "correct_answer": "B",
    "source_snippet": "A directory contained inside another directory is called a sub-directory of that directory."
  },
  {
    "question": "What does 'Dots Per Inch' (DPI) measure in relation to resolution?",
    "options": {
      "A": "The fewer dots per inch, the higher the resolution.",
      "B": "DPI is unrelated to resolution.",
      "C": "The more dots per inch, the higher the resolution.",
      "D": "DPI measures the size of the dots, not the resolution."
    },
    "correct_answer": "C",
    "source_snippet": "The more dots per inch, the higher the resolution."
  },
  {
    "question": "What is electronic commerce?",
    "options": {
      "A": "Buying and selling of products or services using physical mail.",
      "B": "Buying and selling of products or services conducted over electronic systems.",
      "C": "Exchanging digital currency between individuals.",
      "D": "Online gaming and entertainment services."
    },
    "correct_answer": "B",
    "source_snippet": "Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network."
  },
  {
    "question": "What is the primary function of encapsulation in programming?",
    "options": {
      "A": "To increase the speed of data processing.",
      "B": "To associate code and data into a single unit, protecting them from external interference.",
      "C": "To allow direct access to all data from any part of the program.",
      "D": "To automatically generate documentation for the code."
    },
    "correct_answer": "B",
    "source_snippet": "Encapsulation is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference."
  },
  {
    "question": "What is the purpose of encryption?",
    "options": {
      "A": "To make files smaller for faster transmission.",
      "B": "To allow unauthorized users to access sensitive information.",
      "C": "To encode messages so only authorized users can read them, while blocking hackers.",
      "D": "To convert data into a human-readable format."
    },
    "correct_answer": "C",
    "source_snippet": "Encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it."
  },
  {
    "question": "According to the knowledge base, what is a fundamental rule for files?",
    "options": {
      "A": "All files must be stored in the root directory.",
      "B": "Every file must have a unique name.",
      "C": "Files can only contain text data.",
      "D": "Files must be less than 1MB in size."
    },
    "correct_answer": "B",
    "source_snippet": "Every file must have its own distinctive name."
  },
  {
    "question": "Which file system is described as a legacy, simple, and robust option?",
    "options": {
      "A": "NTFS",
      "B": "EXT4",
      "C": "File Allocation Table (FAT)",
      "D": "APFS"
    },
    "correct_answer": "C",
    "source_snippet": "The FAT file system is a legacy file system which is simple and robust."
  },
  {
    "question": "What is the role of firmware in a computer device?",
    "options": {
      "A": "To provide the user interface for the operating system.",
      "B": "To manage network connections.",
      "C": "To provide instructions on how the device communicates with other hardware.",
      "D": "To store temporary user data."
    },
    "correct_answer": "C",
    "source_snippet": "Firmware provides necessary instructions for how the device communicates with other computer hardware."
  },
  {
    "question": "Flash memory was developed using which technology?",
    "options": {
      "A": "ROM",
      "B": "RAM",
      "C": "EEPROM",
      "D": "SRAM"
    },
    "correct_answer": "C",
    "source_snippet": "Flash memory was developed using EEPROM."
  },
  {
    "question": "How are floating-point numbers represented?",
    "options": {
      "A": "As integers with a fixed decimal point.",
      "B": "As signed numbers in a fraction exponent format.",
      "C": "As binary coded decimal (BCD) values.",
      "D": "As complex numbers with real and imaginary parts."
    },
    "correct_answer": "B",
    "source_snippet": "Floating-point numbers are signed numbers held in a fraction exponent format."
  }
]
```

---

## Interaction [20:21:14]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is electronic commerce?
        Proposed Answer: B (Buying and selling of products or services conducted over electronic systems.)
        Source Snippet provided by Writer: Electronic commerce is a type of industry where buying and selling of product or services is conducted over electronic systems such as the intranet and other computer network.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly supports the proposed answer by defining electronic commerce as the buying and selling of products or services conducted over electronic systems. The question is also factually accurate."}
```

---

## Interaction [20:21:16]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary function of encapsulation in programming?
        Proposed Answer: B (To associate code and data into a single unit, protecting them from external interference.)
        Source Snippet provided by Writer: Encapsulation is a mechanism that associates the code and the data it manipulates into a single unit and keeps them safe from external interference.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet directly states that encapsulation 'associates the code and the data it manipulates into a single unit and keeps them safe from external interference,' which perfectly matches the proposed answer's description of associating code and data into a single unit and protecting them from external interference. The question is also factually accurate."
}
```

---

## Interaction [20:21:19]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the purpose of encryption?
        Proposed Answer: C (To encode messages so only authorized users can read them, while blocking hackers.)
        Source Snippet provided by Writer: Encryption is the process of encoding messages (or information) in such a way that hackers cannot read it, but the authorised users can access it.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly supports the proposed answer by stating that encryption is the process of encoding messages so that authorized users can access them while hackers cannot read them."}
```

---

## Interaction [20:21:21]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: According to the knowledge base, what is a fundamental rule for files?
        Proposed Answer: B (Every file must have a unique name.)
        Source Snippet provided by Writer: Every file must have its own distinctive name.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet states 'Every file must have its own distinctive name,' which directly supports the proposed answer that 'Every file must have a unique name.' The question is also factually accurate and does not contain hallucinations."}
```

---

## Interaction [20:21:24]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which file system is described as a legacy, simple, and robust option?
        Proposed Answer: C (File Allocation Table (FAT))
        Source Snippet provided by Writer: The FAT file system is a legacy file system which is simple and robust.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'The FAT file system is a legacy file system which is simple and robust.' This directly supports the proposed answer that FAT (File Allocation Table) is described as a legacy, simple, and robust option."}
```

---

## Interaction [20:21:26]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the role of firmware in a computer device?
        Proposed Answer: C (To provide instructions on how the device communicates with other hardware.)
        Source Snippet provided by Writer: Firmware provides necessary instructions for how the device communicates with other computer hardware.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet directly states that firmware provides instructions on how the device communicates with other computer hardware, which perfectly matches the proposed answer C."
}
```

---

## Interaction [20:21:29]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Flash memory was developed using which technology?
        Proposed Answer: C (EEPROM)
        Source Snippet provided by Writer: Flash memory was developed using EEPROM.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that flash memory was developed using EEPROM, which factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [20:21:32]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: How are floating-point numbers represented?
        Proposed Answer: B (As signed numbers in a fraction exponent format.)
        Source Snippet provided by Writer: Floating-point numbers are signed numbers held in a fraction exponent format.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet directly states that floating-point numbers are 'signed numbers held in a fraction exponent format', which perfectly matches the proposed answer 'B (As signed numbers in a fraction exponent format.)'. The question is also factually correct."
}
```

---

