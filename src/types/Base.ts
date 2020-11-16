export interface IBase {
  dataCy?: string;
}

export interface ILoadable extends IBase {
  loading?: boolean;
}

// TODO: door open to allow explicit property localization
export interface ILocalizable extends IBase {
  localized?: boolean;
}
