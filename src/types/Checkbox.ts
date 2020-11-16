import { ILocalizable } from "./Base";

export enum CheckboxSize {
  small = "small",
  default = "medium",
}

export interface ICheckbox extends ILocalizable {
  disabled?: boolean;
  intermediate?: boolean;
  label?: string;
  labelPlacement?: "end" | "start";
  onChange?: (checked: boolean) => void;
  required?: boolean;
  size?: CheckboxSize;
  value?: boolean;
}
