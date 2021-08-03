import Table from "../common/Table";
import { teachers } from "../utils";
import { ReactComponent as Cross } from "../assets/CrossVector.svg";
import Button from "../common/Button";

const Body = () => {
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
      />

      <div className="teachers">
        {teachers.map(teacher => (
          <Button
            className="button teacher"
            key={teacher}
            name={teacher}
            text={teacher}
            onClick={() => console.log(teacher)}
            
          >

            <Cross />
            
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Body;
