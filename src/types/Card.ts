import { ILoadable } from "./Base";
import { Icons } from "./Icon";
import { ReactElement } from "react";

export interface CardType extends ILoadable {
  actions?: ReactElement[];
  collapsible?: ReactElement;
  icon?: Icons;
  title: string;
  subtitle?: string;
  unmountCollapsible?: boolean;
}
