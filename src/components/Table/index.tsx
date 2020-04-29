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
    </div>
  );
};

export default Table;
