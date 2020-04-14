import { BaseType } from "./Base";

export enum InputSize {
  default = "medium",
  small = "small",
}

export enum InputDataType {
  default = "text",
  number = "number",
}

export enum InputVariant {
  default = "outlined",
  filled = "filled",
}

export interface InputType extends BaseType {
  disabled?: boolean;
  label: string;
  // TODO#lb: implement labelId
  // labelId: string,
  onChange?: Function;
  required?: boolean;
  size?: InputSize;
  type?: InputDataType;
  variant?: InputVariant;
}
