import { BaseType } from "./Base";
import { Icons } from "./Icon";

export enum AvatarVariant {
  default = "circle",
  rounded = "rounded",
  squared = "square",
}

export interface AvatarType extends BaseType {
  alt?: string;
  icon?: Icons;
  src?: string;
  text?: string;
  variant?: AvatarVariant;
}
