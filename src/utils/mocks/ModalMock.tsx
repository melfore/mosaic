import React, { cloneElement, FC, ReactElement, useCallback, useMemo, useState } from "react";

import Button from "../../components/Button";
import { Icons } from "../../types/Icon";

interface ModalMockType {
  buttonLabel?: string;
  open?: boolean;
  onClose?: () => void;
}

const ModalMock: FC<ModalMockType> = ({
  buttonLabel = "Open",
  children,
  open: externalOpen = false,
  onClose: externalOnClose,
}) => {
  const [open, setOpen] = useState(externalOpen);

  const onClose = useCallback(() => {
    externalOnClose && externalOnClose();
    setOpen(false);
  }, [externalOnClose]);

  const wrappedModal = useMemo(
    () => cloneElement(children as ReactElement<any>, { onClose, open }),
    [children, onClose, open]
  );

  return (
    <div>
      <Button icon={{ name: Icons.open_new }} label={buttonLabel} onClick={() => setOpen(!open)} variant="outlined" />
      {wrappedModal}
    </div>
  );
};

export default ModalMock;
