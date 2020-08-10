import { IBase } from "./Base";
import { Icons, IconSize } from "./Icon";

export interface IIconButton extends IBase {
  disabled?: boolean;
  icon: Icons;
  onClick: () => void;
  size?: IconSize;
}
