import { IBase } from "./Base";

export enum SwitchSize {
  small = "small",
  default = "medium",
}

export interface ISwitch extends IBase {
  disabled?: boolean;
  onChange?: (checked: boolean) => any | void;
  required?: boolean;
  size?: SwitchSize;
  value?: boolean;
}
