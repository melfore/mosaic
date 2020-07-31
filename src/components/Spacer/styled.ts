import { Box as MUIBox, styled } from "@material-ui/core";
import { ISpacer, SpacerDirection } from "../../types/Spacer";

export const StyledMUIBox = styled(MUIBox)((props: ISpacer) => {
  const { direction, level = 1 } = props;
  const size = level * 8;
  return {
    display: "block",
    height: direction === SpacerDirection.horizontal ? 0 : size,
    width: direction === SpacerDirection.horizontal ? size : 0,
  };
});
