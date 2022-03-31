import React, { CSSProperties, FC, useMemo } from "react";
import { CircularProgress as MUICircularProgress, useTheme } from "@mui/material";

import { TOOLBAR_HEIGHT } from "../../utils";

interface ITableLoader {
  hideHeader?: boolean;
  sticky?: boolean;
}

const TableLoader: FC<ITableLoader> = ({ hideHeader = false, sticky = false }) => {
  const theme = useTheme();

  const heightPositioning = useMemo(() => {
    if (!hideHeader && sticky) {
      return { height: `calc(100% - ${TOOLBAR_HEIGHT}px)`, top: `${TOOLBAR_HEIGHT}px` };
    }

    return { height: "100%", top: 0 };
  }, [hideHeader, sticky]);

  const style = useMemo((): CSSProperties => {
    return {
      ...heightPositioning,
      alignItems: "center",
      backgroundColor: theme.palette.action.hover,
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      width: "100%",
      zIndex: 2,
    };
  }, [heightPositioning, theme]);

  return (
    <div style={style}>
      <MUICircularProgress />
    </div>
  );
};

export default TableLoader;
