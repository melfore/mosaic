import React, { FC } from "react";
import MUIIconButton from "@material-ui/core/IconButton";
import Icon from "../Icon";
import { IconButtonType } from "../../types/IconButton";
import { IconSize } from "../../types/Icon";
import { Color } from "../../types/Base";

/**
 * IconButton component made on top of `@material-ui/core/IconButton`.
 *
 * Add required documentation, use HTML tags if needed.
 */
const IconButton: FC<IconButtonType> = ({
  color = Color.primary,
  dataCy = "icon-button",
  icon,
  onClick,
  disabled = false,
  size = IconSize.default,
}) => {
  const _icon = <Icon dataCy={`${dataCy}`} name={icon} size={size} />;

  return (
    <MUIIconButton color={color} onClick={onClick} disabled={disabled}>
      {_icon}
    </MUIIconButton>
  );
};

export default IconButton;
