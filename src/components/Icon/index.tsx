import React, { FC, useMemo } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { IconSize, IIcon } from "../../types/Icon";

import { iconsCatalog } from "./utils";

export const DATA_CY_DEFAULT = "icon";

const Icon: FC<IIcon> = ({
  dataCy = DATA_CY_DEFAULT,
  forwarded = {},
  loading = false,
  name,
  size = IconSize.default,
  style,
}) => {
  const iconDimension = useMemo(() => {
    switch (size) {
      case IconSize.small:
        return 20;
      case IconSize.large:
        return 35;
      case IconSize.default:
      default:
        return 24;
    }
  }, [size]);

  if (loading) {
    return <MUISkeleton height={iconDimension} variant="rect" width={iconDimension} />;
  }

  const icon = iconsCatalog[name];
  return React.cloneElement(icon, { ...forwarded, "data-cy": dataCy, fontSize: size, style });
};

export default Icon;
