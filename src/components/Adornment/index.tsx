import React, { FC } from "react";

import { IAdornment } from "../../types/Adornment";
import { ISubpartMap } from "../../utils";

import Badge, { ADORNMENT_BADGE_SUBPARTS } from "./components/Badge";
import Tooltip, { ADORNMENT_TOOLTIP_SUBPARTS } from "./components/Tooltip";

export const ADORNMENT_SUBPARTS: ISubpartMap = {
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
      <Tooltip dataCy={dataCy} tooltip={tooltip}>
        <Badge badge={badge} dataCy={dataCy}>
          {children}
        </Badge>
      </Tooltip>
    </span>
  );
};

export default Adornment;
