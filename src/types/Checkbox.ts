import { IBase } from "./Base";

export enum CheckboxSize {
  small = "small",
  default = "medium",
}

export interface ICheckbox extends IBase {
  disabled?: boolean;
  intermediate?: boolean;
  onChange?: (checked: boolean) => any | void;
  required?: boolean;
  size?: CheckboxSize;
  value?: boolean;
}
