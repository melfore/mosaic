import { ILocalizable } from "./Base";
import { IButton } from "./Button";

export enum ModalSize {
  small = "sm",
  default = "md",
  large = "lg",
}

type IModalAction = Pick<IButton, "disabled" | "label" | "style" | "variant"> & {
  action: () => void;
};

export interface IModal extends ILocalizable {
  cancel?: IModalAction;
  closable?: boolean;
  confirm?: IModalAction;
  onClose?: () => void;
  open?: boolean;
  size?: ModalSize;
  title?: string;
}
