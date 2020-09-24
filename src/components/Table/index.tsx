import React, { FC, useCallback, useEffect, useState } from "react";
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
import { ITable } from "../../types/Table";
import { TypographyVariants } from "../../types/Typography";
import { suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Checkbox from "../Checkbox";
import Typography from "../Typography";

// import { actionAdapter, actionComponentAdapter, columnAdapter, DEFAULT_TABLE_OPTIONS, iconAdapter } from "./utils";

const CHECKBOX_SELECTION_PATH = "checkbox-selection";

export const DATA_CY_DEFAULT = "table";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "title", type: "string" }];

const Table: FC<ITable> = ({
  actions = [],
  columns,
  dataCy = DATA_CY_DEFAULT,
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
  rowsTotal = undefined,
  selectionFilter,
  sorting = { path: null, ordering: null },
  stickyHeader = false,
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

  let enhancedColumns = [...columns];
  if (onSelectionChange) {
    enhancedColumns = [
      {
        label: "",
        padding: "checkbox",
        path: CHECKBOX_SELECTION_PATH,
      },
      ...enhancedColumns,
    ];
  }

  return (
    <MUITableContainer component={MUIPaper} data-cy={dataCy} style={{ height, position: "relative" }}>
      {loading && (
        <div
          style={{
            alignItems: "center",
            backgroundColor: theme.palette.divider,
            display: "flex",
            height: "100%",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            zIndex: 1,
          }}
        >
          <MUICircularProgress />
        </div>
      )}
      {!hideHeader && (
        <MUIToolbar>
          <Typography variant={TypographyVariants.title}>{title}</Typography>
        </MUIToolbar>
      )}
      <MUITable size="small" stickyHeader={stickyHeader} style={{ tableLayout: "fixed" }}>
        <MUITableHead>
          <MUITableRow>
            {enhancedColumns.map(({ label, padding, path, width }, index) => (
              <MUITableCell
                key={`column-${path || index}`}
                padding={padding || "default"}
                style={{ width }}
                variant="head"
              >
                {!onSortChange ? (
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
          {internalRows.map(({ id, ...row }) => (
            <MUITableRow key={`row-${id}`}>
              {enhancedColumns.map(({ padding, path, render }, columnIndex) => (
                <MUITableCell
                  key={`column-${path || columnIndex}`}
                  onClick={(event) => {
                    if (path === CHECKBOX_SELECTION_PATH) {
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
                  ) : render ? (
                    render(row)
                  ) : (
                    row[path]
                  )}
                </MUITableCell>
              ))}
            </MUITableRow>
          ))}
        </MUITableBody>
      </MUITable>
      {(onPageChange || onPageSizeChange) && (
        <MUITablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rowsTotal || 0}
          rowsPerPage={pageSize}
          page={page}
          onChangePage={(event, page) => {
            suppressEvent(event);
            onPageChange && onPageChange(page);
          }}
          onChangeRowsPerPage={(event) => {
            const pageSize = parseInt(event.target.value, 10);
            onPageSizeChange && onPageSizeChange(0, pageSize);
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
