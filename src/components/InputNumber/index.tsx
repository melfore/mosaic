import React, { FC } from "react";
import { InputDataType, InputSize, InputVariant } from "../../types/Input";
import { IInputNumber } from "../../types/InputNumber";
import { StyledMUITextField } from "./styled";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

const getControlledValue = (value: number | null): any => {
  return value === null ? "" : value;
};

const getNumericValue = (value: string, options: any): number | null => {
  const { integer, minValue, maxValue } = options;
  const numericValue = integer ? parseInt(value, 10) : parseFloat(value);
  if (isNaN(numericValue)) {
    return null;
  }

  if (numericValue >= minValue && numericValue <= maxValue) {
    return numericValue;
  }

  return numericValue < minValue ? minValue : maxValue;
};

export const DATA_CY_DEFAULT = "input-number";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "label", type: "string" },
  { name: "placeholder", type: "string" },
];

const InputNumber: FC<IInputNumber> = ({
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  integer = true,
  label,
  minValue = Number.MIN_SAFE_INTEGER,
  maxValue = Number.MAX_SAFE_INTEGER,
  onChange = undefined,
  placeholder = undefined,
  required = false,
  shrink = true,
  size = InputSize.default,
  value = null,
  variant = InputVariant.default,
}) => {
  const onChangeHandler = (event: any) => {
    const numericValue = getNumericValue(event.target.value, { integer, minValue, maxValue });
    if (onChange) {
      onChange(numericValue);
    }
  };

  return (
    <StyledMUITextField
      disabled={disabled}
      InputLabelProps={{
        shrink,
      }}
      inputProps={{
        "data-cy": dataCy,
        style: { textAlign: "right" },
      }}
      InputProps={{
        readOnly: disabled,
      }}
      label={label}
      margin="normal"
      onChange={onChangeHandler}
      placeholder={placeholder}
      required={required}
      size={size}
      type={InputDataType.number}
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
