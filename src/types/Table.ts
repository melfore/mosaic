import { ReactElement } from "react";
import { BaseType } from "./Base";
import { Icons } from "./Icon";

// TODO#lb: implement
// export enum TableRowDimension {
//   large = "default",
//   medium = "dense",
//   small = "small",
// }

export enum TableActionScope {
  default = "global",
  row = "row",
}

export interface TableActionType {
  callback: (event: any, data: object | object[]) => void;
  disabled?: boolean;
  hidden?: boolean;
  icon?: Icons;
  label: string;
  scope?: TableActionScope;
}

export interface TableColumnType {
  // TODO#lb: implement in TableColumn
  // defaultFilter?: any;
  // export?: false;
  // filtering?: boolean;
  // searchable?: boolean;
  label?: string;
  path: string;
  render?: (row: any) => ReactElement;
}

export interface TableType extends BaseType {
  actions?: TableActionType[];
  columns: TableColumnType[];
  // TODO#lb: implement
  // exportable?: boolean;
  filterable?: boolean;
  loading?: boolean;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  onRowClick?: (event: any, row: any) => void;
  onSearchChange?: (query: string) => void;
  onSelectionChange?: (data: any[]) => void;
  onSortChange?: (path: string | null, criteria: "asc" | "desc") => void;
  page?: number;
  pageSize?: number;
  // TODO#lb: implement
  // rowDimension?: TableRowDimension;
  rows: any[];
  // TODO#lb: implement
  // rowsFiltered?: number;
  rowsTotal?: number;
  title: string;
}
