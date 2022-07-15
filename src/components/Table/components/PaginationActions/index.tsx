import React, { FC, useCallback, useMemo } from "react";
import { useTheme } from "@material-ui/core";

import { Icons } from "../../../../types/Icon";
import { ITablePaginationActions } from "../../../../types/Table";
import { getComposedDataCy, ISubpart } from "../../../../utils";
import IconButton from "../../../IconButton";

export const PAGINATION_ACTION_SUBPART: ISubpart = {
  label: "Pagination (with label)",
  value: (label = "{label}") => `pagination-${label}`,
};

const TablePaginationActions: FC<ITablePaginationActions> = ({
  count: rowsTotal,
  dataCy,
  onPageChange,
  page,
  rowsPerPage: pageSize,
}) => {
  const theme = useTheme();

  const getPaginationActionDataCy = useCallback(
    (action: string) => getComposedDataCy(dataCy, PAGINATION_ACTION_SUBPART, action),
    [dataCy]
  );

  const lastPage = useMemo(
    () => (!rowsTotal || !pageSize ? 0 : Math.ceil(rowsTotal / pageSize) - 1),
    [pageSize, rowsTotal]
  );

  const leftDisabled = useMemo(() => !page, [page]);

  const rightDisabled = useMemo(() => page >= lastPage, [lastPage, page]);

  const style = useMemo(
    () => ({
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      padding: `${theme.spacing(1)}px`,
    }),
    [theme]
  );

  return (
    <div style={style}>
      <IconButton
        dataCy={getPaginationActionDataCy("first")}
        disabled={leftDisabled}
        icon={Icons.first}
        onClick={() => onPageChange(null, 0)}
        tooltip="First"
      />
      <IconButton
        dataCy={getPaginationActionDataCy("prev")}
        disabled={leftDisabled}
        icon={Icons.left}
        onClick={() => onPageChange(null, page - 1)}
        tooltip="Prev"
      />
      <IconButton
        dataCy={getPaginationActionDataCy("next")}
        disabled={rightDisabled}
        icon={Icons.right}
        onClick={() => onPageChange(null, page + 1)}
        tooltip="Next"
      />
      <IconButton
        dataCy={getPaginationActionDataCy("last")}
        disabled={rightDisabled}
        icon={Icons.last}
        onClick={() => onPageChange(null, lastPage)}
        tooltip="Last"
      />
    </div>
  );
};

export default TablePaginationActions;
