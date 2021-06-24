import React, { CSSProperties, FC } from "react";
import {
  ListItem as MUIListItem,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
} from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { IListItem } from "../../types/ListItem";
import { getComposedDataCy, suppressEvent } from "../../utils";
import IconWrapper from "../IconWrapper";

export const DATA_CY_DEFAULT = "list-item";

export const SUBPARTS_MAP = {
  icon: {
    label: "Icon",
  },
  content: {
    label: "Content (with loading = true, adds '-loading')",
    value: (loading = false) => `content${loading ? "-loading" : ""}`,
  },
};

const ListItem: FC<IListItem> = ({
  children,
  content,
  dataCy = DATA_CY_DEFAULT,
  dense = false,
  icon,
  loading = false,
  onClick,
  selected = false,
  style,
}) => {
  const baseStyle: CSSProperties = { cursor: !loading && onClick ? "pointer" : "default" };

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
      style={{ ...baseStyle, ...style }}
    >
      {icon && (
        <MUIListItemIcon>
          <IconWrapper dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.icon)} icon={icon} loading={loading} />
        </MUIListItemIcon>
      )}
      <MUIListItemText data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.content, loading)} disableTypography>
        {loading ? <MUISkeleton /> : content || children}
      </MUIListItemText>
    </MUIListItem>
  );
};

export default ListItem;
