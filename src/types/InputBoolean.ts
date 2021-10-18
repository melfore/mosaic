import { IBaseInput } from "./Input";

type ILabelPlacement = "start" | "end";

export interface IInputBoolean extends IBaseInput {
  /**
   * Positioning of checkbox label
   */
  labelPlacement?: ILabelPlacement;
  /**
   * Callback for change events
   */
  onChange?: (value: boolean) => void;
  /**
   * Value to set checked status
   */
  value?: boolean;
}
