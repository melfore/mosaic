import React, { FC } from "react";

import { ISpacer, SpacerDirection } from "../../types/Spacer";

import { StyledMUIBox } from "./styled";

export const DATA_CY_DEFAULT = "spacer";

const Spacer: FC<ISpacer> = ({ dataCy = DATA_CY_DEFAULT, direction = SpacerDirection.horizontal, level = 1 }) => {
  return <StyledMUIBox data-cy={dataCy} direction={direction} level={level} />;
};

export default Spacer;
