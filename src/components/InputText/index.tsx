import React, { CSSProperties, FC } from "react";
import { InputAdornment as MUIInputAdornment, TextField as MUITextField } from "@material-ui/core";

import { IconSize } from "../../types/Icon";
import { InputSize, InputType, InputVariant } from "../../types/Input";
import { IInputAdornment, IInputText, IMultilineInput } from "../../types/InputText";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Icon from "../Icon";
import IconButton from "../IconButton";

const getAdornment = (adornment?: IInputAdornment) => {
  if (!adornment) {
    return undefined;
  }

  const { icon, onClick } = adornment;
  return (
    <MUIInputAdornment position="end">
      {!onClick ? (
        <Icon name={icon} size={IconSize.small} />
      ) : (
        <IconButton icon={icon} onClick={onClick} size={IconSize.small} />
      )}
    </MUIInputAdornment>
  );
};

const getMultilineProps = (multiline?: IMultilineInput) => {
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

const InputText: FC<IInputText> = ({
  adornment = undefined,
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  label,
  multiline = undefined,
  onChange = undefined,
  placeholder = undefined,
  required = false,
  shrink = undefined,
  size = InputSize.default,
  style,
  type = InputType.default,
  value = "",
  variant = InputVariant.default,
}) => {
  const baseStyle: CSSProperties = { width: "100%" };

  const onChangeHandler = (event: any) => {
    const value = event.target.value;
    onChange && onChange(value);
  };

  return (
    <MUITextField
      disabled={disabled}
      InputLabelProps={{
        shrink,
      }}
      inputProps={{
        "data-cy": dataCy,
        style: { ...baseStyle, ...style },
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
      style={{ ...baseStyle }}
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
