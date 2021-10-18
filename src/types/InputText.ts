import { IInputField } from "./Input";

interface IMultilineInput {
  rows: number;
  rowsMax?: number;
}

export interface IInputText extends IInputField {
  multiline?: IMultilineInput;
  onChange?: (value: string) => void;
  value?: string;
}
