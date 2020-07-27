import { IBase } from "./Base";

export enum CheckboxSize {
  small = "small",
  default = "medium",
}

export interface CheckboxType extends IBase {
  value?: boolean;
  onChange?: (checked: boolean) => any | void;
  required?: boolean;
  size?: CheckboxSize;
  disabled?: boolean;
  intermediate?: boolean;
}
