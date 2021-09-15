import React, { FC, useCallback, useMemo } from "react";
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

  const safeCount = useMemo(() => rowsTotal || 0, [rowsTotal]);

  const safePage = useMemo(() => (!safeCount ? 0 : page), [page, safeCount]);

  return (
    <MUITablePagination
      ActionsComponent={paginationActions}
      component="div"
      count={safeCount}
      onPageChange={(event, page) => {
        suppressEvent(event);
        onPageChange && onPageChange(page);
      }}
      onRowsPerPageChange={(event) => {
        const pageSize = parseInt(event.target.value, 10);
        onPageSizeChange && onPageSizeChange(0, pageSize);
      }}
      page={safePage}
      rowsPerPage={pageSize}
      rowsPerPageOptions={pageSizeOptions}
      style={style}
    />
  );
};

export default TablePagination;
