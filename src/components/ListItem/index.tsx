import React, { FC, memo, ReactElement, useMemo } from "react";
import {
  ListItem as MUIListItem,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
} from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { ListItemType } from "../../types/ListItem";
import { TypographyVariants } from "../../types/Typography";
import Typography from "../Typography";
import Icon from "../Icon";

/**
 * ListItem component made on top of `@material-ui/core/ListItem`
 */
const ListItem: FC<ListItemType> = ({
  dense = true,
  icon = undefined,
  loading = false,
  onClick = undefined,
  selected = false,
  title,
  titleVariant = TypographyVariants.body,
}) => {
  const text = useMemo(
    () =>
      typeof title !== "string" ? (
        loading ? (
          <MUISkeleton />
        ) : (
          title
        )
      ) : (
        <Typography bottomSpacing={false} label={title} loading={loading} truncated variant={titleVariant} />
      ),
    [loading, title, titleVariant]
  );

  return (
    <MUIListItem
      dense={dense}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (loading) {
          return;
        }

        onClick && onClick();
      }}
      selected={!loading && selected}
      style={{ cursor: !loading && onClick ? "pointer" : "default" }}
    >
      {icon && (
        <MUIListItemIcon>
          <Icon loading={loading} name={icon} />
        </MUIListItemIcon>
      )}
      <MUIListItemText disableTypography>{text}</MUIListItemText>
    </MUIListItem>
  );
};

export default memo(ListItem);
