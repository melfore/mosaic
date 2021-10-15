import { ILocalizable } from "./Base";

export enum InputSize {
  default = "medium",
  small = "small",
}

export enum InputType {
  default = "text",
  number = "number",
  password = "password",
}

export enum InputVariant {
  default = "outlined",
  filled = "filled",
  underlined = "standard",
}

export interface IDisablable {
  /**
   * Adds disabled state and prevents interaction
   */
  disabled?: boolean;
}

export interface IInput extends IDisablable, ILocalizable {
  label?: string;
  onChange?: Function;
  placeholder?: string;
  required?: boolean;
  shrink?: boolean;
  size?: InputSize;
  type?: InputType;
  variant?: InputVariant;
}
