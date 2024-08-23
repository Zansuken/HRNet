import { FC } from "react";
import { TableProvider } from "./TableContext";
import TablePagination from "./TablePagination";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Employee } from "../../../types/employee";
import Loader from "../../Loader";

export type TableColumnType = {
  label: string;
  key: keyof Employee;
};

type TableRowValue = {
  value: string;
  hide?: boolean;
};

export type TableRowType = {
  [key: string]: TableRowValue;
};

type Props = {
  columns: TableColumnType[];
  rows: TableRowType[];
  enablePagination?: boolean;
  isLoading?: boolean;
};

const Table: FC<Props> = ({ columns, rows, enablePagination, isLoading }) => {
  return (
    <TableProvider
      columns={columns}
      rows={rows}
      enablePagination={enablePagination}
      isLoading={isLoading}
    >
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        {isLoading ? (
          <div className="flex-1 flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <table className="flex-1 w-full max-h-[calc(100%-42px-1rem)]">
            <TableHead />
            <TableBody />
          </table>
        )}
      </div>
      {enablePagination && <TablePagination />}
    </TableProvider>
  );
};

export default Table;
