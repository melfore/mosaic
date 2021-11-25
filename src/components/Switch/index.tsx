import React, { ChangeEvent, FC, useCallback } from "react";
import { FormControlLabel as MUIFormControlLabel, Switch as MUISwitch } from "@material-ui/core";

import { ISwitch } from "../../types/Switch";
import { getComposedDataCy } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

export const DATA_CY_DEFAULT = "switch";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "label", type: "string" }];

export const SUBPARTS_MAP = {
  input: {
    label: "Input",
  },
  toggle: {
    label: "Toggle",
  },
};

const Switch: FC<ISwitch> = ({
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  label,
  labelPlacement = "start",
  onChange,
  required = false,
  size = "medium",
  style,
  value = false,
}) => {
  const onChangeHandler = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => onChange && onChange(checked),
    [onChange]
  );

  return (
    <MUIFormControlLabel
      control={
        <MUISwitch
          checked={value}
          color="primary"
          data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.toggle)}
          disabled={disabled}
          inputProps={
            {
              "data-cy": getComposedDataCy(dataCy, SUBPARTS_MAP.input),
            } as any
          }
          onChange={onChangeHandler}
          required={required}
          size={size}
          style={style}
        />
      }
      data-cy={dataCy}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export const SwitchWithProps = Switch;

export default localized(Switch, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
