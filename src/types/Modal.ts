import { MouseEvent } from "react";
import { BaseType } from "./Base";
import { ButtonVariants } from "./Button";

export interface ModalActionType {
  action?: (event: MouseEvent<Element, MouseEvent>) => void;
  label?: string;
  labelId?: string;
}

export interface CancelModalActionType extends ModalActionType {
  variant: ButtonVariants.outlined;
}

export interface ConfirmModalActionType extends ModalActionType {
  disabled?: boolean;
}

export interface ModalType extends BaseType {
  cancel?: CancelModalActionType;
  closable?: boolean;
  confirm?: ConfirmModalActionType;
  label: string;
  onClose?: (event: any, reason?: string) => void;
  open?: boolean;
}
