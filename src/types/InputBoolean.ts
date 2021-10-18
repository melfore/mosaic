import { IBaseInput } from "./Input";

type ILabelPlacement = "start" | "end";

export interface IInputBoolean extends IBaseInput {
  /**
   * Positioning of label
   */
  labelPlacement?: ILabelPlacement;
  /**
   * Callback for change events
   */
  onChange?: (value: boolean) => void;
  /**
   * Value to set status
   */
  value?: boolean;
}
