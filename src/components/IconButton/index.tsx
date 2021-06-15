import React, { FC, useCallback } from "react";
import MUIIconButton from "@material-ui/core/IconButton";

import { IconSize } from "../../types/Icon";
import { IIconButton } from "../../types/IconButton";
import { getComposedDataCy, suppressEvent } from "../../utils";
import Icon from "../Icon";

export const DATA_CY_DEFAULT = "icon-button";

export const SUBPARTS_MAP = {
  icon: {
    label: "Icon",
  },
};

const IconButton: FC<IIconButton> = ({
  dataCy = DATA_CY_DEFAULT,
  icon,
  onClick,
  disabled = false,
  size = IconSize.default,
  style,
}) => {
  const onClickHandler = useCallback(
    (event: any) => {
      suppressEvent(event);
      onClick();
    },
    [onClick]
  );

  return (
    <MUIIconButton color="inherit" data-cy={dataCy} disabled={disabled} onClick={onClickHandler} style={style}>
      <Icon dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.icon)} name={icon} size={size} />
    </MUIIconButton>
  );
};

export default IconButton;
