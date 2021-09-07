import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { ReactComponent as Cross } from "../assets/Cross.svg";
import { ReactComponent as FileDownload } from "../assets/FileDownload.svg";
import { ReactComponent as FileUpload } from "../assets/FileUpload.svg";
import { ReactComponent as Delete } from "../assets/Delete.svg";
import { drag } from "../utils";
import departments from "../data/departments.json";
import YearPicker from "../common/YearPicker";

const Header = ({
  yearPickerRef,
  subjects,
  teachers,
  batches,
  rooms,
  onDelete,
  currentSem,
  onTermChange,
  onSemChange,
  filteredSems,
  onAddButtonClick,
  onInput,
  onKeyUp,
  onUpload,
  onDownload,
  downloadTypeRef,
  onTableClear,
  onDepartmentChange,
}) => {
  const isMobile = /Mobi/i.test(window.navigator.userAgent);

  return (
    <div className="app-header">
      {isMobile && (
        <p>Note: This website works better on desktop/laptop browsers.</p>
      )}
      <div className="params-select">
        <div className="dropdowns">
          <Dropdown
            name="department"
            className="dropdown dept-changer"
            tooltip="Department"
            options={Object.keys(departments).map(departmentName => {
              return {
                value: departmentName,
                label: departments[departmentName].label,
              };
            })}
            onChange={onDepartmentChange}
          />
          <YearPicker
            yearPickerRef={yearPickerRef}
            className="dropdown year-changer"
            start={new Date().getFullYear()}
            end={new Date().getFullYear() + 2}
            tooltip="Year"
            onChange={e => {
              yearPickerRef.current = e.target.value;
            }}
          />
          <Dropdown
            name="term"
            className="dropdown term-changer"
            tooltip="Term"
            options={[
              { value: "odd", label: "Odd" },
              { value: "even", label: "Even" },
            ]}
            onChange={onTermChange}
          />
        </div>
        <div className="sems">
          {filteredSems.map(sem => (
            <Button
              className="button sem"
              key={sem}
              isActive={sem === currentSem}
              name={`sem${sem}`}
              text={`Sem ${sem}`}
              onClick={() => onSemChange(sem)}
            />
          ))}
        </div>
        <Button
          className="button upload"
          text="Upload"
          name="upload"
          onClick={() => document.getElementById("jsonUpload").click()}
        >
          <input
            type="file"
            id="jsonUpload"
            onChange={onUpload}
            style={{ display: "none" }}
            accept="application/JSON"
          />
          <FileUpload />
        </Button>
        <Button
          className="button download"
          text="Download"
          name="download"
          onClick={onDownload}
        >
          <FileDownload />
        </Button>
        <Dropdown
          className="dropdown download-type"
          name="downloadType"
          dropdownRef={downloadTypeRef}
          tooltip="Download as"
          options={[
            { value: "pdf", label: "PDF" },
            { value: "json", label: "JSON" },
          ]}
        />
        <Button
          className="button clear"
          name="clear"
          text="Clear"
          onClick={onTableClear}
        >
          <Delete />
        </Button>
      </div>

      <div className="subjects">
        <h4>
          <span>Courses: </span>
        </h4>
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
          onInput={e => onInput(e, "subject")}
          onKeyUp={e => onKeyUp(e, "subject")}
        />
      </div>

      <div className="teachers">
        <h4>
          <span>Teachers: </span>
        </h4>
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
          onInput={e => onInput(e, "teacher")}
          onKeyUp={e => onKeyUp(e, "teacher")}
        />
      </div>

      <div className="batches">
        <h4>
          <span>Batches: </span>
        </h4>
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

      <div className="rooms">
        <h4>
          <span>Rooms & Labs: </span>
        </h4>
        {rooms.map(room => (
          <Button
            className="button room"
            key={room}
            name={room}
            text={room}
            draggable
            onDragStart={drag}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
