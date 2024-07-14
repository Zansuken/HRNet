import { FC } from "react";
import classNames from "classnames";

type Props = {
  error?: string;
  id: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  label: string;
  type: string;
};

const Input: FC<Props> = ({ error, id, inputProps, label, type }) => (
  <div>
    <div className="flex justify-between">
      <label
        htmlFor={id}
        className={classNames("block text-sm font-medium mb-1", {
          "text-red-500": Boolean(error),
        })}
      >
        {label}
      </label>
      <span className="text-red-500 text-sm">{error}</span>
    </div>
    <input
      type={type}
      id={id}
      className={classNames("w-full px-3 py-2 border rounded-md", {
        "border-red-500": Boolean(error),
      })}
      {...inputProps}
    />
  </div>
);

export default Input;
