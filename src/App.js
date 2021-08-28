import { useState, useEffect, useMemo, useReducer, useRef } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { getShortFormOfName, containsLab, BATCHES_REGEX, NBSP } from "./utils";
import departments from "./data/departments.json";

import "./styles/root.scss";

let Swal;
let jsPDF;
let DomToImage;

function App() {
  const [currentDepartment, setCurrentDepartment] = useState("computer");
  const [subjects, setSubjects] = useState(
    departments[currentDepartment].subjects
  );
  const [teachers, setTeachers] = useState(
    departments[currentDepartment].teachers
  );
  const { batches, rooms } = departments[currentDepartment];
  const [isOddTerm, toggleIsOddTerm] = useReducer(state => !state, true);
  const yearPickerRef = useRef(new Date().getFullYear());
  const [currentSem, setCurrentSem] = useState(1);
  const initialTable = {
    computer: {},
    electrical: {},
    industrial: {},
    mechanical: {},
    civil: {},
  };
  const [table, setTable] = useState(initialTable);
  const [newSubject, setNewSubject] = useState("");
  const [newTeacher, setNewTeacher] = useState("");

  const sems = [1, 2, 3, 4, 5, 6];
  let filteredSems = useMemo(
    () => sems.filter(sem => sem % 2 === Number(isOddTerm)),
    [isOddTerm]
  );

  // Load external libraries after the DOM is loaded.
  useEffect(() => {
    const localStorageTable = JSON.parse(localStorage.getItem("table"));
    localStorageTable && setTable(localStorageTable);
    import("sweetalert2").then(module => {
      Swal = module.default;
    });
    import("jspdf").then(module => {
      jsPDF = module.default;
    });
    import("dom-to-image").then(module => {
      DomToImage = module.default;
    });
  }, []);

  const handleElementDelete = (element, type) =>
    type === "subject"
      ? setSubjects(prevSubjects => ({
          ...prevSubjects,
          [currentSem]: prevSubjects[currentSem].filter(
            currentSubject => currentSubject !== element
          ),
        }))
      : setTeachers(prevTeachers =>
          prevTeachers.filter(currentTeacher => currentTeacher !== element)
        );

  const handleAddButtonKeyUp = (e, type) => {
    if (e.key === "Enter") {
      e.preventDefault();
      type === "subject"
        ? setSubjects(prevSubjects => ({
            ...prevSubjects,
            [currentSem]: [...prevSubjects[currentSem], newSubject],
          }))
        : setTeachers(prevTeachers => [...prevTeachers, newTeacher]);
      e.target.innerText = "+";
      e.target.contentEditable = false;
    }
  };

  const handleAddButtonInput = (e, type) => {
    type === "subject"
      ? setNewSubject(e.target.innerText)
      : setNewTeacher(e.target.innerText);
  };

  const handleAddButtonClick = e => {
    e.preventDefault();
    e.target.contentEditable = true;
    e.target.innerText = "";
    e.target.focus();
  };

  const handleSemChange = sem => {
    setCurrentSem(sem);
  };

  const handleDepartmentChange = e => {
    setCurrentDepartment(e.target.value);
  };

  useEffect(() => {
    setSubjects(departments[currentDepartment]?.subjects);
    setTeachers(departments[currentDepartment]?.teachers);
  }, [currentDepartment]);

  useEffect(() => {
    localStorage.setItem("table", JSON.stringify(table));
  }, [table]);

  const handleDrop = (e, callback) => {
    e.preventDefault();
    const data = document.getElementById(e.dataTransfer.getData("text"));

    const time = e.target.id.split(" ").slice(0, -1).join(" ");
    const day = e.target.id.split(" ").slice(-1)[0];

    let text = data.classList.contains("subject")
      ? data.innerText.split(" ").slice(0, -1).join(" ")
      : data.innerText;

    const currentCell = table[currentDepartment]?.[currentSem]?.filter(
      cell => cell.time === time && cell.day === day
    )[0];

    if (containsLab(currentCell) && data.classList.contains("teacher"))
      text = getShortFormOfName(text);

    const prevText = e.target.innerText;

    e.target.innerText += `${text}${
      (BATCHES_REGEX.test(e.target.innerText) ||
        BATCHES_REGEX.test(data.innerText)) &&
      (data.classList.contains("subject") || data.classList.contains("batch"))
        ? NBSP
        : "\n"
    }`;

    // ev.target.innerText = !callback(ev) ? prevText : "";
    if (!callback(e, data.innerText)) e.target.innerText = prevText;
  };

  const doesClash = (time, day, text) => {
    const filteredSlots = [];
    Object.keys(departments).forEach(department => {
      filteredSems
        .filter(sem => sem !== currentSem || department !== currentDepartment)
        .forEach(sem => {
          filteredSlots.push(
            table[department][sem]?.filter(
              cell => cell.day === day && cell.time === time
            )[0] || null
          );
        });
    });
    return filteredSlots.some(slot =>
      slot?.draggedTexts.some(
        draggedText =>
          (rooms.includes(draggedText) || teachers.includes(draggedText)) &&
          text.includes(draggedText)
      )
    );
  };

  const handleTableSet = (e, draggedText = "") => {
    const time = e.target.id.split(" ").slice(0, -1).join(" ");
    const day = e.target.id.split(" ").slice(-1)[0];
    const text = e.target.innerText || "";

    if (!doesClash(time, day, text)) {
      const index =
        table[currentDepartment][currentSem]?.findIndex(
          cell => cell.time === time && cell.day === day
        ) ?? -1;
      const current = {
        time,
        day,
        text,
        draggedTexts:
          !draggedText && !text.trim()
            ? []
            : table[currentDepartment][currentSem]?.[index]?.draggedTexts || [],
      };
      draggedText && current.draggedTexts.push(draggedText.trim());

      setTable(prevTable => ({
        ...prevTable,
        [currentDepartment]: {
          ...prevTable[currentDepartment],
          [currentSem]:
            index === -1
              ? (prevTable[currentDepartment][currentSem] ?? []).concat([
                  current,
                ])
              : [
                  ...prevTable[currentDepartment][currentSem].slice(0, index),
                  {
                    ...prevTable[currentDepartment][currentSem][index],
                    ...current,
                  },
                  ...prevTable[currentDepartment][currentSem].slice(index + 1),
                ],
        },
      }));
      return true;
    }

    const alertMsg = `A clash may happen if you add ${draggedText.trim()} at ${time} on ${day}.`;
    if (Swal)
      Swal.fire({
        title: "Clash Alert",
        text: alertMsg,
        icon: "error",
      });
    else alert(alertMsg);
    return false;
  };

  const handleTableClear = () => {
    setTable(initialTable);
  };

  const downloadPDF = () => {
    DomToImage.toPng(document.querySelector(".timetable")).then(dataURL => {
      // eslint-disable-next-line new-cap
      const doc = new jsPDF("landscape");
      doc.setFontSize(20);
      doc.text(`K. J. Somaiya Polytechnic`, 115, 10);
      doc.text(
        `${isOddTerm ? "Winter" : "Summer"} ${yearPickerRef.current.value}`,
        130,
        20
      );
      doc.text(`${departments[currentDepartment].label} Engineering`, 117, 30);
      doc.text(`${isOddTerm ? "Odd" : "Even"} Semester`, 130, 40);
      doc.text(`Semester ${currentSem}`, 135, 50);
      doc.addImage(dataURL, 3, 60, 290, 100);
      doc.save(
        `${departments[currentDepartment].shortForm.toLowerCase()}-${
          isOddTerm ? "winter" : "summer"
        }${yearPickerRef.current.value}-sem${currentSem}.pdf`
      );
    });
  };

  // Change sems on term change
  useEffect(() => {
    filteredSems = sems.filter(sem => sem % 2 === Number(isOddTerm));
    setCurrentSem(filteredSems[0]);
  }, [isOddTerm]);

  return (
    <>
      <Header
        yearPickerRef={yearPickerRef}
        subjects={subjects}
        teachers={teachers}
        batches={batches}
        rooms={rooms}
        onDelete={handleElementDelete}
        currentSem={currentSem}
        onTermChange={toggleIsOddTerm}
        onSemChange={handleSemChange}
        filteredSems={filteredSems}
        onAddButtonClick={handleAddButtonClick}
        onInput={handleAddButtonInput}
        onKeyUp={handleAddButtonKeyUp}
        onDownload={downloadPDF}
        onDepartmentChange={handleDepartmentChange}
      />
      <Body
        currentSem={currentSem}
        table={table[currentDepartment]}
        onDrop={handleDrop}
        onTableSet={handleTableSet}
        onTableClear={handleTableClear}
      />
    </>
  );
}

export default App;
