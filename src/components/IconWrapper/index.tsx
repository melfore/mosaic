import React, { FC } from "react";

import { IconSize } from "../../types/Icon";
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
  size = IconSize.default,
  style,
}) => {
  if (!icon) {
    logWarn("IconWrapper", "Skip rendering, both children and name are not set");
    return null;
  }

  return (
    <Icon
      dataCy={dataCy}
      forwarded={forwarded}
      loading={loading}
      name={icon}
      rotate={rotate}
      size={size}
      style={style}
    />
  );
};

export default IconWrapper;
