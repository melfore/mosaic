import { BaseType } from "./Base";
import { Icons } from "./Icon";
import { ReactElement } from "react";

export interface CardType extends BaseType {
  actions?: ReactElement[];
  collapsible?: ReactElement;
  content: ReactElement;
  icon?: Icons;
  title: string;
  subtitle?: string;
  unmountCollapsible?: boolean;
}
