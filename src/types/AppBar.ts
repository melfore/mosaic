import { ILocalizable } from "./Base";
import { IBaseButton } from "./Button";
import { IBaseIconButton } from "./IconButton";
import { IMenu } from "./Menu";

export interface IAppBar extends ILocalizable {
  /**
   * Actions available for AppBar
   */
  actions?: IBaseIconButton[];
  /**
   * Locale dedicated menu
   */
  locale?: IMenu;
  /**
   * Main AppBar menu
   */
  menu?: IBaseIconButton;
  /**
   * Callback for click events on AppBar title
   */
  onTitleClick?: () => void;
  /**
   * AppBar title
   */
  title?: string;
  /**
   * User dedicated menu
   */
  user?: IMenu;
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
}
