import React, { FC } from "react";

import { ISpacer, SpacerDirection } from "../../types/Spacer";

export const DATA_CY_DEFAULT = "spacer";

const Spacer: FC<ISpacer> = ({ dataCy = DATA_CY_DEFAULT, direction = SpacerDirection.horizontal, level = 1 }) => {
  return (
    <div
      data-cy={dataCy}
      style={{
        display: "block",
        height: direction === SpacerDirection.horizontal ? 0 : `${level * 8}px`,
        width: direction === SpacerDirection.horizontal ? `${level * 8}px` : 0,
      }}
    />
  );
};

export default Spacer;
