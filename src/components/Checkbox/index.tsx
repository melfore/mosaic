import React, { FC } from "react";
import MUICheckbox from "@material-ui/core/Checkbox";
import { DEPRECATED_IBaseIntl } from "../../types/Base";
import { CheckboxType, CheckboxSize } from "../../types/Checkbox";
import DEPRECATED_withIntl from "../../utils/hocs/withIntl";

/**
 * Checkbox component made on top of `@material-ui/core/Checkbox`.
 */
const Checkbox: FC<CheckboxType> = ({
  dataCy,
  value = false,
  onChange,
  required = false,
  size = CheckboxSize.default,
  intermediate = false,
  disabled = false,
}) => {
  const onChangeHandler = (event: any) => {
    const value = event.target.checked;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <MUICheckbox
      color="primary"
      data-cy={dataCy}
      checked={value}
      onChange={onChangeHandler}
      required={required}
      size={size}
      indeterminate={intermediate}
      disabled={disabled}
    />
  );
};

export const CheckboxIntl: FC<CheckboxType & DEPRECATED_IBaseIntl> = DEPRECATED_withIntl(Checkbox);

export default Checkbox;
