import React, { ChangeEvent, CSSProperties, FC, useCallback, useMemo } from "react";
import { TextField as MUITextField } from "@material-ui/core";

import { IInputText } from "../../types/InputText";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import { getAdornment } from "../Input/utils";

const BASE_STYLE: CSSProperties = { width: "100%" };

export const DATA_CY_DEFAULT = "input-text";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "label", type: "string" },
  { name: "placeholder", type: "string" },
];

const InputText: FC<IInputText> = ({
  adornment: externalAdornment,
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  label,
  multiline,
  onChange,
  placeholder,
  required = false,
  shrink,
  size = "medium",
  style,
  type = "text",
  value = "",
  variant = "outlined",
}) => {
  const adornment = useMemo(() => getAdornment(externalAdornment), [externalAdornment]);

  const onChangeHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange && onChange(value),
    [onChange]
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
      multiline={!!multiline}
      minRows={multiline?.rows}
      maxRows={multiline?.rowsMax}
      onChange={onChangeHandler}
      placeholder={placeholder}
      required={required}
      size={size}
      style={{ ...BASE_STYLE }}
      type={type}
      variant={variant}
      value={value}
    />
  );
};

export const InputTextWithProps = InputText;

export default localized(InputText, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
