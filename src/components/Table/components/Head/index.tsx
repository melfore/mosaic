import React, { CSSProperties, FC, useMemo } from "react";
import { TableHead as MUITableHead, TableRow as MUITableRow } from "@material-ui/core";

import { useMosaicContext } from "../../../../hooks/useMosaicContext";
import { ITableHead } from "../../../../types/Table";
import { TOOLBAR_HEIGHT, TOOLBAR_HEIGHT_MOBILE } from "../../utils";
import TableHeadFilterCell from "../HeadFilter";

const TableHead: FC<ITableHead> = ({ children, columns, dataCy, showFilters, sticky }) => {
  const {
    view: { mobile },
  } = useMosaicContext();

  const toolbarHeight = useMemo(() => (mobile ? TOOLBAR_HEIGHT_MOBILE : TOOLBAR_HEIGHT), [mobile]);

  const headerStyle = useMemo((): CSSProperties | undefined => {
    // mui table set sticky position at cell level (see HeadCell component).
    // When filters row is present, we need to set sticky positioning to the whole
    // table head in order to avoid tracking the actual height of the first header
    // row (which can vary depending on table width and cell content length).

    if (showFilters && sticky) {
      return { top: toolbarHeight, position: "sticky", zIndex: 1 };
    }
    return undefined;
  }, [showFilters, sticky, toolbarHeight]);

  return (
    <MUITableHead data-cy={dataCy} style={headerStyle}>
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
};

export default TableHead;
