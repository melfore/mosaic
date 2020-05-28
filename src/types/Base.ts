export enum Color {
  default = "default",
  inherit = "inherit",
  primary = "primary",
  secondary = "secondary",
}

export interface BaseType {
  color?: Color;
  dataCy?: string;
}

export interface BaseIntlType extends BaseType {
  labelId: string;
}

export interface LoadableType extends BaseType {
  loading?: boolean;
}
