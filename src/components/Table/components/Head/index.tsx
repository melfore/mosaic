import React, { CSSProperties, forwardRef, PropsWithChildren, useMemo } from "react";
import { TableHead as MUITableHead, TableRow as MUITableRow } from "@mui/material";

import { ITableHead } from "../../../../types/Table";
import { HEADER_Z_INDEX } from "../../utils";
import TableHeadFilterCell from "../HeadFilter";

const TableHead = forwardRef<HTMLTableSectionElement, PropsWithChildren<ITableHead>>(
  ({ children, columns, dataCy, showFilters, sticky }, ref) => {
    const headerStyle = useMemo((): CSSProperties | undefined => {
      if (!showFilters || !sticky) {
        return;
      }

      // mui table set sticky position at cell level (see HeadCell component).
      // When filters row is present, we need to set sticky positioning to the whole
      // table head in order to avoid tracking the actual height of the first header
      // row (which can vary depending on table width and cell content length).
      return {
        position: "sticky",
        top: 0,
        zIndex: HEADER_Z_INDEX,
      };
    }, [showFilters, sticky]);

    return (
      <MUITableHead data-cy={dataCy} style={headerStyle} ref={ref}>
        {children}
        {showFilters && (
          <MUITableRow>
            {columns.map((column, index) => (
              <TableHeadFilterCell
                key={`column-filter-${column.path || index}`}
                dataCy={`column-filter-${column.label || index}`}
                column={column}
              />
            ))}
          </MUITableRow>
        )}
      </MUITableHead>
    );
  }
);

TableHead.displayName = "TableHead";

export default TableHead;
