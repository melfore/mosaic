import React, { FC, useMemo } from "react";

import { ISpacer } from "../../types/Spacer";

export const DATA_CY_DEFAULT = "spacer";

const Spacer: FC<ISpacer> = ({ dataCy = DATA_CY_DEFAULT, direction = "horizontal", level: externalLevel = 1 }) => {
  const size = useMemo(() => {
    let level = externalLevel;
    if (level < 0 || !level) {
      level = 1;
    }

    return level * 8;
  }, [externalLevel]);

  const height = useMemo(() => (direction === "horizontal" ? 0 : `${size}px`), [direction, size]);
  const width = useMemo(() => (direction === "horizontal" ? `${size}px` : 0), [direction, size]);

  return <div data-cy={dataCy} style={{ display: "block", height, width }} />;
};

export default Spacer;
