import { ILocalizable } from "./Base";
import { IBaseButton } from "./Button";
import { IBaseIconButton } from "./IconButton";
import { IMenu } from "./Menu";

export interface IAppBar extends ILocalizable {
  actions?: IBaseIconButton[];
  locale?: IMenu;
  menu?: IBaseIconButton;
  onTitleClick?: () => void;
  title?: string;
  user?: IMenu;
  userMenu?: IBaseButton[];
  username?: string;
}
