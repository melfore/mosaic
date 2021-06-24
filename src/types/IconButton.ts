import { IClickable } from "./Base";
import { IconSize, IIconUtilizer } from "./Icon";

export interface IBaseIconButton extends IClickable, IIconUtilizer {}

export interface IIconButton extends IBaseIconButton {
  disabled?: boolean;
  size?: IconSize;
}
