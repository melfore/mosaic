import { ILoadable } from "./Base";
import { Icons } from "./Icon";
import { ReactNode } from "react";

interface IBaseListItem extends ILoadable {
  content?: ReactNode;
  dense?: boolean;
  onClick?: () => void;
  selected?: boolean;
}

export interface IListItem extends IBaseListItem {
  icon?: Icons;
}

export interface IListItemCollapsible extends IBaseListItem {
  header: ReactNode;
  open?: boolean;
  openTimeout?: "auto" | number;
  unmountContent?: boolean;
}
