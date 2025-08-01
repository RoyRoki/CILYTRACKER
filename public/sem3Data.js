function getData(semPstream) {
  switch (semPstream) {
    
    case "3bngmaj":
      return {
        stream: "বাংলার MAJ",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UBNGMAJ23003",
            name: "ভাষাতত্ত্ব ও ভাষাবিজ্ঞান",
            units: {
              unit1: {
                name: "ইন্দো-ইউরোপীয় থেকে বাংলা ভাষার উদ্ভব",
                data: ["ইন্দো-ইউরোপীয় থেকে বাংলা ভাষার উদ্ভব"],
              },
              unit2: {
                name: "বাংলা ভাষার বিভিন্ন স্তর",
                data: ["প্রাচীন বাংলা", "মধ্য বাংলা", "আধুনিক বাংলা"],
              },
              unit3: {
                name: "বাংলা উপভাষা ",
                data: [
                  "রাঢ়ি",
                  "বঙ্গালি",
                  "ঝাড়খণ্ডি",
                  "বরেন্দ্রি",
                  "কামরূপি/রাজবংশি",
                ],
              },
              unit4: {
                name: "বাংলা ধ্বনিতত্ত্ব",
                data: ["মৌলিক স্বরধ্বনি", "ব্যঞ্জনধ্বনি", "দ্বিস্বর"],
              },
              unit5: {
                name: "বাংলা রূপতত্ত্ব",
                data: ["রূপমূল", "শব্দ", "পদ-প্রকার"],
              },
              unit6: {
                name: "বাংলা রূপতত্ত্ব",
                data: ["রূপমূল", "শব্দ", "পদ-প্রকার"],
              },
              unit7: {
                name: "ধ্বনি পরিবর্তনের কারণ ও সূত্র",
                data: ["ধ্বনি পরিবর্তনের কারণ ও সূত্র"],
              },
              unit7: {
                name: "শব্দার্থ পরিবর্তনের কারণ ও সূত্র",
                data: ["শব্দার্থ পরিবর্তনের কারণ ও সূত্র"],
              },
              unit8: {
                name: "ভাষাতাত্ত্বিক টীকা",
                data: [
                  "স্বরসংগতি",
                  "স্বরভক্তি বা বিপ্রকর্ষ",
                  "স্বরাগম",
                  "স্বরলোপ",
                  "সমীভবন",
                  "বর্ণবিপর্যয়",
                  "নাসিক্যীভবন",
                  "অপিনিহিতি",
                  "অভিশ্রুতি",
                  "মুণ্ডমাল শব্দ",
                  "মিশ্রভাষা",
                  "অপভাষা",
                  "শ্রুতিধ্বনি",
                  "সাদৃশ্য",
                  "জোড়কলম শব্দ",
                  "লোকনিরুক্তি",
                  "IPA (International Phonetic Alphabet)",
                ],
              },
            },
          },
          subject2: {
            code: "UBNGMAJ23004",
            name: "মধ্যযুগের বাংলা আখ্যানকাব্য",
            units: {
              unit1: {
                name: "মুকুন্দ চক্রবর্তী",
                data: ["চণ্ডীমঙ্গল (আখেটিক খণ্ড)"],
              },
              unit2: {
                name: "কেতকাদাস ক্ষেমানন্দ",
                data: ["মনসামঙ্গল"],
              },
              unit3: {
                name: "ময়মনসিংহগীতিকা",
                data: ["মহুয়া ও চন্দ্রাবতী পালা"],
              },
            },
          },
          subject3: {
            name: "ছন্দ, অলংকার",
            code: "UBNGMAJ23005",
            units: {
              unit1: {
                name: "ছন্দ",
                data: [
                  "সংজ্ঞা ও স্বরূপ : দল, মাত্রা, পর্ব, পঙ্ক্তি, ছেদ, যতি, লয়",
                  "বাংলা ছন্দ পরিচয়দলবৃত্ত, কলাবৃত্ত, মিশ্রকলাবৃত্ত, প্রত্নকলাবৃত্ত, গদ্যছন্দ",
                  "ছন্দবন্ধ : পয়ার, প্রবহমান পয়ার, অমিত্রাক্ষর, মহাপয়ার, মুক্তক",
                  "ছন্দলিপি নির্ণয়",
                ],
              },
              unit2: {
                name: "অলংকার",
                data: [
                  "অলংকার : পরিচয় ও শ্রেণিবিভাগ (শব্দালংকার ও অর্থালংকার)",
                  "সংজ্ঞা ও স্বরূপ",
                  "শব্দালংকার: অনুপ্রাস, যমক, শ্লেষ, বক্রোক্তি, পুনরুক্তবদাভাস",
                  "অর্থালংকার ",
                  "সাদৃশ্যমূলক : উপমা, রূপক, উৎপ্রেক্ষা, সন্দেহ, নিশ্চয়, ভ্রান্তিমান, অপহৃতি, সমাসোক্তি, ব্যতিরেক, অতিশয়োক্তি",
                  "বিরোধমূলক : বিরোধাভাস, বিভাবনা, বিশেষোক্তি, অসংগতি",
                  "গূঢ়ার্থ-প্রতীতিমূলক: অপ্রস্তুত-প্রশংসা, অর্থান্তরন্যাস, ব্যাজস্তুতি",
                  "অলংকার নির্ণয়",
                ],
              },
            },
          },
          subject4: {
            name: "বাংলা ভাষা উপস্থাপন (SEC)",
            code: "UBNGSEC23003",
            units: {
              unit1: {
                name: "বাংলা ভাষা উপস্থাপন",
                data: [
                  "প্রবন্ধ রচনা",
                  "ইংরেজি থেকে বঙ্গানুবাদ",
                  "গবেষণামূলক নিবন্ধের খসড়া উপস্থাপন (সেমিনার প্রেজেন্টেশন)",
                  "দলবদ্ধ আলোচনা (গ্রুপ ডিসকাশন)",
                  "চাকরির সাক্ষাৎকার প্রদান (ইন্টারভিউ দেওয়া)",
                  "বাংলা টাইপিং (হাতে কলমে প্রয়োগসহ)",
                ],
              },
            },
          },
        },
      };
    case "3bngmin":
      return {
        stream: "বাংলার MIN ক অথবা খ",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UBNGMIN20002",
            name: "(ক) ছন্দ ও অলংকার",
            units: {
              unit1: {
                name: "ছন্দ",
                data: [
                  "সংজ্ঞা ও স্বরূপ : দল, মাত্রা, পর্ব, পঙ্ক্তি, ছেদ, যতি, লয়",
                  "বাংলা ছন্দ পরিচয়দলবৃত্ত, কলাবৃত্ত, মিশ্রকলাবৃত্ত, প্রত্নকলাবৃত্ত, গদ্যছন্দ",
                  "ছন্দবন্ধ : পয়ার, প্রবহমান পয়ার, অমিত্রাক্ষর, মহাপয়ার, মুক্তক",
                  "ছন্দলিপি নির্ণয়",
                ],
              },
              unit2: {
                name: "অলংকার",
                data: [
                  "অলংকার : পরিচয় ও শ্রেণিবিভাগ (শব্দালংকার ও অর্থালংকার)",
                  "সংজ্ঞা ও স্বরূপ",
                  "শব্দালংকার: অনুপ্রাস, যমক, শ্লেষ, বক্রোক্তি, পুনরুক্তবদাভাস",
                  "অর্থালংকার ",
                  "সাদৃশ্যমূলক : উপমা, রূপক, উৎপ্রেক্ষা, সন্দেহ, নিশ্চয়, ভ্রান্তিমান, অপহৃতি, সমাসোক্তি, ব্যতিরেক, অতিশয়োক্তি",
                  "বিরোধমূলক : বিরোধাভাস, বিভাবনা, বিশেষোক্তি, অসংগতি",
                  "গূঢ়ার্থ-প্রতীতিমূলক: অপ্রস্তুত-প্রশংসা, অর্থান্তরন্যাস, ব্যাজস্তুতি",
                  "অলংকার নির্ণয়",
                ],
              },
            },
          },
          subject2: {
            code: "UBNGMIN20002",
            name: "(খ) উপন্যাস পরিচয় ও বাংলা উপন্যাস",
            units: {
              unit1: {
                name: "উপন্যাসের পরিচয়",
                data: [
                  "উপন্যাসের সংজ্ঞা",
                  "স্বরূপ ও বৈশিষ্ট্য",
                  "বাংলা উপন্যাসের সূচনা",
                ],
              },
              unit2: {
                name: "উপন্যাসের রূপরীতি",
                data: [
                  "রোমান্স",
                  "ঐতিহাসিক উপন্যাস",
                  "সামাজিক উপন্যাস",
                  "আঞ্চলিক উপন্যাস",
                  "মনস্তাত্ত্বিক উপন্যাস",
                  "রাজনৈতিক উপন্যাস",
                ],
              },
              unit3: {
                name: "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
                data: ["কপালকুণ্ডলা"],
              },
              unit4: {
                name: "রবীন্দ্রনাথ ঠাকুর",
                data: ["চোখের বালি"],
              },
            },
          },
        },
      };
    case "3engmaj":
      return {
        stream: "ENGLISH MIN",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UENGMAJ23003",
            name: "Indian Classical Literature in Translation",
            units: {
              unit1: {
                name: "Understanding Key Concepts in Indian Classical Literature",
                data: [
                  "The Indian Epic Tradition: Themes and Conventions",
                  "The Indian Epic and the Woman Question",
                  "Alankara, Rasa and Bhava",
                  "Dharma and the Heroic",
                ],
              },
              unit2: {
                name: "Indian Classical Drama in Translation",
                data: [
                  "Kalidasa. Abhijnana Shakuntalam. The Loom of Time. Trans. By Chandra Rajan. New Delhi: Penguin, 1989.",
                  "Vyasa. 'The Dicing', 'The Sequel to Dicing', 'The Book of Assembly Hall', 'The Temptation of Karna', Book V 'The Book of Effort'. The Mahabharata. Ed. J.A.B. Van Buitenen. Chicago: Brill, 1975. pp. 106-69.",
                  "Sudraka. Mrcchakatika. Trans. By M. M. Ramachandra Kale. New Delhi: Motilal Banarasidas, 1962.",
                ],
              },
            },
          },
          subject2: {
            code: "UENGMAJ23004",
            name: "From the Beginning to the 16th Century",
            units: {
              unit1: {
                name: "Historical and Literary Topics",
                data: [
                  "Old English Heroic Poetry",
                  "Old English Elegies",
                  "Old English Christian Poetry",
                  "The Beginning of Prose",
                  "Alliterative Poems",
                  "Middle English Romances",
                  "Religious Dream Allegories",
                ],
              },
              unit2: {
                name: "Literature and Literary Criticism",
                data: [
                  "Geoffrey Chaucer: 'Prologue' to The Canterbury Tales, 'Prologue' to The Wife of Bath’s Tale",
                  "Philip Sidney: An Apology for Poetry",
                  "Edmund Spenser: The Faerie Queene, Book I",
                  "Francis Bacon: Of Adversity, Of Truth, Of Studies, Of Travel, Of Friendship, Of Youth and Age",
                ],
              },
            },
          },
          subject3: {
            name: "Elizabethan and Jacobean Poetry",
            code: "UENGMAJ23005",
            units: {
              unit1: {
                name: "Historical and Literary Topics",
                data: [
                  "The Renaissance and its impact on contemporary British Literature",
                  "Humanism and its bearings on literature",
                  "Elizabethan Poetry",
                  "Metaphysical Poetry — Distinctive Features",
                ],
              },
              unit2: {
                name: "Poetry",
                data: [
                  "Sonnets from Spenser’s Amoretti: No: LXVI: 'Like as a Huntsman', LVII: 'Sweet Warrior', LXXV: 'One day I Wrote Her Name'",
                  "William Shakespeare: Sonnet Nos. 18, 29, 30, 64, 65, 137",
                  "John Donne: The Sunne Rising, The Good Morrow, The Anniversarie, A Valediction: Forbidding Mourning",
                  "Andrew Marvell: The Garden, To His Coy Mistress",
                  "Henry Vaughan: The Retreat, Regeneration",
                  "George Herbert: The Pulley, The Collar",
                ],
              },
            },
          },
          subject4: {
            name: "English for Expression (SEC)",
            code: "UENGSEC23003",
            units: {
              unit1: {
                name: "Writing Skill - I",
                data: [
                  "Review writing on films, books, cultural events, sports, etc.",
                ],
              },
              unit2: {
                name: "Writing Skill - II",
                data: [
                  "Argumentative writing (for or against a given topic/idea)",
                  "Descriptive writing (description of persons, places, situations, incidents, etc.)",
                ],
              },
              unit3: {
                name: "Creative Writing",
                data: [
                  "Writing Newspaper articles",
                  "Poems",
                  "Stories",
                  "Speeches",
                  "Travelogues",
                  "Dialogues",
                ],
              },
            },
          },
        },
      };
    case "3engmin":
      return {
        stream: "ENGLISH MINOR",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UENGMIN20002",
            name: "Understanding Drama",
            units: {
              unit1: {
                name: "Key Terms in Drama",
                data: [
                  "Anagnorisis",
                  "Peripeteia",
                  "Chorus",
                  "Climax",
                  "Dramatic irony",
                  "Hamartia",
                  "Hubris",
                  "Soliloquy",
                  "Three Unities",
                  "In Media Res",
                ],
              },
              unit2: {
                name: "William Shakespeare",
                data: ["Macbeth", "Twelfth Night"],
              },
              unit3: {
                name: "Modern Drama",
                data: [
                  "John Galsworthy: Justice",
                  "George Bernard Shaw: Arms and the Man",
                ],
              },
            },
          },
        },
      };
    case "3aec":
      return {
        stream: "AEC ",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UBNGAEM20002",
            name: "AEC বাংলা",
            units: {
              unit1: {
                name: "বাংলা সাহিত্যের বিবিধ পাঠ",
                data: [
                  "সুকুমার রায় : লক্ষ্মণের শক্তিশেল",
                  "রবীন্দ্রনাথ ঠাকুর : সবুজের অভিযান",
                  "নজরুল ইসলাম : সাম্যবাদী",
                  "শরৎচন্দ্র চট্টোপাধ্যায়: মহেশ",
                  "রাজশেখর বসু : বৈজ্ঞানিক বুদ্ধি",
                ],
              },
            },
          },
          subject2: {
            code: "UENGAEM20002",
            name: "AEC ALTERNATIVE ENGLISH",
            units: {
              unit1: {
                name: "Literature and the Marginalized",
                data: [
                  "Mahesh Dattani: Tara",
                  "Temsula Ao: The Jungle Major, The Last Song (from These Hills Called Home: Stories from a War Zone)",
                  "Meena Kandaswamy: Aggression, Apologies for Living on",
                ],
              },
            },
          },
          subject3: {
            code: "UENGAEL20002",
            name: "AEC English Compulsory",
            units: {
              unit1: {
                name: " Literary Appreciation I",
                data: [
                  "Anton Chekhov: The Bet",
                  "Ruskin Bond: The Blue Umbrella",
                ],
              },
              unit2: {
                name: " Literary Appreciation II",
                data: [
                  "St. John Greer Ervine : Progress",
                  "Lady Gregory: Rising of the Moon",
                ],
              },
            },
          },
        },
      };
    case "3edcmin":
      return {
        stream: "EDCATION  MINOR",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UEDCMIN20002",
            name: "Psychological Foundation of Education",
            units: {
              unit1: {
                name: "Educational Psychology and Development",
                data: [
                  "Definition, Nature and Scope; Distinction between Psychology and Educational Psychology",
                  "Growth and Development: Stages and aspects of development in human life, Physical, Social, Emotional, Cognitive and Language development of Infancy, Childhood and Adolescence period and respective educational programmes",
                ],
              },
              unit2: {
                name: "Learning",
                data: [
                  "Definition and characteristics of Learning, Factors influencing Learning",
                  "Theories of Learning: Classical and Operant Conditioning, Trial and Error, and Insightful Learning",
                  "Memorization: LTM, STM, Principles of economy involved in Memorization, Causes of Forgetting",
                ],
              },
              unit3: {
                name: "Intelligence",
                data: [
                  "Intelligence: Definition and Types",
                  "Theories of Intelligence: Spearman, Thurstone, Guilford",
                  "Characteristics of Verbal and Non-Verbal Tests of Intelligence",
                ],
              },
              unit4: {
                name: "Personality",
                data: [
                  "Definition",
                  "Trait Theory of Personality",
                  "Type-cum-Trait Theory of Personality",
                ],
              },
            },
          },
        },
      };
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
    case "3csmin":
      return {
        stream: "CS MIN",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UCMSMIN20002",
            name: "Programming in C",
            units: {
              unit1: {
                name: "Introduction to C",
                data: [
                  "History of C",
                  "Using main() function",
                  "Compiling and Executing Simple Programs in C",
                ],
              },
              unit2: {
                name: "Data Types, Variables, Constants, Operators and Basic I/O",
                data: [
                  "Declaring, Defining and Initializing Variables",
                  "Scope of Variables",
                  "Using Named Constants",
                  "Keywords",
                  "Data Types",
                  "Casting of Data Types",
                  "Operators (Arithmetic, Logical and Bitwise)",
                  "Using Comments in programs",
                  "Character I/O (getc, getchar, putc, putchar, etc.)",
                  "Formatted and Console I/O (printf(), scanf())",
                  "Using Basic Header Files (stdio.h, conio.h, stdlib.h, etc.)",
                ],
              },
              unit3: {
                name: "Expressions, Conditional Statements and Iterative Statements",
                data: [
                  "Simple Expressions in C (Unary Operator Expressions, Binary Operator Expressions)",
                  "Understanding Operators Precedence in Expressions",
                  "Conditional Statements (if construct, switch-case construct)",
                  "Understanding syntax and utility of Iterative Statements (while, do-while, for loops)",
                  "Use of break and continue in Loops",
                  "Using Nested Statements (Conditional and Iterative)",
                ],
              },
              unit4: {
                name: "Functions and Arrays",
                data: [
                  "Utility of functions",
                  "Call by Value",
                  "Call by Reference",
                  "Functions returning value",
                  "Void functions",
                  "Return data type of functions",
                  "Function parameters",
                  "Differentiating between Declaration and Definition of Functions",
                  "Functions with variable number of Arguments",
                  "Creating and Using One Dimensional Arrays",
                  "Manipulating array elements using loops",
                  "Use of Various types of arrays (integer, float, character arrays/Strings)",
                  "Two-dimensional Arrays (Declaring, Defining, Initializing, Working with Rows and Columns)",
                ],
              },
              unit5: {
                name: "Derived Data Types",
                data: [
                  "Understanding utility of structures and unions",
                  "Declaring, initializing and using simple structures and unions",
                  "Manipulating individual members of structures and unions",
                  "Array of Structures",
                  "Individual data members as structures",
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
                  "Indeterminate forms, L'Hospital’s rule and its applications",
                ],
              },
              unit2: {
                name: "Calculus II",
                data: [
                  "Volume and surface areas of solids formed by revolution of known plane curves and areas (simple problems only)",
                  "Concept of parameterizations of a curve",
                  "Envelopes, asymptotes, radius of curvature",
                  "Concavity, convexity, and inflection points",
                ],
              },
              unit3: {
                name: "Geometry I",
                data: [
                  "2D: Rotation of axes and second-degree equations",
                  "Pair of straight lines",
                  "Classification of conics using the discriminant",
                  "Polar equations of conics",
                ],
              },
              unit4: {
                name: "Geometry II",
                data: [
                  "3D: Spheres, cylindrical surfaces, cones, ellipsoids, paraboloids, hyperboloids",
                  "Classification of quadrics",
                ],
              },
              unit5: {
                name: "Group Theory",
                data: [
                  "Equivalence relations, functions, permutations, even and odd permutations",
                  "Definitions and examples of Groups, finite and infinite groups, commutative groups",
                  "Elementary properties of groups",
                  "Some well-known groups: ℤₙ, 𝑈ₙ, 𝑀ₙ(𝑅), Klein’s 4-group, multiplicative group of 𝑛-th roots of unity, symmetric group 𝑆ₙ, etc.",
                  "Definition and examples of subgroup",
                  "Statement of necessary and sufficient condition for a subset of a group to be a subgroup and its simple applications",
                ],
              },
            },
          },
        },
      };
    case "3chemaj":
      return {
        stream: "CHEMISTRY Maj",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UCHEMAJ23003",
            name: "ORGANIC CHEMISTRY-II",
            units: {
              unit1: {
                name: "Stereochemistry",
                data: [
                  "Tetrahedral carbon",
                  "Chirality",
                  "Fischer Projection, Newman and Sawhorse Projection formulae and their interconversions",
                  "Geometrical isomerism: cis–trans and syn-anti isomerism",
                  "E/Z notations with C.I.P rules",
                  "Re/Si face",
                  "Topicity: Homotopic, Heterotopic, Enantiotopic, Diasterotopic group",
                  "Optical activity",
                  "Specific rotation",
                  "Chirality",
                  "Asymmetry/Disymmetry",
                  "Enantiomers",
                  "Molecules with two or more chiral centres",
                  "Diastereoisomers",
                  "Meso compounds",
                  "Racemic modification and resolution",
                  "Relative and absolute configuration: D/L and R/S designations",
                  "Threo-erythro form",
                  "Atropisomerism",
                ],
              },
              unit2: {
                name: "Cycloalkanes and Conformational Analysis",
                data: [
                  "Conformation and physical properties",
                  "Conformation of ethane, propane, and butane (including substituted variety)",
                  "Types of cycloalkanes and their relative stability",
                  "Baeyer strain theory",
                  "Conformation analysis of cycloalkanes (cyclobutane, cyclopentane, cyclohexane, mono and di-substituted cyclohexanes)",
                  "Relative stability",
                  "Energy diagrams",
                  "Chair, Boat and Twist boat forms of cyclohexane and decalin",
                ],
              },
              unit3: {
                name: "Dynamic Stereochemistry",
                data: [
                  "Introduction (Stereo-selective and stereo-specific reactions)",
                  "Dynamic stereochemistry of acyclic and cyclic molecules",
                  "Nucleophilic substitution",
                  "Elimination reactions",
                  "Addition reactions",
                ],
              },
              unit4: {
                name: "Chemistry of Halogenated Hydrocarbons",
                data: [
                  "Alkyl halides: Naming and structure of alkyl halides",
                  "Methods of preparation",
                  "Allylic bromination of alkenes",
                  "Nucleophilic substitution reactions–SN1, SN2, and SNi mechanisms with stereochemical aspects and effect of solvent",
                  "Nucleophilic substitution vs. elimination",
                  "Aryl halides: Preparation, including preparation from diazonium salts",
                  "Nucleophilic aromatic substitution: SNAr, cine Substitution",
                  "Relative reactivity of alkyl, allyl/benzyl, vinyl, and aryl halides towards nucleophilic substitution reactions",
                ],
              },
              unit5: {
                name: "PRACTICAL(any three)",
                data: [
                  "Detection of special elements in solid or liquid organic compounds",
                  "Perform an Iodoform reaction with ethanol/Isopropanol/acetone/any suitable compound",
                  "Preparation of Aryl halide involving diazonium salt",
                  "Bromination of acetanilide by conventional method",
                  "Bromination of acetanilide by green method (Bromate-bromide method)",
                  "Preparation of 1,3,5-tribromo benzene",
                ],
              },
            },
          },
          subject2: {
            code: ": UCHEMAJ23004",
            name: "INORGANIC CHEMISTRY-II",
            units: {
              unit1: {
                name: "Chemical Bonding",
                data: [
                  "Ionic character in covalent compounds: Bond moment and dipole moment",
                  "Percentage ionic character from dipole moment and electronegativity difference",
                  "Metallic Bond: Qualitative idea of valence bond and band theories",
                  "Semiconductors and insulators",
                  "Defects in solids",
                  "Weak Chemical Forces: van der Waals forces, ion-dipole forces, dipole-dipole interactions, induced dipole interactions, instantaneous dipole-induced dipole interactions",
                  "Repulsive forces",
                  "Hydrogen bonding (theories of hydrogen bonding, valence bond treatment)",
                  "Effects of chemical force: melting and boiling points, solubility energetics of dissolution process",
                ],
              },
              unit2: {
                name: "General Principles of Metallurgy",
                data: [
                  "Chief modes of occurrence of metals based on standard electrode potentials",
                  "Ellingham diagrams for reduction of metal oxides using carbon and carbon monoxide as reducing agents",
                  "Electrolytic reduction",
                  "Hydrometallurgy",
                  "Methods of purification of metals: Electrolytic Kroll process, Parting process, van Arkel-de Boer process, Mond’s process, Zone refining",
                ],
              },
              unit3: {
                name: "Acids and Bases",
                data: [
                  "Brönsted-Lowry concept of acid-base reactions",
                  "Solvated proton",
                  "Relative strength of acids",
                  "Types of acid-base reactions",
                  "Levelling solvents",
                  "Lewis acid-base concept",
                  "Classification of Lewis acids",
                  "Hard and Soft Acids and Bases (HSAB)",
                  "Application of HSAB principle",
                ],
              },
              unit4: {
                name: "Oxidation-Reduction",
                data: [
                  "Redox equations",
                  "Standard Electrode Potential and its application to inorganic reactions",
                  "Principles involved in volumetric analysis",
                ],
              },
            },
          },
          subject3: {
            code: ": UCHEMAJ23004",
            name: "INORGANIC CHEMISTRY-II PRACTICAL",
            units: {
              unit1: {
                name: "Titrimetric Analysis",
                data: [
                  "Calibration and use of apparatus",
                  "Preparation of solutions of different Molarity/Normality of titrants",
                ],
              },
              unit2: {
                name: "Acid-Base Titrations",
                data: [
                  "Estimation of carbonate and hydroxide present together in mixture",
                  "Estimation of carbonate and bicarbonate present together in a mixture",
                  "Estimation of free alkali present in different soaps/detergents",
                ],
              },
              unit3: {
                name: "Oxidation-Reduction Titrimetry",
                data: [
                  "Estimation of Fe (II) and oxalic acid using standardized KMnO4 solution",
                  "Estimation of oxalic acid and sodium oxalate in a given mixture",
                  "Estimation of Fe (II) with K2Cr2O7 using internal (diphenylamine, anthranilic acid) and external indicator",
                ],
              },
            },
          },
          subject3: {
            name: "PHYSICAL CHEMISTRY-I",
            code: "UCHEMAJ23005",
            units: {
              unit1: {
                name: "Gaseous State",
                data: [
                  "Kinetic molecular model of a gas: postulates and derivation of the kinetic gas equation",
                  "Concept of temperature and Gas Laws from KTG",
                  "Collision Number, Collision frequency, Collision diameter, Mean free path and viscosity of gases",
                  "Temperature and pressure dependence of viscosity, relation between mean free path and coefficient of viscosity",
                  "Calculation of σ from η",
                  "Variation of viscosity with temperature and pressure",
                  "Maxwell distribution of speeds in one, two and three dimensions",
                  "Molecular velocities (average, root mean square and most probable) and average kinetic energy",
                  "Law of equipartition of energy, degrees of freedom and heat capacity from equipartition principle",
                  "Behavior of real gases: Deviations from ideal gas behavior, compressibility factor, Z, and its variation with pressure",
                  "Causes of deviation from ideal behavior, van der Waals equation of state, its derivation and application",
                  "Other equations of state (Berthelot, Dietirici), virial equation of state",
                  "Van der Waals equation expressed in virial form and calculation of Boyle temperature",
                  "Isotherms of real gases and their comparison with Van der Waals isotherms",
                  "Continuity of states, critical state, relation between critical constants and Van der Waals constants",
                  "Law of corresponding states",
                ],
              },
              unit2: {
                name: "Liquid State",
                data: [
                  "Physical properties of liquids",
                  "Vapour pressure, surface tension and coefficient of viscosity, and their determination",
                  "Effect of addition of various solutes on surface tension and viscosity",
                  "Explanation of cleansing action of detergents",
                  "Temperature variation of viscosity of liquids and comparison with that of gases",
                  "Concepts and Applications of liquid crystals",
                ],
              },
              unit3: {
                name: "Solid State",
                data: [
                  "Nature of the solid state",
                  "Law of constancy of interfacial angles",
                  "Law of rational indices, Miller indices",
                  "Elementary ideas of symmetry, symmetry elements and symmetry operations",
                  "Qualitative idea of point and space groups",
                  "Seven crystal systems and fourteen Bravais lattices",
                  "X-ray diffraction, Bragg’s law",
                  "Simple account of rotating crystal method and powder pattern method",
                  "Analysis of powder diffraction patterns of NaCl, CsCl and KCl",
                  "Defects in crystals",
                  "Glasses and liquid crystals",
                ],
              },
              unit4: {
                name: "Practical",
                data: [
                  "Surface tension measurements: Determination of the surface tension of a liquid/ethanol solution by Drop number method",
                  "Surface tension measurements: Determination of composition of an unknown solution by Drop Number Method using solutions of known composition (solutions of ethanol may be used)",
                  "Viscosity measurement using Ostwald’s viscometer: Determination of viscosity of aqueous solutions of polymer/ethanol/sugar at room temperature",
                  "Viscosity measurement using Ostwald’s viscometer: Determination of composition of an unknown solution by Ostwald Viscometer using solutions of known composition (solutions of ethanol, sucrose may be used)",
                  "Indexing of a given powder diffraction pattern of a cubic crystalline system",
                ],
              },
            },
          },
          subject4: {
            name: "FOOD CHEMISTRY",
            code: "UCHESEC23003",
            units: {
              unit1: {
                name: "Introduction",
                data: [
                  "Food Chemistry: Definition, scope, importance",
                  "Major food constituents and their physicochemical properties",
                  "Role of water in food",
                ],
              },
              unit2: {
                name: "Carbohydrates, Lipids, Proteins, Milk, and Enzymes",
                data: [
                  "Carbohydrates: Role, chemical and functional properties, starch modification, application in food industries",
                  "Lipids: Role, physicochemical properties, rancidity, processing, hydrogenation, effect on functional properties and nutritive values",
                  "Proteins and Amino acids: Properties, functional and nutritional properties",
                  "Milk: Composition, chemical analysis, pasteurization, homogenized milk, powdered milk, dairy and non-dairy products, processing (butter, cheese)",
                  "Enzymes: Nature, classification, properties, enzyme activity, removal of toxicants, flavor production, browning reactions",
                ],
              },
              unit3: {
                name: "Food Additives",
                data: [
                  "Types of additives: Preservatives, nutritional additives, coloring agents, flavoring agents, texturing agents, miscellaneous additives",
                  "Benefits and risks of food additives",
                  "Nutritive and non-nutritive sweeteners",
                  "Nutritional additives: Vitamins (A, D, E, K, C, B1, B2, B3, B6, B9, H), Omega 3 and 6 fatty acids, minerals (Ca, P, Na, K, Cl, I, Zn, Mg, B)",
                ],
              },
              unit4: {
                name: "Chemistry of Indian Spices",
                data: [
                  "Medicinal and pharmacological properties of Indian spices: Black pepper, Cardamom, Ginger, Cumin, Turmeric, Fennel, Fenugreek, Coriander, Ajowan, Bay leaf, Curry leaf",
                ],
              },
              unit5: {
                name: "Pigments and Flavours",
                data: [
                  "Chlorophyll",
                  "Myoglobin and Haemoglobin",
                  "Anthocyanins",
                  "Flavonoids",
                  "Carotenoids",
                  "Tannins",
                  "Quinones",
                  "Xanthones",
                ],
              },
            },
          },
        },
      };
    case "3chedsc":
      return {
        stream: "CHEMISTRY DSC",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UCHEMDC23003",
            name: "GREEN CHEMISTRY",
            units: {
              unit1: {
                name: "Introduction",
                data: [
                  "Definitions of Green Chemistry",
                  "Brief introduction of twelve principles of Green Chemistry, with examples",
                ],
              },

              unit2: {
                name: "Atom Economy",
                data: [
                  "Special emphasis on atom economy",
                  "Reducing toxicity",
                  "Green solvents",
                ],
              },

              unit3: {
                name: "Alternative Energy Source",
                data: [
                  "Green Chemistry and catalysis",
                  "Alternative sources of energy",
                  "Green energy and sustainability",
                ],
              },

              unit4: {
                name: "Real World cases in Green Chemistry",
                data: [
                  "Surfactants for carbon dioxide – Replacing smog-producing and ozone-depleting solvents with CO2 for precision cleaning and dry cleaning of garments",
                  "Right fit pigment: Synthetic azo pigments to replace toxic organic and inorganic pigments",
                  "Designing of environmentally safe marine antifoulant",
                  "An efficient, green synthesis of a compostable and widely applicable plastic (polylactic acid) made from corn",
                ],
              },
            },
          },
        },
      };
    case "3chemin":
      return {
        stream: "CHEMISTRY MIN",
        year: "2nd",
        sem: "3",
        subjects: {
          subject1: {
            code: "UCHEMIN20002",
            name: "CHEMISTRY-II Theory",
            units: {
              unit1: {
                name: "Chemistry of Hydrocarbons",
                data: [
                  "Alkane: Formation, Wurtz Reaction, Wurtz-Fittig Reactions, Halogenation",
                  "Alkene and Alkyne: Formation, E1/E2 elimination reactions, Saytzeff and Hofmann eliminations",
                  "Reactions of Alkenes: Electrophilic additions (Markownikoff/Anti Markownikoff addition), hydroboration-oxidation, ozonolysis, catalytic reduction, hydroxylation",
                  "Reactions of Alkynes: Alkylation of terminal alkynes, reduction reactions, electrophilic and nucleophilic additions, hydration to form carbonyl compounds",
                  "Aromatic Hydrocarbons: Hydrogenation of benzene, directing effects of substituents, electrophilic aromatic substitution (Friedel-Craft’s alkylation/acylation, halogenation, nitration, sulphonation)",
                ],
              },
              unit2: {
                name: "Periodicity of Elements",
                data: [
                  "s, p, d, f block elements; long form of periodic table",
                  "Effective nuclear charge, shielding effect, Slater rules, variation of effective nuclear charge",
                  "Atomic radii (van der Waals)",
                  "Ionic and crystal radii",
                  "Covalent radii (octahedral and tetrahedral)",
                  "Ionization enthalpy, successive ionization enthalpies, factors affecting ionization energy, applications",
                  "Electron gain enthalpy, trends",
                  "Electronegativity: Pauling’s, Mulliken’s, Allred-Rachow’s, Mulliken-Jaffé’s scales, variation with bond order, partial charge, hybridization, group electronegativity",
                ],
              },
              unit3: {
                name: "Liquid and Solid State",
                data: [
                  "Liquid State: Physical properties (vapour pressure, surface tension, coefficient of viscosity), effects of solutes on surface tension and viscosity, cleansing action of detergents, temperature variation of viscosity",
                  "Solid State: Nature, law of constancy of interfacial angles, law of rational indices, Miller indices, symmetry elements, crystal systems (seven) and Bravais lattices (fourteen), X-ray diffraction, Bragg’s law, analysis of crystal structure (NaCl, KCl)",
                ],
              },
            },
          },
          subject2: {
            code: "UCHEMIN20002",
            name: "CHEMISTRY-II PRACTICAL",
            units: {
              unit1: {
                name: "UNIT I (any two)",
                data: [
                  "Preliminary characterization of aliphatic and aromatic compounds by ignition",
                  "Detection of active unsaturation in Cinnamic acid or any suitable compound",
                  "Bromination of Acetanilide by green method using Potassium bromide and Potassium bromate",
                ],
              },

              unit2: {
                name: "UNIT II (any two)",
                data: [
                  "Determination of Density of a liquid",
                  "(2.a) Determination of the surface tension of a liquid or a dilute solution using a stalagmometer",
                  "(2.b) Study of the variation of surface tension of a solution with concentration",
                  "(3.a) Determination of the coefficient of viscosity of a liquid or dilute solution using an Ostwald’s viscometer",
                  "(3.b) Study of the variation of viscosity of an aqueous solution with concentration of solute",
                ],
              },
            },
          },
        },
      };



      case "3edumin":
      return {
        stream: "Education Minor",
        year: "2nd",
        sem: "3/4",
        subjects: {
          subject1: {
            code: "UEDCMIN20002",
            name: "Psychological Foundation of Education",
            units: {
              unit1: {
                name: "Educational Psychology and Development",
                data: [
                  "Definition, Nature and Scope; Distinction between Psychology and Educational Psychology",
                  "Growth and Development: Stages and aspects of development in human life",
                  "Physical, Social, Emotional, Cognitive and Language development of Infancy, Childhood and Adolescence",
                  "Respective educational programmes"
                ]
              },
              unit2: {
                name: "Learning",
                data: [
                  "Definition and characteristics of Learning; Factors influencing Learning",
                  "Theories of Learning: Classical and Operant conditioning, Trial and Error, Insightful Learning",
                  "Memorization: LTM, STM",
                  "Principles of economy involved in Memorization; Causes of Forgetting"
                ]
              },
              unit3: {
                name: "Intelligence",
                data: [
                  "Intelligence: Definition and Types",
                  "Theories of Intelligence – Spearman, Thurstone, Guilford",
                  "Characteristics of Verbal and Non-Verbal Tests of Intelligence"
                ]
              },
              unit4: {
                name: "Personality",
                data: [
                  "Definition",
                  "Trait Theory of Personality",
                  "Type–cum–Trait Theory of Personality"
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
