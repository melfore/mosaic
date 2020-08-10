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

export interface IInput extends ILocalizable {
  disabled?: boolean;
  label?: string;
  onChange?: Function;
  placeholder?: string;
  required?: boolean;
  shrink?: boolean;
  size?: InputSize;
  type?: InputType;
  variant?: InputVariant;
}
