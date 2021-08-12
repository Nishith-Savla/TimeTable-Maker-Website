import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { ReactComponent as Cross } from "../assets/Cross.svg";
import { ReactComponent as FileDownload } from "../assets/FileDownload.svg";
import { batches, drag } from "../utils";

const Header = ({
  subjects,
  teachers,
  onDelete,
  currentSem,
  onSemChange,
  onTermChange,
  filteredSems,
  onAddButtonClick,
  onKeyUp,
  onDownload,
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
        <Button
          className="button download"
          text="Download"
          name="download"
          onClick={onDownload}
        >
          <FileDownload />
        </Button>
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
        <Button
          className="button add-subject subject"
          text="+"
          onClick={onAddButtonClick}
          onKeyUp={e => onKeyUp(e, "subject")}
        />
      </div>

      <div className="teachers">
        {teachers.map(teacher => {
          return (
            <Button
              className="button teacher"
              key={teacher}
              name={teacher}
              text={teacher}
              draggable
              onDragStart={drag}
            >
              <Cross onClick={() => onDelete(teacher, "teacher")} />
            </Button>
          );
        })}
        <Button
          className="button add-teacher teacher"
          text="+"
          onClick={onAddButtonClick}
          onKeyUp={e => onKeyUp(e, "teacher")}
        />
      </div>

      <div className="batches">
        {batches.map(batch => (
          <Button
            className="button batch"
            key={batch}
            name={batch}
            text={batch}
            draggable
            onDragStart={drag}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
