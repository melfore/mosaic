import { ILocalizable } from "./Base";

/**
 * @deprecated Use "small" | "medium"
 */
export enum CheckboxSize {
  small = "small",
  default = "medium",
}

type ICheckboxSize = "small" | "medium";

export interface ICheckbox extends ILocalizable {
  disabled?: boolean;
  intermediate?: boolean;
  label?: string;
  labelPlacement?: "end" | "start";
  onChange?: (checked: boolean) => void;
  required?: boolean;
  size?: ICheckboxSize | CheckboxSize;
  value?: boolean;
}
