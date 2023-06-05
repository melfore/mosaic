import React, { FC, useCallback, useMemo } from "react";
import MUIIconButton from "@mui/material/IconButton";

import { IIconButton, IIconButtonSubpart } from "../../types/IconButton";
import { getComposedDataCy, ISubpartMap, suppressEvent } from "../../utils";
import Adornment, { ADORNMENT_SUBPARTS } from "../Adornment";
import IconWrapper from "../IconWrapper";

export const DATA_CY_DEFAULT = "icon-button";

export const SUBPARTS_MAP: ISubpartMap<IIconButtonSubpart> = {
  ...ADORNMENT_SUBPARTS,
  icon: {
    label: "Icon",
  },
};

const IconButton: FC<IIconButton> = ({
  badge,
  dataCy = DATA_CY_DEFAULT,
  icon,
  onClick,
  disabled = false,
  rotate = false,
  size = "medium",
  style,
  tooltip,
}) => {
  const adornmentDataCy = useMemo(() => getComposedDataCy(dataCy, SUBPARTS_MAP.adornment), [dataCy]);

  const iconDataCy = useMemo(() => getComposedDataCy(dataCy, SUBPARTS_MAP.icon), [dataCy]);

  const onClickHandler = useCallback(
    (event: any) => {
      suppressEvent(event);
      onClick();
    },
    [onClick]
  );

  return (
    <Adornment dataCy={adornmentDataCy} badge={badge} tooltip={tooltip}>
      <MUIIconButton color="inherit" data-cy={dataCy} disabled={disabled} onClick={onClickHandler} style={style}>
        <IconWrapper dataCy={iconDataCy} icon={icon} rotate={rotate} size={size} />
      </MUIIconButton>
    </Adornment>
  );
};

export default IconButton;
