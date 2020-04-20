import React, { FC } from "react";
import MaterialTable from "material-table";
import { Icons, IconSize } from "../../types/Icon";
import { TableType } from "../../types/Table";
import { DEFAULT_TABLE_OPTIONS, columnAdapter, iconAdapter } from "./utils";

/**
 * Table component made on top of `material-table`
 */
const Table: FC<TableType> = ({
  columns,
  loading = false,
  onPageChange,
  onPageSizeChange,
  onRowClick = undefined,
  onSearchChange,
  onSortChange,
  page = 0,
  pageSize = 10,
  rows = [],
  rowsTotal = undefined,
}) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columns.map(columnAdapter)}
        data={rows}
        icons={{
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
          pageSize,
        }}
        page={page}
        totalCount={rowsTotal}
      />
    </div>
  );
};

export default Table;
