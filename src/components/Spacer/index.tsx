import React, { CSSProperties, FC, memo, useMemo } from "react";
import { useTheme } from "@mui/material";

import { ISpacer } from "../../types/Spacer";

export const DATA_CY_DEFAULT = "spacer";

const Spacer: FC<ISpacer> = ({ dataCy = DATA_CY_DEFAULT, direction = "horizontal", level: externalLevel = 1 }) => {
  const { spacing } = useTheme();

  const level = useMemo(() => (externalLevel < 0 || !externalLevel ? 1 : externalLevel), [externalLevel]);

  const height = useMemo(() => (direction === "horizontal" ? 0 : spacing(level)), [direction, level, spacing]);

  const width = useMemo(() => (direction === "horizontal" ? spacing(level) : 0), [direction, level, spacing]);

  const style = useMemo(
    (): CSSProperties => ({
      display: "block",
      height,
      width,
    }),
    [height, width]
  );

  return <div data-cy={dataCy} style={style} />;
};

export const MemoizedSpacer = memo(Spacer);

export default MemoizedSpacer;
