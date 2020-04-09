import { InputType } from "./Input";

export interface MultilineInputType {
  rows: number;
  rowsMax?: number;
}

export interface InputTextType extends InputType {
  initialValue?: string;
  multiline?: MultilineInputType;
}
