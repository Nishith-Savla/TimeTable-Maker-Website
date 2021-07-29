import { useState, useEffect } from "react";
import { ReactComponent as Cross } from "../assets/CrossVector.svg";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { subjects, teachers } from "../utils";

// /* eslint no-unused-vars: "off" */
const Header = () => {
  const [isOddTerm, setIsOddTerm] = useState(true);
  const [currentSem, setCurrentSem] = useState(1);

  const sems = [1, 2, 3, 4, 5, 6];
  let filteredSems = sems.filter(sem => sem % 2 === Number(isOddTerm));

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
    <div>
      <Dropdown
        name="term"
        options={[
          { value: "odd", label: "Odd" },
          { value: "even", label: "Even" },
        ]}
        onChange={handleTermChange}
      />
      {filteredSems.map(filteredSem => (
        <Button
          key={filteredSem}
          name={`sem${filteredSem}`}
          text={`Sem ${filteredSem}`}
          onClick={() => handleSemChange(filteredSem)}
        />
      ))}
      {subjects[currentSem].map(subject => (
        <Button
          className="button"
          key={subject}
          name={subject}
          text={subject}
          onClick={() => console.log(subject)}
        >
          <Cross />
        </Button>
      ))}
      <br />
      {teachers.map(teacher => (
        <Button
          className="button"
          key={teacher}
          name={teacher}
          text={teacher}
          onClick={() => console.log(teacher)}
        >
          <Cross />
        </Button>
      ))}
    </div>
  );
};

export default Header;
