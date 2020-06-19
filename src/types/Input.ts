import { BaseType } from "./Base";

export enum InputSize {
  default = "medium",
  small = "small",
}

export enum InputDataType {
  default = "text",
  number = "number",
  password = "password",
}

export enum InputVariant {
  default = "outlined",
  filled = "filled",
  underlined = "standard",
}

export interface InputType extends BaseType {
  disabled?: boolean;
  label?: string;
  onChange?: Function;
  placeholder?: string;
  required?: boolean;
  shrink?: boolean;
  size?: InputSize;
  type?: InputDataType;
  variant?: InputVariant;
}
