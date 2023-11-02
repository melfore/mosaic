import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { TableCell as MUITableCell, useTheme } from "@mui/material";

import { IBase } from "../../../../types/Base";
import { ITableColumn } from "../../../../types/Table";
import Checkbox from "../../../Checkbox";
import { SELECTION_Z_INDEX } from "../../utils";

interface ITableSelectionCell extends IBase {
  column: ITableColumn;
  onSelection: () => void;
  selected: boolean;
  sticky: boolean;
  style?: CSSProperties;
}

const TableSelectionCell: FC<ITableSelectionCell> = ({ column, onSelection, selected, sticky, style: rowStyle }) => {
  const theme = useTheme();

  const { padding: columnPadding, width } = column;

  const onChange = useCallback(() => onSelection(), [onSelection]);

  const padding = useMemo(
    () => (!columnPadding || columnPadding === "default" ? "normal" : columnPadding),
    [columnPadding]
  );

  const style = useMemo((): CSSProperties => {
    if (!sticky) {
      return {
        ...rowStyle,
        padding: `0 ${theme.spacing(1)}`,
        width,
      };
    }

    const backgroundColor = rowStyle?.backgroundColor || theme.palette.background.paper;

    return {
      ...rowStyle,
      backgroundColor,
      left: 0,
      padding: `0 ${theme.spacing(1)}`,
      position: "sticky",
      width,
      zIndex: SELECTION_Z_INDEX,
    };
  }, [rowStyle, sticky, theme, width]);

  return (
    <MUITableCell padding={padding} style={style}>
      <Checkbox size="small" onChange={onChange} value={selected} />
    </MUITableCell>
  );
};

export default TableSelectionCell;
