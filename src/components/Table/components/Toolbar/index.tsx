import React, { CSSProperties, FC, useMemo } from "react";
import { Toolbar as MUIToolbar, useTheme } from "@material-ui/core";

import { ITableAction } from "../../../../types/Table";
import Typography from "../../../Typography";
import TableToolbarAction from "../ToolbarAction";

interface ITableToolbar {
  actions: ITableAction[];
  dataCy: string;
  selectedRows?: number;
  selectedRowsData: any[];
  selectionActions: ITableAction[];
  sticky?: boolean;
  title: string;
}

// TODO#lb: to be put at lowest level
const SUBPARTS_MAP = {
  action: {
    label: "Action (with label)",
    value: (label = "{label}") => `action-${label}`,
  },
};

const TableToolbar: FC<ITableToolbar> = ({
  actions: defaultActions,
  dataCy,
  selectedRows = 0,
  selectedRowsData,
  selectionActions,
  sticky = false,
  title,
}) => {
  const theme = useTheme();

  const actions = useMemo(
    () => (!selectedRows ? defaultActions : selectionActions),
    [defaultActions, selectedRows, selectionActions]
  );

  const positioning = useMemo(
    (): CSSProperties => (!sticky ? { position: "inherit" } : { position: "sticky", top: 0, zIndex: 1 }),
    [sticky]
  );

  const style = useMemo(
    (): CSSProperties => ({
      ...positioning,
      alignItems: "center",
      backgroundColor: !selectedRows ? "inherit" : theme.palette.action.selected,
      display: "flex",
      justifyContent: "space-between",
    }),
    [positioning, selectedRows, theme]
  );

  return (
    <MUIToolbar style={style}>
      <Typography variant="title">{!selectedRows ? title : `${selectedRows} row(s) selected`}</Typography>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
        {actions.map((action, index) => (
          <TableToolbarAction
            {...action}
            key={`action-${action.label}`}
            data={selectedRowsData}
            dataCy={dataCy}
            index={index}
            subpart={SUBPARTS_MAP.action}
          />
        ))}
      </div>
    </MUIToolbar>
  );
};

export default TableToolbar;
