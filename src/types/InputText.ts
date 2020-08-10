import { Icons } from "./Icon";
import { IInput, InputType } from "./Input";

export interface IMultilineInput {
  rows: number;
  rowsMax?: number;
}

export interface IInputAdornment {
  icon: Icons;
  onClick?: () => void;
}

export interface IInputText extends IInput {
  adornment?: IInputAdornment;
  initialValue?: string;
  multiline?: IMultilineInput;
  type?: InputType;
}
