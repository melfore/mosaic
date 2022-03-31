import React, { CSSProperties, FC, useMemo } from "react";
import { TableCell as MUITableCell } from "@material-ui/core";

import { IBase } from "../../../../types/Base";
import { ITableAction, ITableColumn, ITableDataCallbackOptions } from "../../../../types/Table";
import TableRowAction from "../RowAction";

interface ITableActionsCell extends IBase {
  actions: ITableAction[];
  column: ITableColumn;
  data: any;
  dataCallbackOptions: ITableDataCallbackOptions;
  dataCy: string;
}

const TableActionsCell: FC<ITableActionsCell> = ({ actions, column, data, dataCallbackOptions, dataCy }) => {
  const { padding: columnPadding, width } = column;

  const padding = useMemo(() => columnPadding || "normal", [columnPadding]);

  const style = useMemo(
    (): CSSProperties => ({
      width,
    }),
    [width]
  );

  return (
    <MUITableCell padding={padding} style={style}>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "flex-end" }}>
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
