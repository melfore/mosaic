import React, { cloneElement, FC, PropsWithChildren, ReactElement, useMemo, useState } from "react";
import { DecoratorFn } from "@storybook/react";

type IFormValue = boolean | number | string | null;

interface FormMockType {
  onChangePropName?: string;
  value: IFormValue;
  valuePropName?: string;
}

const FormMock: FC<PropsWithChildren<FormMockType>> = ({
  children,
  onChangePropName = "onChange",
  value: externalValue,
  valuePropName = "value",
}) => {
  const [value, setValue] = useState(externalValue);

  const wrappedFormElement = useMemo(
    () =>
      cloneElement(children as ReactElement<any>, {
        [onChangePropName]: setValue,
        [valuePropName]: value,
      }),
    [children, onChangePropName, value, valuePropName]
  );

  return wrappedFormElement;
};

const formDecorator: DecoratorFn = (Story, { args }) => <FormMock value={args.value}>{Story()}</FormMock>;

export { formDecorator, FormMock };
