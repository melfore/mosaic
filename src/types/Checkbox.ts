import { BaseType } from "./Base";

export enum CheckboxSize {
  small = "small",
  default = "medium",
}

export interface CheckboxType extends BaseType {
  value?: boolean;
  onChange?: (checked: boolean) => any | void;
  required?: boolean;
  size?: CheckboxSize;
  disabled?: boolean;
  intermediate?: boolean;
}
