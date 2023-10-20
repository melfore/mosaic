import { IBase, ILocalizable } from "./Base";
import { IIconElement } from "./Icon";

export type BreadCrumbsType = IBase &
  ILocalizable & {
    /**
     * List of Links
     */
    link: { label: string; href: string; icon?: IIconElement }[];
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
