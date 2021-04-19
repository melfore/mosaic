import { ILoadable } from "./Base";
import { Icons } from "./Icon";

export enum AvatarVariant {
  default = "circular",
  rounded = "rounded",
  squared = "square",
}

export interface IAvatar extends ILoadable {
  alt?: string;
  icon?: Icons;
  src?: string;
  text?: string;
  variant?: AvatarVariant;
}
