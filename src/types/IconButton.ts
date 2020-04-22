import { MouseEvent } from "react";
import { Icons, IconSize } from "./Icon";
import { BaseType } from "./Base";

export interface IconButtonType extends BaseType {
  icon: Icons;
  onClick: (event: MouseEvent) => void;
  disabled?: boolean;
  size?: IconSize;
}
