import { ReactNode } from "react";

import { ILoadable, IPartialClickable } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

interface IBaseListItem extends ILoadable, IPartialClickable {
  /**
   * Content of ListItem, can also be expressed via children
   */
  content?: ReactNode;
  /**
   * Dense mode, smaller margins and paddings
   */
  dense?: boolean;
  /**
   * Adds selected state
   */
  selected?: boolean;
}

export interface IListItem extends IBaseListItem, IPartialIconUtilizer {}

export interface IListItemCollapsible extends IBaseListItem {
  header: ReactNode;
  open?: boolean;
  openTimeout?: "auto" | number;
  unmountContent?: boolean;
}
