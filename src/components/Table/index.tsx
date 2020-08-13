import React, { FC } from "react";
import MaterialTable from "material-table";

import { Icons, IconSize } from "../../types/Icon";
import { ITable } from "../../types/Table";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

import { actionAdapter, actionComponentAdapter, columnAdapter, DEFAULT_TABLE_OPTIONS, iconAdapter } from "./utils";

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
  return (
    <div data-cy={dataCy} style={{ width: "100%" }}>
      <MaterialTable
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
    </div>
  );
};

export const TableWithProps = Table;

export default localized(Table, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
