import React, { FC, useCallback } from "react";
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
  const onChangeHandler = useCallback((event: any, checked: boolean) => onChange && onChange(checked), []);

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
