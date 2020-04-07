import { InputType } from "./Input";

export interface InputNumberType extends InputType {
  initialValue?: number | null;
  integer?: boolean;
  minValue?: number;
  maxValue?: number;
  shrink?: boolean;
}
