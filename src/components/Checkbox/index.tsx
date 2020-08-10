import React, { FC, useCallback } from "react";
import MUICheckbox from "@material-ui/core/Checkbox";

import { CheckboxSize, ICheckbox } from "../../types/Checkbox";

export const DATA_CY_DEFAULT = "checkbox";

// TODO: handle color
const Checkbox: FC<ICheckbox> = ({
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  intermediate = false,
  onChange,
  required = false,
  size = CheckboxSize.default,
  value = false,
}) => {
  const onChangeHandler = useCallback((event: any, checked: boolean) => onChange && onChange(checked), [onChange]);

  return (
    <MUICheckbox
      checked={value}
      color="primary"
      data-cy={dataCy}
      disabled={disabled}
      indeterminate={intermediate}
      onChange={onChangeHandler}
      required={required}
      size={size}
    />
  );
};

export default Checkbox;
