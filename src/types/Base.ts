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

export interface DEPRECATED_IBaseIntl extends IBase {
  labelId: string;
}

export interface ILoadable extends IBase {
  loading?: boolean;
}

export interface ILocalizable extends IBase {
  localized?: boolean | string[];
}
