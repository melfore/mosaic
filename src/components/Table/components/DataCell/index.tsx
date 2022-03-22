import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { TableCell as MUITableCell } from "@material-ui/core";

import { IBase } from "../../../../types/Base";
import { ITableColumn, ITableDataCallback, ITableDataCallbackOptions } from "../../../../types/Table";
import { getObjectProperty, suppressEvent } from "../../../../utils";

interface ITableDataCell extends IBase {
  column: ITableColumn;
  data: any;
  dataCallbackOptions: ITableDataCallbackOptions;
  onClick?: ITableDataCallback<void>;
}

const TableDataCell: FC<ITableDataCell> = ({ column, data, dataCallbackOptions, onClick: externalOnClick }) => {
  const { padding: columnPadding, path, render, width } = column;

  const onClick = useCallback(
    (event) => {
      suppressEvent(event);
      externalOnClick && externalOnClick(data, dataCallbackOptions);
    },
    [data, dataCallbackOptions, externalOnClick]
  );

  const padding = useMemo(() => columnPadding || "normal", [columnPadding]);

  const style = useMemo(
    (): CSSProperties => ({
      width,
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
