import { IInputField } from "./Input";

export type INullableNumber = number | null;

export interface IInputNumber extends IInputField {
  /**
   * Integer or decimal number
   */
  integer?: boolean;
  /**
   * Minimum allowed value
   */
  minValue?: number;
  /**
   * Maximum allowed value
   */
  maxValue?: number;
  onChange?: (value: INullableNumber) => void;
  value?: INullableNumber;
}
