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

    default:
      return {};
  }
}