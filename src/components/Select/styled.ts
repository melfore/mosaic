import { ListSubheader as MUIListSubheader, styled } from "@material-ui/core";

export const StyledMUIListSubheader = styled(MUIListSubheader)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
