import React, { cloneElement, FC, ReactElement, useCallback, useMemo, useState } from "react";
import { DecoratorFn } from "@storybook/react";

import Button from "../../components/Button";
import { Icons } from "../../types/Icon";

interface ModalMockType {
  buttonLabel?: string;
  open?: boolean;
}

const ModalMock: FC<ModalMockType> = ({ buttonLabel = "Open", children, open: externalOpen = false }) => {
  const [open, setOpen] = useState(externalOpen);

  const onClose = useCallback(() => setOpen(false), []);

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

const modalDecorator: DecoratorFn = (Story, { args }) => <ModalMock>{Story()}</ModalMock>;

export { modalDecorator, ModalMock };
