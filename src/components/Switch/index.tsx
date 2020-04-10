import React, { FC } from "react";
import MUISwitch from "@material-ui/core/Switch";
import { SwitchType, SwitchSize } from "../../types/Switch";

/**
 * Switch component made on top of `@material-ui/core/Switch
 */
const Switch: FC<SwitchType> = ({
  dataCy,
  value = false,
  onChange,
  required = false,
  size = SwitchSize.default,
  disabled = false,
}) => {
  const onChangeHandler = (event: any) => {
    const value = event.target.checked;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <MUISwitch
      color="primary"
      data-cy={dataCy}
      checked={value}
      onChange={onChangeHandler}
      required={required}
      size={size}
      disabled={disabled}
    />
  );
};

export default Switch;
