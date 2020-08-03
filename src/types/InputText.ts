import { Icons } from "./Icon";
import { IInput, InputType } from "./Input";

export interface MultilineInputType {
  rows: number;
  rowsMax?: number;
}

export interface InputAdornmentType {
  icon: Icons;
  onClick?: () => void;
}

export interface InputTextType extends IInput {
  adornment?: InputAdornmentType;
  initialValue?: string;
  multiline?: MultilineInputType;
  type?: InputType;
}
