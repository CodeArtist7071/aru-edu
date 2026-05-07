# AI Conversation Log: pipeline_Arihant_Computer_Awareness_pdf_55
Model: gemini-2.5-flash-lite
Date: 2026-04-15T11:10:01.643299

## Interaction [11:10:07]

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

    CONTEXT TEXT (SEGMENT AT 55%):
    nks help to create links between
the various web pages. For creating hyperlinks
we need to have a hypertext.
HyperText is the text that appears on the page.
on which we can click and reach to another
page with which it is linked. It is the concept
that has made www a more flexible and easy to
use system. HyperText is also a combination of
hyperlinks and multimedia.
Wireless Application
Protocol (WAP)
Intern
collec
The
portio
the fas
web le
publis
WWW
The fol
User-f
smooth
Interne
Maltim
to creat
various
Interac
Hyperlin
checkbo
Frames
A WAP browser is a commonly used web
browser for small mobile devices such as cell
Voice over Internet Protocol (VoIP)
phones.
It allows delivery of voice communication over
IP networks. e.g., IP calls.
Downloaded From: www.EasyEngineering.net
ARTS TO
section o
Web P
The back
and multi
Created
umber of
at are sto

--- PAGE BREAK ---

CP/IP
rmat)
ased
ernet
and
is of
that
n the
as no
PP)
your
em is
Smits
d to
age
arch
is a
ther
ame
een
inks
age.
ther
cept
y to
m of
veb
cell
P)
ver
Downloaded From: www.EasyEngineering.net
Internet and its Services
Internet Related Terms
World Wide Web (WWW)
www
was
introduced on 13th March, 1989.
The world wide web is a system of Internet
servers
that
multimedia
on a
supports
hypertext
and
on the
to access several Internet protocols
single interface. The world wide web is
often abbreviated as the web or WWW. The
world wide web is a way of exchanging
information between computers
Internet, try to tie them together into a vast
collection of interactive multimedia resources.
The world wide web (the web) is only a
portion of what makes
the Internet, but it is
the fastest growing part of the Internet. The
web lets people, organisations and companies
publish information for other people to see.
WWW Attributes
up
The following are the various attributes of www
User-friendly The
www resource works
smoothly with most web browsers, such as
Internet Explorer, Firefox etc.
Multimedia Documents www allows users
to create and display web pages that contains
various graphics, audio, video, animation and
text.
Interactive www provides interactivity using
Hyperlinks and input boxes (i.e., textboxes and
checkboxes).
Frames www supports frames that allows
users to display more than one independent
section on a single web page.
Web Page
121
and are connected to one another using hyperlinks.
These web pages can be seen by anyone through
their computer's web browser.
The backbone of the world wide web is made
of files, called pages or web pages, containing
both text
The main or
page.
information and links to resources -
and multimedia - throughout the Internet. It is
created using HTML (HyperText Markup
Language). The web is a collection of large
number of computer documents or web pages
that are stored on computers around the world
first page of a website is known as home
Home
About Us
Careers
Trade & Media
News & Events
Blog
arihant
Inspiring Minds.Inspiring Lives
Your true Companion
in Your Success...
E
    
```

### Response:
```json
{
  "exam_board": "f81eea7e-3e58-4fe6-ac6c-82682450a830",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Internet & Networking",
  "confidence": 0.95
}
```

---

## Interaction [11:10:15]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Internet & Networking
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    nks help to create links between
the various web pages. For creating hyperlinks
we need to have a hypertext.
HyperText is the text that appears on the page.
on which we can click and reach to another
page with which it is linked. It is the concept
that has made www a more flexible and easy to
use system. HyperText is also a combination of
hyperlinks and multimedia.
Wireless Application
Protocol (WAP)
Intern
collec
The
portio
the fas
web le
publis
WWW
The fol
User-f
smooth
Interne
Maltim
to creat
various
Interac
Hyperlin
checkbo
Frames
A WAP browser is a commonly used web
browser for small mobile devices such as cell
Voice over Internet Protocol (VoIP)
phones.
It allows delivery of voice communication over
IP networks. e.g., IP calls.
Downloaded From: www.EasyEngineering.net
ARTS TO
section o
Web P
The back
and multi
Created
umber of
at are sto

--- PAGE BREAK ---

CP/IP
rmat)
ased
ernet
and
is of
that
n the
as no
PP)
your
em is
Smits
d to
age
arch
is a
ther
ame
een
inks
age.
ther
cept
y to
m of
veb
cell
P)
ver
Downloaded From: www.EasyEngineering.net
Internet and its Services
Internet Related Terms
World Wide Web (WWW)
www
was
introduced on 13th March, 1989.
The world wide web is a system of Internet
servers
that
multimedia
on a
supports
hypertext
and
on the
to access several Internet protocols
single interface. The world wide web is
often abbreviated as the web or WWW. The
world wide web is a way of exchanging
information between computers
Internet, try to tie them together into a vast
collection of interactive multimedia resources.
The world wide web (the web) is only a
portion of what makes
the Internet, but it is
the fastest growing part of the Internet. The
web lets people, organisations and companies
publish information for other people to see.
WWW Attributes
up
The following are the various attributes of www
User-friendly The
www resource works
smoothly with most web browsers, such as
Internet Explorer, Firefox etc.
Multimedia Documents www allows users
to create and display web pages that contains
various graphics, audio, video, animation and
text.
Interactive www provides interactivity using
Hyperlinks and input boxes (i.e., textboxes and
checkboxes).
Frames www supports frames that allows
users to display more than one independent
section on a single web page.
Web Page
121
and are connected to one another using hyperlinks.
These web pages can be seen by anyone through
their computer's web browser.
The backbone of the world wide web is made
of files, called pages or web pages, containing
both text
The main or
page.
information and links to resources -
and multimedia - throughout the Internet. It is
created using HTML (HyperText Markup
Language). The web is a collection of large
number of computer documents or web pages
that are stored on computers around the world
first page of a website is known as home
Home
About Us
Careers
Trade & Media
News & Events
Blog
arihant
Inspiring Minds.Inspiring Lives
Your true Companion
in Your Success...
Entrance
Examination
Magazines
E-Learning
Curriculum
Website
group
Arihant Web Page
A
of web pages that follow the same theme
and are connected together with hyperlinks is called
a website. In other term, "A website is a collection of
digital documents, primly HTML files, that are
linked together and that exist on the web under the
same domain".
Websites and web pages are written in a coding
language that makes it possible to add pictures, sound
and interactivity to plain old text, making people's
first
very page
reading experience more exciting. The
of a website is called home page of that website.
For example, http://www.carwale.com is a website
while http://www.carwale.com/new/ is a webpage.
Web Browser
Web browser is a software application that is used to
locate, retrieve and also display content on the world
wide web, including web pages. Web browsers are
programs used to explore the Internet.
We can install more than one web browser on a
single computer. The user can navigate through files,
folders and websites with the help of a browser.
Downloaded From: www.EasyEnginering net

--- PAGE BREAK ---

122
Downloaded From: www.EasyEngineering.net
There are two types of web browsers
Text Web Browser
A web browser that display only text-based
information is known as text web browser. For
example, Lynx, which provides access to the
Internet in the text mode only.
Graphical Web Browser
A web browser that support both text and
graphic information is known as graphical web
browser. The major graphical web browsers are
Internet Explorer, Firefox, Netscape, Safari,
Google Chrome and Opera.
The first graphical web browser was NCSA
Mosaic.
Some Popular
Graphical Web Browsers
Netscape
It is one of the original web browsers.
the
Netscape comprises major N
portion of the browser market.
Netscape was introduced in 1994.
Internet Explorer (IE)
e
It is a product of Microsoft.
This is the most commonly used
browser in the universe. This
was introduced in 1995 along
with Windows 95 launch and it
has passed Netscape popularity in 1998.
Firefox
It is a new browser derived from
Mozilla. It was released in 2004
and has grown to be the second
most popular browser on the
Internet.
Google Chrome
This web browser was developed by
Google. Its beta and commercial
versions were released in September
2008 for Microsoft Windows.
Safari
Computer Awareness
It is a web browser developed by Apple
Incorporation and included in Mac OS
X. It was first released as a public beta in
January 2003. Safari provides good
support
etc.
Opera
for latest technologies like XHTML, CSS2
0
It is smaller and faster than most other
browsers, yet it is full featured.. It is the
third most popular mobile web browser in
November 2013. It includes tabbed
browsing, page zooming, mouse gestures features.
Web Server
A web server is a computer program that serves
requested HTML pages or files. A web client is the
requesting program associated with the user. The
web browser is a client that request HTML files
from web servers. The server computer will deliver
those web
that
them
computers request
pages to the
and may also do other processing with the web
pages, such as calculations and entries into
databases.
up
of a
Every web server that is connected to the Internet is
given a unique address i.e., IP address made
series of four numbers between 0 to 256 separated
by periods.
For example, 68.178.157.132 or 68.122.35.127.
Web server software generally requires a fairly robust
operating system like Unix, Windows NT. Every
website need to be stored on a computer called the
web server from which it can be accessed.
Currently, there are five major web servers commonly
used for hosting websites given below.
Apache HTTP Server
It is developed by Apache Software Foundation. The
Apache HTTP server is the most
popular web
hosting server in the world.
This open source software can be installed on
virtually all operating systems including Windows
60% of
Linux, Mac OSX, Unix, etc. At present,
server machines run on the apache web server.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

CSS2
0
ures.
serves
is the
r. The
L files
deliver
t them
e web
s into
ernet is
up of a
parated
127.
robust
Every
lled the
mmonly
on. The
lar web
alled on
Vindows
60% of
CIVICES
Downloaded From: www.EasyEngineering.net
Internet Information Services (IIS)
Internet Information Services (IIS) is a product of
Microsoft and is considered to
high-performance web hosting server. It is easily
administrable and integrated with the windows
platforms.
Lighttpd
be
a very
This is a free web hosting server distributed under
the BSD license. The Lighttpd is considered fast,
reliable, secure, and power efficient CPU. Lighttpd
web servers are compatible with Windows, Linux,
Mac OS X, Unix and Solaris operating systems.
Sun Java System Web Server
It is developed by Sun Microsystems. It is not an
open source server. It supports Windows, Linux,
and Unix. This web hosting server is suitable for
medium and large website hosting.
Jigsaw Server
This is a free open source server for website hosting
that comes straight from the world wide web
Consortium (W3C). The Jigsaw web hosting server
is written in Java. It supports different platforms like
Linux, Mac OS X, windows, Unix, FreeBSD etc.
Web Address and URL
A web address identifies the location of a specific
the Internet,
web
page
on
such
as
http://www.learnyoga.com. On the web, web
addresses are called URLs. URL stands for Uniform
Resource Locator. It is the web address for a website
or a web page.
stored on
The URL specifies the Internet address of a file
a host computer connected to the
Internet. The URL contains the name of the
protocol to be used to access the file resource, a
that identifies a specific computer on
domain
name
the Internet and a pathname, with hierarchical
description that specifies the location of a file in that
computer.
Tim Berners Lee created the first URL in 1991 to
allow the publishing of hyperlinks on the world
wide web.
123
Each URL has several parts which can be
demonstrated using the address
http://www.google.com/services/index.htm'
http:// This part of the address indicates that
it is a web page. It also identifies the protocol or
type of server.
www.This indicates that the web page is a part
of the world wide web. Many websites do not
use WWW but are still part of the web.
google.com This part of the address is the
domain name and indicates the unique
address of a website. The domain name also
often indicates what the site is about.
For example, www.dog.com is a website about
dogs.
/services/ The '/' symbol indicates you have
moved into a specific directory in the websites.
Directories are like the folders on your computer
and help to organise web pages in a website.
index.htm A word with 'htm' or 'html' following
it indicates the name of the specific page along
with the path of a web page in the website.
Domain Name
Domain is a group of network resources
assigned to a group of users. A domain name is
a way to identify and locate computers
connected to the Internet. A domain name
must be unique. It always have two or more
parts, separated by periods (dots).
For example, google.com, yahoo.com etc.
Domain Abbreviation
Domians are organised by the type of
organisations and by country. A three-letter
abbreviation indicating the organization and
usually two-letter abbreviation indicating the
country name.
Most common
organization are
info
com
domain abbreviations for
Informational organisation
Commercial
Government
gov
edu
Education
mil
Military
net
Network resources
org
Usually Non-profit organisation
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
124
Some domain abbreviations for country are
in
au
fr
nz
India
Australia
France
New Zealand
uk
United Kingdom
Domain Name System (DNS)
The Domain Name System stores and associates many
types of information with domain names, but most
importantly, it translates domain names (computers
host names) to IP addresses. It also lists mail exchange
servers accepting E-mail for each domain. DNS is an
essential
of contemporary
component
Internet use.
The naming scheme by which servers are identified is
known as the domain name system. Another method
of addressing servers is based on numbers.
For example, 204.157.54.9. Such addresses are called
IP addresses.
IP Address
IP addresses are in aaa.aaa.aaa.aaa format, where
each aaa is a number from o to 255. The length of IP
address is 4 bytes. IP addresses identify the host
computers, so that packets of information reach the
correct computer. The current version of IP i.e., IPV4
has size 32 bits. A newer version of IP i.e., IPV6 having
size 128 bits is soon going to replace IPV4.
The IP address has the following characteristics in
common
• IP addresses are unique.
◆ No two machines can have the same IP number.
• IP addresses are also global and standardised.
All machines connected to the Internet agree to
use the same sch
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "WAP browser",
      "statement": "A WAP browser is a commonly used web browser for small mobile devices such as cell phones."
    },
    {
      "concept": "VoIP",
      "statement": "Voice over Internet Protocol (VoIP) allows delivery of voice communication over IP networks, e.g., IP calls."
    },
    {
      "concept": "WWW introduction",
      "statement": "The world wide web was introduced on 13th March, 1989."
    },
    {
      "concept": "WWW growth",
      "statement": "The world wide web is only a portion of what makes the Internet, but it is the fastest growing part of the Internet."
    },
    {
      "concept": "Web page creation",
      "statement": "Web pages are created using HTML (HyperText Markup Language)."
    },
    {
      "concept": "Website definition",
      "statement": "A website is a collection of digital documents, primly HTML files, that are linked together and that exist on the web under the same domain."
    },
    {
      "concept": "Web browser function",
      "statement": "Web browsers are programs used to explore the Internet."
    },
    {
      "concept": "Graphical web browser origin",
      "statement": "The first graphical web browser was NCSA Mosaic."
    },
    {
      "concept": "Internet Explorer",
      "statement": "Internet Explorer was introduced in 1995 along with Windows 95 launch and it has passed Netscape popularity in 1998."
    },
    {
      "concept": "Firefox",
      "statement": "Firefox was released in 2004 and has grown to be the second most popular browser on the Internet."
    },
    {
      "concept": "Google Chrome release",
      "statement": "Google Chrome's beta and commercial versions were released in September 2008 for Microsoft Windows."
    },
    {
      "concept": "Safari release",
      "statement": "Safari was first released as a public beta in January 2003."
    },
    {
      "concept": "Opera popularity",
      "statement": "Opera was the third most popular mobile web browser in November 2013."
    },
    {
      "concept": "Web server IP address",
      "statement": "Every web server that is connected to the Internet is given a unique address i.e., IP address made up of a series of four numbers between 0 to 256 separated by periods."
    },
    {
      "concept": "Apache HTTP Server market share",
      "statement": "At present, 60% of server machines run on the apache web server."
    },
    {
      "concept": "URL creation",
      "statement": "Tim Berners Lee created the first URL in 1991 to allow the publishing of hyperlinks on the world wide web."
    },
    {
      "concept": "Domain name example",
      "statement": "www.dog.com is a website about dogs."
    },
    {
      "concept": "Domain abbreviations",
      "statement": "Domains are organised by the type of organisations and by country. A three-letter abbreviation indicating the organization and usually two-letter abbreviation indicating the country name."
    },
    {
      "concept": "DNS function",
      "statement": "The Domain Name System stores and associates many types of information with domain names, but most importantly, it translates domain names (computers host names) to IP addresses."
    },
    {
      "concept": "IP address format",
      "statement": "IP addresses are in aaa.aaa.aaa.aaa format, where each aaa is a number from o to 255."
    },
    {
      "concept": "IP address length",
      "statement": "The length of IP address is 4 bytes."
    },
    {
      "concept": "IPV4 size",
      "statement": "The current version of IP i.e., IPV4 has size 32 bits."
    },
    {
      "concept": "IPV6 size",
      "statement": "A newer version of IP i.e., IPV6 having size 128 bits is soon going to replace IPV4."
    },
    {
      "concept": "IP address uniqueness",
      "statement": "IP addresses are unique; no two machines can have the same IP number."
    },
    {
      "concept": "IP address standardization",
      "statement": "IP addresses are also global and standardised; all machines connected to the Internet agree to use the same scheme."
    }
  ],
  "definitions": [
    {
      "term": "HyperText",
      "meaning": "The text that appears on the page on which we can click and reach to another page with which it is linked. It is the concept that has made www a more flexible and easy to use system. HyperText is also a combination of hyperlinks and multimedia."
    },
    {
      "term": "Web Page",
      "meaning": "The backbone of the world wide web is made of files, called pages or web pages, containing both text and multimedia - throughout the Internet. It is created using HTML (HyperText Markup Language). The web is a collection of large number of computer documents or web pages that are stored on computers around the world."
    },
    {
      "term": "Home page",
      "meaning": "The main or first page of a website is known as home page."
    },
    {
      "term": "Website",
      "meaning": "A group of web pages that follow the same theme and are connected together with hyperlinks is called a website."
    },
    {
      "term": "Web Browser",
      "meaning": "A software application that is used to locate, retrieve and also display content on the world wide web, including web pages. Web browsers are programs used to explore the Internet."
    },
    {
      "term": "Text Web Browser",
      "meaning": "A web browser that display only text-based information is known as text web browser."
    },
    {
      "term": "Graphical Web Browser",
      "meaning": "A web browser that support both text and graphic information is known as graphical web browser."
    },
    {
      "term": "Web Server",
      "meaning": "A computer program that serves requested HTML pages or files. A web client is the requesting program associated with the user. The web browser is a client that request HTML files from web servers."
    },
    {
      "term": "URL",
      "meaning": "Uniform Resource Locator. It is the web address for a website or a web page. The URL specifies the Internet address of a file stored on a host computer connected to the Internet."
    },
    {
      "term": "Domain Name",
      "meaning": "A way to identify and locate computers connected to the Internet. A domain name must be unique. It always have two or more parts, separated by periods (dots)."
    },
    {
      "term": "Domain Name System (DNS)",
      "meaning": "The naming scheme by which servers are identified. Another method of addressing servers is based on numbers. Such addresses are called IP addresses."
    },
    {
      "term": "IP Address",
      "meaning": "Addresses based on numbers used to identify host computers, so that packets of information reach the correct computer."
    }
  ]
}
```

---

## Interaction [11:11:24]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Internet & Networking.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "WAP browser",
      "statement": "A WAP browser is a commonly used web browser for small mobile devices such as cell phones."
    },
    {
      "concept": "VoIP",
      "statement": "Voice over Internet Protocol (VoIP) allows delivery of voice communication over IP networks, e.g., IP calls."
    },
    {
      "concept": "WWW introduction",
      "statement": "The world wide web was introduced on 13th March, 1989."
    },
    {
      "concept": "WWW growth",
      "statement": "The world wide web is only a portion of what makes the Internet, but it is the fastest growing part of the Internet."
    },
    {
      "concept": "Web page creation",
      "statement": "Web pages are created using HTML (HyperText Markup Language)."
    },
    {
      "concept": "Website definition",
      "statement": "A website is a collection of digital documents, primly HTML files, that are linked together and that exist on the web under the same domain."
    },
    {
      "concept": "Web browser function",
      "statement": "Web browsers are programs used to explore the Internet."
    },
    {
      "concept": "Graphical web browser origin",
      "statement": "The first graphical web browser was NCSA Mosaic."
    },
    {
      "concept": "Internet Explorer",
      "statement": "Internet Explorer was introduced in 1995 along with Windows 95 launch and it has passed Netscape popularity in 1998."
    },
    {
      "concept": "Firefox",
      "statement": "Firefox was released in 2004 and has grown to be the second most popular browser on the Internet."
    },
    {
      "concept": "Google Chrome release",
      "statement": "Google Chrome's beta and commercial versions were released in September 2008 for Microsoft Windows."
    },
    {
      "concept": "Safari release",
      "statement": "Safari was first released as a public beta in January 2003."
    },
    {
      "concept": "Opera popularity",
      "statement": "Opera was the third most popular mobile web browser in November 2013."
    },
    {
      "concept": "Web server IP address",
      "statement": "Every web server that is connected to the Internet is given a unique address i.e., IP address made up of a series of four numbers between 0 to 256 separated by periods."
    },
    {
      "concept": "Apache HTTP Server market share",
      "statement": "At present, 60% of server machines run on the apache web server."
    },
    {
      "concept": "URL creation",
      "statement": "Tim Berners Lee created the first URL in 1991 to allow the publishing of hyperlinks on the world wide web."
    },
    {
      "concept": "Domain name example",
      "statement": "www.dog.com is a website about dogs."
    },
    {
      "concept": "Domain abbreviations",
      "statement": "Domains are organised by the type of organisations and by country. A three-letter abbreviation indicating the organization and usually two-letter abbreviation indicating the country name."
    },
    {
      "concept": "DNS function",
      "statement": "The Domain Name System stores and associates many types of information with domain names, but most importantly, it translates domain names (computers host names) to IP addresses."
    },
    {
      "concept": "IP address format",
      "statement": "IP addresses are in aaa.aaa.aaa.aaa format, where each aaa is a number from o to 255."
    },
    {
      "concept": "IP address length",
      "statement": "The length of IP address is 4 bytes."
    },
    {
      "concept": "IPV4 size",
      "statement": "The current version of IP i.e., IPV4 has size 32 bits."
    },
    {
      "concept": "IPV6 size",
      "statement": "A newer version of IP i.e., IPV6 having size 128 bits is soon going to replace IPV4."
    },
    {
      "concept": "IP address uniqueness",
      "statement": "IP addresses are unique; no two machines can have the same IP number."
    },
    {
      "concept": "IP address standardization",
      "statement": "IP addresses are also global and standardised; all machines connected to the Internet agree to use the same scheme."
    }
  ],
  "definitions": [
    {
      "term": "HyperText",
      "meaning": "The text that appears on the page on which we can click and reach to another page with which it is linked. It is the concept that has made www a more flexible and easy to use system. HyperText is also a combination of hyperlinks and multimedia."
    },
    {
      "term": "Web Page",
      "meaning": "The backbone of the world wide web is made of files, called pages or web pages, containing both text and multimedia - throughout the Internet. It is created using HTML (HyperText Markup Language). The web is a collection of large number of computer documents or web pages that are stored on computers around the world."
    },
    {
      "term": "Home page",
      "meaning": "The main or first page of a website is known as home page."
    },
    {
      "term": "Website",
      "meaning": "A group of web pages that follow the same theme and are connected together with hyperlinks is called a website."
    },
    {
      "term": "Web Browser",
      "meaning": "A software application that is used to locate, retrieve and also display content on the world wide web, including web pages. Web browsers are programs used to explore the Internet."
    },
    {
      "term": "Text Web Browser",
      "meaning": "A web browser that display only text-based information is known as text web browser."
    },
    {
      "term": "Graphical Web Browser",
      "meaning": "A web browser that support both text and graphic information is known as graphical web browser."
    },
    {
      "term": "Web Server",
      "meaning": "A computer program that serves requested HTML pages or files. A web client is the requesting program associated with the user. The web browser is a client that request HTML files from web servers."
    },
    {
      "term": "URL",
      "meaning": "Uniform Resource Locator. It is the web address for a website or a web page. The URL specifies the Internet address of a file stored on a host computer connected to the Internet."
    },
    {
      "term": "Domain Name",
      "meaning": "A way to identify and locate computers connected to the Internet. A domain name must be unique. It always have two or more parts, separated by periods (dots)."
    },
    {
      "term": "Domain Name System (DNS)",
      "meaning": "The naming scheme by which servers are identified. Another method of addressing servers is based on numbers. Such addresses are called IP addresses."
    },
    {
      "term": "IP Address",
      "meaning": "Addresses based on numbers used to identify host computers, so that packets of information reach the correct computer."
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
    "question": "Which of the following is a commonly used web browser for small mobile devices such as cell phones?",
    "options": {
      "A": "NCSA Mosaic",
      "B": "Internet Explorer",
      "C": "WAP browser",
      "D": "Firefox"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "source_snippet": "A WAP browser is a commonly used web browser for small mobile devices such as cell phones."
  },
  {
    "question": "What technology allows for voice communication over IP networks, such as IP calls?",
    "options": {
      "A": "WWW",
      "B": "VoIP",
      "C": "HTML",
      "D": "URL"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "Voice over Internet Protocol (VoIP) allows delivery of voice communication over IP networks, e.g., IP calls."
  },
  {
    "question": "When was the World Wide Web first introduced?",
    "options": {
      "A": "March 13, 1989",
      "B": "January 2003",
      "C": "September 2008",
      "D": "1995"
    },
    "correct_answer": "A",
    "difficulty_level": "Easy",
    "source_snippet": "The world wide web was introduced on 13th March, 1989."
  },
  {
    "question": "Which of the following is the fastest growing part of the Internet?",
    "options": {
      "A": "VoIP",
      "B": "The World Wide Web",
      "C": "Domain Name System",
      "D": "Web Servers"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "The world wide web is only a portion of what makes the Internet, but it is the fastest growing part of the Internet."
  },
  {
    "question": "What markup language is primarily used for creating web pages?",
    "options": {
      "A": "CSS",
      "B": "JavaScript",
      "C": "HTML",
      "D": "XML"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "source_snippet": "Web pages are created using HTML (HyperText Markup Language)."
  },
  {
    "question": "What is the term for a collection of digital documents, primarily HTML files, linked together under the same domain?",
    "options": {
      "A": "Web Page",
      "B": "URL",
      "C": "Website",
      "D": "HyperText"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "source_snippet": "A website is a collection of digital documents, primly HTML files, that are linked together and that exist on the web under the same domain."
  },
  {
    "question": "Which program is used to locate, retrieve, and display content on the World Wide Web?",
    "options": {
      "A": "Web Server",
      "B": "Web Browser",
      "C": "DNS",
      "D": "IP Address"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "Web browsers are programs used to explore the Internet."
  },
  {
    "question": "What was the first graphical web browser developed?",
    "options": {
      "A": "Netscape Navigator",
      "B": "Internet Explorer",
      "C": "Firefox",
      "D": "NCSA Mosaic"
    },
    "correct_answer": "D",
    "difficulty_level": "Easy",
    "source_snippet": "The first graphical web browser was NCSA Mosaic."
  },
  {
    "question": "Every web server connected to the Internet is assigned a unique address consisting of four numbers between 0 and 256, separated by periods. What is this address called?",
    "options": {
      "A": "Domain Name",
      "B": "URL",
      "C": "IP Address",
      "D": "MAC Address"
    },
    "correct_answer": "C",
    "difficulty_level": "Medium",
    "source_snippet": "Every web server that is connected to the Internet is given a unique address i.e., IP address made up of a series of four numbers between 0 to 256 separated by periods."
  },
  {
    "question": "What is the primary function of the Domain Name System (DNS)?",
    "options": {
      "A": "To assign IP addresses to devices",
      "B": "To store and translate domain names to IP addresses",
      "C": "To serve HTML pages to web browsers",
      "D": "To encrypt internet traffic"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "The Domain Name System stores and associates many types of information with domain names, but most importantly, it translates domain names (computers host names) to IP addresses."
  }
]
```

---

## Interaction [11:11:27]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is a commonly used web browser for small mobile devices such as cell phones?
        Proposed Answer: C (WAP browser)
        Source Snippet provided by Writer: A WAP browser is a commonly used web browser for small mobile devices such as cell phones.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a WAP browser is a commonly used web browser for small mobile devices such as cell phones, which perfectly matches the proposed answer C."}
```

---

## Interaction [11:11:31]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What technology allows for voice communication over IP networks, such as IP calls?
        Proposed Answer: B (VoIP)
        Source Snippet provided by Writer: Voice over Internet Protocol (VoIP) allows delivery of voice communication over IP networks, e.g., IP calls.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet explicitly states that 'Voice over Internet Protocol (VoIP) allows delivery of voice communication over IP networks, e.g., IP calls.' This directly supports the proposed answer that VoIP is the technology for voice communication over IP networks like IP calls."
}
```

---

## Interaction [11:11:34]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: When was the World Wide Web first introduced?
        Proposed Answer: A (March 13, 1989)
        Source Snippet provided by Writer: The world wide web was introduced on 13th March, 1989.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet directly states that the World Wide Web was introduced on March 13, 1989, which perfectly matches the proposed answer."
}
```

---

## Interaction [11:11:38]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is the fastest growing part of the Internet?
        Proposed Answer: B (The World Wide Web)
        Source Snippet provided by Writer: The world wide web is only a portion of what makes the Internet, but it is the fastest growing part of the Internet.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet explicitly states that 'the world wide web is the fastest growing part of the Internet', which directly supports the proposed answer."
}
```

---

## Interaction [11:11:41]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What markup language is primarily used for creating web pages?
        Proposed Answer: C (HTML)
        Source Snippet provided by Writer: Web pages are created using HTML (HyperText Markup Language).

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'Web pages are created using HTML (HyperText Markup Language)', which directly supports the proposed answer that HTML is primarily used for creating web pages."}
```

---

## Interaction [11:11:44]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the term for a collection of digital documents, primarily HTML files, linked together under the same domain?
        Proposed Answer: C (Website)
        Source Snippet provided by Writer: A website is a collection of digital documents, primly HTML files, that are linked together and that exist on the web under the same domain.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly defines a website as 'a collection of digital documents, primly HTML files, that are linked together and that exist on the web under the same domain,' which perfectly matches the proposed answer and the question asked."}
```

---

## Interaction [11:11:47]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which program is used to locate, retrieve, and display content on the World Wide Web?
        Proposed Answer: B (Web Browser)
        Source Snippet provided by Writer: Web browsers are programs used to explore the Internet.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that 'Web browsers are programs used to explore the Internet.' This directly supports the proposed answer that a web browser is used to locate, retrieve, and display content on the World Wide Web, as exploring the internet involves these actions."}
```

---

## Interaction [11:11:51]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What was the first graphical web browser developed?
        Proposed Answer: D (NCSA Mosaic)
        Source Snippet provided by Writer: The first graphical web browser was NCSA Mosaic.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'The first graphical web browser was NCSA Mosaic.' This factually proves the proposed answer, which identifies NCSA Mosaic as the first graphical web browser. The question is also factually accurate."}
```

---

## Interaction [11:11:54]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Every web server connected to the Internet is assigned a unique address consisting of four numbers between 0 and 256, separated by periods. What is this address called?
        Proposed Answer: C (IP Address)
        Source Snippet provided by Writer: Every web server that is connected to the Internet is given a unique address i.e., IP address made up of a series of four numbers between 0 to 256 separated by periods.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Every web server that is connected to the Internet is given a unique address i.e., IP address made up of a series of four numbers between 0 to 256 separated by periods.' This directly supports the proposed answer that the address is called an IP Address."}
```

---

## Interaction [11:11:57]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary function of the Domain Name System (DNS)?
        Proposed Answer: B (To store and translate domain names to IP addresses)
        Source Snippet provided by Writer: The Domain Name System stores and associates many types of information with domain names, but most importantly, it translates domain names (computers host names) to IP addresses.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the Domain Name System 'translates domain names (computers host names) to IP addresses', which directly supports the proposed answer's claim about its primary function."}
```

---

