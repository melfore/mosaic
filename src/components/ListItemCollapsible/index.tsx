import React, { FC, Fragment } from "react";
import { Collapse as MUICollapse } from "@material-ui/core";
import { IListItemCollapsible } from "../../types/ListItem";
import ListItem from "../ListItem";
import { Icons } from "../../types/Icon";
import { getDataCyForSubComponent } from "../../utils";

export const DATA_CY_DEFAULT = "list-item-collapsible";

const ListItemCollapsible: FC<IListItemCollapsible> = ({
  children,
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
        dataCy={getDataCyForSubComponent(dataCy, "header")}
        dense={dense}
        icon={open ? Icons.up : Icons.down}
        loading={loading}
        onClick={onClick}
        selected={selected}
      >
        {header}
      </ListItem>
      <MUICollapse in={open} timeout={openTimeout} unmountOnExit={unmountContent}>
        {children}
      </MUICollapse>
    </Fragment>
  );
};

export default ListItemCollapsible;
