import { IBase } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

export type IMenuItemCallback = (value: string) => void;

export interface IMenuItem {
  /**
   * Menu item label
   */
  label?: string;
  /**
   * Callback for click events, dedicated for menu item
   */
  onClick?: IMenuItemCallback;
  /**
   * Value of menu item
   */
  value: string;
}

export type IMenuType = "button" | "icon";

export interface IMenu extends IBase, IPartialIconUtilizer {
  /**
   * List of menu items
   */
  items: IMenuItem[];
  /**
   * Menu label
   */
  label: string;
  /**
   * Callback for click events, applied to all menu items
   */
  onItemClick?: IMenuItemCallback;
  /**
   * Menu button type 'button' or 'icon'
   */
  type?: IMenuType;
}
