import { IClickable } from "./Base";
import { IconSize, IIconUtilizer } from "./Icon";

export interface IBaseIconButton extends IClickable, IIconUtilizer {}

// TODO: add rotate reusing IIcon props
export interface IIconButton extends IBaseIconButton {
  disabled?: boolean;
  size?: IconSize;
}
