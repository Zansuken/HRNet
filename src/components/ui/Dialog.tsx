import { FC, useRef } from "react";
import CrossIcon from "../../assets/icons/cross.svg";
import classNames from "classnames";
import useClickOutside from "../../hooks/useClickOutside";

type Props = {
  closeOnOverlayClick?: boolean;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/**
 * A reusable dialog component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.closeOnOverlayClick - Determines whether the dialog should close when the overlay is clicked.
 * @param {boolean} props.open - Determines whether the dialog is open or closed.
 * @param {Function} props.onClose - The callback function to be called when the dialog is closed.
 * @param {ReactNode} props.children - The content to be rendered inside the dialog.
 * @returns {JSX.Element|null} The rendered dialog component.
 */
const Dialog: FC<Props> = ({
  closeOnOverlayClick,
  open,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useClickOutside(dialogRef, () => closeOnOverlayClick && open && onClose());

  if (!open) return null;

  return (
    <div
      className={classNames(
        "fixed w-full h-full bg-black bg-opacity-50 flex items-center"
      )}
    >
      <dialog
        ref={dialogRef}
        open={open}
        className="relative w-full max-w-md mx-auto rounded-md p-4 z-50"
      >
        <div
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-black cursor-pointer"
          onClick={onClose}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={CrossIcon}
              alt="Close"
              className="h-2 w-2 top-2 right-2 invert"
            />
          </div>
        </div>
        {children}
      </dialog>
    </div>
  );
};

export default Dialog;
