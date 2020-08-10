import React, { FC } from "react";
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
}) => {
  if (loading) {
    const dimensions = ((size: IconSize): number => {
      switch (size) {
        case IconSize.small:
          return 20;
        default:
        case IconSize.default:
          return 24;
        case IconSize.large:
          return 35;
      }
    })(size);

    return <MUISkeleton height={dimensions} variant="rect" width={dimensions} />;
  }

  const icon = iconsCatalog[name];
  return React.cloneElement(icon, { ...forwarded, "data-cy": dataCy, fontSize: size });
};

export default Icon;
