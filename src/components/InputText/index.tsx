import React, { createElement, FC, useState, useEffect } from "react";
import { InputAdornment } from "@material-ui/core";
import Icon from "../Icon";
import IconButton from "../IconButton";
import { BaseIntlType } from "../../types/Base";
import { InputDataType, InputSize, InputVariant } from "../../types/Input";
import { InputTextType, MultilineInputType, InputAdornmentType } from "../../types/InputText";
import withIntl from "../../utils/hocs/withIntl";
import { StyledMUITextField } from "./styled";
import { Icons, IconSize } from "../../types/Icon";

const getAdornment = (adornment?: InputAdornmentType) => {
  if (!adornment) {
    return undefined;
  }

  const { icon, onClick } = adornment;
  return (
    <InputAdornment position="end">
      {!onClick ? (
        <Icon name={icon} size={IconSize.small} />
      ) : (
        <IconButton icon={icon} onClick={onClick} size={IconSize.small} />
      )}
    </InputAdornment>
  );
};

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
  adornment = undefined,
  dataCy,
  disabled = false,
  initialValue = "",
  // TODO#lb: implement labelId
  label,
  multiline = undefined,
  onChange = undefined,
  placeholder = undefined,
  required = false,
  shrink = undefined,
  size = InputSize.default,
  type = InputDataType.default,
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
      InputLabelProps={{
        shrink,
      }}
      inputProps={{
        "data-cy": dataCy,
      }}
      InputProps={{
        endAdornment: getAdornment(adornment),
        readOnly: disabled,
      }}
      label={label}
      margin="normal"
      onChange={onChangeHandler}
      placeholder={placeholder}
      required={required}
      size={size}
      type={type}
      variant={variant}
      value={value}
      {...getMultilineProps(multiline)}
    />
  );
};

export const InputTextIntl: FC<InputTextType & BaseIntlType> = withIntl(InputText);

export default InputText;
