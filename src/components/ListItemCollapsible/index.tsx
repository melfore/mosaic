import React, { FC, Fragment } from "react";
import { Collapse as MUICollapse } from "@material-ui/core";

import { Icons } from "../../types/Icon";
import { IListItemCollapsible } from "../../types/ListItem";
import { getComposedDataCy } from "../../utils";
import ListItem from "../ListItem";

export const DATA_CY_DEFAULT = "list-item-collapsible";

const ListItemCollapsible: FC<IListItemCollapsible> = ({
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
  unmountContent = false,
}) => {
  return (
    <Fragment>
      <ListItem
        dataCy={getComposedDataCy(dataCy, "header")}
        dense={dense}
        icon={open ? Icons.up : Icons.down}
        loading={loading}
        onClick={onClick}
        selected={selected}
      >
        {header}
      </ListItem>
      <MUICollapse
        data-cy={getComposedDataCy(dataCy, "collapse")}
        in={open}
        timeout={openTimeout}
        unmountOnExit={unmountContent}
      >
        {content || children}
      </MUICollapse>
    </Fragment>
  );
};

export default ListItemCollapsible;
