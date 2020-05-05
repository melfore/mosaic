import { BaseType } from "./Base";
import { ButtonVariants } from "./Button";

export interface ModalActionType {
  action?: () => void;
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
  label?: string;
  onClose?: (reason?: string) => void;
  open?: boolean;
}
