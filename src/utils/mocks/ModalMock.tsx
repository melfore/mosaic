import React, { FC, ReactElement, useState } from "react";
import Button from "../../components/Button";
import { Icons } from "../../types/Icon";
import { ButtonVariants } from "../../types/Button";

interface ModalMockType {
  buttonLabel?: string;
  initialOpen?: null | number | string | boolean;
  onClose?: Function;
}

const ModalMock: FC<ModalMockType> = ({ buttonLabel = "Open Modal", children, initialOpen, onClose }) => {
  const [open, setOpen] = useState(initialOpen);
  const onCloseCallback = () => {
    onClose && onClose();
    setOpen(false);
  };
  const wrappedModal = React.cloneElement(children as ReactElement<any>, { onClose: onCloseCallback, open });
  return (
    <div>
      <Button
        icon={{ name: Icons.openInNew }}
        label={buttonLabel}
        onClick={() => setOpen(!open)}
        variant={ButtonVariants.outlined}
      />
      {wrappedModal}
    </div>
  );
};

export default ModalMock;
