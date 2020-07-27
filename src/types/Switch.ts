import { IBase } from "./Base";

export enum SwitchSize {
  small = "small",
  default = "medium",
}

export interface SwitchType extends IBase {
  value?: boolean;
  onChange?: (checked: boolean) => any | void;
  required?: boolean;
  size?: SwitchSize;
  disabled?: boolean;
}
