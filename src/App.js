import { useState, useEffect, useMemo, useReducer, useRef } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { departments } from "./utils";
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
  const { batches } = departments[currentDepartment];
  const [isOddTerm, toggleIsOddTerm] = useReducer(state => !state, true);
  const yearPickerRef = useRef(new Date().getFullYear());
  const [currentSem, setCurrentSem] = useState(1);
  const [table, setTable] = useState({
    computer: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    },
    electrical: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    },
    industrial: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    },
    mechanical: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    },
    civil: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    },
  });

  const sems = [1, 2, 3, 4, 5, 6];
  let filteredSems = useMemo(
    () => sems.filter(sem => sem % 2 === Number(isOddTerm)),
    [isOddTerm]
  );

  // Load external libraries after the DOM is loaded.
  useEffect(() => {
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

  const handleKeyPress = (e, type) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // eslint-disable-next-line no-unused-expressions
      type === "subject"
        ? setSubjects(prevSubjects => ({
            ...prevSubjects,
            [currentSem]: [...prevSubjects[currentSem], e.target.innerText],
          }))
        : setTeachers(prevTeachers => [...prevTeachers, e.target.innerText]);
    }
  };

  const handleAddButtonClick = e => {
    e.preventDefault();
    e.target.contentEditable = true;
    // e.target.innerText = "\xa0";
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

  const doesClash = (time, day, text) => {
    const filteredSlots = [];
    Object.keys(departments).forEach(department => {
      filteredSems
        .filter(sem => sem !== currentSem || department !== currentDepartment)
        .forEach(sem => {
          filteredSlots.push(
            table[department][sem].filter(
              cell => cell.day === day && cell.time === time
            )[0]
          );
        });
    });
    return filteredSlots.some(slot =>
      slot?.draggedTexts.some(
        draggedText =>
          teachers.includes(draggedText) && text.includes(draggedText)
      )
    );
  };

  const handleTableSet = (e, draggedText = "") => {
    const time = e.target.id.split(" ").slice(0, -1).join(" ");
    const day = e.target.id.split(" ").slice(-1)[0];
    const text = e.target.innerText || "";

    if (!doesClash(time, day, text)) {
      const index = table[currentDepartment][currentSem].findIndex(
        cell => cell.time === time && cell.day === day
      );
      const current = {
        time,
        day,
        text,
        draggedTexts:
          table[currentDepartment][currentSem][index]?.draggedTexts || [],
      };
      current.draggedTexts.push(draggedText.trim());

      setTable(prevTable => ({
        ...prevTable,
        [currentDepartment]: {
          ...prevTable[currentDepartment],
          [currentSem]:
            index === -1
              ? prevTable[currentDepartment][currentSem].concat([current])
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
    // eslint-disable-next-line no-unused-expressions
    else alert(alertMsg);
    return false;
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
        onDelete={handleElementDelete}
        currentSem={currentSem}
        onTermChange={toggleIsOddTerm}
        onSemChange={handleSemChange}
        filteredSems={filteredSems}
        onAddButtonClick={handleAddButtonClick}
        onKeyUp={handleKeyPress}
        onDownload={downloadPDF}
        onDepartmentChange={handleDepartmentChange}
      />
      <Body
        currentSem={currentSem}
        table={table[currentDepartment]}
        onTableSet={handleTableSet}
      />
    </>
  );
}

export default App;
