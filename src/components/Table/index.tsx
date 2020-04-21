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
  onPageChange,
  onPageSizeChange,
  onRowClick = undefined,
  onSearchChange,
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
    <div style={{ maxWidth: "100%" }}>
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
        onChangePage={onPageChange}
        onChangeRowsPerPage={onPageSizeChange}
        onOrderChange={(columnIndex: number, criteria: "asc" | "desc") => {
          const columnPath = columnIndex < 0 ? null : columns[columnIndex].path;
          onSortChange(columnPath, criteria);
        }}
        onRowClick={onRowClick}
        onSearchChange={onSearchChange}
        options={{
          ...DEFAULT_TABLE_OPTIONS,
          filtering: filterable,
          pageSize,
          paging: paginated,
          search: searchable,
          sorting: sortable,
        }}
        page={page}
        title={title}
        totalCount={rowsTotal}
      />
    </div>
  );
};

export default Table;
