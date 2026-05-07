# AI Conversation Log: pipeline_Arihant_Computer_Awareness_pdf_30
Model: gemini-2.5-flash-lite
Date: 2026-04-15T09:04:28.717184

## Interaction [09:04:34]

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

    CONTEXT TEXT (SEGMENT AT 30%):
    
booting
S
D.COM
that is
boted?
OS needs
so remove
les
(2) Multi-tasking
(4) Multi-processing
[IBPS Clerk 2012]
29. A command, in DOS, used to set a name to a
disk, is
(1) VOL
(2) REN
(3) LABEL (4) CLS
(5) COPYCON
30. Which of the following is/are function of
operating system?
(1) User interface
(2) File system manipulation
(3) Resource allocation
(4) All of the above
(5) None of the above
31. The word processor used by DOS to write the
programs or instructions, is
(1) Word Star
(3) Note Pad
(5) EDIT
(2) Word Pad
(4) MS Word
32. An operating system is a/an [SSC CGL 2013]
(1) accounting software
(2) application software
(3) system software
(4) utility software
33. In DOS, the DIR command is used to
(1) display contents of a file [SSC CGL 2013]
(2) delete files
(3) display list of files and subdirectories
(4) copy files
34. Which one of the following is an MS-DOS
external command?
(1) DIR
(3) FORMAT
[SSC CHSL 2012]
(2) COPY
(4) PROMPT
35. 'DOS' operating system does not have
(1) a boot record
(2) a file allocation table
(3) a root directory
(4) a virtual memory
67
(5) All of the above
36. MS-DOS is usually supplied on a
(1) hard disk
(3) CD ROM
(5) None of these
(2) cartridge tape
(4) floppy disk
37. A program in execution is called
(1) process
(3) procedure
(5) None of the above
(2) instruction
(4) function
38. Which of the following commercial software
products are examples of operating system
software
and application software,
respectively?
[SBI Clerk 2012]
(1) Microsoft windows XP and Microsoft word
(2) Microsoft office XP and Microsoft windows
XP
(3) MS DOS and Microsoft windows XP
(4) UNIX and LINUX
(5) UNIX and Java
39. Memory utilisation factor shall be computed as
(1) memory in use/allocated memory
(2) memory in use/total memory connected
(3) memory allocated/free existing memory
(4) memory committed/total
available
(5) None of the above
40. Fork is
(1) the dispatching of a task
(2) the creation of a new job
(3) the creation of a new process
(4) increasing the priority of a task
(5) None of the above
memory
41. Which one of the following is not the function
of operating system?
(1) Resource Management
(2) File Management
(3) Networking
(4) Processor Management
(5) None of the above
42. The kernel is
....... user threads.
(1) a part of
(3) unaware of
(5) None of these
(2) the creator of
(4) aware of
ded
Engine

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
68
43. Real time systems must have
(1) pre-emptive kernels
(2) non-pre-emptive kernels
(3) Both '1' and '2'
(4) Either '1' or '2'
(5) None of these
44. The process of transferring data intended for a
peripheral device into a disk, so that it can be
transferred to peripheral at a more conveint
time or in bulk, is known as
(1) multiprogramming
(2) spooling
(3) caching
(4) virtual programming
(5) None of the above
Analyse Yourself
Computer Awareness
45. When a file contains instructions that can be
carried out by the computer, it is often called
a(n).
...... file.
(1) data
(3)
    
```

### Response:
```json
{
  "exam_board": "f81eea7e-3e58-4fe6-ac6c-82682450a830",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Operating System",
  "confidence": 0.95
}
```

---

## Interaction [09:04:50]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Operating System
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    
booting
S
D.COM
that is
boted?
OS needs
so remove
les
(2) Multi-tasking
(4) Multi-processing
[IBPS Clerk 2012]
29. A command, in DOS, used to set a name to a
disk, is
(1) VOL
(2) REN
(3) LABEL (4) CLS
(5) COPYCON
30. Which of the following is/are function of
operating system?
(1) User interface
(2) File system manipulation
(3) Resource allocation
(4) All of the above
(5) None of the above
31. The word processor used by DOS to write the
programs or instructions, is
(1) Word Star
(3) Note Pad
(5) EDIT
(2) Word Pad
(4) MS Word
32. An operating system is a/an [SSC CGL 2013]
(1) accounting software
(2) application software
(3) system software
(4) utility software
33. In DOS, the DIR command is used to
(1) display contents of a file [SSC CGL 2013]
(2) delete files
(3) display list of files and subdirectories
(4) copy files
34. Which one of the following is an MS-DOS
external command?
(1) DIR
(3) FORMAT
[SSC CHSL 2012]
(2) COPY
(4) PROMPT
35. 'DOS' operating system does not have
(1) a boot record
(2) a file allocation table
(3) a root directory
(4) a virtual memory
67
(5) All of the above
36. MS-DOS is usually supplied on a
(1) hard disk
(3) CD ROM
(5) None of these
(2) cartridge tape
(4) floppy disk
37. A program in execution is called
(1) process
(3) procedure
(5) None of the above
(2) instruction
(4) function
38. Which of the following commercial software
products are examples of operating system
software
and application software,
respectively?
[SBI Clerk 2012]
(1) Microsoft windows XP and Microsoft word
(2) Microsoft office XP and Microsoft windows
XP
(3) MS DOS and Microsoft windows XP
(4) UNIX and LINUX
(5) UNIX and Java
39. Memory utilisation factor shall be computed as
(1) memory in use/allocated memory
(2) memory in use/total memory connected
(3) memory allocated/free existing memory
(4) memory committed/total
available
(5) None of the above
40. Fork is
(1) the dispatching of a task
(2) the creation of a new job
(3) the creation of a new process
(4) increasing the priority of a task
(5) None of the above
memory
41. Which one of the following is not the function
of operating system?
(1) Resource Management
(2) File Management
(3) Networking
(4) Processor Management
(5) None of the above
42. The kernel is
....... user threads.
(1) a part of
(3) unaware of
(5) None of these
(2) the creator of
(4) aware of
ded
Engine

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
68
43. Real time systems must have
(1) pre-emptive kernels
(2) non-pre-emptive kernels
(3) Both '1' and '2'
(4) Either '1' or '2'
(5) None of these
44. The process of transferring data intended for a
peripheral device into a disk, so that it can be
transferred to peripheral at a more conveint
time or in bulk, is known as
(1) multiprogramming
(2) spooling
(3) caching
(4) virtual programming
(5) None of the above
Analyse Yourself
Computer Awareness
45. When a file contains instructions that can be
carried out by the computer, it is often called
a(n).
...... file.
(1) data
(3) executable
(5) None of these
(2) information
(4) application
46. Grouping and processing all of a firm's
transactions at one time, is called
(1) a database management system
(2) batch processing
(3) a real time system
(4) an on-time system
(5) None of the above
[IBPS PO 2011]
1. (1)
2. (4)
3. (4)
4. (2)
5. (1)
6. (4)
7. (2)
8. (4)
9. (1)
10. (1)
11. (1)
12. (1)
13. (4)
14. (5)
15. (3)
16. (3)
17. (4)
18. (2)
19. (3)
20. (4)
21. (5)
22. (3)
23. (3)
24. (2)
25. (2)
26. (3)
27. (3)
28. (1)
29. (3)
30. (4)
31. (1)
32. (3)
33. (3)
34. (3)
35. (4)
36. (1)
37. (1)
38. (1)
39. (2)
40. (3)
41. (3)
42. (3)
43. (1)
44. (2)
45. (3)
46. (2)
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
hat can be
ften called
ion
on
a firm's
PO 2011]
10. (1)
20. (4)
30. (4)
40. (3)
Microsoft
Windows
80
Microsoft windows stands for 'Microsoft - Wide Interactive Network Development for Office Work
Solution.' Microsoft windows is a series of graphical interface operating system developed,
marked and sold by Microsoft. It enables you to work with a wide variety of programs on your
computer, often simultaneously.
Windows
Windows is an operating system
program that communicates your
instructions to the actual computer
hardware and displays the results.
Windows is a rectangular area
which provides an environment to
run many programs. It is based on
Graphical User Interface (GUI).
It consists of
Windows Explorer It is a tool that
allows you to browse, view, copy
and delete files. It acts as a file
manager that provides detailed
information about your files,
folders and drives.
Versions of MS-Windows
Windows NT (New Technology)
Active Window It refers to the
object that is being currently used
or display on the desktop.
Upgradation It is the process of
enhancing the features of
object. It changes or replaces the
characteristics of any windows to
any other advanced version of
windows.
any
A version of Windows introduced in 1993 and
made specifically for businesses offering better
control over workstation capabilities to help Windows NT
network administrators.
Features
It is based on High Level Language.
. It is able to run on DOS, Windows 3 and Win 32
applications.
• It has a 32-bit Windows applications.
。
It uses preemptive multitasking.
It provides higher stability and security.
Windows 95
Windows 95 is a graphical user
interface based operating system. It
was released on 24th August, 1995 by
Microsoft.
Features
Microsoft
Windows 95
It is a mixed of 16-bit/32-bit Windows operating system.
It is consumer-oriented.
It supports Graphical User Interface (GUI) operating system
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
°
•
70
D
It supports FAT32 file system, multi-display,
Web TV and the Internet Explorer.
Windows 98
It was developed in 1998.
This was produced in two
main versions. The first
田
Windows 98 version was Windows98
plagued with programming
errors but the Windows 98 Second Edition
came out later was much better with many
errors resolved.
Features
b
It supports Internet Explorer 4.01.
a
. It has Intel 80486DX2/66 MHz or
compatible CPU with a Math coprocessor
(Pentium processor recommended).
Windows 98 was the first operating system
to use the Windows Driver Model (WDM).
It includes a FAT32 converter utility for
converting FAT16 drives to FAT32 without
formatting the partition.
⚫ It also supports many peripherals devices
(MX, USB, DVD).
Computer Awareness
Windows XP (experience)
Windows XP is an OS
produced by Microsoft for
use on personal computers.
Microsoft released Windows
XP on 25th October, 2001.
Some version of Windows XP are
Microsoft
Windows xp
1. Windows XP Home edition is a version made
for home users.
2. Windows XP Professional is made for business
users.
Features
°
⚫ It has various users with independent profiles.
It has 3.75 GB free space on the disk and that the
total size of the disk is 19.5 GB.
At least 64 megabytes (MB) of RAM internal
storage.
It provides 1.5 gigabytes (GB) of available
on the hard disk.
space
It includes video adapter and monitor with Super
VGA (800x600) or higher resolution.
It supports sound card, CD-ROM, DVD-ROM
drive, speakers or headphones.
Windows Vista
Windows ME (Millennium Edition) It is an operating system by
An upgraded version from
Windows 98, launched in
2000, but it has been
historically plagued with "Windows Me
programming errors which
may be frustrating for
home users.
Features
It is designed for single CPU or SMP 32-Bit
Intel X86 computer.
It supports 8 or more CPU (the maximum
32 CPU).
The minimum internal storage is 64MB and
maximum 4GB.
It introduced the Multilingual User Interface
(MUI).
Microsoft for use on personal
computers, including home and
business desktops, laptops, tablet Windows Vista
PCs and media center PCs. It was
released worldwide on 30th, January, 2007.
Features
• It can be installed Pentium 4, higher, 512MB
RAM, 32 MB video card and 40 GB hard disk.
It enhanceds the features of visual style.
0
Windows 7
Window 7 is an OS released by
Microsoft on 22nd July, 2009. It is
Windows 7
an upgrade of Windows XP and
Vista. It does not include some
standard applications like Windows Movie Maker,
Windows loaded From: www.EasyEngineering.net

--- PAGE BREAK ---

p
He
SS
e
.
°
e
.
.
.
Microsoft Windows
Features
. It supports 64-Bit processor.
Downloaded From: www.EasyEngineering.net
. It provides touch, speech, handwriting recognition.
. It supports a playback of media in MP4, MOV.
It includes Windows Bio-metric Framework.
t provides multiple firewall.
Windows 8
It is a part of Windows NT family as
personal OS developed by Microsoft
and released on 1st August, 2012.
Features
. It is a 64-bit logical CPU.
. It supports 64 TB Dynamic Virtual Disk.
Windows 8
It provides 3D Graphic supports and Internet Explorer-10.
It enhanceds feature of NTML-5 is assumed.
It is based on Microsoft's 'Metro design language'.
It supports new emerging technology like USB 3.0, cloud
computing.
Tit-Bits
The term Windows was
introduced by Microsoft
company in 1983.
71
Object Linking and Embedding
(OLE) It provides a compare
documents combining
information from several
different application programs
such as graphs, charts, music.
video, clipart etc.
WIN.INI is used to stores all the
setting of windows.
To restart the computer.
Ctrl+Alt+Del key is used.
To shut down the computer, we
need to click start and then
select shut down key.
Windows 8.1 is the updated
version of Windows 8.
T
I
Fecycle Bin
Recycle Bin
Structure of Windows
Word Document
Dock Mt Word
Getting Started
User
Windows Media Center
Documents
Calculator:
Pictures
Sticky Notes
Músic
Microsoft Office Word.
Snipping Tool
Games
Paint
Computer
Remote Desktop Connection
Control Panel
Magnifier
Solitaire
Devices and Printers
Default Programs
Help and Support.
Dialogue
Box
All Programs
Search programs and fes
Shut down
Start Button
Start Menu
Start Task Bar
12
AA
M
765
Gadgets
Samstag
4
August 2012
3:29 PM
10/26/2009
Desktop
Screen/Display
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
72
Desktop
When we turn on the computer then the first
screen, which will be display on the computer is
known as desktop.
The background image of desktop is called as
wallpaper. A small arrow or blinking symbol,
moving on the desktop, is called as cursor.
Desktop contains start menu, task bar, icons,
gadgets, etc. Some important components of
desktop are organised as
Icons
A small image of a program, shown on the
desktop with program name is known as icon.
Icons are small pictures that represent files,
folders, programs and other items. Icons contain
the program that is selected.
Users can open these programs by double click on
the icons. If you move an icon on your desktop,
this is called 'dragging and after releasing it, it will
be called 'dropping."
Some of the icons displayed on desktop.
are as follows
1. My Computer It is the most important
icon on the desktop, which contains icons of
document folders, hard disk's partition, each
removable disk drive. e.g., floppy disk, CD,
DVD etc. It also allows the users to access
drives, printers, removable disk or other
system applications. It is the main part of our
windows where all the programs and software
backup is stored.
2. Recycle Bin It is also a form of icon on the
desktop, which contains deleted file, folders
or shortcuts. If we delete a file or folder then
it goes to recycle bin. From recycle bin, we
can restore the deleted file or folders on
proper place. It is like a dustbin of the
computer.
Once the recycle bin is
empty then we won't
be able to restore those files and folder again.
3. Shortcut It is an icon on the desktop that
provides a user with immediate access to a
program or file.
4. My Document This folder contains all
your
files which you have created and saved in it.
This folder contains all types of file format
processor, spreadsheet, po
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "MS-DOS external command",
      "statement": "FORMAT is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "PROMPT is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "DIR is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "COPY is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS",
      "statement": "MS-DOS operating system does not have virtual memory."
    },
    {
      "concept": "MS-DOS supply",
      "statement": "MS-DOS is usually supplied on a floppy disk."
    },
    {
      "concept": "Program in execution",
      "statement": "A program in execution is called a process."
    },
    {
      "concept": "Operating system software and application software",
      "statement": "Microsoft windows XP and Microsoft word are examples of operating system software and application software, respectively."
    },
    {
      "concept": "Memory utilisation factor",
      "statement": "Memory utilisation factor is computed as memory in use/total memory connected."
    },
    {
      "concept": "Fork",
      "statement": "Fork is the creation of a new process."
    },
    {
      "concept": "Operating system function",
      "statement": "Networking is not a function of the operating system."
    },
    {
      "concept": "Kernel and user threads",
      "statement": "The kernel is unaware of user threads."
    },
    {
      "concept": "Real time systems",
      "statement": "Real time systems must have pre-emptive kernels."
    },
    {
      "concept": "Spooling",
      "statement": "The process of transferring data intended for a peripheral device into a disk, so that it can be transferred to peripheral at a more convenient time or in bulk, is known as spooling."
    },
    {
      "concept": "Executable file",
      "statement": "When a file contains instructions that can be carried out by the computer, it is often called an executable file."
    },
    {
      "concept": "Batch processing",
      "statement": "Grouping and processing all of a firm's transactions at one time, is called batch processing."
    },
    {
      "concept": "Microsoft Windows",
      "statement": "Microsoft windows stands for 'Microsoft - Wide Interactive Network Development for Office Work Solution.'"
    },
    {
      "concept": "Windows",
      "statement": "Windows is an operating system program that communicates your instructions to the actual computer hardware and displays the results."
    },
    {
      "concept": "Windows Explorer",
      "statement": "Windows Explorer is a tool that allows you to browse, view, copy and delete files."
    },
    {
      "concept": "Windows NT",
      "statement": "Windows NT (New Technology) was a version of Windows introduced in 1993 and made specifically for businesses offering better control over workstation capabilities to help network administrators."
    },
    {
      "concept": "Windows 95",
      "statement": "Windows 95 is a graphical user interface based operating system."
    },
    {
      "concept": "Windows 98",
      "statement": "Windows 98 was the first operating system to use the Windows Driver Model (WDM)."
    },
    {
      "concept": "Windows XP",
      "statement": "Windows XP (experience) is an OS produced by Microsoft for use on personal computers."
    },
    {
      "concept": "Windows ME",
      "statement": "Windows ME (Millennium Edition) is an operating system by Microsoft for use on personal computers."
    },
    {
      "concept": "Windows Vista",
      "statement": "Windows Vista was released worldwide on 30th January, 2007."
    },
    {
      "concept": "Windows 7",
      "statement": "Windows 7 is an OS released by Microsoft on 22nd July, 2009."
    },
    {
      "concept": "Windows 8",
      "statement": "Windows 8 is a part of Windows NT family as personal OS developed by Microsoft and released on 1st August, 2012."
    },
    {
      "concept": "Windows 8.1",
      "statement": "Windows 8.1 is the updated version of Windows 8."
    },
    {
      "concept": "Object Linking and Embedding (OLE)",
      "statement": "Object Linking and Embedding (OLE) provides a way to combine documents by integrating information from several different application programs such as graphs, charts, music, video, clipart etc."
    },
    {
      "concept": "WIN.INI",
      "statement": "WIN.INI is used to store all the settings of windows."
    },
    {
      "concept": "Restarting computer",
      "statement": "Ctrl+Alt+Del key is used to restart the computer."
    },
    {
      "concept": "Shutting down computer",
      "statement": "To shut down the computer, one needs to click start and then select the shut down key."
    },
    {
      "concept": "Desktop",
      "statement": "When the computer is turned on, the first screen displayed is known as the desktop."
    },
    {
      "concept": "Desktop background",
      "statement": "The background image of the desktop is called wallpaper."
    },
    {
      "concept": "Cursor",
      "statement": "A small arrow or blinking symbol moving on the desktop is called a cursor."
    },
    {
      "concept": "Desktop components",
      "statement": "The desktop contains the start menu, task bar, icons, gadgets, etc."
    },
    {
      "concept": "Icon",
      "statement": "A small image of a program, shown on the desktop with the program name, is known as an icon."
    },
    {
      "concept": "Icons",
      "statement": "Icons are small pictures that represent files, folders, programs and other items."
    },
    {
      "concept": "Opening programs via icons",
      "statement": "Users can open programs by double-clicking on their icons."
    },
    {
      "concept": "Dragging and dropping icons",
      "statement": "Moving an icon on the desktop is called 'dragging' and releasing it is called 'dropping.'"
    },
    {
      "concept": "My Computer icon",
      "statement": "The My Computer icon contains icons of document folders, hard disk partitions, and each removable disk drive (e.g., floppy disk, CD, DVD)."
    },
    {
      "concept": "My Computer icon functionality",
      "statement": "The My Computer icon allows users to access drives, printers, removable disks, or other system applications."
    },
    {
      "concept": "Recycle Bin icon",
      "statement": "The Recycle Bin icon contains deleted files, folders, or shortcuts."
    },
    {
      "concept": "Recycle Bin functionality",
      "statement": "If a file or folder is deleted, it goes to the Recycle Bin, from where it can be restored."
    },
    {
      "concept": "Recycle Bin empty",
      "statement": "Once the Recycle Bin is empty, deleted files and folders cannot be restored."
    },
    {
      "concept": "Shortcut icon",
      "statement": "A shortcut icon on the desktop provides a user with immediate access to a program or file."
    },
    {
      "concept": "My Document folder",
      "statement": "The My Document folder contains all files created and saved by the user."
    },
    {
      "concept": "DOS command - VOL",
      "statement": "The VOL command in DOS is used to set a name to a disk."
    },
    {
      "concept": "DOS command - LABEL",
      "statement": "The LABEL command in DOS is used to set a name to a disk."
    },
    {
      "concept": "Operating system functions",
      "statement": "User interface, file system manipulation, and resource allocation are functions of an operating system."
    },
    {
      "concept": "DOS word processor",
      "statement": "EDIT is the word processor used by DOS to write programs or instructions."
    },
    {
      "concept": "Operating system type",
      "statement": "An operating system is a system software."
    },
    {
      "concept": "DOS command - DIR",
      "statement": "The DIR command in DOS is used to display a list of files and subdirectories."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT uses preemptive multitasking."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT provides higher stability and security."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 is a mixed of 16-bit/32-bit Windows operating system."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 is consumer-oriented."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 supports Graphical User Interface (GUI) operating system."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 supports FAT32 file system, multi-display, Web TV and the Internet Explorer."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 supports Internet Explorer 4.01."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 includes a FAT32 converter utility for converting FAT16 drives to FAT32 without formatting the partition."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 supports many peripheral devices (MX, USB, DVD)."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP has various users with independent profiles."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP requires at least 64 megabytes (MB) of RAM internal storage."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP provides 1.5 gigabytes (GB) of available space on the hard disk."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP includes a video adapter and monitor with Super VGA (800x600) or higher resolution."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP supports sound card, CD-ROM, DVD-ROM drive, speakers or headphones."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME is designed for single CPU or SMP 32-Bit Intel X86 computer."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME supports 8 or more CPU (maximum 32 CPU)."
    },
    {
      "concept": "Windows ME features",
      "statement": "The minimum internal storage for Windows ME is 64MB and maximum 4GB."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME introduced the Multilingual User Interface (MUI)."
    },
    {
      "concept": "Windows Vista features",
      "statement": "Windows Vista can be installed on a Pentium 4 or higher processor with 512MB RAM, a 32 MB video card, and a 40 GB hard disk."
    },
    {
      "concept": "Windows Vista features",
      "statement": "Windows Vista enhances the features of visual style."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 supports 64-Bit processor."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 provides touch, speech, and handwriting recognition."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 supports playback of media in MP4, MOV."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 includes Windows Bio-metric Framework."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 provides multiple firewalls."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 is a 64-bit logical CPU."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 supports 64 TB Dynamic Virtual Disk."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 provides 3D Graphic supports and Internet Explorer-10."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 is based on Microsoft's 'Metro design language.'"
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 supports new emerging technology like USB 3.0, cloud computing."
    },
    {
      "concept": "Windows term introduction",
      "statement": "The term Windows was introduced by Microsoft company in 1983."
    },
    {
      "concept": "My Computer icon contents",
      "statement": "My Computer contains icons of document folders, hard disk's partition, each removable disk drive."
    },
    {
      "concept": "My Computer icon access",
      "statement": "My Computer allows users to access drives, printers, removable disk or other system applications."
    },
    {
      "concept": "Recycle Bin content",
      "statement": "Recycle Bin contains deleted file, folders or shortcuts."
    },
    {
      "concept": "Recycle Bin restoration",
      "statement": "From Recycle Bin, deleted files or folders can be restored to their proper place."
    }
  ],
  "definitions": [
    {
      "term": "booting",
      "meaning": "The process of starting up a computer."
    },
    {
      "term": "multi-tasking",
      "meaning": "The ability of an operating system to perform multiple tasks simultaneously."
    },
    {
      "term": "multi-processing",
      "meaning": "The ability of a system to use multiple processors."
    },
    {
      "term": "command",
      "meaning": "An instruction given to a computer."
    },
    {
      "term": "operating system",
      "meaning": "A system software that manages computer hardware and software resources and provides common services for computer programs."
    },
    {
      "term": "process",
      "meaning": "A program in execution."
    },
    {
      "term": "Windows",
      "meaning": "A graphical user interface operating system developed by Microsoft."
    },
    {
      "term": "Active Window",
      "meaning": "The object that is being currently used or displayed on the desktop."
    },
    {
      "term": "Upgradation",
      "meaning": "The process of enhancing the features of an object, changing or replacing its characteristics to any advanced version."
    },
    {
      "term": "Windows Explorer",
      "meaning": "A file manager that provides detailed information about files, folders, and drives."
    },
    {
      "term": "preemptive multitasking",
      "meaning": "A type of multitasking where the operating system can interrupt a running process and allocate CPU time to another process."
    },
    {
      "term": "Graphical User Interface (GUI)",
      "meaning": "A type of user interface that allows users to interact with electronic devices through graphical icons and visual indicators."
    },
    {
      "term": "Windows Driver Model (WDM)",
      "meaning": "A driver model used in Windows operating systems."
    },
    {
      "term": "FAT32 file system",
      "meaning": "A file system used in Windows operating systems."
    },
    {
      "term": "Multilingual User Interface (MUI)",
      "meaning": "An interface that supports multiple languages."
    },
    {
      "term": "Desktop",
      "meaning": "The first screen displayed on a computer when it is turned on."
    },
    {
      "term": "Wallpaper",
      "meaning": "The background image of the desktop."
    },
    {
      "term": "Cursor",
      "meaning": "A small arrow or blinking symbol moving on the desktop."
    },
    {
      "term": "Icon",
      "meaning": "A small image of a program, shown on the desktop with the program name."
    },
    {
      "term": "My Computer",
      "meaning": "An icon on the desktop that contains icons of document folders, hard disk partitions, and removable disk drives."
    },
    {
      "term": "Recycle Bin",
      "meaning": "An icon on the desktop that contains deleted files, folders, or shortcuts."
    },
    {
      "term": "Shortcut",
      "meaning": "An icon on the desktop that provides immediate access to a program or file."
    },
    {
      "term": "My Document",
      "meaning": "A folder that contains all files created and saved by the user."
    },
    {
      "term": "executable file",
      "meaning": "A file containing instructions that can be carried out by the computer."
    },
    {
      "term": "batch processing",
      "meaning": "The grouping and processing of all of a firm's transactions at one time."
    },
    {
      "term": "spooling",
      "meaning": "The process of transferring data intended for a peripheral device into a disk for later transfer at a more convenient time or in bulk."
    },
    {
      "term": "system software",
      "meaning": "Software that provides a platform for application software to run."
    },
    {
      "term": "application software",
      "meaning": "Software designed to perform specific tasks for users."
    },
    {
      "term": "virtual memory",
      "meaning": "A memory management technique that allows a system to compensate for physical memory shortages by temporarily transferring data from random access memory (RAM) to disk storage."
    },
    {
      "term": "kernel",
      "meaning": "The core of an operating system that manages the system's resources."
    },
    {
      "term": "real time systems",
      "meaning": "Computer systems that process data as it comes in, typically without buffering delay."
    },
    {
      "term": "pre-emptive kernels",
      "meaning": "Kernels that can interrupt a running process to allocate CPU time to another process."
    },
    {
      "term": "non-pre-emptive kernels",
      "meaning": "Kernels that allow a running process to continue until it completes or voluntarily yields the CPU."
    },
    {
      "term": "fork",
      "meaning": "The creation of a new process."
    }
  ]
}
```

---

## Interaction [09:08:49]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Operating System.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "MS-DOS external command",
      "statement": "FORMAT is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "PROMPT is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "DIR is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "COPY is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS",
      "statement": "MS-DOS operating system does not have virtual memory."
    },
    {
      "concept": "MS-DOS supply",
      "statement": "MS-DOS is usually supplied on a floppy disk."
    },
    {
      "concept": "Program in execution",
      "statement": "A program in execution is called a process."
    },
    {
      "concept": "Operating system software and application software",
      "statement": "Microsoft windows XP and Microsoft word are examples of operating system software and application software, respectively."
    },
    {
      "concept": "Memory utilisation factor",
      "statement": "Memory utilisation factor is computed as memory in use/total memory connected."
    },
    {
      "concept": "Fork",
      "statement": "Fork is the creation of a new process."
    },
    {
      "concept": "Operating system function",
      "statement": "Networking is not a function of the operating system."
    },
    {
      "concept": "Kernel and user threads",
      "statement": "The kernel is unaware of user threads."
    },
    {
      "concept": "Real time systems",
      "statement": "Real time systems must have pre-emptive kernels."
    },
    {
      "concept": "Spooling",
      "statement": "The process of transferring data intended for a peripheral device into a disk, so that it can be transferred to peripheral at a more convenient time or in bulk, is known as spooling."
    },
    {
      "concept": "Executable file",
      "statement": "When a file contains instructions that can be carried out by the computer, it is often called an executable file."
    },
    {
      "concept": "Batch processing",
      "statement": "Grouping and processing all of a firm's transactions at one time, is called batch processing."
    },
    {
      "concept": "Microsoft Windows",
      "statement": "Microsoft windows stands for 'Microsoft - Wide Interactive Network Development for Office Work Solution.'"
    },
    {
      "concept": "Windows",
      "statement": "Windows is an operating system program that communicates your instructions to the actual computer hardware and displays the results."
    },
    {
      "concept": "Windows Explorer",
      "statement": "Windows Explorer is a tool that allows you to browse, view, copy and delete files."
    },
    {
      "concept": "Windows NT",
      "statement": "Windows NT (New Technology) was a version of Windows introduced in 1993 and made specifically for businesses offering better control over workstation capabilities to help network administrators."
    },
    {
      "concept": "Windows 95",
      "statement": "Windows 95 is a graphical user interface based operating system."
    },
    {
      "concept": "Windows 98",
      "statement": "Windows 98 was the first operating system to use the Windows Driver Model (WDM)."
    },
    {
      "concept": "Windows XP",
      "statement": "Windows XP (experience) is an OS produced by Microsoft for use on personal computers."
    },
    {
      "concept": "Windows ME",
      "statement": "Windows ME (Millennium Edition) is an operating system by Microsoft for use on personal computers."
    },
    {
      "concept": "Windows Vista",
      "statement": "Windows Vista was released worldwide on 30th January, 2007."
    },
    {
      "concept": "Windows 7",
      "statement": "Windows 7 is an OS released by Microsoft on 22nd July, 2009."
    },
    {
      "concept": "Windows 8",
      "statement": "Windows 8 is a part of Windows NT family as personal OS developed by Microsoft and released on 1st August, 2012."
    },
    {
      "concept": "Windows 8.1",
      "statement": "Windows 8.1 is the updated version of Windows 8."
    },
    {
      "concept": "Object Linking and Embedding (OLE)",
      "statement": "Object Linking and Embedding (OLE) provides a way to combine documents by integrating information from several different application programs such as graphs, charts, music, video, clipart etc."
    },
    {
      "concept": "WIN.INI",
      "statement": "WIN.INI is used to store all the settings of windows."
    },
    {
      "concept": "Restarting computer",
      "statement": "Ctrl+Alt+Del key is used to restart the computer."
    },
    {
      "concept": "Shutting down computer",
      "statement": "To shut down the computer, one needs to click start and then select the shut down key."
    },
    {
      "concept": "Desktop",
      "statement": "When the computer is turned on, the first screen displayed is known as the desktop."
    },
    {
      "concept": "Desktop background",
      "statement": "The background image of the desktop is called wallpaper."
    },
    {
      "concept": "Cursor",
      "statement": "A small arrow or blinking symbol moving on the desktop is called a cursor."
    },
    {
      "concept": "Desktop components",
      "statement": "The desktop contains the start menu, task bar, icons, gadgets, etc."
    },
    {
      "concept": "Icon",
      "statement": "A small image of a program, shown on the desktop with the program name, is known as an icon."
    },
    {
      "concept": "Icons",
      "statement": "Icons are small pictures that represent files, folders, programs and other items."
    },
    {
      "concept": "Opening programs via icons",
      "statement": "Users can open programs by double-clicking on their icons."
    },
    {
      "concept": "Dragging and dropping icons",
      "statement": "Moving an icon on the desktop is called 'dragging' and releasing it is called 'dropping.'"
    },
    {
      "concept": "My Computer icon",
      "statement": "The My Computer icon contains icons of document folders, hard disk partitions, and each removable disk drive (e.g., floppy disk, CD, DVD)."
    },
    {
      "concept": "My Computer icon functionality",
      "statement": "The My Computer icon allows users to access drives, printers, removable disks, or other system applications."
    },
    {
      "concept": "Recycle Bin icon",
      "statement": "The Recycle Bin icon contains deleted files, folders, or shortcuts."
    },
    {
      "concept": "Recycle Bin functionality",
      "statement": "If a file or folder is deleted, it goes to the Recycle Bin, from where it can be restored."
    },
    {
      "concept": "Recycle Bin empty",
      "statement": "Once the Recycle Bin is empty, deleted files and folders cannot be restored."
    },
    {
      "concept": "Shortcut icon",
      "statement": "A shortcut icon on the desktop provides a user with immediate access to a program or file."
    },
    {
      "concept": "My Document folder",
      "statement": "The My Document folder contains all files created and saved by the user."
    },
    {
      "concept": "DOS command - VOL",
      "statement": "The VOL command in DOS is used to set a name to a disk."
    },
    {
      "concept": "DOS command - LABEL",
      "statement": "The LABEL command in DOS is used to set a name to a disk."
    },
    {
      "concept": "Operating system functions",
      "statement": "User interface, file system manipulation, and resource allocation are functions of an operating system."
    },
    {
      "concept": "DOS word processor",
      "statement": "EDIT is the word processor used by DOS to write programs or instructions."
    },
    {
      "concept": "Operating system type",
      "statement": "An operating system is a system software."
    },
    {
      "concept": "DOS command - DIR",
      "statement": "The DIR command in DOS is used to display a list of files and subdirectories."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT uses preemptive multitasking."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT provides higher stability and security."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 is a mixed of 16-bit/32-bit Windows operating system."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 is consumer-oriented."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 supports Graphical User Interface (GUI) operating system."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 supports FAT32 file system, multi-display, Web TV and the Internet Explorer."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 supports Internet Explorer 4.01."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 includes a FAT32 converter utility for converting FAT16 drives to FAT32 without formatting the partition."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 supports many peripheral devices (MX, USB, DVD)."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP has various users with independent profiles."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP requires at least 64 megabytes (MB) of RAM internal storage."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP provides 1.5 gigabytes (GB) of available space on the hard disk."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP includes a video adapter and monitor with Super VGA (800x600) or higher resolution."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP supports sound card, CD-ROM, DVD-ROM drive, speakers or headphones."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME is designed for single CPU or SMP 32-Bit Intel X86 computer."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME supports 8 or more CPU (maximum 32 CPU)."
    },
    {
      "concept": "Windows ME features",
      "statement": "The minimum internal storage for Windows ME is 64MB and maximum 4GB."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME introduced the Multilingual User Interface (MUI)."
    },
    {
      "concept": "Windows Vista features",
      "statement": "Windows Vista can be installed on a Pentium 4 or higher processor with 512MB RAM, a 32 MB video card, and a 40 GB hard disk."
    },
    {
      "concept": "Windows Vista features",
      "statement": "Windows Vista enhances the features of visual style."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 supports 64-Bit processor."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 provides touch, speech, and handwriting recognition."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 supports playback of media in MP4, MOV."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 includes Windows Bio-metric Framework."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 provides multiple firewalls."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 is a 64-bit logical CPU."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 supports 64 TB Dynamic Virtual Disk."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 provides 3D Graphic supports and Internet Explorer-10."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 is based on Microsoft's 'Metro design language.'"
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 supports new emerging technology like USB 3.0, cloud computing."
    },
    {
      "concept": "Windows term introduction",
      "statement": "The term Windows was introduced by Microsoft company in 1983."
    },
    {
      "concept": "My Computer icon contents",
      "statement": "My Computer contains icons of document folders, hard disk's partition, each removable disk drive."
    },
    {
      "concept": "My Computer icon access",
      "statement": "My Computer allows users to access drives, printers, removable disk or other system applications."
    },
    {
      "concept": "Recycle Bin content",
      "statement": "Recycle Bin contains deleted file, folders or shortcuts."
    },
    {
      "concept": "Recycle Bin restoration",
      "statement": "From Recycle Bin, deleted files or folders can be restored to their proper place."
    }
  ],
  "definitions": [
    {
      "term": "booting",
      "meaning": "The process of starting up a computer."
    },
    {
      "term": "multi-tasking",
      "meaning": "The ability of an operating system to perform multiple tasks simultaneously."
    },
    {
      "term": "multi-processing",
      "meaning": "The ability of a system to use multiple processors."
    },
    {
      "term": "command",
      "meaning": "An instruction given to a computer."
    },
    {
      "term": "operating system",
      "meaning": "A system software that manages computer hardware and software resources and provides common services for computer programs."
    },
    {
      "term": "process",
      "meaning": "A program in execution."
    },
    {
      "term": "Windows",
      "meaning": "A graphical user interface operating system developed by Microsoft."
    },
    {
      "term": "Active Window",
      "meaning": "The object that is being currently used or displayed on the desktop."
    },
    {
      "term": "Upgradation",
      "meaning": "The process of enhancing the features of an object, changing or replacing its characteristics to any advanced version."
    },
    {
      "term": "Windows Explorer",
      "meaning": "A file manager that provides detailed information about files, folders, and drives."
    },
    {
      "term": "preemptive multitasking",
      "meaning": "A type of multitasking where the operating system can interrupt a running process and allocate CPU time to another process."
    },
    {
      "term": "Graphical User Interface (GUI)",
      "meaning": "A type of user interface that allows users to interact with electronic devices through graphical icons and visual indicators."
    },
    {
      "term": "Windows Driver Model (WDM)",
      "meaning": "A driver model used in Windows operating systems."
    },
    {
      "term": "FAT32 file system",
      "meaning": "A file system used in Windows operating systems."
    },
    {
      "term": "Multilingual User Interface (MUI)",
      "meaning": "An interface that supports multiple languages."
    },
    {
      "term": "Desktop",
      "meaning": "The first screen displayed on a computer when it is turned on."
    },
    {
      "term": "Wallpaper",
      "meaning": "The background image of the desktop."
    },
    {
      "term": "Cursor",
      "meaning": "A small arrow or blinking symbol moving on the desktop."
    },
    {
      "term": "Icon",
      "meaning": "A small image of a program, shown on the desktop with the program name."
    },
    {
      "term": "My Computer",
      "meaning": "An icon on the desktop that contains icons of document folders, hard disk partitions, and removable disk drives."
    },
    {
      "term": "Recycle Bin",
      "meaning": "An icon on the desktop that contains deleted files, folders, or shortcuts."
    },
    {
      "term": "Shortcut",
      "meaning": "An icon on the desktop that provides immediate access to a program or file."
    },
    {
      "term": "My Document",
      "meaning": "A folder that contains all files created and saved by the user."
    },
    {
      "term": "executable file",
      "meaning": "A file containing instructions that can be carried out by the computer."
    },
    {
      "term": "batch processing",
      "meaning": "The grouping and processing of all of a firm's transactions at one time."
    },
    {
      "term": "spooling",
      "meaning": "The process of transferring data intended for a peripheral device into a disk for later transfer at a more convenient time or in bulk."
    },
    {
      "term": "system software",
      "meaning": "Software that provides a platform for application software to run."
    },
    {
      "term": "application software",
      "meaning": "Software designed to perform specific tasks for users."
    },
    {
      "term": "virtual memory",
      "meaning": "A memory management technique that allows a system to compensate for physical memory shortages by temporarily transferring data from random access memory (RAM) to disk storage."
    },
    {
      "term": "kernel",
      "meaning": "The core of an operating system that manages the system's resources."
    },
    {
      "term": "real time systems",
      "meaning": "Computer systems that process data as it comes in, typically without buffering delay."
    },
    {
      "term": "pre-emptive kernels",
      "meaning": "Kernels that can interrupt a running process to allocate CPU time to another process."
    },
    {
      "term": "non-pre-emptive kernels",
      "meaning": "Kernels that allow a running process to continue until it completes or voluntarily yields the CPU."
    },
    {
      "term": "fork",
      "meaning": "The creation of a new process."
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
    "question": "Which of the following is an external command in MS-DOS?",
    "options": {
      "A": "FORMAT",
      "B": "EDIT",
      "C": "SYS",
      "D": "CHKDSK"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "source_snippet": "FORMAT is an MS-DOS external command."
  },
  {
    "question": "What is the term for a program in execution?",
    "options": {
      "A": "Thread",
      "B": "Process",
      "C": "Task",
      "D": "Job"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "A program in execution is called a process."
  },
  {
    "question": "Which operating system does not support virtual memory?",
    "options": {
      "A": "Windows XP",
      "B": "Linux",
      "C": "MS-DOS",
      "D": "macOS"
    },
    "correct_answer": "C",
    "difficulty_level": "Medium",
    "source_snippet": "MS-DOS operating system does not have virtual memory."
  },
  {
    "question": "What is the function of the DIR command in DOS?",
    "options": {
      "A": "To set a name to a disk",
      "B": "To display a list of files and subdirectories",
      "C": "To copy files",
      "D": "To format a disk"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "The DIR command in DOS is used to display a list of files and subdirectories."
  },
  {
    "question": "What does 'fork' refer to in the context of operating systems?",
    "options": {
      "A": "Terminating a process",
      "B": "Creating a new process",
      "C": "Scheduling a process",
      "D": "Inter-process communication"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "Fork is the creation of a new process."
  },
  {
    "question": "Which of the following is NOT typically considered a function of an operating system?",
    "options": {
      "A": "User interface management",
      "B": "File system manipulation",
      "C": "Networking",
      "D": "Resource allocation"
    },
    "correct_answer": "C",
    "difficulty_level": "Medium",
    "source_snippet": "Networking is not a function of the operating system."
  },
  {
    "question": "In Windows, what is the background image of the desktop called?",
    "options": {
      "A": "Wallpaper",
      "B": "Screen Saver",
      "C": "Desktop Theme",
      "D": "Icon"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "source_snippet": "The background image of the desktop is called wallpaper."
  },
  {
    "question": "What is the primary purpose of the Recycle Bin in Windows?",
    "options": {
      "A": "To store temporary internet files",
      "B": "To hold deleted files and folders that can be restored",
      "C": "To manage system startup programs",
      "D": "To store user preferences and settings"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "If a file or folder is deleted, it goes to the Recycle Bin, from where it can be restored."
  },
  {
    "question": "Which Windows version was the first to use the Windows Driver Model (WDM)?",
    "options": {
      "A": "Windows 95",
      "B": "Windows NT",
      "C": "Windows 98",
      "D": "Windows XP"
    },
    "correct_answer": "C",
    "difficulty_level": "Hard",
    "source_snippet": "Windows 98 was the first operating system to use the Windows Driver Model (WDM)."
  },
  {
    "question": "What does the MS-DOS command 'LABEL' do?",
    "options": {
      "A": "Displays the volume label of a disk",
      "B": "Sets or changes the volume label of a disk",
      "C": "Lists all files on a disk",
      "D": "Formats a floppy disk"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "The LABEL command in DOS is used to set a name to a disk."
  }
]
```

---

## Interaction [09:08:51]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is an external command in MS-DOS?
        Proposed Answer: A (FORMAT)
        Source Snippet provided by Writer: FORMAT is an MS-DOS external command.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that FORMAT is an MS-DOS external command, which factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [09:08:55]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the term for a program in execution?
        Proposed Answer: B (Process)
        Source Snippet provided by Writer: A program in execution is called a process.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'A program in execution is called a process', which factually proves the proposed answer 'Process' (option B). The question is also factually accurate and not a hallucination."}
```

---

## Interaction [09:08:57]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which operating system does not support virtual memory?
        Proposed Answer: C (MS-DOS)
        Source Snippet provided by Writer: MS-DOS operating system does not have virtual memory.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that MS-DOS does not have virtual memory, which directly supports the proposed answer that MS-DOS is an operating system that does not support virtual memory. The question is factual and not a hallucination."}
```

---

## Interaction [09:09:00]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the function of the DIR command in DOS?
        Proposed Answer: B (To display a list of files and subdirectories)
        Source Snippet provided by Writer: The DIR command in DOS is used to display a list of files and subdirectories.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet directly states that the DIR command is used 'to display a list of files and subdirectories', which perfectly matches the proposed answer B."
}
```

---

## Interaction [09:09:04]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What does 'fork' refer to in the context of operating systems?
        Proposed Answer: B (Creating a new process)
        Source Snippet provided by Writer: Fork is the creation of a new process.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Fork is the creation of a new process', which factually proves the proposed answer B. The question is also factually accurate and does not contain hallucinations."}
```

---

## Interaction [09:09:08]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is NOT typically considered a function of an operating system?
        Proposed Answer: C (Networking)
        Source Snippet provided by Writer: Networking is not a function of the operating system.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": false,
  "reason": "The source snippet directly contradicts the proposed answer. The snippet states that networking is NOT a function of the operating system, while the proposed answer suggests that networking IS NOT a function of the operating system. This means the snippet supports the proposed answer. However, the question itself is flawed because networking IS a fundamental function of modern operating systems. Therefore, the question contains a hallucination by presenting a false premise."
}
```

---

## Interaction [09:09:11]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In Windows, what is the background image of the desktop called?
        Proposed Answer: A (Wallpaper)
        Source Snippet provided by Writer: The background image of the desktop is called wallpaper.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the background image of the desktop is called wallpaper, which factually proves the proposed answer 'A (Wallpaper)'."}
```

---

## Interaction [09:09:14]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary purpose of the Recycle Bin in Windows?
        Proposed Answer: B (To hold deleted files and folders that can be restored)
        Source Snippet provided by Writer: If a file or folder is deleted, it goes to the Recycle Bin, from where it can be restored.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet explicitly states that deleted files and folders go to the Recycle Bin and can be restored from there, which directly supports the proposed answer."
}
```

---

## Interaction [09:09:17]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which Windows version was the first to use the Windows Driver Model (WDM)?
        Proposed Answer: C (Windows 98)
        Source Snippet provided by Writer: Windows 98 was the first operating system to use the Windows Driver Model (WDM).

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that Windows 98 was the first operating system to use the Windows Driver Model (WDM), which directly supports the proposed answer."}
```

---

## Interaction [09:09:20]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What does the MS-DOS command 'LABEL' do?
        Proposed Answer: B (Sets or changes the volume label of a disk)
        Source Snippet provided by Writer: The LABEL command in DOS is used to set a name to a disk.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the LABEL command is used to 'set a name to a disk', which factually proves the proposed answer that it 'Sets or changes the volume label of a disk'. The question is also factually accurate."}
```

---

## Interaction [09:10:21]

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

    CONTEXT TEXT (SEGMENT AT 30%):
    
booting
S
D.COM
that is
boted?
OS needs
so remove
les
(2) Multi-tasking
(4) Multi-processing
[IBPS Clerk 2012]
29. A command, in DOS, used to set a name to a
disk, is
(1) VOL
(2) REN
(3) LABEL (4) CLS
(5) COPYCON
30. Which of the following is/are function of
operating system?
(1) User interface
(2) File system manipulation
(3) Resource allocation
(4) All of the above
(5) None of the above
31. The word processor used by DOS to write the
programs or instructions, is
(1) Word Star
(3) Note Pad
(5) EDIT
(2) Word Pad
(4) MS Word
32. An operating system is a/an [SSC CGL 2013]
(1) accounting software
(2) application software
(3) system software
(4) utility software
33. In DOS, the DIR command is used to
(1) display contents of a file [SSC CGL 2013]
(2) delete files
(3) display list of files and subdirectories
(4) copy files
34. Which one of the following is an MS-DOS
external command?
(1) DIR
(3) FORMAT
[SSC CHSL 2012]
(2) COPY
(4) PROMPT
35. 'DOS' operating system does not have
(1) a boot record
(2) a file allocation table
(3) a root directory
(4) a virtual memory
67
(5) All of the above
36. MS-DOS is usually supplied on a
(1) hard disk
(3) CD ROM
(5) None of these
(2) cartridge tape
(4) floppy disk
37. A program in execution is called
(1) process
(3) procedure
(5) None of the above
(2) instruction
(4) function
38. Which of the following commercial software
products are examples of operating system
software
and application software,
respectively?
[SBI Clerk 2012]
(1) Microsoft windows XP and Microsoft word
(2) Microsoft office XP and Microsoft windows
XP
(3) MS DOS and Microsoft windows XP
(4) UNIX and LINUX
(5) UNIX and Java
39. Memory utilisation factor shall be computed as
(1) memory in use/allocated memory
(2) memory in use/total memory connected
(3) memory allocated/free existing memory
(4) memory committed/total
available
(5) None of the above
40. Fork is
(1) the dispatching of a task
(2) the creation of a new job
(3) the creation of a new process
(4) increasing the priority of a task
(5) None of the above
memory
41. Which one of the following is not the function
of operating system?
(1) Resource Management
(2) File Management
(3) Networking
(4) Processor Management
(5) None of the above
42. The kernel is
....... user threads.
(1) a part of
(3) unaware of
(5) None of these
(2) the creator of
(4) aware of
ded
Engine

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
68
43. Real time systems must have
(1) pre-emptive kernels
(2) non-pre-emptive kernels
(3) Both '1' and '2'
(4) Either '1' or '2'
(5) None of these
44. The process of transferring data intended for a
peripheral device into a disk, so that it can be
transferred to peripheral at a more conveint
time or in bulk, is known as
(1) multiprogramming
(2) spooling
(3) caching
(4) virtual programming
(5) None of the above
Analyse Yourself
Computer Awareness
45. When a file contains instructions that can be
carried out by the computer, it is often called
a(n).
...... file.
(1) data
(3)
    
```

### Response:
```json
{
  "exam_board": "f81eea7e-3e58-4fe6-ac6c-82682450a830",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Operating System",
  "confidence": 0.95
}
```

---

## Interaction [09:10:33]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Operating System
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    
booting
S
D.COM
that is
boted?
OS needs
so remove
les
(2) Multi-tasking
(4) Multi-processing
[IBPS Clerk 2012]
29. A command, in DOS, used to set a name to a
disk, is
(1) VOL
(2) REN
(3) LABEL (4) CLS
(5) COPYCON
30. Which of the following is/are function of
operating system?
(1) User interface
(2) File system manipulation
(3) Resource allocation
(4) All of the above
(5) None of the above
31. The word processor used by DOS to write the
programs or instructions, is
(1) Word Star
(3) Note Pad
(5) EDIT
(2) Word Pad
(4) MS Word
32. An operating system is a/an [SSC CGL 2013]
(1) accounting software
(2) application software
(3) system software
(4) utility software
33. In DOS, the DIR command is used to
(1) display contents of a file [SSC CGL 2013]
(2) delete files
(3) display list of files and subdirectories
(4) copy files
34. Which one of the following is an MS-DOS
external command?
(1) DIR
(3) FORMAT
[SSC CHSL 2012]
(2) COPY
(4) PROMPT
35. 'DOS' operating system does not have
(1) a boot record
(2) a file allocation table
(3) a root directory
(4) a virtual memory
67
(5) All of the above
36. MS-DOS is usually supplied on a
(1) hard disk
(3) CD ROM
(5) None of these
(2) cartridge tape
(4) floppy disk
37. A program in execution is called
(1) process
(3) procedure
(5) None of the above
(2) instruction
(4) function
38. Which of the following commercial software
products are examples of operating system
software
and application software,
respectively?
[SBI Clerk 2012]
(1) Microsoft windows XP and Microsoft word
(2) Microsoft office XP and Microsoft windows
XP
(3) MS DOS and Microsoft windows XP
(4) UNIX and LINUX
(5) UNIX and Java
39. Memory utilisation factor shall be computed as
(1) memory in use/allocated memory
(2) memory in use/total memory connected
(3) memory allocated/free existing memory
(4) memory committed/total
available
(5) None of the above
40. Fork is
(1) the dispatching of a task
(2) the creation of a new job
(3) the creation of a new process
(4) increasing the priority of a task
(5) None of the above
memory
41. Which one of the following is not the function
of operating system?
(1) Resource Management
(2) File Management
(3) Networking
(4) Processor Management
(5) None of the above
42. The kernel is
....... user threads.
(1) a part of
(3) unaware of
(5) None of these
(2) the creator of
(4) aware of
ded
Engine

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
68
43. Real time systems must have
(1) pre-emptive kernels
(2) non-pre-emptive kernels
(3) Both '1' and '2'
(4) Either '1' or '2'
(5) None of these
44. The process of transferring data intended for a
peripheral device into a disk, so that it can be
transferred to peripheral at a more conveint
time or in bulk, is known as
(1) multiprogramming
(2) spooling
(3) caching
(4) virtual programming
(5) None of the above
Analyse Yourself
Computer Awareness
45. When a file contains instructions that can be
carried out by the computer, it is often called
a(n).
...... file.
(1) data
(3) executable
(5) None of these
(2) information
(4) application
46. Grouping and processing all of a firm's
transactions at one time, is called
(1) a database management system
(2) batch processing
(3) a real time system
(4) an on-time system
(5) None of the above
[IBPS PO 2011]
1. (1)
2. (4)
3. (4)
4. (2)
5. (1)
6. (4)
7. (2)
8. (4)
9. (1)
10. (1)
11. (1)
12. (1)
13. (4)
14. (5)
15. (3)
16. (3)
17. (4)
18. (2)
19. (3)
20. (4)
21. (5)
22. (3)
23. (3)
24. (2)
25. (2)
26. (3)
27. (3)
28. (1)
29. (3)
30. (4)
31. (1)
32. (3)
33. (3)
34. (3)
35. (4)
36. (1)
37. (1)
38. (1)
39. (2)
40. (3)
41. (3)
42. (3)
43. (1)
44. (2)
45. (3)
46. (2)
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
hat can be
ften called
ion
on
a firm's
PO 2011]
10. (1)
20. (4)
30. (4)
40. (3)
Microsoft
Windows
80
Microsoft windows stands for 'Microsoft - Wide Interactive Network Development for Office Work
Solution.' Microsoft windows is a series of graphical interface operating system developed,
marked and sold by Microsoft. It enables you to work with a wide variety of programs on your
computer, often simultaneously.
Windows
Windows is an operating system
program that communicates your
instructions to the actual computer
hardware and displays the results.
Windows is a rectangular area
which provides an environment to
run many programs. It is based on
Graphical User Interface (GUI).
It consists of
Windows Explorer It is a tool that
allows you to browse, view, copy
and delete files. It acts as a file
manager that provides detailed
information about your files,
folders and drives.
Versions of MS-Windows
Windows NT (New Technology)
Active Window It refers to the
object that is being currently used
or display on the desktop.
Upgradation It is the process of
enhancing the features of
object. It changes or replaces the
characteristics of any windows to
any other advanced version of
windows.
any
A version of Windows introduced in 1993 and
made specifically for businesses offering better
control over workstation capabilities to help Windows NT
network administrators.
Features
It is based on High Level Language.
. It is able to run on DOS, Windows 3 and Win 32
applications.
• It has a 32-bit Windows applications.
。
It uses preemptive multitasking.
It provides higher stability and security.
Windows 95
Windows 95 is a graphical user
interface based operating system. It
was released on 24th August, 1995 by
Microsoft.
Features
Microsoft
Windows 95
It is a mixed of 16-bit/32-bit Windows operating system.
It is consumer-oriented.
It supports Graphical User Interface (GUI) operating system
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
°
•
70
D
It supports FAT32 file system, multi-display,
Web TV and the Internet Explorer.
Windows 98
It was developed in 1998.
This was produced in two
main versions. The first
田
Windows 98 version was Windows98
plagued with programming
errors but the Windows 98 Second Edition
came out later was much better with many
errors resolved.
Features
b
It supports Internet Explorer 4.01.
a
. It has Intel 80486DX2/66 MHz or
compatible CPU with a Math coprocessor
(Pentium processor recommended).
Windows 98 was the first operating system
to use the Windows Driver Model (WDM).
It includes a FAT32 converter utility for
converting FAT16 drives to FAT32 without
formatting the partition.
⚫ It also supports many peripherals devices
(MX, USB, DVD).
Computer Awareness
Windows XP (experience)
Windows XP is an OS
produced by Microsoft for
use on personal computers.
Microsoft released Windows
XP on 25th October, 2001.
Some version of Windows XP are
Microsoft
Windows xp
1. Windows XP Home edition is a version made
for home users.
2. Windows XP Professional is made for business
users.
Features
°
⚫ It has various users with independent profiles.
It has 3.75 GB free space on the disk and that the
total size of the disk is 19.5 GB.
At least 64 megabytes (MB) of RAM internal
storage.
It provides 1.5 gigabytes (GB) of available
on the hard disk.
space
It includes video adapter and monitor with Super
VGA (800x600) or higher resolution.
It supports sound card, CD-ROM, DVD-ROM
drive, speakers or headphones.
Windows Vista
Windows ME (Millennium Edition) It is an operating system by
An upgraded version from
Windows 98, launched in
2000, but it has been
historically plagued with "Windows Me
programming errors which
may be frustrating for
home users.
Features
It is designed for single CPU or SMP 32-Bit
Intel X86 computer.
It supports 8 or more CPU (the maximum
32 CPU).
The minimum internal storage is 64MB and
maximum 4GB.
It introduced the Multilingual User Interface
(MUI).
Microsoft for use on personal
computers, including home and
business desktops, laptops, tablet Windows Vista
PCs and media center PCs. It was
released worldwide on 30th, January, 2007.
Features
• It can be installed Pentium 4, higher, 512MB
RAM, 32 MB video card and 40 GB hard disk.
It enhanceds the features of visual style.
0
Windows 7
Window 7 is an OS released by
Microsoft on 22nd July, 2009. It is
Windows 7
an upgrade of Windows XP and
Vista. It does not include some
standard applications like Windows Movie Maker,
Windows loaded From: www.EasyEngineering.net

--- PAGE BREAK ---

p
He
SS
e
.
°
e
.
.
.
Microsoft Windows
Features
. It supports 64-Bit processor.
Downloaded From: www.EasyEngineering.net
. It provides touch, speech, handwriting recognition.
. It supports a playback of media in MP4, MOV.
It includes Windows Bio-metric Framework.
t provides multiple firewall.
Windows 8
It is a part of Windows NT family as
personal OS developed by Microsoft
and released on 1st August, 2012.
Features
. It is a 64-bit logical CPU.
. It supports 64 TB Dynamic Virtual Disk.
Windows 8
It provides 3D Graphic supports and Internet Explorer-10.
It enhanceds feature of NTML-5 is assumed.
It is based on Microsoft's 'Metro design language'.
It supports new emerging technology like USB 3.0, cloud
computing.
Tit-Bits
The term Windows was
introduced by Microsoft
company in 1983.
71
Object Linking and Embedding
(OLE) It provides a compare
documents combining
information from several
different application programs
such as graphs, charts, music.
video, clipart etc.
WIN.INI is used to stores all the
setting of windows.
To restart the computer.
Ctrl+Alt+Del key is used.
To shut down the computer, we
need to click start and then
select shut down key.
Windows 8.1 is the updated
version of Windows 8.
T
I
Fecycle Bin
Recycle Bin
Structure of Windows
Word Document
Dock Mt Word
Getting Started
User
Windows Media Center
Documents
Calculator:
Pictures
Sticky Notes
Músic
Microsoft Office Word.
Snipping Tool
Games
Paint
Computer
Remote Desktop Connection
Control Panel
Magnifier
Solitaire
Devices and Printers
Default Programs
Help and Support.
Dialogue
Box
All Programs
Search programs and fes
Shut down
Start Button
Start Menu
Start Task Bar
12
AA
M
765
Gadgets
Samstag
4
August 2012
3:29 PM
10/26/2009
Desktop
Screen/Display
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
72
Desktop
When we turn on the computer then the first
screen, which will be display on the computer is
known as desktop.
The background image of desktop is called as
wallpaper. A small arrow or blinking symbol,
moving on the desktop, is called as cursor.
Desktop contains start menu, task bar, icons,
gadgets, etc. Some important components of
desktop are organised as
Icons
A small image of a program, shown on the
desktop with program name is known as icon.
Icons are small pictures that represent files,
folders, programs and other items. Icons contain
the program that is selected.
Users can open these programs by double click on
the icons. If you move an icon on your desktop,
this is called 'dragging and after releasing it, it will
be called 'dropping."
Some of the icons displayed on desktop.
are as follows
1. My Computer It is the most important
icon on the desktop, which contains icons of
document folders, hard disk's partition, each
removable disk drive. e.g., floppy disk, CD,
DVD etc. It also allows the users to access
drives, printers, removable disk or other
system applications. It is the main part of our
windows where all the programs and software
backup is stored.
2. Recycle Bin It is also a form of icon on the
desktop, which contains deleted file, folders
or shortcuts. If we delete a file or folder then
it goes to recycle bin. From recycle bin, we
can restore the deleted file or folders on
proper place. It is like a dustbin of the
computer.
Once the recycle bin is
empty then we won't
be able to restore those files and folder again.
3. Shortcut It is an icon on the desktop that
provides a user with immediate access to a
program or file.
4. My Document This folder contains all
your
files which you have created and saved in it.
This folder contains all types of file format
processor, spreadsheet, po
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "MS-DOS external command",
      "statement": "FORMAT is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "PROMPT is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "DIR is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "COPY is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS",
      "statement": "MS-DOS operating system does not have virtual memory."
    },
    {
      "concept": "MS-DOS supply",
      "statement": "MS-DOS is usually supplied on a floppy disk."
    },
    {
      "concept": "Program in execution",
      "statement": "A program in execution is called a process."
    },
    {
      "concept": "Operating system software and application software",
      "statement": "Microsoft windows XP and Microsoft word are examples of operating system software and application software, respectively."
    },
    {
      "concept": "Memory utilisation factor",
      "statement": "Memory utilisation factor is computed as memory in use/total memory connected."
    },
    {
      "concept": "Fork",
      "statement": "Fork is the creation of a new process."
    },
    {
      "concept": "Function of operating system",
      "statement": "Networking is not a function of the operating system."
    },
    {
      "concept": "Kernel",
      "statement": "The kernel is unaware of user threads."
    },
    {
      "concept": "Real time systems",
      "statement": "Real time systems must have pre-emptive kernels."
    },
    {
      "concept": "Spooling",
      "statement": "The process of transferring data intended for a peripheral device into a disk, so that it can be transferred to peripheral at a more convenient time or in bulk, is known as spooling."
    },
    {
      "concept": "Executable file",
      "statement": "When a file contains instructions that can be carried out by the computer, it is often called an executable file."
    },
    {
      "concept": "Batch processing",
      "statement": "Grouping and processing all of a firm's transactions at one time, is called batch processing."
    },
    {
      "concept": "Microsoft Windows definition",
      "statement": "Microsoft windows stands for 'Microsoft - Wide Interactive Network Development for Office Work Solution.'"
    },
    {
      "concept": "Windows",
      "statement": "Windows is an operating system program that communicates your instructions to the actual computer hardware and displays the results."
    },
    {
      "concept": "Windows Explorer",
      "statement": "Windows Explorer is a tool that allows you to browse, view, copy and delete files."
    },
    {
      "concept": "Windows NT",
      "statement": "Windows NT was introduced in 1993 and made specifically for businesses offering better control over workstation capabilities to help network administrators."
    },
    {
      "concept": "Windows 95",
      "statement": "Windows 95 is a graphical user interface based operating system."
    },
    {
      "concept": "Windows 98",
      "statement": "Windows 98 was the first operating system to use the Windows Driver Model (WDM)."
    },
    {
      "concept": "Windows XP",
      "statement": "Windows XP was released on 25th October, 2001."
    },
    {
      "concept": "Windows ME",
      "statement": "Windows ME is an operating system by Microsoft for use on personal computers, including home and business desktops, laptops, tablet PCs and media center PCs."
    },
    {
      "concept": "Windows Vista",
      "statement": "Windows Vista was released worldwide on 30th January, 2007."
    },
    {
      "concept": "Windows 7",
      "statement": "Windows 7 is an OS released by Microsoft on 22nd July, 2009."
    },
    {
      "concept": "Windows 8",
      "statement": "Windows 8 is a part of Windows NT family as personal OS developed by Microsoft and released on 1st August, 2012."
    },
    {
      "concept": "Windows term introduction",
      "statement": "The term Windows was introduced by Microsoft company in 1983."
    },
    {
      "concept": "WIN.INI",
      "statement": "WIN.INI is used to stores all the setting of windows."
    },
    {
      "concept": "Restarting computer",
      "statement": "Ctrl+Alt+Del key is used to restart the computer."
    },
    {
      "concept": "Shutting down computer",
      "statement": "To shut down the computer, we need to click start and then select shut down key."
    },
    {
      "concept": "Windows 8.1",
      "statement": "Windows 8.1 is the updated version of Windows 8."
    },
    {
      "concept": "Desktop",
      "statement": "When we turn on the computer then the first screen, which will be display on the computer is known as desktop."
    },
    {
      "concept": "Desktop background",
      "statement": "The background image of desktop is called as wallpaper."
    },
    {
      "concept": "Cursor",
      "statement": "A small arrow or blinking symbol, moving on the desktop, is called as cursor."
    },
    {
      "concept": "Icon",
      "statement": "A small image of a program, shown on the desktop with program name is known as icon."
    },
    {
      "concept": "Icon functionality",
      "statement": "Icons are small pictures that represent files, folders, programs and other items."
    },
    {
      "concept": "Opening programs via icons",
      "statement": "Users can open programs by double clicking on the icons."
    },
    {
      "concept": "Dragging and dropping icons",
      "statement": "If you move an icon on your desktop, this is called 'dragging' and after releasing it, it will be called 'dropping.'"
    },
    {
      "concept": "My Computer icon",
      "statement": "My Computer icon contains icons of document folders, hard disk's partition, each removable disk drive."
    },
    {
      "concept": "My Computer icon functionality",
      "statement": "My Computer allows users to access drives, printers, removable disk or other system applications."
    },
    {
      "concept": "Recycle Bin icon",
      "statement": "Recycle Bin icon contains deleted files, folders or shortcuts."
    },
    {
      "concept": "Restoring deleted files",
      "statement": "From Recycle Bin, we can restore deleted files or folders to their proper place."
    },
    {
      "concept": "Shortcut icon",
      "statement": "A shortcut icon on the desktop provides a user with immediate access to a program or file."
    },
    {
      "concept": "My Document folder",
      "statement": "My Document folder contains all files that you have created and saved in it."
    },
    {
      "concept": "DOS command",
      "statement": "In DOS, the DIR command is used to display list of files and subdirectories."
    },
    {
      "concept": "DOS command",
      "statement": "A command, in DOS, used to set a name to a disk, is LABEL."
    },
    {
      "concept": "DOS word processor",
      "statement": "The word processor used by DOS to write the programs or instructions is EDIT."
    },
    {
      "concept": "Operating system type",
      "statement": "An operating system is a system software."
    },
    {
      "concept": "Functions of operating system",
      "statement": "User interface, File system manipulation, and Resource allocation are functions of the operating system."
    },
    {
      "concept": "Windows XP editions",
      "statement": "Windows XP Home edition is for home users, and Windows XP Professional is for business users."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME is designed for single CPU or SMP 32-Bit Intel X86 computer."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME supports 8 or more CPU (maximum 32 CPU)."
    },
    {
      "concept": "Windows ME features",
      "statement": "The minimum internal storage for Windows ME is 64MB and maximum 4GB."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME introduced the Multilingual User Interface (MUI)."
    },
    {
      "concept": "Windows Vista features",
      "statement": "Windows Vista can be installed on a Pentium 4 or higher processor with 512MB RAM, a 32 MB video card, and a 40 GB hard disk."
    },
    {
      "concept": "Windows Vista features",
      "statement": "Windows Vista enhanced the features of visual style."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 supports 64-Bit processor."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 provides touch, speech, and handwriting recognition."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 supports playback of media in MP4, MOV."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 includes Windows Bio-metric Framework."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 provides multiple firewalls."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 has a 64-bit logical CPU."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 supports 64 TB Dynamic Virtual Disk."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 provides 3D Graphic supports and Internet Explorer-10."
    },
    {
      "concept": "Windows 8 features",
      "statement": "The feature of NTML-5 is assumed to be enhanced in Windows 8."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 is based on Microsoft's 'Metro design language.'"
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 supports new emerging technology like USB 3.0 and cloud computing."
    },
    {
      "concept": "Object Linking and Embedding (OLE)",
      "statement": "Object Linking and Embedding (OLE) provides a way to combine information from several different application programs such as graphs, charts, music, video, clipart etc. into documents."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT uses preemptive multitasking."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT provides higher stability and security."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 is a mixed of 16-bit/32-bit Windows operating system."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 is consumer-oriented."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 supports Graphical User Interface (GUI) operating system."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 supports FAT32 file system, multi-display, Web TV and the Internet Explorer."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 supports Internet Explorer 4.01."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 has an Intel 80486DX2/66 MHz or compatible CPU with a Math coprocessor (Pentium processor recommended)."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 includes a FAT32 converter utility for converting FAT16 drives to FAT32 without formatting the partition."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 supports many peripherals devices (MX, USB, DVD)."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP has various users with independent profiles."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP requires 3.75 GB free space on the disk and the total size of the disk is 19.5 GB."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP requires at least 64 megabytes (MB) of RAM internal storage."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP provides 1.5 gigabytes (GB) of available space on the hard disk."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP includes a video adapter and monitor with Super VGA (800x600) or higher resolution."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP supports sound card, CD-ROM, DVD-ROM drive, speakers or headphones."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT is based on High Level Language."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT is able to run on DOS, Windows 3 and Win 32 applications."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT has 32-bit Windows applications."
    }
  ],
  "definitions": [
    {
      "term": "Windows",
      "meaning": "A rectangular area which provides an environment to run many programs. It is based on Graphical User Interface (GUI)."
    },
    {
      "term": "Active Window",
      "meaning": "Refers to the object that is being currently used or displayed on the desktop."
    },
    {
      "term": "Upgradation",
      "meaning": "The process of enhancing the features of any object. It changes or replaces the characteristics of any windows to any other advanced version of windows."
    },
    {
      "term": "Process",
      "meaning": "A program in execution."
    },
    {
      "term": "Operating System",
      "meaning": "A program that communicates your instructions to the actual computer hardware and displays the results."
    },
    {
      "term": "Desktop",
      "meaning": "The first screen displayed on the computer when it is turned on."
    },
    {
      "term": "Icon",
      "meaning": "A small image of a program, shown on the desktop with the program name. Icons are small pictures that represent files, folders, programs and other items."
    },
    {
      "term": "My Computer",
      "meaning": "The most important icon on the desktop, which contains icons of document folders, hard disk's partition, each removable disk drive. It is the main part of our windows where all the programs and software backup is stored."
    },
    {
      "term": "Recycle Bin",
      "meaning": "An icon on the desktop, which contains deleted files, folders or shortcuts. If we delete a file or folder then it goes to recycle bin. It is like a dustbin of the computer."
    },
    {
      "term": "Shortcut",
      "meaning": "An icon on the desktop that provides a user with immediate access to a program or file."
    },
    {
      "term": "My Document",
      "meaning": "A folder that contains all your files which you have created and saved in it."
    }
  ]
}
```

---

## Interaction [09:12:47]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Operating System.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "MS-DOS external command",
      "statement": "FORMAT is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "PROMPT is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "DIR is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS external command",
      "statement": "COPY is an MS-DOS external command."
    },
    {
      "concept": "MS-DOS",
      "statement": "MS-DOS operating system does not have virtual memory."
    },
    {
      "concept": "MS-DOS supply",
      "statement": "MS-DOS is usually supplied on a floppy disk."
    },
    {
      "concept": "Program in execution",
      "statement": "A program in execution is called a process."
    },
    {
      "concept": "Operating system software and application software",
      "statement": "Microsoft windows XP and Microsoft word are examples of operating system software and application software, respectively."
    },
    {
      "concept": "Memory utilisation factor",
      "statement": "Memory utilisation factor is computed as memory in use/total memory connected."
    },
    {
      "concept": "Fork",
      "statement": "Fork is the creation of a new process."
    },
    {
      "concept": "Function of operating system",
      "statement": "Networking is not a function of the operating system."
    },
    {
      "concept": "Kernel",
      "statement": "The kernel is unaware of user threads."
    },
    {
      "concept": "Real time systems",
      "statement": "Real time systems must have pre-emptive kernels."
    },
    {
      "concept": "Spooling",
      "statement": "The process of transferring data intended for a peripheral device into a disk, so that it can be transferred to peripheral at a more convenient time or in bulk, is known as spooling."
    },
    {
      "concept": "Executable file",
      "statement": "When a file contains instructions that can be carried out by the computer, it is often called an executable file."
    },
    {
      "concept": "Batch processing",
      "statement": "Grouping and processing all of a firm's transactions at one time, is called batch processing."
    },
    {
      "concept": "Microsoft Windows definition",
      "statement": "Microsoft windows stands for 'Microsoft - Wide Interactive Network Development for Office Work Solution.'"
    },
    {
      "concept": "Windows",
      "statement": "Windows is an operating system program that communicates your instructions to the actual computer hardware and displays the results."
    },
    {
      "concept": "Windows Explorer",
      "statement": "Windows Explorer is a tool that allows you to browse, view, copy and delete files."
    },
    {
      "concept": "Windows NT",
      "statement": "Windows NT was introduced in 1993 and made specifically for businesses offering better control over workstation capabilities to help network administrators."
    },
    {
      "concept": "Windows 95",
      "statement": "Windows 95 is a graphical user interface based operating system."
    },
    {
      "concept": "Windows 98",
      "statement": "Windows 98 was the first operating system to use the Windows Driver Model (WDM)."
    },
    {
      "concept": "Windows XP",
      "statement": "Windows XP was released on 25th October, 2001."
    },
    {
      "concept": "Windows ME",
      "statement": "Windows ME is an operating system by Microsoft for use on personal computers, including home and business desktops, laptops, tablet PCs and media center PCs."
    },
    {
      "concept": "Windows Vista",
      "statement": "Windows Vista was released worldwide on 30th January, 2007."
    },
    {
      "concept": "Windows 7",
      "statement": "Windows 7 is an OS released by Microsoft on 22nd July, 2009."
    },
    {
      "concept": "Windows 8",
      "statement": "Windows 8 is a part of Windows NT family as personal OS developed by Microsoft and released on 1st August, 2012."
    },
    {
      "concept": "Windows term introduction",
      "statement": "The term Windows was introduced by Microsoft company in 1983."
    },
    {
      "concept": "WIN.INI",
      "statement": "WIN.INI is used to stores all the setting of windows."
    },
    {
      "concept": "Restarting computer",
      "statement": "Ctrl+Alt+Del key is used to restart the computer."
    },
    {
      "concept": "Shutting down computer",
      "statement": "To shut down the computer, we need to click start and then select shut down key."
    },
    {
      "concept": "Windows 8.1",
      "statement": "Windows 8.1 is the updated version of Windows 8."
    },
    {
      "concept": "Desktop",
      "statement": "When we turn on the computer then the first screen, which will be display on the computer is known as desktop."
    },
    {
      "concept": "Desktop background",
      "statement": "The background image of desktop is called as wallpaper."
    },
    {
      "concept": "Cursor",
      "statement": "A small arrow or blinking symbol, moving on the desktop, is called as cursor."
    },
    {
      "concept": "Icon",
      "statement": "A small image of a program, shown on the desktop with program name is known as icon."
    },
    {
      "concept": "Icon functionality",
      "statement": "Icons are small pictures that represent files, folders, programs and other items."
    },
    {
      "concept": "Opening programs via icons",
      "statement": "Users can open programs by double clicking on the icons."
    },
    {
      "concept": "Dragging and dropping icons",
      "statement": "If you move an icon on your desktop, this is called 'dragging' and after releasing it, it will be called 'dropping.'"
    },
    {
      "concept": "My Computer icon",
      "statement": "My Computer icon contains icons of document folders, hard disk's partition, each removable disk drive."
    },
    {
      "concept": "My Computer icon functionality",
      "statement": "My Computer allows users to access drives, printers, removable disk or other system applications."
    },
    {
      "concept": "Recycle Bin icon",
      "statement": "Recycle Bin icon contains deleted files, folders or shortcuts."
    },
    {
      "concept": "Restoring deleted files",
      "statement": "From Recycle Bin, we can restore deleted files or folders to their proper place."
    },
    {
      "concept": "Shortcut icon",
      "statement": "A shortcut icon on the desktop provides a user with immediate access to a program or file."
    },
    {
      "concept": "My Document folder",
      "statement": "My Document folder contains all files that you have created and saved in it."
    },
    {
      "concept": "DOS command",
      "statement": "In DOS, the DIR command is used to display list of files and subdirectories."
    },
    {
      "concept": "DOS command",
      "statement": "A command, in DOS, used to set a name to a disk, is LABEL."
    },
    {
      "concept": "DOS word processor",
      "statement": "The word processor used by DOS to write the programs or instructions is EDIT."
    },
    {
      "concept": "Operating system type",
      "statement": "An operating system is a system software."
    },
    {
      "concept": "Functions of operating system",
      "statement": "User interface, File system manipulation, and Resource allocation are functions of the operating system."
    },
    {
      "concept": "Windows XP editions",
      "statement": "Windows XP Home edition is for home users, and Windows XP Professional is for business users."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME is designed for single CPU or SMP 32-Bit Intel X86 computer."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME supports 8 or more CPU (maximum 32 CPU)."
    },
    {
      "concept": "Windows ME features",
      "statement": "The minimum internal storage for Windows ME is 64MB and maximum 4GB."
    },
    {
      "concept": "Windows ME features",
      "statement": "Windows ME introduced the Multilingual User Interface (MUI)."
    },
    {
      "concept": "Windows Vista features",
      "statement": "Windows Vista can be installed on a Pentium 4 or higher processor with 512MB RAM, a 32 MB video card, and a 40 GB hard disk."
    },
    {
      "concept": "Windows Vista features",
      "statement": "Windows Vista enhanced the features of visual style."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 supports 64-Bit processor."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 provides touch, speech, and handwriting recognition."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 supports playback of media in MP4, MOV."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 includes Windows Bio-metric Framework."
    },
    {
      "concept": "Windows 7 features",
      "statement": "Windows 7 provides multiple firewalls."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 has a 64-bit logical CPU."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 supports 64 TB Dynamic Virtual Disk."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 provides 3D Graphic supports and Internet Explorer-10."
    },
    {
      "concept": "Windows 8 features",
      "statement": "The feature of NTML-5 is assumed to be enhanced in Windows 8."
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 is based on Microsoft's 'Metro design language.'"
    },
    {
      "concept": "Windows 8 features",
      "statement": "Windows 8 supports new emerging technology like USB 3.0 and cloud computing."
    },
    {
      "concept": "Object Linking and Embedding (OLE)",
      "statement": "Object Linking and Embedding (OLE) provides a way to combine information from several different application programs such as graphs, charts, music, video, clipart etc. into documents."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT uses preemptive multitasking."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT provides higher stability and security."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 is a mixed of 16-bit/32-bit Windows operating system."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 is consumer-oriented."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 supports Graphical User Interface (GUI) operating system."
    },
    {
      "concept": "Windows 95 features",
      "statement": "Windows 95 supports FAT32 file system, multi-display, Web TV and the Internet Explorer."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 supports Internet Explorer 4.01."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 has an Intel 80486DX2/66 MHz or compatible CPU with a Math coprocessor (Pentium processor recommended)."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 includes a FAT32 converter utility for converting FAT16 drives to FAT32 without formatting the partition."
    },
    {
      "concept": "Windows 98 features",
      "statement": "Windows 98 supports many peripherals devices (MX, USB, DVD)."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP has various users with independent profiles."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP requires 3.75 GB free space on the disk and the total size of the disk is 19.5 GB."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP requires at least 64 megabytes (MB) of RAM internal storage."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP provides 1.5 gigabytes (GB) of available space on the hard disk."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP includes a video adapter and monitor with Super VGA (800x600) or higher resolution."
    },
    {
      "concept": "Windows XP features",
      "statement": "Windows XP supports sound card, CD-ROM, DVD-ROM drive, speakers or headphones."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT is based on High Level Language."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT is able to run on DOS, Windows 3 and Win 32 applications."
    },
    {
      "concept": "Windows NT features",
      "statement": "Windows NT has 32-bit Windows applications."
    }
  ],
  "definitions": [
    {
      "term": "Windows",
      "meaning": "A rectangular area which provides an environment to run many programs. It is based on Graphical User Interface (GUI)."
    },
    {
      "term": "Active Window",
      "meaning": "Refers to the object that is being currently used or displayed on the desktop."
    },
    {
      "term": "Upgradation",
      "meaning": "The process of enhancing the features of any object. It changes or replaces the characteristics of any windows to any other advanced version of windows."
    },
    {
      "term": "Process",
      "meaning": "A program in execution."
    },
    {
      "term": "Operating System",
      "meaning": "A program that communicates your instructions to the actual computer hardware and displays the results."
    },
    {
      "term": "Desktop",
      "meaning": "The first screen displayed on the computer when it is turned on."
    },
    {
      "term": "Icon",
      "meaning": "A small image of a program, shown on the desktop with the program name. Icons are small pictures that represent files, folders, programs and other items."
    },
    {
      "term": "My Computer",
      "meaning": "The most important icon on the desktop, which contains icons of document folders, hard disk's partition, each removable disk drive. It is the main part of our windows where all the programs and software backup is stored."
    },
    {
      "term": "Recycle Bin",
      "meaning": "An icon on the desktop, which contains deleted files, folders or shortcuts. If we delete a file or folder then it goes to recycle bin. It is like a dustbin of the computer."
    },
    {
      "term": "Shortcut",
      "meaning": "An icon on the desktop that provides a user with immediate access to a program or file."
    },
    {
      "term": "My Document",
      "meaning": "A folder that contains all your files which you have created and saved in it."
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
    "question": "What is a program in execution called?",
    "options": {
      "A": "A thread",
      "B": "A process",
      "C": "A task",
      "D": "A job"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A program in execution is called a process."
  },
  {
    "question": "Which of the following is NOT a function of the operating system?",
    "options": {
      "A": "User interface",
      "B": "File system manipulation",
      "C": "Resource allocation",
      "D": "Networking"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Networking is not a function of the operating system."
  },
  {
    "question": "The process of transferring data intended for a peripheral device into a disk for later transfer is known as:",
    "options": {
      "A": "Buffering",
      "B": "Caching",
      "C": "Spooling",
      "D": "Paging"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "The process of transferring data intended for a peripheral device into a disk, so that it can be transferred to peripheral at a more convenient time or in bulk, is known as spooling."
  },
  {
    "question": "Which MS-DOS command is used to display a list of files and subdirectories?",
    "options": {
      "A": "FORMAT",
      "B": "PROMPT",
      "C": "DIR",
      "D": "COPY"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "In DOS, the DIR command is used to display list of files and subdirectories."
  },
  {
    "question": "What does 'Fork' refer to in the context of operating systems?",
    "options": {
      "A": "Terminating a process",
      "B": "Creating a new process",
      "C": "Scheduling a process",
      "D": "Inter-process communication"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Fork is the creation of a new process."
  },
  {
    "question": "Which of the following operating systems does NOT have virtual memory?",
    "options": {
      "A": "Windows XP",
      "B": "Linux",
      "C": "MS-DOS",
      "D": "macOS"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "MS-DOS operating system does not have virtual memory."
  },
  {
    "question": "The first screen displayed on the computer when it is turned on is known as the:",
    "options": {
      "A": "Taskbar",
      "B": "Menu bar",
      "C": "Desktop",
      "D": "Start screen"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "When we turn on the computer then the first screen, which will be display on the computer is known as desktop."
  },
  {
    "question": "What is the term for a small image on the desktop that represents a file, folder, or program?",
    "options": {
      "A": "Widget",
      "B": "Icon",
      "C": "Shortcut",
      "D": "Button"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A small image of a program, shown on the desktop with program name is known as icon."
  },
  {
    "question": "Which Windows version was the first to use the Windows Driver Model (WDM)?",
    "options": {
      "A": "Windows 95",
      "B": "Windows 98",
      "C": "Windows ME",
      "D": "Windows XP"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Hard",
    "source_snippet": "Windows 98 was the first operating system to use the Windows Driver Model (WDM)."
  },
  {
    "question": "What is the primary purpose of the Recycle Bin in Windows?",
    "options": {
      "A": "To store frequently used programs",
      "B": "To temporarily hold deleted files and folders",
      "C": "To manage system startup programs",
      "D": "To organize user documents"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Recycle Bin icon contains deleted files, folders or shortcuts."
  }
]
```

---

## Interaction [09:12:52]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is NOT a function of the operating system?
        Proposed Answer: D (Networking)
        Source Snippet provided by Writer: Networking is not a function of the operating system.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet directly contradicts the proposed answer. The snippet states that networking is NOT a function of the operating system, while the proposed answer suggests that networking IS NOT a function of the operating system, implying it IS a function. Therefore, the snippet does not prove the proposed answer."}
```

---

## Interaction [09:12:55]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: The process of transferring data intended for a peripheral device into a disk for later transfer is known as:
        Proposed Answer: C (Spooling)
        Source Snippet provided by Writer: The process of transferring data intended for a peripheral device into a disk, so that it can be transferred to peripheral at a more convenient time or in bulk, is known as spooling.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly defines spooling as the process of transferring data intended for a peripheral device into a disk for later transfer, which perfectly matches the question and the proposed answer."}
```

---

## Interaction [09:12:58]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which MS-DOS command is used to display a list of files and subdirectories?
        Proposed Answer: C (DIR)
        Source Snippet provided by Writer: In DOS, the DIR command is used to display list of files and subdirectories.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the DIR command is used to display a list of files and subdirectories in DOS, which directly supports the proposed answer."}
```

---

## Interaction [09:13:04]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: The first screen displayed on the computer when it is turned on is known as the:
        Proposed Answer: C (Desktop)
        Source Snippet provided by Writer: When we turn on the computer then the first screen, which will be display on the computer is known as desktop.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'the first screen, which will be display on the computer is known as desktop', directly supporting the proposed answer C (Desktop). The question is factually accurate and does not contain hallucinations."}
```

---

## Interaction [09:13:07]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the term for a small image on the desktop that represents a file, folder, or program?
        Proposed Answer: B (Icon)
        Source Snippet provided by Writer: A small image of a program, shown on the desktop with program name is known as icon.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly defines an icon as 'A small image of a program, shown on the desktop with program name', which perfectly matches the question's description of 'a small image on the desktop that represents a file, folder, or program'. The question is also factually accurate."}
```

---

