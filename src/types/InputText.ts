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
  // TODO: relaxing type def to IInput one -> onChange?: (value: any) => void;
  // TODO: enforce type def in one of next releases
  // onChange?: (value: string) => void;
  value?: string;
}
