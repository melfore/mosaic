import React, { FC } from "react";
import MUISwitch from "@material-ui/core/Switch";
import { DEPRECATED_IBaseIntl } from "../../types/Base";

import { SwitchType, SwitchSize } from "../../types/Switch";
import DEPRECATED_withIntl from "../../utils/hocs/withIntl";

/**
 * Switch component made on top of `@material-ui/core/Switch`.
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

export const SwitchIntl: FC<SwitchType & DEPRECATED_IBaseIntl> = DEPRECATED_withIntl(Switch);

export default Switch;
