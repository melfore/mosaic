import { ReactElement } from "react";
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
  path: string;
  render?: (row: any) => ReactElement;
  width?: number | string;
}

export interface ITable extends ILocalizable {
  actions?: ITableAction[];
  columns: ITableColumn[];
  loading?: boolean;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  onRowClick?: (event: any, row: any) => void;
  onSearchChange?: (query: string) => void;
  onSelectionChange?: (data: any[]) => void;
  onSortChange?: (path: string | null, criteria: "asc" | "desc") => void;
  page?: number;
  pageSize?: number;
  rows: any[];
  rowsTotal?: number;
  title: string;
}
