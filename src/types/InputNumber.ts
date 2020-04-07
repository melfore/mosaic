import { InputType } from "./Input";

export interface InputNumberType extends InputType {
  integer?: boolean;
  minValue?: number;
  maxValue?: number;
}
