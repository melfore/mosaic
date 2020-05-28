import { ReactElement } from "react";
import { LoadableType } from "./Base";
import { Icons } from "./Icon";
import { TypographyVariants } from "./Typography";

interface BaseListItemType extends LoadableType {
  dense?: boolean;
  onClick?: () => void;
  selected?: boolean;
  title: string | ReactElement;
  titleVariant?: TypographyVariants;
}

export interface ListItemType extends BaseListItemType {
  icon?: Icons;
}

export interface ListCollapsibleItemType extends BaseListItemType {
  open?: boolean;
  openTimeout?: "auto" | number;
  unmountContent?: boolean;
}
