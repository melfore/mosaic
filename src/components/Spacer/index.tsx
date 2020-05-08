import React, { FC } from "react";
import MUIBox from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import { SpacerDirection, SpacerType } from "../../types/Spacer";

const StyledMUIBox = styled(MUIBox)((props: SpacerType) => {
  const { direction, level = 1 } = props;
  const size = level * 8;
  return {
    display: "block",
    height: direction === SpacerDirection.horizontal ? 0 : size,
    width: direction === SpacerDirection.horizontal ? size : 0,
  };
});

/**
 * Spacer component made on top of `@material-ui/core/Box`
 */
const Spacer: FC<SpacerType> = ({ direction = SpacerDirection.horizontal, level = 1 }) => {
  return <StyledMUIBox direction={direction} level={level} />;
};

export default Spacer;
