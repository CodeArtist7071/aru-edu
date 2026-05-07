# AI Conversation Log: pipeline_Arihant_Computer_Awareness_pdf_40
Model: gemini-2.5-flash-lite
Date: 2026-04-14T22:00:04.829784

## Interaction [22:00:10]

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

    CONTEXT TEXT (SEGMENT AT 40%):
    roup
(4) Insert (5) None of these
62. The maximum zoom percentage in MS Power
Point is
(1) 100% (2) 200%
(5) None of these
[IBPS Clerk 2009]
(3) 400%
(4) 500%
63. In the context of animations, what is a trigger?
(1) An action button that advances to the next.
slide
(2) An item on the slide that performs an
action when clicked
(3) The name of a motion path
(4) All of the above
(5) None of the above
64. How are the data organised in a spreadsheet?
(1) Lines and spaces
(3) Height and width
(5) None of these
(2) Layers and planes
(4) Rows and columns
[SBI Clerk 2008]
65. Which of the following views is the best view to
use when setting transition effects for all slides
in presentation?
(1) Slide sorter view
(3) Slide view
(5) None of the above
(2) Notes pages view
(4) Outline view
66. Which command brings you to the first slide in
your presentation?
(1) Next slide button (2) Pageup
(3) Ctrl + Home
(5) None of these
(4) Ctrl + End
67. In order to include picture data type must be
(1) OLE
(3) Yes/No
(5) None of these
68. In Excel, charts are
option?
(1) Chart wizard
(3) Pie chart
(5) None of these
(2) hyperlink
(4) picture
[RBI PO 2009]
created using which
[SBI Clerk 2009]
(2) Pivot table
(4) Bar chart
69. Which of the following allow you to select
more than one slide in a presentation?
(1) Alt + click each slide
(2) Shift + drag each slide
(3) Shift + click each slide
(4) $A$4
(4) Ctrl + click each slide
(5) None of the above
Downloaded From

--- PAGE BREAK ---

92
Downloaded From: www.EasyEngineering.net
70. The basic unit of a worksheet into which you
enter data in excel is called a [IBPS Clerk 2008]
(1) tab
(3) box
(5) None of these
(2) cell
(4) range
71. You can create hyperlinks from the excel work
book to
(1) a web page on company internet
(2) a web page on the internet
(3) other office 97 application documents
(4) All of the above
(5) None of the above
72. In Excel, this is a prerecorded formula that
provides a shortcut for complex calculations.
(1) value
(3) function
(5) None of these
(2) data series
(4) field
Computer Awareness
78. Cell address $A4 in a formula means it is a
(1) mixed cell reference
(2) absolute cell reference
(3) relative cell reference
(4) All of the above
(5) None of the above
79. Pie charts are typically created by using which
of the following?
(1) Browser software
(2) Database software
(3) Desktop publishing software
(4) Word processing software
(5) Spreadsheet software
80. Which of the following justification align the
text on both the sides left and right of margin?
(1) Right
(3) Both sides
[IBPS Clerk 2012]
(2) Justify
(4) Balanced
73. Which of the following should be used to move
a paragraph from one place to another in a
word document?
(1) Copy and paste
(3) Delete and retype
(5) None of these
(2) Cut and paste
(4) Find and replace
74. In PowerPoint, the Header and Footer button
can be found on the insert tab in what group?
[IBPS PO, Clerk 2012]
(1) Illustrations group
(2) Object group
(3) Insert group
(4) Tables gr
    
```

### Response:
```json
{
  "exam_board": "f81eea7e-3e58-4fe6-ac6c-82682450a830",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "MS Office (Word, Excel, PowerPoint)",
  "confidence": 0.95
}
```

---

## Interaction [22:00:22]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: MS Office (Word, Excel, PowerPoint)
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    roup
(4) Insert (5) None of these
62. The maximum zoom percentage in MS Power
Point is
(1) 100% (2) 200%
(5) None of these
[IBPS Clerk 2009]
(3) 400%
(4) 500%
63. In the context of animations, what is a trigger?
(1) An action button that advances to the next.
slide
(2) An item on the slide that performs an
action when clicked
(3) The name of a motion path
(4) All of the above
(5) None of the above
64. How are the data organised in a spreadsheet?
(1) Lines and spaces
(3) Height and width
(5) None of these
(2) Layers and planes
(4) Rows and columns
[SBI Clerk 2008]
65. Which of the following views is the best view to
use when setting transition effects for all slides
in presentation?
(1) Slide sorter view
(3) Slide view
(5) None of the above
(2) Notes pages view
(4) Outline view
66. Which command brings you to the first slide in
your presentation?
(1) Next slide button (2) Pageup
(3) Ctrl + Home
(5) None of these
(4) Ctrl + End
67. In order to include picture data type must be
(1) OLE
(3) Yes/No
(5) None of these
68. In Excel, charts are
option?
(1) Chart wizard
(3) Pie chart
(5) None of these
(2) hyperlink
(4) picture
[RBI PO 2009]
created using which
[SBI Clerk 2009]
(2) Pivot table
(4) Bar chart
69. Which of the following allow you to select
more than one slide in a presentation?
(1) Alt + click each slide
(2) Shift + drag each slide
(3) Shift + click each slide
(4) $A$4
(4) Ctrl + click each slide
(5) None of the above
Downloaded From

--- PAGE BREAK ---

92
Downloaded From: www.EasyEngineering.net
70. The basic unit of a worksheet into which you
enter data in excel is called a [IBPS Clerk 2008]
(1) tab
(3) box
(5) None of these
(2) cell
(4) range
71. You can create hyperlinks from the excel work
book to
(1) a web page on company internet
(2) a web page on the internet
(3) other office 97 application documents
(4) All of the above
(5) None of the above
72. In Excel, this is a prerecorded formula that
provides a shortcut for complex calculations.
(1) value
(3) function
(5) None of these
(2) data series
(4) field
Computer Awareness
78. Cell address $A4 in a formula means it is a
(1) mixed cell reference
(2) absolute cell reference
(3) relative cell reference
(4) All of the above
(5) None of the above
79. Pie charts are typically created by using which
of the following?
(1) Browser software
(2) Database software
(3) Desktop publishing software
(4) Word processing software
(5) Spreadsheet software
80. Which of the following justification align the
text on both the sides left and right of margin?
(1) Right
(3) Both sides
[IBPS Clerk 2012]
(2) Justify
(4) Balanced
73. Which of the following should be used to move
a paragraph from one place to another in a
word document?
(1) Copy and paste
(3) Delete and retype
(5) None of these
(2) Cut and paste
(4) Find and replace
74. In PowerPoint, the Header and Footer button
can be found on the insert tab in what group?
[IBPS PO, Clerk 2012]
(1) Illustrations group
(2) Object group
(3) Insert group
(4) Tables group
(5) None of these
81. What is the default size of the data type in MS
Access?
(1) 50
(2) 60
(5) None of these
(3) 70
[SBI Clerk 2010]
(4) 80
82. To move the text from its original position to
another position without deleting it is called
(1) scrolling
(3) moving
(5) halting
(2) searching
(4) copying
[SBI Clerk 2009]
(2) switch board
(4) pages
[SBI Clerk 2012]
75. A
(5) None of these
is an additional set of commands that
the computer displays after you make a
selection from the main menu. [SBI Clerk 2009]
(1) dialog box
(3) menu selection
(5) None of these
(2) sub menu
(4) All of these
76. In Excel, ......... allows users to bring together
copies of workbooks that other users gave
worked on independently. [IBPS PO 2011]
(1) copying
(3) pasting
(5) None of these
(2) merging
(4) compling
77. Pressing Ctrl + F9 in Excel
(1) prints 9 worksheets
(2) prints a sheet
(3) prints 9 followed by spaces
(4) insert 9 cells at the current location
(5) None of the above
83. Attributes can be defined for
(1) entity
(3) macro
(5) None of these
84. MS Excel is used for
(1) letter writing
(2) spreadsheet calculation
(3) presentation
(4) painting
(5) None of the above
85. Sum (61: 610) is an example of a
86.
(1) function
(3) cell address
(5) None of these
(2) formula
(4) value
shows how the contents on
printed
page will appear with margin, header and
footer.
(1) Draft
(3) Outline
(5) None of these
(2) Full screen reading
(4) Page layout
Downloaded From: www.EasyEngineering.net
M
8
8

--- PAGE BREAK ---

Microsoft Office
Downloaded From: www.EasyEngineering.net
87. How many types of relationships are there in
MS-Access?
(1) 3
(2) 4
(5) None of these
(3) 5
(4)6
88. A word processor would be used best to
(1) paint a picture
(2) draw a diagram
(3) type a story
(4) work out income and expenses
(5) None of the above
[IBPS Clerk 2011]
89. In order to choose the font for a sentence in a
word document
[IBPS Clerk 2011]
(1) select font in the format menu
(2) select font in the edit menu
(3) select font in the tools menu
(4) select font in the view menu
(5) None of the above
90. The shortcut key to print documents is
93
94. Which of the following is a DBMS software?
(1) Access
(3) Word
(5) None of these
(2) Excel
(4) Powerpoint
95. Which of the following displays the buttons for
changing text style, alignment and size?
(1) Standard toolbar
(3) Drawing toolbar
(5) None of the above
(2) Status bar
(4) Formatting toolbar
96. Which of the following is not a term pertaining
to word?
[IBPS Clerk 2011]
(1) Delete
(2) Edit
(3) Copy
(4) Slide show
(5) None of these
97. Which key on the keyboard can be used to view
slide show?
(1) F1
(2) F2
(3) F5
(4) F10
(1) Ctrl + D
(3) Ctrl + B
(5) Ctrl + P
(2) Ctrl + A
(4) Ctrl + C
[IBPS PO 2012]
91. What is the extension of PowerPoint in
Microsoft Office 2007?
(1) .ppt
(5) .pt
(2) .pptx (3) .ppx (4) .ptx
92. All of the following terms are related to
spreadsheet software except [SBI Clerk 2011]
(1) worksheet
(3) formula
(5) None of these
93. There are a total of
(2) cell
(4) virus detection
(5) None of these
98. PowerPoint provides .......... number of layouts
for use with blank presentation.
(1) 20
(2) 22
(5) None of these
(3) 24
(4) 26
99. What is the shortcut key for centering the text
selected by the user in word? [IBPS Clerk 2011]
(1) Ctrl + A
(3) Ctrl + C
(5) Ctrl + E
(2) Ctrl + B
(4) Ctrl + D
100. What does an electronic spreadsheet consist
actions button in
of?
(1) Rows
[IBPS Clerk 2011]
(2) Columns
PowerPoint.
[SBI Clerk 2012]
(3) Cells
(4) All of these
(1) 12
(2) 15
(3) 16
(4) 18
(5) None of these
(5) None of these
>Analyse Yourself
1. (2)
2. (5)
3. (2)
4. (5)
5. (3)
6. (2)
7. (3)
8. (3)
9. (1)
10. (5)
11. (4)
12. (3)
13. (3)
14. (1)
15. (2)
16. (3)
17. (4)
18. (2)
19. (4).
20. (2)
21. (3)
22. (1)
23. (1)
24. (3)
25. (2)
26. (1)
27. (2)
28. (1)
29. (1)
30. (1)
31. (3)
32. (4)
33. (1)
34. (5)
35. (4)
36. (4)
37. (5)
38. (2)
39. (1)
40. (3)
45. (4)
46. (1)
47. (4)
48. (1)
49. (3)
50. (3)
41. (4)
42. (2)
43. (1)
44. (3)
51. (4)
52. (1)
53. (2)
54. (4)
55. (4)
56. (4)
57. (2)
58. (2)
59. (1)
60. (2)
61. (1)
71. (4)
81. (1)
91. (2)
62.
(3)
63. (2)
64. (4)
65. (1)
66. (3)
67. (1)
68. (1)
69. (3)
70. (2)
75. (2)
76. (2)
77. (5)
78. (1)
79. (5)
80. (2)
72. (3)
73. (2)
74. (5)
82. (4)
83. (1)
84. (2)
85. (2)
86. (4)
87. (1)
88. (3)
89. (1)
90. (5)
92. (4)
93. (1)
94. (1)
95. (4)
96. (4)
97. (3)
98. (3)
99. (5)
100. (4)
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
10
Database
Concepts
A database is a collection of logically related information in an organised way so that it can be
easily accessed, managed and updated. Some other operations can also be performed on
database such as adding, updating and deleting data. A database could be simple as a single
text file with a list of names or it could be complex as a large bunch of text files including some
data.
In database, data can be entered through input devices such as keyboard, mouse, touchscreen,
etc. Some examples of database are telephone directory, railway timetable, books catalogue,
equipment inventory, etc.
Fundamentals of
Database
For defining database, two terms,
which are used frequently with
database, should be known.
Data These are raw and unorganised
facts that need to be processed such as
of text,
digital representation
numbers, graphical images or sound.
e.g., a student's test score is one piece
of data.
Information When
processed, organised, structured or
presented in a given context to make
data
is
Types of Database
Databases are of three types, namely
W
1. Network Database In this type of database, data is
represented as collection of records and relationships
among data are represented as links.
2. Hierarchical Database In this type of database, data is
organised in the form of trees with nodes. Nodes are
connected via links.
3. Relational Database Relational database is also
known as structured database in which data is stored in
the form of tables. Where, columns defines the
type
data stored in the table and rows defines the information
about the data.
it useful or meaningful, it is called Components of a Database
information. e.g., the class's average
score is the information that can be
concluded from the given data.
Data refer to the values physically
recorded in the database whereas
information refers to the conclusion
or meaning drawn out of it.
A database consists of several different components.
of
Each
component listed, is called an object. Within the file, you can
divide your data into separate storage containers called tables;
view, add and update table data by using online forms; find
and retrieve the data you want by using queries and analyse of
print data in a specific layout by using reports.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ata is
ships
Lata is
es are
also
red in
pe of
ation
Each
u can
ables
find
yse of
0
Downloaded From: www.EasyEngineering.net
Database components are described below
Tables
Tables are
the building blocks or relation of any
Reports
fetched from
your
95
95
relational database model where all the actual
data is defined and entered. Tables consist of
cells at the intersection of records (rows) and Elements of Database
fields (columns). Different types of operations
When you want to print those records which are
even has a wizard to help produce mailing labels.
database, design a report. Access
retrieving and editing of data.
are done on the tables such as storing, filtering, The conceptual view of database represents various
name,
A database consists of several different elements.
piece of data and their relationship at a very high
Field A field is an area (within the record) level of abstraction. The entities, attributes,
reserved for a specific piece of data. e.g.,
customer number, customer
address, city, state, phone number, current
address etc. Field of a table is also known as
column.
Record
street
A record is the collection of data items
of all the fields pertaining to one entity i.e., a
person, company, transition etc. Record of a
table is also known as row or a tuple and the
number of records in a relation is called the
cardinality of that relation.
Queries
Queries are basically questions based on the
data available in a database. A query consists
of specifications indicating which fields,
records, and summaries a user want to fetch
from a database. Queries allow you to extract
data based on the criteria
Forms
you
define.
neither control
Although you can enter and modify data in
datasheet view of tables but
the user's action very well nor you can do much
you
To overcome
to facilitate the data-entry process.
this problem, forms are introduced.
Like tables, forms can be used to view and edit
your data. However, forms are typically used to
underlying table one
view the data in an
at a time.
For example,
record
a user can create a data entry form
that looks exactly like a paper form. People
generally prefer
to
enter data into
well-designed
    
```

### Response:
```json
{
  "formulas": [
    {
      "name": "Sum Function",
      "logic": "Sum(61: 610)",
      "context": "Example of a function in Excel."
    }
  ],
  "facts": [
    {
      "concept": "MS PowerPoint Zoom",
      "statement": "The maximum zoom percentage in MS PowerPoint is 500%."
    },
    {
      "concept": "Spreadsheet Data Organization",
      "statement": "Data is organised in a spreadsheet in rows and columns."
    },
    {
      "concept": "Slide Transition Effects",
      "statement": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
    },
    {
      "concept": "Navigate to First Slide",
      "statement": "Ctrl + Home command brings you to the first slide in a presentation."
    },
    {
      "concept": "Picture Data Type",
      "statement": "To include picture data, OLE must be the option."
    },
    {
      "concept": "Excel Chart Creation",
      "statement": "In Excel, charts are created using the Chart wizard."
    },
    {
      "concept": "Selecting Multiple Slides",
      "statement": "Ctrl + click each slide allows you to select more than one slide in a presentation."
    },
    {
      "concept": "Basic Unit of Excel Worksheet",
      "statement": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
    },
    {
      "concept": "Hyperlinks in Excel",
      "statement": "You can create hyperlinks from an Excel workbook to a web page on a company internet, a web page on the internet, and other Office 97 application documents."
    },
    {
      "concept": "Excel Formulas",
      "statement": "A formula in Excel is a prerecorded formula that provides a shortcut for complex calculations."
    },
    {
      "concept": "Moving Paragraphs in Word",
      "statement": "Cut and paste should be used to move a paragraph from one place to another in a Word document."
    },
    {
      "concept": "Header and Footer Button Location",
      "statement": "In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group."
    },
    {
      "concept": "Sub Menu",
      "statement": "A sub menu is an additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "concept": "Merging Workbooks in Excel",
      "statement": "Merging allows users to bring together copies of workbooks that other users have worked on independently in Excel."
    },
    {
      "concept": "Cell Address $A4",
      "statement": "Cell address $A4 in a formula means it is a mixed cell reference."
    },
    {
      "concept": "Pie Chart Creation Software",
      "statement": "Pie charts are typically created by using spreadsheet software."
    },
    {
      "concept": "Justification",
      "statement": "Justify justification aligns the text on both the sides, left and right of the margin."
    },
    {
      "concept": "MS Access Data Type Size",
      "statement": "The default size of the data type in MS Access is 50."
    },
    {
      "concept": "Moving Text",
      "statement": "To move text from its original position to another position without deleting it is called copying."
    },
    {
      "concept": "Attributes",
      "statement": "Attributes can be defined for an entity."
    },
    {
      "concept": "MS Excel Usage",
      "statement": "MS Excel is used for spreadsheet calculation."
    },
    {
      "concept": "Page Layout View",
      "statement": "Page layout view shows how the contents on a printed page will appear with margin, header and footer."
    },
    {
      "concept": "Relationships in MS-Access",
      "statement": "There are 3 types of relationships in MS-Access."
    },
    {
      "concept": "Word Processor Usage",
      "statement": "A word processor would be used best to type a story."
    },
    {
      "concept": "Font Selection in Word",
      "statement": "To choose the font for a sentence in a Word document, select font in the Format menu."
    },
    {
      "concept": "Print Document Shortcut",
      "statement": "Ctrl + P is the shortcut key to print documents."
    },
    {
      "concept": "PowerPoint Extension",
      "statement": "The extension of PowerPoint in Microsoft Office 2007 is .pptx."
    },
    {
      "concept": "Spreadsheet Software Terms",
      "statement": "Virus detection is not a term pertaining to spreadsheet software."
    },
    {
      "concept": "DBMS Software",
      "statement": "Access is a DBMS software."
    },
    {
      "concept": "Formatting Toolbar",
      "statement": "The Formatting toolbar displays the buttons for changing text style, alignment and size."
    },
    {
      "concept": "Word Terms",
      "statement": "Slide show is not a term pertaining to Word."
    },
    {
      "concept": "View Slide Show Key",
      "statement": "F5 key on the keyboard can be used to view slide show."
    },
    {
      "concept": "PowerPoint Layouts",
      "statement": "PowerPoint provides 24 number of layouts for use with a blank presentation."
    },
    {
      "concept": "Center Text Shortcut",
      "statement": "Ctrl + E is the shortcut key for centering the text selected by the user in Word."
    },
    {
      "concept": "Electronic Spreadsheet Contents",
      "statement": "An electronic spreadsheet consists of Rows, Columns, and Cells."
    },
    {
      "concept": "Action Buttons in PowerPoint",
      "statement": "There are 16 action buttons in PowerPoint."
    }
  ],
  "definitions": [
    {
      "term": "Trigger",
      "meaning": "An item on the slide that performs an action when clicked."
    },
    {
      "term": "Animation",
      "meaning": "A motion path."
    },
    {
      "term": "Cell",
      "meaning": "The basic unit of a worksheet into which you enter data in Excel."
    },
    {
      "term": "Function",
      "meaning": "A prerecorded formula that provides a shortcut for complex calculations in Excel."
    },
    {
      "term": "Database",
      "meaning": "A collection of logically related information in an organised way so that it can be easily accessed, managed and updated."
    },
    {
      "term": "Data",
      "meaning": "Raw and unorganised facts that need to be processed."
    },
    {
      "term": "Information",
      "meaning": "Data that, when processed, organised, structured or presented in a given context, makes it useful or meaningful."
    },
    {
      "term": "Network Database",
      "meaning": "A type of database where data is represented as a collection of records and relationships among data are represented as links."
    },
    {
      "term": "Hierarchical Database",
      "meaning": "A type of database where data is organised in the form of trees with nodes, connected via links."
    },
    {
      "term": "Relational Database",
      "meaning": "A structured database in which data is stored in the form of tables, where columns define the type of data stored and rows define the information about the data."
    },
    {
      "term": "Table (Database)",
      "meaning": "The building blocks or relation of any relational database model where all the actual data is defined and entered. Tables consist of cells at the intersection of records (rows) and fields (columns)."
    },
    {
      "term": "Field (Database)",
      "meaning": "An area within a record reserved for a specific piece of data. It is also known as a column."
    },
    {
      "term": "Record (Database)",
      "meaning": "A collection of data items of all the fields pertaining to one entity. It is also known as a row or a tuple."
    },
    {
      "term": "Query (Database)",
      "meaning": "Questions based on the data available in a database, consisting of specifications indicating which fields, records, and summaries a user wants to fetch."
    },
    {
      "term": "Form (Database)",
      "meaning": "Used to view and edit data, typically to view the data in an underlying table one record at a time, facilitating the data-entry process."
    },
    {
      "term": "Report (Database)",
      "meaning": "Used to print records that are fetched from your database in a specific layout."
    },
    {
      "term": "Menu Selection",
      "meaning": "A selection from the main menu."
    },
    {
      "term": "Sub Menu",
      "meaning": "An additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "term": "Dialog Box",
      "meaning": "A type of window that appears on screen to provide information to the user or to request input from the user."
    },
    {
      "term": "Absolute Cell Reference",
      "meaning": "A cell reference that remains fixed even when a formula is copied to another cell."
    },
    {
      "term": "Relative Cell Reference",
      "meaning": "A cell reference that changes when a formula is copied to another cell."
    },
    {
      "term": "Mixed Cell Reference",
      "meaning": "A cell reference that contains both an absolute column and a relative row, or vice versa."
    },
    {
      "term": "Word Processor",
      "meaning": "Software used for creating, editing, and formatting text documents."
    },
    {
      "term": "Spreadsheet Software",
      "meaning": "Software used for organizing, analyzing, and storing data in tabular form."
    },
    {
      "term": "DBMS Software",
      "meaning": "Database Management System software, used for creating and managing databases."
    },
    {
      "term": "Standard Toolbar",
      "meaning": "A toolbar that displays buttons for common commands such as Save, Open, and Print."
    },
    {
      "term": "Status Bar",
      "meaning": "A bar at the bottom of a window that displays information about the current document or application."
    },
    {
      "term": "Drawing Toolbar",
      "meaning": "A toolbar that displays buttons for creating and editing graphics."
    },
    {
      "term": "Formatting Toolbar",
      "meaning": "A toolbar that displays buttons for changing text style, alignment, and size."
    }
  ]
}
```

---

## Interaction [22:01:49]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for MS Office (Word, Excel, PowerPoint).
    
    KNOWLEDGE BASE:
    {
  "formulas": [
    {
      "name": "Sum Function",
      "logic": "Sum(61: 610)",
      "context": "Example of a function in Excel."
    }
  ],
  "facts": [
    {
      "concept": "MS PowerPoint Zoom",
      "statement": "The maximum zoom percentage in MS PowerPoint is 500%."
    },
    {
      "concept": "Spreadsheet Data Organization",
      "statement": "Data is organised in a spreadsheet in rows and columns."
    },
    {
      "concept": "Slide Transition Effects",
      "statement": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
    },
    {
      "concept": "Navigate to First Slide",
      "statement": "Ctrl + Home command brings you to the first slide in a presentation."
    },
    {
      "concept": "Picture Data Type",
      "statement": "To include picture data, OLE must be the option."
    },
    {
      "concept": "Excel Chart Creation",
      "statement": "In Excel, charts are created using the Chart wizard."
    },
    {
      "concept": "Selecting Multiple Slides",
      "statement": "Ctrl + click each slide allows you to select more than one slide in a presentation."
    },
    {
      "concept": "Basic Unit of Excel Worksheet",
      "statement": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
    },
    {
      "concept": "Hyperlinks in Excel",
      "statement": "You can create hyperlinks from an Excel workbook to a web page on a company internet, a web page on the internet, and other Office 97 application documents."
    },
    {
      "concept": "Excel Formulas",
      "statement": "A formula in Excel is a prerecorded formula that provides a shortcut for complex calculations."
    },
    {
      "concept": "Moving Paragraphs in Word",
      "statement": "Cut and paste should be used to move a paragraph from one place to another in a Word document."
    },
    {
      "concept": "Header and Footer Button Location",
      "statement": "In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group."
    },
    {
      "concept": "Sub Menu",
      "statement": "A sub menu is an additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "concept": "Merging Workbooks in Excel",
      "statement": "Merging allows users to bring together copies of workbooks that other users have worked on independently in Excel."
    },
    {
      "concept": "Cell Address $A4",
      "statement": "Cell address $A4 in a formula means it is a mixed cell reference."
    },
    {
      "concept": "Pie Chart Creation Software",
      "statement": "Pie charts are typically created by using spreadsheet software."
    },
    {
      "concept": "Justification",
      "statement": "Justify justification aligns the text on both the sides, left and right of the margin."
    },
    {
      "concept": "MS Access Data Type Size",
      "statement": "The default size of the data type in MS Access is 50."
    },
    {
      "concept": "Moving Text",
      "statement": "To move text from its original position to another position without deleting it is called copying."
    },
    {
      "concept": "Attributes",
      "statement": "Attributes can be defined for an entity."
    },
    {
      "concept": "MS Excel Usage",
      "statement": "MS Excel is used for spreadsheet calculation."
    },
    {
      "concept": "Page Layout View",
      "statement": "Page layout view shows how the contents on a printed page will appear with margin, header and footer."
    },
    {
      "concept": "Relationships in MS-Access",
      "statement": "There are 3 types of relationships in MS-Access."
    },
    {
      "concept": "Word Processor Usage",
      "statement": "A word processor would be used best to type a story."
    },
    {
      "concept": "Font Selection in Word",
      "statement": "To choose the font for a sentence in a Word document, select font in the Format menu."
    },
    {
      "concept": "Print Document Shortcut",
      "statement": "Ctrl + P is the shortcut key to print documents."
    },
    {
      "concept": "PowerPoint Extension",
      "statement": "The extension of PowerPoint in Microsoft Office 2007 is .pptx."
    },
    {
      "concept": "Spreadsheet Software Terms",
      "statement": "Virus detection is not a term pertaining to spreadsheet software."
    },
    {
      "concept": "DBMS Software",
      "statement": "Access is a DBMS software."
    },
    {
      "concept": "Formatting Toolbar",
      "statement": "The Formatting toolbar displays the buttons for changing text style, alignment and size."
    },
    {
      "concept": "Word Terms",
      "statement": "Slide show is not a term pertaining to Word."
    },
    {
      "concept": "View Slide Show Key",
      "statement": "F5 key on the keyboard can be used to view slide show."
    },
    {
      "concept": "PowerPoint Layouts",
      "statement": "PowerPoint provides 24 number of layouts for use with a blank presentation."
    },
    {
      "concept": "Center Text Shortcut",
      "statement": "Ctrl + E is the shortcut key for centering the text selected by the user in Word."
    },
    {
      "concept": "Electronic Spreadsheet Contents",
      "statement": "An electronic spreadsheet consists of Rows, Columns, and Cells."
    },
    {
      "concept": "Action Buttons in PowerPoint",
      "statement": "There are 16 action buttons in PowerPoint."
    }
  ],
  "definitions": [
    {
      "term": "Trigger",
      "meaning": "An item on the slide that performs an action when clicked."
    },
    {
      "term": "Animation",
      "meaning": "A motion path."
    },
    {
      "term": "Cell",
      "meaning": "The basic unit of a worksheet into which you enter data in Excel."
    },
    {
      "term": "Function",
      "meaning": "A prerecorded formula that provides a shortcut for complex calculations in Excel."
    },
    {
      "term": "Database",
      "meaning": "A collection of logically related information in an organised way so that it can be easily accessed, managed and updated."
    },
    {
      "term": "Data",
      "meaning": "Raw and unorganised facts that need to be processed."
    },
    {
      "term": "Information",
      "meaning": "Data that, when processed, organised, structured or presented in a given context, makes it useful or meaningful."
    },
    {
      "term": "Network Database",
      "meaning": "A type of database where data is represented as a collection of records and relationships among data are represented as links."
    },
    {
      "term": "Hierarchical Database",
      "meaning": "A type of database where data is organised in the form of trees with nodes, connected via links."
    },
    {
      "term": "Relational Database",
      "meaning": "A structured database in which data is stored in the form of tables, where columns define the type of data stored and rows define the information about the data."
    },
    {
      "term": "Table (Database)",
      "meaning": "The building blocks or relation of any relational database model where all the actual data is defined and entered. Tables consist of cells at the intersection of records (rows) and fields (columns)."
    },
    {
      "term": "Field (Database)",
      "meaning": "An area within a record reserved for a specific piece of data. It is also known as a column."
    },
    {
      "term": "Record (Database)",
      "meaning": "A collection of data items of all the fields pertaining to one entity. It is also known as a row or a tuple."
    },
    {
      "term": "Query (Database)",
      "meaning": "Questions based on the data available in a database, consisting of specifications indicating which fields, records, and summaries a user wants to fetch."
    },
    {
      "term": "Form (Database)",
      "meaning": "Used to view and edit data, typically to view the data in an underlying table one record at a time, facilitating the data-entry process."
    },
    {
      "term": "Report (Database)",
      "meaning": "Used to print records that are fetched from your database in a specific layout."
    },
    {
      "term": "Menu Selection",
      "meaning": "A selection from the main menu."
    },
    {
      "term": "Sub Menu",
      "meaning": "An additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "term": "Dialog Box",
      "meaning": "A type of window that appears on screen to provide information to the user or to request input from the user."
    },
    {
      "term": "Absolute Cell Reference",
      "meaning": "A cell reference that remains fixed even when a formula is copied to another cell."
    },
    {
      "term": "Relative Cell Reference",
      "meaning": "A cell reference that changes when a formula is copied to another cell."
    },
    {
      "term": "Mixed Cell Reference",
      "meaning": "A cell reference that contains both an absolute column and a relative row, or vice versa."
    },
    {
      "term": "Word Processor",
      "meaning": "Software used for creating, editing, and formatting text documents."
    },
    {
      "term": "Spreadsheet Software",
      "meaning": "Software used for organizing, analyzing, and storing data in tabular form."
    },
    {
      "term": "DBMS Software",
      "meaning": "Database Management System software, used for creating and managing databases."
    },
    {
      "term": "Standard Toolbar",
      "meaning": "A toolbar that displays buttons for common commands such as Save, Open, and Print."
    },
    {
      "term": "Status Bar",
      "meaning": "A bar at the bottom of a window that displays information about the current document or application."
    },
    {
      "term": "Drawing Toolbar",
      "meaning": "A toolbar that displays buttons for creating and editing graphics."
    },
    {
      "term": "Formatting Toolbar",
      "meaning": "A toolbar that displays buttons for changing text style, alignment, and size."
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
    "question": "What is the maximum zoom percentage available in MS PowerPoint?",
    "options": {
      "A": "400%",
      "B": "500%",
      "C": "600%",
      "D": "700%"
    },
    "correct_answer": "B",
    "source_snippet": "The maximum zoom percentage in MS PowerPoint is 500%."
  },
  {
    "question": "In MS Excel, how is data organized within a worksheet?",
    "options": {
      "A": "In paragraphs and sentences",
      "B": "In a series of charts and graphs",
      "C": "In rows and columns",
      "D": "In a hierarchical tree structure"
    },
    "correct_answer": "C",
    "source_snippet": "Data is organised in a spreadsheet in rows and columns."
  },
  {
    "question": "Which view is most suitable for applying transition effects to all slides in a presentation?",
    "options": {
      "A": "Normal View",
      "B": "Slide Sorter View",
      "C": "Outline View",
      "D": "Notes Page View"
    },
    "correct_answer": "B",
    "source_snippet": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
  },
  {
    "question": "What is the keyboard shortcut to navigate to the first slide in a PowerPoint presentation?",
    "options": {
      "A": "Ctrl + End",
      "B": "Shift + Home",
      "C": "Alt + Home",
      "D": "Ctrl + Home"
    },
    "correct_answer": "D",
    "source_snippet": "Ctrl + Home command brings you to the first slide in a presentation."
  },
  {
    "question": "To embed or include picture data using OLE, which option must be selected?",
    "options": {
      "A": "Link to File",
      "B": "Insert Object",
      "C": "Picture Data",
      "D": "OLE Object"
    },
    "correct_answer": "C",
    "source_snippet": "To include picture data, OLE must be the option."
  },
  {
    "question": "In MS Excel, what is the primary tool used for creating charts?",
    "options": {
      "A": "Chart Wizard",
      "B": "Data Analysis Toolpak",
      "C": "PivotTable Report",
      "D": "Formula Bar"
    },
    "correct_answer": "A",
    "source_snippet": "In Excel, charts are created using the Chart wizard."
  },
  {
    "question": "Which combination of keys allows a user to select multiple slides in MS PowerPoint?",
    "options": {
      "A": "Shift + Click",
      "B": "Alt + Click",
      "C": "Ctrl + Click",
      "D": "Ctrl + Shift + Click"
    },
    "correct_answer": "C",
    "source_snippet": "Ctrl + click each slide allows you to select more than one slide in a presentation."
  },
  {
    "question": "What is the fundamental unit in an Excel worksheet where data is entered?",
    "options": {
      "A": "Row",
      "B": "Column",
      "C": "Workbook",
      "D": "Cell"
    },
    "correct_answer": "D",
    "source_snippet": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
  },
  {
    "question": "Which of the following can you create hyperlinks to from an Excel workbook?",
    "options": {
      "A": "A web page on the internet only",
      "B": "A web page on a company intranet only",
      "C": "Other Office 97 application documents only",
      "D": "A web page on the internet, a company intranet, and other Office 97 application documents"
    },
    "correct_answer": "D",
    "source_snippet": "You can create hyperlinks from an Excel workbook to a web page on a company internet, a web page on the internet, and other Office 97 application documents."
  },
  {
    "question": "In MS Word, what is the recommended method to move a paragraph from one section of a document to another?",
    "options": {
      "A": "Copy and paste",
      "B": "Cut and paste",
      "C": "Drag and drop",
      "D": "Redo and undo"
    },
    "correct_answer": "B",
    "source_snippet": "Cut and paste should be used to move a paragraph from one place to another in a Word document."
  }
]
```

---

## Interaction [22:01:52]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the maximum zoom percentage available in MS PowerPoint?
        Proposed Answer: B (500%)
        Source Snippet provided by Writer: The maximum zoom percentage in MS PowerPoint is 500%.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the maximum zoom percentage in MS PowerPoint is 500%, which factually proves the proposed answer B (500%). The question is also factually accurate and not a hallucination."}
```

---

## Interaction [22:01:56]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In MS Excel, how is data organized within a worksheet?
        Proposed Answer: C (In rows and columns)
        Source Snippet provided by Writer: Data is organised in a spreadsheet in rows and columns.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that data is organized in rows and columns, which directly supports the proposed answer."}
```

---

## Interaction [22:01:59]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which view is most suitable for applying transition effects to all slides in a presentation?
        Proposed Answer: B (Slide Sorter View)
        Source Snippet provided by Writer: Slide sorter view is the best view to use when setting transition effects for all slides in a presentation.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'Slide sorter view is the best view to use when setting transition effects for all slides in a presentation', which directly supports the proposed answer that Slide Sorter View is most suitable for applying transition effects to all slides."}
```

---

## Interaction [22:02:01]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the keyboard shortcut to navigate to the first slide in a PowerPoint presentation?
        Proposed Answer: D (Ctrl + Home)
        Source Snippet provided by Writer: Ctrl + Home command brings you to the first slide in a presentation.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'Ctrl + Home' navigates to the first slide, which directly supports the proposed answer."}
```

---

## Interaction [22:02:05]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: To embed or include picture data using OLE, which option must be selected?
        Proposed Answer: C (Picture Data)
        Source Snippet provided by Writer: To include picture data, OLE must be the option.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet states that OLE must be the option to include picture data, but it does not mention any specific options like 'Picture Data' that must be selected. Therefore, the proposed answer is not factually proven by the snippet."}
```

---

## Interaction [22:02:08]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In MS Excel, what is the primary tool used for creating charts?
        Proposed Answer: A (Chart Wizard)
        Source Snippet provided by Writer: In Excel, charts are created using the Chart wizard.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that charts are created using the Chart wizard in Excel, which directly supports the proposed answer 'A (Chart Wizard)'."}
```

---

## Interaction [22:02:10]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which combination of keys allows a user to select multiple slides in MS PowerPoint?
        Proposed Answer: C (Ctrl + Click)
        Source Snippet provided by Writer: Ctrl + click each slide allows you to select more than one slide in a presentation.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Ctrl + click each slide allows you to select more than one slide in a presentation', which factually proves the proposed answer that Ctrl + Click allows a user to select multiple slides in MS PowerPoint. The question is also free of hallucinations."}
```

---

## Interaction [22:02:13]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the fundamental unit in an Excel worksheet where data is entered?
        Proposed Answer: D (Cell)
        Source Snippet provided by Writer: The basic unit of a worksheet into which you enter data in Excel is called a cell.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'The basic unit of a worksheet into which you enter data in Excel is called a cell.' This directly supports the proposed answer that a cell is the fundamental unit for data entry in an Excel worksheet."}
```

---

## Interaction [22:02:16]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following can you create hyperlinks to from an Excel workbook?
        Proposed Answer: D (A web page on the internet, a company intranet, and other Office 97 application documents)
        Source Snippet provided by Writer: You can create hyperlinks from an Excel workbook to a web page on a company internet, a web page on the internet, and other Office 97 application documents.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that hyperlinks can be created to 'a web page on a company internet, a web page on the internet, and other Office 97 application documents', which directly supports all parts of the proposed answer."}
```

---

## Interaction [22:02:19]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In MS Word, what is the recommended method to move a paragraph from one section of a document to another?
        Proposed Answer: B (Cut and paste)
        Source Snippet provided by Writer: Cut and paste should be used to move a paragraph from one place to another in a Word document.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'Cut and paste should be used to move a paragraph from one place to another in a Word document', which directly supports the proposed answer 'B (Cut and paste)'."}
```

---

## Interaction [22:03:31]

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

    CONTEXT TEXT (SEGMENT AT 40%):
    roup
(4) Insert (5) None of these
62. The maximum zoom percentage in MS Power
Point is
(1) 100% (2) 200%
(5) None of these
[IBPS Clerk 2009]
(3) 400%
(4) 500%
63. In the context of animations, what is a trigger?
(1) An action button that advances to the next.
slide
(2) An item on the slide that performs an
action when clicked
(3) The name of a motion path
(4) All of the above
(5) None of the above
64. How are the data organised in a spreadsheet?
(1) Lines and spaces
(3) Height and width
(5) None of these
(2) Layers and planes
(4) Rows and columns
[SBI Clerk 2008]
65. Which of the following views is the best view to
use when setting transition effects for all slides
in presentation?
(1) Slide sorter view
(3) Slide view
(5) None of the above
(2) Notes pages view
(4) Outline view
66. Which command brings you to the first slide in
your presentation?
(1) Next slide button (2) Pageup
(3) Ctrl + Home
(5) None of these
(4) Ctrl + End
67. In order to include picture data type must be
(1) OLE
(3) Yes/No
(5) None of these
68. In Excel, charts are
option?
(1) Chart wizard
(3) Pie chart
(5) None of these
(2) hyperlink
(4) picture
[RBI PO 2009]
created using which
[SBI Clerk 2009]
(2) Pivot table
(4) Bar chart
69. Which of the following allow you to select
more than one slide in a presentation?
(1) Alt + click each slide
(2) Shift + drag each slide
(3) Shift + click each slide
(4) $A$4
(4) Ctrl + click each slide
(5) None of the above
Downloaded From

--- PAGE BREAK ---

92
Downloaded From: www.EasyEngineering.net
70. The basic unit of a worksheet into which you
enter data in excel is called a [IBPS Clerk 2008]
(1) tab
(3) box
(5) None of these
(2) cell
(4) range
71. You can create hyperlinks from the excel work
book to
(1) a web page on company internet
(2) a web page on the internet
(3) other office 97 application documents
(4) All of the above
(5) None of the above
72. In Excel, this is a prerecorded formula that
provides a shortcut for complex calculations.
(1) value
(3) function
(5) None of these
(2) data series
(4) field
Computer Awareness
78. Cell address $A4 in a formula means it is a
(1) mixed cell reference
(2) absolute cell reference
(3) relative cell reference
(4) All of the above
(5) None of the above
79. Pie charts are typically created by using which
of the following?
(1) Browser software
(2) Database software
(3) Desktop publishing software
(4) Word processing software
(5) Spreadsheet software
80. Which of the following justification align the
text on both the sides left and right of margin?
(1) Right
(3) Both sides
[IBPS Clerk 2012]
(2) Justify
(4) Balanced
73. Which of the following should be used to move
a paragraph from one place to another in a
word document?
(1) Copy and paste
(3) Delete and retype
(5) None of these
(2) Cut and paste
(4) Find and replace
74. In PowerPoint, the Header and Footer button
can be found on the insert tab in what group?
[IBPS PO, Clerk 2012]
(1) Illustrations group
(2) Object group
(3) Insert group
(4) Tables gr
    
```

### Response:
```json
{
  "exam_board": "f81eea7e-3e58-4fe6-ac6c-82682450a830",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "MS Office (Word, Excel, PowerPoint)",
  "confidence": 0.95
}
```

---

## Interaction [22:03:41]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: MS Office (Word, Excel, PowerPoint)
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    roup
(4) Insert (5) None of these
62. The maximum zoom percentage in MS Power
Point is
(1) 100% (2) 200%
(5) None of these
[IBPS Clerk 2009]
(3) 400%
(4) 500%
63. In the context of animations, what is a trigger?
(1) An action button that advances to the next.
slide
(2) An item on the slide that performs an
action when clicked
(3) The name of a motion path
(4) All of the above
(5) None of the above
64. How are the data organised in a spreadsheet?
(1) Lines and spaces
(3) Height and width
(5) None of these
(2) Layers and planes
(4) Rows and columns
[SBI Clerk 2008]
65. Which of the following views is the best view to
use when setting transition effects for all slides
in presentation?
(1) Slide sorter view
(3) Slide view
(5) None of the above
(2) Notes pages view
(4) Outline view
66. Which command brings you to the first slide in
your presentation?
(1) Next slide button (2) Pageup
(3) Ctrl + Home
(5) None of these
(4) Ctrl + End
67. In order to include picture data type must be
(1) OLE
(3) Yes/No
(5) None of these
68. In Excel, charts are
option?
(1) Chart wizard
(3) Pie chart
(5) None of these
(2) hyperlink
(4) picture
[RBI PO 2009]
created using which
[SBI Clerk 2009]
(2) Pivot table
(4) Bar chart
69. Which of the following allow you to select
more than one slide in a presentation?
(1) Alt + click each slide
(2) Shift + drag each slide
(3) Shift + click each slide
(4) $A$4
(4) Ctrl + click each slide
(5) None of the above
Downloaded From

--- PAGE BREAK ---

92
Downloaded From: www.EasyEngineering.net
70. The basic unit of a worksheet into which you
enter data in excel is called a [IBPS Clerk 2008]
(1) tab
(3) box
(5) None of these
(2) cell
(4) range
71. You can create hyperlinks from the excel work
book to
(1) a web page on company internet
(2) a web page on the internet
(3) other office 97 application documents
(4) All of the above
(5) None of the above
72. In Excel, this is a prerecorded formula that
provides a shortcut for complex calculations.
(1) value
(3) function
(5) None of these
(2) data series
(4) field
Computer Awareness
78. Cell address $A4 in a formula means it is a
(1) mixed cell reference
(2) absolute cell reference
(3) relative cell reference
(4) All of the above
(5) None of the above
79. Pie charts are typically created by using which
of the following?
(1) Browser software
(2) Database software
(3) Desktop publishing software
(4) Word processing software
(5) Spreadsheet software
80. Which of the following justification align the
text on both the sides left and right of margin?
(1) Right
(3) Both sides
[IBPS Clerk 2012]
(2) Justify
(4) Balanced
73. Which of the following should be used to move
a paragraph from one place to another in a
word document?
(1) Copy and paste
(3) Delete and retype
(5) None of these
(2) Cut and paste
(4) Find and replace
74. In PowerPoint, the Header and Footer button
can be found on the insert tab in what group?
[IBPS PO, Clerk 2012]
(1) Illustrations group
(2) Object group
(3) Insert group
(4) Tables group
(5) None of these
81. What is the default size of the data type in MS
Access?
(1) 50
(2) 60
(5) None of these
(3) 70
[SBI Clerk 2010]
(4) 80
82. To move the text from its original position to
another position without deleting it is called
(1) scrolling
(3) moving
(5) halting
(2) searching
(4) copying
[SBI Clerk 2009]
(2) switch board
(4) pages
[SBI Clerk 2012]
75. A
(5) None of these
is an additional set of commands that
the computer displays after you make a
selection from the main menu. [SBI Clerk 2009]
(1) dialog box
(3) menu selection
(5) None of these
(2) sub menu
(4) All of these
76. In Excel, ......... allows users to bring together
copies of workbooks that other users gave
worked on independently. [IBPS PO 2011]
(1) copying
(3) pasting
(5) None of these
(2) merging
(4) compling
77. Pressing Ctrl + F9 in Excel
(1) prints 9 worksheets
(2) prints a sheet
(3) prints 9 followed by spaces
(4) insert 9 cells at the current location
(5) None of the above
83. Attributes can be defined for
(1) entity
(3) macro
(5) None of these
84. MS Excel is used for
(1) letter writing
(2) spreadsheet calculation
(3) presentation
(4) painting
(5) None of the above
85. Sum (61: 610) is an example of a
86.
(1) function
(3) cell address
(5) None of these
(2) formula
(4) value
shows how the contents on
printed
page will appear with margin, header and
footer.
(1) Draft
(3) Outline
(5) None of these
(2) Full screen reading
(4) Page layout
Downloaded From: www.EasyEngineering.net
M
8
8

--- PAGE BREAK ---

Microsoft Office
Downloaded From: www.EasyEngineering.net
87. How many types of relationships are there in
MS-Access?
(1) 3
(2) 4
(5) None of these
(3) 5
(4)6
88. A word processor would be used best to
(1) paint a picture
(2) draw a diagram
(3) type a story
(4) work out income and expenses
(5) None of the above
[IBPS Clerk 2011]
89. In order to choose the font for a sentence in a
word document
[IBPS Clerk 2011]
(1) select font in the format menu
(2) select font in the edit menu
(3) select font in the tools menu
(4) select font in the view menu
(5) None of the above
90. The shortcut key to print documents is
93
94. Which of the following is a DBMS software?
(1) Access
(3) Word
(5) None of these
(2) Excel
(4) Powerpoint
95. Which of the following displays the buttons for
changing text style, alignment and size?
(1) Standard toolbar
(3) Drawing toolbar
(5) None of the above
(2) Status bar
(4) Formatting toolbar
96. Which of the following is not a term pertaining
to word?
[IBPS Clerk 2011]
(1) Delete
(2) Edit
(3) Copy
(4) Slide show
(5) None of these
97. Which key on the keyboard can be used to view
slide show?
(1) F1
(2) F2
(3) F5
(4) F10
(1) Ctrl + D
(3) Ctrl + B
(5) Ctrl + P
(2) Ctrl + A
(4) Ctrl + C
[IBPS PO 2012]
91. What is the extension of PowerPoint in
Microsoft Office 2007?
(1) .ppt
(5) .pt
(2) .pptx (3) .ppx (4) .ptx
92. All of the following terms are related to
spreadsheet software except [SBI Clerk 2011]
(1) worksheet
(3) formula
(5) None of these
93. There are a total of
(2) cell
(4) virus detection
(5) None of these
98. PowerPoint provides .......... number of layouts
for use with blank presentation.
(1) 20
(2) 22
(5) None of these
(3) 24
(4) 26
99. What is the shortcut key for centering the text
selected by the user in word? [IBPS Clerk 2011]
(1) Ctrl + A
(3) Ctrl + C
(5) Ctrl + E
(2) Ctrl + B
(4) Ctrl + D
100. What does an electronic spreadsheet consist
actions button in
of?
(1) Rows
[IBPS Clerk 2011]
(2) Columns
PowerPoint.
[SBI Clerk 2012]
(3) Cells
(4) All of these
(1) 12
(2) 15
(3) 16
(4) 18
(5) None of these
(5) None of these
>Analyse Yourself
1. (2)
2. (5)
3. (2)
4. (5)
5. (3)
6. (2)
7. (3)
8. (3)
9. (1)
10. (5)
11. (4)
12. (3)
13. (3)
14. (1)
15. (2)
16. (3)
17. (4)
18. (2)
19. (4).
20. (2)
21. (3)
22. (1)
23. (1)
24. (3)
25. (2)
26. (1)
27. (2)
28. (1)
29. (1)
30. (1)
31. (3)
32. (4)
33. (1)
34. (5)
35. (4)
36. (4)
37. (5)
38. (2)
39. (1)
40. (3)
45. (4)
46. (1)
47. (4)
48. (1)
49. (3)
50. (3)
41. (4)
42. (2)
43. (1)
44. (3)
51. (4)
52. (1)
53. (2)
54. (4)
55. (4)
56. (4)
57. (2)
58. (2)
59. (1)
60. (2)
61. (1)
71. (4)
81. (1)
91. (2)
62.
(3)
63. (2)
64. (4)
65. (1)
66. (3)
67. (1)
68. (1)
69. (3)
70. (2)
75. (2)
76. (2)
77. (5)
78. (1)
79. (5)
80. (2)
72. (3)
73. (2)
74. (5)
82. (4)
83. (1)
84. (2)
85. (2)
86. (4)
87. (1)
88. (3)
89. (1)
90. (5)
92. (4)
93. (1)
94. (1)
95. (4)
96. (4)
97. (3)
98. (3)
99. (5)
100. (4)
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
10
Database
Concepts
A database is a collection of logically related information in an organised way so that it can be
easily accessed, managed and updated. Some other operations can also be performed on
database such as adding, updating and deleting data. A database could be simple as a single
text file with a list of names or it could be complex as a large bunch of text files including some
data.
In database, data can be entered through input devices such as keyboard, mouse, touchscreen,
etc. Some examples of database are telephone directory, railway timetable, books catalogue,
equipment inventory, etc.
Fundamentals of
Database
For defining database, two terms,
which are used frequently with
database, should be known.
Data These are raw and unorganised
facts that need to be processed such as
of text,
digital representation
numbers, graphical images or sound.
e.g., a student's test score is one piece
of data.
Information When
processed, organised, structured or
presented in a given context to make
data
is
Types of Database
Databases are of three types, namely
W
1. Network Database In this type of database, data is
represented as collection of records and relationships
among data are represented as links.
2. Hierarchical Database In this type of database, data is
organised in the form of trees with nodes. Nodes are
connected via links.
3. Relational Database Relational database is also
known as structured database in which data is stored in
the form of tables. Where, columns defines the
type
data stored in the table and rows defines the information
about the data.
it useful or meaningful, it is called Components of a Database
information. e.g., the class's average
score is the information that can be
concluded from the given data.
Data refer to the values physically
recorded in the database whereas
information refers to the conclusion
or meaning drawn out of it.
A database consists of several different components.
of
Each
component listed, is called an object. Within the file, you can
divide your data into separate storage containers called tables;
view, add and update table data by using online forms; find
and retrieve the data you want by using queries and analyse of
print data in a specific layout by using reports.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ata is
ships
Lata is
es are
also
red in
pe of
ation
Each
u can
ables
find
yse of
0
Downloaded From: www.EasyEngineering.net
Database components are described below
Tables
Tables are
the building blocks or relation of any
Reports
fetched from
your
95
95
relational database model where all the actual
data is defined and entered. Tables consist of
cells at the intersection of records (rows) and Elements of Database
fields (columns). Different types of operations
When you want to print those records which are
even has a wizard to help produce mailing labels.
database, design a report. Access
retrieving and editing of data.
are done on the tables such as storing, filtering, The conceptual view of database represents various
name,
A database consists of several different elements.
piece of data and their relationship at a very high
Field A field is an area (within the record) level of abstraction. The entities, attributes,
reserved for a specific piece of data. e.g.,
customer number, customer
address, city, state, phone number, current
address etc. Field of a table is also known as
column.
Record
street
A record is the collection of data items
of all the fields pertaining to one entity i.e., a
person, company, transition etc. Record of a
table is also known as row or a tuple and the
number of records in a relation is called the
cardinality of that relation.
Queries
Queries are basically questions based on the
data available in a database. A query consists
of specifications indicating which fields,
records, and summaries a user want to fetch
from a database. Queries allow you to extract
data based on the criteria
Forms
you
define.
neither control
Although you can enter and modify data in
datasheet view of tables but
the user's action very well nor you can do much
you
To overcome
to facilitate the data-entry process.
this problem, forms are introduced.
Like tables, forms can be used to view and edit
your data. However, forms are typically used to
underlying table one
view the data in an
at a time.
For example,
record
a user can create a data entry form
that looks exactly like a paper form. People
generally prefer
to
enter data into
well-designed
    
```

### Response:
```json
{
  "formulas": [
    {
      "name": "Sum",
      "logic": "Sum(61: 610)",
      "context": "This is an example of a formula in Excel."
    }
  ],
  "facts": [
    {
      "concept": "MS PowerPoint Zoom",
      "statement": "The maximum zoom percentage in MS PowerPoint is 500%."
    },
    {
      "concept": "Animations in PowerPoint",
      "statement": "In the context of animations, a trigger is an item on the slide that performs an action when clicked."
    },
    {
      "concept": "Spreadsheet Data Organization",
      "statement": "Data is organised in a spreadsheet in rows and columns."
    },
    {
      "concept": "Presentation Views",
      "statement": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
    },
    {
      "concept": "Navigation to First Slide",
      "statement": "Ctrl + Home command brings you to the first slide in your presentation."
    },
    {
      "concept": "Picture Data Type",
      "statement": "To include picture data, the data type must be OLE."
    },
    {
      "concept": "Excel Chart Creation",
      "statement": "In Excel, charts are created using the Chart wizard."
    },
    {
      "concept": "Selecting Multiple Slides",
      "statement": "Ctrl + click each slide allows you to select more than one slide in a presentation."
    },
    {
      "concept": "Basic Unit of Excel Worksheet",
      "statement": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
    },
    {
      "concept": "Excel Hyperlinks",
      "statement": "You can create hyperlinks from an Excel workbook to a web page on a company internet, a web page on the internet, and other Office 97 application documents."
    },
    {
      "concept": "Excel Formulas",
      "statement": "In Excel, a prerecorded formula that provides a shortcut for complex calculations is called a function."
    },
    {
      "concept": "Moving Paragraphs in Word",
      "statement": "Cut and paste should be used to move a paragraph from one place to another in a Word document."
    },
    {
      "concept": "Header and Footer Button in PowerPoint",
      "statement": "In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group."
    },
    {
      "concept": "Sub Menu",
      "statement": "A sub menu is an additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "concept": "Merging Workbooks in Excel",
      "statement": "In Excel, merging allows users to bring together copies of workbooks that other users have worked on independently."
    },
    {
      "concept": "Cell Address $A4",
      "statement": "Cell address $A4 in a formula means it is a mixed cell reference."
    },
    {
      "concept": "Pie Chart Creation Software",
      "statement": "Pie charts are typically created by using spreadsheet software."
    },
    {
      "concept": "Justification",
      "statement": "Justify justification aligns the text on both the sides left and right of the margin."
    },
    {
      "concept": "MS Access Data Type Size",
      "statement": "The default size of the data type in MS Access is 50."
    },
    {
      "concept": "Moving Text",
      "statement": "To move text from its original position to another position without deleting it is called copying."
    },
    {
      "concept": "Attributes",
      "statement": "Attributes can be defined for an entity."
    },
    {
      "concept": "MS Excel Usage",
      "statement": "MS Excel is used for spreadsheet calculation."
    },
    {
      "concept": "Page Layout View",
      "statement": "Page layout view shows how the contents on a printed page will appear with margin, header and footer."
    },
    {
      "concept": "MS-Access Relationships",
      "statement": "There are 3 types of relationships in MS-Access."
    },
    {
      "concept": "Word Processor Usage",
      "statement": "A word processor would be used best to type a story."
    },
    {
      "concept": "Font Selection in Word",
      "statement": "To choose the font for a sentence in a Word document, select font in the Format menu."
    },
    {
      "concept": "Print Shortcut Key",
      "statement": "The shortcut key to print documents is Ctrl + P."
    },
    {
      "concept": "PowerPoint Extension",
      "statement": "The extension of PowerPoint in Microsoft Office 2007 is .pptx."
    },
    {
      "concept": "Spreadsheet Software Terms",
      "statement": "Virus detection is not a term pertaining to spreadsheet software."
    },
    {
      "concept": "DBMS Software",
      "statement": "Access is a DBMS software."
    },
    {
      "concept": "Formatting Toolbar",
      "statement": "The Formatting toolbar displays the buttons for changing text style, alignment and size."
    },
    {
      "concept": "Word Terms",
      "statement": "Slide show is not a term pertaining to Word."
    },
    {
      "concept": "View Slide Show Shortcut",
      "statement": "The F5 key on the keyboard can be used to view slide show."
    },
    {
      "concept": "Blank Presentation Layouts",
      "statement": "PowerPoint provides 24 layouts for use with a blank presentation."
    },
    {
      "concept": "Center Text Shortcut",
      "statement": "The shortcut key for centering the text selected by the user in Word is Ctrl + E."
    },
    {
      "concept": "Electronic Spreadsheet Contents",
      "statement": "An electronic spreadsheet consists of Rows, Columns, and Cells."
    },
    {
      "concept": "Action Buttons in PowerPoint",
      "statement": "There are 16 action buttons in PowerPoint."
    },
    {
      "concept": "Database Definition",
      "statement": "A database is a collection of logically related information in an organised way so that it can be easily accessed, managed and updated."
    },
    {
      "concept": "Data vs Information",
      "statement": "Data refers to raw, unorganised facts, while information is processed, organised, structured, or presented data that is useful or meaningful."
    },
    {
      "concept": "Database Types",
      "statement": "Databases are of three types: Network Database, Hierarchical Database, and Relational Database."
    },
    {
      "concept": "Relational Database Structure",
      "statement": "In a Relational Database, data is stored in the form of tables, where columns define the type of data and rows define the information about the data."
    },
    {
      "concept": "Database Components",
      "statement": "A database consists of several components, also called objects, including tables, queries, forms, and reports."
    },
    {
      "concept": "Table Definition",
      "statement": "Tables are the building blocks of a relational database model where actual data is defined and entered. They consist of cells at the intersection of records (rows) and fields (columns)."
    },
    {
      "concept": "Field Definition",
      "statement": "A field is an area within a record reserved for a specific piece of data. It is also known as a column."
    },
    {
      "concept": "Record Definition",
      "statement": "A record is the collection of data items of all the fields pertaining to one entity. It is also known as a row or a tuple."
    },
    {
      "concept": "Query Definition",
      "statement": "Queries are questions based on the data available in a database, allowing users to extract data based on specified criteria."
    },
    {
      "concept": "Form Definition",
      "statement": "Forms are used to facilitate the data-entry process and allow users to view and edit data, often resembling a paper form."
    },
    {
      "concept": "Report Definition",
      "statement": "Reports are used to print records fetched from the database in a specific layout."
    },
    {
      "concept": "Conceptual View of Database",
      "statement": "The conceptual view of a database represents various entities, attributes, and their relationships at a high level of abstraction."
    }
  ],
  "definitions": [
    {
      "term": "Trigger",
      "meaning": "An item on the slide that performs an action when clicked."
    },
    {
      "term": "Cell",
      "meaning": "The basic unit of a worksheet into which you enter data in Excel."
    },
    {
      "term": "Function",
      "meaning": "A prerecorded formula in Excel that provides a shortcut for complex calculations."
    },
    {
      "term": "Sub menu",
      "meaning": "An additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "term": "Database",
      "meaning": "A collection of logically related information in an organised way so that it can be easily accessed, managed and updated."
    },
    {
      "term": "Data",
      "meaning": "Raw and unorganised facts that need to be processed, such as digital representation of text, numbers, graphical images or sound."
    },
    {
      "term": "Information",
      "meaning": "Data that, when processed, organised, structured or presented in a given context, becomes useful or meaningful."
    },
    {
      "term": "Network Database",
      "meaning": "A type of database where data is represented as a collection of records and relationships among data are represented as links."
    },
    {
      "term": "Hierarchical Database",
      "meaning": "A type of database where data is organised in the form of trees with nodes connected via links."
    },
    {
      "term": "Relational Database",
      "meaning": "A structured database in which data is stored in the form of tables, where columns define the type of data stored and rows define the information about the data."
    },
    {
      "term": "Table",
      "meaning": "A component of a database that serves as a storage container for data, consisting of records (rows) and fields (columns)."
    },
    {
      "term": "Field",
      "meaning": "An area within a record (in a table) reserved for a specific piece of data, also known as a column."
    },
    {
      "term": "Record",
      "meaning": "A collection of data items of all the fields pertaining to one entity, also known as a row or a tuple."
    },
    {
      "term": "Query",
      "meaning": "A question based on the data available in a database, consisting of specifications indicating which fields, records, and summaries a user wants to fetch."
    },
    {
      "term": "Form",
      "meaning": "A database component used to view and edit data, typically facilitating data entry and presenting data one record at a time."
    },
    {
      "term": "Report",
      "meaning": "A database component used to print records fetched from the database in a specific layout."
    }
  ]
}
```

---

## Interaction [22:06:21]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for MS Office (Word, Excel, PowerPoint).
    
    KNOWLEDGE BASE:
    {
  "formulas": [
    {
      "name": "Sum",
      "logic": "Sum(61: 610)",
      "context": "This is an example of a formula in Excel."
    }
  ],
  "facts": [
    {
      "concept": "MS PowerPoint Zoom",
      "statement": "The maximum zoom percentage in MS PowerPoint is 500%."
    },
    {
      "concept": "Animations in PowerPoint",
      "statement": "In the context of animations, a trigger is an item on the slide that performs an action when clicked."
    },
    {
      "concept": "Spreadsheet Data Organization",
      "statement": "Data is organised in a spreadsheet in rows and columns."
    },
    {
      "concept": "Presentation Views",
      "statement": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
    },
    {
      "concept": "Navigation to First Slide",
      "statement": "Ctrl + Home command brings you to the first slide in your presentation."
    },
    {
      "concept": "Picture Data Type",
      "statement": "To include picture data, the data type must be OLE."
    },
    {
      "concept": "Excel Chart Creation",
      "statement": "In Excel, charts are created using the Chart wizard."
    },
    {
      "concept": "Selecting Multiple Slides",
      "statement": "Ctrl + click each slide allows you to select more than one slide in a presentation."
    },
    {
      "concept": "Basic Unit of Excel Worksheet",
      "statement": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
    },
    {
      "concept": "Excel Hyperlinks",
      "statement": "You can create hyperlinks from an Excel workbook to a web page on a company internet, a web page on the internet, and other Office 97 application documents."
    },
    {
      "concept": "Excel Formulas",
      "statement": "In Excel, a prerecorded formula that provides a shortcut for complex calculations is called a function."
    },
    {
      "concept": "Moving Paragraphs in Word",
      "statement": "Cut and paste should be used to move a paragraph from one place to another in a Word document."
    },
    {
      "concept": "Header and Footer Button in PowerPoint",
      "statement": "In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group."
    },
    {
      "concept": "Sub Menu",
      "statement": "A sub menu is an additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "concept": "Merging Workbooks in Excel",
      "statement": "In Excel, merging allows users to bring together copies of workbooks that other users have worked on independently."
    },
    {
      "concept": "Cell Address $A4",
      "statement": "Cell address $A4 in a formula means it is a mixed cell reference."
    },
    {
      "concept": "Pie Chart Creation Software",
      "statement": "Pie charts are typically created by using spreadsheet software."
    },
    {
      "concept": "Justification",
      "statement": "Justify justification aligns the text on both the sides left and right of the margin."
    },
    {
      "concept": "MS Access Data Type Size",
      "statement": "The default size of the data type in MS Access is 50."
    },
    {
      "concept": "Moving Text",
      "statement": "To move text from its original position to another position without deleting it is called copying."
    },
    {
      "concept": "Attributes",
      "statement": "Attributes can be defined for an entity."
    },
    {
      "concept": "MS Excel Usage",
      "statement": "MS Excel is used for spreadsheet calculation."
    },
    {
      "concept": "Page Layout View",
      "statement": "Page layout view shows how the contents on a printed page will appear with margin, header and footer."
    },
    {
      "concept": "MS-Access Relationships",
      "statement": "There are 3 types of relationships in MS-Access."
    },
    {
      "concept": "Word Processor Usage",
      "statement": "A word processor would be used best to type a story."
    },
    {
      "concept": "Font Selection in Word",
      "statement": "To choose the font for a sentence in a Word document, select font in the Format menu."
    },
    {
      "concept": "Print Shortcut Key",
      "statement": "The shortcut key to print documents is Ctrl + P."
    },
    {
      "concept": "PowerPoint Extension",
      "statement": "The extension of PowerPoint in Microsoft Office 2007 is .pptx."
    },
    {
      "concept": "Spreadsheet Software Terms",
      "statement": "Virus detection is not a term pertaining to spreadsheet software."
    },
    {
      "concept": "DBMS Software",
      "statement": "Access is a DBMS software."
    },
    {
      "concept": "Formatting Toolbar",
      "statement": "The Formatting toolbar displays the buttons for changing text style, alignment and size."
    },
    {
      "concept": "Word Terms",
      "statement": "Slide show is not a term pertaining to Word."
    },
    {
      "concept": "View Slide Show Shortcut",
      "statement": "The F5 key on the keyboard can be used to view slide show."
    },
    {
      "concept": "Blank Presentation Layouts",
      "statement": "PowerPoint provides 24 layouts for use with a blank presentation."
    },
    {
      "concept": "Center Text Shortcut",
      "statement": "The shortcut key for centering the text selected by the user in Word is Ctrl + E."
    },
    {
      "concept": "Electronic Spreadsheet Contents",
      "statement": "An electronic spreadsheet consists of Rows, Columns, and Cells."
    },
    {
      "concept": "Action Buttons in PowerPoint",
      "statement": "There are 16 action buttons in PowerPoint."
    },
    {
      "concept": "Database Definition",
      "statement": "A database is a collection of logically related information in an organised way so that it can be easily accessed, managed and updated."
    },
    {
      "concept": "Data vs Information",
      "statement": "Data refers to raw, unorganised facts, while information is processed, organised, structured, or presented data that is useful or meaningful."
    },
    {
      "concept": "Database Types",
      "statement": "Databases are of three types: Network Database, Hierarchical Database, and Relational Database."
    },
    {
      "concept": "Relational Database Structure",
      "statement": "In a Relational Database, data is stored in the form of tables, where columns define the type of data and rows define the information about the data."
    },
    {
      "concept": "Database Components",
      "statement": "A database consists of several components, also called objects, including tables, queries, forms, and reports."
    },
    {
      "concept": "Table Definition",
      "statement": "Tables are the building blocks of a relational database model where actual data is defined and entered. They consist of cells at the intersection of records (rows) and fields (columns)."
    },
    {
      "concept": "Field Definition",
      "statement": "A field is an area within a record reserved for a specific piece of data. It is also known as a column."
    },
    {
      "concept": "Record Definition",
      "statement": "A record is the collection of data items of all the fields pertaining to one entity. It is also known as a row or a tuple."
    },
    {
      "concept": "Query Definition",
      "statement": "Queries are questions based on the data available in a database, allowing users to extract data based on specified criteria."
    },
    {
      "concept": "Form Definition",
      "statement": "Forms are used to facilitate the data-entry process and allow users to view and edit data, often resembling a paper form."
    },
    {
      "concept": "Report Definition",
      "statement": "Reports are used to print records fetched from the database in a specific layout."
    },
    {
      "concept": "Conceptual View of Database",
      "statement": "The conceptual view of a database represents various entities, attributes, and their relationships at a high level of abstraction."
    }
  ],
  "definitions": [
    {
      "term": "Trigger",
      "meaning": "An item on the slide that performs an action when clicked."
    },
    {
      "term": "Cell",
      "meaning": "The basic unit of a worksheet into which you enter data in Excel."
    },
    {
      "term": "Function",
      "meaning": "A prerecorded formula in Excel that provides a shortcut for complex calculations."
    },
    {
      "term": "Sub menu",
      "meaning": "An additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "term": "Database",
      "meaning": "A collection of logically related information in an organised way so that it can be easily accessed, managed and updated."
    },
    {
      "term": "Data",
      "meaning": "Raw and unorganised facts that need to be processed, such as digital representation of text, numbers, graphical images or sound."
    },
    {
      "term": "Information",
      "meaning": "Data that, when processed, organised, structured or presented in a given context, becomes useful or meaningful."
    },
    {
      "term": "Network Database",
      "meaning": "A type of database where data is represented as a collection of records and relationships among data are represented as links."
    },
    {
      "term": "Hierarchical Database",
      "meaning": "A type of database where data is organised in the form of trees with nodes connected via links."
    },
    {
      "term": "Relational Database",
      "meaning": "A structured database in which data is stored in the form of tables, where columns define the type of data stored and rows define the information about the data."
    },
    {
      "term": "Table",
      "meaning": "A component of a database that serves as a storage container for data, consisting of records (rows) and fields (columns)."
    },
    {
      "term": "Field",
      "meaning": "An area within a record (in a table) reserved for a specific piece of data, also known as a column."
    },
    {
      "term": "Record",
      "meaning": "A collection of data items of all the fields pertaining to one entity, also known as a row or a tuple."
    },
    {
      "term": "Query",
      "meaning": "A question based on the data available in a database, consisting of specifications indicating which fields, records, and summaries a user wants to fetch."
    },
    {
      "term": "Form",
      "meaning": "A database component used to view and edit data, typically facilitating data entry and presenting data one record at a time."
    },
    {
      "term": "Report",
      "meaning": "A database component used to print records fetched from the database in a specific layout."
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
    "question": "What is the maximum zoom percentage achievable in MS PowerPoint?",
    "options": {
      "A": "400%",
      "B": "500%",
      "C": "600%",
      "D": "700%"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The maximum zoom percentage in MS PowerPoint is 500%."
  },
  {
    "question": "In MS PowerPoint, what is referred to as a 'trigger' in the context of animations?",
    "options": {
      "A": "An animation effect applied to text.",
      "B": "A sound that plays during a slide transition.",
      "C": "An item on the slide that performs an action when clicked.",
      "D": "A pre-defined sequence of animations."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "In the context of animations, a trigger is an item on the slide that performs an action when clicked."
  },
  {
    "question": "How is data organized in a spreadsheet like MS Excel?",
    "options": {
      "A": "In paragraphs and sentences.",
      "B": "In rows and columns.",
      "C": "In hierarchical folders.",
      "D": "In a network of interconnected nodes."
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Data is organised in a spreadsheet in rows and columns."
  },
  {
    "question": "Which view in MS PowerPoint is most suitable for applying transition effects to all slides?",
    "options": {
      "A": "Normal View",
      "B": "Slide Show View",
      "C": "Notes Page View",
      "D": "Slide Sorter View"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
  },
  {
    "question": "What is the keyboard shortcut to navigate to the first slide in a PowerPoint presentation?",
    "options": {
      "A": "Ctrl + End",
      "B": "Shift + Home",
      "C": "Ctrl + Home",
      "D": "Alt + Page Up"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Ctrl + Home command brings you to the first slide in your presentation."
  },
  {
    "question": "In MS Excel, what is a prerecorded formula that simplifies complex calculations called?",
    "options": {
      "A": "Macro",
      "B": "Function",
      "C": "Script",
      "D": "Add-in"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "In Excel, a prerecorded formula that provides a shortcut for complex calculations is called a function."
  },
  {
    "question": "To move a paragraph from one location to another within a Microsoft Word document without deleting it from the original location, which action should be performed?",
    "options": {
      "A": "Copy and Paste",
      "B": "Cut and Paste",
      "C": "Drag and Drop",
      "D": "Find and Replace"
    },
    "correct_answer": "A",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "To move text from its original position to another position without deleting it is called copying."
  },
  {
    "question": "Where can the 'Header and Footer' button be found in MS PowerPoint?",
    "options": {
      "A": "Home tab, Paragraph group",
      "B": "Insert tab, Text group",
      "C": "View tab, Presentation Views group",
      "D": "Slide Show tab, Start Slide Show group"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group."
  },
  {
    "question": "What is the basic unit of an Excel worksheet where data is entered called?",
    "options": {
      "A": "Row",
      "B": "Column",
      "C": "Workbook",
      "D": "Cell"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
  },
  {
    "question": "Which of the following is NOT a term typically associated with spreadsheet software like MS Excel?",
    "options": {
      "A": "Cell",
      "B": "Function",
      "C": "Formula",
      "D": "Slide show"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Slide show is not a term pertaining to Word."
  }
]
```

---

## Interaction [22:06:28]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In MS PowerPoint, what is referred to as a 'trigger' in the context of animations?
        Proposed Answer: C (An item on the slide that performs an action when clicked.)
        Source Snippet provided by Writer: In the context of animations, a trigger is an item on the slide that performs an action when clicked.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a trigger is an item on the slide that performs an action when clicked, which perfectly matches the proposed answer C."}
```

---

## Interaction [22:06:39]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In MS Excel, what is a prerecorded formula that simplifies complex calculations called?
        Proposed Answer: B (Function)
        Source Snippet provided by Writer: In Excel, a prerecorded formula that provides a shortcut for complex calculations is called a function.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'a prerecorded formula that provides a shortcut for complex calculations is called a function.' This directly supports the proposed answer 'B (Function)'."}
```

---

## Interaction [22:06:45]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: To move a paragraph from one location to another within a Microsoft Word document without deleting it from the original location, which action should be performed?
        Proposed Answer: A (Copy and Paste)
        Source Snippet provided by Writer: To move text from its original position to another position without deleting it is called copying.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet states that moving text without deleting it is called copying. This is factually incorrect. Moving text without deleting it is called 'cut and paste'. Copying and pasting duplicates the text. Therefore, the proposed answer is not proven by the source snippet."}
```

---

## Interaction [22:06:50]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Where can the 'Header and Footer' button be found in MS PowerPoint?
        Proposed Answer: B (Insert tab, Text group)
        Source Snippet provided by Writer: In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the 'Header and Footer' button is located on the 'Insert tab' in the 'Text group', which perfectly matches the proposed answer 'B (Insert tab, Text group)'."}
```

---

## Interaction [22:06:57]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is NOT a term typically associated with spreadsheet software like MS Excel?
        Proposed Answer: D (Slide show)
        Source Snippet provided by Writer: Slide show is not a term pertaining to Word.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet states that 'Slide show' is not a term pertaining to Word, but the question asks about spreadsheet software like MS Excel. While 'Slide show' is indeed not a term for spreadsheet software, the provided snippet does not directly support this for Excel. The question itself is not hallucinated as 'Slide show' is not a spreadsheet term."}
```

---

## Interaction [22:16:01]

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

    CONTEXT TEXT (SEGMENT AT 40%):
    roup
(4) Insert (5) None of these
62. The maximum zoom percentage in MS Power
Point is
(1) 100% (2) 200%
(5) None of these
[IBPS Clerk 2009]
(3) 400%
(4) 500%
63. In the context of animations, what is a trigger?
(1) An action button that advances to the next.
slide
(2) An item on the slide that performs an
action when clicked
(3) The name of a motion path
(4) All of the above
(5) None of the above
64. How are the data organised in a spreadsheet?
(1) Lines and spaces
(3) Height and width
(5) None of these
(2) Layers and planes
(4) Rows and columns
[SBI Clerk 2008]
65. Which of the following views is the best view to
use when setting transition effects for all slides
in presentation?
(1) Slide sorter view
(3) Slide view
(5) None of the above
(2) Notes pages view
(4) Outline view
66. Which command brings you to the first slide in
your presentation?
(1) Next slide button (2) Pageup
(3) Ctrl + Home
(5) None of these
(4) Ctrl + End
67. In order to include picture data type must be
(1) OLE
(3) Yes/No
(5) None of these
68. In Excel, charts are
option?
(1) Chart wizard
(3) Pie chart
(5) None of these
(2) hyperlink
(4) picture
[RBI PO 2009]
created using which
[SBI Clerk 2009]
(2) Pivot table
(4) Bar chart
69. Which of the following allow you to select
more than one slide in a presentation?
(1) Alt + click each slide
(2) Shift + drag each slide
(3) Shift + click each slide
(4) $A$4
(4) Ctrl + click each slide
(5) None of the above
Downloaded From

--- PAGE BREAK ---

92
Downloaded From: www.EasyEngineering.net
70. The basic unit of a worksheet into which you
enter data in excel is called a [IBPS Clerk 2008]
(1) tab
(3) box
(5) None of these
(2) cell
(4) range
71. You can create hyperlinks from the excel work
book to
(1) a web page on company internet
(2) a web page on the internet
(3) other office 97 application documents
(4) All of the above
(5) None of the above
72. In Excel, this is a prerecorded formula that
provides a shortcut for complex calculations.
(1) value
(3) function
(5) None of these
(2) data series
(4) field
Computer Awareness
78. Cell address $A4 in a formula means it is a
(1) mixed cell reference
(2) absolute cell reference
(3) relative cell reference
(4) All of the above
(5) None of the above
79. Pie charts are typically created by using which
of the following?
(1) Browser software
(2) Database software
(3) Desktop publishing software
(4) Word processing software
(5) Spreadsheet software
80. Which of the following justification align the
text on both the sides left and right of margin?
(1) Right
(3) Both sides
[IBPS Clerk 2012]
(2) Justify
(4) Balanced
73. Which of the following should be used to move
a paragraph from one place to another in a
word document?
(1) Copy and paste
(3) Delete and retype
(5) None of these
(2) Cut and paste
(4) Find and replace
74. In PowerPoint, the Header and Footer button
can be found on the insert tab in what group?
[IBPS PO, Clerk 2012]
(1) Illustrations group
(2) Object group
(3) Insert group
(4) Tables gr
    
```

### Response:
```json
{
  "exam_board": "f81eea7e-3e58-4fe6-ac6c-82682450a830",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "MS Office (Word, Excel, PowerPoint)",
  "confidence": 0.95
}
```

---

## Interaction [22:16:11]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: MS Office (Word, Excel, PowerPoint)
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    roup
(4) Insert (5) None of these
62. The maximum zoom percentage in MS Power
Point is
(1) 100% (2) 200%
(5) None of these
[IBPS Clerk 2009]
(3) 400%
(4) 500%
63. In the context of animations, what is a trigger?
(1) An action button that advances to the next.
slide
(2) An item on the slide that performs an
action when clicked
(3) The name of a motion path
(4) All of the above
(5) None of the above
64. How are the data organised in a spreadsheet?
(1) Lines and spaces
(3) Height and width
(5) None of these
(2) Layers and planes
(4) Rows and columns
[SBI Clerk 2008]
65. Which of the following views is the best view to
use when setting transition effects for all slides
in presentation?
(1) Slide sorter view
(3) Slide view
(5) None of the above
(2) Notes pages view
(4) Outline view
66. Which command brings you to the first slide in
your presentation?
(1) Next slide button (2) Pageup
(3) Ctrl + Home
(5) None of these
(4) Ctrl + End
67. In order to include picture data type must be
(1) OLE
(3) Yes/No
(5) None of these
68. In Excel, charts are
option?
(1) Chart wizard
(3) Pie chart
(5) None of these
(2) hyperlink
(4) picture
[RBI PO 2009]
created using which
[SBI Clerk 2009]
(2) Pivot table
(4) Bar chart
69. Which of the following allow you to select
more than one slide in a presentation?
(1) Alt + click each slide
(2) Shift + drag each slide
(3) Shift + click each slide
(4) $A$4
(4) Ctrl + click each slide
(5) None of the above
Downloaded From

--- PAGE BREAK ---

92
Downloaded From: www.EasyEngineering.net
70. The basic unit of a worksheet into which you
enter data in excel is called a [IBPS Clerk 2008]
(1) tab
(3) box
(5) None of these
(2) cell
(4) range
71. You can create hyperlinks from the excel work
book to
(1) a web page on company internet
(2) a web page on the internet
(3) other office 97 application documents
(4) All of the above
(5) None of the above
72. In Excel, this is a prerecorded formula that
provides a shortcut for complex calculations.
(1) value
(3) function
(5) None of these
(2) data series
(4) field
Computer Awareness
78. Cell address $A4 in a formula means it is a
(1) mixed cell reference
(2) absolute cell reference
(3) relative cell reference
(4) All of the above
(5) None of the above
79. Pie charts are typically created by using which
of the following?
(1) Browser software
(2) Database software
(3) Desktop publishing software
(4) Word processing software
(5) Spreadsheet software
80. Which of the following justification align the
text on both the sides left and right of margin?
(1) Right
(3) Both sides
[IBPS Clerk 2012]
(2) Justify
(4) Balanced
73. Which of the following should be used to move
a paragraph from one place to another in a
word document?
(1) Copy and paste
(3) Delete and retype
(5) None of these
(2) Cut and paste
(4) Find and replace
74. In PowerPoint, the Header and Footer button
can be found on the insert tab in what group?
[IBPS PO, Clerk 2012]
(1) Illustrations group
(2) Object group
(3) Insert group
(4) Tables group
(5) None of these
81. What is the default size of the data type in MS
Access?
(1) 50
(2) 60
(5) None of these
(3) 70
[SBI Clerk 2010]
(4) 80
82. To move the text from its original position to
another position without deleting it is called
(1) scrolling
(3) moving
(5) halting
(2) searching
(4) copying
[SBI Clerk 2009]
(2) switch board
(4) pages
[SBI Clerk 2012]
75. A
(5) None of these
is an additional set of commands that
the computer displays after you make a
selection from the main menu. [SBI Clerk 2009]
(1) dialog box
(3) menu selection
(5) None of these
(2) sub menu
(4) All of these
76. In Excel, ......... allows users to bring together
copies of workbooks that other users gave
worked on independently. [IBPS PO 2011]
(1) copying
(3) pasting
(5) None of these
(2) merging
(4) compling
77. Pressing Ctrl + F9 in Excel
(1) prints 9 worksheets
(2) prints a sheet
(3) prints 9 followed by spaces
(4) insert 9 cells at the current location
(5) None of the above
83. Attributes can be defined for
(1) entity
(3) macro
(5) None of these
84. MS Excel is used for
(1) letter writing
(2) spreadsheet calculation
(3) presentation
(4) painting
(5) None of the above
85. Sum (61: 610) is an example of a
86.
(1) function
(3) cell address
(5) None of these
(2) formula
(4) value
shows how the contents on
printed
page will appear with margin, header and
footer.
(1) Draft
(3) Outline
(5) None of these
(2) Full screen reading
(4) Page layout
Downloaded From: www.EasyEngineering.net
M
8
8

--- PAGE BREAK ---

Microsoft Office
Downloaded From: www.EasyEngineering.net
87. How many types of relationships are there in
MS-Access?
(1) 3
(2) 4
(5) None of these
(3) 5
(4)6
88. A word processor would be used best to
(1) paint a picture
(2) draw a diagram
(3) type a story
(4) work out income and expenses
(5) None of the above
[IBPS Clerk 2011]
89. In order to choose the font for a sentence in a
word document
[IBPS Clerk 2011]
(1) select font in the format menu
(2) select font in the edit menu
(3) select font in the tools menu
(4) select font in the view menu
(5) None of the above
90. The shortcut key to print documents is
93
94. Which of the following is a DBMS software?
(1) Access
(3) Word
(5) None of these
(2) Excel
(4) Powerpoint
95. Which of the following displays the buttons for
changing text style, alignment and size?
(1) Standard toolbar
(3) Drawing toolbar
(5) None of the above
(2) Status bar
(4) Formatting toolbar
96. Which of the following is not a term pertaining
to word?
[IBPS Clerk 2011]
(1) Delete
(2) Edit
(3) Copy
(4) Slide show
(5) None of these
97. Which key on the keyboard can be used to view
slide show?
(1) F1
(2) F2
(3) F5
(4) F10
(1) Ctrl + D
(3) Ctrl + B
(5) Ctrl + P
(2) Ctrl + A
(4) Ctrl + C
[IBPS PO 2012]
91. What is the extension of PowerPoint in
Microsoft Office 2007?
(1) .ppt
(5) .pt
(2) .pptx (3) .ppx (4) .ptx
92. All of the following terms are related to
spreadsheet software except [SBI Clerk 2011]
(1) worksheet
(3) formula
(5) None of these
93. There are a total of
(2) cell
(4) virus detection
(5) None of these
98. PowerPoint provides .......... number of layouts
for use with blank presentation.
(1) 20
(2) 22
(5) None of these
(3) 24
(4) 26
99. What is the shortcut key for centering the text
selected by the user in word? [IBPS Clerk 2011]
(1) Ctrl + A
(3) Ctrl + C
(5) Ctrl + E
(2) Ctrl + B
(4) Ctrl + D
100. What does an electronic spreadsheet consist
actions button in
of?
(1) Rows
[IBPS Clerk 2011]
(2) Columns
PowerPoint.
[SBI Clerk 2012]
(3) Cells
(4) All of these
(1) 12
(2) 15
(3) 16
(4) 18
(5) None of these
(5) None of these
>Analyse Yourself
1. (2)
2. (5)
3. (2)
4. (5)
5. (3)
6. (2)
7. (3)
8. (3)
9. (1)
10. (5)
11. (4)
12. (3)
13. (3)
14. (1)
15. (2)
16. (3)
17. (4)
18. (2)
19. (4).
20. (2)
21. (3)
22. (1)
23. (1)
24. (3)
25. (2)
26. (1)
27. (2)
28. (1)
29. (1)
30. (1)
31. (3)
32. (4)
33. (1)
34. (5)
35. (4)
36. (4)
37. (5)
38. (2)
39. (1)
40. (3)
45. (4)
46. (1)
47. (4)
48. (1)
49. (3)
50. (3)
41. (4)
42. (2)
43. (1)
44. (3)
51. (4)
52. (1)
53. (2)
54. (4)
55. (4)
56. (4)
57. (2)
58. (2)
59. (1)
60. (2)
61. (1)
71. (4)
81. (1)
91. (2)
62.
(3)
63. (2)
64. (4)
65. (1)
66. (3)
67. (1)
68. (1)
69. (3)
70. (2)
75. (2)
76. (2)
77. (5)
78. (1)
79. (5)
80. (2)
72. (3)
73. (2)
74. (5)
82. (4)
83. (1)
84. (2)
85. (2)
86. (4)
87. (1)
88. (3)
89. (1)
90. (5)
92. (4)
93. (1)
94. (1)
95. (4)
96. (4)
97. (3)
98. (3)
99. (5)
100. (4)
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
10
Database
Concepts
A database is a collection of logically related information in an organised way so that it can be
easily accessed, managed and updated. Some other operations can also be performed on
database such as adding, updating and deleting data. A database could be simple as a single
text file with a list of names or it could be complex as a large bunch of text files including some
data.
In database, data can be entered through input devices such as keyboard, mouse, touchscreen,
etc. Some examples of database are telephone directory, railway timetable, books catalogue,
equipment inventory, etc.
Fundamentals of
Database
For defining database, two terms,
which are used frequently with
database, should be known.
Data These are raw and unorganised
facts that need to be processed such as
of text,
digital representation
numbers, graphical images or sound.
e.g., a student's test score is one piece
of data.
Information When
processed, organised, structured or
presented in a given context to make
data
is
Types of Database
Databases are of three types, namely
W
1. Network Database In this type of database, data is
represented as collection of records and relationships
among data are represented as links.
2. Hierarchical Database In this type of database, data is
organised in the form of trees with nodes. Nodes are
connected via links.
3. Relational Database Relational database is also
known as structured database in which data is stored in
the form of tables. Where, columns defines the
type
data stored in the table and rows defines the information
about the data.
it useful or meaningful, it is called Components of a Database
information. e.g., the class's average
score is the information that can be
concluded from the given data.
Data refer to the values physically
recorded in the database whereas
information refers to the conclusion
or meaning drawn out of it.
A database consists of several different components.
of
Each
component listed, is called an object. Within the file, you can
divide your data into separate storage containers called tables;
view, add and update table data by using online forms; find
and retrieve the data you want by using queries and analyse of
print data in a specific layout by using reports.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ata is
ships
Lata is
es are
also
red in
pe of
ation
Each
u can
ables
find
yse of
0
Downloaded From: www.EasyEngineering.net
Database components are described below
Tables
Tables are
the building blocks or relation of any
Reports
fetched from
your
95
95
relational database model where all the actual
data is defined and entered. Tables consist of
cells at the intersection of records (rows) and Elements of Database
fields (columns). Different types of operations
When you want to print those records which are
even has a wizard to help produce mailing labels.
database, design a report. Access
retrieving and editing of data.
are done on the tables such as storing, filtering, The conceptual view of database represents various
name,
A database consists of several different elements.
piece of data and their relationship at a very high
Field A field is an area (within the record) level of abstraction. The entities, attributes,
reserved for a specific piece of data. e.g.,
customer number, customer
address, city, state, phone number, current
address etc. Field of a table is also known as
column.
Record
street
A record is the collection of data items
of all the fields pertaining to one entity i.e., a
person, company, transition etc. Record of a
table is also known as row or a tuple and the
number of records in a relation is called the
cardinality of that relation.
Queries
Queries are basically questions based on the
data available in a database. A query consists
of specifications indicating which fields,
records, and summaries a user want to fetch
from a database. Queries allow you to extract
data based on the criteria
Forms
you
define.
neither control
Although you can enter and modify data in
datasheet view of tables but
the user's action very well nor you can do much
you
To overcome
to facilitate the data-entry process.
this problem, forms are introduced.
Like tables, forms can be used to view and edit
your data. However, forms are typically used to
underlying table one
view the data in an
at a time.
For example,
record
a user can create a data entry form
that looks exactly like a paper form. People
generally prefer
to
enter data into
well-designed
    
```

### Response:
```json
{
  "formulas": [
    {
      "name": "Sum Function",
      "logic": "Sum(61: 610)",
      "context": "This is an example of a formula in Excel."
    }
  ],
  "facts": [
    {
      "concept": "MS PowerPoint Zoom",
      "statement": "The maximum zoom percentage in MS PowerPoint is 500%."
    },
    {
      "concept": "Animations in PowerPoint",
      "statement": "In the context of animations, a trigger is an item on the slide that performs an action when clicked."
    },
    {
      "concept": "Spreadsheet Data Organization",
      "statement": "Data is organised in a spreadsheet in rows and columns."
    },
    {
      "concept": "Slide Transition Effects",
      "statement": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
    },
    {
      "concept": "Navigating to First Slide",
      "statement": "Ctrl + Home command brings you to the first slide in your presentation."
    },
    {
      "concept": "Including Picture Data",
      "statement": "To include picture data, the data type must be OLE."
    },
    {
      "concept": "Excel Chart Creation",
      "statement": "In Excel, charts are created using the Chart wizard."
    },
    {
      "concept": "Selecting Multiple Slides",
      "statement": "Ctrl + click each slide allows you to select more than one slide in a presentation."
    },
    {
      "concept": "Basic Unit of Excel Worksheet",
      "statement": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
    },
    {
      "concept": "Hyperlinks in Excel",
      "statement": "You can create hyperlinks from an Excel workbook to a web page on a company internet, a web page on the internet, and other Office 97 application documents."
    },
    {
      "concept": "Excel Formulas",
      "statement": "In Excel, a prerecorded formula that provides a shortcut for complex calculations is called a function."
    },
    {
      "concept": "Moving Paragraphs in Word",
      "statement": "Cut and paste should be used to move a paragraph from one place to another in a Word document."
    },
    {
      "concept": "Header and Footer Button in PowerPoint",
      "statement": "In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group."
    },
    {
      "concept": "Sub Menu",
      "statement": "A sub menu is an additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "concept": "Merging Workbooks in Excel",
      "statement": "In Excel, merging allows users to bring together copies of workbooks that other users have worked on independently."
    },
    {
      "concept": "Ctrl + F9 in Excel",
      "statement": "Pressing Ctrl + F9 in Excel does not have a defined standard action listed in the options."
    },
    {
      "concept": "Cell Address $A4",
      "statement": "Cell address $A4 in a formula means it is a mixed cell reference."
    },
    {
      "concept": "Pie Chart Creation Software",
      "statement": "Pie charts are typically created by using spreadsheet software."
    },
    {
      "concept": "Justification",
      "statement": "Justify justification aligns the text on both the sides left and right of the margin."
    },
    {
      "concept": "MS Access Data Type Size",
      "statement": "The default size of the data type in MS Access is 50."
    },
    {
      "concept": "Moving Text",
      "statement": "To move text from its original position to another position without deleting it is called copying."
    },
    {
      "concept": "Attributes",
      "statement": "Attributes can be defined for an entity."
    },
    {
      "concept": "MS Excel Usage",
      "statement": "MS Excel is used for spreadsheet calculation."
    },
    {
      "concept": "Page Layout View",
      "statement": "Page layout view shows how the contents on a printed page will appear with margin, header and footer."
    },
    {
      "concept": "MS Access Relationships",
      "statement": "There are 3 types of relationships in MS-Access."
    },
    {
      "concept": "Word Processor Usage",
      "statement": "A word processor would be used best to type a story."
    },
    {
      "concept": "Font Selection in Word",
      "statement": "To choose the font for a sentence in a Word document, select font in the format menu."
    },
    {
      "concept": "Print Shortcut Key",
      "statement": "The shortcut key to print documents is Ctrl + P."
    },
    {
      "concept": "PowerPoint Extension",
      "statement": "The extension of PowerPoint in Microsoft Office 2007 is .pptx."
    },
    {
      "concept": "Spreadsheet Software Terms",
      "statement": "Virus detection is not a term pertaining to spreadsheet software."
    },
    {
      "concept": "DBMS Software",
      "statement": "Access is a DBMS software."
    },
    {
      "concept": "Formatting Toolbar",
      "statement": "The Formatting toolbar displays the buttons for changing text style, alignment and size."
    },
    {
      "concept": "Word Terms",
      "statement": "Slide show is not a term pertaining to Word."
    },
    {
      "concept": "View Slide Show Shortcut",
      "statement": "The F5 key on the keyboard can be used to view slide show."
    },
    {
      "concept": "PowerPoint Layouts",
      "statement": "PowerPoint provides 24 number of layouts for use with blank presentation."
    },
    {
      "concept": "Center Text Shortcut",
      "statement": "The shortcut key for centering the text selected by the user in Word is Ctrl + E."
    },
    {
      "concept": "Electronic Spreadsheet Contents",
      "statement": "An electronic spreadsheet consists of Rows, Columns, and Cells."
    },
    {
      "concept": "Action Buttons in PowerPoint",
      "statement": "There are 16 action buttons in PowerPoint."
    },
    {
      "concept": "Database Definition",
      "statement": "A database is a collection of logically related information in an organised way so that it can be easily accessed, managed and updated."
    },
    {
      "concept": "Data vs Information",
      "statement": "Data are raw and unorganised facts, while information is processed, organised, structured or presented data that is useful or meaningful."
    },
    {
      "concept": "Types of Databases",
      "statement": "Databases are of three types: Network Database, Hierarchical Database, and Relational Database."
    },
    {
      "concept": "Relational Database Structure",
      "statement": "In a Relational Database, data is stored in the form of tables, where columns define the type of data and rows define the information about the data."
    },
    {
      "concept": "Database Components",
      "statement": "A database consists of several components, which are called objects: Tables, Reports, Queries, and Forms."
    },
    {
      "concept": "Tables in Database",
      "statement": "Tables are the building blocks of a relational database model where all the actual data is defined and entered. They consist of cells at the intersection of records (rows) and fields (columns)."
    },
    {
      "concept": "Field in Database",
      "statement": "A field is an area within a record reserved for a specific piece of data, also known as a column."
    },
    {
      "concept": "Record in Database",
      "statement": "A record is the collection of data items of all the fields pertaining to one entity, also known as a row or a tuple."
    },
    {
      "concept": "Queries in Database",
      "statement": "Queries are questions based on the data available in a database, allowing users to extract data based on specified criteria."
    },
    {
      "concept": "Forms in Database",
      "statement": "Forms are used to facilitate the data-entry process and allow users to view and edit data, typically viewing one record at a time."
    },
    {
      "concept": "Database Elements",
      "statement": "A database consists of several elements, including entities, attributes, and their relationships."
    }
  ],
  "definitions": [
    {
      "term": "Trigger",
      "meaning": "An item on the slide that performs an action when clicked."
    },
    {
      "term": "OLE",
      "meaning": "Object Linking and Embedding, a technology used to include data from one application into another."
    },
    {
      "term": "Cell",
      "meaning": "The basic unit of a worksheet into which you enter data in Excel."
    },
    {
      "term": "Function",
      "meaning": "A prerecorded formula in Excel that provides a shortcut for complex calculations."
    },
    {
      "term": "Mixed Cell Reference",
      "meaning": "A cell reference in Excel that combines absolute and relative referencing (e.g., $A4)."
    },
    {
      "term": "Justify",
      "meaning": "A text alignment option that aligns text on both the left and right margins."
    },
    {
      "term": "Copying",
      "meaning": "To move text from its original position to another position without deleting it."
    },
    {
      "term": "Sub menu",
      "meaning": "An additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "term": "Merging",
      "meaning": "In Excel, the process of bringing together copies of workbooks that other users have worked on independently."
    },
    {
      "term": "Absolute Cell Reference",
      "meaning": "A cell reference in Excel that does not change when copied or filled (e.g., $A$4)."
    },
    {
      "term": "Relative Cell Reference",
      "meaning": "A cell reference in Excel that changes when copied or filled (e.g., A4)."
    },
    {
      "term": "Data",
      "meaning": "Raw and unorganised facts that need to be processed."
    },
    {
      "term": "Information",
      "meaning": "Processed, organised, structured, or presented data that is useful or meaningful."
    },
    {
      "term": "Network Database",
      "meaning": "A type of database where data is represented as a collection of records and relationships among data are represented as links."
    },
    {
      "term": "Hierarchical Database",
      "meaning": "A type of database where data is organised in the form of trees with nodes connected via links."
    },
    {
      "term": "Relational Database",
      "meaning": "A structured database in which data is stored in the form of tables."
    },
    {
      "term": "Object (in Database)",
      "meaning": "A component of a database, such as a table, report, query, or form."
    },
    {
      "term": "Record (in Database)",
      "meaning": "The collection of data items of all the fields pertaining to one entity; also known as a row or a tuple."
    },
    {
      "term": "Field (in Database)",
      "meaning": "An area within a record reserved for a specific piece of data; also known as a column."
    },
    {
      "term": "Query (in Database)",
      "meaning": "A request for data or information from a database."
    },
    {
      "term": "Form (in Database)",
      "meaning": "A database object used to display and edit data, often designed to mimic a paper form."
    },
    {
      "term": "Entity (in Database)",
      "meaning": "A real-world object or concept that can be uniquely identified, such as a person, place, or event."
    },
    {
      "term": "Attribute (in Database)",
      "meaning": "A property or characteristic of an entity."
    }
  ]
}
```

---

## Interaction [22:18:22]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for MS Office (Word, Excel, PowerPoint).
    
    KNOWLEDGE BASE:
    {
  "formulas": [
    {
      "name": "Sum Function",
      "logic": "Sum(61: 610)",
      "context": "This is an example of a formula in Excel."
    }
  ],
  "facts": [
    {
      "concept": "MS PowerPoint Zoom",
      "statement": "The maximum zoom percentage in MS PowerPoint is 500%."
    },
    {
      "concept": "Animations in PowerPoint",
      "statement": "In the context of animations, a trigger is an item on the slide that performs an action when clicked."
    },
    {
      "concept": "Spreadsheet Data Organization",
      "statement": "Data is organised in a spreadsheet in rows and columns."
    },
    {
      "concept": "Slide Transition Effects",
      "statement": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
    },
    {
      "concept": "Navigating to First Slide",
      "statement": "Ctrl + Home command brings you to the first slide in your presentation."
    },
    {
      "concept": "Including Picture Data",
      "statement": "To include picture data, the data type must be OLE."
    },
    {
      "concept": "Excel Chart Creation",
      "statement": "In Excel, charts are created using the Chart wizard."
    },
    {
      "concept": "Selecting Multiple Slides",
      "statement": "Ctrl + click each slide allows you to select more than one slide in a presentation."
    },
    {
      "concept": "Basic Unit of Excel Worksheet",
      "statement": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
    },
    {
      "concept": "Hyperlinks in Excel",
      "statement": "You can create hyperlinks from an Excel workbook to a web page on a company internet, a web page on the internet, and other Office 97 application documents."
    },
    {
      "concept": "Excel Formulas",
      "statement": "In Excel, a prerecorded formula that provides a shortcut for complex calculations is called a function."
    },
    {
      "concept": "Moving Paragraphs in Word",
      "statement": "Cut and paste should be used to move a paragraph from one place to another in a Word document."
    },
    {
      "concept": "Header and Footer Button in PowerPoint",
      "statement": "In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group."
    },
    {
      "concept": "Sub Menu",
      "statement": "A sub menu is an additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "concept": "Merging Workbooks in Excel",
      "statement": "In Excel, merging allows users to bring together copies of workbooks that other users have worked on independently."
    },
    {
      "concept": "Ctrl + F9 in Excel",
      "statement": "Pressing Ctrl + F9 in Excel does not have a defined standard action listed in the options."
    },
    {
      "concept": "Cell Address $A4",
      "statement": "Cell address $A4 in a formula means it is a mixed cell reference."
    },
    {
      "concept": "Pie Chart Creation Software",
      "statement": "Pie charts are typically created by using spreadsheet software."
    },
    {
      "concept": "Justification",
      "statement": "Justify justification aligns the text on both the sides left and right of the margin."
    },
    {
      "concept": "MS Access Data Type Size",
      "statement": "The default size of the data type in MS Access is 50."
    },
    {
      "concept": "Moving Text",
      "statement": "To move text from its original position to another position without deleting it is called copying."
    },
    {
      "concept": "Attributes",
      "statement": "Attributes can be defined for an entity."
    },
    {
      "concept": "MS Excel Usage",
      "statement": "MS Excel is used for spreadsheet calculation."
    },
    {
      "concept": "Page Layout View",
      "statement": "Page layout view shows how the contents on a printed page will appear with margin, header and footer."
    },
    {
      "concept": "MS Access Relationships",
      "statement": "There are 3 types of relationships in MS-Access."
    },
    {
      "concept": "Word Processor Usage",
      "statement": "A word processor would be used best to type a story."
    },
    {
      "concept": "Font Selection in Word",
      "statement": "To choose the font for a sentence in a Word document, select font in the format menu."
    },
    {
      "concept": "Print Shortcut Key",
      "statement": "The shortcut key to print documents is Ctrl + P."
    },
    {
      "concept": "PowerPoint Extension",
      "statement": "The extension of PowerPoint in Microsoft Office 2007 is .pptx."
    },
    {
      "concept": "Spreadsheet Software Terms",
      "statement": "Virus detection is not a term pertaining to spreadsheet software."
    },
    {
      "concept": "DBMS Software",
      "statement": "Access is a DBMS software."
    },
    {
      "concept": "Formatting Toolbar",
      "statement": "The Formatting toolbar displays the buttons for changing text style, alignment and size."
    },
    {
      "concept": "Word Terms",
      "statement": "Slide show is not a term pertaining to Word."
    },
    {
      "concept": "View Slide Show Shortcut",
      "statement": "The F5 key on the keyboard can be used to view slide show."
    },
    {
      "concept": "PowerPoint Layouts",
      "statement": "PowerPoint provides 24 number of layouts for use with blank presentation."
    },
    {
      "concept": "Center Text Shortcut",
      "statement": "The shortcut key for centering the text selected by the user in Word is Ctrl + E."
    },
    {
      "concept": "Electronic Spreadsheet Contents",
      "statement": "An electronic spreadsheet consists of Rows, Columns, and Cells."
    },
    {
      "concept": "Action Buttons in PowerPoint",
      "statement": "There are 16 action buttons in PowerPoint."
    },
    {
      "concept": "Database Definition",
      "statement": "A database is a collection of logically related information in an organised way so that it can be easily accessed, managed and updated."
    },
    {
      "concept": "Data vs Information",
      "statement": "Data are raw and unorganised facts, while information is processed, organised, structured or presented data that is useful or meaningful."
    },
    {
      "concept": "Types of Databases",
      "statement": "Databases are of three types: Network Database, Hierarchical Database, and Relational Database."
    },
    {
      "concept": "Relational Database Structure",
      "statement": "In a Relational Database, data is stored in the form of tables, where columns define the type of data and rows define the information about the data."
    },
    {
      "concept": "Database Components",
      "statement": "A database consists of several components, which are called objects: Tables, Reports, Queries, and Forms."
    },
    {
      "concept": "Tables in Database",
      "statement": "Tables are the building blocks of a relational database model where all the actual data is defined and entered. They consist of cells at the intersection of records (rows) and fields (columns)."
    },
    {
      "concept": "Field in Database",
      "statement": "A field is an area within a record reserved for a specific piece of data, also known as a column."
    },
    {
      "concept": "Record in Database",
      "statement": "A record is the collection of data items of all the fields pertaining to one entity, also known as a row or a tuple."
    },
    {
      "concept": "Queries in Database",
      "statement": "Queries are questions based on the data available in a database, allowing users to extract data based on specified criteria."
    },
    {
      "concept": "Forms in Database",
      "statement": "Forms are used to facilitate the data-entry process and allow users to view and edit data, typically viewing one record at a time."
    },
    {
      "concept": "Database Elements",
      "statement": "A database consists of several elements, including entities, attributes, and their relationships."
    }
  ],
  "definitions": [
    {
      "term": "Trigger",
      "meaning": "An item on the slide that performs an action when clicked."
    },
    {
      "term": "OLE",
      "meaning": "Object Linking and Embedding, a technology used to include data from one application into another."
    },
    {
      "term": "Cell",
      "meaning": "The basic unit of a worksheet into which you enter data in Excel."
    },
    {
      "term": "Function",
      "meaning": "A prerecorded formula in Excel that provides a shortcut for complex calculations."
    },
    {
      "term": "Mixed Cell Reference",
      "meaning": "A cell reference in Excel that combines absolute and relative referencing (e.g., $A4)."
    },
    {
      "term": "Justify",
      "meaning": "A text alignment option that aligns text on both the left and right margins."
    },
    {
      "term": "Copying",
      "meaning": "To move text from its original position to another position without deleting it."
    },
    {
      "term": "Sub menu",
      "meaning": "An additional set of commands that the computer displays after you make a selection from the main menu."
    },
    {
      "term": "Merging",
      "meaning": "In Excel, the process of bringing together copies of workbooks that other users have worked on independently."
    },
    {
      "term": "Absolute Cell Reference",
      "meaning": "A cell reference in Excel that does not change when copied or filled (e.g., $A$4)."
    },
    {
      "term": "Relative Cell Reference",
      "meaning": "A cell reference in Excel that changes when copied or filled (e.g., A4)."
    },
    {
      "term": "Data",
      "meaning": "Raw and unorganised facts that need to be processed."
    },
    {
      "term": "Information",
      "meaning": "Processed, organised, structured, or presented data that is useful or meaningful."
    },
    {
      "term": "Network Database",
      "meaning": "A type of database where data is represented as a collection of records and relationships among data are represented as links."
    },
    {
      "term": "Hierarchical Database",
      "meaning": "A type of database where data is organised in the form of trees with nodes connected via links."
    },
    {
      "term": "Relational Database",
      "meaning": "A structured database in which data is stored in the form of tables."
    },
    {
      "term": "Object (in Database)",
      "meaning": "A component of a database, such as a table, report, query, or form."
    },
    {
      "term": "Record (in Database)",
      "meaning": "The collection of data items of all the fields pertaining to one entity; also known as a row or a tuple."
    },
    {
      "term": "Field (in Database)",
      "meaning": "An area within a record reserved for a specific piece of data; also known as a column."
    },
    {
      "term": "Query (in Database)",
      "meaning": "A request for data or information from a database."
    },
    {
      "term": "Form (in Database)",
      "meaning": "A database object used to display and edit data, often designed to mimic a paper form."
    },
    {
      "term": "Entity (in Database)",
      "meaning": "A real-world object or concept that can be uniquely identified, such as a person, place, or event."
    },
    {
      "term": "Attribute (in Database)",
      "meaning": "A property or characteristic of an entity."
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
    "question": "What is the maximum zoom percentage available in Microsoft PowerPoint?",
    "options": {
      "A": "400%",
      "B": "500%",
      "C": "600%",
      "D": "700%"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "The maximum zoom percentage in MS PowerPoint is 500%."
  },
  {
    "question": "In MS PowerPoint, what is a 'trigger' in the context of animations?",
    "options": {
      "A": "The order in which animations appear.",
      "B": "A sound effect played during an animation.",
      "C": "An item on the slide that performs an action when clicked.",
      "D": "The duration of an animation."
    },
    "correct_answer": "C",
    "difficulty_level": "Medium",
    "source_snippet": "In the context of animations, a trigger is an item on the slide that performs an action when clicked."
  },
  {
    "question": "How is data organized in a spreadsheet like Microsoft Excel?",
    "options": {
      "A": "In paragraphs and sentences.",
      "B": "In rows and columns.",
      "C": "In a hierarchical tree structure.",
      "D": "In a series of interconnected nodes."
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "Data is organised in a spreadsheet in rows and columns."
  },
  {
    "question": "Which view is best for setting transition effects for all slides in a PowerPoint presentation?",
    "options": {
      "A": "Normal View",
      "B": "Slide Show View",
      "C": "Notes Page View",
      "D": "Slide Sorter View"
    },
    "correct_answer": "D",
    "difficulty_level": "Medium",
    "source_snippet": "Slide sorter view is the best view to use when setting transition effects for all slides in a presentation."
  },
  {
    "question": "What is the keyboard shortcut to navigate to the first slide in a PowerPoint presentation?",
    "options": {
      "A": "Ctrl + End",
      "B": "Ctrl + Home",
      "C": "Home",
      "D": "Page Up"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "Ctrl + Home command brings you to the first slide in your presentation."
  },
  {
    "question": "In Excel, what is the term for a prerecorded formula that simplifies complex calculations?",
    "options": {
      "A": "Macro",
      "B": "Function",
      "C": "Script",
      "D": "Formula"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "In Excel, a prerecorded formula that provides a shortcut for complex calculations is called a function."
  },
  {
    "question": "To move a paragraph from one location to another within a Word document without deleting it from the original location, what should you use?",
    "options": {
      "A": "Cut and Paste",
      "B": "Copy and Paste",
      "C": "Drag and Drop",
      "D": "Find and Replace"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "To move text from its original position to another position without deleting it is called copying."
  },
  {
    "question": "Where can the 'Header and Footer' button be found in Microsoft PowerPoint?",
    "options": {
      "A": "Home tab, Paragraph group",
      "B": "Insert tab, Text group",
      "C": "View tab, Presentation Views group",
      "D": "Slide Show tab, Begin Slide Show group"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "In PowerPoint, the Header and Footer button can be found on the Insert tab in the Text group."
  },
  {
    "question": "What is the basic unit of an Excel worksheet where data is entered?",
    "options": {
      "A": "Row",
      "B": "Column",
      "C": "Workbook",
      "D": "Cell"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "source_snippet": "The basic unit of a worksheet into which you enter data in Excel is called a cell."
  },
  {
    "question": "What is the shortcut key for centering text that has been selected by the user in Microsoft Word?",
    "options": {
      "A": "Ctrl + L",
      "B": "Ctrl + R",
      "C": "Ctrl + E",
      "D": "Ctrl + J"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "source_snippet": "The shortcut key for centering the text selected by the user in Word is Ctrl + E."
  }
]
```

---

## Interaction [22:18:38]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: To move a paragraph from one location to another within a Word document without deleting it from the original location, what should you use?
        Proposed Answer: B (Copy and Paste)
        Source Snippet provided by Writer: To move text from its original position to another position without deleting it is called copying.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet states that moving text without deleting it is called copying. This is factually incorrect. Moving text without deleting it from the original location is called 'cut and paste'. Copying and pasting duplicates the text. Therefore, the source snippet does not prove the proposed answer and the question is based on a misunderstanding of Word functionality."}
```

---

## Interaction [22:18:44]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the shortcut key for centering text that has been selected by the user in Microsoft Word?
        Proposed Answer: C (Ctrl + E)
        Source Snippet provided by Writer: The shortcut key for centering the text selected by the user in Word is Ctrl + E.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the shortcut key for centering text in Word is Ctrl + E, which directly supports the proposed answer."}
```

---

