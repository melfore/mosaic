import { ReactElement, ReactNode } from "react";

import { ILoadable, ILocalizable } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

export interface ICard extends ILoadable, ILocalizable, IPartialIconUtilizer {
  actions?: ReactElement[];
  collapsible?: ReactNode;
  title: string;
  subtitle?: string;
  unmountCollapsible?: boolean;
}
