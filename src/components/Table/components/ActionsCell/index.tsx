/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, FC, useMemo } from "react";
import { TableCell as MUITableCell } from "@mui/material";

import { IBase } from "../../../../types/Base";
import {
  ITableAction,
  ITableColumn,
  ITableDataCallbackOptions,
  ITableRowActionPosition,
} from "../../../../types/Table";
import TableRowAction from "../RowAction";

interface ITableActionsCell extends IBase {
  actions: ITableAction[];
  column: ITableColumn;
  data: any;
  dataCallbackOptions: ITableDataCallbackOptions;
  dataCy: string;
  position: ITableRowActionPosition;
}

const TableActionsCell: FC<ITableActionsCell> = ({
  actions,
  column,
  data,
  dataCallbackOptions,
  dataCy,
  position,
  style: rowStyle,
}) => {
  const { padding: columnPadding, width } = column;

  const padding = useMemo(
    () => (!columnPadding || columnPadding === "default" ? "normal" : columnPadding),
    [columnPadding]
  );

  const style = useMemo(
    (): CSSProperties => ({
      ...rowStyle,
      width,
    }),
    [rowStyle, width]
  );

  const wrapperStyle = useMemo((): CSSProperties => {
    const justifyContent = position === "primary" ? "center" : "flex-end";

    return {
      alignItems: "center",
      display: "flex",
      justifyContent,
    };
  }, [position]);

  return (
    <MUITableCell padding={padding} style={style}>
      <div style={wrapperStyle}>
        {actions.map((action) => {
          const { label } = action;
          const key = `action-${label}`;

          return (
            <TableRowAction
              key={key}
              action={action}
              dataCallbackOptions={dataCallbackOptions}
              data={data}
              dataCy={dataCy}
            />
          );
        })}
      </div>
    </MUITableCell>
  );
};

export default TableActionsCell;
