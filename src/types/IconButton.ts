import { MouseEvent } from "react";
import { Icons, IconSize } from "./Icon";
import { IBase } from "./Base";

export interface IconButtonType extends IBase {
  icon: Icons;
  onClick: (event: MouseEvent) => void;
  disabled?: boolean;
  size?: IconSize;
}
