import { ReactElement } from "react";

import { IClickable, ILocalizable } from "./Base";
import { Icons } from "./Icon";

export enum ButtonIconPosition {
  left = "left",
  right = "right",
}

export enum ButtonVariants {
  contained = "contained",
  outlined = "outlined",
}

export interface IBaseButton extends IClickable {
  label: string;
}

// TODO: add rotate reusing IIcon props
export interface IButtonIcon {
  component?: ReactElement;
  name?: Icons;
  position?: ButtonIconPosition;
}

export interface IButton extends IBaseButton, ILocalizable {
  disabled?: boolean;
  elevated?: boolean;
  icon?: IButtonIcon;
  variant?: ButtonVariants;
}
