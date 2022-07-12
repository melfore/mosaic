import { IClickable } from "./Base";
import { IIcon, IIconUtilizer } from "./Icon";
import { IDisablableInput } from "./Input";

export interface IBaseIconButton extends IClickable, IIconUtilizer {
  /**
   * Text of tooltip
   */
  tooltip?: string;
}

export type IIconButton = IBaseIconButton & IDisablableInput & Pick<IIcon, "rotate" | "size">;
