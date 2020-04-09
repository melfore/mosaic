import { BaseType } from "./Base";

export enum SwitchSize {
  small = "small",
  medium = "medium", // default value
}

export interface SwitchType extends BaseType {
  value?: boolean;
  onChange?: (checked: boolean) => any | void;
  required?: boolean;
  size?: SwitchSize;
  disabled?: boolean;
}
