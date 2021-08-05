import { columnWidths } from "../utils";

const Table = ({ className, columns, rows, onDrop, onDragOver }) => {
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
            {[...Array(columns.length - 1)].map((td, index) => (
              <span
                className="td"
                onDrop={onDrop}
                onDragOver={onDragOver}
                key={td}
                style={{ width: `${columnWidths[index + 1]}%` }}
              />
            ))}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Table;
