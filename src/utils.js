const departments = {
  computer: {
    subjects: {
      1: [
        "Basic Mathematics (05)",
        "Communication Skills (04) ",
        "Computer & ICT lab (06)",
        "Physics-I (04)",
        "WD lab (06)",
      ],
      2: [
        "Applied Mathematics (05)",
        "Communication Practice (04)",
        "Physics-II (04)",
        "Programming in C (04)",
        "Prog. in C lab (04)",
        "(Phy-I & CPM) lab (04)",
      ],
      3: [
        "Computer Network (04)",
        "Computer Org (04)",
        "Digital Electronics (04)",
        "Engg Maths (06)",
        "OOPS Using C++ (04)",
        "(C++ & PHP) lab (06)",
        "(DE & CO) lab (04)",
      ],
      4: [
        "Core Java (05)",
        "Data Structures (05)",
        "Database Management System (04)",
        "Microprocessor (04)",
        "µp lab (04)",
        "Operating Systems (04)",
        "(CJ & DBMS) lab (04)",
      ],
      5: [
        "Advanced Java (05)",
        "Linux and Network (04)",
        "Software Engineering (04)",
        "(Py/Andr) lab (04)",
        "(AJ & WT) lab (04)",
        "(LAN) lab (04)",
      ],
      6: [
        "Advanced Database (05)",
        "Adv DB lab (04)",
        "Management (04)",
        "System security (04)",
        "Sp. Course (04)",
        "(Robo/Cloud) lab (04)",
      ],
    },
    teachers: [
      "Sopan Kolte",
      "Charulata Ingle",
      "Rupali Patil",
      "Varsha Kinge",
      "Snehal Suryavanshi",
      "Niti Patel",
      "Dnyandev Shinde",
      "Debraj Moulick",
      "Jayesh Mane",
      "Swapnil Tambe",
    ],
    batches: ["C1:\xa0", "C2:\xa0", "C3:\xa0"],
  },
  electrical: {
    subjects: {
      1: [
        "Basic Mathematics (05)",
        "Communication Skills (04)",
        "Physics-I (04)",
        "Electrical and Electronics Workshop (06)",
        "Engineering Graphics (04)",
      ],
      2: [
        "CP (04)",
        "Physics-II (04)",
        "Applied Maths (05)",
        "AC Fundamentals (05)",
        "Physics lab (04)",
        "BEE lab (04)",
        "Software Skills (06)",
        "Language lab (NA)",
      ],
      3: [
        "ECN (05)",
        "DCMT (05)",
        "IMI (04)",
        "Engg Maths (06)",
        "ECM lab (04)",
        "MWWP (04)",
      ],
      4: [
        "ACM (06)",
        "GEP (04)",
        "EE & C (04)",
        "DEX & µp (04)",
        "Ind SFE (04)",
        "RML (04)",
        "BS (04)",
      ],
      5: [
        "PED (04)",
        "TMEE (04)",
        "T & D (04)",
        "OPTION-1 SSP-1 (04)",
        "T & M lab (04)",
        "PW&S (06)",
        "CGP (04)",
      ],
      6: [
        "U&T (05)",
        "PM (04)",
        "SWP (04)",
        "German (04)",
        "Opt 2 -SSP II (04)",
        "PSL (04)",
        "EMA (04)",
      ],
    },
    teachers: [
      "B S Motling",
      "S N Jawarkar",
      "J.S.Wasnik",
      "S N Kolte",
      "B.S Firke",
      "R.A Kamde",
      "U S Suryawanshi",
      "R.M.Homakar",
      "Anchal Lalla",
    ],
    batches: ["E1:\xa0", "E2:\xa0", "E3:\xa0"],
  },
  industrial: {
    subjects: {
      1: [
        "Basic Mathematics (05)",
        "Communication Skills (04)",
        "Physics-I (04)",
        "Behavioral Science (04)",
        "Engineering Graphics (04)",
        "(Workshop IE) (06)",
        "Physics-I Pract (04)",
      ],
      2: [
        "Cmmunication Practice (04)",
        "Physics-II (04)",
        "Applied Mathematics (05)",
        "FEE (06)",
        "C (04)",
        "C pract. (04)",
        "IEP-II (EC&CAD) (04)",
      ],
      3: [
        "Applied Electronics (05)",
        "Digital Electronics (05)",
        "Engg Maths (06)",
        "IEP-1 (BEX/DEX) (04)",
        "Electronic Meas. Sys. (06)",
      ],
      4: [
        "Analog IC (05)",
        "Instrumentation (05)",
        "IEP-VI (04)",
        "IE (05)",
        "Microprocessor (04)",
        "IEP-IV (04)",
        "IEP-III (04)",
        "Maths-III (06)",
      ],
      5: [
        "Electronics Communication Engineering (06)",
        "Embedded Systems (04)",
        "Power Electronics (06)",
        "IEP-V (PE/Emb) (04)",
        "Electrical Machines (04)",
        "Project (06)",
      ],
      6: [
        "Electronic Control Systsem (06)",
        "Machatronics (05)",
        "Sp. Pro.(Python) (04)",
        "IEP-VII(HMT) (04)",
        "Management (04)",
        "German Language (04)",
      ],
    },
    teachers: [
      "R.H Ghyadalji",
      "N D Chavan",
      "N.M Pachkawade",
      "A.R.Wasule",
      "Sunita Kolekar",
    ],
    batches: ["IE1:\xa0", "IE2:\xa0", "IE3:\xa0"],
  },
  mechanical: {
    subjects: {
      1: [
        "Basic Mathematics (05)",
        "Communication Skills (04)",
        "Physics-I (04)",
        "Engineering Mechanics (04)",
        "MEP III (Phy. lab) (04)",
        "MEP I(Engg. Mechanics + Basic ME (04)",
        "MEP II-M(EGP+CAD) (06)",
      ],
      2: [
        "Basic Mathematics (05)",
        "Communication Skills (04)",
        "Physics-I (04)",
        "Engineering Mechanics (04)",
        "MEP III (Phy. lab) (04)",
        "MEP I(Engg. Mechanics + Basic ME (04)",
        "MEP II-M(EGP+CAD) (06)",
      ],
      3: [
        "Theory of Machines (05)",
        "Engg Materials & SOM (04)",
        "Elect & Ext Engg. (04)",
        "Manufactoring process (04)",
        "MEP VI (M/C Drg.) (06)",
        "MEP VII (SOM + TOM) (04)",
        "Behavioral Science (04)",
      ],
      4: [
        "Engineering Thermodynamics (05)",
        "Metrology & Quality Assurance  (04)",
        "MEP-VIII (Fluid Mechanics+Engg. Thermodynamics (04)",
        "MEP-IX (MQA + Manufacturing Process Workshop) (06)",
        "Fluid Mechanics (05) ",
      ],
      5: [
        "Hydraulics & Pneumatic Machines (04)",
        "Manufacturing Technology (04)",
        "Mangement (04)",
        "MEP-X Estimating & Costing (04)",
        "MEP-XII (hyd. Pnu. + W/s. MT) (06)",
        "NCMP & CIM (04)",
        "Industrial Safety (04)",
      ],
      6: [
        "Thermal Engineering (06)",
        "Production Planning & Control (04)",
        "CNC Machines (04)",
        "Design of Machine Elements (04)",
        "MEP-XIII(Thermal Engg. + Machnine Design (04)",
        "Engg. Estimating & Costing (04)",
        "Management IE ()",
      ],
    },
    teachers: [
      "A V Bhange",
      "J R Jadhav",
      "C R Khaire",
      "S S Mane",
      "B K Kakad",
      "U N Palve",
      "N P Chudhary",
      "P R Patil",
      "SB Kasar",
    ],
    batches: ["M1:\xa0", "M2:\xa0", "M3:\xa0"],
  },
  civil: {
    subjects: {
      1: [
        "Communication Skills (04)",
        "Physics-I (04)",
        "Basic Maths (05)",
        "CEP-I (Phy-Chem) (04)",
        "CEP-II CAD (06)",
      ],
      2: [
        "Engg. Mech. (04)",
        "CEP-IV Engg Draw. & CE CAD (04)",
        "CEM (04)",
        "CEP-V Engg. Mech. (04)",
        "Basic CE W/S (02)",
      ],
      3: [
        "Engg. Mech. (04)",
        "CEP-IV Engg Draw. & CE CAD (04)",
        "CEM (04)",
        "CEP-V Engg. Mech. (04)",
        "Basic CE W/S (02)",
      ],
      4: [
        "TOS (04)",
        "SM (04)",
        "SUR-II (04)",
        "CEP-VIII Material testing-II (04)",
        "CEP-IX Survey-II & Build. Draw. (04)",
        "Engg. Maths./Maths-III (04)",
      ],
      5: [
        "TOS (04)",
        "SM (04)",
        "SUR-II (04)",
        "CEP-VIII Material testing-II (04)",
        "CEP-IX Survey-II & Build. Draw. (04)",
        "Engg. Maths./Maths-III (04)",
      ],
      6: [
        "CAV (04)",
        "WRE (04)",
        "WS & SE (04)",
        "CE Proj. (06)",
        "ACT (04)",
        "WSSE & HYD (04)",
        "Foreign Language (04)",
      ],
    },
    teachers: [
      "R G Tambat",
      "S V Ozarkar",
      "K B Kelgandre",
      "J S Gaikwad",
      "A R Yadav",
      "P N Petkar",
      "U M  Mashke",
      "D P Kaluse",
      "S Y Tambe",
      "Vikas Patil",
    ],
    batches: ["CE1:\xa0", "CE2:\xa0", "CE3:\xa0"],
  },
};

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

const drop = (ev, callback) => {
  ev.preventDefault();
  const data = document.getElementById(ev.dataTransfer.getData("text"));

  const prevText = ev.target.innerText;
  ev.target.innerText += `${data.innerText}${
    (/^[CMEI]E?[1-3]/.test(ev.target.innerText) ||
      /^[CMEI]E?[1-3]/.test(data.innerText)) &&
    (data.classList.contains("subject") || data.classList.contains("batch"))
      ? "\xa0"
      : "\n"
  }`;

  // ev.target.innerText = !callback(ev) ? prevText : "";
  if (!callback(ev, data.innerText)) ev.target.innerText = prevText;
};

export {
  departments,
  columnWidths,
  placeCursorAtPosition,
  allowDrop,
  drag,
  drop,
};
