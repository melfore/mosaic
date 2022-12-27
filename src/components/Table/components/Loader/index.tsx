import React, { CSSProperties, FC, useMemo } from "react";
import { CircularProgress as MUICircularProgress, useTheme } from "@mui/material";

import { LOADER_Z_INDEX } from "../../utils";

interface ITableLoader {}

const TableLoader: FC<ITableLoader> = () => {
  const theme = useTheme();

  const style = useMemo((): CSSProperties => {
    return {
      alignItems: "center",
      backgroundColor: theme.palette.action.hover,
      cursor: "wait",
      display: "flex",
      height: "100%",
      justifyContent: "center",
      left: 0,
      pointerEvents: "unset",
      position: "absolute",
      top: 0,
      userSelect: "none",
      width: "100%",
      zIndex: LOADER_Z_INDEX,
    };
  }, [theme]);

  return (
    <div style={style}>
      <MUICircularProgress />
    </div>
  );
};

export default TableLoader;
