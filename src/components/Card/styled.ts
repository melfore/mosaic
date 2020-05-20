import {
  Box as MUIBox,
  Card as MUICard,
  CardActions as MUICardActions,
  CardContent as MUICardContent,
  CardHeader as MUICardHeader,
  styled,
} from "@material-ui/core";

export const ActionsWrapper = styled(MUIBox)(({ theme }) => ({
  "& > *:not(:first-child)": {
    marginLeft: `${theme.spacing(2)}px`,
  },
}));

export const StyledMUICard = styled(MUICard)(({ theme }) => ({
  margin: `${theme.spacing(2)}px`,
  width: "100%",
}));

export const StyledMUICardActions = styled(MUICardActions)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
}));

export const StyledMUICardContent = styled(MUICardContent)(({ theme }) => ({
  padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
}));

export const StyledMUICardHeader = styled(MUICardHeader)(({ theme }) => ({
  padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  "& > .MuiCardHeader-content": {
    width: `calc(100% - ${theme.spacing(9)}px)`,
  },
  "& > .MuiCardHeader-content > span": {
    display: "inherit",
  },
}));
