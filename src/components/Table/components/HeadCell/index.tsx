import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { TableCell as MUITableCell, TableSortLabel as MUITableSortLabel, useTheme } from "@mui/material";

import { useMosaicContext } from "../../../../hooks/useMosaicContext";
import { ITableHeadCell } from "../../../../types/Table";
import { suppressEvent } from "../../../../utils";
import { COLUMN_CHECKBOX_PATH, TOOLBAR_HEIGHT, TOOLBAR_HEIGHT_MOBILE } from "../../utils";

const TableHeadCell: FC<ITableHeadCell> = ({
  column,
  dataCy,
  onSort,
  sortable: tableSortable,
  sorting,
  stickyHeader,
}) => {
  const { label, path, padding, render, sortable: columnSortable, width } = column;

  const {
    view: { mobile },
  } = useMosaicContext();
  const theme = useTheme();

  const cellPadding = useMemo(() => (!padding || padding === "default" ? "normal" : padding), [padding]);

  const toolbarHeight = useMemo(() => (mobile ? TOOLBAR_HEIGHT_MOBILE : TOOLBAR_HEIGHT), [mobile]);

  const cellStyle = useMemo(() => {
    let style: CSSProperties | undefined;
    if (path === COLUMN_CHECKBOX_PATH) {
      style = {
        padding: `0 ${theme.spacing(1)}`,
      };
    }

    if (stickyHeader) {
      style = {
        ...style,
        top: `${toolbarHeight}px`,
      };
    }

    if (width) {
      style = {
        ...style,
        width,
      };
    }

    return style;
  }, [path, stickyHeader, theme, toolbarHeight, width]);

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
      <MUITableCell padding={cellPadding} style={cellStyle} variant="head">
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
