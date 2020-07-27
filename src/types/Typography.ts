import { ILoadable, ILocalizable } from "./Base";

export enum TypographyVariants {
  body = "body1",
  caption = "caption",
  label = "subtitle1",
  overline = "overline",
  pagetitle = "h5",
  title = "h6",
}

export enum TypographyDisplay {
  default = "initial",
  block = "block",
  inline = "inline",
}

export interface ITypography extends ILoadable, ILocalizable {
  bottomSpacing?: boolean;
  truncated?: boolean;
  variant?: TypographyVariants;
  display?: TypographyDisplay;
}
