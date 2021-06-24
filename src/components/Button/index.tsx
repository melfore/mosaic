import React, { FC, ReactElement, useCallback } from "react";
import MUIButton from "@material-ui/core/Button";

import { ButtonIconPosition, ButtonVariants, IButton, IButtonIcon } from "../../types/Button";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import IconWrapper from "../IconWrapper";

interface IMUIButtonIcon {
  endIcon?: ReactElement;
  startIcon?: ReactElement;
}

export const SUBPARTS_MAP = {
  icon: {
    label: "Icon",
  },
};

const getIcons = (dataCy: string, iconConfig?: IButtonIcon): IMUIButtonIcon => {
  const muiIcon = {};
  if (!iconConfig) {
    return muiIcon;
  }

  const { component, name, position, rotate } = iconConfig;
  const icon = (
    <IconWrapper dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.icon)} icon={name || component} rotate={rotate} />
  );

  switch (position) {
    case ButtonIconPosition.left:
    default:
      return { startIcon: icon };
    case ButtonIconPosition.right:
      return { endIcon: icon };
  }
};

export const DATA_CY_DEFAULT = "button";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "label", type: "string" }];

// TODO: handle color
const Button: FC<IButton> = ({
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  elevated = false,
  icon,
  label,
  onClick,
  style,
  variant = ButtonVariants.contained,
}) => {
  const onClickHandler = useCallback(
    (event: any) => {
      suppressEvent(event);
      onClick();
    },
    [onClick]
  );

  return (
    <MUIButton
      color="primary"
      data-cy={dataCy}
      disabled={disabled}
      disableElevation={!elevated}
      onClick={onClickHandler}
      style={style}
      variant={variant}
      {...getIcons(dataCy, icon)}
    >
      {label}
    </MUIButton>
  );
};

export const ButtonWithProps = Button;

export default localized(Button, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
