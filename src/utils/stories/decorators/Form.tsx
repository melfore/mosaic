/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { Decorator } from "@storybook/react";

interface BaseFormProps {
  onChange?: (value: any) => void;
  value?: any;
}

export type FormMockProps = BaseFormProps & {
  [key: string]: any;
};

const FormDecorator: Decorator<FormMockProps> = (
  Story,
  { args: { onChange: externalOnChange, value: externalValue, ...args } }
) => {
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

  return Story({
    args: {
      ...args,
      onChange,
      value,
    },
  });
};

export default FormDecorator;
