import { ILocalizable } from "./Base";
import { IBaseButton } from "./Button";
import { IBaseIconButton } from "./IconButton";

export interface IAppBar extends ILocalizable {
  actions?: IBaseIconButton[];
  menu?: IBaseIconButton;
  onTitleClick?: () => void;
  title?: string;
  userMenu?: IBaseButton[];
  username?: string;
}
