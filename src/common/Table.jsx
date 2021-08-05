import { columnWidths } from "../utils";

const Table = ({ className, columns, rows, onDrop, onDragOver }) => {
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
          <tr>
            <th width={`${columnWidths[0]}%`}>{row}</th>
            {[...Array(columns.length - 1)].map((td, index) => (
              <td
                onDrop={onDrop}
                onDragOver={onDragOver}
                key={td}
                width={`${columnWidths[index + 1]}%`}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
