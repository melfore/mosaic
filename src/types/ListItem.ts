import { ILoadable } from "./Base";
import { Icons } from "./Icon";
import { ReactElement } from "react";

interface IBaseListItem extends ILoadable {
  dense?: boolean;
  onClick?: () => void;
  selected?: boolean;
}

export interface IListItem extends IBaseListItem {
  icon?: Icons;
}

export interface IListItemCollapsible extends IBaseListItem {
  header: ReactElement;
  open?: boolean;
  openTimeout?: "auto" | number;
  unmountContent?: boolean;
}
