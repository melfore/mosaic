import React, { FC } from "react";
import { IconType, IconSize } from "../../types/Icon";
import { iconsCatalog } from "./utils";

const Icon: FC<IconType> = ({ dataCy, forwarded = {}, name, size = IconSize.default }) => {
  const icon = iconsCatalog[name];
  return React.cloneElement(icon, { ...forwarded, "data-cy": dataCy, fontSize: size });
};

export default Icon;
