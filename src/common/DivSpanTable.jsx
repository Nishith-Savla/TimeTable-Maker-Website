import { columnWidths } from "../utils";

const Table = ({
  className,
  columns,
  rows,
  onDrop,
  onDragOver,
  contentEditable,
}) => {
  return (
    <div className={className}>
      <div className="tr">
        {columns.map((column, index) => (
          <span
            className="th"
            key={column}
            style={{ width: `${columnWidths[index]}%` }}
          >
            {column}
          </span>
        ))}

        <br />
      </div>
      {rows.map(row => {
        return (
          <div className="tr">
            <span className="th" style={{ width: `${columnWidths[0]}%` }}>
              {row}
            </span>
            {columns.slice(1).map((column, index) => {
              const isBreak = column.endsWith("Break");
              return (
                <span
                  id={isBreak ? "break" : `${column} ${row}`}
                  contentEditable={isBreak ? false : contentEditable}
                  className="td"
                  onDrop={isBreak ? null : onDrop}
                  onDragOver={isBreak ? null : onDragOver}
                  key={`${column} ${row}`}
                  style={{ width: `${columnWidths[index + 1]}%` }}
                />
              );
            })}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Table;
