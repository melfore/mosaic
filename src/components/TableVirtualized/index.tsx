/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { CSSProperties, forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { TableComponents, TableVirtuoso } from "react-virtuoso";
import {
  Paper as MUIPaper,
  Table as MUITable,
  TableBody as MUITableBody,
  TableContainer as MUITableContainer,
  TableRow as MUITableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ITable, ITableAction, ITableColumn, ITableDataCallback, ITableOnSortCallback } from "../../types/Table";
import { getComposedDataCy } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Checkbox from "../Checkbox";
import TableActionsCell from "../Table/components/ActionsCell";
import TableDataCell from "../Table/components/DataCell";
import TableEmptyState from "../Table/components/EmptyState";
import TableHead from "../Table/components/Head";
import TableHeadCell from "../Table/components/HeadCell";
import TableLoader from "../Table/components/Loader";
import TablePagination from "../Table/components/Pagination";
import TableSelectionCell from "../Table/components/SelectionCell";
import TableToolbar from "../Table/components/Toolbar";
import {
  COLUMN_CHECKBOX_PATH,
  COLUMN_CHECKBOX_WIDTH,
  COLUMN_PRIMARY_ACTIONS_PATH,
  COLUMN_PRIMARY_ACTIONS_WIDTH,
  COLUMN_ROW_ACTIONS_PATH,
  COLUMN_ROW_ACTIONS_WIDTH,
  PAGINATION_DEFAULT_PAGESIZE,
  PAGINATION_DEFAULT_PAGESIZE_OPTIONS,
  PAGINATION_TOOLBAR_BORDER,
  PAGINATION_TOOLBAR_HEIGHT,
  TOOLBAR_HEIGHT,
  TOOLBAR_HEIGHT_MOBILE,
} from "../Table/utils";

export const DATA_CY_DEFAULT = "table-virtualized";
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
  tableBody: {
    label: "Table body",
  },
};

interface ITableContext {
  columns: ITableColumn[];
  dataCy: string;
  emptyState?: ITable["emptyState"];
  getRowStyle?: ITableDataCallback<CSSProperties>;
  isEmpty: boolean;
  isRowSelected: (index: number) => boolean;
  onRowClick?: ITableDataCallback<any>;
  onSelection: (index: number) => void;
  primaryActions: ITableAction[];
  rowActions: ITableAction[];
  scrollContainerStyle: CSSProperties | undefined;
  showHeaderFilters?: boolean;
  sticky: boolean;
  stickyHeader: boolean;
  stickySelection: boolean;
  tableLayout: ITable["tableLayout"];
  wrapperStyle: CSSProperties | undefined;
}

/* eslint-disable react/display-name, react/prop-types */
const VirtuosoTableComponents: TableComponents<any, ITableContext> = {
  Scroller: forwardRef<HTMLDivElement, any>(({ context, children, ...props }, ref) => (
    <div
      {...props}
      style={{ minHeight: 40, ...context?.scrollContainerStyle }}
      data-cy={getComposedDataCy(context?.dataCy || "", SUBPARTS_MAP.scrollContainer)}
      className="virtuoso-wrapper"
      ref={ref}
    >
      <style>{`
        .virtuoso-wrapper > div {
          position: relative !important;
        }
      `}</style>
      {children}
    </div>
  )),
  Table: ({ context, ...props }) => (
    <MUITable
      {...props}
      size="small"
      stickyHeader={context?.sticky}
      sx={{ borderCollapse: "separate", tableLayout: context?.tableLayout }}
    />
  ),
  TableHead: forwardRef<HTMLTableSectionElement, any>(({ context, ...props }, ref) => (
    <TableHead
      {...props}
      columns={context?.columns || []}
      showFilters={context?.showHeaderFilters}
      sticky={context?.stickyHeader}
      ref={ref}
    />
  )),
  TableRow: ({ context, ...props }) => {
    const index = props["data-index"];
    const style = useMemo(() => {
      if (context?.getRowStyle) {
        const rowCallbackOptions = { indexes: [index], multiple: false };
        return context.getRowStyle(props.item, rowCallbackOptions);
      }
      return undefined;
    }, [context, props.item, index]);
    return <MUITableRow {...props} style={style} />;
  },
  TableBody: forwardRef<HTMLTableSectionElement, any>(({ context, children, ...props }, ref) => {
    return (
      <MUITableBody {...props} ref={ref} data-cy={getComposedDataCy(context.dataCy, SUBPARTS_MAP.tableBody)}>
        {context.isEmpty ? (
          <TableEmptyState columns={context?.columns.length} emptyState={context?.emptyState} />
        ) : (
          children
        )}
      </MUITableBody>
    );
  }),
};
/* eslint-enable react/display-name, react/prop-types */

function rowContent(rowIndex: number, rowData: any, context: ITableContext) {
  const { __mosaicTableId, ...row } = rowData;
  const rowSelected = context.isRowSelected(__mosaicTableId);
  const rowCallbackOptions = { indexes: [rowIndex], multiple: false };
  const style = context.getRowStyle ? context.getRowStyle(row, rowCallbackOptions) : {};
  const onRowSelection = () => context.onSelection(__mosaicTableId);

  return (
    <>
      {context.columns.map((column, columnIndex) => {
        const { path } = column;
        const key = `column-${path || columnIndex}`;

        if (path === COLUMN_CHECKBOX_PATH) {
          return (
            <TableSelectionCell
              key={key}
              column={column}
              onSelection={onRowSelection}
              selected={rowSelected}
              sticky={context.stickySelection}
              style={style}
            />
          );
        }

        if (path === COLUMN_PRIMARY_ACTIONS_PATH) {
          return (
            <TableActionsCell
              key={key}
              actions={context.primaryActions}
              column={column}
              data={row}
              dataCallbackOptions={rowCallbackOptions}
              dataCy={context.dataCy}
              position="primary"
              style={style}
            />
          );
        }

        if (path === COLUMN_ROW_ACTIONS_PATH) {
          return (
            <TableActionsCell
              key={key}
              actions={context.rowActions}
              column={column}
              data={row}
              dataCallbackOptions={rowCallbackOptions}
              dataCy={context.dataCy}
              position="row"
              style={style}
            />
          );
        }

        return (
          <TableDataCell
            key={key}
            column={column}
            data={row}
            dataCallbackOptions={rowCallbackOptions}
            dataCy={context.dataCy}
            onClick={context.onRowClick}
          />
        );
      })}
    </>
  );
}

const TableVirtualized = ({
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
  pageSize = PAGINATION_DEFAULT_PAGESIZE,
  pageSizeOptions = PAGINATION_DEFAULT_PAGESIZE_OPTIONS,
  rows: externalRows = [],
  rowsTotal = 0,
  selectionFilter,
  stickySelection = false,
  showFilters,
  sorting: externalSorting = { path: null, ordering: null },
  sticky = false,
  style: externalStyle,
  tableLayout = "fixed",
  title,
}: ITable) => {
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              .map(({ __mosaicTableId, ...row }) => ({ ...row })),
            { indexes: selectedIndexes, multiple: true }
          );
        }

        return selectedIndexes;
      }),
    [rows, isRowSelected, onSelectionChange]
  );

  const { defaultActions, columns, primaryActions, rowActions, selectionActions } = useMemo(() => {
    let columns: ITableColumn[] = [];
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
          width: `${COLUMN_CHECKBOX_WIDTH}px`,
        },
        ...columns,
      ];
    }

    let primaryActions: ITableAction[] = [];
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
        case "primary":
          if (primaryActions.length >= 1) {
            rowActions = [...rowActions, { ...action }];
            return;
          }

          primaryActions = [...primaryActions, { ...action }];
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

    if (primaryActions.length) {
      columns = [
        ...columns,
        {
          label: "",
          padding: "checkbox",
          path: COLUMN_PRIMARY_ACTIONS_PATH,
          sortable: false,
          width: `${COLUMN_PRIMARY_ACTIONS_WIDTH}px`,
        },
      ];
    }

    columns = [...columns, ...externalColumns];

    if (rowActions.length) {
      columns = [
        ...columns,
        {
          label: "",
          path: COLUMN_ROW_ACTIONS_PATH,
          width: `${COLUMN_ROW_ACTIONS_WIDTH * rowActions.length}px`,
        },
      ];
    }

    const defaultActions = toolbarActions;
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

    return { defaultActions, columns, primaryActions, rowActions, selectionActions };
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const stickyHeader = useMemo(() => !hideHeader && sticky, [hideHeader, sticky]);

  const isEmpty = !loading && !externalRows.length;

  const context: ITableContext = useMemo(
    () => ({
      columns,
      dataCy,
      emptyState,
      getRowStyle,
      isEmpty,
      isRowSelected,
      onRowClick,
      onSelection,
      primaryActions,
      rowActions,
      scrollContainerStyle,
      showHeaderFilters,
      sticky,
      stickyHeader,
      stickySelection,
      tableLayout,
      wrapperStyle,
    }),
    [
      columns,
      dataCy,
      emptyState,
      getRowStyle,
      isEmpty,
      isRowSelected,
      onRowClick,
      onSelection,
      primaryActions,
      rowActions,
      scrollContainerStyle,
      showHeaderFilters,
      sticky,
      stickyHeader,
      stickySelection,
      tableLayout,
      wrapperStyle,
    ]
  );

  const headerContent = useCallback(() => {
    return (
      <MUITableRow>
        {columns.map((column, index) => (
          <TableHeadCell
            key={`column-${column.path || index}`}
            column={column}
            dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.headerCell, column.label || `${index}`)}
            onSort={onSortWrapper}
            sortable={!!onSortChange}
            sorting={sorting}
            stickyHeader={stickyHeader}
            stickySelection={stickySelection}
          />
        ))}
      </MUITableRow>
    );
  }, [columns, dataCy, onSortChange, onSortWrapper, sorting, stickyHeader, stickySelection]);

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
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={headerContent}
        useWindowScroll={sticky ? false : true}
        itemContent={rowContent}
        context={context}
        increaseViewportBy={{
          top: 1000,
          bottom: 1000,
        }}
      />
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

export const LocalizedTableVirtualized = localized(TableVirtualized, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});

export default LocalizedTableVirtualized;
