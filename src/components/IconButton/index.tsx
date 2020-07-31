import React, { FC } from "react";
import MUIIconButton from "@material-ui/core/IconButton";
import Icon from "../Icon";
import { IIconButton } from "../../types/IconButton";
import { IconSize } from "../../types/Icon";
import { Color } from "../../types/Base";

export const DATA_CY_DEFAULT = "icon-button";

// TODO: handle color
const IconButton: FC<IIconButton> = ({
  dataCy = "icon-button",
  icon,
  onClick,
  disabled = false,
  size = IconSize.default,
}) => {
  const _icon = <Icon dataCy={`${dataCy}`} name={icon} size={size} />;

  return (
    <MUIIconButton color={Color.primary} onClick={onClick} disabled={disabled}>
      {_icon}
    </MUIIconButton>
  );
};

export default IconButton;
