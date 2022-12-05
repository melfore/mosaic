import React, { CSSProperties, FC, useMemo } from "react";
import { TableCell as MUITableCell, useTheme } from "@mui/material";

import { ITableHeadFilterCell } from "../../../../types/Table";
import { COLUMN_CHECKBOX_PATH, COLUMN_PRIMARY_ACTIONS_PATH } from "../../utils";

const TableHeadFilterCell: FC<ITableHeadFilterCell> = ({ column, dataCy }) => {
  const { path, padding: columnPadding, width } = column;

  const theme = useTheme();

  const padding = useMemo(
    () => (!columnPadding || columnPadding === "default" ? "normal" : columnPadding),
    [columnPadding]
  );

  const cellStyle = useMemo(() => {
    let style: CSSProperties | undefined;
    if (path === COLUMN_CHECKBOX_PATH || path === COLUMN_PRIMARY_ACTIONS_PATH) {
      style = {
        padding: `0 ${theme.spacing(1)}px`,
      };
    }

    if (width) {
      style = {
        ...style,
        width,
      };
    }

    style = {
      ...style,
      position: "initial",
    };

    return style;
  }, [path, theme, width]);

  return (
    <MUITableCell data-cy={dataCy} padding={padding} style={cellStyle} variant="head">
      {column.renderFilter}
    </MUITableCell>
  );
};

export default TableHeadFilterCell;
