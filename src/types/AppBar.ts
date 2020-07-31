import { ILocalizable } from "./Base";
import { Icons } from "./Icon";

interface IUserMenu {
  label: string;
  onClick: () => void;
}

interface IActionItem {
  icon: Icons;
  onClick: () => void;
}

export interface IAppBar extends ILocalizable {
  actions?: IActionItem[];
  menu?: IActionItem;
  onTitleClick?: () => void;
  title?: string;
  userMenu?: IUserMenu[];
}
