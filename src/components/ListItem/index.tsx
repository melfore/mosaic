import React, { CSSProperties, FC, PropsWithChildren, useCallback, useMemo } from "react";
import {
  ListItem as MUIListItem,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
  Skeleton as MUISkeleton,
} from "@mui/material";

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

const ListItem: FC<PropsWithChildren<IListItem>> = ({
  children,
  content,
  dataCy = DATA_CY_DEFAULT,
  dense = false,
  icon,
  loading = false,
  onClick: externalOnClick,
  selected = false,
  style,
}) => {
  const baseStyle: CSSProperties = useMemo(
    () => ({ cursor: !loading && externalOnClick ? "pointer" : "default" }),
    [externalOnClick, loading]
  );

  const onClick = useCallback(
    // TODO#lb: fix any type
    (event: any) => {
      suppressEvent(event);
      if (loading) {
        return;
      }

      externalOnClick && externalOnClick();
    },
    [externalOnClick, loading]
  );

  return (
    <MUIListItem
      data-cy={dataCy}
      dense={dense}
      onClick={onClick}
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
