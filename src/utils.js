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
  "Mrs. Charulata Ingle",
  "Mr. Debraj Moulick",
  "Mr. Dnyandev Shinde",
  "Mr. Jayesh Mane",
  "Ms. Niti Patel",
  "Mrs. Rupali Patil",
  "Ms. Snehal Suryavanshi",
  "Dr. Sopan Kolte",
  "Mr. Swapnil Tambe",
  "Ms. Varsha Kinge",
];

const columnWidths = [13.33, 13.33, 13.33, 5, 13.33, 13.33, 1.67, 13.33, 13.33];

const allowDrop = ev => ev.preventDefault();

const drag = ev => ev.dataTransfer.setData("text", ev.target.id);

const drop = ev => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  // eslint-disable-next-line no-param-reassign
  ev.target.innerText += `${document.getElementById(data).innerText}\n`;
};

export { subjects, teachers, columnWidths, allowDrop, drag, drop };
