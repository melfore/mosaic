import React, { FC, useMemo } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { IconSize, IIcon, IIconDimensions } from "../../types/Icon";

import { iconsCatalog } from "./utils";

export const DATA_CY_DEFAULT = "icon";

const ICON_DIMENSIONS: IIconDimensions = {
  [IconSize.default]: 24,
  [IconSize.large]: 35,
  [IconSize.small]: 20,
};

const Icon: FC<IIcon> = ({
  dataCy = DATA_CY_DEFAULT,
  forwarded = {},
  loading = false,
  name,
  size = IconSize.default,
  style,
}) => {
  const iconDimension = useMemo(() => ICON_DIMENSIONS[size], [size]);

  if (loading) {
    return <MUISkeleton height={iconDimension} variant="rect" width={iconDimension} />;
  }

  const icon = iconsCatalog[name];
  return React.cloneElement(icon, { ...forwarded, "data-cy": dataCy, fontSize: size, style });
};

export default Icon;
