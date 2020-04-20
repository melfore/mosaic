import React, { forwardRef } from "react";
import { Column as MaterialTableColumnType, Options as MaterialTableOptionsType } from "material-table";
import { Icons, IconSize } from "../../types/Icon";
import { TableColumnType } from "../../types/Table";
import Icon from "../Icon";

export const DEFAULT_TABLE_OPTIONS: MaterialTableOptionsType = {
  draggable: false,
  emptyRowsWhenPaging: false,
};

export const columnAdapter = (column: TableColumnType): MaterialTableColumnType<object> => {
  const { label, path, render } = column;
  return {
    field: path,
    render,
    title: label,
  };
};

export const iconAdapter = (name: Icons, size = IconSize.default) =>
  forwardRef((props: any, ref: any) => {
    return <Icon forwarded={{ ...props, ref }} name={name} size={size} />;
  });
