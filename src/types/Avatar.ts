import { LoadableType } from "./Base";
import { Icons } from "./Icon";

export enum AvatarVariant {
  default = "circle",
  rounded = "rounded",
  squared = "square",
}

export interface AvatarType extends LoadableType {
  alt?: string;
  icon?: Icons;
  src?: string;
  text?: string;
  variant?: AvatarVariant;
}
