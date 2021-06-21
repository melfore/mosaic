import React, { FC, Fragment, useCallback, useEffect, useMemo, useState } from "react";
import {
  CircularProgress as MUICircularProgress,
  Paper as MUIPaper,
  Table as MUITable,
  TableBody as MUITableBody,
  TableCell as MUITableCell,
  TableContainer as MUITableContainer,
  TableHead as MUITableHead,
  TablePagination as MUITablePagination,
  TableRow as MUITableRow,
  Toolbar as MUIToolbar,
  useTheme,
} from "@material-ui/core";

import { CheckboxSize } from "../../types/Checkbox";
import { Icons, IconSize } from "../../types/Icon";
import { ITable, ITableOnSortCallback, TableActionPosition } from "../../types/Table";
import { TypographyVariants } from "../../types/Typography";
import { getComposedDataCy, getObjectProperty, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Button from "../Button";
import Checkbox from "../Checkbox";
import IconButton from "../IconButton";
import Spacer from "../Spacer";
import Typography from "../Typography";

import TableHeadCell from "./components/HeadCell";
import { CHECKBOX_SELECTION_PATH, TOOLBAR_DIMENSION } from "./utils";

const CHECKBOX_SELECTION_WIDTH = 36;
const ROW_ACTION_DIMENSION = 48;
const ROW_ACTION_PATH = "row-actions";

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
  pageSize = 10,
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

  const tablePaginationActions = useCallback(() => {
    const lastPage = !rowsTotal || !pageSize ? 0 : Math.ceil(rowsTotal / pageSize) - 1;
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: `${theme.spacing(1)}px`,
        }}
      >
        <IconButton
          dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.pagination, "first")}
          disabled={!page}
          icon={Icons.first}
          onClick={() => onPageChange && onPageChange(0)}
        />
        <IconButton
          dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.pagination, "prev")}
          disabled={!page}
          icon={Icons.left}
          onClick={() => onPageChange && onPageChange(page - 1)}
        />
        <IconButton
          dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.pagination, "next")}
          disabled={page >= lastPage}
          icon={Icons.right}
          onClick={() => onPageChange && onPageChange(page + 1)}
        />
        <IconButton
          dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.pagination, "last")}
          disabled={page >= lastPage}
          icon={Icons.last}
          onClick={() => onPageChange && onPageChange(lastPage)}
        />
      </div>
    );
  }, [dataCy, onPageChange, page, pageSize, rowsTotal, theme]);

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
              size={CheckboxSize.small}
              value={loading ? false : selectedRowsIndexes.length === externalRows.length}
            />
          ),
          width: `${CHECKBOX_SELECTION_WIDTH}px`,
        },
        ...columns,
      ];
    }

    const defaultActions = actions.filter(({ position }) => !position || position === TableActionPosition.default);
    const rowActions = actions.filter(({ position }) => position === TableActionPosition.row);
    const selectionActions = actions.filter(({ position }) => position === TableActionPosition.selection);
    if (!!rowActions.length) {
      columns = [
        ...columns,
        { label: "", path: ROW_ACTION_PATH, width: `${ROW_ACTION_DIMENSION * rowActions.length}px` },
      ];
    }

    return { defaultActions, columns, rowActions, selectionActions };
  }, [
    actions,
    externalColumns,
    dataCy,
    loading,
    externalRows,
    selectedRowsIndexes,
    onBulkSelection,
    onSelectionChange,
  ]);

  const onSortWrapper: ITableOnSortCallback = useCallback(
    (path, ordering) => {
      setSorting({ path, ordering });
      onSortChange && onSortChange(path, ordering);
    },
    [onSortChange]
  );

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
            {(!selectedRowsIndexes.length ? defaultActions : selectionActions).map(
              ({ callback, disabled, icon, label }, index) => (
                <Fragment key={`action-${label}`}>
                  {index > 0 && <Spacer />}
                  <Button
                    dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.action, label)}
                    disabled={disabled}
                    icon={!icon ? undefined : { name: icon }}
                    label={label}
                    onClick={() =>
                      callback(
                        rows
                          .filter((_, index) => selectedRowsIndexes.includes(index))
                          .map(({ __mosaicTableId, ...internalRow }) => ({ ...internalRow }))
                      )
                    }
                  />
                </Fragment>
              )
            )}
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
                padding="default"
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
                    padding={padding || "default"}
                    style={{
                      width,
                      ...(path === CHECKBOX_SELECTION_PATH ? { padding: `0 ${theme.spacing(1)}px` } : {}),
                    }}
                  >
                    {path === CHECKBOX_SELECTION_PATH ? (
                      <Checkbox
                        size={CheckboxSize.small}
                        onChange={(selected) => onSelection(__mosaicTableId)}
                        value={isRowSelected(__mosaicTableId)}
                      />
                    ) : path === ROW_ACTION_PATH ? (
                      <div style={{ alignItems: "center", display: "flex", justifyContent: "flex-end" }}>
                        {rowActions.map(({ callback, disabled, icon, label }) => (
                          <IconButton
                            key={`action-${label}`}
                            dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.action, label)}
                            disabled={disabled}
                            icon={icon || Icons.settings}
                            onClick={() => callback(row)}
                            size={IconSize.small}
                          />
                        ))}
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
        <MUITablePagination
          ActionsComponent={() => tablePaginationActions()}
          component="div"
          count={rowsTotal || 0}
          onChangePage={(event, page) => {
            suppressEvent(event);
            onPageChange && onPageChange(page);
          }}
          onChangeRowsPerPage={(event) => {
            const pageSize = parseInt(event.target.value, 10);
            onPageSizeChange && onPageSizeChange(0, pageSize);
          }}
          page={page}
          rowsPerPage={pageSize}
          rowsPerPageOptions={[5, 10, 25]}
          style={{
            backgroundColor: "inherit",
            ...(sticky
              ? {
                  borderTop: `1px solid ${theme.palette.divider}`,
                  bottom: 0,
                  position: "sticky",
                }
              : { position: "inherit" }),
          }}
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
