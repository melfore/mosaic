import React, { FC, useMemo } from "react";

import { IconSize, IIcon } from "../../types/Icon";
import { IIconWrapper } from "../../types/IconWrapper";
import { logWarn } from "../../utils/logger";
import Icon from "../Icon";

export const DATA_CY_DEFAULT = "icon-wrapper";

const IconWrapper: FC<IIconWrapper> = ({
  dataCy = DATA_CY_DEFAULT,
  forwarded,
  icon,
  loading = false,
  rotate = false,
  size = IconSize.medium,
  style,
}) => {
  const props = useMemo(
    (): IIcon => ({
      dataCy,
      forwarded,
      loading,
      rotate,
      size,
      style,
    }),
    [dataCy, forwarded, loading, rotate, size, style]
  );

  if (!icon) {
    logWarn("IconWrapper", "Skip rendering, both children and name are not set");
    return null;
  }

  // Using Mosaic mapped Icons
  if (typeof icon === "string") {
    return <Icon {...props} name={icon} />;
  }

  return <Icon {...props}>{icon}</Icon>;
};

export default IconWrapper;
