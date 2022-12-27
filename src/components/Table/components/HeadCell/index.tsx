import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { TableCell as MUITableCell, TableSortLabel as MUITableSortLabel, useTheme } from "@mui/material";

import { ITableHeadCell } from "../../../../types/Table";
import { suppressEvent } from "../../../../utils";
import { COLUMN_CHECKBOX_PATH, COLUMN_PRIMARY_ACTIONS_PATH, HEADER_Z_INDEX } from "../../utils";

const TableHeadCell: FC<ITableHeadCell> = ({
  column,
  dataCy,
  onSort,
  sortable: tableSortable,
  sorting,
  stickyHeader,
  stickySelection,
}) => {
  const { label, path, padding, render, sortable: columnSortable, width } = column;

  const theme = useTheme();

  const cellPadding = useMemo(() => (!padding || padding === "default" ? "normal" : padding), [padding]);

  const cellStyle = useMemo(() => {
    let style: CSSProperties | undefined;
    if (path === COLUMN_CHECKBOX_PATH || path === COLUMN_PRIMARY_ACTIONS_PATH) {
      style = {
        padding: `0 ${theme.spacing(1)}`,
      };
    }

    if (width) {
      style = {
        ...style,
        width,
      };
    }

    return style;
  }, [path, theme, width]);

  const cellCheckboxStyle = useMemo((): CSSProperties => {
    if (!stickySelection) {
      return { ...cellStyle };
    }

    const backgroundColor = theme.palette.background[stickyHeader ? "default" : "paper"];

    return {
      ...cellStyle,
      backgroundColor,
      left: 0,
      position: "sticky",
      top: 0,
      zIndex: HEADER_Z_INDEX + 1,
    };
  }, [cellStyle, stickyHeader, stickySelection, theme]);

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

  const sortable = useMemo(() => {
    if (!tableSortable) {
      return false;
    }

    if (columnSortable === undefined || columnSortable === null) {
      return tableSortable;
    }

    return columnSortable;
  }, [columnSortable, tableSortable]);

  const sortActive = useMemo(() => path === sorting.path, [path, sorting]);

  const sortDirection = useMemo(() => (path === sorting.path ? sorting.ordering || undefined : "asc"), [path, sorting]);

  if (path === COLUMN_CHECKBOX_PATH) {
    return (
      <MUITableCell padding={cellPadding} style={cellCheckboxStyle} variant="head">
        {!render ? null : render({}, { indexes: [], multiple: false })}
      </MUITableCell>
    );
  }

  return (
    <MUITableCell data-cy={dataCy} padding={cellPadding} style={cellStyle} variant="head">
      {!sortable ? (
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
