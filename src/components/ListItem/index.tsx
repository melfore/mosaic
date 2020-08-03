import React, { FC } from "react";
import {
  ListItem as MUIListItem,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
} from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { IListItem } from "../../types/ListItem";
import { getComposedDataCy, suppressEvent } from "../../utils";
import Icon from "../Icon";

export const DATA_CY_DEFAULT = "list-item";

const ListItem: FC<IListItem> = ({
  children,
  content,
  dataCy = DATA_CY_DEFAULT,
  dense = false,
  icon,
  loading = false,
  onClick,
  selected = false,
}) => {
  return (
    <MUIListItem
      data-cy={dataCy}
      dense={dense}
      onClick={(event) => {
        suppressEvent(event);
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
          <Icon dataCy={getComposedDataCy(dataCy, "icon")} loading={loading} name={icon} />
        </MUIListItemIcon>
      )}
      <MUIListItemText data-cy={getComposedDataCy(dataCy, `content${loading ? "-loading" : ""}`)} disableTypography>
        {loading ? <MUISkeleton /> : content || children}
      </MUIListItemText>
    </MUIListItem>
  );
};

export default ListItem;
