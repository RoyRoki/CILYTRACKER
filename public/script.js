var STREAM = "";
var SEM = 0;
var masterData = {};

window.onload = function () {
  // Load previously saved data
  STREAM = localStorage.getItem("STREAM") || "";
  SEM = parseInt(localStorage.getItem("SEM")) || 0;

  // Show previous values if available
  if (STREAM && SEM !== 0) {
    loadTracker(STREAM);
  } else {
    homeInfoHeader();
  }

  document.getElementById("popupOverlay").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
};

document.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    savedebounce();
  }
});

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
  document.querySelector("body").style.overflow = "";
}

const loadTracker = (stream) => {
  if (SEM === 0) {
    STREAM = stream;
    document.getElementById("popupOverlay").style.display = "flex";
    document.querySelector("body").style.overflow = "";
    return;
  }
  closePopup();
  STREAM = stream;
  localStorage.setItem("STREAM", STREAM); // Save the stream in localStorage
  loadScript(`sem${SEM}Data.js`, () => {
    onScriptLoaded();
    showSlyTracker(stream);
  });
};

function showSlyTracker(stream) {
  if (SEM === 0) {
    document.getElementById("popupOverlay").style.display = "flex";
    document.querySelector("body").style.overflow = "";
    return;
  }

  let numberOfCheckBox = 0;
  STREAM = stream;

  const show = document.getElementById("show");
  show.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("tree");

  for (let subjectN in masterData.subjects) {
    if (masterData.subjects.hasOwnProperty(subjectN)) {
      const subject = masterData.subjects[subjectN];
      const li = document.createElement("li");
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      const code = document.createElement("p");

      summary.textContent = subject.name;
      code.textContent = `Code: ${subject.code}`;
      details.appendChild(summary);
      details.appendChild(code);

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

              // Create GPT Button
              const gptButton = document.createElement("button");
              gptButton.classList.add("gpt-btn");
              gptButton.onclick = function () {
                openChatGPT(subject.name, unit.name, unit.data[topic]); // Call GPT function
              };

              ++numberOfCheckBox;
              checkBox.type = "checkbox";
              checkBox.classList.add("checkbox");
              checkBox.id = `${numberOfCheckBox}`;
              checkBox.style.marginRight = "1px";
              topicLi.textContent = unit.data[topic];
              topicLi.appendChild(checkBox);
              topicLi.appendChild(gptButton);
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

  loadCheckboxStates(); // loading
}

function openChatGPT(subject, unit, topic) {
  const prompt = `Explain the topic "${topic}" from unit "${unit}" in the subject "${subject}". Provide a clear, concise explanation suitable for exam preparation. Include key points, examples, and important concepts.`;
  
  const encodedPrompt = encodeURIComponent(prompt);
  const gptUrl = `https://chat.openai.com/?q=${encodedPrompt}`;
  
  window.open(gptUrl, "_blank"); // Open in new tab
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
const savedebounce = debounce(saveCheckboxStates, 300);

function setSem(n) {
  SEM = n;
  localStorage.setItem("SEM", SEM); // Save SEM to localStorage
  if (STREAM.length !== 0) {
    loadTracker(STREAM);
    return;
  }
  document.getElementById("popupOverlay").style.display = "none";
  document.querySelector("body").style.overflow = "";
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
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  script.onload = function () {
    if (callback) callback();
  };

  script.onerror = function () {
    console.error(`Failed to load script: ${url}`);
  };

  document.head.appendChild(script);
}

function onScriptLoaded() {
  if (typeof getData === "function") {
    masterData = getData(SEM + STREAM);
  } else {
    console.error("getData function is not available.");
  }
}

// Define the function first
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

// Now you can use it later in the code
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

const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

// Check the current theme from localStorage and apply it
if (
  localStorage.getItem("theme") === "dark" ||
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  body.classList.add("dark-theme");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
} else {
  body.classList.remove("dark-theme");
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
}

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Toggle the icons
  if (body.classList.contains("dark-theme")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    localStorage.setItem("theme", "dark");
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    localStorage.setItem("theme", "light");
  }
});
