import React, { ChangeEvent, CSSProperties, FC, useCallback, useMemo } from "react";
import { TextField as MUITextField } from "@material-ui/core";

import { IInputNumber, INullableNumber } from "../../types/InputNumber";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import { getAdornment } from "../Input/utils";

const BASE_STYLE: CSSProperties = { textAlign: "right", width: "100%" };

export const DATA_CY_DEFAULT = "input-number";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "label", type: "string" },
  { name: "placeholder", type: "string" },
];

const InputNumber: FC<IInputNumber> = ({
  adornment: externalAdornment,
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  integer = true,
  label,
  minValue = Number.MIN_SAFE_INTEGER,
  maxValue = Number.MAX_SAFE_INTEGER,
  onChange,
  placeholder,
  required = false,
  shrink = true,
  size = "medium",
  style,
  value = null,
  variant = "outlined",
}) => {
  const adornment = useMemo(() => getAdornment(externalAdornment), [externalAdornment]);

  const getControlledValue = useCallback((value: INullableNumber) => (value === null ? "" : value), []);

  const getNumericValue = useCallback(
    (value: string): INullableNumber => {
      const numericValue = integer ? parseInt(value, 10) : parseFloat(value);
      if (isNaN(numericValue)) {
        return null;
      }

      if (numericValue >= minValue && numericValue <= maxValue) {
        return numericValue;
      }

      return numericValue < minValue ? minValue : maxValue;
    },
    [integer, minValue, maxValue]
  );

  const onChangeHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const numericValue = getNumericValue(value);
      onChange && onChange(numericValue);
    },
    [getNumericValue, onChange]
  );

  return (
    <MUITextField
      disabled={disabled}
      InputLabelProps={{
        shrink,
      }}
      inputProps={{
        "data-cy": dataCy,
        style: { ...BASE_STYLE, ...style },
      }}
      InputProps={{
        endAdornment: adornment,
        readOnly: disabled,
      }}
      label={label}
      margin="normal"
      onChange={onChangeHandler}
      placeholder={placeholder}
      required={required}
      size={size}
      style={{ ...BASE_STYLE }}
      type="number"
      variant={variant}
      value={getControlledValue(value)}
    />
  );
};

export const InputNumberWithProps = InputNumber;

export default localized(InputNumber, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
