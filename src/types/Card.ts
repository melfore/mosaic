import { LoadableType } from "./Base";
import { Icons } from "./Icon";
import { ReactElement } from "react";

export interface CardType extends LoadableType {
  actions?: ReactElement[];
  collapsible?: ReactElement;
  content: ReactElement;
  icon?: Icons;
  title: string;
  subtitle?: string;
  unmountCollapsible?: boolean;
}
