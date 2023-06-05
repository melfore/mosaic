import { CSSProperties, ReactNode } from "react";
import { TablePaginationProps as MUITablePaginationProps } from "@mui/material";

import { IAdornment } from "./Adornment";
import { IBase, ILoadable, ILocalizable } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

/**
 * @deprecated Use "icon" | "row" | "selection" | "toolbar"
 */
export enum TableActionPosition {
  default = "toolbar",
  icon = "icon",
  row = "row",
  selection = "selection",
}

export type ITableRowActionPosition = "primary" | "row";

export type ITableActionPosition = "icon" | "selection" | "toolbar" | ITableRowActionPosition;

export interface ITableDataCallbackOptions {
  indexes: number[];
  multiple: boolean;
}

export type ITableDataCallback<T, K = any> = (data: K, options?: ITableDataCallbackOptions) => T;

export interface ITableAction extends IAdornment, IPartialIconUtilizer {
  /**
   * Callback for click events on table action
   */
  callback: ITableDataCallback<void>;
  /**
   * Enables disabled state
   */
  disabled?: boolean | ITableDataCallback<boolean>;
  /**
   * Hides action
   */
  hidden?: boolean;
  /**
   * Label to display
   */
  label: string;
  /**
   * Position of table action
   */
  position?: ITableActionPosition | TableActionPosition;
}

export interface ITableToolbarAction extends IBase, ITableAction {
  /**
   * Data of table toolbar action
   */
  data: any;
  dataCy: string;
  /**
   * Callback options for the action triggered
   */
  dataCallbackOptions: ITableDataCallbackOptions;
}

export interface ITableColumn {
  /**
   * Label to display
   */
  label?: string;
  /**
   * Padding size
   */
  padding?: "checkbox" | "normal" | "default" | "none";
  /**
   * Column reference to data property (can be nested, e.g. "item.property")
   */
  path: string;
  /**
   * Method to allow custom rendering
   */
  render?: ITableDataCallback<ReactNode>;
  /**
   * Method to render a filter component
   */
  renderFilter?: ReactNode;
  /**
   * Enables sortable state
   */
  sortable?: boolean;
  /**
   * Column width
   */
  width?: number | string;
}

export type ITableSortingCriteria = "asc" | "desc" | null;

export interface ITableSorting {
  /**
   * Column reference to data property (can be nested, e.g. "item.property")
   */
  path: string | null;
  /**
   * Ordering state
   */
  ordering: ITableSortingCriteria;
}

export type ITableOnSortCallback = (path: string | null, criteria: ITableSortingCriteria) => void;

export type ITableHead = IBase & Pick<ITable, "columns" | "showFilters" | "sticky">;

export interface ITableHeadCell extends IBase {
  /**
   * Table column definition
   */
  column: ITableColumn;
  dataCy: string;
  /**
   * Callback for sort events on table column header
   */
  onSort: ITableOnSortCallback;
  /**
   * Enables sortable state
   */
  sortable: boolean;
  /**
   * Current table sorting
   */
  sorting: ITableSorting;
  /**
   * Sticky header enabled
   */
  stickyHeader: boolean;
  /**
   * Sticky mode enabled on selection checkbox
   */
  stickySelection: boolean;
}

export type ITableHeadFilterCell = IBase & Pick<ITableHeadCell, "column" | "dataCy">;

export interface ITablePagination extends IBase {
  dataCy: string;
  /**
   * Callback for page change events
   */
  onPageChange: (page: number) => void;
  /**
   * Callback for page size change events
   */
  onPageSizeChange: (page: number, pageSize: number) => void;
  /**
   * Current page
   */
  page: number;
  /**
   * Page size
   */
  pageSize: number;
  /**
   * Page size options
   */
  pageSizeOptions: number[];
  /**
   * Total number of rows
   */
  rowsTotal: number;
}

export type ITablePaginationActions = MUITablePaginationProps & {
  dataCy: string;
};

export type ITable = ILoadable &
  ILocalizable &
  Partial<ITablePagination> & {
    /**
     * List of available actions (position can be: "icon" | "row" | "selection" | "toolbar")
     */
    actions?: ITableAction[];
    /**
     * Order of actions to display (applies to positions: "icon" | "toolbar")
     */
    actionsOrder?: "buttons-first" | "icons-first" | "list";
    /**
     * List of table columns
     */
    columns: ITableColumn[];
    /**
     * Component displayed when no data
     */
    emptyState?: ReactNode;
    /**
     * Method to customize table row style
     */
    getRowStyle?: ITableDataCallback<CSSProperties>;
    /**
     * Height of table component (useful when sticky)
     */
    height?: number | string;
    /**
     * Hides toolbar header
     */
    hideHeader?: boolean;
    /**
     * Callback for click events on table row
     */
    onRowClick?: ITableDataCallback<any>;
    /**
     * Callback for click events on table row checkbox
     */
    onSelectionChange?: ITableDataCallback<void, any[]>;
    /**
     * Callback for sort events on table column headers
     */
    onSortChange?: ITableOnSortCallback;
    /**
     * List of table rows
     */
    rows: any[];
    /**
     * Method to allow pre-selection of rows
     */
    selectionFilter?: ITableDataCallback<boolean>;
    /**
     * Show filters row (does nothing if there's no column with `renderFilter` defined)
     */
    showFilters?: boolean;
    /**
     * Default table sorting
     */
    sorting?: ITableSorting;
    /**
     * Enables sticky mode
     */
    sticky?: boolean;
    /**
     * Flag to enable sticky mode on selection checkbox
     */
    stickySelection?: boolean;
    /**
     * Table layout (table.style.tableLayout)
     */
    tableLayout?: "fixed" | "auto";
    /**
     * Table title
     */
    title: string;
  };
