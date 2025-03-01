function getData(semPstream) {
  switch (semPstream) {
    //.....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>SEM 4<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.........................................................

    //.......................................>>>>>>>>ARTS<<<<<<<<<<<<<<<<<<<................
case "4aec":
  return {
    stream: "English Compulsory",
    year: "2nd",
    sem: "3 & 4",
    subjects: {
      subject1: {
        code: "UENGAEL20002",
        name: "Literary Appreciation Skill",
        units: {
          unit1: {
            name: "Literary Appreciation I",
            data: [
              "Anton Chekhov: The Bet",
              "Ruskin Bond: The Blue Umbrella",
            ],
          },
          unit2: {
            name: "Literary Appreciation II",
            data: [
              "St. John Greer Ervine: Progress",
              "Lady Gregory: Rising of the Moon",
            ],
          },
        },
      },
    },
  };

    //.......................................>>>>>>>>SCIENCE<<<<<<<<<<<<<<<<<<<................
    case "4stamin":
      return {
        stream: "STATISTIC MIN",
        year: "2nd",
        sem: "4",
        subjects: {
          subject1: {
            code: "STAMIN-203",
            name: "Statistical Methods and Probability-II",
            units: {
              unit1: {
                name: "Bi-variate and Multivariate Analysis",
                data: [
                  "Scatter diagram, regression, curve between two variables and concept of error in regression",
                  "Principles of least squares; fitting of first, second, and third degree",
                  "Concept of correlation coefficient & its properties, correlation ratio, polynomial regression and correlation index",
                  "Rank correlation coefficient due to Spearman and Kendall",
                  "Partial correlation",
                ],
              },
              unit2: {
                name: "Analysis of Categorical Data",
                data: [
                  "Fundamental set of frequencies, consistency of data",
                  "Measures of association and contingency-table",
                  "Association of attributes and various measurement of association",
                  "Analysis of data on two characters and three characters",
                ],
              },
              unit3: {
                name: "Standard Probability Distributions",
                data: [
                  "Uniform, Binomial, Poisson, Hyper-geometric, Gamma, Beta, Exponential, and Normal Distributions with their properties and uses",
                  "Statement of the general properties of a bi-variate normal distribution",
                ],
              },
            },
          },
        },
      };
    case "4bcamaj":
      return {
        stream: "BCA",
        year: "2nd",
        sem: "4",
        subjects: {
          subject1: {
            code: "UBCAMAJ24006",
            name: "Relational Database Management System (RDBMS)",
            units: {
              unit1: {
                name: "Introduction to RDBMS",
                data: [
                  "Concept of RDBMS, Features of RDBMS, Difference between DBMS and RDBMS",
                  "Terminologies: Relation, attribute, domain, Tuple, Entities, E.F.Codd’s Rules, Relational Model",
                  "Definition of DBMS, file processing system Vs DBMS, Limitation of file processing system",
                  "Database users, Characteristics of database, database components, database system architecture",
                  "View of Data – Data Abstraction – Instances and Schemas diagrams",
                  "DBA-Database Administrator- roles and responsibilities of a DBA",
                ],
              },
              unit2: {
                name: "Database models",
                data: [
                  "Overview of three models- Hierarchical model, Network model and relational model",
                  "Comparison of three models",
                ],
              },
              unit3: {
                name: "Database Design, ER-Diagram",
                data: [
                  "ER-Model, Constraints, ER-Diagrams, weak entity sets",
                  "Keys-Primary, Candidate, Composite, Alternate, Foreign, Super",
                  "Relational Schemas, Normalization: Lossless decomposition, lossy decomposition, functional dependencies",
                  "Normal Forms- (upto BCNF -1NF, 2NF, 3NF, BCNF)",
                ],
              },
              unit4: {
                name: "Transaction Processing",
                data: ["ACID properties, Concurrency Control"],
              },
              unit5: {
                name: "Relational Algebra",
                data: [
                  "Fundamental Operations - Select, Project, Cartesian product, Union, Set difference, Rename",
                  "Derived (Non-Fundamental) Operations – Intersection, Natural join, assignment, division, and theta join",
                ],
              },
              unit6: {
                name: "SQL and Oracle",
                data: [
                  "Oracle commands, Oracle datatypes, operators- Arithmetic, Logical, Range searching, Pattern Matching",
                  "Oracle functions- Aggregate, Numeric, String, Conversion, Date and Time",
                  "Oracle table- Dual, Grouping data- Concept of grouping, Group by Clause, Having clause",
                  "Language-DDL, DML, DCL, SQL Functions- queries and sub-queries in SQL, Constraints and indexes in SQL",
                ],
              },
            },
          },
          subject2: {
            code: "UBCAMAJ24007",
            name: "Software Engineering",
            units: {
              unit1: {
                name: "Introduction",
                data: [
                  "Definition of software and software engineering, Software Characteristics",
                  "Software quality, Changing Nature of Software, Software process",
                ],
              },
              unit2: {
                name: "Software development models",
                data: [
                  "Software Development Life Cycle (SDLC), Types of Software Models",
                  "Waterfall Model, Iterative Model, Spiral Model, Prototype Model, Capability Maturity Model Integration (CMMI)",
                ],
              },
              unit3: {
                name: "Software Requirement Analysis and Planning",
                data: [
                  "Software Requirement Analysis and Modeling Techniques",
                  "Software Requirement Specification (SRS)- Need for SRS, Characteristics and Components of SRS",
                  "Fact finding techniques, Cost Estimation- COCOMO Model, Data Flow Diagram (DFD) and Entity-Relationship Diagram (ERD)",
                ],
              },
              unit4: {
                name: "Software Project Management (SPM)",
                data: [
                  "Define SPM, Needs of SPM, Software Risks, Risk Identification, RMMM Plan",
                  "Software Quality Control and Quality Assurance, ISO 9000 Certification, Software Metrics",
                ],
              },
              unit5: {
                name: "Coding",
                data: [
                  "Define Coding, Goals of Coding, characteristics of Programming Language, Programming style",
                  "Coding Standards, Coding Guidelines",
                ],
              },
              unit6: {
                name: "Testing Strategies & Tactics",
                data: [
                  "Software Testing Fundamentals-Test Plan, Test Execution, Test Review, Inspection and Auditing",
                  "Testing principles, software Verification and validation",
                  "Types of software testing - Black-Box Testing, White-Box Testing and their type",
                  "Other testing- Regression Testing, Mutation Testing, Acceptance testing, Alpha testing, Beta testing",
                ],
              },
            },
          },
          subject3: {
            code: "UBCAMAJ24008",
            name: "Programming in Java",
            units: {
              unit1: {
                name: "Introduction to Java",
                data: [
                  "Java Architecture and Features, Understanding the semantic and syntax differences between C and Java",
                  "Compiling and Executing a Java Program, Variables, Constants, Keywords, Data Types, Operators",
                  "Decision Making Constructs (conditional statements and loops), Java Methods, Built-in Java Class Methods",
                ],
              },
              unit2: {
                name: "Arrays, Strings, and I/O",
                data: [
                  "Creating & Using Arrays, Referencing Arrays Dynamically",
                  "Java Strings: The Java String class, Creating & Using String Objects, Manipulating Strings",
                  "Simple I/O using System.out and the Scanner class, Byte and Character streams, Reading/Writing from console and files",
                ],
              },
              unit3: {
                name: "Object-Oriented Programming Overview",
                data: [
                  "Principles of Object-Oriented Programming, Defining & Using Classes, Controlling Access to Class Members",
                  "Class Constructors, Method Overloading, Class Variables & Methods, Objects as parameters",
                ],
              },
              unit4: {
                name: "Inheritance, Interfaces, Packages",
                data: [
                  "Inheritance - Single Level and Multi level, Method Overriding, Dynamic Method Dispatch, Abstract Classes",
                  "Interfaces and Packages, extending interfaces and packages, Package and Class Visibility",
                  "Using Standard Java Packages (util, lang, io, net)",
                ],
              },
              unit5: {
                name: "Exception Handling and Threading",
                data: [
                  "Exception types, throw, built-in exceptions, creating custom exceptions",
                  "Multi-threading - Thread class, Runnable interface, creating and managing threads",
                  "Thread prioritization, synchronization, inter-thread communication",
                ],
              },
              unit6: {
                name: "Applets and Event Handling",
                data: [
                  "Java Applets: Introduction to Applets, Writing Java Applets, Working with Graphics",
                  "Incorporating Images & Sounds",
                  "The design and implementation of GUIs using the AWT controls, Swing components of Java Foundation Classes",
                  "Graphic objects for drawing figures such as lines, rectangles, ovals, using different fonts",
                ],
              },
            },
          },
        },
      };

    default:
      return {};
  }
}
