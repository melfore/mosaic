import React, { CSSProperties, FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  CircularProgress as MUICircularProgress,
  Paper as MUIPaper,
  Table as MUITable,
  TableBody as MUITableBody,
  TableCell as MUITableCell,
  TableContainer as MUITableContainer,
  TableHead as MUITableHead,
  TableRow as MUITableRow,
  Toolbar as MUIToolbar,
  useTheme,
} from "@material-ui/core";

import { Icons } from "../../types/Icon";
import { ITable, ITableAction, ITableOnSortCallback } from "../../types/Table";
import { TypographyVariants } from "../../types/Typography";
import { getComposedDataCy, getObjectProperty, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Checkbox from "../Checkbox";
import IconButton from "../IconButton";
import Typography from "../Typography";

import TableHeadCell from "./components/HeadCell";
import TablePagination from "./components/Pagination";
import TableToolbarAction from "./components/ToolbarAction";
import { CHECKBOX_SELECTION_PATH, TOOLBAR_DIMENSION } from "./utils";

const CHECKBOX_SELECTION_WIDTH = 36;
const ROW_ACTION_DIMENSION = 48;
const ROW_ACTION_PATH = "row-actions";

const DEFAULT_PAGESIZE = 10;
const DEFAULT_PAGESIZE_OPTIONS = [5, 10, 25];

export const DATA_CY_DEFAULT = "table";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "title", type: "string" }];
export const SUBPARTS_MAP = {
  action: {
    label: "Action (with label)",
    value: (label = "{label}") => `action-${label}`,
  },
  headerCell: {
    label: "Header Cell (with label)",
    value: (label = "{label}") => `header-cell-${label}`,
  },
  pagination: {
    label: "Pagination (with label)",
    value: (label = "{label}") => `pagination-${label}`,
  },
  selectAll: {
    label: "Select All",
  },
};

const Table: FC<ITable> = ({
  actions = [],
  actionsOrder = "list",
  columns: externalColumns,
  dataCy = DATA_CY_DEFAULT,
  emptyState,
  getRowStyle,
  height = "100%",
  hideHeader = false,
  loading = false,
  onPageChange,
  onPageSizeChange,
  onRowClick,
  onSelectionChange,
  onSortChange,
  page = 0,
  pageSize = DEFAULT_PAGESIZE,
  pageSizeOptions = DEFAULT_PAGESIZE_OPTIONS,
  rows: externalRows = [],
  rowsTotal = 0,
  selectionFilter,
  sorting: externalSorting = { path: null, ordering: null },
  sticky = false,
  style,
  title,
}) => {
  const theme = useTheme();

  const getRows = useCallback((rows: any) => [...rows].map((row, index) => ({ ...row, __mosaicTableId: index })), []);

  const getSelectedRowsIndexes = useCallback(
    (rows: any): number[] =>
      rows
        .filter((row: any) => (!selectionFilter ? false : selectionFilter(row)))
        .map(({ __mosaicTableId }: any) => __mosaicTableId),
    [selectionFilter]
  );

  const [rows, setRows] = useState(getRows(externalRows));
  const [selectedRowsIndexes, setSelectedRowsIndexes] = useState(getSelectedRowsIndexes(rows));
  const [sorting, setSorting] = useState(externalSorting);

  useEffect(() => {
    const rows = getRows(externalRows);
    const selectedRowsIndexes = getSelectedRowsIndexes(rows);
    setRows(rows);
    setSelectedRowsIndexes(selectedRowsIndexes);
  }, [externalRows, getRows, getSelectedRowsIndexes]);

  const isRowSelected = useCallback((index: number) => selectedRowsIndexes.includes(index), [selectedRowsIndexes]);

  const onBulkSelection = useCallback(
    (selected: boolean) =>
      setSelectedRowsIndexes((prevSelectedIndexes) => {
        let selectedIndexes = prevSelectedIndexes;
        if (!selected) {
          selectedIndexes = [];
        } else {
          selectedIndexes = new Array(rows.length).fill(0).map((_, index) => index);
        }

        if (onSelectionChange) {
          onSelectionChange(!selected ? [] : rows.map(({ __mosaicTableId, ...internalRow }) => ({ ...internalRow })));
        }

        return selectedIndexes;
      }),
    [rows, onSelectionChange]
  );

  const onSelection = useCallback(
    (index: number) =>
      setSelectedRowsIndexes((prevSelectedIndexes) => {
        let selectedIndexes = prevSelectedIndexes;
        if (!isRowSelected(index)) {
          selectedIndexes = [...selectedIndexes, index];
        } else {
          selectedIndexes = prevSelectedIndexes.filter((selectedIndex) => selectedIndex !== index);
        }

        if (onSelectionChange) {
          onSelectionChange(
            rows
              .filter((_, index) => selectedIndexes.includes(index))
              .map(({ __mosaicTableId, ...row }) => ({ ...row }))
          );
        }

        return selectedIndexes;
      }),
    [rows, isRowSelected, onSelectionChange]
  );

  const { defaultActions, columns, rowActions, selectionActions } = useMemo(() => {
    let columns = [...externalColumns];
    if (onSelectionChange) {
      columns = [
        {
          label: "",
          padding: "checkbox",
          path: CHECKBOX_SELECTION_PATH,
          render: () => (
            <Checkbox
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.selectAll)}
              intermediate={!!selectedRowsIndexes.length && selectedRowsIndexes.length !== externalRows.length}
              onChange={(selected) => onBulkSelection(selected)}
              size="small"
              value={loading ? false : selectedRowsIndexes.length === externalRows.length}
            />
          ),
          width: `${CHECKBOX_SELECTION_WIDTH}px`,
        },
        ...columns,
      ];
    }

    let rowActions: ITableAction[] = [];
    let selectionActions: ITableAction[] = [];
    let toolbarActions: ITableAction[] = [];

    actions.forEach((action) => {
      const { hidden, position } = action;
      if (hidden) {
        return;
      }

      switch (position) {
        case "toolbar":
        case "icon":
          toolbarActions = [...toolbarActions, { ...action }];
          return;
        case "row":
          rowActions = [...rowActions, { ...action }];
          return;
        case "selection":
          selectionActions = [...selectionActions, { ...action }];
          return;
        default:
          toolbarActions = [...toolbarActions, { ...action, position: "toolbar" }];
          return;
      }
    });

    if (!!rowActions.length) {
      columns = [
        ...columns,
        { label: "", path: ROW_ACTION_PATH, width: `${ROW_ACTION_DIMENSION * rowActions.length}px` },
      ];
    }

    let defaultActions = toolbarActions;
    switch (actionsOrder) {
      case "buttons-first":
        defaultActions.sort(({ position }, { position: another }) => -1 * position!.localeCompare(another!));
        break;
      case "icons-first":
        defaultActions.sort(({ position }, { position: another }) => position!.localeCompare(another!));
        break;
      default:
        break;
    }

    return { defaultActions, columns, rowActions, selectionActions };
  }, [
    actions,
    actionsOrder,
    externalColumns,
    dataCy,
    loading,
    externalRows,
    selectedRowsIndexes,
    onBulkSelection,
    onSelectionChange,
  ]);

  const onCallbackData = useMemo(
    () =>
      rows
        .filter((_, index) => selectedRowsIndexes.includes(index))
        .map(({ __mosaicTableId, ...internalRow }) => ({ ...internalRow })),
    [rows, selectedRowsIndexes]
  );

  const onSortWrapper: ITableOnSortCallback = useCallback(
    (path, ordering) => {
      setSorting({ path, ordering });
      onSortChange && onSortChange(path, ordering);
    },
    [onSortChange]
  );

  const paginationStyle = useMemo((): CSSProperties => {
    const DEFAULT_PAGINATION_STYLE: CSSProperties = { backgroundColor: "inherit", position: "inherit" };
    if (!sticky) {
      return DEFAULT_PAGINATION_STYLE;
    }

    return {
      ...DEFAULT_PAGINATION_STYLE,
      borderTop: `1px solid ${theme.palette.divider}`,
      bottom: 0,
      position: "sticky",
    };
  }, [sticky, theme]);

  return (
    <MUITableContainer component={MUIPaper} data-cy={dataCy} style={{ height, position: "relative", ...style }}>
      {loading && (
        <div
          style={{
            alignItems: "center",
            backgroundColor: theme.palette.action.hover,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            zIndex: 2,
            ...(!hideHeader && sticky
              ? { height: `calc(100% - ${TOOLBAR_DIMENSION}px)`, top: `${TOOLBAR_DIMENSION}px` }
              : { height: "100%", top: 0 }),
          }}
        >
          <MUICircularProgress />
        </div>
      )}
      {!hideHeader && (
        <MUIToolbar
          style={{
            alignItems: "center",
            backgroundColor: !selectedRowsIndexes.length ? "inherit" : theme.palette.action.selected,
            display: "flex",
            justifyContent: "space-between",
            ...(!sticky ? { position: "inherit" } : { position: "sticky", top: 0, zIndex: 1 }),
          }}
        >
          <Typography variant={TypographyVariants.title}>
            {!selectedRowsIndexes.length ? title : `${selectedRowsIndexes.length} row(s) selected`}
          </Typography>
          <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
            {(!selectedRowsIndexes.length ? defaultActions : selectionActions).map((action, index) => (
              <TableToolbarAction
                {...action}
                key={`action-${action.label}`}
                data={onCallbackData}
                dataCy={dataCy}
                index={index}
                subpart={SUBPARTS_MAP.action}
              />
            ))}
          </div>
        </MUIToolbar>
      )}
      <MUITable size="small" stickyHeader={sticky} style={{ tableLayout: "fixed" }}>
        <MUITableHead>
          <MUITableRow>
            {columns.map((column, index) => (
              <TableHeadCell
                key={`column-${column.path || index}`}
                column={column}
                dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.headerCell, column.label || `${index}`)}
                onSort={onSortWrapper}
                sortable={!!onSortChange}
                sorting={sorting}
                stickyHeader={!hideHeader && sticky}
              />
            ))}
          </MUITableRow>
        </MUITableHead>
        <MUITableBody>
          {!loading && !externalRows.length ? (
            <MUITableRow key={`row-no-data`}>
              <MUITableCell
                key={`column-no-data`}
                colSpan={columns.length}
                padding="normal"
                style={{ textAlign: "center" }}
              >
                {emptyState || <Typography>No data to display</Typography>}
              </MUITableCell>
            </MUITableRow>
          ) : (
            rows.map(({ __mosaicTableId, ...row }) => (
              <MUITableRow key={`row-${__mosaicTableId}`} style={getRowStyle ? getRowStyle(row) : {}}>
                {columns.map(({ padding, path, render, width }, columnIndex) => (
                  <MUITableCell
                    key={`column-${path || columnIndex}`}
                    onClick={(event) => {
                      if (path === CHECKBOX_SELECTION_PATH || path === ROW_ACTION_PATH) {
                        return;
                      }

                      suppressEvent(event);
                      onRowClick && onRowClick(row);
                    }}
                    padding={padding || "normal"}
                    style={{
                      width,
                      ...(path === CHECKBOX_SELECTION_PATH ? { padding: `0 ${theme.spacing(1)}px` } : {}),
                    }}
                  >
                    {path === CHECKBOX_SELECTION_PATH ? (
                      <Checkbox
                        size="small"
                        onChange={(selected) => onSelection(__mosaicTableId)}
                        value={isRowSelected(__mosaicTableId)}
                      />
                    ) : path === ROW_ACTION_PATH ? (
                      <div style={{ alignItems: "center", display: "flex", justifyContent: "flex-end" }}>
                        {rowActions.map(({ callback, disabled, icon, label }) => {
                          let rowActionDisabled = false;
                          if (typeof disabled === "boolean") {
                            rowActionDisabled = disabled;
                          } else {
                            rowActionDisabled = disabled ? disabled(row) : false;
                          }

                          return (
                            <IconButton
                              key={`action-${label}`}
                              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.action, label)}
                              disabled={rowActionDisabled}
                              icon={icon || Icons.settings}
                              onClick={() => callback(row)}
                              size="small"
                            />
                          );
                        })}
                      </div>
                    ) : render ? (
                      render(row)
                    ) : (
                      getObjectProperty(row, path)
                    )}
                  </MUITableCell>
                ))}
              </MUITableRow>
            ))
          )}
        </MUITableBody>
      </MUITable>
      {(onPageChange || onPageSizeChange) && (
        <TablePagination
          dataCy={dataCy}
          onPageChange={onPageChange!}
          onPageSizeChange={onPageSizeChange!}
          page={page}
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
          rowsTotal={rowsTotal}
          style={paginationStyle}
          subpart={SUBPARTS_MAP.pagination}
        />
      )}
    </MUITableContainer>
  );
};

export const TableWithProps = Table;

export default localized(Table, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
