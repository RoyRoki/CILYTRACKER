function getData(semPstream) {
  switch (semPstream) {
    // ........ Existing cases .......

    // .......................................>>>>>>>>SCIENCE<<<<<<<<<<<<<<<<<<<................

    // New syllabus entry for Web Technology (Semester 2)
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



    // ........ Existing cases .......

    // .......................................>>>>>>>>ARTS<<<<<<<<<<<<<<<<<<<................
    
    // New syllabus entry
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

    // .......... More existing cases ..........
    
    

    // .......... More existing cases ..........

    default:
      return {};
  }
}
