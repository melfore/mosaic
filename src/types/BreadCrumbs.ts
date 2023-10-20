import { ILocalizable } from "./Base";
import { IIconElement } from "./Icon";

export type BreadCrumbsType = ILocalizable & {
  /**
   * List of Links
   */
  links: LinkType[];
  /**
   * Callback for click events
   */
  onClick: (href: string) => void;
  /**
   * Text size
   */
  size?: "small" | "medium" | "large";
  /**
   * Text size
   */
  separator?: "-" | "/" | "<" | ">" | "|";
};

export type LinkType = {
  label: string;
  href: string;
  icon?: IIconElement;
};
