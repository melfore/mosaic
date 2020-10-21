import { ReactNode } from "react";

import { ILocalizable } from "./Base";
import { Icons } from "./Icon";

export enum TableActionPosition {
  default = "toolbar",
  row = "row",
  selection = "toolbarOnSelect",
}

export interface ITableAction {
  callback: (data: object | object[]) => void;
  disabled?: boolean;
  hidden?: boolean;
  icon?: Icons;
  label: string;
  position?: TableActionPosition;
}

export interface ITableColumn {
  label?: string;
  padding?: "checkbox" | "default" | "none";
  path: string;
  render?: (row: any) => ReactNode;
  width?: number | string;
}

export interface ITablePagination {
  onPageChange?: (page: number) => void;
  page?: number;
  pageSize?: number;
  rowsTotal?: number;
}

export interface ITable extends ITablePagination, ILocalizable {
  actions?: ITableAction[];
  columns: ITableColumn[];
  emptyState?: ReactNode;
  height?: number | string;
  hideHeader?: boolean;
  loading?: boolean;
  onPageSizeChange?: (page: number, pageSize: number) => void;
  onRowClick?: (row: any) => void;
  onSelectionChange?: (data: any[]) => void;
  onSortChange?: (path: string | null, criteria: "asc" | "desc" | null) => void;
  rows: any[];
  selectionFilter?: (datum: any) => boolean;
  sorting?: { path: string | null; ordering: "asc" | "desc" | null };
  sticky?: boolean;
  title: string;
}
