import { createContext, FC, useEffect, useState } from "react";
import { TableColumnType, TableRowType } from "./Table";

type Pagination = {
  currentPage: number;
  totalEntries: number;
  showEntries: number;
  onShowEntries: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onPageNext: () => void;
  onPagePrev: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
};

export type TableContextType = {
  tableName?: string;
  columns: TableColumnType[];
  rows: TableRowType[];
  displayedRows?: TableRowType[];
  enablePagination?: boolean;
  pagination?: Pagination;
  isLoading?: boolean;
  children: React.ReactNode;
};

const TableContext = createContext<TableContextType | undefined>(undefined);

const TableProvider: FC<TableContextType> = ({
  tableName,
  columns,
  rows,
  enablePagination,
  isLoading,
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showEntries, setShowEntries] = useState(10);
  const [displayedRows, setDisplayedRows] = useState<TableRowType[]>([]);

  const maxPage = Math.ceil(rows.length / showEntries);
  const totalEntries = rows.length;

  const getCurrentPageRows = () => {
    return [...rows].slice(
      (currentPage - 1) * showEntries,
      currentPage * showEntries
    );
  };

  const getIsPrevDisabled = () => {
    return currentPage === 1;
  };

  const getIsNextDisabled = () => {
    return currentPage === maxPage;
  };

  const onShowEntries = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowEntries(Number(e.target.value));
    setCurrentPage(1);
  };

  const onPageNext = () => {
    if (currentPage === maxPage) return;

    setCurrentPage((prev) => prev + 1);
    setDisplayedRows(getCurrentPageRows());
  };
  const onPagePrev = () => {
    if (currentPage === 1) return;

    setCurrentPage((prev) => prev - 1);
    setDisplayedRows(getCurrentPageRows());
  };

  const paginationProps = {
    currentPage,
    totalEntries,
    showEntries,
    onShowEntries,
    onPageNext,
    onPagePrev,
    isPrevDisabled: getIsPrevDisabled(),
    isNextDisabled: getIsNextDisabled(),
  };

  useEffect(() => {
    if (enablePagination) {
      setDisplayedRows(
        [...rows].slice(
          (currentPage - 1) * showEntries,
          currentPage * showEntries
        )
      );
    } else {
      setDisplayedRows(rows);
    }
  }, [rows, enablePagination, currentPage, showEntries]);

  return (
    <TableContext.Provider
      value={{
        tableName,
        columns,
        rows,
        displayedRows,
        enablePagination,
        pagination: enablePagination ? paginationProps : undefined,
        isLoading,
        children,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
