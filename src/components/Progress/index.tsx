import React, { CSSProperties, FC, memo, useMemo } from "react";
import { LinearProgress as MUILinearProgress, useTheme } from "@mui/material";
import MUICircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { ProgressProps } from "../../types/Progress";

export const DATA_CY_DEFAULT = "progress";

const Progress: FC<ProgressProps> = ({
  dataCy = DATA_CY_DEFAULT,
  color = "primary",
  type,
  withLabel,
  variant,
  value = 100,
}) => {
  const { spacing } = useTheme();

  const percent = useMemo(() => {
    if (value < 0) {
      return 0;
    } else if (value > 100) {
      return 100;
    }

    return value;
  }, [value]);

  const percentString = useMemo(() => `${percent}%`, [percent]);

  const flexCenterStyle = useMemo(
    (): CSSProperties => ({
      alignItems: "center",
      display: "flex",
    }),
    []
  );

  const circularLabelStyle = useMemo(
    (): CSSProperties => ({
      ...flexCenterStyle,
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    }),
    [flexCenterStyle]
  );

  const circularWrapperStyle = useMemo(
    (): CSSProperties => ({
      display: "inline-flex",
      position: "relative",
    }),
    []
  );

  const linearLabelStyle = useMemo(
    (): CSSProperties => ({
      minWidth: spacing(5),
    }),
    [spacing]
  );

  const linearWrapperStyle = useMemo(
    (): CSSProperties => ({
      marginRight: spacing(1),
      width: "100%",
    }),
    [spacing]
  );

  if (type === "circular") {
    return (
      <div style={circularWrapperStyle}>
        <MUICircularProgress data-cy={dataCy} color={color} variant={variant} value={percent} />
        {withLabel && (
          <Typography component="div" color="text.secondary" variant="caption" style={circularLabelStyle}>
            {percentString}
          </Typography>
        )}
      </div>
    );
  }

  return (
    <div style={flexCenterStyle}>
      <MUILinearProgress data-cy={dataCy} color={color} variant={variant} value={percent} style={linearWrapperStyle} />
      {withLabel && (
        <Typography color="text.secondary" variant="body2" style={linearLabelStyle}>
          {percentString}
        </Typography>
      )}
    </div>
  );
};

export const MemoizedProgress = memo(Progress);

export default MemoizedProgress;
