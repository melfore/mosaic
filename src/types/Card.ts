import { ILoadable, ILocalizable } from "./Base";
import { Icons } from "./Icon";
import { ReactElement, ReactNode } from "react";

export interface ICard extends ILoadable, ILocalizable {
  actions?: ReactElement[];
  collapsible?: ReactNode;
  icon?: Icons;
  title: string;
  subtitle?: string;
  unmountCollapsible?: boolean;
}
