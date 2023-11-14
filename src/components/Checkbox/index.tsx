import React, { ChangeEvent, CSSProperties, FC, InputHTMLAttributes, useCallback, useMemo } from "react";
import { Checkbox as MUICheckbox, FormControlLabel as MUIFormControlLabel } from "@mui/material";

import { ICheckbox } from "../../types/Checkbox";
import { getComposedDataCy } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

type InnerInputProps = InputHTMLAttributes<HTMLInputElement> & {
  "data-cy": string;
};

export const DATA_CY_DEFAULT = "checkbox";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "label", type: "string" }];

export const SUBPARTS_MAP = {
  check: {
    label: "Check",
  },
  input: {
    label: "Input",
  },
};

const Checkbox: FC<ICheckbox> = ({
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  intermediate = false,
  label,
  labelPlacement = "start",
  onChange: externalOnChange,
  required = false,
  size = "medium",
  style,
  value = false,
}) => {
  const onChange = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => externalOnChange && externalOnChange(checked),
    [externalOnChange]
  );

  const checkDataCy = useMemo(() => getComposedDataCy(dataCy, SUBPARTS_MAP.check), [dataCy]);

  const inputProps = useMemo(
    (): InnerInputProps => ({
      "data-cy": getComposedDataCy(dataCy, SUBPARTS_MAP.input),
    }),
    [dataCy]
  );

  const wrapperStyle = useMemo(
    (): CSSProperties => ({
      ...(!label ? { margin: 0 } : {}),
    }),
    [label]
  );

  return (
    <MUIFormControlLabel
      control={
        <MUICheckbox
          checked={value}
          data-cy={checkDataCy}
          disabled={disabled}
          indeterminate={intermediate}
          inputProps={inputProps}
          onChange={onChange}
          required={required}
          size={size}
          style={style}
        />
      }
      data-cy={dataCy}
      label={label}
      labelPlacement={labelPlacement}
      style={wrapperStyle}
    />
  );
};

// reactDocgen from @storybook/addon-docs does not auto-generate docs with custom HOCs
export const LocalizedCheckbox = localized(Checkbox, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});

export default LocalizedCheckbox;
