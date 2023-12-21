import { ReactNode } from "react";

import { ILoadable, ILocalizable } from "./Base";

/**
 * @deprecated Use "body" | "caption" | "label" | "overline" | "pagetitle" | "title"
 */
export enum TypographyVariants {
  body = "body1",
  caption = "caption",
  label = "subtitle1",
  overline = "overline",
  pagetitle = "h5",
  title = "h6",
}

export type ITypographyVariants = "body" | "caption" | "label" | "overline" | "pagetitle" | "title";

/**
 * @deprecated Use "block" | "initial" | "inline"
 */
export enum TypographyDisplay {
  default = "initial",
  block = "block",
  inline = "inline",
}

type ITypographyDisplay = "block" | "initial" | "inline";

export interface ITypography extends ILoadable, ILocalizable {
  /**
   * Adds bottom spacing
   */
  bottomSpacing?: boolean;
  /**
   * Content of Typography, can also be expressed via children
   */
  content?: ReactNode;
  /**
   * Display mode
   */
  display?: ITypographyDisplay | TypographyDisplay;
  /**
   * Enables truncated mode (useful when container has width constraints)
   */
  truncated?: boolean;
  /**
   * Variant mode
   */
  variant?: ITypographyVariants | TypographyVariants;
}
