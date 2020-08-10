import { Box as MUIBox, styled, Toolbar as MUIToolbar } from "@material-ui/core";

export const StyledMUIToolbar = styled(MUIToolbar)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

export const TitleWrapper = styled(MUIBox)(({ theme }) => ({
  borderRadius: `${theme.shape.borderRadius}px`,
  padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
  userSelect: "none",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    cursor: "pointer",
  },
}));
