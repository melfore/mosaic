import { CSSProperties, ReactNode } from "react";

import { ILocalizable } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

export enum TableActionPosition {
  default = "toolbar",
  row = "row",
  selection = "toolbarOnSelect",
}

export interface ITableAction extends IPartialIconUtilizer {
  callback: (data: object | object[]) => void;
  disabled?: boolean;
  hidden?: boolean;
  label: string;
  position?: TableActionPosition;
}

export interface ITableColumn {
  label?: string;
  padding?: "checkbox" | "normal" | "default" | "none";
  path: string;
  render?: (row: any) => ReactNode;
  sortable?: boolean;
  width?: number | string;
}

export type ITableSortingCriteria = "asc" | "desc" | null;

export interface ITableSorting {
  path: string | null;
  ordering: ITableSortingCriteria;
}

export type ITableOnSortCallback = (path: string | null, criteria: ITableSortingCriteria) => void;

export interface ITable extends ILocalizable {
  actions?: ITableAction[];
  columns: ITableColumn[];
  emptyState?: ReactNode;
  getRowStyle?: (data: any) => CSSProperties;
  height?: number | string;
  hideHeader?: boolean;
  loading?: boolean;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (page: number, pageSize: number) => void;
  onRowClick?: (row: any) => void;
  onSelectionChange?: (data: any[]) => void;
  onSortChange?: ITableOnSortCallback;
  page?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  rows: any[];
  rowsTotal?: number;
  selectionFilter?: (datum: any) => boolean;
  sorting?: ITableSorting;
  sticky?: boolean;
  title: string;
}
