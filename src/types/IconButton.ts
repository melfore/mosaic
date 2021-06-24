import { IClickable } from "./Base";
import { IIcon, IIconUtilizer } from "./Icon";

export interface IBaseIconButton extends IClickable, IIconUtilizer {}

export type IIconButton = IBaseIconButton &
  Pick<IIcon, "rotate" | "size"> & {
    disabled?: boolean;
  };
