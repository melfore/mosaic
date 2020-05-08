import { BaseType } from "./Base";

export interface AppBarType extends BaseType {
  onNavigationMenuClick?: () => void;
  title?: string;
}
