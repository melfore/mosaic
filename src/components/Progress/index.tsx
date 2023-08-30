import React, { FC, useMemo } from "react";
import { Box, LinearProgress as MUILinearProgress } from "@mui/material";
import MUICircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { ProgressType } from "../../types/Progress";

export const DATA_CY_DEFAULT = "progress";

const Progress: FC<ProgressType> = ({
  dataCy = DATA_CY_DEFAULT,
  color = "primary",
  type = "Circular",
  withLabel,
  variant,
  value = 100,
}) => {
  const percent = useMemo(() => {
    if (value < 0) {
      return 0;
    } else if (value > 100) {
      return 100;
    }
    return value;
  }, [value]);

  if (type === "Circular") {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <MUICircularProgress data-cy={dataCy} color={color} variant={variant} value={percent} />
        {withLabel && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              {percent + `%`}
            </Typography>
          </Box>
        )}
      </Box>
    );
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <MUILinearProgress data-cy={dataCy} color={color} variant={variant} value={percent} />
      </Box>
      {withLabel && (
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">
            {percent + `%`}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Progress;
