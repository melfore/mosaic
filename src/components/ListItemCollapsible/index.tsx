import React, { FC, memo, PropsWithChildren, useMemo } from "react";
import { Collapse as MUICollapse } from "@mui/material";

import { Icons } from "../../types/Icon";
import { IListItemCollapsible } from "../../types/ListItem";
import { getComposedDataCy } from "../../utils";
import ListItem from "../ListItem";

export const DATA_CY_DEFAULT = "list-item-collapsible";

export const SUBPARTS_MAP = {
  header: {
    label: "Header",
  },
  collapse: {
    label: "Collapse",
  },
};

const ListItemCollapsible: FC<PropsWithChildren<IListItemCollapsible>> = ({
  children,
  content,
  dataCy = DATA_CY_DEFAULT,
  dense = false,
  header,
  loading = false,
  onClick,
  open = false,
  openTimeout = "auto",
  selected = false,
  style,
  unmountContent = false,
}) => {
  const icon = useMemo(() => (open ? Icons.up : Icons.down), [open]);

  const collapsibleContent = useMemo(() => content || children, [content, children]);

  return (
    <>
      <ListItem
        dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.header)}
        dense={dense}
        icon={icon}
        loading={loading}
        onClick={onClick}
        selected={selected}
        style={style}
      >
        {header}
      </ListItem>
      <MUICollapse
        data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.collapse)}
        in={open}
        timeout={openTimeout}
        unmountOnExit={unmountContent}
      >
        {collapsibleContent}
      </MUICollapse>
    </>
  );
};

export default memo(ListItemCollapsible);
