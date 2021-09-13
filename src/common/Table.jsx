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
  onInput,
  state,
}) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={column} width={`${columnWidths[index]}%`}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row}>
            <th style={{ minWidth: `${columnWidths[0]}%` }}>{row}</th>
            {columns.slice(1).map((column, index) => {
              const isBreak = column.endsWith("Break");
              return (
                <td
                  id={isBreak ? "break" : `${column} ${row}`}
                  contentEditable={isBreak ? false : contentEditable}
                  onDrop={isBreak ? null : e => onDrop(e)}
                  onDragOver={isBreak ? null : e => onDragOver(e)}
                  key={column}
                  style={{ minWidth: `${columnWidths[index + 1]}%` }}
                  onInput={e => {
                    onInput(e);
                    placeCursorAtEnd();
                  }}
                  suppressContentEditableWarning
                >
                  {
                    state?.filter(
                      cell => cell.day === row && cell.time === column
                    )[0]?.text
                  }
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
