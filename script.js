var STREAM = "";
var SEM = 0;

 window.onload = function() {
        document.getElementById('popupOverlay').style.display = 'flex';
        if(STREAM.length === 0 && SEM === 0) homeInfoHeader();
    };
   
 document.addEventListener('change' , function(event) {
    if(event.target.type === 'checkbox') {
      savedebounce();
    }
 });

 function closePopup() {
        document.getElementById('popupOverlay').style.display = 'none';
        
    }

function showSlyTracker (stream ) { 
    if(SEM === 0) {document.getElementById('popupOverlay').style.display = 'flex'; return;}
    let numberOfCheckBox = 0;
    STREAM = stream;
    
    const show = document.getElementById('show')
    show.innerHTML = ""
    const ul = document.createElement('ul')
    ul.classList.add("tree");

    const masterData = getData(SEM+stream);
    
    for(let subjectN in masterData.subjects) {
        if(masterData.subjects.hasOwnProperty(subjectN)) {
            const subject = masterData.subjects[subjectN]
            const li = document.createElement('li')
            const details = document.createElement('details')
            const summary = document.createElement('summary')

            summary.textContent = subject.name;
            details.appendChild(summary)

            const units = document.createElement('ul')

            for(let unitN in subject.units) {
                if(subject.units.hasOwnProperty(unitN)) {
                    const unit = subject.units[unitN]
                    const unitLs = document.createElement('li')
                    const Unitdetails = document.createElement('details')
                    const Unitsummary = document.createElement('summary')

                    Unitsummary.textContent = unit.name;
                    Unitdetails.appendChild(Unitsummary)

                    const dataList = document.createElement('ul')
                    

                    for(let topic in unit.data){
                        if(unit.data[topic]) {
                        const topicLi = document.createElement('li')
                        const checkBox = document.createElement('input')
                        checkBox.type = "checkbox"
                        ++numberOfCheckBox;
                        checkBox.classList.add("checkbox")
                        checkBox.id = `${numberOfCheckBox}`
                        checkBox.style.marginRight = "1px";
                        topicLi.textContent = unit.data[topic];
                        topicLi.appendChild(checkBox)
                        dataList.appendChild(topicLi)                           
                        }

                    };

                    Unitdetails.appendChild(dataList)
                    unitLs.appendChild(Unitdetails)
                    units.appendChild(unitLs)

                }
            }
            details.appendChild(units)
            li.appendChild(details)
            ul.appendChild(li)
        }
    }
    let Course = !masterData.stream ? "No Data For "+stream : masterData.stream;
    let Sem = convertToRoman(SEM)
    let Year = convertToOrdinal(Math.floor((SEM+1)/2))
    const div = document.createElement('div')
    div.classList.add('infoheader')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    p.textContent = `Semester ${Sem}`
    h2.textContent = `${Year} Year`
    h1.textContent = `${Course}`

    const subheaderRow = document.createElement('div');
    subheaderRow.classList.add('subheader-row');
    subheaderRow.appendChild(h2);
    subheaderRow.appendChild(p);

    div.appendChild(h1)
    div.appendChild(subheaderRow)

    show.appendChild(div)
    show.appendChild(ul)

    loadCheckboxStates();//loading

       

}




function saveCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkboxStates = {};
    
    checkboxes.forEach(checkbox => {
        checkboxStates[checkbox.id] = checkbox.checked;
    });
    localStorage.setItem('checkboxStates'+SEM+STREAM, JSON.stringify(checkboxStates));
}

function loadCheckboxStates() {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates'+SEM+STREAM));
    if (checkboxStates) {
        Object.keys(checkboxStates).forEach(id => {
            let checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = checkboxStates[id];
            }
        });
    }
}

// Debounce function to limit the rate at which a function is executed
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}
function convertToOrdinal(num) {
  const remainder10 = num % 10;
  const remainder100 = num % 100;

  if (remainder10 === 1 && remainder100 !== 11) {
    return `${num}st`;
  } else if (remainder10 === 2 && remainder100 !== 12) {
    return `${num}nd`;
  } else if (remainder10 === 3 && remainder100 !== 13) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}
function convertToRoman(num) {
  const romanNumerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII"
  };

  return romanNumerals[num] || "Number out of range";
}
const savedebounce = debounce(saveCheckboxStates , 300);

function setSem(n) {
    SEM = n;
    if(STREAM.length != 0) {
      showSlyTracker(STREAM);
      return;   
    } 
    document.getElementById('popupOverlay').style.display = 'none';
    const show = document.getElementById('show')
    show.innerHTML = ""
    let Course = STREAM.length === 0 ? "Enter Course" : STREAM;
    let Sem = convertToRoman(SEM)
    let Year = convertToOrdinal(Math.floor((SEM+1)/2))
    const div = document.createElement('div')
    div.classList.add('infoheader')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    p.textContent = `Semester ${Sem}`
    h2.textContent = `${Year} Year`
    h1.textContent = `${Course}`

    const subheaderRow = document.createElement('div');
    subheaderRow.classList.add('subheader-row');
    subheaderRow.appendChild(h2);
    subheaderRow.appendChild(p);

    div.appendChild(h1)
    div.appendChild(subheaderRow)
    
    show.appendChild(div)
}

function homeInfoHeader() {
    const show = document.getElementById('show')
    show.innerHTML = ""
    const div = document.createElement('div')
    div.classList.add('infoheader')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    p.textContent = `Enter Semester`
    h2.textContent = ` Year`
    h1.textContent = `Enter Course`

    const subheaderRow = document.createElement('div');
    subheaderRow.classList.add('subheader-row');
    subheaderRow.appendChild(h2);
    subheaderRow.appendChild(p);

    div.appendChild(h1)
    div.appendChild(subheaderRow)
    
    show.appendChild(div)
}

function getData(semPstream) {
    switch (semPstream) {
        case "3bca": 
            return {
    stream: "BCA",
    year: "2nd",
    sem: "3",   
    subjects: {
        subject1: {
            code: "UBCAMAJ23003",
            name: "Computer Architecture & Organization",
            units: {
                unit1: {
                    name: "Register Transfer and Microoperations",
                    data: [
                        "Register transfer",
                        "Arithmetic microoperation",
                        "Logic microoperations",
                        "Shift microoperation",
                        "Computer registers",
                        "Need of Registers",
                        "Bus system",
                        "Interconnection Structures",
                        "Bus Interconnection"
                    ]
                },
                unit2: {
                    name: "Basic Computer Organization and Design",
                    data: [
                        "Instruction set",
                        "Timing and control",
                        "Instruction cycle",
                        "Hardwired instruction format",
                        "Memory reference",
                        "Register reference",
                        "Input-output instructions",
                        "Design of basic computer",
                        "Interrupt"
                    ]
                },
                unit3: {
                    name: "Central Processing Unit",
                    data: [
                        "Stack organization",
                        "Microprogrammed control",
                        "Microprogrammed instruction formats",
                        "Addressing modes",
                        "Instruction codes",
                        "Machine language",
                        "Assembly language",
                        "Design of CPU",
                        "RISC",
                        "CISC architectures"
                    ]
                },
                unit4: {
                    name: "Computer Arithmetic",
                    data: [
                        "Addition and Subtraction",
                        "Multiplication algorithm (Boots)",
                        "Division algorithm"
                    ]
                },
                unit5: {
                    name: "Memory and Input-Output Organization",
                    data: [
                        "Memory hierarchy",
                        "Main memory",
                        "Cache memory",
                        "Virtual memory",
                        "External Devices",
                        "Programmed I/O",
                        "Interrupt-Driven I/O",
                        "Direct Memory Access"
                    ]
                }
            }
        },
        subject2: {
            code: "UBCAMAJ23004",
            name: "Fundamentals of Operating System",
            units: {
                unit1: {
                    name: "Introduction",
                    data: [
                        "Basic OS functions",
                        "Resource abstraction",
                        "Types of operating systems",
                        "Multiprogramming systems",
                        "Batch systems",
                        "Time sharing systems",
                        "Multiprocessing system",
                        "Operating systems for personal computers & workstations",
                        "Process control & real time systems"
                    ]
                },
                unit2: {
                    name: "Operating System Organization",
                    data: [
                        "Processor and user modes",
                        "Kernels",
                        "System calls and system programs"
                    ]
                },
                unit3: {
                    name: "Process Management",
                    data: [
                        "System view of the process and resources",
                        "Process abstraction",
                        "Process hierarchy",
                        "Threads",
                        "Threading issues",
                        "Thread libraries",
                        "Process Scheduling",
                        "Non-pre-emptive and pre-emptive scheduling algorithms"
                    ]
                },
                unit4: {
                    name: "Concurrency and Synchronization",
                    data: [
                        "Process synchronization",
                        "Critical section",
                        "Semaphores",
                        "Methods for inter-process communication",
                        "Deadlocks: System model",
                        "Deadlock characterization",
                        "Deadlock prevention",
                        "Detection and avoidance",
                        "Recovery from deadlock",
                        "Banker’s algorithm"
                    ]
                },
                unit5: {
                    name: "Memory Management",
                    data: [
                        "Physical and virtual address space",
                        "Memory allocation strategies–fixed and variable partitions",
                        "Demand paging",
                        "Page replacement algorithms",
                        "Allocation of frames",
                        "Thrashing",
                        "Segmentation",
                        "Virtual memory"
                    ]
                },
            }
        },
        subject3: {
            name: "COMPUTER NETWORKS",
            code: "UBCAMAJ23005",
            units: {
                unit1: {
                    name: "Introduction to Computer Networks",
                    data: [
                        "Overview of computer Network",
                        "Categories of network - LAN, MAN, WAN",
                        "Modes of Communication - Simplex, Half Duplex, Full Duplex",
                        "Network topologies",
                        "Layered network architecture - OSI model and TCP/IP protocol suite",
                        "Data and Signals - Analog and Digital signals",
                        "Parallel and Serial transmission",
                        "Transmission impairment - Attenuation, Distortion and Noise",
                        "Multiplexing techniques - FDM, TDM, WDM",
                        "Transmission media - Guided and Unguided"
                    ]
                },
                unit2: {
                    name: "Networks Switching Techniques and Access Mechanisms",
                    data: [
                        "Switching - Circuit switching, Packet switching, Message switching",
                        "Connectionless and Connection-oriented datagram switching"
                    ]
                },
                unit3: {
                    name: "Data Link Layer Functions and Protocol",
                    data: [
                        "Error detection and error correction techniques - Hamming Code, CRC, Checksum",
                        "Flow control mechanism - Sliding Window protocol, Go-back-N ARQ, Stop and Wait ARQ"
                    ]
                },
                unit4: {
                    name: "Multiple Access Protocol and Networks",
                    data: [
                        "Multiple Access Protocols - Random Access - ALOHA, CSMA, CSMA/CD, CSMA/CA",
                        "Controlled Access - Reservation, Polling, Token Passing",
                        "Channelization - FDMA, TDMA, CDMA",
                        "Network devices - Repeaters, Hubs, Switches, Bridges, Routers and Gateways"
                    ]
                },
                unit5: {
                    name: "Networks Layer Functions and Protocols)",
                    data: [
                        "Routing - Routing algorithms",
                        "Classes of IP",
                        "IPv4 and IPv6 Addresses"
                    ]
                },
                unit6: {
                    name: "Transport Layer Functions and Protocols",
                    data: [
                        "Transport services - Congestion control",
                        "Connection establishment and release - Three way handshaking",
                        "Network Security - Cryptography"
                    ]
                },
                unit7: {
                    name: "Overview of Application Layer Protocol",
                    data: [
                        "Overview of DNS protocol",
                        "Overview of WWW & HTTP protocol"
                    ]
                }
            }
        },
        subject4: {
    name: "Data Structure through C",
    code: "UBCASEC23003",
    units: {
        unit1: {
            name: "Arrays",
            data: [
                "Single and Multi-dimensional Arrays",
                "Sparse Matrices (Array and Linked Representation)"
            ]
        },
        unit2: {
            name: "Stacks",
            data: [
                "Implementing single/multiple stacks in an Array (Array and Linked representation)",
                "Push, Pop operations",
                "Prefix, Infix and Postfix expressions",
                "Applications of stack",
                "Evaluation of these expressions",
                "Conversion of these expressions from one to another",
                "Limitations of Array representation of stack"
            ]
        },
        unit3: {
            name: "Linked Lists",
            data: [
                "Singly, Doubly and Circular Lists",
                "Normal and Circular representation of Stack in Lists",
                "Insertion and deletion operations on singly, doubly and circular lists"
            ]
        },
        unit4: {
            name: "Queues",
            data: [
                "Array and Linked representation of Queue",
                "De-queue",
                "Priority Queues",
                "Operations on queue"
            ]
        },
        unit5: {
            name: "Recursion",
            data: [
                "Developing Recursive Definition of Simple Problems and their implementation",
                "Advantages and Limitations of Recursion"
            ]
        },
        unit6: {
            name: "Trees",
            data: [
                "Introduction to Tree as a data structure",
                "General tree",
                "Binary Trees (Insertion, Deletion, Traversals on Binary Search Trees)",
                "Binary search tree",
                "Height-Balanced Trees (Various operations on AVL Trees)"
            ]
        },
        unit7: {
            name: "Searching and Sorting",
            data: [
                "Linear Search",
                "Binary Search",
                "Comparison of Linear and Binary Search",
                "Selection Sort",
                "Bubble Sort",
                "Insertion Sort",
                "Comparison of Sorting Techniques"
            ]
        }
    }
        }
      }
    };
       case "3cs": 
              return {
    stream: "COMPUTER SCIENCE",
    year: "2nd",
    sem: "3",   
    subjects: {
        subject1: {
            code: "UBCAMAJ23003",
            name: "Computer Architecture & Organization",
            units: {
                unit1: {
                    name: "Register Transfer and Microoperations",
                    data: [
                        "Register transfer",
                        "Arithmetic microoperation",
                        "Logic microoperations",
                        "Shift microoperation",
                        "Computer registers",
                        "Need of Registers",
                        "Bus system",
                        "Interconnection Structures",
                        "Bus Interconnection"
                    ]
                },
                unit2: {
                    name: "Basic Computer Organization and Design",
                    data: [
                        "Instruction set",
                        "Timing and control",
                        "Instruction cycle",
                        "Hardwired instruction format",
                        "Memory reference",
                        "Register reference",
                        "Input-output instructions",
                        "Design of basic computer",
                        "Interrupt"
                    ]
                },
                unit3: {
                    name: "Central Processing Unit",
                    data: [
                        "Stack organization",
                        "Microprogrammed control",
                        "Microprogrammed instruction formats",
                        "Addressing modes",
                        "Instruction codes",
                        "Machine language",
                        "Assembly language",
                        "Design of CPU",
                        "RISC",
                        "CISC architectures"
                    ]
                },
                unit4: {
                    name: "Computer Arithmetic",
                    data: [
                        "Addition and Subtraction",
                        "Multiplication algorithm (Boots)",
                        "Division algorithm"
                    ]
                },
                unit5: {
                    name: "Memory and Input-Output Organization",
                    data: [
                        "Memory hierarchy",
                        "Main memory",
                        "Cache memory",
                        "Virtual memory",
                        "External Devices",
                        "Programmed I/O",
                        "Interrupt-Driven I/O",
                        "Direct Memory Access"
                    ]
                }
            }
        },
        subject2: {
            code: "UBCAMAJ23004",
            name: "Fundamentals of Operating System",
            units: {
                unit1: {
                    name: "Introduction",
                    data: [
                        "Basic OS functions",
                        "Resource abstraction",
                        "Types of operating systems",
                        "Multiprogramming systems",
                        "Batch systems",
                        "Time sharing systems",
                        "Multiprocessing system",
                        "Operating systems for personal computers & workstations",
                        "Process control & real time systems"
                    ]
                },
                unit2: {
                    name: "Operating System Organization",
                    data: [
                        "Processor and user modes",
                        "Kernels",
                        "System calls and system programs"
                    ]
                },
                unit3: {
                    name: "Process Management",
                    data: [
                        "System view of the process and resources",
                        "Process abstraction",
                        "Process hierarchy",
                        "Threads",
                        "Threading issues",
                        "Thread libraries",
                        "Process Scheduling",
                        "Non-pre-emptive and pre-emptive scheduling algorithms"
                    ]
                },
                unit4: {
                    name: "Concurrency and Synchronization",
                    data: [
                        "Process synchronization",
                        "Critical section",
                        "Semaphores",
                        "Methods for inter-process communication",
                        "Deadlocks: System model",
                        "Deadlock characterization",
                        "Deadlock prevention",
                        "Detection and avoidance",
                        "Recovery from deadlock",
                        "Banker’s algorithm"
                    ]
                },
                unit5: {
                    name: "Memory Management",
                    data: [
                        "Physical and virtual address space",
                        "Memory allocation strategies–fixed and variable partitions",
                        "Demand paging",
                        "Page replacement algorithms",
                        "Allocation of frames",
                        "Thrashing",
                        "Segmentation",
                        "Virtual memory"
                    ]
                },
            }
        },
        subject3: {
            name: "COMPUTER NETWORKS",
            code: "UBCAMAJ23005",
            units: {
                unit1: {
                    name: "Introduction to Computer Networks",
                    data: [
                        "Overview of computer Network",
                        "Categories of network - LAN, MAN, WAN",
                        "Modes of Communication - Simplex, Half Duplex, Full Duplex",
                        "Network topologies",
                        "Layered network architecture - OSI model and TCP/IP protocol suite",
                        "Data and Signals - Analog and Digital signals",
                        "Parallel and Serial transmission",
                        "Transmission impairment - Attenuation, Distortion and Noise",
                        "Multiplexing techniques - FDM, TDM, WDM",
                        "Transmission media - Guided and Unguided"
                    ]
                },
                unit2: {
                    name: "Networks Switching Techniques and Access Mechanisms",
                    data: [
                        "Switching - Circuit switching, Packet switching, Message switching",
                        "Connectionless and Connection-oriented datagram switching"
                    ]
                },
                unit3: {
                    name: "Data Link Layer Functions and Protocol",
                    data: [
                        "Error detection and error correction techniques - Hamming Code, CRC, Checksum",
                        "Flow control mechanism - Sliding Window protocol, Go-back-N ARQ, Stop and Wait ARQ"
                    ]
                },
                unit4: {
                    name: "Multiple Access Protocol and Networks",
                    data: [
                        "Multiple Access Protocols - Random Access - ALOHA, CSMA, CSMA/CD, CSMA/CA",
                        "Controlled Access - Reservation, Polling, Token Passing",
                        "Channelization - FDMA, TDMA, CDMA",
                        "Network devices - Repeaters, Hubs, Switches, Bridges, Routers and Gateways"
                    ]
                },
                unit5: {
                    name: "Networks Layer Functions and Protocols)",
                    data: [
                        "Routing - Routing algorithms",
                        "Classes of IP",
                        "IPv4 and IPv6 Addresses"
                    ]
                },
                unit6: {
                    name: "Transport Layer Functions and Protocols",
                    data: [
                        "Transport services - Congestion control",
                        "Connection establishment and release - Three way handshaking",
                        "Network Security - Cryptography"
                    ]
                },
                unit7: {
                    name: "Overview of Application Layer Protocol",
                    data: [
                        "Overview of DNS protocol",
                        "Overview of WWW & HTTP protocol"
                    ]
                }
            }
        },
        subject4: {
    name: "Data Structure through C++",
    code: "UBCASEC23003",
    units: {
        unit1: {
            name: "Arrays",
            data: [
                "Single and Multi-dimensional Arrays",
                "Sparse Matrices (Array and Linked Representation)"
            ]
        },
        unit2: {
            name: "Stacks",
            data: [
                "Implementing single/multiple stacks in an Array (Array and Linked representation)",
                "Push, Pop operations",
                "Prefix, Infix and Postfix expressions",
                "Applications of stack",
                "Evaluation of these expressions",
                "Conversion of these expressions from one to another",
                "Limitations of Array representation of stack"
            ]
        },
        unit3: {
            name: "Linked Lists",
            data: [
                "Singly, Doubly and Circular Lists",
                "Normal and Circular representation of Stack in Lists",
                "Insertion and deletion operations on singly, doubly and circular lists"
            ]
        },
        unit4: {
            name: "Queues",
            data: [
                "Array and Linked representation of Queue",
                "De-queue",
                "Priority Queues",
                "Operations on queue"
            ]
        },
        unit5: {
            name: "Recursion",
            data: [
                "Developing Recursive Definition of Simple Problems and their implementation",
                "Advantages and Limitations of Recursion"
            ]
        },
        unit6: {
            name: "Trees",
            data: [
                "Introduction to Tree as a data structure",
                "General tree",
                "Binary Trees (Insertion, Deletion, Traversals on Binary Search Trees)",
                "Binary search tree",
                "Height-Balanced Trees (Various operations on AVL Trees)"
            ]
        },
        unit7: {
            name: "Searching and Sorting",
            data: [
                "Linear Search",
                "Binary Search",
                "Comparison of Linear and Binary Search",
                "Selection Sort",
                "Bubble Sort",
                "Insertion Sort",
                "Comparison of Sorting Techniques"
            ]
        }
    }
        }
      }
    };
        default: 
            return {};
    }
}