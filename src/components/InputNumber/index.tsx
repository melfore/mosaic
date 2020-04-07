import React, { FC, useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import MUITextField from "@material-ui/core/TextField";
import { InputDataType, InputSize, InputVariant } from "../../types/Input";
import { InputNumberType } from "../../types/InputNumber";

const StyledMUITextField = styled(MUITextField)({
  width: "100%",
});

const getControlledValue = (value: number | null): any => {
  return value === null ? "" : value;
};

const getBoundedValue = (value: number | null, bounds: any): number | null => {
  const { minValue, maxValue } = bounds;
  if (value === null || (value >= minValue && value <= maxValue)) {
    return value;
  }

  return value < minValue ? minValue : maxValue;
};

const getNumericValue = (value: string, integer: boolean): number | null => {
  const numericValue = integer ? parseInt(value, 10) : parseFloat(value);
  return isNaN(numericValue) ? null : numericValue;
};

const isOutsideBounds = (value: number | null, bounds: any): boolean => {
  const { minValue, maxValue } = bounds;
  return value !== null && (value < minValue || value > maxValue);
};

/**
 * InputText component made on top of `@material-ui/core/TextField`
 */
const InputNumber: FC<InputNumberType> = ({
  dataCy,
  disabled = false,
  initialValue = null,
  integer = true,
  // TODO#lb: implement labelId
  label,
  minValue = Number.MIN_SAFE_INTEGER,
  maxValue = Number.MAX_SAFE_INTEGER,
  onChange = undefined,
  required = false,
  shrink = true,
  size = InputSize.default,
  variant = InputVariant.default,
}) => {
  const [bounds, setBounds] = useState({ minValue, maxValue });
  const [value, setValue] = useState(getBoundedValue(initialValue, bounds));
  useEffect(() => setBounds({ minValue, maxValue }), [minValue, maxValue]);
  useEffect(() => setValue(initialValue), [initialValue]);

  const onChangeHandler = (event: any) => {
    const numericValue = getNumericValue(event.target.value, integer);
    setValue(getBoundedValue(numericValue, bounds));
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledMUITextField
      disabled={disabled}
      error={isOutsideBounds(value, bounds)}
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
      required={required}
      size={size}
      type={InputDataType.number}
      variant={variant}
      value={getControlledValue(value)}
    />
  );
};

export default InputNumber;
