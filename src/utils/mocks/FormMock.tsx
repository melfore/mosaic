import React, { cloneElement, FC, PropsWithChildren, ReactElement, useEffect, useState } from "react";
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

  useEffect(() => {
    if (externalValue !== value) {
      setValue(externalValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalValue]);

  return cloneElement(children as ReactElement<any>, {
    [onChangePropName]: setValue,
    [valuePropName]: value,
  });
};

const formDecorator: DecoratorFn = (Story, { args }) => <FormMock value={args.value}>{Story()}</FormMock>;

export { formDecorator, FormMock };
