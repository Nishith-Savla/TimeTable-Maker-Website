import { ReactComponent as Cross } from "../assets/CrossVector.svg";
import { ReactComponent as Tick } from "../assets/TickVector.svg";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";

// /* eslint no-unused-vars: "off" */
const Header = ({
  selectedComponents,
  onComponentSelect,
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
          const isSelected = selectedComponents.subject === subject;
          return (
            <Button
              className={`button subject ${isSelected ? "selected" : ""}`}
              key={subject}
              name={subject}
              text={subject}
              onClick={() => onComponentSelect(subject, "subject")}
            >
              {isSelected ? (
                <Tick />
              ) : (
                <Cross
                  onClick={e => {
                    e.stopPropagation();
                    onDelete(subject);
                  }}
                />
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
