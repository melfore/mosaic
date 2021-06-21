import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { TableCell as MUITableCell, TableSortLabel as MUITableSortLabel, useTheme } from "@material-ui/core";

import { ITableColumn, ITableOnSortCallback, ITableSorting } from "../../../../types/Table";
import { suppressEvent } from "../../../../utils";
import { CHECKBOX_SELECTION_PATH, TOOLBAR_DIMENSION } from "../../utils";

interface ITableHeadCell {
  column: ITableColumn;
  onSort: ITableOnSortCallback;
  sortable: boolean;
  sorting: ITableSorting;
  stickyHeader: boolean;
}

const TableHeadCell: FC<ITableHeadCell> = ({ column, onSort, sortable: tableSortable, sorting, stickyHeader }) => {
  const { label, path, padding, render, width } = column;
  const theme = useTheme();

  const cellPadding = useMemo(() => padding || "default", [padding]);

  const cellStyle = useMemo(() => {
    let style: CSSProperties | undefined;
    if (path === CHECKBOX_SELECTION_PATH) {
      style = { padding: `0 ${theme.spacing(1)}px` };
    }

    if (stickyHeader) {
      style = { ...style, top: `${TOOLBAR_DIMENSION}px` };
    }

    if (width) {
      style = { ...style, width };
    }

    return style;
  }, [path, stickyHeader, theme, width]);

  const onSortWrapper = useCallback(
    (event: any) => {
      suppressEvent(event);

      const { ordering: sortCriteria, path: sortPath } = sorting;
      if (!sortPath || path !== sortPath) {
        onSort(path, "asc");
        return;
      }

      if (path === sortPath && sortCriteria === "asc") {
        onSort(path, "desc");
        return;
      }

      onSort(null, null);
    },
    [path, onSort, sorting]
  );

  const sortActive = useMemo(() => path === sorting.path, [path, sorting]);

  const sortDirection = useMemo(() => (path === sorting.path ? sorting.ordering || undefined : "asc"), [path, sorting]);

  if (path === CHECKBOX_SELECTION_PATH) {
    return (
      <MUITableCell padding={cellPadding} style={cellStyle} variant="head">
        {!render ? null : render({})}
      </MUITableCell>
    );
  }

  return (
    <MUITableCell padding={cellPadding} style={cellStyle} variant="head">
      {!tableSortable ? (
        label
      ) : (
        <MUITableSortLabel active={sortActive} direction={sortDirection} onClick={onSortWrapper}>
          {label}
        </MUITableSortLabel>
      )}
    </MUITableCell>
  );
};

export default TableHeadCell;
