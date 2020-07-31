import React, { createElement, FC, useState, useEffect } from "react";
import { InputAdornment } from "@material-ui/core";
import Icon from "../Icon";
import IconButton from "../IconButton";
import { InputType, InputSize, InputVariant } from "../../types/Input";
import { InputTextType, MultilineInputType, InputAdornmentType } from "../../types/InputText";
import { StyledMUITextField } from "./styled";
import { IconSize } from "../../types/Icon";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

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

export const DATA_CY_DEFAULT = "input-text";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "label", type: "string" },
  { name: "placeholder", type: "string" },
];

const InputText: FC<InputTextType> = ({
  adornment = undefined,
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  initialValue = "",
  label,
  multiline = undefined,
  onChange = undefined,
  placeholder = undefined,
  required = false,
  shrink = undefined,
  size = InputSize.default,
  type = InputType.default,
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

export const InputTextWithProps = InputText;

export default localized(InputText, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
