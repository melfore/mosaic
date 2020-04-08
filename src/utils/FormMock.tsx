import React, { FC, ReactElement, useState } from "react";

interface InputControllerType {
  onInputChange: Function;
  inputValue: null | number | string;
  onChangePropName?: string;
  valuePropName?: string;
}

const InputController: FC<InputControllerType> = ({
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

export default InputController;
