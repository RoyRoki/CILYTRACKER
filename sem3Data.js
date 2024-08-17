
function getData(semPstream) {
  switch (semPstream) {
    //.....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>SEM 3<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<......................................................... 

    //.......................................>>>>>>>>ARTS<<<<<<<<<<<<<<<<<<<................


   //.......................................>>>>>>>>SCIENCE<<<<<<<<<<<<<<<<<<<................
    case "3bcamaj":
      return {
        stream: "BCA Maj",
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
                  "Bus Interconnection",
                ],
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
                  "Interrupt",
                ],
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
                  "CISC architectures",
                ],
              },
              unit4: {
                name: "Computer Arithmetic",
                data: [
                  "Addition and Subtraction",
                  "Multiplication algorithm (Boots)",
                  "Division algorithm",
                ],
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
                  "Direct Memory Access",
                ],
              },
            },
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
                  "Process control & real time systems",
                ],
              },
              unit2: {
                name: "Operating System Organization",
                data: [
                  "Processor and user modes",
                  "Kernels",
                  "System calls and system programs",
                ],
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
                  "Non-pre-emptive and pre-emptive scheduling algorithms",
                ],
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
                  "Banker’s algorithm",
                ],
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
                  "Virtual memory",
                ],
              },
            },
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
                  "Transmission media - Guided and Unguided",
                ],
              },
              unit2: {
                name: "Networks Switching Techniques and Access Mechanisms",
                data: [
                  "Switching - Circuit switching, Packet switching, Message switching",
                  "Connectionless and Connection-oriented datagram switching",
                ],
              },
              unit3: {
                name: "Data Link Layer Functions and Protocol",
                data: [
                  "Error detection and error correction techniques - Hamming Code, CRC, Checksum",
                  "Flow control mechanism - Sliding Window protocol, Go-back-N ARQ, Stop and Wait ARQ",
                ],
              },
              unit4: {
                name: "Multiple Access Protocol and Networks",
                data: [
                  "Multiple Access Protocols - Random Access - ALOHA, CSMA, CSMA/CD, CSMA/CA",
                  "Controlled Access - Reservation, Polling, Token Passing",
                  "Channelization - FDMA, TDMA, CDMA",
                  "Network devices - Repeaters, Hubs, Switches, Bridges, Routers and Gateways",
                ],
              },
              unit5: {
                name: "Networks Layer Functions and Protocols)",
                data: [
                  "Routing - Routing algorithms",
                  "Classes of IP",
                  "IPv4 and IPv6 Addresses",
                ],
              },
              unit6: {
                name: "Transport Layer Functions and Protocols",
                data: [
                  "Transport services - Congestion control",
                  "Connection establishment and release - Three way handshaking",
                  "Network Security - Cryptography",
                ],
              },
              unit7: {
                name: "Overview of Application Layer Protocol",
                data: [
                  "Overview of DNS protocol",
                  "Overview of WWW & HTTP protocol",
                ],
              },
            },
          },
          subject4: {
            name: "Data Structure through C (SEC)",
            code: "UBCASEC23003",
            units: {
              unit1: {
                name: "Arrays",
                data: [
                  "Single and Multi-dimensional Arrays",
                  "Sparse Matrices (Array and Linked Representation)",
                ],
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
                  "Limitations of Array representation of stack",
                ],
              },
              unit3: {
                name: "Linked Lists",
                data: [
                  "Singly, Doubly and Circular Lists",
                  "Normal and Circular representation of Stack in Lists",
                  "Insertion and deletion operations on singly, doubly and circular lists",
                ],
              },
              unit4: {
                name: "Queues",
                data: [
                  "Array and Linked representation of Queue",
                  "De-queue",
                  "Priority Queues",
                  "Operations on queue",
                ],
              },
              unit5: {
                name: "Recursion",
                data: [
                  "Developing Recursive Definition of Simple Problems and their implementation",
                  "Advantages and Limitations of Recursion",
                ],
              },
              unit6: {
                name: "Trees",
                data: [
                  "Introduction to Tree as a data structure",
                  "General tree",
                  "Binary Trees (Insertion, Deletion, Traversals on Binary Search Trees)",
                  "Binary search tree",
                  "Height-Balanced Trees (Various operations on AVL Trees)",
                ],
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
                  "Comparison of Sorting Techniques",
                ],
              },
            },
          },
        },
      };
    case "3csmaj":
      return {
        stream: "CS Maj",
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
                  "Bus Interconnection",
                ],
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
                  "Interrupt",
                ],
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
                  "CISC architectures",
                ],
              },
              unit4: {
                name: "Computer Arithmetic",
                data: [
                  "Addition and Subtraction",
                  "Multiplication algorithm (Boots)",
                  "Division algorithm",
                ],
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
                  "Direct Memory Access",
                ],
              },
            },
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
                  "Process control & real time systems",
                ],
              },
              unit2: {
                name: "Operating System Organization",
                data: [
                  "Processor and user modes",
                  "Kernels",
                  "System calls and system programs",
                ],
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
                  "Non-pre-emptive and pre-emptive scheduling algorithms",
                ],
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
                  "Banker’s algorithm",
                ],
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
                  "Virtual memory",
                ],
              },
            },
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
                  "Transmission media - Guided and Unguided",
                ],
              },
              unit2: {
                name: "Networks Switching Techniques and Access Mechanisms",
                data: [
                  "Switching - Circuit switching, Packet switching, Message switching",
                  "Connectionless and Connection-oriented datagram switching",
                ],
              },
              unit3: {
                name: "Data Link Layer Functions and Protocol",
                data: [
                  "Error detection and error correction techniques - Hamming Code, CRC, Checksum",
                  "Flow control mechanism - Sliding Window protocol, Go-back-N ARQ, Stop and Wait ARQ",
                ],
              },
              unit4: {
                name: "Multiple Access Protocol and Networks",
                data: [
                  "Multiple Access Protocols - Random Access - ALOHA, CSMA, CSMA/CD, CSMA/CA",
                  "Controlled Access - Reservation, Polling, Token Passing",
                  "Channelization - FDMA, TDMA, CDMA",
                  "Network devices - Repeaters, Hubs, Switches, Bridges, Routers and Gateways",
                ],
              },
              unit5: {
                name: "Networks Layer Functions and Protocols)",
                data: [
                  "Routing - Routing algorithms",
                  "Classes of IP",
                  "IPv4 and IPv6 Addresses",
                ],
              },
              unit6: {
                name: "Transport Layer Functions and Protocols",
                data: [
                  "Transport services - Congestion control",
                  "Connection establishment and release - Three way handshaking",
                  "Network Security - Cryptography",
                ],
              },
              unit7: {
                name: "Overview of Application Layer Protocol",
                data: [
                  "Overview of DNS protocol",
                  "Overview of WWW & HTTP protocol",
                ],
              },
            },
          },
          subject4: {
            name: "Data Structure through C++ (SEC)",
            code: "UBCASEC23003",
            units: {
              unit1: {
                name: "Arrays",
                data: [
                  "Single and Multi-dimensional Arrays",
                  "Sparse Matrices (Array and Linked Representation)",
                ],
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
                  "Limitations of Array representation of stack",
                ],
              },
              unit3: {
                name: "Linked Lists",
                data: [
                  "Singly, Doubly and Circular Lists",
                  "Normal and Circular representation of Stack in Lists",
                  "Insertion and deletion operations on singly, doubly and circular lists",
                ],
              },
              unit4: {
                name: "Queues",
                data: [
                  "Array and Linked representation of Queue",
                  "De-queue",
                  "Priority Queues",
                  "Operations on queue",
                ],
              },
              unit5: {
                name: "Recursion",
                data: [
                  "Developing Recursive Definition of Simple Problems and their implementation",
                  "Advantages and Limitations of Recursion",
                ],
              },
              unit6: {
                name: "Trees",
                data: [
                  "Introduction to Tree as a data structure",
                  "General tree",
                  "Binary Trees (Insertion, Deletion, Traversals on Binary Search Trees)",
                  "Binary search tree",
                  "Height-Balanced Trees (Various operations on AVL Trees)",
                ],
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
                  "Comparison of Sorting Techniques",
                ],
              },
            },
          },
        },
      };
    case "3mathmaj":
      return {
        stream: "Math MAJ",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UMATMAJ23003",
            name: "Real Analysis",
            units: {
              unit1: {
                name: "Real Numbers and Basic Properties",
                data: [
                  "Review of Algebraic and order properties of ℝ",
                  "ɛ-neighborhood of a point in ℝ",
                  "Countable and uncountable subsets of ℝ",
                  "Bounded above sets, bounded below sets, bounded sets, unbounded sets",
                  "Suprema and infima with their properties and supporting examples",
                  "Completeness property of ℝ and its equivalent properties",
                  "Archimedean property, density property of ℝ, intervals",
                  "Limit point and isolated point of a set, open set, closed set, derived set and their properties",
                  "Bolzano-Weierstrass theorem on limit point, Nested interval theorem",
                  "Compact sets in ℝ, Heine-Borel Theorem",
                ],
              },
              unit2: {
                name: "Sequences",
                data: [
                  "Sequence, bounded sequence, convergent sequence, limit and limit points of a sequence",
                  "Uniqueness of limit of convergent sequences, lim inf & lim sup",
                  "Limit theorems, Monotone sequences, monotone convergence theorem, Sandwich theorem",
                  "Subsequences, divergence criteria",
                  "Monotone subsequence theorem (statement only)",
                  "Bolzano Weierstrass theorem for sequences",
                  "Cauchy sequence, Cauchy’s convergence criterion",
                ],
              },
              unit3: {
                name: "Limits and Continuity",
                data: [
                  "Limits of functions (ɛ-δ approach), sequential criterion for limits, divergence criteria",
                  "Limit theorems, one sided limit",
                  "Infinite limits and limits at infinity",
                  "Continuous functions, sequential criterion for continuity",
                  "Algebra of continuous functions",
                  "Continuous functions on an interval, intermediate value theorem, location of roots theorem, preservation of intervals theorem",
                  "Uniform continuity, non-uniform continuity criteria, uniform continuity theorem",
                ],
              },
              unit4: {
                name: "Series",
                data: [
                  "Infinite series, convergence and divergence of infinite series, Cauchy criterion",
                  "Tests for convergence: comparison test, limit comparison test, D’Alembert’s ratio test, Cauchy’s nth root test, integral test",
                  "Absolutely convergent series (Ratio test, Root test)",
                  "Conditionally convergent series (Leibniz’s test) and alternating series",
                  "Re-arrangement of terms",
                ],
              },
            },
          },
          subject2: {
            code: "UMATMAJ23004",
            name: "Differential Equations",
            units: {
              unit1: {
                name: "Differential Equations",
                data: [
                  "General, particular, explicit, implicit and singular solutions of a differential equation",
                  "First order and first-degree equations: Existence theorem (statement only)",
                  "Exact equation, integrating factors and different calculating rules (statement of relevant results)",
                  "Linear equation and Bernoulli equations",
                  "Special integrating factors and transformations",
                  "First order but not of first-degree equations: Clairaut’s equation",
                  "General solution of homogeneous equation of second order",
                  "Principle of superposition for homogeneous equation",
                  "Wronskian: its properties and applications",
                  "Higher order linear equations with constant coefficients: complementary function and particular integral",
                  "Method of undetermined coefficients",
                  "Method of variation of parameters",
                  "Euler’s homogeneous equation",
                  "Second order linear equations with variable coefficients: method of variation of parameters",
                  "Reduction to normal form",
                  "Change of dependent and independent variables",
                ],
              },
              unit2: {
                name: "Systems of Linear Differential Equations",
                data: [
                  "Types of linear systems",
                  "Differential operators",
                  "Operator method for linear systems with constant coefficients",
                  "Basic theory of linear systems in normal form",
                  "Homogeneous linear systems with constant coefficients: Two equations in two unknown functions",
                ],
              },
              unit3: {
                name: "Autonomous Systems and Phase Plane Analysis",
                data: [
                  "Lipschitz condition and Picard’s Theorem (Statement only)",
                  "Autonomous system",
                  "Equilibrium points",
                  "Interpretation of the phase plane",
                ],
              },
              unit4: {
                name: "Power Series and Eigenvalue Problems",
                data: [
                  "Power series solution of a differential equation about an ordinary point",
                  "Solution about a regular singular point",
                  "Simple eigenvalue problems",
                ],
              },
            },
          },
          subject3: {
            name: "Group Theory",
            code: "UMATMAJ23005",
            units: {
              unit1: {
                name: "Introduction to Group Theory",
                data: [
                  "Equivalence relations, partially ordered relation, functions",
                  "Permutations, even and odd permutations, invertible functions",
                  "Groupoid, semigroup, monoid, groups, finite and infinite groups, commutative groups",
                  "Basic properties of groups",
                  "Finite semigroup with cancellation properties",
                  "Semigroup containing unique solution of 𝑎𝑥 = 𝑏 and 𝑥𝑎 = 𝑏",
                  "Well-known groups: ℤ𝑛, 𝑈𝑛, 𝑀𝑛(𝑅), 𝐺𝐿(𝑛, ℝ), 𝑆𝐿(𝑛, ℝ), Klein’s 4 group",
                  "Multiplicative group of 𝑛-th roots of unity",
                  "Symmetric group 𝑆𝑛 (e.g. 𝑆3, 𝑆4, 𝑆5, …)",
                  "Alternating group 𝐴𝑛, Dihedral group, Quaternion group, etc.",
                ],
              },
              unit2: {
                name: "Subgroups and Related Concepts",
                data: [
                  "Subgroups and its basic properties",
                  "Union, intersection and product of subgroups",
                  "Necessary and sufficient condition for a subset of a group to be a subgroup",
                  "Centralizer, normalizer and center of a group",
                ],
              },
              unit3: {
                name: "Order and Structure of Groups",
                data: [
                  "Order of a group, order of an element",
                  "Cyclic groups, cosets, normal subgroups & factor/quotient groups and their basic properties",
                  "Lagrange’s theorem and consequences including Fermat’s Little theorem",
                  "Cauchy’s theorem for finite abelian groups",
                  "Necessary and sufficient conditions for a subgroup of a group to be a normal subgroup",
                ],
              },
              unit4: {
                name: "Group Homomorphisms and Isomorphisms",
                data: [
                  "Group homomorphisms & isomorphisms and their basic properties",
                  "Cayley’s theorem",
                  "First, Second, and Third isomorphism theorems and their simple problems",
                ],
              },
            },
          },
          subject4: {
            name: "C-programming Language (SEC)",
            code: "UMATSEC23003A",
            units: {
              unit1: {
                name: "Introduction to Computer Systems",
                data: [
                  "Overview of history of computers and architecture of computer",
                  "Concept of compiler, assembler, machine language, high-level language, object-oriented language",
                  "Programming language and importance of C programming",
                ],
              },
              unit2: {
                name: "Data Types and Operators",
                data: [
                  "Characters, constants, and variables data types",
                  "Expression, statements, declaration",
                  "Operators: Arithmetic, increment and decrement, relational, logical, assignment, conditional",
                ],
              },
              unit3: {
                name: "Control Statements",
                data: [
                  "Conditional control statements: If, if-else, nested if-else statements",
                  "Switch, break, and continue statements",
                  "Loop control statements: For, while, and do-while statements",
                ],
              },
              unit4: {
                name: "Arrays and Functions",
                data: [
                  "Arrays: One, two, and multidimensional arrays, declaration and type of arrays",
                  "Reading and displaying elements of arrays",
                  "User-defined Functions: Function prototype, definition of functions, type of functions",
                  "Local and global variables in a function, type of return values, function declaration, nesting of functions",
                  "Main function, recurrence of function",
                  "Library functions: stdio.h, math.h, string.h, stdlib.h, etc.",
                  "No arguments and no return values, arguments but no return values",
                  "Arguments with return values, no arguments but returns a value",
                ],
              },
            },
          },
        },
      };
    case "3mathmin":
      return {
        stream: "Math MIN",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UMATMIN20002",
            name: "CALCULUS, GEOMETRY AND GROUP THEORY",
            units: {
    unit1: {
        name: "Calculus I",
        data: [
            "Reduction formulae, derivations and illustrations of reduction formulae",
            "∫ sinⁿx dx, ∫ cosⁿx dx, ∫ secⁿx dx, ∫ tanⁿx dx, ∫ (logx)ⁿ dx, ∫ sinⁿx cosᵐx dx, etc.",
            "Successive derivatives, Leibnitz rule and its applications",
            "Indeterminate forms, L'Hospital’s rule and its applications"
        ]
    },
    unit2: {
        name: "Calculus II",
        data: [
            "Volume and surface areas of solids formed by revolution of known plane curves and areas (simple problems only)",
            "Concept of parameterizations of a curve",
            "Envelopes, asymptotes, radius of curvature",
            "Concavity, convexity, and inflection points"
        ]
    },
    unit3: {
        name: "Geometry I",
        data: [
            "2D: Rotation of axes and second-degree equations",
            "Pair of straight lines",
            "Classification of conics using the discriminant",
            "Polar equations of conics"
        ]
    },
    unit4: {
        name: "Geometry II",
        data: [
            "3D: Spheres, cylindrical surfaces, cones, ellipsoids, paraboloids, hyperboloids",
            "Classification of quadrics"
        ]
    },
    unit5: {
        name: "Group Theory",
        data: [
            "Equivalence relations, functions, permutations, even and odd permutations",
            "Definitions and examples of Groups, finite and infinite groups, commutative groups",
            "Elementary properties of groups",
            "Some well-known groups: ℤₙ, 𝑈ₙ, 𝑀ₙ(𝑅), Klein’s 4-group, multiplicative group of 𝑛-th roots of unity, symmetric group 𝑆ₙ, etc.",
            "Definition and examples of subgroup",
            "Statement of necessary and sufficient condition for a subset of a group to be a subgroup and its simple applications"
        ]
    }
},
          },
        },
      };

    default:
      return {};
  }
}
