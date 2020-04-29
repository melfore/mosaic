import React, { FC } from "react";
import MaterialTable from "material-table";
import { Icons, IconSize } from "../../types/Icon";
import { TableType } from "../../types/Table";
import { DEFAULT_TABLE_OPTIONS, actionAdapter, actionComponentAdapter, columnAdapter, iconAdapter } from "./utils";

/**
 * Table component made on top of `material-table`
 */
const Table: FC<TableType> = ({
  actions = [],
  columns,
  filterable = false,
  loading = false,
  onPageChange = undefined,
  onPageSizeChange = undefined,
  onRowClick = undefined,
  onSearchChange = undefined,
  onSelectionChange = undefined,
  onSortChange,
  page = 0,
  pageSize = 10,
  paginated = true,
  rows = [],
  rowsTotal = undefined,
  searchable = true,
  sortable = true,
  title = undefined,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        actions={actions.map(actionAdapter)}
        columns={columns.map(columnAdapter)}
        components={{
          Action: actionComponentAdapter,
        }}
        data={rows}
        icons={{
          Filter: iconAdapter(Icons.filter, IconSize.small),
          FirstPage: iconAdapter(Icons.first),
          LastPage: iconAdapter(Icons.last),
          NextPage: iconAdapter(Icons.next),
          PreviousPage: iconAdapter(Icons.prev),
          ResetSearch: iconAdapter(Icons.close, IconSize.small),
          Search: iconAdapter(Icons.search),
          SortArrow: iconAdapter(Icons.arrowUp, IconSize.small),
        }}
        isLoading={loading}
        onChangePage={(page: number) => {
          if (paginated && onPageChange) {
            onPageChange(page);
          }
        }}
        onChangeRowsPerPage={(pageSize: number) => {
          if (paginated && onPageSizeChange) {
            onPageSizeChange(pageSize);
          }
        }}
        onOrderChange={(columnIndex: number, criteria: "asc" | "desc") => {
          if (sortable && onSortChange) {
            const columnPath = columnIndex < 0 ? null : columns[columnIndex].path;
            onSortChange(columnPath, criteria);
          }
        }}
        onRowClick={(event, row) => {
          if (onRowClick) {
            onRowClick(event, row);
          }
        }}
        onSearchChange={(query: string) => {
          if (searchable && onSearchChange) {
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
          filtering: filterable,
          // TODO#lb: implement
          padding: "dense",
          pageSize,
          paging: paginated,
          search: searchable,
          sorting: sortable,
          selection: !!onSelectionChange,
        }}
        page={page}
        title={title}
        totalCount={rowsTotal}
      />
    </div>
  );
};

export default Table;
