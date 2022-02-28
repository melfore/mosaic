import { IClickable } from "./Base";
import { IIcon, IIconUtilizer } from "./Icon";
import { IDisablableInput } from "./Input";

export interface IBaseIconButton extends IClickable, IIconUtilizer {}

export type IIconButton = IBaseIconButton & IDisablableInput & Pick<IIcon, "rotate" | "size">;
