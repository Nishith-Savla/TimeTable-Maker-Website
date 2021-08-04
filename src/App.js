import { useState, useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { subjects as defaultSubjects } from "./utils";

import "./styles/root.scss";

function App() {
  const [subjects, setSubjects] = useState(defaultSubjects);
  const [isOddTerm, setIsOddTerm] = useState(true);
  const [currentSem, setCurrentSem] = useState(1);
  const [selectedComponents, setSelectedComponents] = useState({
    subject: null,
    teacher: null,
  });
  const sems = [1, 2, 3, 4, 5, 6];
  let filteredSems = sems.filter(sem => sem % 2 === Number(isOddTerm));

  const handleComponentSelect = (component, type) =>
    setSelectedComponents(previouslySelectedComponents => {
      return {
        ...previouslySelectedComponents,
        [type]: selectedComponents[type] === component ? null : component,
      };
    });


  const deleteSubject = sub =>
    setSubjects(prevSubjects => {
      return {
        ...prevSubjects,
        [currentSem]: prevSubjects[currentSem].filter(
          currentSubject => currentSubject !== sub
        ),
      };
    });

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
        onDelete={deleteSubject}
        currentSem={currentSem}
        onTermChange={handleTermChange}
        onSemChange={handleSemChange}
        filteredSems={filteredSems}
        selectedComponents={selectedComponents}
        onComponentSelect={handleComponentSelect}
      />
      <Body
        selectedComponents={selectedComponents}
        onComponentSelect={handleComponentSelect}
      />
    </>
  );
}

export default App;
