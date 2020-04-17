import { BaseType } from "./Base";

export enum TypographyVariants {
  body = "body1",
  caption = "caption",
  label = "subtitle1",
  overline = "overline",
  pagetitle = "h5",
  title = "h6",
}

export interface TypographyType extends BaseType {
  bottomSpacing?: boolean;
  label?: string;
  truncated?: boolean;
  variant?: TypographyVariants;
}
