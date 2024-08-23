import { FC, useContext } from "react";
import { TableContext, TableContextType } from "./TableContext";
import Select from "../Select";
import Button from "../Button";

const PageNumber: FC<{ number: number }> = ({ number }) => (
  <span>{`Page: ${number}`}</span>
);
const PageEntries: FC<{ from: number; to: number }> = ({ from, to }) => (
  <div>
    <span>
      Entries: {from} &rarr; {to}
    </span>
  </div>
);

const TablePagination: FC = () => {
  const { pagination } = useContext(TableContext) as TableContextType;

  if (!pagination) {
    return null;
  }

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">Show</span>
        <Select
          id="showEntries"
          onChange={pagination?.onShowEntries}
          options={[
            { value: "10", label: "10" },
            { value: "20", label: "20" },
            { value: "50", label: "50" },
            { value: "100", label: "100" },
          ]}
        />
        <span className="text-sm text-gray-700">entries</span>
      </div>
      <div className="text-sm text-gray-700 flex font-semibold gap-2 flex-grow justify-center">
        <PageNumber number={pagination?.currentPage} />
        <span>|</span>
        <PageEntries
          from={pagination?.currentPage * pagination?.showEntries}
          to={pagination?.totalEntries}
        />
        {/* {`Page: ${pagination?.currentPage} | Entries: ${
          pagination?.currentPage * pagination?.showEntries
        } ${rightArrow} ${pagination?.totalEntries}`} */}
      </div>
      <div className="flex gap-2">
        {pagination?.currentPage !== 1 && (
          <Button
            type="button"
            onClick={pagination?.onPagePrev}
            buttonProps={{ disabled: pagination?.isPrevDisabled }}
          >
            Prev
          </Button>
        )}
        <Button
          type="button"
          onClick={pagination?.onPageNext}
          buttonProps={{ disabled: pagination?.isNextDisabled }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
