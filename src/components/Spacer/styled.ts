import { Box as MUIBox, styled } from "@material-ui/core";
import { SpacerDirection } from "../../types/Spacer";

// TODO: this (props: any) here should be removed
export const StyledMUIBox = styled(MUIBox)((props: any) => {
  const { direction, level } = props;
  const size = level * 8;
  return {
    display: "block",
    height: direction === SpacerDirection.horizontal ? 0 : size,
    width: direction === SpacerDirection.horizontal ? size : 0,
  };
});
