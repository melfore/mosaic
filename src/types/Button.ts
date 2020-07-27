import { MouseEvent } from "react";
import { IBase } from "./Base";
import { Icons } from "./Icon";

export enum ButtonIconPosition {
  left = "left",
  right = "right",
}

export interface ButtonIconType {
  name: Icons;
  position?: ButtonIconPosition;
}

export enum ButtonVariants {
  contained = "contained",
  outlined = "outlined",
}

export interface ButtonType extends IBase {
  elevated?: boolean;
  icon?: ButtonIconType;
  label?: string;
  onClick: (event: MouseEvent) => void;
  variant?: ButtonVariants;
  disabled?: boolean;
}
