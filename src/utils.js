const subjects = {
  1: [
    "Basic Mathematics",
    "Communication Skills",
    "Computer & ICT lab",
    "Physics-I",
    "WD lab",
  ],
  2: [
    "Applied Mathematics",
    "Communication Practice",
    "Physics-II",
    "Programming in C",
    "Prog. in C lab",
    "(Phy-I & CPM) lab",
  ],
  3: [
    "Computer Network",
    "Computer Org",
    "Digital Electronics",
    "Engg Maths",
    "OOPS Using C++",
    "(C++ & PHP) lab",
    "(DE & CO) lab",
  ],
  4: [
    "Core Java",
    "Data Structures",
    "Database Management System",
    "Microprocessor",
    "µp lab",
    "Operating Systems",
    "(CJ & DBMS) lab",
  ],
  5: [
    "Advanced Java",
    "Linux and Network",
    "Software Engineering",
    "(Py/Andr) lab",
    "(AJ & WT) lab",
    "(LAN) lab",
  ],
  6: [
    "Advanced Database",
    "Adv DB lab",
    "Management",
    "System security",
    "Sp. Course",
    "(Robo/Cloud) lab",
  ],
};

const teachers = [
  "Jayesh Mane",
  "Debraj Moulick",
  "Sopan Kolte",
  "Varsha Kinge",
  "Rupali Patil",
  "Niti Patel",
  "Swapnil Tambe",
  "Dnyandev Shinde",
  "Charulata Ingle",
  "Snehal Suryavanshi",
];

const batches = ["C1:\xa0", "C2:\xa0", "C3:\xa0"];

const columnWidths = [8, 14, 14, 4, 14, 14, 4, 14, 14];

const placeCursorAtPosition = (e, func) => {
  func(e);

  // const nRange = document.createRange();
  // nRange.setStart(e.target.childNodes[0], offset);
  // nRange.collapse(true);

  // sel.removeAllRanges();
  // sel.addRange(nRange);

  const sel = window.getSelection();
  const offset = sel.getRangeAt(0).startOffset;

  const range = document.createRange();
  range.setStart(e.target.firstChild, offset);
  range.collapse(true);
  // nRange.move("character", offset);
  // nRange.select(true);
  // e.target.setSelectionRange(offset, offset);

  // sel.removeAllRanges();
  sel.addRange(range);
};

const allowDrop = ev => ev.preventDefault();

const drag = ev => ev.dataTransfer.setData("text", ev.target.id);

const drop = ev => {
  ev.preventDefault();
  const data = document.getElementById(ev.dataTransfer.getData("text"));
  ev.target.innerText += `${data.innerText}${
    (/^[CM][1-3]/.test(ev.target.innerText) ||
      /^[CM][1-3]/.test(data.innerText)) &&
    (data.classList.contains("subject") || data.classList.contains("batch"))
      ? "\xa0"
      : "\n"
  }`;
};

export {
  subjects,
  teachers,
  batches,
  columnWidths,
  placeCursorAtPosition,
  allowDrop,
  drag,
  drop,
};
