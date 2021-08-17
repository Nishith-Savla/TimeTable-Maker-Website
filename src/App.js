import { useState, useEffect, useMemo } from "react";
import Swal from "sweetalert2";
import Body from "./components/Body";
import Header from "./components/Header";
import { departments } from "./utils";
import "./styles/root.scss";

function App() {
  const [currentDepartment, setCurrentDepartment] = useState("computer");
  const [subjects, setSubjects] = useState(
    departments[currentDepartment].subjects
  );
  const [teachers, setTeachers] = useState(
    departments[currentDepartment].teachers
  );
  const [isOddTerm, setIsOddTerm] = useState(true);
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

  const deleteElement = (element, type) =>
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

  const handleTermChange = () => setIsOddTerm(prev => !prev);

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
    filteredSems
      .filter(sem => sem !== currentSem)
      .forEach(sem => {
        filteredSlots.push(
          table[currentDepartment][sem].filter(
            cell => cell.day === day && cell.time === time
          )[0]
        );
      });
    // return filteredSlots.some(slot => slot && text.includes(slot?.text));
    return filteredSlots.some(slot =>
      slot?.draggedTexts.some(
        draggedText =>
          !/^[CM][1-3]:/.test(draggedText) && text.includes(draggedText)
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
    Swal.fire({
      title: "Clash Alert",
      text: `A clash may happen if you add ${text.trim()} at ${time} on ${day}.`,
      icon: "error",
    });
    return false;
  };

  const downloadPDF = () => {
    // Importing jspdf only when needed
    import("jspdf/dist/jspdf.es").then(module => {
      const jsPDF = module.default;
      // Importing dom-to-image only when needed
      // eslint-disable-next-line import/extensions
      import("dom-to-image/dist/dom-to-image.min.js").then(domToImageModule => {
        const DomToImage = domToImageModule.default;
        DomToImage.toPng(document.querySelector(".timetable")).then(dataURL => {
          // eslint-disable-next-line new-cap
          const doc = new jsPDF("landscape");
          doc.setFontSize(40);
          doc.text(`Timetable for sem ${currentSem}`, 85, 20, {
            align: "left",
          });
          doc.addImage(dataURL, 3, 30, 290, 100);
          doc.save(`kjsp-timetable-sem${currentSem}.pdf`);
        });
      });
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
        subjects={subjects}
        onDelete={deleteElement}
        onDepartmentChange={handleDepartmentChange}
        currentSem={currentSem}
        onTermChange={handleTermChange}
        onSemChange={handleSemChange}
        filteredSems={filteredSems}
        teachers={teachers}
        onAddButtonClick={handleAddButtonClick}
        onKeyUp={handleKeyPress}
        onDownload={downloadPDF}
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
