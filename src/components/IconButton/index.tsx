import React, { FC, useCallback, useMemo } from "react";
import { IconButton as MUIIconButton, Tooltip as MUITooltip } from "@material-ui/core";

import { IIconButton } from "../../types/IconButton";
import { getComposedDataCy, slugify, suppressEvent } from "../../utils";
import IconWrapper from "../IconWrapper";

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
  rotate = false,
  size = "medium",
  style,
  tooltip,
}) => {
  const onClickHandler = useCallback(
    (event: any) => {
      suppressEvent(event);
      onClick();
    },
    [onClick]
  );

  const iconButton = useMemo(
    () => (
      <MUIIconButton color="inherit" data-cy={dataCy} disabled={disabled} onClick={onClickHandler} style={style}>
        <IconWrapper dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.icon)} icon={icon} rotate={rotate} size={size} />
      </MUIIconButton>
    ),
    [dataCy, disabled, icon, onClickHandler, rotate, size, style]
  );

  if (!tooltip) {
    return iconButton;
  }

  return (
    <MUITooltip aria-label={slugify(tooltip)} title={tooltip}>
      <span>{iconButton}</span>
    </MUITooltip>
  );
};

export default IconButton;
