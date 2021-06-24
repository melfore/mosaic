import { ILoadable } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

export enum AvatarVariant {
  default = "circular",
  rounded = "rounded",
  squared = "square",
}

export interface IAvatar extends ILoadable, IPartialIconUtilizer {
  alt?: string;
  src?: string;
  text?: string;
  variant?: AvatarVariant;
}
