import { DialogProps as MUIDialogProps } from "@material-ui/core";

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

export type IModalViewOptions = Pick<MUIDialogProps, "fullScreen" | "maxWidth">;

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
   * Enables responsive state, Modal fullScreen when sm
   */
  responsive?: boolean;
  /**
   * Size of Modal dialog
   */
  size?: IModalSize | ModalSize;
  /**
   * Modal title
   */
  title?: string;
}
