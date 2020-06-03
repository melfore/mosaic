import { ListSubheader as MUIListSubheader, TextField as MUITextField, styled } from "@material-ui/core";

export const StyledMUIListSubheader = styled(MUIListSubheader)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledMUITextField = styled(MUITextField)({
  width: "100%",
});
