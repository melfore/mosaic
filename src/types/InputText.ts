import { IPartialClickable } from "./Base";
import { IIconUtilizer } from "./Icon";
import { IInput, InputType } from "./Input";

export interface IMultilineInput {
  rows: number;
  rowsMax?: number;
}

export interface IInputAdornment extends IIconUtilizer, IPartialClickable {}

export interface IInputText extends IInput {
  adornment?: IInputAdornment;
  multiline?: IMultilineInput;
  type?: InputType;
  value?: string;
}
