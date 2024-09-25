/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { cloneElement, ReactElement, useCallback, useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import { Decorator } from "@storybook/react";

interface BaseFormProps {
  onChange?: (value: any) => void;
  value?: any;
}

export type FormMockProps = BaseFormProps & {
  [key: string]: any;
};

const FormMock = ({
  children,
  onChange: externalOnChange,
  value: externalValue,
  ...props
}: PropsWithChildren<FormMockProps>) => {
  const [value, setValue] = useState(externalValue);

  useEffect(() => {
    if (externalValue !== value) {
      setValue(externalValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalValue]);

  const onChange = useCallback(
    (value: any) => {
      externalOnChange && externalOnChange(value);
      setValue(value);
    },
    [externalOnChange]
  );

  return <>{cloneElement(children as ReactElement<any>, { onChange, value, ...props })}</>;
};

const FormDecorator: Decorator<FormMockProps> = (Story, { args }) => <FormMock {...args}>{Story()}</FormMock>;

export default FormDecorator;
