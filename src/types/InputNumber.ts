import { IInput } from "./Input";

export interface IInputNumber extends IInput {
  integer?: boolean;
  minValue?: number;
  maxValue?: number;
  onChange?: (value: number | null) => void | any;
  value?: number | null;
}
