var STREAM = "";
var SEM = 0;
var masterData = {};

window.onload = function () {
  document.getElementById("popupOverlay").style.display = "flex";
  if (STREAM.length === 0 && SEM === 0) homeInfoHeader();
};


document.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    savedebounce();
  }
});

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}


const loadTracker = (stream) => {
  if(SEM === 0) {
    STREAM = stream;
    document.getElementById("popupOverlay").style.display = "flex";
    return;
  }
  closePopup()
  STREAM = stream;
  loadScript(`sem${SEM}Data.js` , () => {
    onScriptLoaded()
    showSlyTracker(stream)
  })
}


function showSlyTracker(stream) {
  
  if (SEM === 0) {
    document.getElementById("popupOverlay").style.display = "flex";
    return;
  }

  let numberOfCheckBox = 0;
  STREAM = stream;

  const show = document.getElementById("show");
  show.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("tree");

  //const masterData = getData(SEM + stream);

  for (let subjectN in masterData.subjects) {
    if (masterData.subjects.hasOwnProperty(subjectN)) {
      const subject = masterData.subjects[subjectN];
      const li = document.createElement("li");
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      const code = document.createElement('p');

      summary.textContent = subject.name;
      code.textContent = `Code: ${subject.code}`
      details.appendChild(summary);
      details.appendChild(code)

      const units = document.createElement("ul");

      for (let unitN in subject.units) {
        if (subject.units.hasOwnProperty(unitN)) {
          const unit = subject.units[unitN];
          const unitLs = document.createElement("li");
          const Unitdetails = document.createElement("details");
          const Unitsummary = document.createElement("summary");

          Unitsummary.textContent = unit.name;
          Unitdetails.appendChild(Unitsummary);

          const dataList = document.createElement("ul");

          for (let topic in unit.data) {
            if (unit.data[topic]) {
              const topicLi = document.createElement("li");
              const checkBox = document.createElement("input");
              checkBox.type = "checkbox";
              ++numberOfCheckBox;
              checkBox.classList.add("checkbox");
              checkBox.id = `${numberOfCheckBox}`;
              checkBox.style.marginRight = "1px";
              topicLi.textContent = unit.data[topic];
              topicLi.appendChild(checkBox);
              dataList.appendChild(topicLi);
            }
          }

          Unitdetails.appendChild(dataList);
          unitLs.appendChild(Unitdetails);
          units.appendChild(unitLs);
        }
      }
      details.appendChild(units);
      li.appendChild(details);
      ul.appendChild(li);
    }
  }
  let Course = !masterData.stream ? "No Data For " + stream : masterData.stream;
  let Sem = convertToRoman(SEM);
  let Year = convertToOrdinal(Math.floor((SEM + 1) / 2));
  const div = document.createElement("div");
  div.classList.add("infoheader");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  p.textContent = `${Year} Year`;
  h2.textContent = `Semester ${Sem}`;
  h1.textContent = `${Course}`;

  const subheaderRow = document.createElement("div");
  subheaderRow.classList.add("subheader-row");
  subheaderRow.appendChild(h2);
  subheaderRow.appendChild(p);

  div.appendChild(h1);
  div.appendChild(subheaderRow);

  show.appendChild(div);
  show.appendChild(ul);

  loadCheckboxStates(); //loading
}

function saveCheckboxStates() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkboxStates = {};

  checkboxes.forEach((checkbox) => {
    checkboxStates[checkbox.id] = checkbox.checked;
  });
  localStorage.setItem(
    "checkboxStates" + SEM + STREAM,
    JSON.stringify(checkboxStates)
  );
}

function loadCheckboxStates() {
  const checkboxStates = JSON.parse(
    localStorage.getItem("checkboxStates" + SEM + STREAM)
  );
  if (checkboxStates) {
    Object.keys(checkboxStates).forEach((id) => {
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
  return function (...args) {
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
    8: "VIII",
  };

  return romanNumerals[num] || "Number out of range";
}
const savedebounce = debounce(saveCheckboxStates, 300);

function setSem(n) {
  SEM = n;
  if (STREAM.length != 0) {
    loadTracker(STREAM);
    return;
  }
  document.getElementById("popupOverlay").style.display = "none";
  const show = document.getElementById("show");
  show.innerHTML = "";
  let Course = STREAM.length === 0 ? "Enter Course" : STREAM;
  let Sem = convertToRoman(SEM);
  let Year = convertToOrdinal(Math.floor((SEM + 1) / 2));
  const div = document.createElement("div");
  div.classList.add("infoheader");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  p.textContent = `${Year} Year`;
  h2.textContent = `Semester ${Sem}`;
  h1.textContent = `${Course}`;

  const subheaderRow = document.createElement("div");
  subheaderRow.classList.add("subheader-row");
  subheaderRow.appendChild(h2);
  subheaderRow.appendChild(p);

  div.appendChild(h1);
  div.appendChild(subheaderRow);

  show.appendChild(div);
}

function homeInfoHeader() {
  const show = document.getElementById("show");
  show.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("infoheader");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  p.textContent = `Year`;
  h2.textContent = `Enter Semester`;
  h1.textContent = `Enter Course`;

  const subheaderRow = document.createElement("div");
  subheaderRow.classList.add("subheader-row");
  subheaderRow.appendChild(h2);
  subheaderRow.appendChild(p);

  div.appendChild(h1);
  div.appendChild(subheaderRow);

  show.appendChild(div);
}

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function() {
        if (callback) callback();
    };

    script.onerror = function() {
        console.error(`Failed to load script: ${url}`);
    };

    document.head.appendChild(script);
}
function onScriptLoaded() {
    if (typeof getData === 'function') {
        masterData = getData(SEM + STREAM);
    } else {
        console.error('getData function is not available.');
    }
}