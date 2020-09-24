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

export interface ITable extends ILocalizable {
  actions?: ITableAction[];
  columns: ITableColumn[];
  height?: number | string;
  hideHeader?: boolean;
  loading?: boolean;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (page: number, pageSize: number) => void;
  onRowClick?: (row: any) => void;
  onSelectionChange?: (data: any[]) => void;
  onSortChange?: (path: string | null, criteria: "asc" | "desc" | null) => void;
  page?: number;
  pageSize?: number;
  rows: any[];
  rowsTotal?: number;
  selectionFilter?: (datum: any) => boolean;
  sorting?: { path: string | null; ordering: "asc" | "desc" | null };
  stickyHeader?: boolean;
  title: string;
}
