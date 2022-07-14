import React, { FC } from "react";

import { IAdornment, IAdornmentSubpart } from "../../types/Adornment";
import { ISubpartMap } from "../../utils";

import AdornmentBadge, { ADORNMENT_BADGE_SUBPARTS } from "./components/Badge";
import AdornmentTooltip, { ADORNMENT_TOOLTIP_SUBPARTS } from "./components/Tooltip";

export const ADORNMENT_SUBPARTS: ISubpartMap<IAdornmentSubpart> = {
  ...ADORNMENT_BADGE_SUBPARTS,
  ...ADORNMENT_TOOLTIP_SUBPARTS,
  adornment: {
    label: "Adornment",
  },
};

const DEFAULT_DATA_CY = "adornment";

const Adornment: FC<IAdornment> = ({ badge, children, dataCy = DEFAULT_DATA_CY, tooltip }) => {
  return (
    <span data-cy={dataCy}>
      <AdornmentTooltip dataCy={dataCy} tooltip={tooltip}>
        <AdornmentBadge badge={badge} dataCy={dataCy}>
          {children}
        </AdornmentBadge>
      </AdornmentTooltip>
    </span>
  );
};

export default Adornment;
