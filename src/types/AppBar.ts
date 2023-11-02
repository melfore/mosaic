import { ReactNode } from "react";

import { IBase, ILocalizable } from "./Base";
import { IBaseButton } from "./Button";
import { IBaseIconButton } from "./IconButton";
import { IMenu } from "./Menu";

export interface AppBarActionsProps extends IBase {
  /**
   * Actions available for AppBar
   */
  actions?: IBaseIconButton[];
  /**
   * Locale dedicated menu
   */
  locale?: IMenu;
  /**
   * User dedicated menu
   */
  user?: IMenu;
}

export interface AppBarTitleProps extends IBase {
  /**
   * Callback for click events on AppBar title
   */
  onTitleClick?: () => void;
  /**
   * AppBar title
   */
  title?: string;
}

export interface AppBarContentProps extends AppBarTitleProps, IBase {
  /**
   * Main AppBar menu
   */
  menu?: IBaseIconButton;
}

export type AppBarProps = AppBarActionsProps &
  AppBarContentProps &
  ILocalizable & {
    /**
     * When specified it gets rendered as main content, has precedence over title
     */
    children?: ReactNode;
    /**
     * User dedicated menu
     * [@deprecated Use user.items]
     */
    userMenu?: IBaseButton[];
    /**
     * Username to display
     * [@deprecated Use user.label]
     */
    username?: string;
  };
