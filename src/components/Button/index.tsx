import React, { FC, MouseEvent, useCallback, useMemo } from "react";
import MUIButton from "@mui/material/Button";

import { IButton, IMUIButtonIcon } from "../../types/Button";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import IconWrapper from "../IconWrapper";

export const SUBPARTS_MAP = {
  icon: {
    label: "Icon",
  },
};

export const DATA_CY_DEFAULT = "button";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "label", type: "string" }];

const Button: FC<IButton> = ({
  color = "primary",
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  elevated = false,
  icon: externalIcon,
  label,
  onClick,
  style,
  variant = "contained",
}) => {
  const icon = useMemo(() => {
    const muiIcon: IMUIButtonIcon = {};
    if (!externalIcon) {
      return muiIcon;
    }

    const { component, name, position, rotate } = externalIcon;
    const buttonIconDataCy = getComposedDataCy(dataCy, SUBPARTS_MAP.icon);
    const icon = <IconWrapper dataCy={buttonIconDataCy} icon={name || component} rotate={rotate} />;

    switch (position) {
      case "right":
        return { endIcon: icon };
      case "left":
      default:
        return { startIcon: icon };
    }
  }, [dataCy, externalIcon]);

  const onClickHandler = useCallback(
    (event: MouseEvent) => {
      suppressEvent(event);
      onClick();
    },
    [onClick]
  );

  return (
    <MUIButton
      data-cy={dataCy}
      disabled={disabled}
      disableElevation={!elevated}
      onClick={onClickHandler}
      style={style}
      variant={variant}
      color={color}
      {...icon}
    >
      {label}
    </MUIButton>
  );
};

export default localized(Button, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
