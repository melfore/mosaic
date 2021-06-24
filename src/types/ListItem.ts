import { ReactNode } from "react";

import { ILoadable, IPartialClickable } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

interface IBaseListItem extends ILoadable, IPartialClickable {
  content?: ReactNode;
  dense?: boolean;
  selected?: boolean;
}

export interface IListItem extends IBaseListItem, IPartialIconUtilizer {}

export interface IListItemCollapsible extends IBaseListItem {
  header: ReactNode;
  open?: boolean;
  openTimeout?: "auto" | number;
  unmountContent?: boolean;
}
