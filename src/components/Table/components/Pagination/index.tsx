import React, { FC, useCallback } from "react";
import {
  TablePagination as MUITablePagination,
  TablePaginationProps as MUITablePaginationProps,
} from "@material-ui/core";

import { ITablePagination } from "../../../../types/Table";
import { suppressEvent } from "../../../../utils";
import TablePaginationActions from "../PaginationActions";

const TablePagination: FC<ITablePagination> = ({
  dataCy,
  onPageChange,
  onPageSizeChange,
  page,
  pageSize,
  pageSizeOptions,
  rowsTotal,
  style,
  subpart,
}) => {
  const paginationActions = useCallback(
    (props: MUITablePaginationProps) => <TablePaginationActions {...props} dataCy={dataCy} subpart={subpart} />,
    [dataCy, subpart]
  );

  return (
    <MUITablePagination
      ActionsComponent={paginationActions}
      component="div"
      count={rowsTotal || 0}
      onPageChange={(event, page) => {
        suppressEvent(event);
        onPageChange && onPageChange(page);
      }}
      onRowsPerPageChange={(event) => {
        const pageSize = parseInt(event.target.value, 10);
        onPageSizeChange && onPageSizeChange(0, pageSize);
      }}
      page={page}
      rowsPerPage={pageSize}
      rowsPerPageOptions={pageSizeOptions}
      style={style}
    />
  );
};

export default TablePagination;
