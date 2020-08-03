import { Icons, IconSize } from "./Icon";
import { IBase } from "./Base";

export interface IIconButton extends IBase {
  disabled?: boolean;
  icon: Icons;
  onClick: () => void;
  size?: IconSize;
}
