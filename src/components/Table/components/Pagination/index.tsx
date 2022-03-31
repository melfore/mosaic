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
  onPageChange: externalOnPageChange,
  onPageSizeChange: externalOnPageSizeChange,
  page,
  pageSize,
  pageSizeOptions,
  rowsTotal,
  style,
}) => {
  const paginationActions = useCallback(
    (props: MUITablePaginationProps) => <TablePaginationActions {...props} dataCy={dataCy} />,
    [dataCy]
  );

  const safeCount = useMemo(() => rowsTotal || 0, [rowsTotal]);

  const safePage = useMemo(() => (!safeCount ? 0 : page), [page, safeCount]);

  const onPageChange = useCallback(
    (event, page) => {
      suppressEvent(event);
      externalOnPageChange && externalOnPageChange(page);
    },
    [externalOnPageChange]
  );

  const onPageSizeChange = useCallback(
    (event) => {
      const pageSize = parseInt(event.target.value, 10);
      externalOnPageSizeChange && externalOnPageSizeChange(0, pageSize);
    },
    [externalOnPageSizeChange]
  );

  return (
    <MUITablePagination
      ActionsComponent={paginationActions}
      component="div"
      count={safeCount}
      onPageChange={onPageChange}
      onRowsPerPageChange={onPageSizeChange}
      page={safePage}
      rowsPerPage={pageSize}
      rowsPerPageOptions={pageSizeOptions}
      style={style}
    />
  );
};

export default TablePagination;
