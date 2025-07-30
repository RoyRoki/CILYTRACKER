function getData(semPstream) {
  switch (semPstream) {
    //.....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>SEM 6<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<......................................................... 

    //.......................................>>>>>>>>ARTS<<<<<<<<<<<<<<<<<<<................
    case "6edumin":
      return {
        stream: "Education (Minor)",
        year: "3rd",
        sem: "6",
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

    //.......................................>>>>>>>>SCIENCE<<<<<<<<<<<<<<<<<<<................


  //              ********************************************* BCA 6ht sem syllabus******************************** //

    case "6bcamaj":
  return {
    stream: "BCA (Major)",
    year: "3rd",
    sem: "6",
    subjects: {
      subject1: {
        code: "UBCAMAJ36013",
        name: "Artificial Intelligence",
        units: {
          unit1: {
            name: "Introduction",
            data: [
              "Introduction to Artificial Intelligence, Background and Applications",
              "Turing Test and Rational Agent approaches to AI",
              "Introduction to Intelligent Agents, their structure, behavior and environment"
            ]
          },
          unit2: {
            name: "Problem Solving and Searching Techniques",
            data: [
              "Problem Characteristics, Production Systems, Control Strategies",
              "BFS, DFS, Hill climbing and its Variations",
              "Heuristic Search: Best First, A*, AO*, CSP, Means-End Analysis",
              "Introduction to Game Playing, Min-Max and Alpha-Beta pruning"
            ]
          },
          unit3: {
            name: "Knowledge Representation",
            data: [
              "FOPL, Resolution Principle, Unification",
              "Semantic Nets, Conceptual Dependencies, Frames, Scripts",
              "Production Rules, Conceptual Graphs, Programming in PROLOG"
            ]
          },
          unit4: {
            name: "Uncertainty and Inconsistencies",
            data: [
              "Truth Maintenance System, Default Reasoning",
              "Probabilistic Reasoning, Bayesian Inference",
              "Possible World Representations"
            ]
          },
          unit5: {
            name: "Understanding Natural Languages",
            data: [
              "Parsing Techniques",
              "Context-Free and Transformational Grammars",
              "Recursive and Augmented Transition Nets"
            ]
          }
        }
      },
      subject2: {
        code: "UBCAMAJ36014",
        name: "Optimization Technique",
        units: {
          unit1: {
            name: "Introduction",
            data: [
              "Operational Research: Origin, Definition, Phases",
              "Mathematical Modeling, Optimization problems"
            ]
          },
          unit2: {
            name: "Transportation Model",
            data: [
              "Northwest Corner Method, VAM Method",
              "Hungarian Method for Assignment Problem"
            ]
          },
          unit3: {
            name: "Linear Programming",
            data: [
              "Linear Algebra Review, Problem Formulation",
              "Graphical Method, Simplex Algorithm",
              "Big-M & Two-Phase, Special Cases (Degeneracy, Unbounded, Infeasible)"
            ]
          },
          unit4: {
            name: "Duality",
            data: [
              "Definition, Primal-Dual Relationship",
              "Duality Problem, Dual Simplex"
            ]
          },
          unit5: {
            name: "Integer Programming",
            data: [
              "Integer Programming: Branch and Bound Algorithm"
            ]
          }
        }
      },
      subject3: {
        code: "UBCAMAJ36015",
        name: "Mobile Computing",
        units: {
          unit1: {
            name: "Introduction to Mobile Communications and Computing",
            data: [
              "Novel Applications, GSM Architecture",
              "Protocols, Localization, Handover, Security, Data Services"
            ]
          },
          unit2: {
            name: "Wireless MAC",
            data: [
              "Hidden/Exposed/Near/Far Terminals, SDMA, FDMA, TDMA, CDMA"
            ]
          },
          unit3: {
            name: "Mobile Network Layer",
            data: [
              "Mobile IP, DHCP, Packet Delivery, Tunneling"
            ]
          },
          unit4: {
            name: "Mobile Transport Layer",
            data: [
              "TCP Variants: Indirect, Snooping, Mobile TCP, Recovery Techniques"
            ]
          },
          unit5: {
            name: "Database Issues",
            data: [
              "Hoarding, Caching, Power/Context-Aware Computing",
              "Transactional Models, Query Processing, QoS"
            ]
          },
          unit6: {
            name: "Data Dissemination",
            data: [
              "Push/Pull/Hybrid Mechanisms, Indexing Techniques"
            ]
          },
          unit7: {
            name: "Mobile Ad Hoc Networks (MANETs)",
            data: [
              "MANET Properties, Applications, Routing, Security"
            ]
          },
          unit8: {
            name: "Protocols and Tools",
            data: [
              "WAP, Bluetooth, J2ME"
            ]
          }
        }
      },
      subject4: {
        code: "UBCAMAJ36016",
        name: "Information Security",
        units: {
          unit1: {
            name: "Introduction",
            data: [
              "Security, Attacks, Criminals, Services, Mechanisms, Authentication"
            ]
          },
          unit2: {
            name: "Cryptography",
            data: [
              "Substitution & Transposition Ciphers",
              "Symmetric/Asymmetric Encryption, DES, Hashing",
              "Digital Signatures & Certificates"
            ]
          },
          unit3: {
            name: "Program Security",
            data: [
              "Secure Programs, Errors, Viruses, Trap Doors, Salami Attacks"
            ]
          },
          unit4: {
            name: "Database Security",
            data: [
              "Reliability, Integrity, Sensitive Data, Inference, Multilevel Security"
            ]
          },
          unit5: {
            name: "Security in Networks",
            data: [
              "Threats, Firewalls, IDS, Secure Emails"
            ]
          },
          unit6: {
            name: "IT Act 2000 and Cyber Crimes",
            data: [
              "Digital Signature, Governance, Certification, Penalties",
              "Cyber Crime Offenses"
            ]
          }
        }
      }
    }
  };

//**************************************Computer science 6th sem syllabus******************************************************* */
  case "6csmaj":
  return {
    stream: "Computer Science (Major)",
    year: "3rd",
    sem: "6",
    subjects: {
      subject1: {
        code: "UCMSMAJ36013",
        name: "Artificial Intelligence",
        units: {
          unit1: {
            name: "Introduction",
            data: [
              "Introduction to AI, Background, Applications",
              "Turing Test and Rational Agent",
              "Intelligent Agents: structure, behavior, environment"
            ]
          },
          unit2: {
            name: "Problem Solving and Searching",
            data: [
              "Problem Characteristics, Production Systems",
              "BFS, DFS, Hill climbing, Best First, A*, CSP, Game Playing",
              "Min-Max, Alpha-Beta Pruning"
            ]
          },
          unit3: {
            name: "Knowledge Representation",
            data: [
              "FOPL, Resolution, Unification",
              "Semantic Nets, Frames, Scripts, PROLOG"
            ]
          },
          unit4: {
            name: "Uncertainty and Inconsistency",
            data: [
              "Truth Maintenance System, Default Reasoning",
              "Bayesian Inference, Possible World Representations"
            ]
          },
          unit5: {
            name: "Natural Language Understanding",
            data: [
              "Parsing, Context-Free and Transformational Grammars",
              "Recursive and Augmented Transition Nets"
            ]
          }
        }
      },
      subject2: {
        code: "UCMSMAJ36014",
        name: "Computer Graphics",
        units: {
          unit1: {
            name: "Introduction",
            data: ["Definition, Basic Elements, Applications of Computer Graphics"]
          },
          unit2: {
            name: "Graphics Hardware",
            data: ["Raster and Random Scan Devices", "Input/Output Devices"]
          },
          unit3: {
            name: "Graphics Techniques",
            data: [
              "Line, Circle, Ellipse Drawing",
              "Polygon Filling, Clipping, 2D/3D Transformations and Viewing",
              "Projections – Parallel and Perspective"
            ]
          },
          unit4: {
            name: "Geometric Modeling",
            data: ["Representing Curves and Surfaces"]
          },
          unit5: {
            name: "Visible Surface Determination",
            data: ["Hidden Surface Elimination"]
          },
          unit6: {
            name: "Surface Rendering",
            data: ["Illumination and Shading Models", "Color Models and Animation"]
          }
        }
      },
      subject3: {
        code: "UCMSMAJ36015",
        name: "Theory of Computation",
        units: {
          unit1: {
            name: "Languages",
            data: ["Alphabets, Strings, Language Operations", "Concatenation, Kleene Star"]
          },
          unit2: {
            name: "Finite Automata and Regular Languages",
            data: [
              "Regular Expressions, DFA/NFA, Conversion",
              "Pumping Lemma, Closure Properties"
            ]
          },
          unit3: {
            name: "Context-Free Languages",
            data: [
              "CFGs, Parse Trees, PDA (DFA/NFA)",
              "Ambiguity, Pumping Lemma, Normal Forms"
            ]
          },
          unit4: {
            name: "Turing Machines & Computation Models",
            data: [
              "Turing Machine, Universal Turing Machine",
              "Recursively Enumerable and Recursive Languages"
            ]
          }
        }
      },
      subject4: {
        code: "UCMSMAJ36016",
        name: "Operation Research",
        units: {
          unit1: {
            name: "Introduction to OR",
            data: [
              "Origin and Development, Definition, Phases of OR",
              "Scope, Limitations, Mathematical Modeling"
            ]
          },
          unit2: {
            name: "Transportation Model",
            data: [
              "Northwest Corner, VAM",
              "Hungarian Method for Assignment"
            ]
          },
          unit3: {
            name: "Linear Programming",
            data: [
              "Linear Algebra Basics, Problem Formulation",
              "Graphical Method, Simplex, Big-M, Two-Phase",
              "Degeneracy, Unbounded and Infeasible Solutions"
            ]
          },
          unit4: {
            name: "Duality",
            data: [
              "Primal-Dual Relationship, Dual Simplex Method"
            ]
          },
          unit5: {
            name: "Integer Programming",
            data: [
              "Branch and Bound, Cutting Plane Algorithms"
            ]
          }
        }
      }
    }
  };
              
                          // ***************************************Mathematics major 6th sem syllabus*******************************
    case "6mathmaj":
      return {
        stream: "Mathematics (Major)",
        year: "3rd",
        sem: "6",
        subjects: {
          subject1: {
            code: "MATHMAJ613",
            name: "Vector and Tensor Calculus",
            units: {
              unit1: {
                name: "Vector Calculus - Unit 1",
                data: [
                  "Scalar triple product, Vector triple product",
                  "Lagrange’s identity for four vectors",
                  "Reciprocal system of vectors, Applications in mechanics",
                  "Vector function, Limit, continuity and derivative of vector function",
                  "Applications in differential geometry: Curves and surfaces, Tangent/Normal vectors, Curvature, Torsion",
                  "Serret-Frenet formulae"
                ]
              },
              unit2: {
                name: "Vector Calculus - Unit 2",
                data: [
                  "Scalar and Vector fields",
                  "Directional derivative, Gradient, Divergence, Curl",
                  "Second order vector differential operators",
                  "Vector Integration: Line, Surface, Volume integrals",
                  "Gauss’s Divergence, Stokes’ and Green’s Theorems"
                ]
              },
              unit3: {
                name: "Tensor Calculus - Unit 3",
                data: [
                  "Definition and transformation of tensors",
                  "Contravariant, covariant and mixed tensors",
                  "Kronecker delta, Invariants, Addition/subtraction",
                  "Symmetric & Skew-symmetric tensors, Reciprocal tensors",
                  "Metric tensor, Raising/lowering indices"
                ]
              },
              unit4: {
                name: "Tensor Calculus - Unit 4",
                data: [
                  "Christoffel symbols and transformations",
                  "Ricci’s Theorem, Covariant differentiation",
                  "Geodesics in Riemannian space and Euclidean space",
                  "Parallelism, Levi-Civita connection",
                  "Intrinsic derivatives, Einstein tensor"
                ]
              }
            }
          },
          subject2: {
            code: "MATHMAJ614",
            name: "Numerical Analysis, C-Programming and Its Applications",
            units: {
              unit1: {
                name: "Numerical Analysis - Unit 1",
                data: [
                  "Errors: Absolute, relative, truncation, round-off",
                  "Operators: Δ, ∇, μ, E, δ",
                  "Interpolation: Lagrange and Newton methods",
                  "Finite difference operators, Forward/backward interpolation"
                ]
              },
              unit2: {
                name: "Numerical Analysis - Unit 2",
                data: [
                  "Equations: Bisection, Secant, Regula-Falsi, Newton-Raphson",
                  "Multiple roots, nth root, convergence"
                ]
              },
              unit3: {
                name: "Numerical Analysis - Unit 3",
                data: [
                  "System of equations: Gaussian elimination",
                  "Gauss-Jacobi, Gauss-Seidel, convergence analysis"
                ]
              },
              unit4: {
                name: "Numerical Analysis - Unit 4",
                data: [
                  "Numerical Integration: Newton-Cotes, Trapezoidal, Simpson’s 1/3rd & 3/8th, Weddle’s"
                ]
              },
              unit5: {
                name: "Numerical Analysis - Unit 5",
                data: [
                  "Ordinary Differential Equations: Euler, Modified Euler",
                  "Runge-Kutta (order 2)",
                  "Successive approximations"
                ]
              },
              unit6: {
                name: "C Programming - Unit 6",
                data: [
                  "Basics of C: Language importance, variables, data types, statements",
                  "Operators: Arithmetic, relational, logical, assignment, conditional"
                ]
              },
              unit7: {
                name: "C Programming - Unit 7",
                data: [
                  "Conditional control: if, if-else, nested if-else",
                  "Looping: for, while, do-while",
                  "Switch, break, continue"
                ]
              },
              unit8: {
                name: "C Programming - Unit 8",
                data: [
                  "Arrays (1D, 2D, multidimensional)",
                  "User-defined functions, recursion, function declaration and types",
                  "Library functions and headers (e.g., stdio.h, math.h)"
                ]
              }
            }
          },
          subject3: {  
            code: "MATHMAJ615",
            name: "Metric Spaces and Multivariate Calculus",
            units: {
              unit1: {
                name: "Metric Spaces - Unit 1",
                data: [
                  "Definition and examples of metric spaces with emphasis on ℝ², ℝ³ and more generally ℝⁿ",
                  "Subspace of metric space, bounded subset and diameter of a subset of metric spaces",
                  "Open and closed balls, neighbourhood, interior point and interior of a set",
                  "Open set, limit point, boundary point, derive set, closed set and closure of a set",
                  "Dense sets and separable spaces"
                ]
              },
              unit2: {
                name: "Metric Spaces - Unit 2",
                data: [
                  "Sequences in metric space and subsequences",
                  "Cauchy sequence and convergent sequence",
                  "Completion of metric spaces with examples (Q with usual metric to R as an example)",
                  "Cantor’s intersection theorem",
                  "Continuous mapping with examples in ℝ², ℝ³",
                  "Sequential criterion and continuity characterizations",
                  "Uniform continuity, connectedness",
                  "Connected subsets of ℝ and ℝ²",
                  "Intermediate Value Theorem"
                ]
              },
              unit3: {
                name: "Metric Spaces - Unit 3",
                data: [
                  "Compactness, sequential compactness",
                  "Heine-Borel property",
                  "Continuous functions on compact sets",
                  "Total boundedness and its relation with boundedness",
                  "Characterization of Compact metric space in terms of completeness and total boundedness"
                ]
              },
              unit4: {
                name: "Multivariate Calculus - Unit 4",
                data: [
                  "Real Functions of two and three real variables: limit and continuity",
                  "Partial derivatives",
                  "Sufficient condition for continuity",
                  "Relevant results regarding repeated limits and double limits"
                ]
              },
              unit5: {
                name: "Multivariate Calculus - Unit 5",
                data: [
                  "Differentiability of functions of two and three variables",
                  "Sufficient condition for differentiability",
                  "Differential of a function",
                  "Chain rule for one and two independent parameters",
                  "Homogeneous function, Euler’s theorem and its converse",
                  "Young’s and Schwartz’s theorems on symmetry of second order mixed partial derivatives"
                ]
              },
              unit6: {
                name: "Multivariate Calculus - Unit 6 (Only Problems)",
                data: [
                  "Mean value theorem and Taylor’s theorem for function of two variables",
                  "Jacobian for functions of two variables",
                  "Simple problems including functional dependence",
                  "Extrema of functions of two variables",
                  "Lagrange’s method of undetermined multipliers"
                ]
              }
            }
          },
          subject4: {
            code: "MATHMAJ616",
            name: "Linear Programming and Game Theory",
            units: {
              unit1: {
                name: "Unit 1",
                data: [
                  "LPP: Problem formation, Basic/feasible/degenerate solutions",
                  "Matrix notation, Graphical solution"
                ]
              },
              unit2: {
                name: "Unit 2",
                data: [
                  "Simplex method, convex sets, optimality, unboundedness",
                  "Two-phase and Big-M method",
                  "Duality, dual problem, economic interpretation"
                ]
              },
              unit3: {
                name: "Unit 3",
                data: [
                  "Transportation and assignment problems",
                  "North-west corner, Least cost, Vogel’s method",
                  "Hungarian method for assignment"
                ]
              },
              unit4: {
                name: "Unit 4",
                data: [
                  "Game theory: Two-person zero sum games",
                  "Mixed strategies, graphical solutions, linear programming method"
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
