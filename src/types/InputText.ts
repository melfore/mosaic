import { IInputField } from "./Input";

interface IMultilineInput {
  rows: number;
  rowsMax?: number;
}

export interface IInputText extends IInputField {
  /**
   * Setup for multiline input: { rows: number, rowsMax?: number }
   */
  multiline?: IMultilineInput;
  // TODO: enable soon with breaking change
  // onChange?: (value: string) => void;
  value?: string;
}
