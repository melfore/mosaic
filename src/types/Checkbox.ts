import { IInputBoolean } from "./InputBoolean";

/**
 * @deprecated Use "small" | "medium"
 */
export enum CheckboxSize {
  small = "small",
  default = "medium",
}

export interface ICheckbox extends IInputBoolean {
  /**
   * Adds intermediate state
   */
  intermediate?: boolean;
}
