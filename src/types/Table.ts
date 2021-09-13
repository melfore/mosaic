import { CSSProperties, ReactNode } from "react";
import { TablePaginationProps as MUITablePaginationProps } from "@material-ui/core";

import { IBase, ILocalizable, ISubpartItem } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

export enum TableActionPosition {
  default = "toolbar",
  icon = "icon",
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

export type ITableActionsOrder = "buttons-first" | "icons-first" | "list";

export interface ITableToolbarAction extends ISubpartItem, ITableAction {
  data: object | object[];
  index: number;
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

export interface ITableHeadCell extends IBase {
  column: ITableColumn;
  dataCy: string;
  onSort: ITableOnSortCallback;
  sortable: boolean;
  sorting: ITableSorting;
  stickyHeader: boolean;
}

export interface ITablePagination extends ISubpartItem {
  onPageChange: (page: number) => void;
  onPageSizeChange: (page: number, pageSize: number) => void;
  page: number;
  pageSize: number;
  pageSizeOptions: number[];
  rowsTotal: number;
}

export type ITablePaginationActions = MUITablePaginationProps & ISubpartItem;

export type ITable = ILocalizable &
  Partial<ITablePagination> & {
    actions?: ITableAction[];
    actionsOrder?: "list" | "buttons-first" | "icons-first";
    columns: ITableColumn[];
    emptyState?: ReactNode;
    getRowStyle?: (data: any) => CSSProperties;
    height?: number | string;
    hideHeader?: boolean;
    loading?: boolean;
    onRowClick?: (row: any) => void;
    onSelectionChange?: (data: any[]) => void;
    onSortChange?: ITableOnSortCallback;
    rows: any[];
    selectionFilter?: (datum: any) => boolean;
    sorting?: ITableSorting;
    sticky?: boolean;
    title: string;
  };
