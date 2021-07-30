import { columnWidths } from "../utils";

const Table = ({ className, columns, rows }) => {
  return (
    <table className={className}>
      <tr>
        {columns.map(column => (
          <th>{column}</th>
        ))}
      </tr>
      {rows.map(row => (
        <tr>
          <th width={`${columnWidths[0]}%`}>{row}</th>
          {[...Array(columns.length - 1)].map((td, index) => (
            <td key={td} width={`${columnWidths[index + 1]}%`} />
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
