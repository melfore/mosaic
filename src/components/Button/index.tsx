import React, { FC, ReactElement, useCallback } from "react";
import MUIButton from "@material-ui/core/Button";

import { ButtonIconPosition, ButtonVariants, Icon } from "../..";
import { IButton, IButtonIcon } from "../../types/Button";
import { suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

interface IMUIButtonIcon {
  endIcon?: ReactElement;
  startIcon?: ReactElement;
}

const getIcons = (dataCy: string, iconConfig?: IButtonIcon): IMUIButtonIcon => {
  const muiIcon = {};
  if (!iconConfig) {
    return muiIcon;
  }

  const { name, position } = iconConfig;
  const icon = <Icon dataCy={`${dataCy}-icon`} name={name} />;
  return position === ButtonIconPosition.right
    ? {
        endIcon: icon,
      }
    : { startIcon: icon };
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
