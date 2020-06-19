import { BaseType } from "./Base";
import { Icons } from "./Icon";

interface UserMenuItem {
  label: string;
  onClick: () => void;
}

interface ActionItem {
  icon: Icons;
  onClick: () => void;
}

export interface AppBarType extends BaseType {
  actions?: ActionItem[];
  menu?: ActionItem;
  onTitleClick?: () => void;
  title?: string;
  userMenu?: UserMenuItem[];
}
