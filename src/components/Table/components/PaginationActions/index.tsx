import React, { FC, useMemo } from "react";
import { useTheme } from "@material-ui/core";

import { Icons } from "../../../../types/Icon";
import { ITablePaginationActions } from "../../../../types/Table";
import { getComposedDataCy } from "../../../../utils";
import IconButton from "../../../IconButton";

const TablePaginationActions: FC<ITablePaginationActions> = ({
  count: rowsTotal,
  dataCy,
  onPageChange,
  page,
  rowsPerPage: pageSize,
  subpart,
}) => {
  const theme = useTheme();

  const lastPage = useMemo(
    () => (!rowsTotal || !pageSize ? 0 : Math.ceil(rowsTotal / pageSize) - 1),
    [pageSize, rowsTotal]
  );

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: `${theme.spacing(1)}px`,
      }}
    >
      <IconButton
        dataCy={getComposedDataCy(dataCy, subpart, "first")}
        disabled={!page}
        icon={Icons.first}
        onClick={() => onPageChange(null, 0)}
      />
      <IconButton
        dataCy={getComposedDataCy(dataCy, subpart, "prev")}
        disabled={!page}
        icon={Icons.left}
        onClick={() => onPageChange(null, page - 1)}
      />
      <IconButton
        dataCy={getComposedDataCy(dataCy, subpart, "next")}
        disabled={page >= lastPage}
        icon={Icons.right}
        onClick={() => onPageChange(null, page + 1)}
      />
      <IconButton
        dataCy={getComposedDataCy(dataCy, subpart, "last")}
        disabled={page >= lastPage}
        icon={Icons.last}
        onClick={() => onPageChange(null, lastPage)}
      />
    </div>
  );
};

export default TablePaginationActions;
