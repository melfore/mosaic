import { ILocalizable } from "./Base";
import { ButtonVariants } from "./Button";

export enum ModalSize {
  small = "sm",
  default = "md",
  large = "lg",
}

export interface IModalAction {
  action: () => void;
  disabled?: boolean;
  label: string;
  variant?: ButtonVariants;
}

export interface IModal extends ILocalizable {
  cancel?: IModalAction;
  closable?: boolean;
  confirm?: IModalAction;
  onClose?: () => void;
  open?: boolean;
  size?: ModalSize;
  title?: string;
}
