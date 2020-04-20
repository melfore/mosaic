import { ReactElement } from "react";
import { BaseType } from "./Base";

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
  // TODO#lb: implement in TableType
  // exportable?: boolean;
  // fetch: (query: string) => void;
  // filterable?: boolean;
  // label?: string;
  // onRowClick?: (event: any, data: any) => void;
  // rows?: any[];
  // searchable?: boolean;
  // selectable?: boolean;
  columns: TableColumnType[];
  loading?: boolean;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  onRowClick?: (event: any, row: any) => void;
  onSearchChange: (query: string) => void;
  onSortChange: (path: string | null, criteria: "asc" | "desc") => void;
  page?: number;
  pageSize?: number;
  rows: any[];
  rowsTotal?: number;
}
