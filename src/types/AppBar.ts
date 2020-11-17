import { ILocalizable } from "./Base";
import { IIconButton } from "./IconButton";

interface IUserMenu {
  label: string;
  onClick: () => void;
}

type IActionItem = Pick<IIconButton, "icon" | "onClick" | "style">;

export interface IAppBar extends ILocalizable {
  actions?: IActionItem[];
  menu?: IActionItem;
  onTitleClick?: () => void;
  title?: string;
  userMenu?: IUserMenu[];
  username?: string;
}
