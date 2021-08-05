const subjects = {
  1: [
    "Basic Mathematics",
    "Communication Skills",
    "Computer & ICT Lab",
    "Physics-I",
    "Web Design Lab",
  ],
  2: [
    "Applied Mathematics",
    "Communication Practice",
    "Physics-II",
    "Programming in C",
    "Programming in C lab",
    "(Physics-I & Computer Peripherals and Maintenance) Lab",
  ],
  3: [
    "Computer Network",
    "Computer Organization",
    "Digital Electronics",
    "Engineering Mathematics",
    "OOPS Using C++",
    "(OOPS Using C++ & PHP) lab",
    "(Basic Digital Electronics & Computer Organization) Lab",
  ],
  4: [
    "Core Java",
    "Data Structures",
    "Database Management System",
    "Microprocessor",
    "Microprocessor Lab",
    "Operating Systems",
    "(Core Java & Database Management System ) Lab",
  ],
  5: [
    "Advanced Java",
    "Linux and Network",
    "Software Engineering",
    "Elective-I (Python/Android) lab",
    "(Advanced Java and Web Technology) Lab",
    "(Linux and Network Administration) Lab",
  ],
  6: [
    "Advanced Database",
    "Advanced Database Lab",
    "Management",
    "System security",
    "Specialized Course in Computer Engineering",
    "Elective-II (Robotics/Cloud Computing) lab",
  ],
};

const teachers = [
  "Mr. Jayesh Mane",
  "Mr. Debraj Moulick",
  "Dr. Sopan Kolte",
  "Ms. Varsha Kinge",
  "Mrs. Rupali Patil",
  "Ms. Niti Patel",
  "Mr. Swapnil Tambe",
  "Mr. Dnyandev Shinde",
  "Mrs. Charulata Ingle",
  "Ms. Snehal Suryavanshi",
];

const columnWidths = [8, 14, 14, 4, 14, 14, 4, 14, 14];

const allowDrop = ev => ev.preventDefault();

const drag = ev => ev.dataTransfer.setData("text", ev.target.id);

const drop = ev => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  // eslint-disable-next-line no-param-reassign
  ev.target.innerText += `${document.getElementById(data).innerText}\n`;
};

export { subjects, teachers, columnWidths, allowDrop, drag, drop };
