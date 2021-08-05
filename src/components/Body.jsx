import Table from "../common/Table";
import { ReactComponent as Cross } from "../assets/CrossVector.svg";
import Button from "../common/Button";
import { drag, allowDrop, drop } from "../utils";

const Body = ({ teachers, onDelete }) => {
  return (
    <div className="app-body">
      <Table
        className="timetable"
        columns={[
          "Day / Time",
          "10:30 - 11:30",
          "11:30 - 12:30",
          "Lunch Break",
          "1:15 - 2:15",
          "2:15 - 3:15",
          "Snacks Break",
          "3:30 - 4:30",
          "4:30 - 5:30",
        ]}
        rows={[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ]}
        onDrop={drop}
        onDragOver={allowDrop}
      />

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
        ;
      </div>
    </div>
  );
};

export default Body;
