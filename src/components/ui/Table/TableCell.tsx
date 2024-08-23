import classNames from "classnames";
import { FC } from "react";

type Props = {
  isHeader?: boolean;
  children: React.ReactNode;
};

const TableCell: FC<Props> = ({ isHeader = false, children }) => {
  return (
    <td
      className={classNames("box-border", {
        "px-4 py-2 bg-muted text-muted-foreground text-sm": isHeader,
        "p-4": !isHeader,
      })}
    >
      <p className="text-ellipsis overflow-hidden">{children}</p>
    </td>
  );
};

export default TableCell;
