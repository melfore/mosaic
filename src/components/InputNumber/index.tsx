import React, { FC } from "react";
import { styled } from "@material-ui/core/styles";
import MUITextField from "@material-ui/core/TextField";
import { DEPRECATED_IBaseIntl } from "../../types/Base";
import { InputDataType, InputSize, InputVariant } from "../../types/Input";
import { InputNumberType } from "../../types/InputNumber";
import DEPRECATED_withIntl from "../../utils/hocs/withIntl";

const StyledMUITextField = styled(MUITextField)({
  width: "100%",
});

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

/**
 * InputNumber component made on top of `@material-ui/core/TextField`
 */
const InputNumber: FC<InputNumberType> = ({
  dataCy,
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

export const InputNumberIntl: FC<InputNumberType & DEPRECATED_IBaseIntl> = DEPRECATED_withIntl(InputNumber);

export default InputNumber;
