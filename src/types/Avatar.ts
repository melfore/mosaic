import { ILoadable } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

export enum AvatarVariant {
  default = "circular",
  rounded = "rounded",
  squared = "square",
}

export interface IAvatar extends ILoadable, IPartialIconUtilizer {
  /**
   * Alternative text for avatar (mandatory when using src)
   */
  alt?: string;
  /**
   * Source for avatar image, has precedence over icon and text
   */
  src?: string;
  /**
   * Text for avatar content, displayed only when no icon nor src are defined
   */
  text?: string;
  /**
   * Variant for avatar shape
   */
  variant?: AvatarVariant;
}
