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
  TableSortLabel as MUITableSortLabel,
  Toolbar as MUIToolbar,
  useTheme,
} from "@material-ui/core";

import { CheckboxSize } from "../../types/Checkbox";
import { Icons, IconSize } from "../../types/Icon";
import { ITable, TableActionPosition } from "../../types/Table";
import { TypographyVariants } from "../../types/Typography";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Button from "../Button";
import Checkbox from "../Checkbox";
import IconButton from "../IconButton";
import Spacer from "../Spacer";
import Typography from "../Typography";

const CHECKBOX_SELECTION_PATH = "checkbox-selection";
const ROW_ACTION_DIMENSION = 48;
const ROW_ACTION_PATH = "row-actions";
const TOOLBAR_DIMENSION = 64;

export const DATA_CY_DEFAULT = "table";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "title", type: "string" }];
export const SUBPARTS_MAP = {
  action: {
    label: "Action (with label)",
    value: (label = "{label}") => `action-${label}`,
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
  columns,
  dataCy = DATA_CY_DEFAULT,
  emptyState,
  height = "100%",
  hideHeader = false,
  loading = false,
  onPageChange = undefined,
  onPageSizeChange = undefined,
  onRowClick = undefined,
  onSelectionChange = undefined,
  onSortChange = undefined,
  page = 0,
  pageSize = 10,
  rows = [],
  rowsTotal = 0,
  selectionFilter,
  sorting = { path: null, ordering: null },
  sticky = false,
  title = undefined,
}) => {
  const theme = useTheme();

  const getInternalRows = useCallback((rows: any) => [...rows].map((row, index) => ({ ...row, id: index })), []);

  const getSelectedRows = useCallback(
    (rows: any, selectionFilter: any) =>
      rows
        .filter((internalRow: any) => (!selectionFilter ? false : selectionFilter(internalRow)))
        .map(({ id }: any) => id),
    []
  );

  const [internalRows, setInternalRows] = useState(getInternalRows(rows));
  const [selectedRows, setSelectedRows] = useState<number[]>(getSelectedRows(internalRows, selectionFilter));
  const [internalSorting, setInternalSorting] = useState(sorting);

  useEffect(() => {
    const internalRows = getInternalRows(rows);
    const selectedRows = getSelectedRows(internalRows, selectionFilter);
    setInternalRows(internalRows);
    setSelectedRows(selectedRows);
  }, [getInternalRows, getSelectedRows, rows, selectionFilter]);

  useEffect(() => {
    if (!onSortChange) {
      return;
    }

    const { path, ordering } = internalSorting;
    onSortChange(path, ordering);
  }, [internalSorting, onSortChange]);

  const isRowSelected = useCallback((index: number) => selectedRows.includes(index), [selectedRows]);

  const onBulkSelection = useCallback(
    (selected: boolean) =>
      setSelectedRows((selectedRows) => {
        let rows = selectedRows;
        if (!selected) {
          rows = [];
        } else {
          rows = new Array(internalRows.length).fill(0).map((_, index) => index);
        }

        if (onSelectionChange) {
          onSelectionChange(!selected ? [] : internalRows);
        }

        return rows;
      }),
    [internalRows, onSelectionChange]
  );

  const onSelection = useCallback(
    (index: number) =>
      setSelectedRows((selectedRows) => {
        let rows = selectedRows;
        if (!isRowSelected(index)) {
          rows = [...rows, index];
        } else {
          rows = selectedRows.filter((selectedIndex) => selectedIndex !== index);
        }

        if (onSelectionChange) {
          onSelectionChange(internalRows.filter((_, index) => rows.includes(index)));
        }

        return rows;
      }),
    [internalRows, isRowSelected, onSelectionChange]
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

  const { defaultActions, internalColumns, rowActions, selectionActions } = useMemo(() => {
    let internalColumns = [...columns];
    if (onSelectionChange) {
      internalColumns = [
        {
          label: "",
          padding: "checkbox",
          path: CHECKBOX_SELECTION_PATH,
          render: () => (
            <Checkbox
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.selectAll)}
              intermediate={!!selectedRows.length && selectedRows.length !== internalRows.length}
              onChange={(selected) => onBulkSelection(selected)}
              value={selectedRows.length === internalRows.length}
            />
          ),
        },
        ...internalColumns,
      ];
    }

    const defaultActions = actions.filter(({ position }) => !position || position === TableActionPosition.default);
    const rowActions = actions.filter(({ position }) => position === TableActionPosition.row);
    const selectionActions = actions.filter(({ position }) => position === TableActionPosition.selection);
    if (!!rowActions.length) {
      internalColumns = [
        ...internalColumns,
        { label: "", path: ROW_ACTION_PATH, width: `${ROW_ACTION_DIMENSION * rowActions.length}px` },
      ];
    }

    return { defaultActions, internalColumns, rowActions, selectionActions };
  }, [actions, columns, dataCy, internalRows, selectedRows, onBulkSelection, onSelectionChange]);

  return (
    <MUITableContainer component={MUIPaper} data-cy={dataCy} style={{ height, position: "relative" }}>
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
            backgroundColor: !selectedRows.length ? "inherit" : theme.palette.action.selected,
            display: "flex",
            justifyContent: "space-between",
            ...(!sticky ? { position: "inherit" } : { position: "sticky", top: 0, zIndex: 1 }),
          }}
        >
          <Typography variant={TypographyVariants.title}>
            {!selectedRows.length ? title : `${selectedRows.length} row(s) selected`}
          </Typography>
          <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
            {(!selectedRows.length ? defaultActions : selectionActions).map(
              ({ callback, disabled, icon, label }, index) => (
                <Fragment key={`action-${label}`}>
                  {index > 0 && <Spacer />}
                  <Button
                    dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.action, label)}
                    disabled={disabled}
                    icon={!icon ? undefined : { name: icon }}
                    label={label}
                    onClick={() => callback(internalRows.filter((_, index) => selectedRows.includes(index)))}
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
            {internalColumns.map(({ label, padding, path, render, width }, index) => (
              <MUITableCell
                key={`column-${path || index}`}
                padding={padding || "default"}
                style={{ width, ...(!hideHeader && sticky ? { top: `${TOOLBAR_DIMENSION}px` } : {}) }}
                variant="head"
              >
                {render ? (
                  render({})
                ) : !onSortChange ? (
                  label
                ) : (
                  <MUITableSortLabel
                    active={path === internalSorting.path}
                    direction={path === internalSorting.path ? internalSorting.ordering || undefined : "asc"}
                    onClick={(event) => {
                      suppressEvent(event);
                      const { path: sortingPath, ordering } = internalSorting;
                      if (!sortingPath || path !== sortingPath) {
                        setInternalSorting({ path, ordering: "asc" });
                        return;
                      }

                      if (path === sortingPath && ordering === "asc") {
                        setInternalSorting({ path, ordering: "desc" });
                        return;
                      }

                      setInternalSorting({ path: null, ordering: null });
                    }}
                  >
                    {label}
                  </MUITableSortLabel>
                )}
              </MUITableCell>
            ))}
          </MUITableRow>
        </MUITableHead>
        <MUITableBody>
          {!internalRows.length ? (
            <MUITableRow key={`row-no-data`}>
              <MUITableCell
                key={`column-no-data`}
                colSpan={internalColumns.length}
                padding="default"
                style={{ textAlign: "center" }}
              >
                {emptyState || <Typography>No data to display</Typography>}
              </MUITableCell>
            </MUITableRow>
          ) : (
            internalRows.map(({ id, ...row }) => (
              <MUITableRow key={`row-${id}`}>
                {internalColumns.map(({ padding, path, render }, columnIndex) => (
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
                  >
                    {path === CHECKBOX_SELECTION_PATH ? (
                      <Checkbox
                        size={CheckboxSize.small}
                        onChange={(selected) => onSelection(id)}
                        value={isRowSelected(id)}
                      />
                    ) : path === ROW_ACTION_PATH ? (
                      rowActions.map(({ callback, disabled, icon, label }) => (
                        <IconButton
                          key={`action-${label}`}
                          dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.action, label)}
                          disabled={disabled}
                          icon={icon || Icons.settings}
                          onClick={() => callback(row)}
                          size={IconSize.small}
                        />
                      ))
                    ) : render ? (
                      render(row)
                    ) : (
                      row[path]
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
