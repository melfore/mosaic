import React, { FC } from "react";
import {
  Paper as MUIPaper,
  Table as MUITable,
  TableBody as MUITableBody,
  TableCell as MUITableCell,
  TableHead as MUITableHead,
  TablePagination as MUITablePagination,
  TableRow as MUITableRow,
  TableSortLabel as MUITableSortLabel,
  Toolbar as MUIToolbar,
} from "@material-ui/core";

import { ITable } from "../../types/Table";
import { TypographyVariants } from "../../types/Typography";
import { suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Checkbox from "../Checkbox";
import Typography from "../Typography";

// import { actionAdapter, actionComponentAdapter, columnAdapter, DEFAULT_TABLE_OPTIONS, iconAdapter } from "./utils";

export const DATA_CY_DEFAULT = "table";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "title", type: "string" }];

const Table: FC<ITable> = ({
  actions = [],
  columns,
  dataCy = DATA_CY_DEFAULT,
  loading = false,
  onPageChange = undefined,
  onPageSizeChange = undefined,
  onRowClick = undefined,
  onSearchChange = undefined,
  onSelectionChange = undefined,
  onSortChange = undefined,
  page = 0,
  pageSize = 10,
  rows = [],
  rowsTotal = undefined,
  title = undefined,
}) => {
  let enhancedColumns = [...columns];
  if (onSelectionChange) {
    enhancedColumns = [{ label: "", padding: "checkbox", path: "", render: () => <Checkbox /> }, ...enhancedColumns];
  }

  return (
    <MUIPaper style={{ position: "relative" }}>
      {/*
      {loading && (
        // TODO
        <div style={{ position: "absolute", height: "100%", width: "100%", background: "red" }}>Loader...</div>
      )}
      */}
      <MUIToolbar>
        <Typography variant={TypographyVariants.title}>{title}</Typography>
      </MUIToolbar>
      <MUITable size="small">
        <MUITableHead>
          <MUITableRow>
            {enhancedColumns.map(({ label, padding, path }) => (
              <MUITableCell padding={padding || "default"}>
                <MUITableSortLabel
                  onClick={(event) => {
                    suppressEvent(event);
                    // TODO
                    onSortChange && onSortChange(path, "asc");
                  }}
                >
                  {label}
                </MUITableSortLabel>
              </MUITableCell>
            ))}
          </MUITableRow>
        </MUITableHead>
        <MUITableBody>
          {rows.map((row) => (
            <MUITableRow
              onClick={(event) => {
                suppressEvent(event);
                onRowClick && onRowClick(row);
              }}
            >
              {enhancedColumns.map(({ padding, path, render }) => (
                <MUITableCell padding={padding || "default"}>{render ? render(row) : row[path]}</MUITableCell>
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
            onPageSizeChange && onPageSizeChange(pageSize);
          }}
        />
      )}
      {/*
      <MUITable
        actions={actions.map(actionAdapter)}
        columns={columns.map(columnAdapter)}
        components={{
          Action: (props: any) => actionComponentAdapter(props, dataCy),
        }}
        data={[...rows]}
        data-cy={dataCy}
        icons={{
          Filter: iconAdapter(Icons.filter, IconSize.small),
          FirstPage: iconAdapter(Icons.first),
          LastPage: iconAdapter(Icons.last),
          NextPage: iconAdapter(Icons.right),
          PreviousPage: iconAdapter(Icons.left),
          ResetSearch: iconAdapter(Icons.close, IconSize.small),
          Search: iconAdapter(Icons.search),
          SortArrow: iconAdapter(Icons.up_arrow, IconSize.small),
        }}
        isLoading={loading}
        onChangePage={(page) => {
          if (onPageChange) {
            onPageChange(page);
          }
        }}
        onChangeRowsPerPage={(pageSize) => {
          if (onPageSizeChange) {
            onPageSizeChange(pageSize);
          }
        }}
        onOrderChange={(columnIndex, criteria) => {
          if (onSortChange) {
            const columnPath = columnIndex < 0 ? null : columns[columnIndex].path;
            onSortChange(columnPath, criteria);
          }
        }}
        onRowClick={(event, row) => {
          if (onRowClick) {
            onRowClick(event, row);
          }
        }}
        onSearchChange={(query) => {
          if (onSearchChange) {
            onSearchChange(query);
          }
        }}
        onSelectionChange={(data) => {
          if (onSelectionChange) {
            onSelectionChange(data);
          }
        }}
        options={{
          ...DEFAULT_TABLE_OPTIONS,
          filtering: false,
          padding: "dense",
          pageSize,
          paging: !!onPageChange && !!onPageSizeChange,
          search: !!onSearchChange,
          sorting: !!onSortChange,
          selection: !!onSelectionChange,
        }}
        page={page}
        title={title}
        totalCount={rowsTotal}
      />
      */}
    </MUIPaper>
  );
};

export const TableWithProps = Table;

export default localized(Table, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
