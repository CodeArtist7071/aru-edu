# AI Conversation Log: pipeline_Arihant_Computer_Awareness_pdf_50
Model: gemini-2.5-flash-lite
Date: 2026-04-14T18:45:34.629061

## Interaction [18:45:41]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment to map it to the database.
    This segment is from approximately 50% into the book.
    
    
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

    CONTEXT TEXT (SEGMENT AT 50%):
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital
    
```

### Response:
```json
{
  "exam_board": null,
  "exam_name": null,
  "year": null,
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Computer Networking Topologies and Models",
  "confidence": 0.9
}
```

---

## Interaction [18:45:46]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Computer Networking Topologies and Models
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital format. In P2P
connection, a couple of computers is connected
via a Universal Serial Bus to transfer files.
In peer-to-peer networking, each or every
computer may be worked as server or client.
Printer
Internet
PC
HUB/Switch
PC
Peer-to-Peer Network
Network Related Terms
◆ Multiplexing It is a technique used for
transmitting signals simultaneously over a
common medium. It involves single path and
multiple channels for data communication.
◆ Code Division Multiple Access (CDMA) It is a
channel access method used by various radio
communication technologies. CDMA employs
spread spectrum technology and a special coding
scheme, where each transmitter is assigned a
code to allow multiple users to be multiplexed
over the same physical channel.
◆ Time Division Multiple Access (TDMA) It is based
on the Time Division Multiplexing (TDM) scheme.
which provides different time slots to different
data streams in a cyclically repetitive frame
structure. It allows several users to share the same
frequency channel by dividing the signal into
different time slots.
It is used in the digital 2G cellular systems GSM,
Personal Digital Cellular (PDC) and iDEN and in the
Digital Enhanced Cordless Telecommunications
(DECT) standard for portable phones.
Packet Switching It refers to method of digital
networking communication that combined all
transmitted data regardless of content, type or
structure into suitable sized blocks, known as
packets. Each packet has header information
about the source, destination, packet numbering,
etc.
• Public Switched Telephone Network (PSTN) It is
designed for telephone, which requires modem for
data communication. It is used for FAX machine also.
• Integrated Services Digital Network (ISDN) It is
used for voice, video and data services. It uses digital
transmission and combines both circuit and packet
switching.
◆ Value Added Network (VAN) It provides Electronic
Data Interchange (EDI) facility. Exchange of
information like invoices, sale purchase order, etc is
done.
Network Interface Card (NIC) It is a computer
hardware component that connects a computer to a
computer network. It provides a physical access to a
networking medium
→ Wireless Local Loop (WLL) It is a wireless
communication link in which a user connects with
network through radio-frequency. It is also known as
a fixed wireless connections. WLL is based on CDMA
technology.
◆ Ethernet It is a widely used technology employing
a bus technology. It was published by IEEE 802.3 in
1985. An ethernet LAN consists of a single coaxial
cable called Ether. It operates at 10 Mbps and
provides a 48-bits address. Fast ethernet operates
at 100 Mbps. The latest version of giga ethernet
operates as 1000 Mbps or 1 Gpbs.
OSI model is a conceptual model, the practical
model is TCP/IP. TCP/IP model consists only 5
layers.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ess
It is
em for
e also.
It is
digital
Dacket
ctronic
ge of
, etc is
mputer
ter to a
ess to a
ireless
ts with
own as
CDMA
ploying
802.3 in
coaxial
ps and
perates
thernet
practical
only 5
------------
Downloaded From: www.EasyEngineering.net
Question Bank
1. To send data/message to and from computers
the network software
information in a
(1) NIC
(3) trailer
(5) None of these
puts the
(2) packet
(4) header
message
2. Geometric arrangement of devices on the
network is called
(1) topology
(3) media
(5) None of these
3. LAN can use
(1) peer-to-peer
(3) Both '1' and '2'
(3) radio-waves
(2) protocols
(4) LAN
architecture.
(2) client and server
(4) Neither '1' and '2'
(5) None of these
4. Wi-Fi uses
(1) optic fiber
(2) phase line
(4) sound-waves
network.
(3) star
[SBI Clerk 2011]
(4) mesh
(5) None of these
5. Hub is associated with
(1) bus
(2) ring
(5) All of these
6. Multiplexing involves
7.
channel.
(1) one, one
(3) multiple, one
(5) None of these
path and.........
[SBI Clerk 2011]
(2) one, multiple
(4) multiple, multiple
...... is the transmission of data between two or
more computers over communication links.
(1) Communication
(3) Data communication
(4) Data networking
(2) Networking
(5) Information networking
8. Communication channel having
(1) 1
(2) 2
(5) None of these
9. The advantage of LAN is
10. Which type of network would use phone lines?
(1) WAN
(3) WWAN
(5) None of these
(2) LAN
(4) Wireless
[SBI Clerk 2012]
11. In simplex channel, flow of data is
(1) always in one direction
(2) always in both direction
(3) in both direction, but one at a time
(4) All of the above
(5) None of the above
12. A packet filtering firewall operates at which of
the following OSI layers?
(1) At the application layer
(2) At the transport layer
(3) At the network
(4) At the gateway layer
(5) Both '2' and '3'
13. Servers are those computers which provide
resources to other computers connected by
(1) network
(3) super computer
(5) None of these
(2) mainframe
(4) client
[SBI Clerk 2009]
14. A combination of hardware and software that
allows communication and electronic transfer
of information between computers is a
(1) network
(3) server
(5) modem
(2) backup system
(4) peripheral
[SBI Clerk 2012]
15. What type of resource is most likely to be a
shared common resource in a computer
network?
[Allahabad Bank Clerk 2010]
(1) Printers
(2) Speakers
(3) Floppy disk drives
(4) Keyboards
(5) None of these
16. A device that connects to a network without
the use of cables is said to be [IBPS Clerk 2012]
(2) cabled
....... types.
(3) 3
(4) 4
(1) distributed
(3) centralised
(5) wireless
[SBI Clerk 2012]
(1) sharing peripherals
(2) backing up your data
(3) saving all your data
(4) accessing the web
(5) automatic printing of data
(4) open source
17. Typical data transfer rate in LAN are of the
order of
(2) kilo bits per second
(1) bits per second
(3) mega bits per second
(4) tera bits per second
(5) None of the above
Downloaded From: www.Easy

--- PAGE BREAK ---

114
Downloaded From: www.EasyEngineering.net
18. Which of the following refers to a small,
single-site network?
(1) PAN
(5) CPU
(2) DSL (3) RAM (4) USB
19. Which of the following topologies is not of
20.
broadcast type?
(1) Star
(3) Ring
(2) Bus
(4) All of these
allows LAN users to share computer
(1) Communication server
(3) File server
(5) None of these
21.
........
is
the
most
important/powerful
(5) None of these
programs and data.
(2) Print server
(4) All of these
Computer Awareness
28. In OSI network architecture, the routing is
performed by
(1) network layer
(3) transport layer
(5) None of these
[IBPS Clerk 2012]
(2) data link layer
(4) session layer
29. Which of the following is considered a broad
band communication channel?, [SBI PO 2010]
(1) Coaxial cable (2) Fiber optics cable
(3) Microwave circuits (4) All of these
(5) None of these
30. A device operating at the physical layer is
called a
(1) bridge
(3) repeater
(5) None of these
(2) router
(4) All of these
computer in a typical network. [SBI PO 2013]
(1) Desktop
(3) Network server
(5) Network switch
22. P2P is a
(2) Network client
(4) Network station
application architecture.
(1) client/server
(3) centralised
(5) None of these
23. Ethernet uses
(1) bus topology
(3) mesh topology
(5) None of these
(2) distributed
(4) 1-tier
[IBPS Clerk 2012]
(2) ring topology
(4) All of these
31. A protocol is a set of rules governing a time
sequence of events that must take place
(1) between peers
(2) between an interface
(3) between modems
(4) across an interface
(5) None of the above
32. An inter-company network which used to
distribute information, documents files and
database, is called as
(1) LAN
(2) Switch
(3) WAN
(4) MAN
(5) None of these
D
3
39
40
41
24. In a ring topology, the computer in possession
of the ........ can transmit data.
(1) packet
(2) data
(3) access method
(4) token
(5) None of these
25. Which of the following represents the fastest
[SBI Clerk 2012]
data transmission speed?
(1) Bandwidth
(3) gbps
(5) mbps
(2) bps
(4) kbps
33. Which of the following is not a network device?
(1) Router
(3) Modem
(5) None of these
(2) Switch
(4) Bridge
34. How many bits are there in the ethernet
address?
(1) 64 bits
(3) 32 bits
(5) None of these
[SBI Clerk 2011]
(2) 48 bits
(4) 16 bits
42
26. Network components are connected to the
same cable in the
(1) star
(2) ring
topology.
(3) bus
(4) mesh
(5) mixed
35. How many layers are in the TCP/IP model?
(1) 4 layers
[SBI Clerk 2011]
(2) 5 layers
(3) 6 layers
(4) 7 layers
(5) None of these
S
27. Two or more computers connected to each
other for sharing information form a
(1) network
(3) server
(5) pipeline
(2) router
(4) tunnel
36. What is the use of bridge in network?
(1) To connect LANS
(2) To separate LANS
(3) To control network speed
(4) All of the above
1
2
3
4.
Downloaded From: www.EasyEngineering.net
(5) None of the above

--- PAGE BREAK ---

eness
routing is
Clerk 2012]
layer
yer
d a broad
PO 2010]
cs cable
se
ce
layer is
g a time
ace
used to
Files and
device?
ethernet
erk 2011]
odel?
erk 2011]
Data
Communication: www.EasyEngineering.net
"Networking
37. The first network that has plant
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Mesh topology contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "A tree topology is an extension and variation of star topology."
    },
    {
      "concept": "Client-Server Network",
      "statement": "In client-server network, one computer works as server and others as client."
    },
    {
      "concept": "Client-Server Network",
      "statement": "In client-server network, client acts as the active device and server behaves as passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "In peer-to-peer networking, each or every computer may be worked as server or client."
    },
    {
      "concept": "Ethernet",
      "statement": "Ethernet operates at 10 Mbps and provides a 48-bits address."
    },
    {
      "concept": "Fast Ethernet",
      "statement": "Fast ethernet operates at 100 Mbps."
    },
    {
      "concept": "Gigabit Ethernet",
      "statement": "The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "concept": "TCP/IP Model",
      "statement": "TCP/IP model consists only 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "It is also known as completely interconnected topology. In mesh topology, every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node."
    },
    {
      "term": "Tree Topology",
      "meaning": "This is a network topology in which nodes are arranged as a tree. The function of the central node in this topology may be distributed. Its basic structure is like an inverted tree, where the root acts as a server. It allows more devices to be attached to a single hub."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server). It is a network architecture which separates the client from the server. It is scalable architecture."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "It is also known as P2P network. This computer network relies on computing power at the edges of a connection rather than in the network itself. It is used for sharing content like audio, video, data or anything in digital format. In P2P connection, a couple of computers is connected via a Universal Serial Bus to transfer files."
    },
    {
      "term": "Multiplexing",
      "meaning": "It is a technique used for transmitting signals simultaneously over a common medium. It involves single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "It is a channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "It is based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "It refers to method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "It is designed for telephone, which requires modem for data communication. It is used for FAX machine also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "It is used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "It provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "It is a computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "It is a wireless communication link in which a user connects with network through radio-frequency. It is also known as a fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "It is a widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether."
    },
    {
      "term": "OSI model",
      "meaning": "OSI model is a conceptual model."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model is TCP/IP."
    }
  ]
}
```

---

## Interaction [18:46:31]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Computer Networking Topologies and Models.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Mesh topology contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "A tree topology is an extension and variation of star topology."
    },
    {
      "concept": "Client-Server Network",
      "statement": "In client-server network, one computer works as server and others as client."
    },
    {
      "concept": "Client-Server Network",
      "statement": "In client-server network, client acts as the active device and server behaves as passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "In peer-to-peer networking, each or every computer may be worked as server or client."
    },
    {
      "concept": "Ethernet",
      "statement": "Ethernet operates at 10 Mbps and provides a 48-bits address."
    },
    {
      "concept": "Fast Ethernet",
      "statement": "Fast ethernet operates at 100 Mbps."
    },
    {
      "concept": "Gigabit Ethernet",
      "statement": "The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "concept": "TCP/IP Model",
      "statement": "TCP/IP model consists only 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "It is also known as completely interconnected topology. In mesh topology, every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node."
    },
    {
      "term": "Tree Topology",
      "meaning": "This is a network topology in which nodes are arranged as a tree. The function of the central node in this topology may be distributed. Its basic structure is like an inverted tree, where the root acts as a server. It allows more devices to be attached to a single hub."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server). It is a network architecture which separates the client from the server. It is scalable architecture."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "It is also known as P2P network. This computer network relies on computing power at the edges of a connection rather than in the network itself. It is used for sharing content like audio, video, data or anything in digital format. In P2P connection, a couple of computers is connected via a Universal Serial Bus to transfer files."
    },
    {
      "term": "Multiplexing",
      "meaning": "It is a technique used for transmitting signals simultaneously over a common medium. It involves single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "It is a channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "It is based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "It refers to method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "It is designed for telephone, which requires modem for data communication. It is used for FAX machine also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "It is used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "It provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "It is a computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "It is a wireless communication link in which a user connects with network through radio-frequency. It is also known as a fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "It is a widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether."
    },
    {
      "term": "OSI model",
      "meaning": "OSI model is a conceptual model."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model is TCP/IP."
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
    "question": "Which network topology is characterized by having at least two nodes with multiple paths between them?",
    "options": {
      "A": "Star Topology",
      "B": "Bus Topology",
      "C": "Mesh Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Mesh topology contains at least two nodes with two or more paths between them."
  },
  {
    "question": "A tree topology is described as an extension and variation of which other topology?",
    "options": {
      "A": "Bus Topology",
      "B": "Star Topology",
      "C": "Mesh Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A tree topology is an extension and variation of star topology."
  },
  {
    "question": "In a client-server network architecture, what is the role of the client?",
    "options": {
      "A": "To provide resources and services to other computers.",
      "B": "To act as a passive device awaiting requests.",
      "C": "To actively request services from a server.",
      "D": "To function as both a client and a server simultaneously."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "In client-server network, client acts as the active device and server behaves as passively."
  },
  {
    "question": "Which network model allows each computer to function as either a server or a client?",
    "options": {
      "A": "Client-Server Network",
      "B": "Bus Network",
      "C": "Peer-to-Peer Network",
      "D": "Star Network"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "In peer-to-peer networking, each or every computer may be worked as server or client."
  },
  {
    "question": "What is the operating speed of Fast Ethernet?",
    "options": {
      "A": "10 Mbps",
      "B": "100 Mbps",
      "C": "1000 Mbps",
      "D": "1 Gbps"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Fast ethernet operates at 100 Mbps."
  },
  {
    "question": "What is the operating speed of Gigabit Ethernet?",
    "options": {
      "A": "10 Mbps",
      "B": "100 Mbps",
      "C": "1000 Mbps",
      "D": "10 Gbps"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
  },
  {
    "question": "How many layers are present in the TCP/IP model?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "7",
      "D": "8"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "TCP/IP model consists only 5 layers."
  },
  {
    "question": "Which of the following is NOT a characteristic of a Mesh Topology?",
    "options": {
      "A": "Every node has a dedicated point-to-point link to every other node.",
      "B": "Provides a bi-directional link between each possible node.",
      "C": "It is also known as completely interconnected topology.",
      "D": "It is a cost-effective solution for large networks due to minimal cabling."
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Hard",
    "source_snippet": "It is also known as completely interconnected topology. In mesh topology, every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node."
  },
  {
    "question": "In a client-server network, which component actively requests services?",
    "options": {
      "A": "Server",
      "B": "Client",
      "C": "Hub",
      "D": "Router"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "In client-server network, client acts as the active device and server behaves as passively."
  },
  {
    "question": "Which technology is based on CDMA and provides wireless communication links for users to connect to a network?",
    "options": {
      "A": "ISDN",
      "B": "PSTN",
      "C": "WLL",
      "D": "VAN"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "WLL is based on CDMA technology."
  }
]
```

---

## Interaction [18:46:35]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which network topology is characterized by having at least two nodes with multiple paths between them?
        Proposed Answer: C (Mesh Topology)
        Source Snippet provided by Writer: Mesh topology contains at least two nodes with two or more paths between them.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a mesh topology has at least two nodes with two or more paths between them, which is exactly what the question asks. The question is also factually correct."}
```

---

## Interaction [18:46:38]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: A tree topology is described as an extension and variation of which other topology?
        Proposed Answer: B (Star Topology)
        Source Snippet provided by Writer: A tree topology is an extension and variation of star topology.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a tree topology is an extension and variation of star topology, which factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [18:46:41]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In a client-server network architecture, what is the role of the client?
        Proposed Answer: C (To actively request services from a server.)
        Source Snippet provided by Writer: In client-server network, client acts as the active device and server behaves as passively.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet states that the client acts as the 'active device' in a client-server network. This directly supports the proposed answer that the client's role is to 'actively request services from a server'."}
```

---

## Interaction [18:46:45]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which network model allows each computer to function as either a server or a client?
        Proposed Answer: C (Peer-to-Peer Network)
        Source Snippet provided by Writer: In peer-to-peer networking, each or every computer may be worked as server or client.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
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

## Interaction [18:46:48]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the operating speed of Fast Ethernet?
        Proposed Answer: B (100 Mbps)
        Source Snippet provided by Writer: Fast ethernet operates at 100 Mbps.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that Fast Ethernet operates at 100 Mbps, which directly supports the proposed answer B (100 Mbps). The question is also factually accurate."}
```

---

## Interaction [18:46:51]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the operating speed of Gigabit Ethernet?
        Proposed Answer: C (1000 Mbps)
        Source Snippet provided by Writer: The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that Gigabit Ethernet operates at 1000 Mbps, which directly supports the proposed answer C (1000 Mbps). The question is also factually accurate."}
```

---

## Interaction [18:46:55]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: How many layers are present in the TCP/IP model?
        Proposed Answer: B (5)
        Source Snippet provided by Writer: TCP/IP model consists only 5 layers.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the TCP/IP model consists of 5 layers, which directly supports the proposed answer of B (5). The question is factually accurate and does not contain hallucinations."}
```

---

## Interaction [18:47:00]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is NOT a characteristic of a Mesh Topology?
        Proposed Answer: D (It is a cost-effective solution for large networks due to minimal cabling.)
        Source Snippet provided by Writer: It is also known as completely interconnected topology. In mesh topology, every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": false,
  "reason": "The source snippet describes a mesh topology as having a dedicated point-to-point link between every other node, implying extensive cabling. The proposed answer claims it is cost-effective due to minimal cabling, which directly contradicts the implication of the source snippet. Therefore, the snippet does not prove the proposed answer. The question itself is factually sound and not a hallucination."
}
```

---

## Interaction [18:47:04]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In a client-server network, which component actively requests services?
        Proposed Answer: B (Client)
        Source Snippet provided by Writer: In client-server network, client acts as the active device and server behaves as passively.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the 'client acts as the active device' in a client-server network. This directly supports the proposed answer that the client actively requests services."}
```

---

## Interaction [18:47:07]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which technology is based on CDMA and provides wireless communication links for users to connect to a network?
        Proposed Answer: C (WLL)
        Source Snippet provided by Writer: WLL is based on CDMA technology.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet only states that WLL is based on CDMA technology. It does not mention that WLL provides wireless communication links for users to connect to a network, which is a crucial part of the question. Therefore, the snippet does not factually prove the proposed answer."}
```

---

## Interaction [20:00:16]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment to map it to the database.
    This segment is from approximately 50% into the book.
    
    
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

    CONTEXT TEXT (SEGMENT AT 50%):
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital
    
```

### Response:
```json
{
  "exam_board": null,
  "exam_name": null,
  "year": null,
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Computer Networking Topologies",
  "confidence": 0.9
}
```

---

## Interaction [20:00:22]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Computer Networking Topologies
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital format. In P2P
connection, a couple of computers is connected
via a Universal Serial Bus to transfer files.
In peer-to-peer networking, each or every
computer may be worked as server or client.
Printer
Internet
PC
HUB/Switch
PC
Peer-to-Peer Network
Network Related Terms
◆ Multiplexing It is a technique used for
transmitting signals simultaneously over a
common medium. It involves single path and
multiple channels for data communication.
◆ Code Division Multiple Access (CDMA) It is a
channel access method used by various radio
communication technologies. CDMA employs
spread spectrum technology and a special coding
scheme, where each transmitter is assigned a
code to allow multiple users to be multiplexed
over the same physical channel.
◆ Time Division Multiple Access (TDMA) It is based
on the Time Division Multiplexing (TDM) scheme.
which provides different time slots to different
data streams in a cyclically repetitive frame
structure. It allows several users to share the same
frequency channel by dividing the signal into
different time slots.
It is used in the digital 2G cellular systems GSM,
Personal Digital Cellular (PDC) and iDEN and in the
Digital Enhanced Cordless Telecommunications
(DECT) standard for portable phones.
Packet Switching It refers to method of digital
networking communication that combined all
transmitted data regardless of content, type or
structure into suitable sized blocks, known as
packets. Each packet has header information
about the source, destination, packet numbering,
etc.
• Public Switched Telephone Network (PSTN) It is
designed for telephone, which requires modem for
data communication. It is used for FAX machine also.
• Integrated Services Digital Network (ISDN) It is
used for voice, video and data services. It uses digital
transmission and combines both circuit and packet
switching.
◆ Value Added Network (VAN) It provides Electronic
Data Interchange (EDI) facility. Exchange of
information like invoices, sale purchase order, etc is
done.
Network Interface Card (NIC) It is a computer
hardware component that connects a computer to a
computer network. It provides a physical access to a
networking medium
→ Wireless Local Loop (WLL) It is a wireless
communication link in which a user connects with
network through radio-frequency. It is also known as
a fixed wireless connections. WLL is based on CDMA
technology.
◆ Ethernet It is a widely used technology employing
a bus technology. It was published by IEEE 802.3 in
1985. An ethernet LAN consists of a single coaxial
cable called Ether. It operates at 10 Mbps and
provides a 48-bits address. Fast ethernet operates
at 100 Mbps. The latest version of giga ethernet
operates as 1000 Mbps or 1 Gpbs.
OSI model is a conceptual model, the practical
model is TCP/IP. TCP/IP model consists only 5
layers.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ess
It is
em for
e also.
It is
digital
Dacket
ctronic
ge of
, etc is
mputer
ter to a
ess to a
ireless
ts with
own as
CDMA
ploying
802.3 in
coaxial
ps and
perates
thernet
practical
only 5
------------
Downloaded From: www.EasyEngineering.net
Question Bank
1. To send data/message to and from computers
the network software
information in a
(1) NIC
(3) trailer
(5) None of these
puts the
(2) packet
(4) header
message
2. Geometric arrangement of devices on the
network is called
(1) topology
(3) media
(5) None of these
3. LAN can use
(1) peer-to-peer
(3) Both '1' and '2'
(3) radio-waves
(2) protocols
(4) LAN
architecture.
(2) client and server
(4) Neither '1' and '2'
(5) None of these
4. Wi-Fi uses
(1) optic fiber
(2) phase line
(4) sound-waves
network.
(3) star
[SBI Clerk 2011]
(4) mesh
(5) None of these
5. Hub is associated with
(1) bus
(2) ring
(5) All of these
6. Multiplexing involves
7.
channel.
(1) one, one
(3) multiple, one
(5) None of these
path and.........
[SBI Clerk 2011]
(2) one, multiple
(4) multiple, multiple
...... is the transmission of data between two or
more computers over communication links.
(1) Communication
(3) Data communication
(4) Data networking
(2) Networking
(5) Information networking
8. Communication channel having
(1) 1
(2) 2
(5) None of these
9. The advantage of LAN is
10. Which type of network would use phone lines?
(1) WAN
(3) WWAN
(5) None of these
(2) LAN
(4) Wireless
[SBI Clerk 2012]
11. In simplex channel, flow of data is
(1) always in one direction
(2) always in both direction
(3) in both direction, but one at a time
(4) All of the above
(5) None of the above
12. A packet filtering firewall operates at which of
the following OSI layers?
(1) At the application layer
(2) At the transport layer
(3) At the network
(4) At the gateway layer
(5) Both '2' and '3'
13. Servers are those computers which provide
resources to other computers connected by
(1) network
(3) super computer
(5) None of these
(2) mainframe
(4) client
[SBI Clerk 2009]
14. A combination of hardware and software that
allows communication and electronic transfer
of information between computers is a
(1) network
(3) server
(5) modem
(2) backup system
(4) peripheral
[SBI Clerk 2012]
15. What type of resource is most likely to be a
shared common resource in a computer
network?
[Allahabad Bank Clerk 2010]
(1) Printers
(2) Speakers
(3) Floppy disk drives
(4) Keyboards
(5) None of these
16. A device that connects to a network without
the use of cables is said to be [IBPS Clerk 2012]
(2) cabled
....... types.
(3) 3
(4) 4
(1) distributed
(3) centralised
(5) wireless
[SBI Clerk 2012]
(1) sharing peripherals
(2) backing up your data
(3) saving all your data
(4) accessing the web
(5) automatic printing of data
(4) open source
17. Typical data transfer rate in LAN are of the
order of
(2) kilo bits per second
(1) bits per second
(3) mega bits per second
(4) tera bits per second
(5) None of the above
Downloaded From: www.Easy

--- PAGE BREAK ---

114
Downloaded From: www.EasyEngineering.net
18. Which of the following refers to a small,
single-site network?
(1) PAN
(5) CPU
(2) DSL (3) RAM (4) USB
19. Which of the following topologies is not of
20.
broadcast type?
(1) Star
(3) Ring
(2) Bus
(4) All of these
allows LAN users to share computer
(1) Communication server
(3) File server
(5) None of these
21.
........
is
the
most
important/powerful
(5) None of these
programs and data.
(2) Print server
(4) All of these
Computer Awareness
28. In OSI network architecture, the routing is
performed by
(1) network layer
(3) transport layer
(5) None of these
[IBPS Clerk 2012]
(2) data link layer
(4) session layer
29. Which of the following is considered a broad
band communication channel?, [SBI PO 2010]
(1) Coaxial cable (2) Fiber optics cable
(3) Microwave circuits (4) All of these
(5) None of these
30. A device operating at the physical layer is
called a
(1) bridge
(3) repeater
(5) None of these
(2) router
(4) All of these
computer in a typical network. [SBI PO 2013]
(1) Desktop
(3) Network server
(5) Network switch
22. P2P is a
(2) Network client
(4) Network station
application architecture.
(1) client/server
(3) centralised
(5) None of these
23. Ethernet uses
(1) bus topology
(3) mesh topology
(5) None of these
(2) distributed
(4) 1-tier
[IBPS Clerk 2012]
(2) ring topology
(4) All of these
31. A protocol is a set of rules governing a time
sequence of events that must take place
(1) between peers
(2) between an interface
(3) between modems
(4) across an interface
(5) None of the above
32. An inter-company network which used to
distribute information, documents files and
database, is called as
(1) LAN
(2) Switch
(3) WAN
(4) MAN
(5) None of these
D
3
39
40
41
24. In a ring topology, the computer in possession
of the ........ can transmit data.
(1) packet
(2) data
(3) access method
(4) token
(5) None of these
25. Which of the following represents the fastest
[SBI Clerk 2012]
data transmission speed?
(1) Bandwidth
(3) gbps
(5) mbps
(2) bps
(4) kbps
33. Which of the following is not a network device?
(1) Router
(3) Modem
(5) None of these
(2) Switch
(4) Bridge
34. How many bits are there in the ethernet
address?
(1) 64 bits
(3) 32 bits
(5) None of these
[SBI Clerk 2011]
(2) 48 bits
(4) 16 bits
42
26. Network components are connected to the
same cable in the
(1) star
(2) ring
topology.
(3) bus
(4) mesh
(5) mixed
35. How many layers are in the TCP/IP model?
(1) 4 layers
[SBI Clerk 2011]
(2) 5 layers
(3) 6 layers
(4) 7 layers
(5) None of these
S
27. Two or more computers connected to each
other for sharing information form a
(1) network
(3) server
(5) pipeline
(2) router
(4) tunnel
36. What is the use of bridge in network?
(1) To connect LANS
(2) To separate LANS
(3) To control network speed
(4) All of the above
1
2
3
4.
Downloaded From: www.EasyEngineering.net
(5) None of the above

--- PAGE BREAK ---

eness
routing is
Clerk 2012]
layer
yer
d a broad
PO 2010]
cs cable
se
ce
layer is
g a time
ace
used to
Files and
device?
ethernet
erk 2011]
odel?
erk 2011]
Data
Communication: www.EasyEngineering.net
"Networking
37. The first network that has plant
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node."
    },
    {
      "concept": "Mesh Topology",
      "statement": "It provides a bi-directional link between each possible node."
    },
    {
      "concept": "Mesh Topology",
      "statement": "Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "It is an extension and variation of star topology."
    },
    {
      "concept": "Tree Topology",
      "statement": "Its basic structure is like an inverted tree, where the root acts as a server."
    },
    {
      "concept": "Client-Server Network",
      "statement": "It is a network architecture which separates the client from the server."
    },
    {
      "concept": "Client-Server Network",
      "statement": "It is scalable architecture, where one computer works as server and others as client."
    },
    {
      "concept": "Client-Server Network",
      "statement": "Client acts as the active device and server behaves as passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client."
    },
    {
      "concept": "Ethernet",
      "statement": "It was published by IEEE 802.3 in 1985."
    },
    {
      "concept": "Ethernet",
      "statement": "An ethernet LAN consists of a single coaxial cable called Ether."
    },
    {
      "concept": "Ethernet",
      "statement": "It operates at 10 Mbps and provides a 48-bits address."
    },
    {
      "concept": "Fast Ethernet",
      "statement": "Operates at 100 Mbps."
    },
    {
      "concept": "Gigabit Ethernet",
      "statement": "Operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "concept": "OSI model vs TCP/IP model",
      "statement": "OSI model is a conceptual model, the practical model is TCP/IP."
    },
    {
      "concept": "TCP/IP model",
      "statement": "Consists only 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server)."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. This computer network relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "Refers to a method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is used for FAX machines also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. It is also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology."
    }
  ]
}
```

---

## Interaction [20:01:00]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Computer Networking Topologies.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node."
    },
    {
      "concept": "Mesh Topology",
      "statement": "It provides a bi-directional link between each possible node."
    },
    {
      "concept": "Mesh Topology",
      "statement": "Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "It is an extension and variation of star topology."
    },
    {
      "concept": "Tree Topology",
      "statement": "Its basic structure is like an inverted tree, where the root acts as a server."
    },
    {
      "concept": "Client-Server Network",
      "statement": "It is a network architecture which separates the client from the server."
    },
    {
      "concept": "Client-Server Network",
      "statement": "It is scalable architecture, where one computer works as server and others as client."
    },
    {
      "concept": "Client-Server Network",
      "statement": "Client acts as the active device and server behaves as passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client."
    },
    {
      "concept": "Ethernet",
      "statement": "It was published by IEEE 802.3 in 1985."
    },
    {
      "concept": "Ethernet",
      "statement": "An ethernet LAN consists of a single coaxial cable called Ether."
    },
    {
      "concept": "Ethernet",
      "statement": "It operates at 10 Mbps and provides a 48-bits address."
    },
    {
      "concept": "Fast Ethernet",
      "statement": "Operates at 100 Mbps."
    },
    {
      "concept": "Gigabit Ethernet",
      "statement": "Operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "concept": "OSI model vs TCP/IP model",
      "statement": "OSI model is a conceptual model, the practical model is TCP/IP."
    },
    {
      "concept": "TCP/IP model",
      "statement": "Consists only 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server)."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. This computer network relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "Refers to a method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is used for FAX machines also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. It is also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology."
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
    "question": "Which network topology is characterized by every node having a dedicated point-to-point link to every other node?",
    "options": {
      "A": "Bus Topology",
      "B": "Star Topology",
      "C": "Mesh Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "source_snippet": "Every node has a dedicated point to point link to every other node."
  },
  {
    "question": "In a client-server network architecture, which component typically acts as the active device?",
    "options": {
      "A": "Server",
      "B": "Client",
      "C": "Hub",
      "D": "Router"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "Client acts as the active device and server behaves as passively."
  },
  {
    "question": "Which of the following is a characteristic of a mesh topology?",
    "options": {
      "A": "It uses a central hub to connect all nodes.",
      "B": "It has at least two nodes with multiple paths between them.",
      "C": "It is an extension of a star topology.",
      "D": "All nodes share a single communication line."
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "Contains at least two nodes with two or more paths between them."
  },
  {
    "question": "What is the primary characteristic of a peer-to-peer network?",
    "options": {
      "A": "A single computer acts as a central server.",
      "B": "Each computer can function as both a server and a client.",
      "C": "All nodes are connected via a single backbone cable.",
      "D": "Data is transmitted in a circular fashion between nodes."
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "Each or every computer may be worked as server or client."
  },
  {
    "question": "The TCP/IP model is known to consist of how many layers?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "7",
      "D": "3"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "Consists only 5 layers."
  },
  {
    "question": "Which network topology is described as an extension and variation of a star topology?",
    "options": {
      "A": "Bus Topology",
      "B": "Mesh Topology",
      "C": "Tree Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "source_snippet": "It is an extension and variation of star topology."
  },
  {
    "question": "Ethernet, as published by IEEE 802.3 in 1985, typically operated at what speed and provided what type of address?",
    "options": {
      "A": "100 Mbps and 32-bits address",
      "B": "10 Mbps and 48-bits address",
      "C": "1000 Mbps and 64-bits address",
      "D": "10 Mbps and 32-bits address"
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "It operates at 10 Mbps and provides a 48-bits address."
  },
  {
    "question": "Fast Ethernet is designed to operate at a speed of:",
    "options": {
      "A": "10 Mbps",
      "B": "100 Mbps",
      "C": "1000 Mbps",
      "D": "1 Gbps"
    },
    "correct_answer": "B",
    "difficulty_level": "Easy",
    "source_snippet": "Operates at 100 Mbps."
  },
  {
    "question": "In the context of network architectures, what is the definition of a Client-Server Network?",
    "options": {
      "A": "A network where all computers share resources equally.",
      "B": "A network that separates the client from the server, with one computer acting as the server and others as clients.",
      "C": "A network where devices are connected in a linear fashion.",
      "D": "A network where each device has direct connections to all other devices."
    },
    "correct_answer": "B",
    "difficulty_level": "Medium",
    "source_snippet": "It is a network architecture which separates the client from the server."
  },
  {
    "question": "Gigabit Ethernet operates at speeds of:",
    "options": {
      "A": "10 Mbps",
      "B": "100 Mbps",
      "C": "1000 Mbps or 1 Gbps",
      "D": "10 Gbps"
    },
    "correct_answer": "C",
    "difficulty_level": "Easy",
    "source_snippet": "Operates as 1000 Mbps or 1 Gpbs."
  }
]
```

---

## Interaction [20:01:03]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which network topology is characterized by every node having a dedicated point-to-point link to every other node?
        Proposed Answer: C (Mesh Topology)
        Source Snippet provided by Writer: Every node has a dedicated point to point link to every other node.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
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

## Interaction [20:01:06]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In a client-server network architecture, which component typically acts as the active device?
        Proposed Answer: B (Client)
        Source Snippet provided by Writer: Client acts as the active device and server behaves as passively.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
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

## Interaction [20:01:09]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is a characteristic of a mesh topology?
        Proposed Answer: B (It has at least two nodes with multiple paths between them.)
        Source Snippet provided by Writer: Contains at least two nodes with two or more paths between them.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a mesh topology 'contains at least two nodes with two or more paths between them,' which factually proves the proposed answer that it 'has at least two nodes with multiple paths between them.' The question is also free of hallucinations as it asks about a standard networking concept."}
```

---

## Interaction [20:01:12]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary characteristic of a peer-to-peer network?
        Proposed Answer: B (Each computer can function as both a server and a client.)
        Source Snippet provided by Writer: Each or every computer may be worked as server or client.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Each or every computer may be worked as server or client,' which factually proves the proposed answer that 'Each computer can function as both a server and a client.' The question is also free of hallucinations."}
```

---

## Interaction [20:01:15]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: The TCP/IP model is known to consist of how many layers?
        Proposed Answer: B (5)
        Source Snippet provided by Writer: Consists only 5 layers.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states 'Consists only 5 layers', which factually proves the proposed answer 'B (5)' to the question 'The TCP/IP model is known to consist of how many layers?'. The question is also free of hallucinations."}
```

---

## Interaction [20:01:18]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which network topology is described as an extension and variation of a star topology?
        Proposed Answer: C (Tree Topology)
        Source Snippet provided by Writer: It is an extension and variation of star topology.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
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

## Interaction [20:01:20]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Ethernet, as published by IEEE 802.3 in 1985, typically operated at what speed and provided what type of address?
        Proposed Answer: B (10 Mbps and 48-bits address)
        Source Snippet provided by Writer: It operates at 10 Mbps and provides a 48-bits address.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that Ethernet operates at 10 Mbps and provides a 48-bits address, which perfectly matches the proposed answer."}
```

---

## Interaction [20:01:23]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Fast Ethernet is designed to operate at a speed of:
        Proposed Answer: B (100 Mbps)
        Source Snippet provided by Writer: Operates at 100 Mbps.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states 'Operates at 100 Mbps', which directly supports the proposed answer 'B (100 Mbps)' for the speed of Fast Ethernet."}
```

---

## Interaction [20:01:25]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In the context of network architectures, what is the definition of a Client-Server Network?
        Proposed Answer: B (A network that separates the client from the server, with one computer acting as the server and others as clients.)
        Source Snippet provided by Writer: It is a network architecture which separates the client from the server.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet only states that a client-server network separates the client from the server. It does not mention that one computer acts as the server and others as clients, which is a crucial part of the proposed answer's definition."}
```

---

## Interaction [20:01:28]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Gigabit Ethernet operates at speeds of:
        Proposed Answer: C (1000 Mbps or 1 Gbps)
        Source Snippet provided by Writer: Operates as 1000 Mbps or 1 Gpbs.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that Gigabit Ethernet operates at 1000 Mbps or 1 Gbps, which perfectly matches the proposed answer C."}
```

---

## Interaction [20:02:24]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment to map it to the database.
    This segment is from approximately 50% into the book.
    
    
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

    CONTEXT TEXT (SEGMENT AT 50%):
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital
    
```

### Response:
```json
{
  "exam_board": null,
  "exam_name": null,
  "year": null,
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Computer Networking Topologies",
  "confidence": 0.9
}
```

---

## Interaction [20:02:29]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Computer Networking Topologies
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital format. In P2P
connection, a couple of computers is connected
via a Universal Serial Bus to transfer files.
In peer-to-peer networking, each or every
computer may be worked as server or client.
Printer
Internet
PC
HUB/Switch
PC
Peer-to-Peer Network
Network Related Terms
◆ Multiplexing It is a technique used for
transmitting signals simultaneously over a
common medium. It involves single path and
multiple channels for data communication.
◆ Code Division Multiple Access (CDMA) It is a
channel access method used by various radio
communication technologies. CDMA employs
spread spectrum technology and a special coding
scheme, where each transmitter is assigned a
code to allow multiple users to be multiplexed
over the same physical channel.
◆ Time Division Multiple Access (TDMA) It is based
on the Time Division Multiplexing (TDM) scheme.
which provides different time slots to different
data streams in a cyclically repetitive frame
structure. It allows several users to share the same
frequency channel by dividing the signal into
different time slots.
It is used in the digital 2G cellular systems GSM,
Personal Digital Cellular (PDC) and iDEN and in the
Digital Enhanced Cordless Telecommunications
(DECT) standard for portable phones.
Packet Switching It refers to method of digital
networking communication that combined all
transmitted data regardless of content, type or
structure into suitable sized blocks, known as
packets. Each packet has header information
about the source, destination, packet numbering,
etc.
• Public Switched Telephone Network (PSTN) It is
designed for telephone, which requires modem for
data communication. It is used for FAX machine also.
• Integrated Services Digital Network (ISDN) It is
used for voice, video and data services. It uses digital
transmission and combines both circuit and packet
switching.
◆ Value Added Network (VAN) It provides Electronic
Data Interchange (EDI) facility. Exchange of
information like invoices, sale purchase order, etc is
done.
Network Interface Card (NIC) It is a computer
hardware component that connects a computer to a
computer network. It provides a physical access to a
networking medium
→ Wireless Local Loop (WLL) It is a wireless
communication link in which a user connects with
network through radio-frequency. It is also known as
a fixed wireless connections. WLL is based on CDMA
technology.
◆ Ethernet It is a widely used technology employing
a bus technology. It was published by IEEE 802.3 in
1985. An ethernet LAN consists of a single coaxial
cable called Ether. It operates at 10 Mbps and
provides a 48-bits address. Fast ethernet operates
at 100 Mbps. The latest version of giga ethernet
operates as 1000 Mbps or 1 Gpbs.
OSI model is a conceptual model, the practical
model is TCP/IP. TCP/IP model consists only 5
layers.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ess
It is
em for
e also.
It is
digital
Dacket
ctronic
ge of
, etc is
mputer
ter to a
ess to a
ireless
ts with
own as
CDMA
ploying
802.3 in
coaxial
ps and
perates
thernet
practical
only 5
------------
Downloaded From: www.EasyEngineering.net
Question Bank
1. To send data/message to and from computers
the network software
information in a
(1) NIC
(3) trailer
(5) None of these
puts the
(2) packet
(4) header
message
2. Geometric arrangement of devices on the
network is called
(1) topology
(3) media
(5) None of these
3. LAN can use
(1) peer-to-peer
(3) Both '1' and '2'
(3) radio-waves
(2) protocols
(4) LAN
architecture.
(2) client and server
(4) Neither '1' and '2'
(5) None of these
4. Wi-Fi uses
(1) optic fiber
(2) phase line
(4) sound-waves
network.
(3) star
[SBI Clerk 2011]
(4) mesh
(5) None of these
5. Hub is associated with
(1) bus
(2) ring
(5) All of these
6. Multiplexing involves
7.
channel.
(1) one, one
(3) multiple, one
(5) None of these
path and.........
[SBI Clerk 2011]
(2) one, multiple
(4) multiple, multiple
...... is the transmission of data between two or
more computers over communication links.
(1) Communication
(3) Data communication
(4) Data networking
(2) Networking
(5) Information networking
8. Communication channel having
(1) 1
(2) 2
(5) None of these
9. The advantage of LAN is
10. Which type of network would use phone lines?
(1) WAN
(3) WWAN
(5) None of these
(2) LAN
(4) Wireless
[SBI Clerk 2012]
11. In simplex channel, flow of data is
(1) always in one direction
(2) always in both direction
(3) in both direction, but one at a time
(4) All of the above
(5) None of the above
12. A packet filtering firewall operates at which of
the following OSI layers?
(1) At the application layer
(2) At the transport layer
(3) At the network
(4) At the gateway layer
(5) Both '2' and '3'
13. Servers are those computers which provide
resources to other computers connected by
(1) network
(3) super computer
(5) None of these
(2) mainframe
(4) client
[SBI Clerk 2009]
14. A combination of hardware and software that
allows communication and electronic transfer
of information between computers is a
(1) network
(3) server
(5) modem
(2) backup system
(4) peripheral
[SBI Clerk 2012]
15. What type of resource is most likely to be a
shared common resource in a computer
network?
[Allahabad Bank Clerk 2010]
(1) Printers
(2) Speakers
(3) Floppy disk drives
(4) Keyboards
(5) None of these
16. A device that connects to a network without
the use of cables is said to be [IBPS Clerk 2012]
(2) cabled
....... types.
(3) 3
(4) 4
(1) distributed
(3) centralised
(5) wireless
[SBI Clerk 2012]
(1) sharing peripherals
(2) backing up your data
(3) saving all your data
(4) accessing the web
(5) automatic printing of data
(4) open source
17. Typical data transfer rate in LAN are of the
order of
(2) kilo bits per second
(1) bits per second
(3) mega bits per second
(4) tera bits per second
(5) None of the above
Downloaded From: www.Easy

--- PAGE BREAK ---

114
Downloaded From: www.EasyEngineering.net
18. Which of the following refers to a small,
single-site network?
(1) PAN
(5) CPU
(2) DSL (3) RAM (4) USB
19. Which of the following topologies is not of
20.
broadcast type?
(1) Star
(3) Ring
(2) Bus
(4) All of these
allows LAN users to share computer
(1) Communication server
(3) File server
(5) None of these
21.
........
is
the
most
important/powerful
(5) None of these
programs and data.
(2) Print server
(4) All of these
Computer Awareness
28. In OSI network architecture, the routing is
performed by
(1) network layer
(3) transport layer
(5) None of these
[IBPS Clerk 2012]
(2) data link layer
(4) session layer
29. Which of the following is considered a broad
band communication channel?, [SBI PO 2010]
(1) Coaxial cable (2) Fiber optics cable
(3) Microwave circuits (4) All of these
(5) None of these
30. A device operating at the physical layer is
called a
(1) bridge
(3) repeater
(5) None of these
(2) router
(4) All of these
computer in a typical network. [SBI PO 2013]
(1) Desktop
(3) Network server
(5) Network switch
22. P2P is a
(2) Network client
(4) Network station
application architecture.
(1) client/server
(3) centralised
(5) None of these
23. Ethernet uses
(1) bus topology
(3) mesh topology
(5) None of these
(2) distributed
(4) 1-tier
[IBPS Clerk 2012]
(2) ring topology
(4) All of these
31. A protocol is a set of rules governing a time
sequence of events that must take place
(1) between peers
(2) between an interface
(3) between modems
(4) across an interface
(5) None of the above
32. An inter-company network which used to
distribute information, documents files and
database, is called as
(1) LAN
(2) Switch
(3) WAN
(4) MAN
(5) None of these
D
3
39
40
41
24. In a ring topology, the computer in possession
of the ........ can transmit data.
(1) packet
(2) data
(3) access method
(4) token
(5) None of these
25. Which of the following represents the fastest
[SBI Clerk 2012]
data transmission speed?
(1) Bandwidth
(3) gbps
(5) mbps
(2) bps
(4) kbps
33. Which of the following is not a network device?
(1) Router
(3) Modem
(5) None of these
(2) Switch
(4) Bridge
34. How many bits are there in the ethernet
address?
(1) 64 bits
(3) 32 bits
(5) None of these
[SBI Clerk 2011]
(2) 48 bits
(4) 16 bits
42
26. Network components are connected to the
same cable in the
(1) star
(2) ring
topology.
(3) bus
(4) mesh
(5) mixed
35. How many layers are in the TCP/IP model?
(1) 4 layers
[SBI Clerk 2011]
(2) 5 layers
(3) 6 layers
(4) 7 layers
(5) None of these
S
27. Two or more computers connected to each
other for sharing information form a
(1) network
(3) server
(5) pipeline
(2) router
(4) tunnel
36. What is the use of bridge in network?
(1) To connect LANS
(2) To separate LANS
(3) To control network speed
(4) All of the above
1
2
3
4.
Downloaded From: www.EasyEngineering.net
(5) None of the above

--- PAGE BREAK ---

eness
routing is
Clerk 2012]
layer
yer
d a broad
PO 2010]
cs cable
se
ce
layer is
g a time
ace
used to
Files and
device?
ethernet
erk 2011]
odel?
erk 2011]
Data
Communication: www.EasyEngineering.net
"Networking
37. The first network that has plant
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point-to-point link to every other node."
    },
    {
      "concept": "Mesh Topology",
      "statement": "Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "It is an extension and variation of star topology."
    },
    {
      "concept": "Client-Server Network",
      "statement": "One computer works as a server and others as clients."
    },
    {
      "concept": "Client-Server Network",
      "statement": "Client acts as the active device and server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client."
    },
    {
      "concept": "Multiplexing",
      "statement": "Involves a single path and multiple channels for data communication."
    },
    {
      "concept": "CDMA",
      "statement": "Employs spread spectrum technology and a special coding scheme."
    },
    {
      "concept": "TDMA",
      "statement": "Allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "concept": "Packet Switching",
      "statement": "Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "concept": "ISDN",
      "statement": "Uses digital transmission and combines both circuit and packet switching."
    },
    {
      "concept": "Wireless Local Loop (WLL)",
      "statement": "Is based on CDMA technology."
    },
    {
      "concept": "Ethernet",
      "statement": "Operates at 10 Mbps and provides a 48-bits address."
    },
    {
      "concept": "Fast Ethernet",
      "statement": "Operates at 100 Mbps."
    },
    {
      "concept": "Gigabit Ethernet",
      "statement": "Operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "TCP/IP model",
      "statement": "Consists only of 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree. Its basic structure is like an inverted tree, where the root acts as a server."
    },
    {
      "term": "Client-Server Network",
      "meaning": "A network architecture which separates the client from the server."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. This computer network relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is used for FAX machines also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. It is also known as fixed wireless connections."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether."
    },
    {
      "term": "OSI model",
      "meaning": "A conceptual model."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model of computer networking."
    }
  ]
}
```

---

## Interaction [20:03:11]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Computer Networking Topologies.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point-to-point link to every other node."
    },
    {
      "concept": "Mesh Topology",
      "statement": "Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "It is an extension and variation of star topology."
    },
    {
      "concept": "Client-Server Network",
      "statement": "One computer works as a server and others as clients."
    },
    {
      "concept": "Client-Server Network",
      "statement": "Client acts as the active device and server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client."
    },
    {
      "concept": "Multiplexing",
      "statement": "Involves a single path and multiple channels for data communication."
    },
    {
      "concept": "CDMA",
      "statement": "Employs spread spectrum technology and a special coding scheme."
    },
    {
      "concept": "TDMA",
      "statement": "Allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "concept": "Packet Switching",
      "statement": "Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "concept": "ISDN",
      "statement": "Uses digital transmission and combines both circuit and packet switching."
    },
    {
      "concept": "Wireless Local Loop (WLL)",
      "statement": "Is based on CDMA technology."
    },
    {
      "concept": "Ethernet",
      "statement": "Operates at 10 Mbps and provides a 48-bits address."
    },
    {
      "concept": "Fast Ethernet",
      "statement": "Operates at 100 Mbps."
    },
    {
      "concept": "Gigabit Ethernet",
      "statement": "Operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "TCP/IP model",
      "statement": "Consists only of 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree. Its basic structure is like an inverted tree, where the root acts as a server."
    },
    {
      "term": "Client-Server Network",
      "meaning": "A network architecture which separates the client from the server."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. This computer network relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is used for FAX machines also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. It is also known as fixed wireless connections."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether."
    },
    {
      "term": "OSI model",
      "meaning": "A conceptual model."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model of computer networking."
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
    "question": "In a network topology where every node has a dedicated point-to-point link to every other node, what is this topology called?",
    "options": {
      "A": "Bus Topology",
      "B": "Star Topology",
      "C": "Mesh Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Every node has a dedicated point-to-point link to every other node."
  },
  {
    "question": "Which network topology is an extension and variation of the star topology?",
    "options": {
      "A": "Bus Topology",
      "B": "Tree Topology",
      "C": "Mesh Topology",
      "D": "Hybrid Topology"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "It is an extension and variation of star topology."
  },
  {
    "question": "In a network where one computer functions as a server and others as clients, what is this architecture known as?",
    "options": {
      "A": "Peer-to-Peer Network",
      "B": "Client-Server Network",
      "C": "Bus Network",
      "D": "Ring Network"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "One computer works as a server and others as clients."
  },
  {
    "question": "What is a characteristic of a Peer-to-Peer Network?",
    "options": {
      "A": "A central server manages all resources.",
      "B": "Each computer can act as either a server or a client.",
      "C": "Clients are passive and servers are active.",
      "D": "It is primarily used for large enterprise networks."
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Each or every computer may be worked as server or client."
  },
  {
    "question": "Which technology allows several users to share the same frequency channel by dividing the signal into different time slots?",
    "options": {
      "A": "CDMA",
      "B": "FDM",
      "C": "TDMA",
      "D": "SDMA"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Allows several users to share the same frequency channel by dividing the signal into different time slots."
  },
  {
    "question": "Packet Switching involves each packet containing header information for routing. What kind of information is typically found in this header?",
    "options": {
      "A": "Only the destination IP address",
      "B": "Source, destination, and packet numbering",
      "C": "Payload encryption key",
      "D": "Network topology type"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Each packet has header information about the source, destination, packet numbering, etc."
  },
  {
    "question": "What technology is ISDN known for integrating into its digital transmission system?",
    "options": {
      "A": "Only circuit switching",
      "B": "Only packet switching",
      "C": "Both circuit and packet switching",
      "D": "Analog signal transmission"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Uses digital transmission and combines both circuit and packet switching."
  },
  {
    "question": "Wireless Local Loop (WLL) is a type of wireless communication link. What technology is it based on?",
    "options": {
      "A": "TDMA",
      "B": "Ethernet",
      "C": "CDMA",
      "D": "Wi-Fi"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Is based on CDMA technology."
  },
  {
    "question": "Fast Ethernet is a standard that operates at a significantly higher speed than the original Ethernet. What is its typical operating speed?",
    "options": {
      "A": "10 Mbps",
      "B": "100 Mbps",
      "C": "1000 Mbps",
      "D": "1 Gbps"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Operates at 100 Mbps."
  },
  {
    "question": "Which of the following best describes the TCP/IP model in terms of its layers?",
    "options": {
      "A": "It is a conceptual model with 7 layers.",
      "B": "It is the practical model of networking and consists of 5 layers.",
      "C": "It is an older model replaced by the OSI model.",
      "D": "It focuses only on the physical transmission of data."
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "The practical model of computer networking."
  }
]
```

---

## Interaction [20:03:14]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In a network topology where every node has a dedicated point-to-point link to every other node, what is this topology called?
        Proposed Answer: C (Mesh Topology)
        Source Snippet provided by Writer: Every node has a dedicated point-to-point link to every other node.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Every node has a dedicated point-to-point link to every other node,' which is the defining characteristic of a mesh topology. Therefore, the proposed answer is factually proven by the source snippet, and the question is not a hallucination."}
```

---

## Interaction [20:03:17]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which network topology is an extension and variation of the star topology?
        Proposed Answer: B (Tree Topology)
        Source Snippet provided by Writer: It is an extension and variation of star topology.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'It is an extension and variation of star topology.' The proposed answer identifies the Tree Topology as this extension. Therefore, the snippet factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

## Interaction [20:03:21]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In a network where one computer functions as a server and others as clients, what is this architecture known as?
        Proposed Answer: B (Client-Server Network)
        Source Snippet provided by Writer: One computer works as a server and others as clients.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'One computer works as a server and others as clients,' which is the definition of a client-server network. The proposed answer correctly identifies this architecture."}
```

---

## Interaction [20:03:26]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which technology allows several users to share the same frequency channel by dividing the signal into different time slots?
        Proposed Answer: C (TDMA)
        Source Snippet provided by Writer: Allows several users to share the same frequency channel by dividing the signal into different time slots.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a technology allows several users to share the same frequency channel by dividing the signal into different time slots. This is the definition of TDMA (Time Division Multiple Access), which is the proposed answer. The question is factually accurate and not a hallucination."}
```

---

## Interaction [20:03:28]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Packet Switching involves each packet containing header information for routing. What kind of information is typically found in this header?
        Proposed Answer: B (Source, destination, and packet numbering)
        Source Snippet provided by Writer: Each packet has header information about the source, destination, packet numbering, etc.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that packet headers contain information about the source, destination, and packet numbering, which directly supports the proposed answer."}
```

---

## Interaction [20:03:31]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What technology is ISDN known for integrating into its digital transmission system?
        Proposed Answer: C (Both circuit and packet switching)
        Source Snippet provided by Writer: Uses digital transmission and combines both circuit and packet switching.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that ISDN 'combines both circuit and packet switching', which directly supports the proposed answer C."}
```

---

## Interaction [20:03:34]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Wireless Local Loop (WLL) is a type of wireless communication link. What technology is it based on?
        Proposed Answer: C (CDMA)
        Source Snippet provided by Writer: Is based on CDMA technology.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that WLL 'Is based on CDMA technology', which directly supports the proposed answer that WLL is based on CDMA technology."}
```

---

## Interaction [20:03:38]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following best describes the TCP/IP model in terms of its layers?
        Proposed Answer: B (It is the practical model of networking and consists of 5 layers.)
        Source Snippet provided by Writer: The practical model of computer networking.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet only states that the TCP/IP model is the 'practical model of computer networking'. It does not provide information about the number of layers (5) or confirm that it is the best description in terms of its layers. Therefore, the snippet does not factually prove the proposed answer."}
```

---

## Interaction [21:12:10]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment to map it to the database.
    This segment is from approximately 50% into the book.
    
    
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

    CONTEXT TEXT (SEGMENT AT 50%):
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital
    
```

### Response:
```json
{
  "exam_board": null,
  "exam_name": null,
  "year": null,
  "subject": "6fdb7f5a-cce6-4c16-8d0e-b8f76423fc00",
  "chapter": "Computer Networking Topologies and Models",
  "confidence": 0.9
}
```

---

## Interaction [21:12:14]

### Prompt:
```text

    Extract key Knowledge Base (KB) units including formulas, facts, and definitions from this segment of the book.
    FOCUS: Computer Networking Topologies and Models
    
    FORMAT: Output ONLY a JSON object:
    {
      "formulas": [{ "name": "", "logic": "", "context": "" }],
      "facts": [{ "concept": "", "statement": "" }],
      "definitions": [{ "term": "", "meaning": "" }]
    }

    SEGMENT TEXT: 
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital format. In P2P
connection, a couple of computers is connected
via a Universal Serial Bus to transfer files.
In peer-to-peer networking, each or every
computer may be worked as server or client.
Printer
Internet
PC
HUB/Switch
PC
Peer-to-Peer Network
Network Related Terms
◆ Multiplexing It is a technique used for
transmitting signals simultaneously over a
common medium. It involves single path and
multiple channels for data communication.
◆ Code Division Multiple Access (CDMA) It is a
channel access method used by various radio
communication technologies. CDMA employs
spread spectrum technology and a special coding
scheme, where each transmitter is assigned a
code to allow multiple users to be multiplexed
over the same physical channel.
◆ Time Division Multiple Access (TDMA) It is based
on the Time Division Multiplexing (TDM) scheme.
which provides different time slots to different
data streams in a cyclically repetitive frame
structure. It allows several users to share the same
frequency channel by dividing the signal into
different time slots.
It is used in the digital 2G cellular systems GSM,
Personal Digital Cellular (PDC) and iDEN and in the
Digital Enhanced Cordless Telecommunications
(DECT) standard for portable phones.
Packet Switching It refers to method of digital
networking communication that combined all
transmitted data regardless of content, type or
structure into suitable sized blocks, known as
packets. Each packet has header information
about the source, destination, packet numbering,
etc.
• Public Switched Telephone Network (PSTN) It is
designed for telephone, which requires modem for
data communication. It is used for FAX machine also.
• Integrated Services Digital Network (ISDN) It is
used for voice, video and data services. It uses digital
transmission and combines both circuit and packet
switching.
◆ Value Added Network (VAN) It provides Electronic
Data Interchange (EDI) facility. Exchange of
information like invoices, sale purchase order, etc is
done.
Network Interface Card (NIC) It is a computer
hardware component that connects a computer to a
computer network. It provides a physical access to a
networking medium
→ Wireless Local Loop (WLL) It is a wireless
communication link in which a user connects with
network through radio-frequency. It is also known as
a fixed wireless connections. WLL is based on CDMA
technology.
◆ Ethernet It is a widely used technology employing
a bus technology. It was published by IEEE 802.3 in
1985. An ethernet LAN consists of a single coaxial
cable called Ether. It operates at 10 Mbps and
provides a 48-bits address. Fast ethernet operates
at 100 Mbps. The latest version of giga ethernet
operates as 1000 Mbps or 1 Gpbs.
OSI model is a conceptual model, the practical
model is TCP/IP. TCP/IP model consists only 5
layers.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ess
It is
em for
e also.
It is
digital
Dacket
ctronic
ge of
, etc is
mputer
ter to a
ess to a
ireless
ts with
own as
CDMA
ploying
802.3 in
coaxial
ps and
perates
thernet
practical
only 5
------------
Downloaded From: www.EasyEngineering.net
Question Bank
1. To send data/message to and from computers
the network software
information in a
(1) NIC
(3) trailer
(5) None of these
puts the
(2) packet
(4) header
message
2. Geometric arrangement of devices on the
network is called
(1) topology
(3) media
(5) None of these
3. LAN can use
(1) peer-to-peer
(3) Both '1' and '2'
(3) radio-waves
(2) protocols
(4) LAN
architecture.
(2) client and server
(4) Neither '1' and '2'
(5) None of these
4. Wi-Fi uses
(1) optic fiber
(2) phase line
(4) sound-waves
network.
(3) star
[SBI Clerk 2011]
(4) mesh
(5) None of these
5. Hub is associated with
(1) bus
(2) ring
(5) All of these
6. Multiplexing involves
7.
channel.
(1) one, one
(3) multiple, one
(5) None of these
path and.........
[SBI Clerk 2011]
(2) one, multiple
(4) multiple, multiple
...... is the transmission of data between two or
more computers over communication links.
(1) Communication
(3) Data communication
(4) Data networking
(2) Networking
(5) Information networking
8. Communication channel having
(1) 1
(2) 2
(5) None of these
9. The advantage of LAN is
10. Which type of network would use phone lines?
(1) WAN
(3) WWAN
(5) None of these
(2) LAN
(4) Wireless
[SBI Clerk 2012]
11. In simplex channel, flow of data is
(1) always in one direction
(2) always in both direction
(3) in both direction, but one at a time
(4) All of the above
(5) None of the above
12. A packet filtering firewall operates at which of
the following OSI layers?
(1) At the application layer
(2) At the transport layer
(3) At the network
(4) At the gateway layer
(5) Both '2' and '3'
13. Servers are those computers which provide
resources to other computers connected by
(1) network
(3) super computer
(5) None of these
(2) mainframe
(4) client
[SBI Clerk 2009]
14. A combination of hardware and software that
allows communication and electronic transfer
of information between computers is a
(1) network
(3) server
(5) modem
(2) backup system
(4) peripheral
[SBI Clerk 2012]
15. What type of resource is most likely to be a
shared common resource in a computer
network?
[Allahabad Bank Clerk 2010]
(1) Printers
(2) Speakers
(3) Floppy disk drives
(4) Keyboards
(5) None of these
16. A device that connects to a network without
the use of cables is said to be [IBPS Clerk 2012]
(2) cabled
....... types.
(3) 3
(4) 4
(1) distributed
(3) centralised
(5) wireless
[SBI Clerk 2012]
(1) sharing peripherals
(2) backing up your data
(3) saving all your data
(4) accessing the web
(5) automatic printing of data
(4) open source
17. Typical data transfer rate in LAN are of the
order of
(2) kilo bits per second
(1) bits per second
(3) mega bits per second
(4) tera bits per second
(5) None of the above
Downloaded From: www.Easy

--- PAGE BREAK ---

114
Downloaded From: www.EasyEngineering.net
18. Which of the following refers to a small,
single-site network?
(1) PAN
(5) CPU
(2) DSL (3) RAM (4) USB
19. Which of the following topologies is not of
20.
broadcast type?
(1) Star
(3) Ring
(2) Bus
(4) All of these
allows LAN users to share computer
(1) Communication server
(3) File server
(5) None of these
21.
........
is
the
most
important/powerful
(5) None of these
programs and data.
(2) Print server
(4) All of these
Computer Awareness
28. In OSI network architecture, the routing is
performed by
(1) network layer
(3) transport layer
(5) None of these
[IBPS Clerk 2012]
(2) data link layer
(4) session layer
29. Which of the following is considered a broad
band communication channel?, [SBI PO 2010]
(1) Coaxial cable (2) Fiber optics cable
(3) Microwave circuits (4) All of these
(5) None of these
30. A device operating at the physical layer is
called a
(1) bridge
(3) repeater
(5) None of these
(2) router
(4) All of these
computer in a typical network. [SBI PO 2013]
(1) Desktop
(3) Network server
(5) Network switch
22. P2P is a
(2) Network client
(4) Network station
application architecture.
(1) client/server
(3) centralised
(5) None of these
23. Ethernet uses
(1) bus topology
(3) mesh topology
(5) None of these
(2) distributed
(4) 1-tier
[IBPS Clerk 2012]
(2) ring topology
(4) All of these
31. A protocol is a set of rules governing a time
sequence of events that must take place
(1) between peers
(2) between an interface
(3) between modems
(4) across an interface
(5) None of the above
32. An inter-company network which used to
distribute information, documents files and
database, is called as
(1) LAN
(2) Switch
(3) WAN
(4) MAN
(5) None of these
D
3
39
40
41
24. In a ring topology, the computer in possession
of the ........ can transmit data.
(1) packet
(2) data
(3) access method
(4) token
(5) None of these
25. Which of the following represents the fastest
[SBI Clerk 2012]
data transmission speed?
(1) Bandwidth
(3) gbps
(5) mbps
(2) bps
(4) kbps
33. Which of the following is not a network device?
(1) Router
(3) Modem
(5) None of these
(2) Switch
(4) Bridge
34. How many bits are there in the ethernet
address?
(1) 64 bits
(3) 32 bits
(5) None of these
[SBI Clerk 2011]
(2) 48 bits
(4) 16 bits
42
26. Network components are connected to the
same cable in the
(1) star
(2) ring
topology.
(3) bus
(4) mesh
(5) mixed
35. How many layers are in the TCP/IP model?
(1) 4 layers
[SBI Clerk 2011]
(2) 5 layers
(3) 6 layers
(4) 7 layers
(5) None of these
S
27. Two or more computers connected to each
other for sharing information form a
(1) network
(3) server
(5) pipeline
(2) router
(4) tunnel
36. What is the use of bridge in network?
(1) To connect LANS
(2) To separate LANS
(3) To control network speed
(4) All of the above
1
2
3
4.
Downloaded From: www.EasyEngineering.net
(5) None of the above

--- PAGE BREAK ---

eness
routing is
Clerk 2012]
layer
yer
d a broad
PO 2010]
cs cable
se
ce
layer is
g a time
ace
used to
Files and
device?
ethernet
erk 2011]
odel?
erk 2011]
Data
Communication: www.EasyEngineering.net
"Networking
37. The first network that has plant
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Mesh topology contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "A tree topology is an extension and variation of star topology."
    },
    {
      "concept": "Client-Server Network",
      "statement": "In client-server network, one computer works as server and others as client."
    },
    {
      "concept": "Client-Server Network",
      "statement": "In client-server network, client acts as the active device and server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "In peer-to-peer networking, each or every computer may be worked as server or client."
    },
    {
      "concept": "Ethernet",
      "statement": "Ethernet operates at 10 Mbps and provides a 48-bits address."
    },
    {
      "concept": "Fast Ethernet",
      "statement": "Fast ethernet operates at 100 Mbps."
    },
    {
      "concept": "Gigabit Ethernet",
      "statement": "The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "concept": "OSI Model vs TCP/IP Model",
      "statement": "OSI model is a conceptual model, the practical model is TCP/IP."
    },
    {
      "concept": "TCP/IP Model",
      "statement": "TCP/IP model consists only 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree. Its basic structure is like an inverted tree, where the root acts as a server."
    },
    {
      "term": "Client-Server Network",
      "meaning": "A network architecture which separates the client from the server. It is scalable architecture, where one computer works as server and others as client."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "A computer network that relies on computing power at the edges of a connection rather than in the network itself. It is also known as P2P network."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires modem for data communication. It is used for FAX machine also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with network through radio-frequency. It is also known as a fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether."
    }
  ]
}
```

---

## Interaction [21:12:45]

### Prompt:
```text

    Generate 3 high-fidelity MCQs for Computer Networking Topologies and Models.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Mesh topology contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "A tree topology is an extension and variation of star topology."
    },
    {
      "concept": "Client-Server Network",
      "statement": "In client-server network, one computer works as server and others as client."
    },
    {
      "concept": "Client-Server Network",
      "statement": "In client-server network, client acts as the active device and server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "In peer-to-peer networking, each or every computer may be worked as server or client."
    },
    {
      "concept": "Ethernet",
      "statement": "Ethernet operates at 10 Mbps and provides a 48-bits address."
    },
    {
      "concept": "Fast Ethernet",
      "statement": "Fast ethernet operates at 100 Mbps."
    },
    {
      "concept": "Gigabit Ethernet",
      "statement": "The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "concept": "OSI Model vs TCP/IP Model",
      "statement": "OSI model is a conceptual model, the practical model is TCP/IP."
    },
    {
      "concept": "TCP/IP Model",
      "statement": "TCP/IP model consists only 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree. Its basic structure is like an inverted tree, where the root acts as a server."
    },
    {
      "term": "Client-Server Network",
      "meaning": "A network architecture which separates the client from the server. It is scalable architecture, where one computer works as server and others as client."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "A computer network that relies on computing power at the edges of a connection rather than in the network itself. It is also known as P2P network."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires modem for data communication. It is used for FAX machine also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with network through radio-frequency. It is also known as a fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether."
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
    "question": "Which network topology ensures that every node has a dedicated point-to-point link to every other node, providing a bidirectional link between each possible node?",
    "options": {
      "A": "Bus Topology",
      "B": "Star Topology",
      "C": "Mesh Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "High",
    "source_snippet": "Mesh Topology: Every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node."
  },
  {
    "question": "In a client-server network architecture, how do clients and servers typically behave?",
    "options": {
      "A": "Clients are passive devices, and servers are active.",
      "B": "Both clients and servers act as active devices.",
      "C": "Clients act as the active device, and servers behave passively.",
      "D": "Both clients and servers behave passively."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "High",
    "source_snippet": "In client-server network, client acts as the active device and server behaves passively."
  },
  {
    "question": "Which of the following statements accurately describes the relationship between the OSI model and the TCP/IP model?",
    "options": {
      "A": "The OSI model is the practical implementation, while the TCP/IP model is conceptual.",
      "B": "Both models are identical in structure and function.",
      "C": "The OSI model is a conceptual model, and the practical model is TCP/IP.",
      "D": "The TCP/IP model has more layers than the OSI model."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "High",
    "source_snippet": "OSI model vs TCP/IP Model: OSI model is a conceptual model, the practical model is TCP/IP."
  }
]
```

---

## Interaction [21:12:47]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which network topology ensures that every node has a dedicated point-to-point link to every other node, providing a bidirectional link between each possible node?
        Proposed Answer: C (Mesh Topology)
        Source Snippet provided by Writer: Mesh Topology: Every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a Mesh Topology has 'every node has a dedicated point to point link to every other node' and 'provides a bi-directional link between each possible node', which perfectly matches the question's description. The question is also factually correct and does not contain hallucinations."}
```

---

## Interaction [21:12:52]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following statements accurately describes the relationship between the OSI model and the TCP/IP model?
        Proposed Answer: C (The OSI model is a conceptual model, and the practical model is TCP/IP.)
        Source Snippet provided by Writer: OSI model vs TCP/IP Model: OSI model is a conceptual model, the practical model is TCP/IP.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'OSI model is a conceptual model, the practical model is TCP/IP', which factually proves the proposed answer C. The question is also free of hallucinations as it accurately asks about the relationship between the two networking models."}
```

---

## Interaction [21:17:03]

### Prompt:
```text

    Analyze the technical header/context of this PDF segment. 
    You MUST map this segment to one of the EXISTING CHAPTERS listed below.
    
    STRICT RULE: If the text does not fit into any of the chapters below, you MUST output "UNKNOWN" for the chapter field. 
    DO NOT invent a chapter name.

    ALLOWED CHAPTERS FOR Arihant Computer Awareness.pdf:
    - Database Concepts
- Cyber Forensics
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
- Operating System (OS)
    
    
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

    CONTEXT TEXT (SEGMENT AT 50%):
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital
    
```

### Response:
```json
{
  "exam_board": "",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Internet & Networking",
  "confidence": 0.95
}
```

---

## Interaction [21:17:13]

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
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital format. In P2P
connection, a couple of computers is connected
via a Universal Serial Bus to transfer files.
In peer-to-peer networking, each or every
computer may be worked as server or client.
Printer
Internet
PC
HUB/Switch
PC
Peer-to-Peer Network
Network Related Terms
◆ Multiplexing It is a technique used for
transmitting signals simultaneously over a
common medium. It involves single path and
multiple channels for data communication.
◆ Code Division Multiple Access (CDMA) It is a
channel access method used by various radio
communication technologies. CDMA employs
spread spectrum technology and a special coding
scheme, where each transmitter is assigned a
code to allow multiple users to be multiplexed
over the same physical channel.
◆ Time Division Multiple Access (TDMA) It is based
on the Time Division Multiplexing (TDM) scheme.
which provides different time slots to different
data streams in a cyclically repetitive frame
structure. It allows several users to share the same
frequency channel by dividing the signal into
different time slots.
It is used in the digital 2G cellular systems GSM,
Personal Digital Cellular (PDC) and iDEN and in the
Digital Enhanced Cordless Telecommunications
(DECT) standard for portable phones.
Packet Switching It refers to method of digital
networking communication that combined all
transmitted data regardless of content, type or
structure into suitable sized blocks, known as
packets. Each packet has header information
about the source, destination, packet numbering,
etc.
• Public Switched Telephone Network (PSTN) It is
designed for telephone, which requires modem for
data communication. It is used for FAX machine also.
• Integrated Services Digital Network (ISDN) It is
used for voice, video and data services. It uses digital
transmission and combines both circuit and packet
switching.
◆ Value Added Network (VAN) It provides Electronic
Data Interchange (EDI) facility. Exchange of
information like invoices, sale purchase order, etc is
done.
Network Interface Card (NIC) It is a computer
hardware component that connects a computer to a
computer network. It provides a physical access to a
networking medium
→ Wireless Local Loop (WLL) It is a wireless
communication link in which a user connects with
network through radio-frequency. It is also known as
a fixed wireless connections. WLL is based on CDMA
technology.
◆ Ethernet It is a widely used technology employing
a bus technology. It was published by IEEE 802.3 in
1985. An ethernet LAN consists of a single coaxial
cable called Ether. It operates at 10 Mbps and
provides a 48-bits address. Fast ethernet operates
at 100 Mbps. The latest version of giga ethernet
operates as 1000 Mbps or 1 Gpbs.
OSI model is a conceptual model, the practical
model is TCP/IP. TCP/IP model consists only 5
layers.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ess
It is
em for
e also.
It is
digital
Dacket
ctronic
ge of
, etc is
mputer
ter to a
ess to a
ireless
ts with
own as
CDMA
ploying
802.3 in
coaxial
ps and
perates
thernet
practical
only 5
------------
Downloaded From: www.EasyEngineering.net
Question Bank
1. To send data/message to and from computers
the network software
information in a
(1) NIC
(3) trailer
(5) None of these
puts the
(2) packet
(4) header
message
2. Geometric arrangement of devices on the
network is called
(1) topology
(3) media
(5) None of these
3. LAN can use
(1) peer-to-peer
(3) Both '1' and '2'
(3) radio-waves
(2) protocols
(4) LAN
architecture.
(2) client and server
(4) Neither '1' and '2'
(5) None of these
4. Wi-Fi uses
(1) optic fiber
(2) phase line
(4) sound-waves
network.
(3) star
[SBI Clerk 2011]
(4) mesh
(5) None of these
5. Hub is associated with
(1) bus
(2) ring
(5) All of these
6. Multiplexing involves
7.
channel.
(1) one, one
(3) multiple, one
(5) None of these
path and.........
[SBI Clerk 2011]
(2) one, multiple
(4) multiple, multiple
...... is the transmission of data between two or
more computers over communication links.
(1) Communication
(3) Data communication
(4) Data networking
(2) Networking
(5) Information networking
8. Communication channel having
(1) 1
(2) 2
(5) None of these
9. The advantage of LAN is
10. Which type of network would use phone lines?
(1) WAN
(3) WWAN
(5) None of these
(2) LAN
(4) Wireless
[SBI Clerk 2012]
11. In simplex channel, flow of data is
(1) always in one direction
(2) always in both direction
(3) in both direction, but one at a time
(4) All of the above
(5) None of the above
12. A packet filtering firewall operates at which of
the following OSI layers?
(1) At the application layer
(2) At the transport layer
(3) At the network
(4) At the gateway layer
(5) Both '2' and '3'
13. Servers are those computers which provide
resources to other computers connected by
(1) network
(3) super computer
(5) None of these
(2) mainframe
(4) client
[SBI Clerk 2009]
14. A combination of hardware and software that
allows communication and electronic transfer
of information between computers is a
(1) network
(3) server
(5) modem
(2) backup system
(4) peripheral
[SBI Clerk 2012]
15. What type of resource is most likely to be a
shared common resource in a computer
network?
[Allahabad Bank Clerk 2010]
(1) Printers
(2) Speakers
(3) Floppy disk drives
(4) Keyboards
(5) None of these
16. A device that connects to a network without
the use of cables is said to be [IBPS Clerk 2012]
(2) cabled
....... types.
(3) 3
(4) 4
(1) distributed
(3) centralised
(5) wireless
[SBI Clerk 2012]
(1) sharing peripherals
(2) backing up your data
(3) saving all your data
(4) accessing the web
(5) automatic printing of data
(4) open source
17. Typical data transfer rate in LAN are of the
order of
(2) kilo bits per second
(1) bits per second
(3) mega bits per second
(4) tera bits per second
(5) None of the above
Downloaded From: www.Easy

--- PAGE BREAK ---

114
Downloaded From: www.EasyEngineering.net
18. Which of the following refers to a small,
single-site network?
(1) PAN
(5) CPU
(2) DSL (3) RAM (4) USB
19. Which of the following topologies is not of
20.
broadcast type?
(1) Star
(3) Ring
(2) Bus
(4) All of these
allows LAN users to share computer
(1) Communication server
(3) File server
(5) None of these
21.
........
is
the
most
important/powerful
(5) None of these
programs and data.
(2) Print server
(4) All of these
Computer Awareness
28. In OSI network architecture, the routing is
performed by
(1) network layer
(3) transport layer
(5) None of these
[IBPS Clerk 2012]
(2) data link layer
(4) session layer
29. Which of the following is considered a broad
band communication channel?, [SBI PO 2010]
(1) Coaxial cable (2) Fiber optics cable
(3) Microwave circuits (4) All of these
(5) None of these
30. A device operating at the physical layer is
called a
(1) bridge
(3) repeater
(5) None of these
(2) router
(4) All of these
computer in a typical network. [SBI PO 2013]
(1) Desktop
(3) Network server
(5) Network switch
22. P2P is a
(2) Network client
(4) Network station
application architecture.
(1) client/server
(3) centralised
(5) None of these
23. Ethernet uses
(1) bus topology
(3) mesh topology
(5) None of these
(2) distributed
(4) 1-tier
[IBPS Clerk 2012]
(2) ring topology
(4) All of these
31. A protocol is a set of rules governing a time
sequence of events that must take place
(1) between peers
(2) between an interface
(3) between modems
(4) across an interface
(5) None of the above
32. An inter-company network which used to
distribute information, documents files and
database, is called as
(1) LAN
(2) Switch
(3) WAN
(4) MAN
(5) None of these
D
3
39
40
41
24. In a ring topology, the computer in possession
of the ........ can transmit data.
(1) packet
(2) data
(3) access method
(4) token
(5) None of these
25. Which of the following represents the fastest
[SBI Clerk 2012]
data transmission speed?
(1) Bandwidth
(3) gbps
(5) mbps
(2) bps
(4) kbps
33. Which of the following is not a network device?
(1) Router
(3) Modem
(5) None of these
(2) Switch
(4) Bridge
34. How many bits are there in the ethernet
address?
(1) 64 bits
(3) 32 bits
(5) None of these
[SBI Clerk 2011]
(2) 48 bits
(4) 16 bits
42
26. Network components are connected to the
same cable in the
(1) star
(2) ring
topology.
(3) bus
(4) mesh
(5) mixed
35. How many layers are in the TCP/IP model?
(1) 4 layers
[SBI Clerk 2011]
(2) 5 layers
(3) 6 layers
(4) 7 layers
(5) None of these
S
27. Two or more computers connected to each
other for sharing information form a
(1) network
(3) server
(5) pipeline
(2) router
(4) tunnel
36. What is the use of bridge in network?
(1) To connect LANS
(2) To separate LANS
(3) To control network speed
(4) All of the above
1
2
3
4.
Downloaded From: www.EasyEngineering.net
(5) None of the above

--- PAGE BREAK ---

eness
routing is
Clerk 2012]
layer
yer
d a broad
PO 2010]
cs cable
se
ce
layer is
g a time
ace
used to
Files and
device?
ethernet
erk 2011]
odel?
erk 2011]
Data
Communication: www.EasyEngineering.net
"Networking
37. The first network that has plant
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node. Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "An extension and variation of star topology with a basic structure like an inverted tree where the root acts as a server. Allows more devices to be attached to a single hub."
    },
    {
      "concept": "Client-Server Network",
      "statement": "A network architecture which separates the client from the server, where one computer works as a server and others as clients. Client acts as the active device and server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client. Relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "concept": "Ethernet",
      "statement": "A widely used technology employing a bus technology, published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. Operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. Giga ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "TCP/IP Model",
      "statement": "Consists of 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server)."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is used for FAX machines also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase orders, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985."
    },
    {
      "term": "OSI model",
      "meaning": "A conceptual model."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model."
    }
  ]
}
```

---

## Interaction [21:17:58]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Internet & Networking.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node. Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "An extension and variation of star topology with a basic structure like an inverted tree where the root acts as a server. Allows more devices to be attached to a single hub."
    },
    {
      "concept": "Client-Server Network",
      "statement": "A network architecture which separates the client from the server, where one computer works as a server and others as clients. Client acts as the active device and server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client. Relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "concept": "Ethernet",
      "statement": "A widely used technology employing a bus technology, published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. Operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. Giga ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "TCP/IP Model",
      "statement": "Consists of 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server)."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is used for FAX machines also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase orders, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985."
    },
    {
      "term": "OSI model",
      "meaning": "A conceptual model."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model."
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
    "question": "In which network topology does every node have a dedicated point-to-point link to every other node?",
    "options": {
      "A": "Star Topology",
      "B": "Bus Topology",
      "C": "Mesh Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node."
  },
  {
    "question": "Which network topology is described as an extension and variation of star topology, with a structure like an inverted tree where the root acts as a server?",
    "options": {
      "A": "Mesh Topology",
      "B": "Tree Topology",
      "C": "Bus Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "An extension and variation of star topology with a basic structure like an inverted tree where the root acts as a server."
  },
  {
    "question": "In a Client-Server Network, which component acts as the active device?",
    "options": {
      "A": "Server",
      "B": "Client",
      "C": "Hub",
      "D": "Router"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Client acts as the active device and server behaves passively."
  },
  {
    "question": "What characteristic defines a Peer-to-Peer Network?",
    "options": {
      "A": "A central server manages all resources.",
      "B": "Each computer can function as both a server and a client.",
      "C": "All nodes are connected in a linear fashion.",
      "D": "Data is transmitted in a circular path."
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Each or every computer may be worked as server or client."
  },
  {
    "question": "Ethernet, published by IEEE 802.3 in 1985, operates at what speed for its standard version?",
    "options": {
      "A": "100 Mbps",
      "B": "1 Gbps",
      "C": "10 Mbps",
      "D": "54 Mbps"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Operates at 10 Mbps and provides a 48-bits address."
  },
  {
    "question": "What is the primary function of Multiplexing in data communication?",
    "options": {
      "A": "To encrypt data for secure transmission.",
      "B": "To divide data into smaller packets.",
      "C": "To allow simultaneous transmission of signals over a common medium.",
      "D": "To connect different network segments."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "A technique used for transmitting signals simultaneously over a common medium."
  },
  {
    "question": "Which multiple access method assigns a unique code to each transmitter to allow multiple users over the same physical channel, employing spread spectrum technology?",
    "options": {
      "A": "Time Division Multiple Access (TDMA)",
      "B": "Frequency Division Multiple Access (FDMA)",
      "C": "Code Division Multiple Access (CDMA)",
      "D": "Orthogonal Frequency Division Multiplexing (OFDM)"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
  },
  {
    "question": "What is a key characteristic of Packet Switching?",
    "options": {
      "A": "Data is transmitted as a continuous stream.",
      "B": "A dedicated circuit is established for the duration of the transmission.",
      "C": "Data is divided into blocks called packets, each with header information.",
      "D": "It is primarily used for analog voice communication."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Each packet has header information about the source, destination, packet numbering, etc."
  },
  {
    "question": "Which network technology is described as a wireless communication link where a user connects to the network via radio-frequency, also known as fixed wireless connections?",
    "options": {
      "A": "Bluetooth",
      "B": "Wi-Fi",
      "C": "Cellular Network",
      "D": "Wireless Local Loop (WLL)"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections."
  },
  {
    "question": "The TCP/IP model is described in the knowledge base as:",
    "options": {
      "A": "A conceptual model",
      "B": "The practical model",
      "C": "A 7-layer model",
      "D": "An outdated model"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "TCP/IP model: The practical model."
  }
]
```

---

## Interaction [21:18:02]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In which network topology does every node have a dedicated point-to-point link to every other node?
        Proposed Answer: C (Mesh Topology)
        Source Snippet provided by Writer: Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Every node has a dedicated point to point link to every other node', which is the defining characteristic of a mesh topology. Therefore, the proposed answer is factually proven by the source snippet, and the question is not a hallucination."}
```

---

## Interaction [21:18:06]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which network topology is described as an extension and variation of star topology, with a structure like an inverted tree where the root acts as a server?
        Proposed Answer: B (Tree Topology)
        Source Snippet provided by Writer: An extension and variation of star topology with a basic structure like an inverted tree where the root acts as a server.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly describes the tree topology as an extension and variation of the star topology with a root acting as a server, which perfectly matches the proposed answer."}
```

---

## Interaction [21:18:10]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In a Client-Server Network, which component acts as the active device?
        Proposed Answer: B (Client)
        Source Snippet provided by Writer: Client acts as the active device and server behaves passively.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that the 'Client acts as the active device', which directly supports the proposed answer 'B (Client)'."}
```

---

## Interaction [21:18:22]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What characteristic defines a Peer-to-Peer Network?
        Proposed Answer: B (Each computer can function as both a server and a client.)
        Source Snippet provided by Writer: Each or every computer may be worked as server or client.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Each or every computer may be worked as server or client,' which is a factual definition of a peer-to-peer network where nodes can act as both servers and clients. The question is also factually accurate."}
```

---

## Interaction [21:18:26]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Ethernet, published by IEEE 802.3 in 1985, operates at what speed for its standard version?
        Proposed Answer: C (10 Mbps)
        Source Snippet provided by Writer: Operates at 10 Mbps and provides a 48-bits address.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states 'Operates at 10 Mbps', which directly supports the proposed answer 'C (10 Mbps)'."}
```

---

## Interaction [21:18:35]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary function of Multiplexing in data communication?
        Proposed Answer: C (To allow simultaneous transmission of signals over a common medium.)
        Source Snippet provided by Writer: A technique used for transmitting signals simultaneously over a common medium.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that multiplexing is 'a technique used for transmitting signals simultaneously over a common medium,' which factually proves the proposed answer that its primary function is 'To allow simultaneous transmission of signals over a common medium.' The question is also free of hallucinations."}
```

---

## Interaction [21:18:42]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which multiple access method assigns a unique code to each transmitter to allow multiple users over the same physical channel, employing spread spectrum technology?
        Proposed Answer: C (Code Division Multiple Access (CDMA))
        Source Snippet provided by Writer: CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet explicitly states that CDMA employs spread spectrum technology and a special coding scheme where each transmitter is assigned a code to allow multiple users over the same physical channel, which directly answers the question."
}
```

---

## Interaction [21:18:51]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is a key characteristic of Packet Switching?
        Proposed Answer: C (Data is divided into blocks called packets, each with header information.)
        Source Snippet provided by Writer: Each packet has header information about the source, destination, packet numbering, etc.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet directly supports the proposed answer by stating that each packet has header information, which is a key characteristic of packet switching. The question is also factually accurate."
}
```

---

## Interaction [21:18:54]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which network technology is described as a wireless communication link where a user connects to the network via radio-frequency, also known as fixed wireless connections?
        Proposed Answer: D (Wireless Local Loop (WLL))
        Source Snippet provided by Writer: A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a wireless communication link where a user connects to the network via radio-frequency is also known as fixed wireless connections. This aligns perfectly with the definition of Wireless Local Loop (WLL), making the proposed answer factually proven by the snippet. The question is also free of hallucinations as it accurately describes WLL based on the provided snippet."}
```

---

## Interaction [21:18:57]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: The TCP/IP model is described in the knowledge base as:
        Proposed Answer: B (The practical model)
        Source Snippet provided by Writer: TCP/IP model: The practical model.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the TCP/IP model is 'The practical model', which factually proves the proposed answer 'B (The practical model)'."}
```

---

## Interaction [21:41:52]

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

    CONTEXT TEXT (SEGMENT AT 50%):
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital
    
```

### Response:
```json
{
  "exam_board": "",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Internet & Networking",
  "confidence": 0.95
}
```

---

## Interaction [21:41:57]

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
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital format. In P2P
connection, a couple of computers is connected
via a Universal Serial Bus to transfer files.
In peer-to-peer networking, each or every
computer may be worked as server or client.
Printer
Internet
PC
HUB/Switch
PC
Peer-to-Peer Network
Network Related Terms
◆ Multiplexing It is a technique used for
transmitting signals simultaneously over a
common medium. It involves single path and
multiple channels for data communication.
◆ Code Division Multiple Access (CDMA) It is a
channel access method used by various radio
communication technologies. CDMA employs
spread spectrum technology and a special coding
scheme, where each transmitter is assigned a
code to allow multiple users to be multiplexed
over the same physical channel.
◆ Time Division Multiple Access (TDMA) It is based
on the Time Division Multiplexing (TDM) scheme.
which provides different time slots to different
data streams in a cyclically repetitive frame
structure. It allows several users to share the same
frequency channel by dividing the signal into
different time slots.
It is used in the digital 2G cellular systems GSM,
Personal Digital Cellular (PDC) and iDEN and in the
Digital Enhanced Cordless Telecommunications
(DECT) standard for portable phones.
Packet Switching It refers to method of digital
networking communication that combined all
transmitted data regardless of content, type or
structure into suitable sized blocks, known as
packets. Each packet has header information
about the source, destination, packet numbering,
etc.
• Public Switched Telephone Network (PSTN) It is
designed for telephone, which requires modem for
data communication. It is used for FAX machine also.
• Integrated Services Digital Network (ISDN) It is
used for voice, video and data services. It uses digital
transmission and combines both circuit and packet
switching.
◆ Value Added Network (VAN) It provides Electronic
Data Interchange (EDI) facility. Exchange of
information like invoices, sale purchase order, etc is
done.
Network Interface Card (NIC) It is a computer
hardware component that connects a computer to a
computer network. It provides a physical access to a
networking medium
→ Wireless Local Loop (WLL) It is a wireless
communication link in which a user connects with
network through radio-frequency. It is also known as
a fixed wireless connections. WLL is based on CDMA
technology.
◆ Ethernet It is a widely used technology employing
a bus technology. It was published by IEEE 802.3 in
1985. An ethernet LAN consists of a single coaxial
cable called Ether. It operates at 10 Mbps and
provides a 48-bits address. Fast ethernet operates
at 100 Mbps. The latest version of giga ethernet
operates as 1000 Mbps or 1 Gpbs.
OSI model is a conceptual model, the practical
model is TCP/IP. TCP/IP model consists only 5
layers.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ess
It is
em for
e also.
It is
digital
Dacket
ctronic
ge of
, etc is
mputer
ter to a
ess to a
ireless
ts with
own as
CDMA
ploying
802.3 in
coaxial
ps and
perates
thernet
practical
only 5
------------
Downloaded From: www.EasyEngineering.net
Question Bank
1. To send data/message to and from computers
the network software
information in a
(1) NIC
(3) trailer
(5) None of these
puts the
(2) packet
(4) header
message
2. Geometric arrangement of devices on the
network is called
(1) topology
(3) media
(5) None of these
3. LAN can use
(1) peer-to-peer
(3) Both '1' and '2'
(3) radio-waves
(2) protocols
(4) LAN
architecture.
(2) client and server
(4) Neither '1' and '2'
(5) None of these
4. Wi-Fi uses
(1) optic fiber
(2) phase line
(4) sound-waves
network.
(3) star
[SBI Clerk 2011]
(4) mesh
(5) None of these
5. Hub is associated with
(1) bus
(2) ring
(5) All of these
6. Multiplexing involves
7.
channel.
(1) one, one
(3) multiple, one
(5) None of these
path and.........
[SBI Clerk 2011]
(2) one, multiple
(4) multiple, multiple
...... is the transmission of data between two or
more computers over communication links.
(1) Communication
(3) Data communication
(4) Data networking
(2) Networking
(5) Information networking
8. Communication channel having
(1) 1
(2) 2
(5) None of these
9. The advantage of LAN is
10. Which type of network would use phone lines?
(1) WAN
(3) WWAN
(5) None of these
(2) LAN
(4) Wireless
[SBI Clerk 2012]
11. In simplex channel, flow of data is
(1) always in one direction
(2) always in both direction
(3) in both direction, but one at a time
(4) All of the above
(5) None of the above
12. A packet filtering firewall operates at which of
the following OSI layers?
(1) At the application layer
(2) At the transport layer
(3) At the network
(4) At the gateway layer
(5) Both '2' and '3'
13. Servers are those computers which provide
resources to other computers connected by
(1) network
(3) super computer
(5) None of these
(2) mainframe
(4) client
[SBI Clerk 2009]
14. A combination of hardware and software that
allows communication and electronic transfer
of information between computers is a
(1) network
(3) server
(5) modem
(2) backup system
(4) peripheral
[SBI Clerk 2012]
15. What type of resource is most likely to be a
shared common resource in a computer
network?
[Allahabad Bank Clerk 2010]
(1) Printers
(2) Speakers
(3) Floppy disk drives
(4) Keyboards
(5) None of these
16. A device that connects to a network without
the use of cables is said to be [IBPS Clerk 2012]
(2) cabled
....... types.
(3) 3
(4) 4
(1) distributed
(3) centralised
(5) wireless
[SBI Clerk 2012]
(1) sharing peripherals
(2) backing up your data
(3) saving all your data
(4) accessing the web
(5) automatic printing of data
(4) open source
17. Typical data transfer rate in LAN are of the
order of
(2) kilo bits per second
(1) bits per second
(3) mega bits per second
(4) tera bits per second
(5) None of the above
Downloaded From: www.Easy

--- PAGE BREAK ---

114
Downloaded From: www.EasyEngineering.net
18. Which of the following refers to a small,
single-site network?
(1) PAN
(5) CPU
(2) DSL (3) RAM (4) USB
19. Which of the following topologies is not of
20.
broadcast type?
(1) Star
(3) Ring
(2) Bus
(4) All of these
allows LAN users to share computer
(1) Communication server
(3) File server
(5) None of these
21.
........
is
the
most
important/powerful
(5) None of these
programs and data.
(2) Print server
(4) All of these
Computer Awareness
28. In OSI network architecture, the routing is
performed by
(1) network layer
(3) transport layer
(5) None of these
[IBPS Clerk 2012]
(2) data link layer
(4) session layer
29. Which of the following is considered a broad
band communication channel?, [SBI PO 2010]
(1) Coaxial cable (2) Fiber optics cable
(3) Microwave circuits (4) All of these
(5) None of these
30. A device operating at the physical layer is
called a
(1) bridge
(3) repeater
(5) None of these
(2) router
(4) All of these
computer in a typical network. [SBI PO 2013]
(1) Desktop
(3) Network server
(5) Network switch
22. P2P is a
(2) Network client
(4) Network station
application architecture.
(1) client/server
(3) centralised
(5) None of these
23. Ethernet uses
(1) bus topology
(3) mesh topology
(5) None of these
(2) distributed
(4) 1-tier
[IBPS Clerk 2012]
(2) ring topology
(4) All of these
31. A protocol is a set of rules governing a time
sequence of events that must take place
(1) between peers
(2) between an interface
(3) between modems
(4) across an interface
(5) None of the above
32. An inter-company network which used to
distribute information, documents files and
database, is called as
(1) LAN
(2) Switch
(3) WAN
(4) MAN
(5) None of these
D
3
39
40
41
24. In a ring topology, the computer in possession
of the ........ can transmit data.
(1) packet
(2) data
(3) access method
(4) token
(5) None of these
25. Which of the following represents the fastest
[SBI Clerk 2012]
data transmission speed?
(1) Bandwidth
(3) gbps
(5) mbps
(2) bps
(4) kbps
33. Which of the following is not a network device?
(1) Router
(3) Modem
(5) None of these
(2) Switch
(4) Bridge
34. How many bits are there in the ethernet
address?
(1) 64 bits
(3) 32 bits
(5) None of these
[SBI Clerk 2011]
(2) 48 bits
(4) 16 bits
42
26. Network components are connected to the
same cable in the
(1) star
(2) ring
topology.
(3) bus
(4) mesh
(5) mixed
35. How many layers are in the TCP/IP model?
(1) 4 layers
[SBI Clerk 2011]
(2) 5 layers
(3) 6 layers
(4) 7 layers
(5) None of these
S
27. Two or more computers connected to each
other for sharing information form a
(1) network
(3) server
(5) pipeline
(2) router
(4) tunnel
36. What is the use of bridge in network?
(1) To connect LANS
(2) To separate LANS
(3) To control network speed
(4) All of the above
1
2
3
4.
Downloaded From: www.EasyEngineering.net
(5) None of the above

--- PAGE BREAK ---

eness
routing is
Clerk 2012]
layer
yer
d a broad
PO 2010]
cs cable
se
ce
layer is
g a time
ace
used to
Files and
device?
ethernet
erk 2011]
odel?
erk 2011]
Data
Communication: www.EasyEngineering.net
"Networking
37. The first network that has plant
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node. Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "An extension and variation of star topology. Its basic structure is like an inverted tree, where the root acts as a server. It allows more devices to be attached to a single hub."
    },
    {
      "concept": "Client-Server Network",
      "statement": "A network architecture which separates the client from the server. It is scalable architecture, where one computer works as server and others as client. Client acts as the active device and server behaves as passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client. Relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "concept": "Ethernet",
      "statement": "A widely used technology employing a bus technology. Published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. Operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. Giga ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "TCP/IP model",
      "statement": "Consists only of 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server)."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. Used for sharing content like audio, video, data or anything in digital format. In P2P connection, a couple of computers is connected via a Universal Serial Bus to transfer files."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. Employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. Allows several users to share the same frequency channel by dividing the signal into different time slots. Used in digital 2G cellular systems GSM, Personal Digital Cellular (PDC) and iDEN and in the Digital Enhanced Cordless Telecommunications (DECT) standard for portable phones."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is also used for FAX machines."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services. Uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc. is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology. Published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. Operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "term": "OSI model",
      "meaning": "A conceptual model."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model."
    }
  ]
}
```

---

## Interaction [21:42:31]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Internet & Networking.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node. Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "An extension and variation of star topology. Its basic structure is like an inverted tree, where the root acts as a server. It allows more devices to be attached to a single hub."
    },
    {
      "concept": "Client-Server Network",
      "statement": "A network architecture which separates the client from the server. It is scalable architecture, where one computer works as server and others as client. Client acts as the active device and server behaves as passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client. Relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "concept": "Ethernet",
      "statement": "A widely used technology employing a bus technology. Published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. Operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. Giga ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "TCP/IP model",
      "statement": "Consists only of 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server)."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. Used for sharing content like audio, video, data or anything in digital format. In P2P connection, a couple of computers is connected via a Universal Serial Bus to transfer files."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. Employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. Allows several users to share the same frequency channel by dividing the signal into different time slots. Used in digital 2G cellular systems GSM, Personal Digital Cellular (PDC) and iDEN and in the Digital Enhanced Cordless Telecommunications (DECT) standard for portable phones."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is also used for FAX machines."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video and data services. Uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc. is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "A widely used technology employing a bus technology. Published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. Operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "term": "OSI model",
      "meaning": "A conceptual model."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model."
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
    "question": "In a Mesh Topology, what is the characteristic connection between nodes?",
    "options": {
      "A": "Each node connects to a central hub.",
      "B": "Each node has a dedicated point-to-point link to every other node.",
      "C": "Nodes are arranged in a linear sequence.",
      "D": "Nodes connect to a single main cable."
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node."
  },
  {
    "question": "Which network topology is described as an extension of a star topology, resembling an inverted tree with a root acting as a server?",
    "options": {
      "A": "Bus Topology",
      "B": "Ring Topology",
      "C": "Tree Topology",
      "D": "Mesh Topology"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "An extension and variation of star topology. Its basic structure is like an inverted tree, where the root acts as a server."
  },
  {
    "question": "In a Client-Server Network, which entity acts as the active device?",
    "options": {
      "A": "Server",
      "B": "Client",
      "C": "Hub",
      "D": "Router"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Client acts as the active device and server behaves as passively."
  },
  {
    "question": "What is a defining characteristic of a Peer-to-Peer Network?",
    "options": {
      "A": "A central server manages all resources.",
      "B": "Each computer can function as both a server and a client.",
      "C": "It relies solely on a central hub for communication.",
      "D": "It utilizes a star topology exclusively."
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Each or every computer may be worked as server or client."
  },
  {
    "question": "Ethernet technology, published by IEEE 802.3 in 1985, initially operated at what speed?",
    "options": {
      "A": "100 Mbps",
      "B": "1 Gbps",
      "C": "10 Mbps",
      "D": "56 Kbps"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Operates at 10 Mbps and provides a 48-bits address."
  },
  {
    "question": "What is the primary function of Multiplexing in data communication?",
    "options": {
      "A": "To encrypt data for security.",
      "B": "To divide a network into smaller segments.",
      "C": "To transmit signals simultaneously over a common medium.",
      "D": "To detect and correct errors in data transmission."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "A technique used for transmitting signals simultaneously over a common medium."
  },
  {
    "question": "Which channel access method employs spread spectrum technology and assigns a unique code to each transmitter for multiplexing users over the same channel?",
    "options": {
      "A": "Time Division Multiple Access (TDMA)",
      "B": "Frequency Division Multiple Access (FDMA)",
      "C": "Code Division Multiple Access (CDMA)",
      "D": "Slotted Aloha"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
  },
  {
    "question": "Time Division Multiple Access (TDMA) allows multiple users to share the same frequency channel by dividing the signal into different what?",
    "options": {
      "A": "Codes",
      "B": "Time slots",
      "C": "Frequency bands",
      "D": "Data packets"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Allows several users to share the same frequency channel by dividing the signal into different time slots."
  },
  {
    "question": "What information is typically included in the header of a packet in Packet Switching?",
    "options": {
      "A": "The entire data content.",
      "B": "Encryption keys.",
      "C": "Source, destination, and packet numbering.",
      "D": "Network topology details."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Each packet has header information about the source, destination, packet numbering, etc."
  },
  {
    "question": "Which network technology is described as a wireless communication link where a user connects with the network through radio-frequency, also known as fixed wireless connections?",
    "options": {
      "A": "Wi-Fi",
      "B": "Bluetooth",
      "C": "Wireless Local Loop (WLL)",
      "D": "Long-Term Evolution (LTE)"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Hard",
    "source_snippet": "A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections."
  }
]
```

---

## Interaction [21:42:34]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: In a Mesh Topology, what is the characteristic connection between nodes?
        Proposed Answer: B (Each node has a dedicated point-to-point link to every other node.)
        Source Snippet provided by Writer: Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Every node has a dedicated point to point link to every other node', which factually proves the proposed answer that 'Each node has a dedicated point-to-point link to every other node.' The question is also factually accurate regarding mesh topology."}
```

---

## Interaction [21:42:44]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Time Division Multiple Access (TDMA) allows multiple users to share the same frequency channel by dividing the signal into different what?
        Proposed Answer: B (Time slots)
        Source Snippet provided by Writer: Allows several users to share the same frequency channel by dividing the signal into different time slots.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that TDMA divides the signal into different time slots, directly supporting the proposed answer."}
```

---

## Interaction [21:42:46]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What information is typically included in the header of a packet in Packet Switching?
        Proposed Answer: C (Source, destination, and packet numbering.)
        Source Snippet provided by Writer: Each packet has header information about the source, destination, packet numbering, etc.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly mentions that packet header information includes 'source, destination, packet numbering, etc.', which directly supports the proposed answer C. The question is also factually accurate regarding packet switching headers."}
```

---

## Interaction [21:44:29]

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

    CONTEXT TEXT (SEGMENT AT 50%):
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital
    
```

### Response:
```json
{
  "exam_board": "",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Internet & Networking",
  "confidence": 0.95
}
```

---

## Interaction [21:44:37]

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
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital format. In P2P
connection, a couple of computers is connected
via a Universal Serial Bus to transfer files.
In peer-to-peer networking, each or every
computer may be worked as server or client.
Printer
Internet
PC
HUB/Switch
PC
Peer-to-Peer Network
Network Related Terms
◆ Multiplexing It is a technique used for
transmitting signals simultaneously over a
common medium. It involves single path and
multiple channels for data communication.
◆ Code Division Multiple Access (CDMA) It is a
channel access method used by various radio
communication technologies. CDMA employs
spread spectrum technology and a special coding
scheme, where each transmitter is assigned a
code to allow multiple users to be multiplexed
over the same physical channel.
◆ Time Division Multiple Access (TDMA) It is based
on the Time Division Multiplexing (TDM) scheme.
which provides different time slots to different
data streams in a cyclically repetitive frame
structure. It allows several users to share the same
frequency channel by dividing the signal into
different time slots.
It is used in the digital 2G cellular systems GSM,
Personal Digital Cellular (PDC) and iDEN and in the
Digital Enhanced Cordless Telecommunications
(DECT) standard for portable phones.
Packet Switching It refers to method of digital
networking communication that combined all
transmitted data regardless of content, type or
structure into suitable sized blocks, known as
packets. Each packet has header information
about the source, destination, packet numbering,
etc.
• Public Switched Telephone Network (PSTN) It is
designed for telephone, which requires modem for
data communication. It is used for FAX machine also.
• Integrated Services Digital Network (ISDN) It is
used for voice, video and data services. It uses digital
transmission and combines both circuit and packet
switching.
◆ Value Added Network (VAN) It provides Electronic
Data Interchange (EDI) facility. Exchange of
information like invoices, sale purchase order, etc is
done.
Network Interface Card (NIC) It is a computer
hardware component that connects a computer to a
computer network. It provides a physical access to a
networking medium
→ Wireless Local Loop (WLL) It is a wireless
communication link in which a user connects with
network through radio-frequency. It is also known as
a fixed wireless connections. WLL is based on CDMA
technology.
◆ Ethernet It is a widely used technology employing
a bus technology. It was published by IEEE 802.3 in
1985. An ethernet LAN consists of a single coaxial
cable called Ether. It operates at 10 Mbps and
provides a 48-bits address. Fast ethernet operates
at 100 Mbps. The latest version of giga ethernet
operates as 1000 Mbps or 1 Gpbs.
OSI model is a conceptual model, the practical
model is TCP/IP. TCP/IP model consists only 5
layers.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ess
It is
em for
e also.
It is
digital
Dacket
ctronic
ge of
, etc is
mputer
ter to a
ess to a
ireless
ts with
own as
CDMA
ploying
802.3 in
coaxial
ps and
perates
thernet
practical
only 5
------------
Downloaded From: www.EasyEngineering.net
Question Bank
1. To send data/message to and from computers
the network software
information in a
(1) NIC
(3) trailer
(5) None of these
puts the
(2) packet
(4) header
message
2. Geometric arrangement of devices on the
network is called
(1) topology
(3) media
(5) None of these
3. LAN can use
(1) peer-to-peer
(3) Both '1' and '2'
(3) radio-waves
(2) protocols
(4) LAN
architecture.
(2) client and server
(4) Neither '1' and '2'
(5) None of these
4. Wi-Fi uses
(1) optic fiber
(2) phase line
(4) sound-waves
network.
(3) star
[SBI Clerk 2011]
(4) mesh
(5) None of these
5. Hub is associated with
(1) bus
(2) ring
(5) All of these
6. Multiplexing involves
7.
channel.
(1) one, one
(3) multiple, one
(5) None of these
path and.........
[SBI Clerk 2011]
(2) one, multiple
(4) multiple, multiple
...... is the transmission of data between two or
more computers over communication links.
(1) Communication
(3) Data communication
(4) Data networking
(2) Networking
(5) Information networking
8. Communication channel having
(1) 1
(2) 2
(5) None of these
9. The advantage of LAN is
10. Which type of network would use phone lines?
(1) WAN
(3) WWAN
(5) None of these
(2) LAN
(4) Wireless
[SBI Clerk 2012]
11. In simplex channel, flow of data is
(1) always in one direction
(2) always in both direction
(3) in both direction, but one at a time
(4) All of the above
(5) None of the above
12. A packet filtering firewall operates at which of
the following OSI layers?
(1) At the application layer
(2) At the transport layer
(3) At the network
(4) At the gateway layer
(5) Both '2' and '3'
13. Servers are those computers which provide
resources to other computers connected by
(1) network
(3) super computer
(5) None of these
(2) mainframe
(4) client
[SBI Clerk 2009]
14. A combination of hardware and software that
allows communication and electronic transfer
of information between computers is a
(1) network
(3) server
(5) modem
(2) backup system
(4) peripheral
[SBI Clerk 2012]
15. What type of resource is most likely to be a
shared common resource in a computer
network?
[Allahabad Bank Clerk 2010]
(1) Printers
(2) Speakers
(3) Floppy disk drives
(4) Keyboards
(5) None of these
16. A device that connects to a network without
the use of cables is said to be [IBPS Clerk 2012]
(2) cabled
....... types.
(3) 3
(4) 4
(1) distributed
(3) centralised
(5) wireless
[SBI Clerk 2012]
(1) sharing peripherals
(2) backing up your data
(3) saving all your data
(4) accessing the web
(5) automatic printing of data
(4) open source
17. Typical data transfer rate in LAN are of the
order of
(2) kilo bits per second
(1) bits per second
(3) mega bits per second
(4) tera bits per second
(5) None of the above
Downloaded From: www.Easy

--- PAGE BREAK ---

114
Downloaded From: www.EasyEngineering.net
18. Which of the following refers to a small,
single-site network?
(1) PAN
(5) CPU
(2) DSL (3) RAM (4) USB
19. Which of the following topologies is not of
20.
broadcast type?
(1) Star
(3) Ring
(2) Bus
(4) All of these
allows LAN users to share computer
(1) Communication server
(3) File server
(5) None of these
21.
........
is
the
most
important/powerful
(5) None of these
programs and data.
(2) Print server
(4) All of these
Computer Awareness
28. In OSI network architecture, the routing is
performed by
(1) network layer
(3) transport layer
(5) None of these
[IBPS Clerk 2012]
(2) data link layer
(4) session layer
29. Which of the following is considered a broad
band communication channel?, [SBI PO 2010]
(1) Coaxial cable (2) Fiber optics cable
(3) Microwave circuits (4) All of these
(5) None of these
30. A device operating at the physical layer is
called a
(1) bridge
(3) repeater
(5) None of these
(2) router
(4) All of these
computer in a typical network. [SBI PO 2013]
(1) Desktop
(3) Network server
(5) Network switch
22. P2P is a
(2) Network client
(4) Network station
application architecture.
(1) client/server
(3) centralised
(5) None of these
23. Ethernet uses
(1) bus topology
(3) mesh topology
(5) None of these
(2) distributed
(4) 1-tier
[IBPS Clerk 2012]
(2) ring topology
(4) All of these
31. A protocol is a set of rules governing a time
sequence of events that must take place
(1) between peers
(2) between an interface
(3) between modems
(4) across an interface
(5) None of the above
32. An inter-company network which used to
distribute information, documents files and
database, is called as
(1) LAN
(2) Switch
(3) WAN
(4) MAN
(5) None of these
D
3
39
40
41
24. In a ring topology, the computer in possession
of the ........ can transmit data.
(1) packet
(2) data
(3) access method
(4) token
(5) None of these
25. Which of the following represents the fastest
[SBI Clerk 2012]
data transmission speed?
(1) Bandwidth
(3) gbps
(5) mbps
(2) bps
(4) kbps
33. Which of the following is not a network device?
(1) Router
(3) Modem
(5) None of these
(2) Switch
(4) Bridge
34. How many bits are there in the ethernet
address?
(1) 64 bits
(3) 32 bits
(5) None of these
[SBI Clerk 2011]
(2) 48 bits
(4) 16 bits
42
26. Network components are connected to the
same cable in the
(1) star
(2) ring
topology.
(3) bus
(4) mesh
(5) mixed
35. How many layers are in the TCP/IP model?
(1) 4 layers
[SBI Clerk 2011]
(2) 5 layers
(3) 6 layers
(4) 7 layers
(5) None of these
S
27. Two or more computers connected to each
other for sharing information form a
(1) network
(3) server
(5) pipeline
(2) router
(4) tunnel
36. What is the use of bridge in network?
(1) To connect LANS
(2) To separate LANS
(3) To control network speed
(4) All of the above
1
2
3
4.
Downloaded From: www.EasyEngineering.net
(5) None of the above

--- PAGE BREAK ---

eness
routing is
Clerk 2012]
layer
yer
d a broad
PO 2010]
cs cable
se
ce
layer is
g a time
ace
used to
Files and
device?
ethernet
erk 2011]
odel?
erk 2011]
Data
Communication: www.EasyEngineering.net
"Networking
37. The first network that has plant
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node. It contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "Nodes are arranged as a tree, with the function of the central node potentially distributed. It is an extension and variation of star topology, with its basic structure like an inverted tree where the root acts as a server. It allows more devices to be attached to a single hub."
    },
    {
      "concept": "Client-Server Network",
      "statement": "A model of interaction between two application programs where a program at one end (client) requests a service from a program at the other end (server). It is a network architecture that separates the client from the server, where one computer works as a server and others as clients. The client acts as the active device and the server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Also known as P2P network. It relies on computing power at the edges of a connection rather than in the network itself. It is used for sharing content like audio, video, data, or anything in digital format. In P2P connection, a couple of computers are connected via a Universal Serial Bus to transfer files. Each or every computer may be worked as a server or client."
    },
    {
      "concept": "Multiplexing",
      "statement": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
    },
    {
      "concept": "Code Division Multiple Access (CDMA)",
      "statement": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "concept": "Time Division Multiple Access (TDMA)",
      "statement": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots. It is used in digital 2G cellular systems GSM, Personal Digital Cellular (PDC) and iDEN, and in the Digital Enhanced Cordless Telecommunications (DECT) standard for portable phones."
    },
    {
      "concept": "Packet Switching",
      "statement": "A method of digital networking communication that combines all transmitted data, regardless of content, type, or structure, into suitable sized blocks known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "concept": "Public Switched Telephone Network (PSTN)",
      "statement": "Designed for telephone, which requires a modem for data communication. It is also used for FAX machines."
    },
    {
      "concept": "Integrated Services Digital Network (ISDN)",
      "statement": "Used for voice, video, and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "concept": "Value Added Network (VAN)",
      "statement": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase orders, etc., is done."
    },
    {
      "concept": "Network Interface Card (NIC)",
      "statement": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "concept": "Wireless Local Loop (WLL)",
      "statement": "A wireless communication link in which a user connects with the network through radio-frequency. It is also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "concept": "Ethernet",
      "statement": "A widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An Ethernet LAN consists of a single coaxial cable called Ether. It operates at 10 Mbps and provides a 48-bits address. Fast Ethernet operates at 100 Mbps. The latest version of Gigabit Ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "OSI model vs TCP/IP model",
      "statement": "OSI model is a conceptual model, the practical model is TCP/IP. TCP/IP model consists only of 5 layers."
    },
    {
      "concept": "Star Topology Disadvantages",
      "statement": "Requires more cable length than bus topology. If the hub or server fails, the entire network will be disabled. Difficult to expand, as the new node has to connect all the way to the central node."
    },
    {
      "concept": "Mesh Topology Advantages",
      "statement": "Excellent for long-distance networking. Communication is possible through an alternate route if one path is busy."
    },
    {
      "concept": "Mesh Topology Disadvantages",
      "statement": "Long wire/cable length, hence an increase in the cost of installation and maintenance."
    },
    {
      "concept": "Tree Topology Advantages",
      "statement": "The tree topology simulates a hierarchical flow of data, making it suitable for applications where hierarchical flow of data and control is required. The network can be easily extended."
    },
    {
      "concept": "Tree Topology Disadvantages",
      "statement": "Long cables are required. There are dependencies on the root node. If the central hub fails, the entire system breaks down."
    },
    {
      "concept": "Client-Server Network Characteristics",
      "statement": "It is a scalable architecture where one computer works as a server and others as clients. The client acts as the active device and the server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network Characteristics",
      "statement": "Each or every computer may be worked as a server or client. It relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "concept": "Ethernet Address Length",
      "statement": "Ethernet provides a 48-bits address."
    },
    {
      "concept": "Ethernet Speeds",
      "statement": "Ethernet operates at 10 Mbps. Fast Ethernet operates at 100 Mbps. Gigabit Ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "TCP/IP Model Layers",
      "statement": "The TCP/IP model consists of 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology. In mesh topology, every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node. This type of network topology contains at least two nodes with two or more paths between them."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree. The function of the central node in this topology may be distributed. A tree topology is an extension and variation of star topology. Its basic structure is like an inverted tree, where the root acts as a server. It allows more devices to be attached to a single hub."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server). It is a network architecture which separates the client from the server. It is scalable architecture, where one computer works as server and others as client. Here, client acts as the active device and server behaves as passively."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. This computer network relies on computing power at the edges of a connection rather than in the network itself. It is used for sharing content like audio, video, data or anything in digital format. In P2P connection, a couple of computers is connected via a Universal Serial Bus to transfer files. In peer-to-peer networking, each or every computer may be worked as server or client."
    },
    {
      "term": "Multiplexing",
      "meaning": "It is a technique used for transmitting signals simultaneously over a common medium. It involves single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "It is a channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "It is based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots. It is used in the digital 2G cellular systems GSM, Personal Digital Cellular (PDC) and iDEN and in the Digital Enhanced Cordless Telecommunications (DECT) standard for portable phones."
    },
    {
      "term": "Packet Switching",
      "meaning": "It refers to method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "It is designed for telephone, which requires modem for data communication. It is used for FAX machine also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "It is used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "It provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "It is a computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "It is a wireless communication link in which a user connects with network through radio-frequency. It is also known as a fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "It is a widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. It operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "term": "OSI model",
      "meaning": "A conceptual model for network communication."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model of computer networking, consisting of 5 layers."
    }
  ]
}
```

---

## Interaction [21:45:29]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Internet & Networking.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node. It contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "Nodes are arranged as a tree, with the function of the central node potentially distributed. It is an extension and variation of star topology, with its basic structure like an inverted tree where the root acts as a server. It allows more devices to be attached to a single hub."
    },
    {
      "concept": "Client-Server Network",
      "statement": "A model of interaction between two application programs where a program at one end (client) requests a service from a program at the other end (server). It is a network architecture that separates the client from the server, where one computer works as a server and others as clients. The client acts as the active device and the server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Also known as P2P network. It relies on computing power at the edges of a connection rather than in the network itself. It is used for sharing content like audio, video, data, or anything in digital format. In P2P connection, a couple of computers are connected via a Universal Serial Bus to transfer files. Each or every computer may be worked as a server or client."
    },
    {
      "concept": "Multiplexing",
      "statement": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
    },
    {
      "concept": "Code Division Multiple Access (CDMA)",
      "statement": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "concept": "Time Division Multiple Access (TDMA)",
      "statement": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots. It is used in digital 2G cellular systems GSM, Personal Digital Cellular (PDC) and iDEN, and in the Digital Enhanced Cordless Telecommunications (DECT) standard for portable phones."
    },
    {
      "concept": "Packet Switching",
      "statement": "A method of digital networking communication that combines all transmitted data, regardless of content, type, or structure, into suitable sized blocks known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "concept": "Public Switched Telephone Network (PSTN)",
      "statement": "Designed for telephone, which requires a modem for data communication. It is also used for FAX machines."
    },
    {
      "concept": "Integrated Services Digital Network (ISDN)",
      "statement": "Used for voice, video, and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "concept": "Value Added Network (VAN)",
      "statement": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase orders, etc., is done."
    },
    {
      "concept": "Network Interface Card (NIC)",
      "statement": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "concept": "Wireless Local Loop (WLL)",
      "statement": "A wireless communication link in which a user connects with the network through radio-frequency. It is also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "concept": "Ethernet",
      "statement": "A widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An Ethernet LAN consists of a single coaxial cable called Ether. It operates at 10 Mbps and provides a 48-bits address. Fast Ethernet operates at 100 Mbps. The latest version of Gigabit Ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "OSI model vs TCP/IP model",
      "statement": "OSI model is a conceptual model, the practical model is TCP/IP. TCP/IP model consists only of 5 layers."
    },
    {
      "concept": "Star Topology Disadvantages",
      "statement": "Requires more cable length than bus topology. If the hub or server fails, the entire network will be disabled. Difficult to expand, as the new node has to connect all the way to the central node."
    },
    {
      "concept": "Mesh Topology Advantages",
      "statement": "Excellent for long-distance networking. Communication is possible through an alternate route if one path is busy."
    },
    {
      "concept": "Mesh Topology Disadvantages",
      "statement": "Long wire/cable length, hence an increase in the cost of installation and maintenance."
    },
    {
      "concept": "Tree Topology Advantages",
      "statement": "The tree topology simulates a hierarchical flow of data, making it suitable for applications where hierarchical flow of data and control is required. The network can be easily extended."
    },
    {
      "concept": "Tree Topology Disadvantages",
      "statement": "Long cables are required. There are dependencies on the root node. If the central hub fails, the entire system breaks down."
    },
    {
      "concept": "Client-Server Network Characteristics",
      "statement": "It is a scalable architecture where one computer works as a server and others as clients. The client acts as the active device and the server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network Characteristics",
      "statement": "Each or every computer may be worked as a server or client. It relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "concept": "Ethernet Address Length",
      "statement": "Ethernet provides a 48-bits address."
    },
    {
      "concept": "Ethernet Speeds",
      "statement": "Ethernet operates at 10 Mbps. Fast Ethernet operates at 100 Mbps. Gigabit Ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "TCP/IP Model Layers",
      "statement": "The TCP/IP model consists of 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology. In mesh topology, every node has a dedicated point to point link to every other node. It provides a bi-directional link between each possible node. This type of network topology contains at least two nodes with two or more paths between them."
    },
    {
      "term": "Tree Topology",
      "meaning": "A network topology in which nodes are arranged as a tree. The function of the central node in this topology may be distributed. A tree topology is an extension and variation of star topology. Its basic structure is like an inverted tree, where the root acts as a server. It allows more devices to be attached to a single hub."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server). It is a network architecture which separates the client from the server. It is scalable architecture, where one computer works as server and others as client. Here, client acts as the active device and server behaves as passively."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. This computer network relies on computing power at the edges of a connection rather than in the network itself. It is used for sharing content like audio, video, data or anything in digital format. In P2P connection, a couple of computers is connected via a Universal Serial Bus to transfer files. In peer-to-peer networking, each or every computer may be worked as server or client."
    },
    {
      "term": "Multiplexing",
      "meaning": "It is a technique used for transmitting signals simultaneously over a common medium. It involves single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "It is a channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "It is based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots. It is used in the digital 2G cellular systems GSM, Personal Digital Cellular (PDC) and iDEN and in the Digital Enhanced Cordless Telecommunications (DECT) standard for portable phones."
    },
    {
      "term": "Packet Switching",
      "meaning": "It refers to method of digital networking communication that combined all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "It is designed for telephone, which requires modem for data communication. It is used for FAX machine also."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "It is used for voice, video and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "It provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase order, etc is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "It is a computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "It is a wireless communication link in which a user connects with network through radio-frequency. It is also known as a fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Ethernet",
      "meaning": "It is a widely used technology employing a bus technology. It was published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. It operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. The latest version of giga ethernet operates as 1000 Mbps or 1 Gpbs."
    },
    {
      "term": "OSI model",
      "meaning": "A conceptual model for network communication."
    },
    {
      "term": "TCP/IP model",
      "meaning": "The practical model of computer networking, consisting of 5 layers."
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
    "question": "Which network topology ensures that every node has a dedicated point-to-point link to every other node, providing a bi-directional link between each possible node?",
    "options": {
      "A": "Tree Topology",
      "B": "Star Topology",
      "C": "Mesh Topology",
      "D": "Bus Topology"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node."
  },
  {
    "question": "In a Client-Server Network, which component acts as the active device?",
    "options": {
      "A": "Server",
      "B": "Client",
      "C": "Hub",
      "D": "Router"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "The client acts as the active device and the server behaves passively."
  },
  {
    "question": "What technique is used for transmitting signals simultaneously over a common medium, involving a single path and multiple channels for data communication?",
    "options": {
      "A": "Packet Switching",
      "B": "Multiplexing",
      "C": "Code Division Multiple Access",
      "D": "Time Division Multiple Access"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
  },
  {
    "question": "Which channel access method employs spread spectrum technology and a special coding scheme where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel?",
    "options": {
      "A": "Time Division Multiple Access (TDMA)",
      "B": "Frequency Division Multiple Access (FDMA)",
      "C": "Code Division Multiple Access (CDMA)",
      "D": "Orthogonal Frequency Division Multiplexing (OFDM)"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
  },
  {
    "question": "The Public Switched Telephone Network (PSTN) is primarily designed for telephone communication and requires what for data communication?",
    "options": {
      "A": "A router",
      "B": "A switch",
      "C": "A modem",
      "D": "A firewall"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Designed for telephone, which requires a modem for data communication."
  },
  {
    "question": "Which network topology is an extension and variation of star topology, with its basic structure resembling an inverted tree where the root acts as a server?",
    "options": {
      "A": "Mesh Topology",
      "B": "Bus Topology",
      "C": "Ring Topology",
      "D": "Tree Topology"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "It is an extension and variation of star topology, with its basic structure like an inverted tree where the root acts as a server."
  },
  {
    "question": "A network architecture that separates the client from the server, where one computer works as a server and others as clients, is known as:",
    "options": {
      "A": "Peer-to-Peer Network",
      "B": "Client-Server Network",
      "C": "Distributed Network",
      "D": "Decentralized Network"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "It is a network architecture that separates the client from the server, where one computer works as a server and others as clients."
  },
  {
    "question": "Which of the following is a disadvantage of a Star Topology, where if the central hub or server fails, the entire network becomes disabled?",
    "options": {
      "A": "Requires less cable length than bus topology.",
      "B": "Easy to expand by adding new nodes.",
      "C": "Centralized failure point.",
      "D": "High data transfer rate between all nodes."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "If the hub or server fails, the entire network will be disabled."
  },
  {
    "question": "What is the primary function of a Network Interface Card (NIC)?",
    "options": {
      "A": "To provide network connectivity to a computer.",
      "B": "To store network data.",
      "C": "To route network traffic.",
      "D": "To manage network security."
    },
    "correct_answer": "A",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
  },
  {
    "question": "Ethernet technology, published by IEEE 802.3, operates at 10 Mbps and provides an address of what length?",
    "options": {
      "A": "32 bits",
      "B": "48 bits",
      "C": "64 bits",
      "D": "128 bits"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "It operates at 10 Mbps and provides a 48-bits address."
  }
]
```

---

## Interaction [21:45:34]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What technique is used for transmitting signals simultaneously over a common medium, involving a single path and multiple channels for data communication?
        Proposed Answer: B (Multiplexing)
        Source Snippet provided by Writer: A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly describes the definition of multiplexing, which is the technique used for transmitting signals simultaneously over a common medium with a single path and multiple channels. The proposed answer 'Multiplexing' aligns perfectly with this description."}
```

---

## Interaction [21:45:39]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: The Public Switched Telephone Network (PSTN) is primarily designed for telephone communication and requires what for data communication?
        Proposed Answer: C (A modem)
        Source Snippet provided by Writer: Designed for telephone, which requires a modem for data communication.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the PSTN 'requires a modem for data communication', which factually proves the proposed answer that a modem is required for data communication over the PSTN."}
```

---

## Interaction [21:45:45]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: A network architecture that separates the client from the server, where one computer works as a server and others as clients, is known as:
        Proposed Answer: B (Client-Server Network)
        Source Snippet provided by Writer: It is a network architecture that separates the client from the server, where one computer works as a server and others as clients.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that a network architecture separating clients from servers, with one computer as a server and others as clients, is known as a client-server network. This perfectly matches the proposed answer."}
```

---

## Interaction [21:45:50]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following is a disadvantage of a Star Topology, where if the central hub or server fails, the entire network becomes disabled?
        Proposed Answer: C (Centralized failure point.)
        Source Snippet provided by Writer: If the hub or server fails, the entire network will be disabled.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that if the hub or server fails, the entire network will be disabled. This factually supports the proposed answer that a disadvantage of a Star Topology is a centralized failure point. The question is also factually accurate regarding Star Topology characteristics."}
```

---

## Interaction [21:45:55]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary function of a Network Interface Card (NIC)?
        Proposed Answer: A (To provide network connectivity to a computer.)
        Source Snippet provided by Writer: A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{
  "verified": true,
  "reason": "The source snippet explicitly states that a NIC is a 'computer hardware component that connects a computer to a computer network', which directly supports the proposed answer that its primary function is 'To provide network connectivity to a computer'."
}
```

---

## Interaction [21:45:59]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Ethernet technology, published by IEEE 802.3, operates at 10 Mbps and provides an address of what length?
        Proposed Answer: B (48 bits)
        Source Snippet provided by Writer: It operates at 10 Mbps and provides a 48-bits address.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that Ethernet operates at 10 Mbps and provides a 48-bits address, directly supporting the proposed answer."}
```

---

## Interaction [21:49:18]

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

    CONTEXT TEXT (SEGMENT AT 50%):
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital
    
```

### Response:
```json
{
  "exam_board": "",
  "exam_name": "Computer Awareness",
  "year": "",
  "subject": "Computer Awareness",
  "chapter": "Internet & Networking",
  "confidence": 0.95
}
```

---

## Interaction [21:49:23]

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
    em will not bring
down the entire network.
(iv) Allows several types of cables in same
network.
Disadvantages of star topology are
(i) Requires more cable length than bus
topology.
(ii) If hub or server fails, the entire network
will be disabled.
(iii) Difficult to expand, as the new node has
to connect all the way to central node.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
255
pheral
which
from
nodes
ating
ed by
twork
gy are
y easy
ted to
t.
bring
same
Data
a Communication and Networking
Mesh Topology
It is also known as completely interconnected topology. In
mesh topology, every node has a dedicated point to point link
other node. It provides a bi-directional link between
to every
each possible node. This type of network topology contains
atleast two nodes with two or more paths between them.
Mesh topology is robust because the failure of any one
computer
does not bring down the entire network.
Mesh Topology
Advantages of mesh topology are
(i) Excellent for long distance networking.
(ii) Communication possible through the alternate route, if
one path is busy.
Disadvantage of mesh topology are
Long wire/cable length, hence increase in the cost of
installation and maintenance.
Tree Topology
This is a network topology in which nodes are arranged as a
tree. The function of the central node in this topology may
be distributed. A tree topology is an extension and variation
of star topology. Its basic structure is like an inverted tree,
where the root acts as a server. It allows more devices to be
attached to a single hub.
Server
Advantages of tree topology are
111
(i) The tree topology simulates
hierarchical flow of data. So, it is
suitable for applications where
hierarchical flow of data and
control is required.
(ii) We can easily extend the network.
Disadvantages of tree topology are
(i) Long cables are required.
(ii) There are dependencies on the
root node.
(iii) If the central hub fails, the entire
system breaks down.
Models of Computer
Networking
There are mainly two models of computer
networking
Client-Server Network
The model of interaction between two
application programs in which a
program at one end (client) requests a
service from a program at the other
end (server).
It is a network architecture which
separates the client from the server. It
is scalable architecture, where one
computer works as server and others
as client.
Here, client acts as the active device
and server behaves as passively.
Server
LD
bus
work
He has
mode.
Desktop Client
Desktop Client
Laptop Client
Desktop Client
Client-Server Network
Tree Topology
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

Downloaded From: www.EasyEngineering.net
Computer Awareness
112
Peer-to-Peer Network
It is also known as P2P network. This computer
network relies on computing power at the edges
of a connection rather than in the network itself.
It is used for sharing content like audio, video,
data or anything in digital format. In P2P
connection, a couple of computers is connected
via a Universal Serial Bus to transfer files.
In peer-to-peer networking, each or every
computer may be worked as server or client.
Printer
Internet
PC
HUB/Switch
PC
Peer-to-Peer Network
Network Related Terms
◆ Multiplexing It is a technique used for
transmitting signals simultaneously over a
common medium. It involves single path and
multiple channels for data communication.
◆ Code Division Multiple Access (CDMA) It is a
channel access method used by various radio
communication technologies. CDMA employs
spread spectrum technology and a special coding
scheme, where each transmitter is assigned a
code to allow multiple users to be multiplexed
over the same physical channel.
◆ Time Division Multiple Access (TDMA) It is based
on the Time Division Multiplexing (TDM) scheme.
which provides different time slots to different
data streams in a cyclically repetitive frame
structure. It allows several users to share the same
frequency channel by dividing the signal into
different time slots.
It is used in the digital 2G cellular systems GSM,
Personal Digital Cellular (PDC) and iDEN and in the
Digital Enhanced Cordless Telecommunications
(DECT) standard for portable phones.
Packet Switching It refers to method of digital
networking communication that combined all
transmitted data regardless of content, type or
structure into suitable sized blocks, known as
packets. Each packet has header information
about the source, destination, packet numbering,
etc.
• Public Switched Telephone Network (PSTN) It is
designed for telephone, which requires modem for
data communication. It is used for FAX machine also.
• Integrated Services Digital Network (ISDN) It is
used for voice, video and data services. It uses digital
transmission and combines both circuit and packet
switching.
◆ Value Added Network (VAN) It provides Electronic
Data Interchange (EDI) facility. Exchange of
information like invoices, sale purchase order, etc is
done.
Network Interface Card (NIC) It is a computer
hardware component that connects a computer to a
computer network. It provides a physical access to a
networking medium
→ Wireless Local Loop (WLL) It is a wireless
communication link in which a user connects with
network through radio-frequency. It is also known as
a fixed wireless connections. WLL is based on CDMA
technology.
◆ Ethernet It is a widely used technology employing
a bus technology. It was published by IEEE 802.3 in
1985. An ethernet LAN consists of a single coaxial
cable called Ether. It operates at 10 Mbps and
provides a 48-bits address. Fast ethernet operates
at 100 Mbps. The latest version of giga ethernet
operates as 1000 Mbps or 1 Gpbs.
OSI model is a conceptual model, the practical
model is TCP/IP. TCP/IP model consists only 5
layers.
Downloaded From: www.EasyEngineering.net

--- PAGE BREAK ---

ess
It is
em for
e also.
It is
digital
Dacket
ctronic
ge of
, etc is
mputer
ter to a
ess to a
ireless
ts with
own as
CDMA
ploying
802.3 in
coaxial
ps and
perates
thernet
practical
only 5
------------
Downloaded From: www.EasyEngineering.net
Question Bank
1. To send data/message to and from computers
the network software
information in a
(1) NIC
(3) trailer
(5) None of these
puts the
(2) packet
(4) header
message
2. Geometric arrangement of devices on the
network is called
(1) topology
(3) media
(5) None of these
3. LAN can use
(1) peer-to-peer
(3) Both '1' and '2'
(3) radio-waves
(2) protocols
(4) LAN
architecture.
(2) client and server
(4) Neither '1' and '2'
(5) None of these
4. Wi-Fi uses
(1) optic fiber
(2) phase line
(4) sound-waves
network.
(3) star
[SBI Clerk 2011]
(4) mesh
(5) None of these
5. Hub is associated with
(1) bus
(2) ring
(5) All of these
6. Multiplexing involves
7.
channel.
(1) one, one
(3) multiple, one
(5) None of these
path and.........
[SBI Clerk 2011]
(2) one, multiple
(4) multiple, multiple
...... is the transmission of data between two or
more computers over communication links.
(1) Communication
(3) Data communication
(4) Data networking
(2) Networking
(5) Information networking
8. Communication channel having
(1) 1
(2) 2
(5) None of these
9. The advantage of LAN is
10. Which type of network would use phone lines?
(1) WAN
(3) WWAN
(5) None of these
(2) LAN
(4) Wireless
[SBI Clerk 2012]
11. In simplex channel, flow of data is
(1) always in one direction
(2) always in both direction
(3) in both direction, but one at a time
(4) All of the above
(5) None of the above
12. A packet filtering firewall operates at which of
the following OSI layers?
(1) At the application layer
(2) At the transport layer
(3) At the network
(4) At the gateway layer
(5) Both '2' and '3'
13. Servers are those computers which provide
resources to other computers connected by
(1) network
(3) super computer
(5) None of these
(2) mainframe
(4) client
[SBI Clerk 2009]
14. A combination of hardware and software that
allows communication and electronic transfer
of information between computers is a
(1) network
(3) server
(5) modem
(2) backup system
(4) peripheral
[SBI Clerk 2012]
15. What type of resource is most likely to be a
shared common resource in a computer
network?
[Allahabad Bank Clerk 2010]
(1) Printers
(2) Speakers
(3) Floppy disk drives
(4) Keyboards
(5) None of these
16. A device that connects to a network without
the use of cables is said to be [IBPS Clerk 2012]
(2) cabled
....... types.
(3) 3
(4) 4
(1) distributed
(3) centralised
(5) wireless
[SBI Clerk 2012]
(1) sharing peripherals
(2) backing up your data
(3) saving all your data
(4) accessing the web
(5) automatic printing of data
(4) open source
17. Typical data transfer rate in LAN are of the
order of
(2) kilo bits per second
(1) bits per second
(3) mega bits per second
(4) tera bits per second
(5) None of the above
Downloaded From: www.Easy

--- PAGE BREAK ---

114
Downloaded From: www.EasyEngineering.net
18. Which of the following refers to a small,
single-site network?
(1) PAN
(5) CPU
(2) DSL (3) RAM (4) USB
19. Which of the following topologies is not of
20.
broadcast type?
(1) Star
(3) Ring
(2) Bus
(4) All of these
allows LAN users to share computer
(1) Communication server
(3) File server
(5) None of these
21.
........
is
the
most
important/powerful
(5) None of these
programs and data.
(2) Print server
(4) All of these
Computer Awareness
28. In OSI network architecture, the routing is
performed by
(1) network layer
(3) transport layer
(5) None of these
[IBPS Clerk 2012]
(2) data link layer
(4) session layer
29. Which of the following is considered a broad
band communication channel?, [SBI PO 2010]
(1) Coaxial cable (2) Fiber optics cable
(3) Microwave circuits (4) All of these
(5) None of these
30. A device operating at the physical layer is
called a
(1) bridge
(3) repeater
(5) None of these
(2) router
(4) All of these
computer in a typical network. [SBI PO 2013]
(1) Desktop
(3) Network server
(5) Network switch
22. P2P is a
(2) Network client
(4) Network station
application architecture.
(1) client/server
(3) centralised
(5) None of these
23. Ethernet uses
(1) bus topology
(3) mesh topology
(5) None of these
(2) distributed
(4) 1-tier
[IBPS Clerk 2012]
(2) ring topology
(4) All of these
31. A protocol is a set of rules governing a time
sequence of events that must take place
(1) between peers
(2) between an interface
(3) between modems
(4) across an interface
(5) None of the above
32. An inter-company network which used to
distribute information, documents files and
database, is called as
(1) LAN
(2) Switch
(3) WAN
(4) MAN
(5) None of these
D
3
39
40
41
24. In a ring topology, the computer in possession
of the ........ can transmit data.
(1) packet
(2) data
(3) access method
(4) token
(5) None of these
25. Which of the following represents the fastest
[SBI Clerk 2012]
data transmission speed?
(1) Bandwidth
(3) gbps
(5) mbps
(2) bps
(4) kbps
33. Which of the following is not a network device?
(1) Router
(3) Modem
(5) None of these
(2) Switch
(4) Bridge
34. How many bits are there in the ethernet
address?
(1) 64 bits
(3) 32 bits
(5) None of these
[SBI Clerk 2011]
(2) 48 bits
(4) 16 bits
42
26. Network components are connected to the
same cable in the
(1) star
(2) ring
topology.
(3) bus
(4) mesh
(5) mixed
35. How many layers are in the TCP/IP model?
(1) 4 layers
[SBI Clerk 2011]
(2) 5 layers
(3) 6 layers
(4) 7 layers
(5) None of these
S
27. Two or more computers connected to each
other for sharing information form a
(1) network
(3) server
(5) pipeline
(2) router
(4) tunnel
36. What is the use of bridge in network?
(1) To connect LANS
(2) To separate LANS
(3) To control network speed
(4) All of the above
1
2
3
4.
Downloaded From: www.EasyEngineering.net
(5) None of the above

--- PAGE BREAK ---

eness
routing is
Clerk 2012]
layer
yer
d a broad
PO 2010]
cs cable
se
ce
layer is
g a time
ace
used to
Files and
device?
ethernet
erk 2011]
odel?
erk 2011]
Data
Communication: www.EasyEngineering.net
"Networking
37. The first network that has plant
    
```

### Response:
```json
{
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node. Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "An extension and variation of star topology. Its basic structure is like an inverted tree, where the root acts as a server. Allows more devices to be attached to a single hub."
    },
    {
      "concept": "Client-Server Network",
      "statement": "A network architecture which separates the client from the server. It is scalable, where one computer works as server and others as client. Client acts as the active device and server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client. Relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "concept": "Ethernet",
      "statement": "A widely used technology employing a bus technology, published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. Operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. Giga ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "OSI vs TCP/IP Model",
      "statement": "OSI model is a conceptual model, the practical model is TCP/IP. TCP/IP model consists only 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combines all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is also used for FAX machines."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video, and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase orders, etc. is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server)."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. A computer network that relies on computing power at the edges of a connection rather than in the network itself. Used for sharing content like audio, video, data or anything in digital format. In P2P connection, a couple of computers are connected via a Universal Serial Bus to transfer files."
    }
  ]
}
```

---

## Interaction [21:49:57]

### Prompt:
```text

    Generate 10 high-fidelity MCQs for Internet & Networking.
    
    KNOWLEDGE BASE:
    {
  "formulas": [],
  "facts": [
    {
      "concept": "Mesh Topology",
      "statement": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node. Contains at least two nodes with two or more paths between them."
    },
    {
      "concept": "Tree Topology",
      "statement": "An extension and variation of star topology. Its basic structure is like an inverted tree, where the root acts as a server. Allows more devices to be attached to a single hub."
    },
    {
      "concept": "Client-Server Network",
      "statement": "A network architecture which separates the client from the server. It is scalable, where one computer works as server and others as client. Client acts as the active device and server behaves passively."
    },
    {
      "concept": "Peer-to-Peer Network",
      "statement": "Each or every computer may be worked as server or client. Relies on computing power at the edges of a connection rather than in the network itself."
    },
    {
      "concept": "Ethernet",
      "statement": "A widely used technology employing a bus technology, published by IEEE 802.3 in 1985. An ethernet LAN consists of a single coaxial cable called Ether. Operates at 10 Mbps and provides a 48-bits address. Fast ethernet operates at 100 Mbps. Giga ethernet operates at 1000 Mbps or 1 Gbps."
    },
    {
      "concept": "OSI vs TCP/IP Model",
      "statement": "OSI model is a conceptual model, the practical model is TCP/IP. TCP/IP model consists only 5 layers."
    }
  ],
  "definitions": [
    {
      "term": "Mesh Topology",
      "meaning": "Also known as completely interconnected topology."
    },
    {
      "term": "Multiplexing",
      "meaning": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
    },
    {
      "term": "Code Division Multiple Access (CDMA)",
      "meaning": "A channel access method used by various radio communication technologies. CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
    },
    {
      "term": "Time Division Multiple Access (TDMA)",
      "meaning": "Based on the Time Division Multiplexing (TDM) scheme, which provides different time slots to different data streams in a cyclically repetitive frame structure. It allows several users to share the same frequency channel by dividing the signal into different time slots."
    },
    {
      "term": "Packet Switching",
      "meaning": "A method of digital networking communication that combines all transmitted data regardless of content, type or structure into suitable sized blocks, known as packets. Each packet has header information about the source, destination, packet numbering, etc."
    },
    {
      "term": "Public Switched Telephone Network (PSTN)",
      "meaning": "Designed for telephone, which requires a modem for data communication. It is also used for FAX machines."
    },
    {
      "term": "Integrated Services Digital Network (ISDN)",
      "meaning": "Used for voice, video, and data services. It uses digital transmission and combines both circuit and packet switching."
    },
    {
      "term": "Value Added Network (VAN)",
      "meaning": "Provides Electronic Data Interchange (EDI) facility. Exchange of information like invoices, sale purchase orders, etc. is done."
    },
    {
      "term": "Network Interface Card (NIC)",
      "meaning": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
    },
    {
      "term": "Wireless Local Loop (WLL)",
      "meaning": "A wireless communication link in which a user connects with the network through radio-frequency. Also known as fixed wireless connections. WLL is based on CDMA technology."
    },
    {
      "term": "Client-Server Network",
      "meaning": "The model of interaction between two application programs in which a program at one end (client) requests a service from a program at the other end (server)."
    },
    {
      "term": "Peer-to-Peer Network",
      "meaning": "Also known as P2P network. A computer network that relies on computing power at the edges of a connection rather than in the network itself. Used for sharing content like audio, video, data or anything in digital format. In P2P connection, a couple of computers are connected via a Universal Serial Bus to transfer files."
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
    "question": "Which network topology ensures that every node has a dedicated point-to-point link to every other node, providing a bi-directional link between each possible node?",
    "options": {
      "A": "Tree Topology",
      "B": "Bus Topology",
      "C": "Mesh Topology",
      "D": "Star Topology"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Every node has a dedicated point to point link to every other node, providing a bi-directional link between each possible node."
  },
  {
    "question": "What is the primary characteristic of a Client-Server Network architecture?",
    "options": {
      "A": "Each computer acts as both a server and a client simultaneously.",
      "B": "It relies solely on the computing power at the edges of the connection.",
      "C": "One computer acts as a server, and others act as clients.",
      "D": "It is designed for sharing content like audio and video directly between peers."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "A network architecture which separates the client from the server. It is scalable, where one computer works as server and others as client."
  },
  {
    "question": "Which of the following statements accurately describes Ethernet technology?",
    "options": {
      "A": "It operates at 1000 Mbps and provides a 64-bit address.",
      "B": "It is a widely used technology published by IEEE 802.11.",
      "C": "Fast Ethernet operates at 10 Mbps.",
      "D": "An Ethernet LAN typically consists of a single coaxial cable called Ether."
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Hard",
    "source_snippet": "An ethernet LAN consists of a single coaxial cable called Ether."
  },
  {
    "question": "What is the main difference between the OSI model and the TCP/IP model according to the provided knowledge base?",
    "options": {
      "A": "The OSI model is the practical model, while TCP/IP is conceptual.",
      "B": "The TCP/IP model consists of 7 layers, whereas the OSI model has 5.",
      "C": "The OSI model is a conceptual model, and the practical model is TCP/IP.",
      "D": "Both models have the same number of layers but different functionalities."
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "OSI model is a conceptual model, the practical model is TCP/IP."
  },
  {
    "question": "Which term describes a technique used for transmitting signals simultaneously over a common medium, involving a single path and multiple channels?",
    "options": {
      "A": "Packet Switching",
      "B": "Multiplexing",
      "C": "Code Division Multiple Access (CDMA)",
      "D": "Time Division Multiple Access (TDMA)"
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A technique used for transmitting signals simultaneously over a common medium. It involves a single path and multiple channels for data communication."
  },
  {
    "question": "What is the primary function of a Network Interface Card (NIC)?",
    "options": {
      "A": "To manage the overall network traffic flow.",
      "B": "To provide a physical access to a networking medium.",
      "C": "To encrypt and decrypt data packets.",
      "D": "To connect a computer to a power source."
    },
    "correct_answer": "B",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "A computer hardware component that connects a computer to a computer network. It provides a physical access to a networking medium."
  },
  {
    "question": "Which type of network relies on computing power at the edges of a connection rather than in the network itself, where each computer can act as either a server or a client?",
    "options": {
      "A": "Client-Server Network",
      "B": "Tree Topology Network",
      "C": "Mesh Topology Network",
      "D": "Peer-to-Peer Network"
    },
    "correct_answer": "D",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "Each or every computer may be worked as server or client. Relies on computing power at the edges of a connection rather than in the network itself."
  },
  {
    "question": "A network topology that is an extension and variation of star topology, with a basic structure like an inverted tree where the root acts as a server, is known as:",
    "options": {
      "A": "Bus Topology",
      "B": "Mesh Topology",
      "C": "Tree Topology",
      "D": "Ring Topology"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Medium",
    "source_snippet": "An extension and variation of star topology. Its basic structure is like an inverted tree, where the root acts as a server."
  },
  {
    "question": "What is the speed of Giga Ethernet?",
    "options": {
      "A": "10 Mbps",
      "B": "100 Mbps",
      "C": "1000 Mbps or 1 Gbps",
      "D": "10 Gbps"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Easy",
    "source_snippet": "Giga ethernet operates at 1000 Mbps or 1 Gbps."
  },
  {
    "question": "Which channel access method employs spread spectrum technology and a special coding scheme to allow multiple users to share the same physical channel?",
    "options": {
      "A": "Time Division Multiple Access (TDMA)",
      "B": "Frequency Division Multiple Access (FDMA)",
      "C": "Code Division Multiple Access (CDMA)",
      "D": "Slotted Aloha"
    },
    "correct_answer": "C",
    "explanation": "",
    "difficulty_level": "Hard",
    "source_snippet": "CDMA employs spread spectrum technology and a special coding scheme, where each transmitter is assigned a code to allow multiple users to be multiplexed over the same physical channel."
  }
]
```

---

## Interaction [21:50:03]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the primary characteristic of a Client-Server Network architecture?
        Proposed Answer: C (One computer acts as a server, and others act as clients.)
        Source Snippet provided by Writer: A network architecture which separates the client from the server. It is scalable, where one computer works as server and others as client.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet explicitly states that in this network architecture, 'one computer works as server and others as client,' which directly supports the proposed answer that 'One computer acts as a server, and others act as clients.' The question is also factually accurate and does not contain hallucinations."}
```

---

## Interaction [21:50:09]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which of the following statements accurately describes Ethernet technology?
        Proposed Answer: D (An Ethernet LAN typically consists of a single coaxial cable called Ether.)
        Source Snippet provided by Writer: An ethernet LAN consists of a single coaxial cable called Ether.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": false, "reason": "The source snippet states that an Ethernet LAN consists of a single coaxial cable called Ether. However, the proposed answer states that an Ethernet LAN *typically* consists of a single coaxial cable called Ether. While the snippet supports the core idea, the word 'typically' in the answer introduces a nuance not explicitly present in the snippet. More importantly, the snippet itself is factually incorrect as modern Ethernet LANs do not typically use a single coaxial cable called Ether. Ethernet technology has evolved significantly, and while early versions used coaxial cable (like Thinnet and Thicknet), modern Ethernet predominantly uses twisted-pair cabling or fiber optics. Therefore, the snippet does not factually prove the proposed answer, and the question itself is based on a potentially misleading premise if it implies this is a current or typical setup."}
```

---

## Interaction [21:50:13]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the main difference between the OSI model and the TCP/IP model according to the provided knowledge base?
        Proposed Answer: C (The OSI model is a conceptual model, and the practical model is TCP/IP.)
        Source Snippet provided by Writer: OSI model is a conceptual model, the practical model is TCP/IP.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that the OSI model is conceptual and the TCP/IP model is practical, which is the core of the proposed answer. The question is also factually accurate based on common networking knowledge."}
```

---

## Interaction [21:50:21]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: Which type of network relies on computing power at the edges of a connection rather than in the network itself, where each computer can act as either a server or a client?
        Proposed Answer: D (Peer-to-Peer Network)
        Source Snippet provided by Writer: Each or every computer may be worked as server or client. Relies on computing power at the edges of a connection rather than in the network itself.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that 'Each or every computer may be worked as server or client' and 'Relies on computing power at the edges of a connection rather than in the network itself', which are the defining characteristics of a Peer-to-Peer Network as described in the question. Therefore, the proposed answer is factually proven by the source snippet, and the question is not a hallucination."}
```

---

## Interaction [21:50:26]

### Prompt:
```text

        VERIFIER MODE: You are an expert exam auditor.
        Question: What is the speed of Giga Ethernet?
        Proposed Answer: C (1000 Mbps or 1 Gbps)
        Source Snippet provided by Writer: Giga ethernet operates at 1000 Mbps or 1 Gbps.

        TASK: 
        1. Does the 'Source Snippet' factually prove the 'Proposed Answer'?
        2. Is the question free of hallucinations?
        
        Output ONLY a JSON object: {"verified": true/false, "reason": ""}
        
```

### Response:
```json
{"verified": true, "reason": "The source snippet directly states that Giga Ethernet operates at 1000 Mbps or 1 Gbps, which factually proves the proposed answer. The question is also factually accurate and not a hallucination."}
```

---

