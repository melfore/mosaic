/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, FC, MouseEvent, useCallback, useMemo } from "react";
import { TableCell as MUITableCell } from "@mui/material";

import { IBase } from "../../../../types/Base";
import { ITableColumn, ITableDataCallback, ITableDataCallbackOptions } from "../../../../types/Table";
import { getObjectProperty, suppressEvent } from "../../../../utils";
import { DEFAULT_Z_INDEX } from "../../utils";

interface ITableDataCell extends IBase {
  column: ITableColumn;
  data: any;
  dataCallbackOptions: ITableDataCallbackOptions;
  onClick?: ITableDataCallback<void>;
}

const TableDataCell: FC<ITableDataCell> = ({ column, data, dataCallbackOptions, onClick: externalOnClick }) => {
  const { padding: columnPadding, path, render, width } = column;

  const onClick = useCallback(
    (event: MouseEvent) => {
      suppressEvent(event);
      externalOnClick && externalOnClick(data, dataCallbackOptions);
    },
    [data, dataCallbackOptions, externalOnClick]
  );

  const padding = useMemo(
    () => (!columnPadding || columnPadding === "default" ? "normal" : columnPadding),
    [columnPadding]
  );

  const style = useMemo(
    (): CSSProperties => ({
      width,
      zIndex: DEFAULT_Z_INDEX,
    }),
    [width]
  );

  return (
    <MUITableCell onClick={onClick} padding={padding} style={style}>
      {render ? render(data, dataCallbackOptions) : getObjectProperty(data, path)}
    </MUITableCell>
  );
};

export default TableDataCell;
