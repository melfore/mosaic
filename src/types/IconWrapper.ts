import { IBase } from "./Base";
import { IIcon, IPartialIconUtilizer } from "./Icon";

export type IIconWrapper = IBase & IPartialIconUtilizer & Omit<IIcon, "name">;
