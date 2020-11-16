import { ILocalizable } from "./Base";

export enum SwitchSize {
  small = "small",
  default = "medium",
}

export interface ISwitch extends ILocalizable {
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => any | void;
  required?: boolean;
  size?: SwitchSize;
  value?: boolean;
}
