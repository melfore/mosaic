import React, { CSSProperties, FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  Paper as MUIPaper,
  Table as MUITable,
  TableBody as MUITableBody,
  TableContainer as MUITableContainer,
  TableRow as MUITableRow,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import { ITable, ITableAction, ITableOnSortCallback } from "../../types/Table";
import { getComposedDataCy } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Checkbox from "../Checkbox";

import TableActionsCell from "./components/ActionsCell";
import TableDataCell from "./components/DataCell";
import TableEmptyState from "./components/EmptyState";
import TableHead from "./components/Head";
import TableHeadCell from "./components/HeadCell";
import TableLoader from "./components/Loader";
import TablePagination from "./components/Pagination";
import TableSelectionCell from "./components/SelectionCell";
import TableToolbar from "./components/Toolbar";
import {
  COLUMN_CHECKBOX_PATH,
  COLUMN_ROW_ACTIONS_PATH,
  PAGINATION_TOOLBAR_BORDER,
  PAGINATION_TOOLBAR_HEIGHT,
  TOOLBAR_HEIGHT,
  TOOLBAR_HEIGHT_MOBILE,
} from "./utils";

const CHECKBOX_SELECTION_WIDTH = 36;
const ROW_ACTION_DIMENSION = 48;

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
  scrollContainer: {
    label: "Table scroll container",
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
  showFilters,
  sorting: externalSorting = { path: null, ordering: null },
  sticky = false,
  style: externalStyle,
  tableLayout = "fixed",
  title,
}) => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("xs"));

  const getRows = useCallback((rows: any) => [...rows].map((row, index) => ({ ...row, __mosaicTableId: index })), []);

  const getSelectedRowsIndexes = useCallback(
    (rows: any[]): number[] =>
      rows
        .filter((row, index) =>
          !selectionFilter ? false : selectionFilter(row, { indexes: [index], multiple: false })
        )
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
      setSelectedRowsIndexes(() => {
        let selectedIndexes: number[] = [];
        if (selected) {
          selectedIndexes = new Array(rows.length).fill(0).map((_, index) => index);
        }

        if (onSelectionChange) {
          const selectedRows: any[] = selectedIndexes.map((index) => {
            const { __mosaicTableId, ...internalRow } = rows[index];
            return { ...internalRow };
          });

          onSelectionChange(selectedRows, {
            indexes: selectedIndexes,
            multiple: true,
          });
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
              .map(({ __mosaicTableId, ...row }) => ({ ...row })),
            { indexes: selectedIndexes, multiple: true }
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
          path: COLUMN_CHECKBOX_PATH,
          render: () => (
            <Checkbox
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.selectAll)}
              intermediate={!!selectedRowsIndexes.length && selectedRowsIndexes.length !== externalRows.length}
              onChange={onBulkSelection}
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
        {
          label: "",
          path: COLUMN_ROW_ACTIONS_PATH,
          width: `${ROW_ACTION_DIMENSION * rowActions.length}px`,
        },
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

  const selectedRowsData = useMemo(
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

  const paginated = useMemo(() => !!onPageChange || !!onPageSizeChange, [onPageChange, onPageSizeChange]);

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

  const wrapperStyle = useMemo(
    (): CSSProperties => ({
      height,
      overflowY: sticky ? "hidden" : "inherit",
      position: "relative",
      ...externalStyle,
    }),
    [externalStyle, height, sticky]
  );

  const scrollContainerStyle = useMemo((): CSSProperties | undefined => {
    let toolbarHeight = TOOLBAR_HEIGHT;
    if (mobile) {
      toolbarHeight = TOOLBAR_HEIGHT_MOBILE;
    }

    let offset = toolbarHeight;
    if (paginated) {
      offset += PAGINATION_TOOLBAR_BORDER + PAGINATION_TOOLBAR_HEIGHT;
    }

    let style: CSSProperties | undefined = undefined;
    if (sticky) {
      style = {
        height: `calc(100% - ${offset}px)`,
        overflowY: "auto",
      };
    }

    if (tableLayout === "auto") {
      return {
        ...style,
        overflowX: "auto",
      };
    }

    return style;
  }, [mobile, paginated, sticky, tableLayout]);

  const showHeaderFilters = useMemo(
    () => showFilters && columns.some((column) => !!column.renderFilter),
    [columns, showFilters]
  );

  return (
    <MUITableContainer component={MUIPaper} data-cy={dataCy} style={wrapperStyle}>
      {loading && <TableLoader />}
      {!hideHeader && (
        <TableToolbar
          actions={defaultActions}
          dataCy={dataCy}
          selectedRowsData={selectedRowsData}
          selectedRowsIndexes={selectedRowsIndexes}
          selectionActions={selectionActions}
          sticky={sticky}
          title={title}
        />
      )}
      <div style={scrollContainerStyle} data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.scrollContainer)}>
        <MUITable size="small" stickyHeader={sticky} style={{ tableLayout }}>
          <TableHead columns={columns} showFilters={showHeaderFilters} sticky={!hideHeader && sticky}>
            <MUITableRow>
              {columns.map((column, index) => (
                <TableHeadCell
                  key={`column-${column.path || index}`}
                  column={column}
                  dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.headerCell, column.label || `${index}`)}
                  onSort={onSortWrapper}
                  sortable={!!onSortChange}
                  sorting={sorting}
                  stickyHeader={false}
                />
              ))}
            </MUITableRow>
          </TableHead>
          <MUITableBody>
            {!loading && !externalRows.length ? (
              <TableEmptyState columns={columns.length} emptyState={emptyState} />
            ) : (
              rows.map(({ __mosaicTableId, ...row }, rowIndex) => {
                const key = `row-${__mosaicTableId}`;
                const rowSelected = isRowSelected(__mosaicTableId);
                const rowCallbackOptions = { indexes: [rowIndex], multiple: false };
                const style = getRowStyle ? getRowStyle(row, rowCallbackOptions) : {};
                const onRowSelection = () => onSelection(__mosaicTableId);

                return (
                  <MUITableRow key={key} style={style}>
                    {columns.map((column, columnIndex) => {
                      const { path } = column;
                      const key = `column-${path || columnIndex}`;

                      if (path === COLUMN_CHECKBOX_PATH) {
                        return (
                          <TableSelectionCell
                            key={key}
                            column={column}
                            onSelection={onRowSelection}
                            selected={rowSelected}
                          />
                        );
                      }

                      if (path === COLUMN_ROW_ACTIONS_PATH) {
                        return (
                          <TableActionsCell
                            key={key}
                            actions={rowActions}
                            column={column}
                            data={row}
                            dataCallbackOptions={rowCallbackOptions}
                            dataCy={dataCy}
                          />
                        );
                      }

                      return (
                        <TableDataCell
                          key={key}
                          column={column}
                          data={row}
                          dataCallbackOptions={rowCallbackOptions}
                          dataCy={dataCy}
                          onClick={onRowClick}
                        />
                      );
                    })}
                  </MUITableRow>
                );
              })
            )}
          </MUITableBody>
        </MUITable>
      </div>
      {paginated && (
        <TablePagination
          dataCy={dataCy}
          onPageChange={onPageChange!}
          onPageSizeChange={onPageSizeChange!}
          page={page}
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
          rowsTotal={rowsTotal}
          style={paginationStyle}
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
