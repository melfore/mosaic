import React, { FC, Fragment } from "react";
import { Collapse as MUICollapse } from "@material-ui/core";
import { ListCollapsibleItemType } from "../../types/ListItem";
import ListItem from "../ListItem";
import { Icons } from "../../types/Icon";
import { TypographyVariants } from "../../types/Typography";

const ListCollapsibleItem: FC<ListCollapsibleItemType> = ({
  children,
  dense = false,
  loading = false,
  onClick,
  open = false,
  openTimeout = "auto",
  selected = false,
  title,
  titleVariant = TypographyVariants.body,
  unmountContent = false,
}) => {
  return (
    <Fragment>
      <ListItem
        dense={dense}
        icon={open ? Icons.up : Icons.down}
        loading={loading}
        onClick={onClick}
        selected={selected}
        title={title}
        titleVariant={titleVariant}
      />
      <MUICollapse in={open} timeout={openTimeout} unmountOnExit={unmountContent}>
        {children}
      </MUICollapse>
    </Fragment>
  );
};

export default ListCollapsibleItem;
