import { FC, useContext } from "react";
import { TableContext, TableContextType } from "./TableContext";
import TableRow from "./TableRow";

const TableBody: FC = () => {
  const { displayedRows = [] } = useContext(TableContext) as TableContextType;

  return (
    <tbody>
      {displayedRows.map((row, index) => (
        <TableRow key={index} row={row} />
      ))}
    </tbody>
  );
};

export default TableBody;
