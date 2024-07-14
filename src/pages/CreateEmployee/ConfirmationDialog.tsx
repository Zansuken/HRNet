import { FC } from "react";
import Dialog from "../../components/ui/Dialog";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ConfirmationDialog: FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} closeOnOverlayClick>
      <span>Employee created successfully!</span>
    </Dialog>
  );
};

export default ConfirmationDialog;
