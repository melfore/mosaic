/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  cloneElement,
  FC,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DecoratorFn } from "@storybook/react";

import Button from "../../components/Button";
import { Icons } from "../../types/Icon";

interface ModalMockType {
  buttonLabel?: string;
  open?: boolean;
}

const ModalMock: FC<PropsWithChildren<ModalMockType>> = ({
  buttonLabel = "Open",
  children,
  open: externalOpen = false,
}) => {
  const [open, setOpen] = useState(externalOpen);

  useEffect(() => {
    if (externalOpen !== open) {
      setOpen(externalOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalOpen]);

  const toggleModal = useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]);

  const wrappedModal = useMemo(
    () =>
      cloneElement(children as ReactElement<any>, {
        closable: true,
        onClose: toggleModal,
        open,
      }),
    [children, open, toggleModal]
  );

  return (
    <div>
      <Button icon={{ name: Icons.open_new }} label={buttonLabel} onClick={toggleModal} variant="outlined" />
      {wrappedModal}
    </div>
  );
};

const modalDecorator: DecoratorFn = (Story) => <ModalMock>{Story()}</ModalMock>;

export { modalDecorator, ModalMock };
