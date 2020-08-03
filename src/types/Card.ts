import { ReactElement, ReactNode } from "react";

import { ILoadable, ILocalizable } from "./Base";
import { Icons } from "./Icon";

export interface ICard extends ILoadable, ILocalizable {
  actions?: ReactElement[];
  collapsible?: ReactNode;
  icon?: Icons;
  title: string;
  subtitle?: string;
  unmountCollapsible?: boolean;
}
