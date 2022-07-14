import { IAdornment, IAdornmentSubpart } from "./Adornment";
import { IClickable } from "./Base";
import { IIcon, IIconUtilizer } from "./Icon";
import { IDisablableInput } from "./Input";

export type IIconButtonSubpart = IAdornmentSubpart | "icon";

export interface IBaseIconButton extends IAdornment, IClickable, IIconUtilizer {}

export type IIconButton = IBaseIconButton & IDisablableInput & Pick<IIcon, "rotate" | "size">;
