import { columnWidths } from "../utils";

const placeCursorAtEnd = () => {
  document.execCommand("selectAll", false, null);
  document.getSelection().collapseToEnd();
};

const Table = ({
  className,
  columns,
  rows,
  onDrop,
  onDragOver,
  contentEditable,
  onChange,
  state,
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
                  onDrop={isBreak ? null : e => onDrop(e, onChange)}
                  onDragOver={isBreak ? null : e => onDragOver(e)}
                  key={`${column} ${row}`}
                  style={{ width: `${columnWidths[index + 1]}%` }}
                  suppressContentEditableWarning
                  onInput={e => {
                    onChange(e);
                    placeCursorAtEnd();
                  }}
                >
                  {
                    state.filter(
                      cell => cell.day === row && cell.time === column
                    )[0]?.text
                  }
                </span>
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
