import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { TableCell as MUITableCell, useTheme } from "@mui/material";

import { IBase } from "../../../../types/Base";
import { ITableColumn } from "../../../../types/Table";
import Checkbox from "../../../Checkbox";

interface ITableSelectionCell extends IBase {
  column: ITableColumn;
  onSelection: () => void;
  selected: boolean;
}

const TableSelectionCell: FC<ITableSelectionCell> = ({ column, onSelection, selected }) => {
  const theme = useTheme();

  const { padding: columnPadding, width } = column;

  const onChange = useCallback((_: boolean) => onSelection(), [onSelection]);

  const padding = useMemo(
    () => (!columnPadding || columnPadding === "default" ? "normal" : columnPadding),
    [columnPadding]
  );

  const style = useMemo(
    (): CSSProperties => ({
      padding: `0 ${theme.spacing(1)}`,
      width,
    }),
    [theme, width]
  );

  return (
    <MUITableCell padding={padding} style={style}>
      <Checkbox size="small" onChange={onChange} value={selected} />
    </MUITableCell>
  );
};

export default TableSelectionCell;
