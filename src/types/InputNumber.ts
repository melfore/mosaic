import { InputType } from "./Input";

export interface InputNumberType extends InputType {
  integer?: boolean;
  minValue?: number;
  maxValue?: number;
  onChange?: (value: number | null) => void | any;
  value?: number | null;
}
