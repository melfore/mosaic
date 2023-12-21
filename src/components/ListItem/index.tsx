import React, { CSSProperties, FC, MouseEvent, PropsWithChildren, useCallback, useMemo } from "react";
import {
  ListItemButton as MUIListItemButton,
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
  selected: externalSelected = false,
  style,
}) => {
  const onClick = useCallback(
    (event: MouseEvent) => {
      suppressEvent(event);
      if (loading) {
        return;
      }

      externalOnClick && externalOnClick();
    },
    [externalOnClick, loading]
  );

  const itemContent = useMemo(() => {
    if (loading) {
      return <MUISkeleton />;
    }

    return content || children;
  }, [content, children, loading]);

  const selected = useMemo(() => !loading && externalSelected, [externalSelected, loading]);

  const wrapperStyle = useMemo(
    (): CSSProperties => ({
      cursor: !loading && !!externalOnClick ? "pointer" : "default",
      ...style,
    }),
    [externalOnClick, loading, style]
  );

  return (
    <MUIListItemButton data-cy={dataCy} dense={dense} onClick={onClick} selected={selected} style={wrapperStyle}>
      {icon && (
        <MUIListItemIcon>
          <IconWrapper dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.icon)} icon={icon} loading={loading} />
        </MUIListItemIcon>
      )}
      <MUIListItemText data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.content, loading)} disableTypography>
        {itemContent}
      </MUIListItemText>
    </MUIListItemButton>
  );
};

export default ListItem;
