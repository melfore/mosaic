import { ILoadable, ILocalizable } from "./Base";
import { Icons } from "./Icon";
import { ReactElement } from "react";

export interface ICard extends ILoadable, ILocalizable {
  actions?: ReactElement[];
  collapsible?: ReactElement;
  icon?: Icons;
  title: string;
  subtitle?: string;
  unmountCollapsible?: boolean;
}
