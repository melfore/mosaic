import React, { CSSProperties, FC, ReactNode, useMemo } from "react";
import { TableCell as MUITableCell, TableRow as MUITableRow } from "@material-ui/core";

import Typography from "../../../Typography";

interface ITableEmptyState {
  columns: number;
  emptyState?: ReactNode;
}

const TableEmptyState: FC<ITableEmptyState> = ({ columns, emptyState }) => {
  const emptyStateComponent = useMemo(() => !!emptyState && typeof emptyState !== "string", [emptyState]);

  const style = useMemo(
    (): CSSProperties => ({
      textAlign: !emptyStateComponent ? "center" : "inherit",
    }),
    [emptyStateComponent]
  );

  const content = useMemo(() => {
    if (!emptyState) {
      return <Typography>No data to display</Typography>;
    }

    return emptyState;
  }, [emptyState]);

  return (
    <MUITableRow key="row-no-data">
      <MUITableCell key="column-no-data" colSpan={columns} padding="normal" style={style}>
        {content}
      </MUITableCell>
    </MUITableRow>
  );
};

export default TableEmptyState;
