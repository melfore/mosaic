import React, { FC } from "react";
import MUIIconButton from "@material-ui/core/IconButton";
import Icon from "../Icon";
import { IIconButton } from "../../types/IconButton";
import { IconSize } from "../../types/Icon";
import { Color } from "../../types/Base";

export const DATA_CY_DEFAULT = "icon-button";

// TODO: handle color
const IconButton: FC<IIconButton> = ({
  dataCy = DATA_CY_DEFAULT,
  icon,
  onClick,
  disabled = false,
  size = IconSize.default,
}) => {
  return (
    <MUIIconButton color={Color.inherit} data-cy={dataCy} disabled={disabled} onClick={onClick}>
      <Icon dataCy={`${dataCy}-icon`} name={icon} size={size} />
    </MUIIconButton>
  );
};

export default IconButton;
