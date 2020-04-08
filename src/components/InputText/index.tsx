import React, { FC, useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import MUITextField from "@material-ui/core/TextField";
import { InputSize, InputTextProps, InputVariant, MultilineInputType } from "../../types/InputText";

const StyledMUITextField = styled(MUITextField)({
  width: "100%",
});

const getMultilineProps = (multiline?: MultilineInputType) => {
  return {
    multiline: !!multiline,
    ...(!multiline ? {} : { ...multiline }),
  };
};

/**
 * InputText component made on top of `@material-ui/core/TextField`
 */
const InputText: FC<InputTextProps> = ({
  dataCy,
  disabled = false,
  initialValue = "",
  // TODO#lb: implement labelId
  label,
  multiline = undefined,
  onChange = undefined,
  required = false,
  size = InputSize.default,
  variant = InputVariant.default,
}) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => setValue(initialValue), [initialValue]);

  const onChangeHandler = (event: any) => {
    const value = event.target.value;
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledMUITextField
      disabled={disabled}
      inputProps={{
        "data-cy": dataCy,
      }}
      InputProps={{
        readOnly: disabled,
      }}
      label={label}
      margin="normal"
      onChange={onChangeHandler}
      required={required}
      size={size}
      variant={variant}
      value={value}
      {...getMultilineProps(multiline)}
    />
  );
};

export default InputText;
