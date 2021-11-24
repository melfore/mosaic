import { ILocalizable } from "./Base";
import { IButton } from "./Button";

/**
 * @deprecated Use "sm" | "md" | "lg" | "xl"
 */
export enum ModalSize {
  default = "md",
  fullScreen = "xl",
  large = "lg",
  small = "sm",
}

type IModalSize = "sm" | "md" | "lg" | "xl";

type IModalAction = Pick<IButton, "disabled" | "label" | "style" | "variant"> & {
  /**
   * Callback for click events on Modal action
   */
  action: () => void;
};

export interface IModal extends ILocalizable {
  /**
   * Modal cancel button
   */
  cancel?: IModalAction;
  /**
   * Enables closable state
   */
  closable?: boolean;
  /**
   * Modal confirm button
   */
  confirm?: IModalAction;
  /**
   * Callback for close events
   */
  onClose?: () => void;
  /**
   * Enables open state, making Modal appear
   */
  open?: boolean;
  /**
   * Size of Modal dialog
   */
  size?: IModalSize | ModalSize;
  /**
   * Modal title
   */
  title?: string;
}
