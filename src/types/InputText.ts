import { InputType } from "./Input";

export interface MultilineInputType {
  rows: number;
  rowsMax?: number;
}

export interface InputTextProps extends InputType {
  multiline?: MultilineInputType;
}
