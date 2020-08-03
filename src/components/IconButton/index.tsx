import React, { FC, useCallback } from "react";
import MUIIconButton from "@material-ui/core/IconButton";

import { Color } from "../../types/Base";
import { IconSize } from "../../types/Icon";
import { IIconButton } from "../../types/IconButton";
import { suppressEvent } from "../../utils";
import Icon from "../Icon";

export const DATA_CY_DEFAULT = "icon-button";

// TODO: handle color
const IconButton: FC<IIconButton> = ({
  dataCy = DATA_CY_DEFAULT,
  icon,
  onClick,
  disabled = false,
  size = IconSize.default,
}) => {
  const onClickHandler = useCallback(
    (event: any) => {
      suppressEvent(event);
      onClick();
    },
    [onClick]
  );

  return (
    <MUIIconButton color={Color.inherit} data-cy={dataCy} disabled={disabled} onClick={onClickHandler}>
      <Icon dataCy={`${dataCy}-icon`} name={icon} size={size} />
    </MUIIconButton>
  );
};

export default IconButton;
