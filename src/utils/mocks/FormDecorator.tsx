import { useCallback, useEffect, useState } from "react";
import { DecoratorFn } from "@storybook/react";

export type FormValue = boolean | number | string | null;

const FormDecorator: DecoratorFn = (Story, { args: { onChange: externalOnChange, value: externalValue, ...args } }) => {
  const [value, setValue] = useState(externalValue);

  useEffect(() => {
    if (externalValue !== value) {
      setValue(externalValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalValue]);

  const onChange = useCallback(
    (value: FormValue) => {
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
