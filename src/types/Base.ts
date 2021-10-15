import { CSSProperties } from "react";

import { ISubpart } from "../utils";

export interface IBase {
  /**
   * Identifier for element selection in e2e testing
   */
  dataCy?: string;
  /**
   * Custom styling applied to root element of rendered component
   */
  style?: CSSProperties;
}

export interface IClickable extends IBase {
  /**
   * Callback for click events
   */
  onClick: () => void;
}

export type IPartialClickable = Partial<IClickable>;

export interface ILoadable extends IBase {
  /**
   * Component loading state
   */
  loading?: boolean;
}

// TODO: door open to allow explicit property localization
export interface ILocalizable extends IBase {
  /**
   * Component localization support
   */
  localized?: boolean;
}

export interface ISubpartItem extends IBase {
  /**
   * Identifier for element selection in e2e testing
   */
  dataCy: string;
  /**
   * Component subpart described by label and value
   */
  subpart: ISubpart;
}
