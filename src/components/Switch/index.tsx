import React, { FC } from "react";
import MUISwitch from "@material-ui/core/Switch";
import { ISwitch, SwitchSize } from "../../types/Switch";

export const DATA_CY_DEFAULT = "switch";

const Switch: FC<ISwitch> = ({
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  onChange,
  required = false,
  size = SwitchSize.default,
  value = false,
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
