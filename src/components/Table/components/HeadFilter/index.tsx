import React, { CSSProperties, FC, useMemo } from "react";
import { TableCell as MUITableCell, useTheme } from "@material-ui/core";

import { ITableHeadFilterCell } from "../../../../types/Table";
import { COLUMN_CHECKBOX_PATH, COLUMN_PRIMARY_ACTIONS_PATH } from "../../utils";

const TableHeadFilterCell: FC<ITableHeadFilterCell> = ({ column, dataCy }) => {
  const { path, padding, width } = column;

  const theme = useTheme();

  const cellPadding = useMemo(() => padding || "normal", [padding]);

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
    <MUITableCell data-cy={dataCy} padding={cellPadding} style={cellStyle} variant="head">
      {column.renderFilter}
    </MUITableCell>
  );
};

export default TableHeadFilterCell;
