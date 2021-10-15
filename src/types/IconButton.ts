import { IClickable } from "./Base";
import { IIcon, IIconUtilizer } from "./Icon";
import { IDisablable } from "./Input";

export interface IBaseIconButton extends IClickable, IIconUtilizer {}

export type IIconButton = IBaseIconButton & IDisablable & Pick<IIcon, "rotate" | "size">;
