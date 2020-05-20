import { Avatar as MUIAvatar, styled } from "@material-ui/core";

export const StyledMUIAvatar = styled(MUIAvatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));
