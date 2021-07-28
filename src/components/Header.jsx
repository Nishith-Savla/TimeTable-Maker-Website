import { useState, useEffect } from "react";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import subjects from "../utils";

/* eslint no-unused-vars: "off" */
const Header = () => {
  const [isOddTerm, setIsOddTerm] = useState(true);
  const [currentSem, setCurrentSem] = useState(isOddTerm ? 1 : 2);

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
    <>
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
          key={subject}
          name={subject}
          text={subject}
          onClick={console.log(subject)}
        />
      ))}
    </>
  );
};

export default Header;
