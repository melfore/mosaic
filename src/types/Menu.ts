import { IBase } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

export type IMenuItemCallback = (value: string) => void;

export interface IMenuItem {
  label?: string;
  onClick?: IMenuItemCallback;
  value: string;
}

export interface IMenu extends IBase, IPartialIconUtilizer {
  items: IMenuItem[];
  label?: string;
  onItemClick?: IMenuItemCallback;
}
