import React, { CSSProperties, FC, useMemo } from "react";
import { Toolbar as MUIToolbar, useTheme } from "@mui/material";

import { ITableAction, ITableDataCallbackOptions } from "../../../../types/Table";
import Typography from "../../../Typography";
import TableToolbarAction from "../ToolbarAction";

interface ITableToolbar {
  actions: ITableAction[];
  dataCy: string;
  selectedRowsData: any[];
  selectedRowsIndexes: number[];
  selectionActions: ITableAction[];
  sticky?: boolean;
  title: string;
}

const TableToolbar: FC<ITableToolbar> = ({
  actions: defaultActions,
  dataCy,
  selectedRowsData,
  selectedRowsIndexes,
  selectionActions,
  sticky = false,
  title,
}) => {
  const theme = useTheme();

  const selectedRows = useMemo(() => selectedRowsIndexes.length, [selectedRowsIndexes]);

  const actions = useMemo(
    () => (!selectedRows ? defaultActions : selectionActions),
    [defaultActions, selectedRows, selectionActions]
  );

  const dataCallbackOptions = useMemo(
    (): ITableDataCallbackOptions => ({ indexes: selectedRowsIndexes, multiple: !!selectedRows }),
    [selectedRows, selectedRowsIndexes]
  );

  const positioning = useMemo(
    (): CSSProperties => (!sticky ? { position: "inherit" } : { position: "sticky", top: 0, zIndex: 1 }),
    [sticky]
  );

  const style = useMemo(
    (): CSSProperties => ({
      ...positioning,
      alignItems: "center",
      backgroundColor: !selectedRows ? "inherit" : theme.palette.background.default,
      display: "flex",
      justifyContent: "space-between",
    }),
    [positioning, selectedRows, theme]
  );

  const toolbarActions = useMemo(
    () =>
      actions.map((action, index) => (
        <TableToolbarAction
          {...action}
          key={`action-${action.label}`}
          data={selectedRowsData}
          dataCallbackOptions={dataCallbackOptions}
          dataCy={dataCy}
        />
      )),
    [actions, dataCallbackOptions, dataCy, selectedRowsData]
  );

  return (
    <MUIToolbar style={style}>
      <Typography variant="title">{!selectedRows ? title : `${selectedRows} row(s) selected`}</Typography>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>{toolbarActions}</div>
    </MUIToolbar>
  );
};

export default TableToolbar;
