import { ILocalizable, IPartialClickable } from "./Base";
import { IIconUtilizer } from "./Icon";

/**
 * @deprecated Use "small" | "medium"
 */
export enum InputSize {
  default = "medium",
  small = "small",
}

/**
 * @deprecated Use "text" | "number" | "password"
 */
export enum InputType {
  default = "text",
  number = "number",
  password = "password",
}

/**
 * @deprecated Use "outlined" | "filled" | "standard"
 */
export enum InputVariant {
  default = "outlined",
  filled = "filled",
  underlined = "standard",
}

type IInputSize = "small" | "medium";

type IInputType = "text" | "number" | "password";

type IInputVariant = "outlined" | "filled" | "standard";

export interface IDisablableInput {
  /**
   * Adds disabled state and prevents interaction
   */
  disabled?: boolean;
}

export interface IBaseInput extends IDisablableInput, ILocalizable {
  /**
   * Label displayed
   */
  label?: string;
  /**
   * Callback for change events
   */
  onChange?: (value: any) => void;
  /**
   * Adds required state
   */
  required?: boolean;
  /**
   * Size of input
   */
  size?: IInputSize | InputSize;
  /**
   * Input value
   */
  value?: any;
}

export interface IInputAdornment extends IIconUtilizer, IPartialClickable {}

export interface IInputField extends IBaseInput {
  /**
   * Input adornment, can be clickable
   */
  adornment?: IInputAdornment;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Forces shrink of input label
   */
  shrink?: boolean;
  /**
   * Input type
   */
  type?: IInputType | InputType;
  /**
   * Input variant
   */
  variant?: IInputVariant | InputVariant;
}
