import React, { FC } from "react";
import MUIButton from "@material-ui/core/Button";
import Icon from "../Icon";
import { BaseIntlType } from "../../types/Base";
import { ButtonIconPosition, ButtonIconType, ButtonType, ButtonVariants } from "../../types/Button";
import withIntl from "../../utils/hocs/withIntl";

const getIcons = (dataCy: string, iconConfig?: ButtonIconType) => {
  const icons = { endIcon: undefined, startIcon: undefined };
  if (!iconConfig) {
    return;
  }

  const { name, position } = iconConfig;
  const icon = <Icon dataCy={`${dataCy}-icon`} name={name} />;
  if (position === ButtonIconPosition.right) {
    return {
      ...icons,
      endIcon: icon,
    };
  }

  return {
    ...icons,
    startIcon: icon,
  };
};

/**
 * Button component made on top of `@material-ui/core/Button`.
 */
const Button: FC<ButtonType> = ({
  dataCy = "button",
  elevated = false,
  icon = undefined,
  label = "",
  onClick,
  variant = ButtonVariants.contained,
  disabled = false,
}) => {
  return (
    <MUIButton
      color="primary"
      data-cy={dataCy}
      disableElevation={!elevated}
      onClick={onClick}
      variant={variant}
      {...getIcons(dataCy, icon)}
      disabled={disabled}
    >
      {label}
    </MUIButton>
  );
};

export const ButtonIntl: FC<ButtonType & BaseIntlType> = withIntl(Button);

export default Button;
