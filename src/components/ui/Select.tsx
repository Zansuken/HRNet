import { FC } from "react";
import classNames from "classnames";

type Option = {
  value: string | number;
  label: string;
};

type Props = {
  emptyOption?: boolean;
  error?: string;
  id: string;
  inputProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  label?: string;
  options: Option[];
};

const Select: FC<Props> = ({
  emptyOption,
  error,
  id,
  inputProps,
  label,
  options,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className={classNames("block text-sm font-medium", {
            "text-red-500": Boolean(error),
          })}
        >
          {label}
        </label>
        <span className="text-red-500 text-sm">{error}</span>
      </div>
      <select
        id={id}
        className={classNames("w-full px-3 py-2 border rounded-md", {
          "border-red-500": Boolean(error),
        })}
        {...inputProps}
      >
        {emptyOption && (
          <option key="empty" value="">
            Select an option
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
