export enum Color {
  default = "default",
  inherit = "inherit",
  primary = "primary",
  secondary = "secondary",
}

export interface IBase {
  color?: Color;
  dataCy?: string;
}

export interface ILoadable extends IBase {
  loading?: boolean;
}

// TODO: door open to allow explicit property localization
export interface ILocalizable extends IBase {
  localized?: boolean;
}
