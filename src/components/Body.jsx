import Table from "../common/Table";
import { allowDrop } from "../utils";

const Body = ({ currentSem, table, onTableSet, onDrop }) => {
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
        onDrop={onDrop}
        onDragOver={allowDrop}
        contentEditable
        onChange={onTableSet}
        state={table[currentSem]}
      />
    </div>
  );
};

export default Body;
