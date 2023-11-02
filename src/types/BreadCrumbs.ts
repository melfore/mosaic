import { ILocalizable } from "./Base";
import { IIconElement } from "./Icon";

export type BreadCrumbsSize = "small" | "medium" | "large";

export type BreadCrumbsLink = {
  label: string;
  href: string;
  icon?: IIconElement;
};

export type BreadCrumbsType = ILocalizable & {
  /**
   * List of Links
   */
  links: BreadCrumbsLink[];
  /**
   * Callback for click events
   */
  onClick: (href: string) => void;
  /**
   * Text size
   */
  size?: BreadCrumbsSize;
  /**
   * Text size
   */
  separator?: "-" | "/" | "<" | ">" | "|";
};
