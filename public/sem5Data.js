

//     //.....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>SEM 5<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<......................................................... 








//    //.......................................>>>>>>>>SCIENCE<<<<<<<<<<<<<<<<<<<................



function getData(semPstream) {
  switch (semPstream) {
    case "5bcamaj":
      return {
        stream: "BCA",
        year: "3rd",
        sem: "5",
        subjects: {
          subject1: {
            code: "UBCAMAJ35009",
            name: "Theory of Computation",
            units: {
              unit1: {
                name: "Languages",
                data: [
                  "Alphabets, string, language, Basic Operations on language, Concatenation, Kleene Star"
                ]
              },
              unit2: {
                name: "Finite Automata and Regular Languages",
                data: [
                  "Regular Expressions, Transition Graphs, Deterministic and non-deterministic finite automata",
                  "NFA to DFA Conversion, Regular languages and their relationship with finite automata",
                  "Pumping lemma and closure properties of regular languages"
                ]
              },
              unit3: {
                name: "Context free languages",
                data: [
                  "Context free grammars, parse trees, ambiguities in grammars and languages",
                  "Pushdown automata (Deterministic and Non-deterministic), Pumping Lemma",
                  "Properties of context free languages, normal forms"
                ]
              },
              unit4: {
                name: "Turing Machines and Models of Computations",
                data: [
                  "RAM, Turing Machine as a model of computation",
                  "Universal Turing Machine, Language, recursively enumerable and recursive languages"
                ]
              }
            }
          },
          subject2: {
            code: "UBCAMAJ35010",
            name: "Website Design with HTML and PHP",
            units: {
              unit1: {
                name: "Introduction",
                data: [
                  "Introduction to Markup Languages and HTML, need and use; the Head, the Body, Colors, Attributes, Lists, ordered and unordered"
                ]
              },
              unit2: {
                name: "Links, Images and Tables",
                data: [
                  "Relative and Absolute Links, Using ID Attribute, Image Usage and Backgrounds",
                  "Creating and Styling Tables"
                ]
              },
              unit3: {
                name: "Introduction to XML",
                data: [
                  "XML Structure and Syntax, Document classes and Rules, XML as Data, Linking with XML, XSL Basics"
                ]
              },
              unit4: {
                name: "Introduction to PHP",
                data: [
                  "PHP versions, scope, syntax, variables, constants, data types, operators, precedence"
                ]
              },
              unit5: {
                name: "Handling HTML form with PHP",
                data: [
                  "Form Inputs, CSS Styling, Capturing Data, GET & POST, Redirecting"
                ]
              },
              unit6: {
                name: "PHP conditional events and Loops",
                data: [
                  "if-else, switch, for, while, do-while, break, continue, exit"
                ]
              },
              unit7: {
                name: "PHP Functions",
                data: [
                  "Function creation and usage, arguments, call by value/reference, scope"
                ]
              },
              unit8: {
                name: "String Manipulation and Regular Expression",
                data: [
                  "String operations, regular expressions: preg_match, preg_replace, preg_split"
                ]
              },
              unit9: {
                name: "Array",
                data: [
                  "Indexed and associative arrays, looping with each, foreach, useful functions"
                ]
              }
            }
          },
          subject3: {
            code: "UBCAMAJ35011",
            name: "Microprocessor Fundamentals and Programming",
            units: {
              unit1: {
                name: "Microprocessor 8085 Architecture",
                data: [
                  "Components, Bussed Architecture, Block Diagram, Internal Registers, Control Unit, Interrupts"
                ]
              },
              unit2: {
                name: "Instruction Set-I",
                data: [
                  "Machine vs Assembly language, Addressing modes, Instruction types, Timing Diagrams"
                ]
              },
              unit3: {
                name: "Instruction Set-II and Programming",
                data: [
                  "Rotate, Stack/Subroutine instructions, Sample Programs: add, sub, sort, search"
                ]
              },
              unit4: {
                name: "Memory/Io Interface and Interrupts",
                data: [
                  "Memory mapped I/O, Interrupt types, Edge/Level Triggered, SIM, RIM, Microcontroller vs Microprocessor"
                ]
              }
            }
          },
          subject4: {
            code: "UBCAMAJ35012",
            name: "Python Programming",
            units: {
              unit1: {
                name: "Planning the Computer Program",
                data: [
                  "Problem solving concept, definition, design, debugging, types of errors, documentation"
                ]
              },
              unit2: {
                name: "Techniques of Problem Solving",
                data: [
                  "Flowcharts, decision tables, algorithms, structured programming, top-down, bottom-up"
                ]
              },
              unit3: {
                name: "Overview of Programming",
                data: [
                  "Structure of Python Program, Elements of Python"
                ]
              },
              unit4: {
                name: "Introduction to Python",
                data: [
                  "Interpreter, Shell, Syntax, Identifiers, Keywords, Operators"
                ]
              },
              unit5: {
                name: "Creating Python Programs",
                data: [
                  "I/O, Control statements, Functions, Arguments, break/continue/pass"
                ]
              }
            }
          }
        }
      };
    //     //.......................................>>>>>>>>ARTS<<<<<<<<<<<<<<<<<<<................

    case "5edumin":
      return {
        stream: "Education (Minor)",
        year: "3rd",
        sem: "5",
        subjects: {
          subject1: {
            code: "UEDCMIN30003",
            name: "Sociological Foundation of Education",
            units: {
              unit1: {
                name: "Educational Sociology",
                data: [
                  "Meaning, Nature and Scope of Educational Sociology",
                  "Meaning, Nature and Scope of Sociology of Education",
                  "Relation between Education and Sociology"
                ]
              },
              unit2: {
                name: "Social Factors and Education",
                data: [
                  "Culture – Concept, Role of Culture in Education and Cultural Lag",
                  "Socialization – Meaning, Role of Family and School in Socialization",
                  "Human Resource Development – Meaning and Importance in Contemporary Society"
                ]
              },
              unit3: {
                name: "Social Groups",
                data: [
                  "Social Groups – Meaning and Importance",
                  "Types of Social Groups – Primary and Secondary, Characteristics and Importance",
                  "Social Institutions as Agencies of Education – Family, School, Mass Media and Religion"
                ]
              },
              unit4: {
                name: "Social Change",
                data: [
                  "Social Change – Definition, Characteristics, Factors and Education as an instrument of Social Change",
                  "Education and Social Mobility",
                  "Education for Socially and Economically Backward Classes – SC, ST and OBC"
                ]
              }
            }
          }
        }
      };





    case "5bcamaj":
     
      return { 

       };

    case "5edumin":
      
      return { 

       };

    case "5mathmin":
      return {
        stream: "Mathematics (Minor)",
        year: "3rd",
        sem: "5",
        subjects: {
          subject1: {
            code: "Unknown",  
            name: "Differential Equations and Integral Transforms",
            units: {
              unit1: {
                name: "Differential Equations",
                data: [
                  "Lipschitz condition and Picard’s Theorem (statement only)",
                  "General, particular, explicit, implicit and singular solutions",
                  "First order and first-degree equations: Existence theorem (statement only)",
                  "Exact equations, integrating factors, different calculating rules",
                  "Linear and Bernoulli equations",
                  "First order but not first degree: Clairaut’s equation (singular solution only)"
                ]
              },
              unit2: {
                name: "Higher Order Differential Equations",
                data: [
                  "General solution of homogeneous second order equations",
                  "Superposition principle",
                  "Wronskian: Properties and applications",
                  "Higher order linear equations with constant coefficients",
                  "Method of undetermined coefficients, method of variation of parameters",
                  "Euler’s homogeneous equation",
                  "Second order equations with variable coefficients: reduction to normal form"
                ]
              },
              unit3: {
                name: "Partial Differential Equations",
                data: [
                  "First order PDEs, Lagrange’s solution",
                  "Nonlinear first-order PDEs, Charpit’s method",
                  "Classification of second-order PDEs: hyperbolic, parabolic, elliptic",
                  "Reduction to canonical forms"
                ]
              },
              unit4: {
                name: "Fourier Transform",
                data: [
                  "Definition and properties",
                  "Transform of derivatives",
                  "Fourier cosine and sine transforms",
                  "Convolution theorem (statement)",
                  "Inverse Fourier transform",
                  "Application to solve ODEs and PDEs (up to second order)"
                ]
              },
              unit5: {
                name: "Laplace Transform",
                data: [
                  "Laplace and Inverse Laplace Transform concepts",
                  "Conditions for existence",
                  "Elementary properties",
                  "Laplace of derivatives and integrals",
                  "Convolution theorem (statement only)",
                  "Initial and final value theorems (statement only)",
                  "Application to solve ODEs with constant coefficients (up to third order)"
                ]
              }
            }
          }
        }
      };

     
    case "5mathmaj":
      return {
        stream: "Mathematics",
        year: "3rd",
        sem: "5",
        subjects: {
          subject1: {
            code: "MATHMAJ509",
            name: "Linear Algebra",
            units: {
              unit1: {
                name: "Vector spaces and basic properties",
                data: [
                  "Vector spaces, subspaces, algebra of subspaces, linear span",
                  "Linear dependence and independence, basis and dimension",
                  "Vector space isomorphism, matrices over real and complex numbers",
                  "Row Rank and Column Rank"
                ]
              },
              unit2: {
                name: "Linear transformations",
                data: [
                  "Range and null space, Rank-Nullity Theorem",
                  "Matrix representation, Invertibility, Isomorphisms"
                ]
              },
              unit3: {
                name: "Dual spaces",
                data: [
                  "Dual basis, transpose of a linear transformation",
                  "Normal and self-adjoint operators, Cayley-Hamilton theorem"
                ]
              },
              unit4: {
                name: "Inner product spaces",
                data: [
                  "Norm, Schwartz’s inequality, Gram-Schmidt orthogonalisation",
                  "Orthogonal complements, Bessel’s inequality"
                ]
              }
            }
          },
          subject2: {
            code: "MATHMAJ510",
            name: "Riemann Integration and Integral Transforms",
            units: {
              unit1: {
                name: "Riemann Integration",
                data: [
                  "Partition, Darboux sum, Upper/lower integrals",
                  "Riemann integrability, negligible sets, antiderivative, Fundamental theorem"
                ]
              },
              unit2: {
                name: "Improper Integrals",
                data: [
                  "Comparison and μ-test, Abel’s & Dirichlet’s tests",
                  "Beta and Gamma functions"
                ]
              },
              unit3: {
                name: "Fourier Series and Fourier Transform",
                data: [
                  "Trig. series, Dirichlet’s condition, Fourier coefficients, Parseval’s identity",
                  "Fourier Transform properties, Cosine/Sine transform, Inverse Fourier"
                ]
              },
              unit4: {
                name: "Laplace Transform",
                data: [
                  "Laplace/inverse Laplace, derivatives, integrals, convolution theorem",
                  "Initial/final value theorem, application to ODEs"
                ]
              }
            }
          },
          subject3: {
            code: "MATHMAJ511",
            name: "Number Theory",
            units: {
              unit1: {
                name: "GCD, Primes, and Diophantine Equations",
                data: [
                  "Euclidean Algorithm, Linear Diophantine Eq.",
                  "Gaussian integers and their applications"
                ]
              },
              unit2: {
                name: "Congruences and Applications",
                data: [
                  "Chinese Remainder Theorem, Fermat’s, Wilson’s, Lagrange theorems",
                  "Product identification numbers, ISBN, Credit Cards"
                ]
              },
              unit3: {
                name: "Arithmetical Functions and Quadratic Reciprocity",
                data: [
                  "Tau, sigma, Mobius, Euler’s phi function, primitive roots",
                  "Quadratic residues, Legendre symbol, Pythagorean triples"
                ]
              }
            }
          },
          subject4: {
            code: "MATHMAJ512",
            name: "Probability and Statistics",
            units: {
              unit1: {
                name: "Probability Basics",
                data: [
                  "Random experiments, axioms, Bayes theorem, distributions (discrete/continuous)"
                ]
              },
              unit2: {
                name: "Joint Distributions",
                data: [
                  "Joint/marginal/conditional, expectations, regression, correlation"
                ]
              },
              unit3: {
                name: "Chi-square and Limit Theorems",
                data: [
                  "Chi-square, t-distribution, Tchebycheff’s theorem, CLT"
                ]
              },
              unit4: {
                name: "Statistics: Estimation and Hypothesis",
                data: [
                  "Sampling, estimation, confidence intervals",
                  "Hypothesis testing, type-I/II errors, Neyman-Pearson"
                ]
              }
            }
          }
        }
      };
      // ********************* Computer science 5th sem syllabus****  ////
     
      
      
      
      case "5csmaj":
      return {
        stream: "Computer science (major)",
        year: "3rd",
        sem: "5",
        subjects: {
          subject1: {
            code: "UCMSMAJ35009",
            name: "Design and Analysis of Algorithms",
            units: {
              unit1: {
                name: "Introduction",
                data: [
                  "Definitions, Algorithms vs Programs, Basic Algorithm Design Techniques, Correctness of Algorithm",
                  "Algorithm classification: Iterative techniques, Divide and Conquer, Dynamic Programming, Greedy Algorithms",
                  "Algorithm analysis (formal and informal), calculation of running time of an algorithm, loop invariants"
                ]
              },
              unit2: {
                name: "Growth of Functions",
                data: [
                  "Complexity of Algorithms: Best, Worst and Average case",
                  "Growth rate of functions, Asymptotic Analysis",
                  "Analyzing algorithm control structures"
                ]
              },
              unit3: {
                name: "Recurrences",
                data: [
                  "Substitution method, Iteration method",
                  "Master method (Master theorem), Simple problems using Master theorem"
                ]
              },
              unit4: {
                name: "Sorting and Searching",
                data: [
                  "Elementary sorts: Bubble, Selection, Insertion, Shell, Merge",
                  "Advanced sorts: Heap, Quick",
                  "Linear-time sorts: Bucket, Radix, Count",
                  "Searching techniques"
                ]
              },
              unit5: {
                name: "Graphs",
                data: [
                  "Graph Algorithms – BFS, DFS and Applications",
                  "DAGs, Dijkstra’s Algorithm for Single Source Shortest Path",
                  "MST Algorithms: Prim’s and Kruskal’s"
                ]
              }
            }
          },
          subject2: {
            code: "UCMSMAJ35010",
            name: "Numerical Analysis",
            units: {
              unit1: {
                name: "Introduction",
                data: [
                  "Floating point representation, Errors (Round-off, Truncation, Absolute/Relative/Percentage)",
                  "Efficient computation methods: Bisection, Regula-Falsi, Newton-Raphson, Gauss Elimination and Jordan, Matrix inversion"
                ]
              },
              unit2: {
                name: "Iterative Methods",
                data: [
                  "Jacobi and Gauss-Seidel iterative methods"
                ]
              },
              unit3: {
                name: "Interpolation",
                data: [
                  "Lagrange's, Newton forward and backward interpolation"
                ]
              },
              unit4: {
                name: "Numerical Integration",
                data: [
                  "Trapezoid and Simpson's rule"
                ]
              },
              unit5: {
                name: "Extrapolation Methods",
                data: [
                  "Gaussian quadrature, ODEs: Euler's, Taylor, 2nd & 4th order Runge-Kutta"
                ]
              },
              unit6: {
                name: "Eigen-values & Eigen-vectors",
                data: [
                  "Definitions and properties"
                ]
              }
            }
          },
          subject3: {
            code: "UCMSMAJ35011",
            name: "Fundamentals of Microprocessors",
            units: {
              unit1: {
                name: "8085 Architecture",
                data: [
                  "Components, Block diagram, Pin config, Registers, Timing, Control, Bus structure, Serial I/O, Interrupts"
                ]
              },
              unit2: {
                name: "Instruction Set I",
                data: [
                  "Machine vs Assembly Language, Addressing modes, Instructions (Data Transfer, Arithmetic, Branching), Timing Diagrams"
                ]
              },
              unit3: {
                name: "Instruction Set II & Programming",
                data: [
                  "Rotate, Stack/Subroutine, ALP: add, sub, sort, largest/smallest, multiplication/division"
                ]
              },
              unit4: {
                name: "Memory/IO Interface and Interrupts",
                data: [
                  "Memory and I/O mapping, Types of interrupts, RST codes, SIM/RIM, Microprocessor vs Microcontroller"
                ]
              }
            }
          },
          subject4: {
            code: "UCMSMAJ35012",
            name: "Python Programming",
            units: {
              unit1: {
                name: "Planning the Computer Program",
                data: [
                  "Problem solving, Definition, Design, Debugging, Errors, Documentation"
                ]
              },
              unit2: {
                name: "Techniques of Problem Solving",
                data: [
                  "Flowcharting, Decision tables, Structured programming, Top-down/Bottom-up"
                ]
              },
              unit3: {
                name: "Overview of Programming",
                data: [
                  "Structure and elements of Python program"
                ]
              },
              unit4: {
                name: "Introduction to Python",
                data: [
                  "Interpreter, Shell, Indentation, Identifiers, Keywords, Literals, Operators"
                ]
              },
              unit5: {
                name: "Creating Python Programs",
                data: [
                  "I/O, Control Statements, Functions, Default Arguments, break/continue/pass"
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
