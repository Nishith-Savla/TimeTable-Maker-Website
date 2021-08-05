import { ReactComponent as Cross } from "../assets/CrossVector.svg";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { drag } from "../utils";

const Header = ({
  subjects,
  onDelete,
  currentSem,
  onSemChange,
  onTermChange,
  filteredSems,
}) => {
  return (
    <div className="app-header">
      <div className="sem-select">
        <Dropdown
          name="term"
          className="dropdown"
          options={[
            { value: "odd", label: "Odd" },
            { value: "even", label: "Even" },
          ]}
          onChange={onTermChange}
        />
        <div className="sems">
          {filteredSems.map(sem => (
            <Button
              className="sem"
              key={sem}
              isActive={sem === currentSem}
              name={`sem${sem}`}
              text={`Sem ${sem}`}
              onClick={() => onSemChange(sem)}
            />
          ))}
        </div>
      </div>

      <div className="subjects">
        {subjects[currentSem].map(subject => {
          return (
            <Button
              className="button subject"
              key={subject}
              name={subject}
              text={subject}
              draggable
              onDragStart={drag}
            >
              <Cross onClick={() => onDelete(subject, "subject")} />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
