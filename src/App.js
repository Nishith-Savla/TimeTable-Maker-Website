import { useState, useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import {
  subjects as defaultSubjects,
  teachers as defaultTeachers,
} from "./utils";

import "./styles/root.scss";

function App() {
  const [subjects, setSubjects] = useState(defaultSubjects);
  const [teachers, setTeachers] = useState(defaultTeachers);
  const [isOddTerm, setIsOddTerm] = useState(true);
  const [currentSem, setCurrentSem] = useState(1);
  const sems = [1, 2, 3, 4, 5, 6];
  let filteredSems = sems.filter(sem => sem % 2 === Number(isOddTerm));

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

  const handleTermChange = () => {
    setIsOddTerm(prev => !prev);
  };

  const handleSemChange = sem => {
    setCurrentSem(sem);
  };

  // Change sems on term change
  useEffect(() => {
    // console.debug(isOddTerm);
    filteredSems = sems.filter(sem => sem % 2 === Number(isOddTerm));
    setCurrentSem(filteredSems[0]);
    // console.log(buttons);
  }, [isOddTerm]);

  return (
    <>
      <Header
        subjects={subjects}
        onDelete={deleteElement}
        currentSem={currentSem}
        onTermChange={handleTermChange}
        onSemChange={handleSemChange}
        filteredSems={filteredSems}
        teachers={teachers}
      />
      <Body />
    </>
  );
}

export default App;
