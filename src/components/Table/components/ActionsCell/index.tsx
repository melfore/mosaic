import React, { CSSProperties, FC, useMemo } from "react";
import { TableCell as MUITableCell, useTheme } from "@mui/material";

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
  const theme = useTheme();

  const { padding: columnPadding, width } = column;

  const padding = useMemo(
    () => (!columnPadding || columnPadding === "default" ? "normal" : columnPadding),
    [columnPadding]
  );

  const style = useMemo((): CSSProperties => {
    if (position === "row") {
      return {
        ...rowStyle,
        width,
      };
    }

    const backgroundColor = rowStyle?.backgroundColor || theme.palette.background.paper;

    return {
      ...rowStyle,
      backgroundColor,
      left: 0,
      padding: `0 ${theme.spacing(1)}px`,
      position: "sticky",
      width,
      zIndex: 1,
    };
  }, [position, rowStyle, theme, width]);

  const wrapperStyle = useMemo(
    (): CSSProperties => ({
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
    }),
    []
  );

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
