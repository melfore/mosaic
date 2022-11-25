import { IInputBoolean } from "./InputBoolean";

/**
 * @deprecated Use "small" | "medium"
 */
export enum SwitchSize {
  small = "small",
  default = "medium",
}

export interface ISwitch extends IInputBoolean {
  /**
   * Disable ripple effect
   */
  disableRipple?: boolean;
}
