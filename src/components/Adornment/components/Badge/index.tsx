import React, { FC, Fragment, useMemo } from "react";
import { Badge as MUIBadge } from "@mui/material";

import { IAdornment, IAdornmentBadgeSubpart } from "../../../../types/Adornment";
import { getComposedDataCy, ISubpartMap } from "../../../../utils";

export const ADORNMENT_BADGE_SUBPARTS: ISubpartMap<IAdornmentBadgeSubpart> = {
  badge: {
    label: "Badge",
  },
};

const DEFAULT_DATA_CY = "adornment-badge";

const AdornmentBadge: FC<IAdornment> = ({ badge, children, dataCy = DEFAULT_DATA_CY }) => {
  const badgeDataCy = useMemo(() => getComposedDataCy(dataCy, ADORNMENT_BADGE_SUBPARTS.badge), [dataCy]);

  if (!badge) {
    return <Fragment>{children}</Fragment>;
  }

  const { color = "default", overlap = "circular", value, variant = "standard" } = badge;

  return (
    <MUIBadge badgeContent={value} color={color} data-cy={badgeDataCy} overlap={overlap} variant={variant}>
      {children}
    </MUIBadge>
  );
};

export default AdornmentBadge;
