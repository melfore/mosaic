import { ReactElement, ReactNode } from "react";

import { ILoadable, ILocalizable } from "./Base";
import { IPartialIconUtilizer } from "./Icon";

export interface ICard extends ILoadable, ILocalizable, IPartialIconUtilizer {
  /**
   * List of actions available in footer
   */
  actions?: ReactElement[];
  /**
   * Card collapsible content
   */
  collapsible?: ReactNode;
  /**
   * Card title
   */
  title: string;
  /**
   * Card subtitle
   */
  subtitle?: string;
  /**
   * Unmounts content on collapsible closed
   */
  unmountCollapsible?: boolean;
}
