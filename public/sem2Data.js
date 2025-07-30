function getData(semPstream) {
  switch (semPstream) {
    
    case "2mdcwt":
      return {
        stream: "B.Sc. MDC",
        year: "1st",
        sem: "2",
        subjects: {
          subject1: {
            code: "UCMSMDC12002",
            name: "Web Technology",
            units: {
              unit1: {
                name: "Introduction to WWW",
                data: [
                  "Introduction to internet, client server model",
                  "Protocols and programs, secure connections, IP addresses, Domain name",
                  "Internet service, Electronic mail, application, and development tools",
                  "Web Design: Web site design principles, planning the site and navigation"
                ]
              },
              unit2: {
                name: "Introduction to HTML",
                data: [
                  "Brief history of HTML",
                  "HTML tags, HTML documents",
                  "Header section, body section, headings",
                  "Formatting characters, font tag, listing, anchor tag"
                ]
              },
              unit3: {
                name: "Links, Images and Tables",
                data: [
                  "Relative Links, Absolute Links, Link Attributes",
                  "Using the ID Attribute to Link Within a Document",
                  "Putting an Image on a Page, Using Images as Links",
                  "Putting an Image in the Background",
                  "Creating a Table, Table Headers, Captions",
                  "Spanning Multiple Columns, Styling Table"
                ]
              },
              unit4: {
                name: "HTML Frames and Form",
                data: [
                  "Frameset definition, Frame Definition, nested frameset",
                  "HTML Forms, Basic Input and Attributes, Other Kinds of Inputs",
                  "Styling forms with CSS",
                  "Capturing FormData, GET and POST form methods",
                  "Dealing with multi value fields",
                  "Redirecting a form after submission"
                ]
              },
              unit5: {
                name: "Style Sheets",
                data: [
                  "Need for CSS, introduction to CSS",
                  "Basic syntax and structure",
                  "Using CSS, background images, colors and properties",
                  "Manipulating texts, using fonts, borders and boxes, margins, padding lists",
                  "Positioning using CSS, CSS2"
                ]
              },
              unit6: {
                name: "JavaScript",
                data: [
                  "Client-side scripting, Introduction to JavaScript",
                  "Datatypes, variables, operators, functions",
                  "Conditional statements: loops and repetition",
                  "Advance script, JavaScript and objects",
                  "The DOM and web browser environments, forms and validations",
                  "DHTML: Combining HTML, CSS and JavaScript",
                  "Events and buttons, controlling your browser"
                ]
              }
            }
          }
        }
      };

   
    case "2socmin":
      return {
        stream: "SOCIOLOGY",
        year: "1st",
        sem: "2",
        subjects: {
          subject1: {
            code: "USOCMIN10001",
            name: "Sociology of India",
            units: {
              unit1: {
                name: "India - A plural Society",
                data: [
                  "Unity in Diversity",
                  "Religion",
                  "Ethnic",
                  "Linguistic",
                  "Regional"
                ]
              },
              unit2: {
                name: "Social Institutions and Practices",
                data: [
                  "Caste – concept, definition, Characteristics, Jajmani system, Nature of change",
                  "Tribe - Notion, definition, Characteristics, Location, Features and types of Tribal economy, PVTG",
                  "Village – Characteristics, economy, Nature of change"
                ]
              },
              unit3: {
                name: "Institution of Family and Marriage",
                data: [
                  "Meaning, Definition, Characteristics",
                  "Forms",
                  "Recent Structural and Functional Change"
                ]
              },
              unit4: {
                name: "Institution of Marriage",
                data: [
                  "Meaning, Definition, Characteristics",
                  "Forms of marriage",
                  "Recent Changes"
                ]
              }
            }
          }
        }
      };

          
                    case "2bcamaj":
  return {
    stream: "BCA",
    year: "1st",
    sem: "2",
    subjects: {
      subject1: {
        code: "UBCAMAJ12002",
        name: "Discrete Mathematics",
        units: {
          unit1: {
            name: "Set Theory",
            data: [
              "Introduction, Set properties, Venn diagram, subsets",
              "Combination of Sets: union, intersection, difference, complements",
              "Disjoint sets, power set, Multi-sets, Ordered Pairs",
              "Cartesian Products, Set Identities"
            ]
          },
          unit2: {
            name: "Relations and Functions",
            data: [
              "Binary Relations, Operations on Relation, Domain and Range",
              "Properties of Relations: Equivalence Relations and classes, Partition of Set",
              "Representation of Relation, Composite relations, Order of relations",
              "Classification of Functions, Floor and Ceiling Functions, Operations on Functions"
            ]
          },
          unit3: {
            name: "Natural Numbers",
            data: [
              "Mathematical induction, proof format",
              "Fibonacci identity, Binomial distribution",
              "Variants of induction; strong induction"
            ]
          },
          unit4: {
            name: "Propositional Logic",
            data: [
              "Sentences, Statements, Well formed formula, truth table",
              "Complete truth tables, tautology, Logical equivalence",
              "Theory of inference, Rules of inference",
              "Rules of conditional proof, Rules of indirect proof"
            ]
          },
          unit5: {
            name: "Recurrence Relations",
            data: [
              "Linear Recurrences, Non-homogeneous Recurrences",
              "Growth of functions",
              "Big-O, Big-Ω, Big-Θ notation",
              "Properties of asymptotic orders"
            ]
          },
          unit6: {
            name: "Combinatorics",
            data: [
              "Permutations, permutations with repetitions, circular permutations",
              "Combination, combination with repetitions",
              "Principle of Inclusion-Exclusion, Pigeonhole Principle"
            ]
          }
        }
      },

      subject2: {
        code: "UBCASEC12002",
        name: "Programming in C (SEC)",
        units: {
          unit1: {
            name: "Introduction to Programming",
            data: [
              "Overview of Programming Languages",
              "Structure of a C Program",
              "Compiling and Executing a C Program",
              "Use of main() and header files"
            ]
          },
          unit2: {
            name: "C Fundamentals",
            data: [
              "Keywords, Identifiers, Constants, Variables",
              "Data Types and Operators",
              "Input/Output using scanf() and printf()"
            ]
          },
          unit3: {
            name: "Control Structures",
            data: [
              "Decision making: if, if-else, nested if-else, switch-case",
              "Loops: for, while, do-while",
              "break, continue, goto"
            ]
          },
          unit4: {
            name: "Functions and Arrays",
            data: [
              "Function declaration and definition",
              "Call by value and call by reference",
              "1D and 2D arrays, Strings"
            ]
          },
          unit5: {
            name: "Pointers and Structures",
            data: [
              "Pointer basics, pointer arithmetic",
              "Pointers with arrays and functions",
              "Structure and Union, Nested structures"
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
