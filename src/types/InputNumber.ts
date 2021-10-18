import { IInputField } from "./Input";

export type INullableNumber = number | null;

export interface IInputNumber extends IInputField {
  integer?: boolean;
  minValue?: number;
  maxValue?: number;
  onChange?: (value: INullableNumber) => void;
  value?: INullableNumber;
}
