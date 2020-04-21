import React, { FC, useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import MUITextField from "@material-ui/core/TextField";
import { BaseIntlType } from "../../types/Base";
import { InputDataType, InputSize, InputVariant } from "../../types/Input";
import { InputTextType, MultilineInputType } from "../../types/InputText";
import withIntl from "../../utils/hocs/withIntl";

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
 **/
const InputText: FC<InputTextType> = ({
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
      type={InputDataType.default}
      variant={variant}
      value={value}
      {...getMultilineProps(multiline)}
    />
  );
};

export const InputTextIntl: FC<InputTextType & BaseIntlType> = withIntl(InputText);

export default InputText;
