import React, { FC, ReactElement, useState } from "react";

interface FormMockType {
  onInputChange: Function;
  inputValue: null | number | string;
  onChangePropName?: string;
  valuePropName?: string;
}

const FormMock: FC<FormMockType> = ({
  children,
  onInputChange,
  inputValue,
  onChangePropName = "onChange",
  valuePropName = "value",
}) => {
  const [value, setValue] = useState(inputValue);
  const wrappedOnChange = (value: null | number | string) => {
    setValue(value);
    onInputChange(value);
  };

  return React.cloneElement(children as ReactElement<any>, {
    [onChangePropName]: wrappedOnChange,
    [valuePropName]: value,
  });
};

export default FormMock;
