import { ILocalizable } from "./Base";
import { Icons } from "./Icon";

export enum ButtonIconPosition {
  left = "left",
  right = "right",
}

export enum ButtonVariants {
  contained = "contained",
  outlined = "outlined",
}

export interface IButtonIcon {
  name: Icons;
  position?: ButtonIconPosition;
}

export interface IButton extends ILocalizable {
  disabled?: boolean;
  elevated?: boolean;
  icon?: IButtonIcon;
  label: string;
  onClick: () => void;
  variant?: ButtonVariants;
}
