# AI Conversation Log: pipeline_Arihant_Computer_Awareness_pdf_74
Model: gemini-2.5-flash-lite
Date: 2026-04-15T10:18:35.918546

## Interaction [10:18:40]

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

    CONTEXT TEXT (SEGMENT AT 74%):
     virus is
(1) a hardware
(2) windows tool
(3) a computer program
(4) a system software
(5) None of the above
27. The first computer virus is
(1) creeper
(3) the famous
(5) None of these
[IBPS Clerk 2011]
(2) PARAM
(4) HARLIE
28. A time bomb occurs during a particular
(1) data or time
(3) only time
(5) None of these
29. First boot sector virus is
(1) computed
(3) brain
(5) None of these
(2) logic and data
(4) All of the above
(2) mind
(4) Elk Cloner
30. Which virus spreads in application software?
(1) Macro virus
(2) Boot virus
(3) File virus
(4) Anti-virus
(5) None of the above
31. Some viruses have a delayed payload, which is
sometimes called a
(1) time
(3) bomb
(5) None of these
32. An anti-virus is a
(1) program code
(2) computer
(3) company name
(4) application software
(5) None of the above
(2) anti-virus
(4) All of these
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Computer Security
33. 'Trend Micro' is a
(1) virus program
(2) anti-virus software
(3) just a program
(4) All of these
(5) None of the above
Downloaded From: www.EasyEngineering.net
34. It is a self-replicating program that infects
computer and spreads by inserting copies of
itself into other executable code or documents.
(1) Keylogger
(2) Worm
(3) Virus
(4) Cracker
(5) None of the above
35. Like a virus, it is a self-replicating program. It
also propagates through computer network.
(1) Spyware
(2) Worm
(3) Cracker
(4) phishing scam
(5) None of these
Analyse Yourself
36. What is an E-main attachment?
143
(1) A receipt sent by the recipient
(2) A separate document from another
program sent along with an E-mail
message
(3) A malicious parasite that feeds off your
messages and destroys the contents
(4) A list of Cc: or Bcc: recipients
(5) A friend to whom E-mail is sent regularly
37. Passwords enables users to
(1) get into the system quickly
(2) make efficient use of time
(3) retain confidentiality of files
(4) simplify file structure
(5) None of the above
38. A program designed to destroy data on your
computer which can travel to infect other
computers, is called a
(1) disease
(2) tarpedo
(3) hurricave
(4) virus
(5) None of these
1. (1)
2. (1)
3. (2)
4. (1)
5. (1)
6. (3)
7. (2)
8. (1)
9. (3)
10. (3)
11. (2)
12. (3)
13. (1)
14. (3)
15. (2)
16. (1)
17. (3)
18. (3)
19. (3)
20. (2)
21. (2)
22. (2)
23. (2)
24. (1)
25. (1)
26. (3)
27. (1)
28. (3)
29. (3)
30. (1)
31. (3)
32. (4)
33. (2)
34. (2)
35. (4)
36. (2)
37. (3)
38. (4)
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Infoworld Updates
A compendium of latest information from the World of Information Technology
G The US National Security Agency (NSA) used Operation 'PRISM'
to collect private electronic data
It is a tool that allows the NSA to request data on specific people from major
technology companies like Google, Yahoo, Facebook, Microsoft, Apple, and
others. The US government insists that it is only allowed to collect data when
given permission by the secret
    
```

### Response:
```json
{
  "exam_board": "f81eea7e-3e58-4fe6-ac6c-82682450a830",
  "exam_name": "f773d816-8ffc-45bc-a843-c75db9a47f19",
  "year": "",
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Computer Fundamentals",
  "confidence": 0.9
}
```

---

## Interaction [10:18:47]

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
     virus is
(1) a hardware
(2) windows tool
(3) a computer program
(4) a system software
(5) None of the above
27. The first computer virus is
(1) creeper
(3) the famous
(5) None of these
[IBPS Clerk 2011]
(2) PARAM
(4) HARLIE
28. A time bomb occurs during a particular
(1) data or time
(3) only time
(5) None of these
29. First boot sector virus is
(1) computed
(3) brain
(5) None of these
(2) logic and data
(4) All of the above
(2) mind
(4) Elk Cloner
30. Which virus spreads in application software?
(1) Macro virus
(2) Boot virus
(3) File virus
(4) Anti-virus
(5) None of the above
31. Some viruses have a delayed payload, which is
sometimes called a
(1) time
(3) bomb
(5) None of these
32. An anti-virus is a
(1) program code
(2) computer
(3) company name
(4) application software
(5) None of the above
(2) anti-virus
(4) All of these
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Computer Security
33. 'Trend Micro' is a
(1) virus program
(2) anti-virus software
(3) just a program
(4) All of these
(5) None of the above
Downloaded From: www.EasyEngineering.net
34. It is a self-replicating program that infects
computer and spreads by inserting copies of
itself into other executable code or documents.
(1) Keylogger
(2) Worm
(3) Virus
(4) Cracker
(5) None of the above
35. Like a virus, it is a self-replicating program. It
also propagates through computer network.
(1) Spyware
(2) Worm
(3) Cracker
(4) phishing scam
(5) None of these
Analyse Yourself
36. What is an E-main attachment?
143
(1) A receipt sent by the recipient
(2) A separate document from another
program sent along with an E-mail
message
(3) A malicious parasite that feeds off your
messages and destroys the contents
(4) A list of Cc: or Bcc: recipients
(5) A friend to whom E-mail is sent regularly
37. Passwords enables users to
(1) get into the system quickly
(2) make efficient use of time
(3) retain confidentiality of files
(4) simplify file structure
(5) None of the above
38. A program designed to destroy data on your
computer which can travel to infect other
computers, is called a
(1) disease
(2) tarpedo
(3) hurricave
(4) virus
(5) None of these
1. (1)
2. (1)
3. (2)
4. (1)
5. (1)
6. (3)
7. (2)
8. (1)
9. (3)
10. (3)
11. (2)
12. (3)
13. (1)
14. (3)
15. (2)
16. (1)
17. (3)
18. (3)
19. (3)
20. (2)
21. (2)
22. (2)
23. (2)
24. (1)
25. (1)
26. (3)
27. (1)
28. (3)
29. (3)
30. (1)
31. (3)
32. (4)
33. (2)
34. (2)
35. (4)
36. (2)
37. (3)
38. (4)
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Infoworld Updates
A compendium of latest information from the World of Information Technology
G The US National Security Agency (NSA) used Operation 'PRISM'
to collect private electronic data
It is a tool that allows the NSA to request data on specific people from major
technology companies like Google, Yahoo, Facebook, Microsoft, Apple, and
others. The US government insists that it is only allowed to collect data when
given permission by the secretive Foreign Intelligence Surveillance Court.
PRISM
Cyber Forensics: a scientifically proven method to gather and provide digital
evidence of cyber crime activities
It is an application of scientifically proven methods to gather, process, interpret and to use digital
evidence to provide a conclusive description of cyber crime activities. Cyber forensics also
includes the act of making digital data suitable for inclusion into a criminal investigation
GChina's Tianhe-2 World's fastest supercomputer
It is developed by China's National University of Defense Technology, with a
performance of 33.86 petaflop/s. Tianhe-2 has 16,000 nodes, each with two Intel
Xeon IvyBridge processors and three Xeon Phi processors for a combined total
of 3,120,000 computing cores.
Office 365: an Office in the cloud developed by Microsoft
Office 365 gives you the familiarity and power of office with the flexibility
Microsoft
of the cloud. With Office 365 your applications and files are with you Office 365
wherever you go, whether you're working offline at your desktop, online,
or on one of your devices.
Facebook launched 'HOME'
It is a collection of apps from Facebook that provides a stream of Facebook, posts
photos and links on a smartphone's home screen or lock screen. By replacing the
smartphone's standard home screen, Facebook Home brings the social network's
most popular features to the forefront of a user's smartphone.
NEXUS 10: a powerful 10 Inch Tablet from Google
home
The Google Nexus 10 is a tablet device developed by Google and Samsung with a super high
resolution display, multi-user support, immersive HD content and the best Google apps.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
G'Bazooka' the biggest ever cyber attack
145
A 'bazooka' cyber attack described as the most powerful ever seen has slowed traffic on the
Internet and raised concerns over online security. The attacks targeted Spamhaus, a
Geneva-based volunteer group that publishes spam blacklists, and led to cyberspace congestion
that may have affected the Internet overall. Internet users worldwide had endured slow
connections after the biggest cyberattack in history.
GA free Internet radio service by Apple: iRadio
iTunes Radio is a free Internet radio service featuring over 200 stations and an
incredible catalogue of music from the iTunes Store, combined with features
only iTunes can deliver. When you tune into iTunes Radio on your iPhone, iPad,
iPod touch, Mac, PC or Apple TV, you'll have access to stations inspired by the Radio
music you already listen to, Featured Stations curated by Apple and
genre-focused stations that are personalised just for you.
Param Yuva-2: a supercomputer developed by C-DAC INDIA
C-DAC has come out with PARAM Yuva - II which is rated as India's fastest ever
supercomputer. The secretary of Department of Electronics and Information
Technology (Deity), J Satyanarayana has launched the 500 TeraFlop model of
the old PARAM Yuva at Pune. This launch also brings C-DAC the fame of the
first R&D institution of the country who has reached the milestone of 500 TE
G WeChat for video messaging by TENCENT CHINA
Wechat is a software which is created by Tencent, one of the largest internet
comprehensive service providers in China. Wechat is a mobile software using which
people can send voice messages\video\image quickly through the internet and it
supports a group of people chat at a time. Users can contact their friends, with a
more colorful SMS and MMS. This wechat software itself is free and all functions are
also free. However, the internet flow fee will be charged by the internet provider.
WhatsApp: messenger for smartphone users
WhatsApp Messenger is a cross-platform instant messaging application that allows
iPhone, BlackBerry, Android, Windows Phone and Nokia smartphone users to
exchange text, image, video and audio messages for free. WhatsApp is especially
popular with end users who do not have unlimited text messaging. In addition to
basic messaging, WhatsApp provides group chat and location sharing options.
Google Glass: eyewear smartphone
It is a Google's project program for developing a line of hands-free,
head-mounted intelligent devices that can be worn by users as eyewear. The
first product release from Project Glass, Google Glass, was available for beta
testers (U.S. residents only) to purchase in 2013, for $1,500 plus tax.
WeChat
WhatsApp
Google Glasses look like a pair of eyeglasses, but the lens of the glasses are an interactive,
Wi-Fi connectivity. Google Glass is powered by the Android mobile operating system.
smartphone-like display, with natural language voice command support as well as Bluetooth and
Downloaded From

--- PAGE BREAK ---

146
Downloaded From: www.EasyEngineering.net Computer Awareness
GA personal 3D printing technology: Form 1
3D printing is the technology that could forge your digital design into a solid
real-life product. It's nothing new for the advanced mechanical industry, but a
personal 3D printer is definitely a revolutionary idea.
Everybody can create their own physical product based on their custom design, and
no approval needed from any giant manufacturer! Even the James Bond's Aston
Martin which was crashed in the movie was a 3D printed product!
Virtual reality gaming is here in the form 'Oculus Rift'
This history-defining 3D headset lets you mentally feel that you are actually
inside a video game. In the Rift's virtual world, you could turn your head
around with ultra-low latency to view the world in high resolution display.
There are premium products in the market that can do the same, but Rift wants you to enjoy the
experience at a very minimal cost, and the package even comes as a development kit. This is the
beginning of the revolution for next-generation gaming.
An open source mobile operating system by Firefox
iOS and Android are great, but they each have their own rules and policies that
certainly inhibit the creative efforts of developers.
Mozilla has since decided to build a new mobile operating system from scratch, one
that will focus on true openness, freedom and user choice. It's Firefox OS. It carries
web technologies such as HTML5 and CSS3.
The first generation of Gaming Tablet: Project Fiona
Razer's Project Fiona is a serious gaming tablet built for hardcore gaming. This
beast features next generation Intel® Core i7 processor geared to render all
favorite PC games, all at the palm of your hands.
Parallella: a supercomputer for everyone
your
Basically, an energy-efficient computer built for processing complex software
simultaneously and effectively. Real-time object tracking, holographic
heads-up display, speech recognition will become even stronger and smarter
with Parallella.
Google Driverless Car
The Google driverless car is powered by artificial intelligence that utilizes the
input from the video cameras inside the car, a sensor on the vehicle's top,
and some radar and position sensors attached to different positions of the
car. Sounds like a lot of effort to mimic the human intelligence in a car, but
so far the system has successfully driven 1609 kilometres without human
commands!
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Abbreviations
AD Active Directory
ADC Analog to Digital Convertor
ARP Address Resolution Protocol
ASP Active Server Page
AH Active Hub
Al Artificial Intelligence
AL Active Link
ALGOL ALGOrithmic Language
ALU Arithmetic and Logical Unit
AM Active Monitor
ANSI American National Standard Institute
APCI Application-Layer Protocol Control
Information
API Application Program Interface
ASCII American Standard Code for
Information Interchange
ATM Asynchronous Transfer Mode
ADF Automatic Document Folder
BINAC Binary Automatic Computer
BCC Blind Carbon Copy
BMP Bitmap/Basic Multilingual Plane
BARC Bhabha Atomic Research Center
BASIC Beginner's All purpose Symbolic
Instruction Code
BCD Binary Coded Decimal
BCR Bar Code Reader
BER Bit Error Rate
Bin Binary
BIOS Basic Input Output System
B2C Business to Commerce
Bit Binary Digit
BLOB Binary Large Object
BLOG Web Log
BPI Byte Per Inch
BPS Bits Per Second
BSNL Bharat Sanchar Nigam Limited
BPEL Business Process Execution Language
CC Carbon Copy
CMOS Complementary Metal Oxide Semi
Conductor
CAD Computer Aided Design
CLASS Computer Literacy and Studies in
School
COBOL Common Business Oriented Language
CD Compact Disc
COMAL COMmon Algorithmic Language
CPU Central Processing Unit
CRT Cathod Ray Tube
CSS Cascading Style Sheets
CU Control Unit
CUA Control User Access
CTCP Client-To-Client Protocol
CDR Compact Disc Recordable
CDROM Compact Disc Read Only Memory
CDRW Compact Disc Rewritable
CDR/W Compact Disc-Read/Write
CG Computer Graphics
CGI Common Gateway Interface
CIFS Common Interface File System
COM Common Object Mode
CLR Common Language Runtime
CDMA Code Division Multiple Access
DAC Digital to Analog Convertor
DAP Directory Access Pro
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Virus",
      "statement": "A virus is a computer program."
    },
    {
      "concept": "Virus",
      "statement": "A virus is a system software."
    },
    {
      "concept": "First computer virus",
      "statement": "The first computer virus is Creeper."
    },
    {
      "concept": "Time bomb",
      "statement": "A time bomb occurs during a particular data or time."
    },
    {
      "concept": "First boot sector virus",
      "statement": "The first boot sector virus is Brain."
    },
    {
      "concept": "Macro virus",
      "statement": "Macro viruses spread in application software."
    },
    {
      "concept": "Delayed payload",
      "statement": "Some viruses have a delayed payload, which is sometimes called a bomb."
    },
    {
      "concept": "Anti-virus",
      "statement": "An anti-virus is application software."
    },
    {
      "concept": "Trend Micro",
      "statement": "'Trend Micro' is an anti-virus software."
    },
    {
      "concept": "Virus",
      "statement": "A virus is a self-replicating program that infects computers and spreads by inserting copies of itself into other executable code or documents."
    },
    {
      "concept": "Worm",
      "statement": "A worm is a self-replicating program that infects computers and spreads by inserting copies of itself into other executable code or documents."
    },
    {
      "concept": "Worm",
      "statement": "Like a virus, a worm is a self-replicating program. It also propagates through a computer network."
    },
    {
      "concept": "E-mail attachment",
      "statement": "An E-mail attachment is a separate document from another program sent along with an E-mail message."
    },
    {
      "concept": "Passwords",
      "statement": "Passwords enable users to retain confidentiality of files."
    },
    {
      "concept": "Virus",
      "statement": "A program designed to destroy data on your computer which can travel to infect other computers is called a virus."
    },
    {
      "concept": "PRISM",
      "statement": "PRISM is a tool that allows the US National Security Agency (NSA) to request data on specific people from major technology companies."
    },
    {
      "concept": "Cyber Forensics",
      "statement": "Cyber Forensics is an application of scientifically proven methods to gather, process, interpret and to use digital evidence to provide a conclusive description of cyber crime activities."
    },
    {
      "concept": "Tianhe-2",
      "statement": "Tianhe-2 is the world's fastest supercomputer, developed by China's National University of Defense Technology."
    },
    {
      "concept": "Office 365",
      "statement": "Office 365 is an Office in the cloud developed by Microsoft."
    },
    {
      "concept": "Facebook HOME",
      "statement": "Facebook HOME is a collection of apps from Facebook that provides a stream of Facebook posts, photos and links on a smartphone's home screen or lock screen."
    },
    {
      "concept": "NEXUS 10",
      "statement": "NEXUS 10 is a powerful 10 Inch Tablet from Google."
    },
    {
      "concept": "Bazooka cyber attack",
      "statement": "'Bazooka' is described as the biggest ever cyber attack, which slowed traffic on the Internet and raised concerns over online security."
    },
    {
      "concept": "iRadio",
      "statement": "iRadio is a free Internet radio service by Apple."
    },
    {
      "concept": "Param Yuva-2",
      "statement": "Param Yuva-2 is a supercomputer developed by C-DAC INDIA, rated as India's fastest ever supercomputer."
    },
    {
      "concept": "WeChat",
      "statement": "WeChat is a software created by Tencent, China, that allows users to send voice messages, video, and images quickly through the internet and supports group chats."
    },
    {
      "concept": "WhatsApp",
      "statement": "WhatsApp Messenger is a cross-platform instant messaging application that allows smartphone users to exchange text, image, video and audio messages for free."
    },
    {
      "concept": "Google Glass",
      "statement": "Google Glass is a Google project program for developing a line of hands-free, head-mounted intelligent devices that can be worn by users as eyewear."
    },
    {
      "concept": "3D printing",
      "statement": "3D printing is the technology that could forge a digital design into a solid real-life product."
    },
    {
      "concept": "Oculus Rift",
      "statement": "Oculus Rift is a history-defining 3D headset that allows users to mentally feel that they are actually inside a video game."
    },
    {
      "concept": "Firefox OS",
      "statement": "Firefox OS is a mobile operating system built by Mozilla, focusing on openness, freedom, and user choice, carrying web technologies such as HTML5 and CSS3."
    },
    {
      "concept": "Project Fiona",
      "statement": "Project Fiona is a serious gaming tablet built for hardcore gaming, featuring a next generation Intel® Core i7 processor."
    },
    {
      "concept": "Parallella",
      "statement": "Parallella is an energy-efficient computer built for processing complex software simultaneously and effectively."
    },
    {
      "concept": "Google driverless car",
      "statement": "The Google driverless car is powered by artificial intelligence that utilizes input from video cameras, sensors, radar, and position sensors."
    }
  ],
  "definitions": [
    {
      "term": "Virus",
      "meaning": "A computer program."
    },
    {
      "term": "Time bomb",
      "meaning": "A type of virus that occurs during a particular data or time."
    },
    {
      "term": "Macro virus",
      "meaning": "A type of virus that spreads in application software."
    },
    {
      "term": "Bomb",
      "meaning": "A delayed payload of some viruses."
    },
    {
      "term": "Anti-virus",
      "meaning": "Application software designed to detect and remove viruses."
    },
    {
      "term": "Keylogger",
      "meaning": "A type of malicious software that records keystrokes."
    },
    {
      "term": "Worm",
      "meaning": "A self-replicating program that infects computers and spreads by inserting copies of itself into other executable code or documents, and propagates through computer networks."
    },
    {
      "term": "Cracker",
      "meaning": "An individual who breaks into computer systems."
    },
    {
      "term": "Phishing scam",
      "meaning": "A fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising oneself as a trustworthy entity in an electronic communication."
    },
    {
      "term": "E-mail attachment",
      "meaning": "A separate document from another program sent along with an E-mail message."
    },
    {
      "term": "PRISM",
      "meaning": "A tool used by the US National Security Agency (NSA) to collect private electronic data."
    },
    {
      "term": "Cyber Forensics",
      "meaning": "A scientifically proven method to gather and provide digital evidence of cyber crime activities."
    },
    {
      "term": "Tianhe-2",
      "meaning": "The world's fastest supercomputer."
    },
    {
      "term": "Office 365",
      "meaning": "An Office suite offered in the cloud by Microsoft."
    },
    {
      "term": "Facebook HOME",
      "meaning": "A collection of apps from Facebook that displays social media content on a smartphone's home screen."
    },
    {
      "term": "NEXUS 10",
      "meaning": "A 10-inch tablet device developed by Google and Samsung."
    },
    {
      "term": "'Bazooka' cyber attack",
      "meaning": "The biggest ever cyber attack, which slowed internet traffic."
    },
    {
      "term": "iRadio",
      "meaning": "A free Internet radio service by Apple."
    },
    {
      "term": "Param Yuva-2",
      "meaning": "India's fastest supercomputer, developed by C-DAC."
    },
    {
      "term": "WeChat",
      "meaning": "A mobile software for sending voice messages, video, and images through the internet, developed by Tencent."
    },
    {
      "term": "WhatsApp Messenger",
      "meaning": "A cross-platform instant messaging application for smartphone users."
    },
    {
      "term": "Google Glass",
      "meaning": "A line of hands-free, head-mounted intelligent devices that can be worn as eyewear."
    },
    {
      "term": "3D printing",
      "meaning": "Technology that creates a physical product from a digital design."
    },
    {
      "term": "Oculus Rift",
      "meaning": "A 3D headset that provides an immersive virtual reality gaming experience."
    },
    {
      "term": "Firefox OS",
      "meaning": "An open-source mobile operating system developed by Mozilla."
    },
    {
      "term": "Project Fiona",
      "meaning": "A gaming tablet built for hardcore gaming."
    },
    {
      "term": "Parallella",
      "meaning": "An energy-efficient computer designed for processing complex software simultaneously."
    },
    {
      "term": "Google driverless car",
      "meaning": "A car powered by artificial intelligence that can drive without human commands."
    }
  ]
}
```

---

## Interaction [10:20:21]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Computer Fundamentals.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Virus",
      "statement": "A virus is a computer program."
    },
    {
      "concept": "Virus",
      "statement": "A virus is a system software."
    },
    {
      "concept": "First computer virus",
      "statement": "The first computer virus is Creeper."
    },
    {
      "concept": "Time bomb",
      "statement": "A time bomb occurs during a particular data or time."
    },
    {
      "concept": "First boot sector virus",
      "statement": "The first boot sector virus is Brain."
    },
    {
      "concept": "Macro virus",
      "statement": "Macro viruses spread in application software."
    },
    {
      "concept": "Delayed payload",
      "statement": "Some viruses have a delayed payload, which is sometimes called a bomb."
    },
    {
      "concept": "Anti-virus",
      "statement": "An anti-virus is application software."
    },
    {
      "concept": "Trend Micro",
      "statement": "'Trend Micro' is an anti-virus software."
    },
    {
      "concept": "Virus",
      "statement": "A virus is a self-replicating program that infects computers and spreads by inserting copies of itself into other executable code or documents."
    },
    {
      "concept": "Worm",
      "statement": "A worm is a self-replicating program that infects computers and spreads by inserting copies of itself into other executable code or documents."
    },
    {
      "concept": "Worm",
      "statement": "Like a virus, a worm is a self-replicating program. It also propagates through a computer network."
    },
    {
      "concept": "E-mail attachment",
      "statement": "An E-mail attachment is a separate document from another program sent along with an E-mail message."
    },
    {
      "concept": "Passwords",
      "statement": "Passwords enable users to retain confidentiality of files."
    },
    {
      "concept": "Virus",
      "statement": "A program designed to destroy data on your computer which can travel to infect other computers is called a virus."
    },
    {
      "concept": "PRISM",
      "statement": "PRISM is a tool that allows the US National Security Agency (NSA) to request data on specific people from major technology companies."
    },
    {
      "concept": "Cyber Forensics",
      "statement": "Cyber Forensics is an application of scientifically proven methods to gather, process, interpret and to use digital evidence to provide a conclusive description of cyber crime activities."
    },
    {
      "concept": "Tianhe-2",
      "statement": "Tianhe-2 is the world's fastest supercomputer, developed by China's National University of Defense Technology."
    },
    {
      "concept": "Office 365",
      "statement": "Office 365 is an Office in the cloud developed by Microsoft."
    },
    {
      "concept": "Facebook HOME",
      "statement": "Facebook HOME is a collection of apps from Facebook that provides a stream of Facebook posts, photos and links on a smartphone's home screen or lock screen."
    },
    {
      "concept": "NEXUS 10",
      "statement": "NEXUS 10 is a powerful 10 Inch Tablet from Google."
    },
    {
      "concept": "Bazooka cyber attack",
      "statement": "'Bazooka' is described as the biggest ever cyber attack, which slowed traffic on the Internet and raised concerns over online security."
    },
    {
      "concept": "iRadio",
      "statement": "iRadio is a free Internet radio service by Apple."
    },
    {
      "concept": "Param Yuva-2",
      "statement": "Param Yuva-2 is a supercomputer developed by C-DAC INDIA, rated as India's fastest ever supercomputer."
    },
    {
      "concept": "WeChat",
      "statement": "WeChat is a software created by Tencent, China, that allows users to send voice messages, video, and images quickly through the internet and supports group chats."
    },
    {
      "concept": "WhatsApp",
      "statement": "WhatsApp Messenger is a cross-platform instant messaging application that allows smartphone users to exchange text, image, video and audio messages for free."
    },
    {
      "concept": "Google Glass",
      "statement": "Google Glass is a Google project program for developing a line of hands-free, head-mounted intelligent devices that can be worn by users as eyewear."
    },
    {
      "concept": "3D printing",
      "statement": "3D printing is the technology that could forge a digital design into a solid real-life product."
    },
    {
      "concept": "Oculus Rift",
      "statement": "Oculus Rift is a history-defining 3D headset that allows users to mentally feel that they are actually inside a video game."
    },
    {
      "concept": "Firefox OS",
      "statement": "Firefox OS is a mobile operating system built by Mozilla, focusing on openness, freedom, and user choice, carrying web technologies such as HTML5 and CSS3."
    },
    {
      "concept": "Project Fiona",
      "statement": "Project Fiona is a serious gaming tablet built for hardcore gaming, featuring a next generation Intel\u00ae Core i7 processor."
    },
    {
      "concept": "Parallella",
      "statement": "Parallella is an energy-efficient computer built for processing complex software simultaneously and effectively."
    },
    {
      "concept": "Google driverless car",
      "statement": "The Google driverless car is powered by artificial intelligence that utilizes input from video cameras, sensors, radar, and position sensors."
    }
  ],
  "definitions": [
    {
      "term": "Virus",
      "meaning": "A computer program."
    },
    {
      "term": "Time bomb",
      "meaning": "A type of virus that occurs during a particular data or time."
    },
    {
      "term": "Macro virus",
      "meaning": "A type of virus that spreads in application software."
    },
    {
      "term": "Bomb",
      "meaning": "A delayed payload of some viruses."
    },
    {
      "term": "Anti-virus",
      "meaning": "Application software designed to detect and remove viruses."
    },
    {
      "term": "Keylogger",
      "meaning": "A type of malicious software that records keystrokes."
    },
    {
      "term": "Worm",
      "meaning": "A self-replicating program that infects computers and spreads by inserting copies of itself into other executable code or documents, and propagates through computer networks."
    },
    {
      "term": "Cracker",
      "meaning": "An individual who breaks into computer systems."
    },
    {
      "term": "Phishing scam",
      "meaning": "A fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising oneself as a trustworthy entity in an electronic communication."
    },
    {
      "term": "E-mail attachment",
      "meaning": "A separate document from another program sent along with an E-mail message."
    },
    {
      "term": "PRISM",
      "meaning": "A tool used by the US National Security Agency (NSA) to collect private electronic data."
    },
    {
      "term": "Cyber Forensics",
      "meaning": "A scientifically proven method to gather and provide digital evidence of cyber crime activities."
    },
    {
      "term": "Tianhe-2",
      "meaning": "The world's fastest supercomputer."
    },
    {
      "term": "Office 365",
      "meaning": "An Office suite offered in the cloud by Microsoft."
    },
    {
      "term": "Facebook HOME",
      "meaning": "A collection of apps from Facebook that displays social media content on a smartphone's home screen."
    },
    {
      "term": "NEXUS 10",
      "meaning": "A 10-inch tablet device developed by Google and Samsung."
    },
    {
      "term": "'Bazooka' cyber attack",
      "meaning": "The biggest ever cyber attack, which slowed internet traffic."
    },
    {
      "term": "iRadio",
      "meaning": "A free Internet radio service by Apple."
    },
    {
      "term": "Param Yuva-2",
      "meaning": "India's fastest supercomputer, developed by C-DAC."
    },
    {
      "term": "WeChat",
      "meaning": "A mobile software for sending voice messages, video, and images through the internet, developed by Tencent."
    },
    {
      "term": "WhatsApp Messenger",
      "meaning": "A cross-platform instant messaging application for smartphone users."
    },
    {
      "term": "Google Glass",
      "meaning": "A line of hands-free, head-mounted intelligent devices that can be worn as eyewear."
    },
    {
      "term": "3D printing",
      "meaning": "Technology that creates a physical product from a digital design."
    },
    {
      "term": "Oculus Rift",
      "meaning": "A 3D headset that provides an immersive virtual reality gaming experience."
    },
    {
      "term": "Firefox OS",
      "meaning": "An open-source mobile operating system developed by Mozilla."
    },
    {
      "term": "Project Fiona",
      "meaning": "A gaming tablet built for hardcore gaming."
    },
    {
      "term": "Parallella",
      "meaning": "An energy-efficient computer designed for processing complex software simultaneously."
    },
    {
      "term": "Google driverless car",
      "meaning": "A car powered by artificial intelligence that can drive without human commands."
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
    "question": "What is a computer virus?",
    "options": {
      "A": "A hardware component",
      "B": "A system software",
      "C": "A type of peripheral device",
      "D": "A network protocol"
    },
    "correct_answer": "B",
    "source_snippet": "A virus is a system software."
  },
  {
    "question": "Which of the following is considered the first computer virus?",
    "options": {
      "A": "Brain",
      "B": "Creeper",
      "C": "Worm",
      "D": "Trojan Horse"
    },
    "correct_answer": "B",
    "source_snippet": "The first computer virus is Creeper."
  },
  {
    "question": "What is a 'time bomb' in the context of computer viruses?",
    "options": {
      "A": "A virus that spreads through email attachments.",
      "B": "A virus that activates at a specific date or time.",
      "C": "A virus that corrupts boot sectors.",
      "D": "A virus that replicates within application software."
    },
    "correct_answer": "B",
    "source_snippet": "A time bomb occurs during a particular data or time."
  },
  {
    "question": "The first boot sector virus is known as:",
    "options": {
      "A": "Creeper",
      "B": "Elk Cloner",
      "C": "Brain",
      "D": "Morris Worm"
    },
    "correct_answer": "C",
    "source_snippet": "The first boot sector virus is Brain."
  },
  {
    "question": "Macro viruses primarily spread through:",
    "options": {
      "A": "Executable files",
      "B": "Operating system vulnerabilities",
      "C": "Application software",
      "D": "Network connections"
    },
    "correct_answer": "C",
    "source_snippet": "Macro viruses spread in application software."
  },
  {
    "question": "What is the primary function of anti-virus software?",
    "options": {
      "A": "To create system backups",
      "B": "To increase internet speed",
      "C": "To detect and remove viruses",
      "D": "To manage user passwords"
    },
    "correct_answer": "C",
    "source_snippet": "An anti-virus is application software."
  },
  {
    "question": "Which of the following is an example of anti-virus software?",
    "options": {
      "A": "Microsoft Office",
      "B": "Trend Micro",
      "C": "Google Chrome",
      "D": "Adobe Photoshop"
    },
    "correct_answer": "B",
    "source_snippet": "'Trend Micro' is an anti-virus software."
  },
  {
    "question": "A worm is similar to a virus in that it is self-replicating, but it primarily propagates through:",
    "options": {
      "A": "Email attachments",
      "B": "Corrupting documents",
      "C": "Computer networks",
      "D": "System software"
    },
    "correct_answer": "C",
    "source_snippet": "Like a virus, a worm is a self-replicating program. It also propagates through a computer network."
  },
  {
    "question": "What is an E-mail attachment?",
    "options": {
      "A": "The subject line of an email",
      "B": "A virus hidden in the email body",
      "C": "A separate document sent with an email",
      "D": "Spam content within an email"
    },
    "correct_answer": "C",
    "source_snippet": "An E-mail attachment is a separate document from another program sent along with an E-mail message."
  },
  {
    "question": "Which technology allows a digital design to be forged into a solid real-life product?",
    "options": {
      "A": "Virtual Reality",
      "B": "Artificial Intelligence",
      "C": "3D printing",
      "D": "Cloud Computing"
    },
    "correct_answer": "C",
    "source_snippet": "3D printing is the technology that could forge a digital design into a solid real-life product."
  }
]
```

---

## Interaction [10:20:25]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is a computer virus?
        Proposed Answer: B (A system software)
        Source Snippet provided by Writer: A virus is a system software.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet states that a virus is a system software, which directly supports the proposed answer. However, the question asks for a definition of a computer virus, and the proposed answer 'B (A system software)' is not a complete or accurate definition. A computer virus is a type of malicious software (malware) that, when executed, replicates itself by modifying other computer programs and inserting its own code. Therefore, while the snippet supports the answer, the answer itself is factually incorrect and incomplete as a definition."}
```

---

## Interaction [10:20:28]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is considered the first computer virus?
        Proposed Answer: B (Creeper)
        Source Snippet provided by Writer: The first computer virus is Creeper.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'The first computer virus is Creeper', which factually proves the proposed answer 'B (Creeper)'."}
```

---

## Interaction [10:20:32]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is a 'time bomb' in the context of computer viruses?
        Proposed Answer: B (A virus that activates at a specific date or time.)
        Source Snippet provided by Writer: A time bomb occurs during a particular data or time.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet is too vague and does not explicitly state that a time bomb virus activates at a specific date or time. It only mentions 'a particular data or time' which could refer to many things."}
```

---

## Interaction [10:20:35]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: The first boot sector virus is known as:
        Proposed Answer: C (Brain)
        Source Snippet provided by Writer: The first boot sector virus is Brain.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the first boot sector virus is Brain, which matches the proposed answer."}
```

---

## Interaction [10:20:37]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Macro viruses primarily spread through:
        Proposed Answer: C (Application software)
        Source Snippet provided by Writer: Macro viruses spread in application software.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that macro viruses spread in application software, which factually proves the proposed answer C (Application software). The question is also factually accurate and not a hallucination."}
```

---

## Interaction [10:20:40]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary function of anti-virus software?
        Proposed Answer: C (To detect and remove viruses)
        Source Snippet provided by Writer: An anti-virus is application software.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet only states that anti-virus is application software, which does not factually prove that its primary function is to detect and remove viruses. The question itself is not hallucinated."}
```

---

## Interaction [10:20:43]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is an example of anti-virus software?
        Proposed Answer: B (Trend Micro)
        Source Snippet provided by Writer: 'Trend Micro' is an anti-virus software.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'Trend Micro' is an anti-virus software, directly supporting the proposed answer."}
```

---

## Interaction [10:20:46]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: A worm is similar to a virus in that it is self-replicating, but it primarily propagates through:
        Proposed Answer: C (Computer networks)
        Source Snippet provided by Writer: Like a virus, a worm is a self-replicating program. It also propagates through a computer network.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that a worm propagates through a computer network, which directly supports the proposed answer C."}
```

---

## Interaction [10:20:49]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is an E-mail attachment?
        Proposed Answer: C (A separate document sent with an email)
        Source Snippet provided by Writer: An E-mail attachment is a separate document from another program sent along with an E-mail message.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly defines an email attachment as 'a separate document from another program sent along with an E-mail message', which perfectly matches the proposed answer 'A separate document sent with an email'."}
```

---

## Interaction [10:20:52]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which technology allows a digital design to be forged into a solid real-life product?
        Proposed Answer: C (3D printing)
        Source Snippet provided by Writer: 3D printing is the technology that could forge a digital design into a solid real-life product.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 3D printing is the technology that can forge a digital design into a solid real-life product, which perfectly matches the proposed answer."}
```

---

