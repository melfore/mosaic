import { ListSubheader as MUIListSubheader, styled, TextField as MUITextField } from "@material-ui/core";

export const StyledMUIListSubheader = styled(MUIListSubheader)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledMUITextField = styled(MUITextField)({
  width: "100%",
});
