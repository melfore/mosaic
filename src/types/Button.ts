import { ReactElement } from "react";

import { IClickable, ILocalizable } from "./Base";
import { Icons, IIcon } from "./Icon";
import { IDisablableInput } from "./Input";

/**
 * @deprecated Use "left" | "right"
 */
export enum ButtonIconPosition {
  left = "left",
  right = "right",
}

type IButtonIconPosition = "left" | "right";

/**
 * @deprecated Use "contained" | "outlined"
 */
export enum ButtonVariants {
  contained = "contained",
  outlined = "outlined",
}

type IButtonVariants = "contained" | "outlined";

export type ButtonColor = "primary" | "success" | "secondary" | "info" | "error" | "warning";

export type IButtonIcon = Pick<IIcon, "rotate"> & {
  component?: ReactElement;
  name?: Icons;
  position?: IButtonIconPosition | ButtonIconPosition;
};

export interface IMUIButtonIcon {
  endIcon?: ReactElement;
  startIcon?: ReactElement;
}

export interface IBaseButton extends IClickable {
  /**
   * Text displayed
   */
  label: string;
}

export interface IButton extends IBaseButton, IDisablableInput, ILocalizable {
  /**
   * Component elevated state, adds shadowing
   */
  elevated?: boolean;
  /**
   * Icon displayed
   */
  icon?: IButtonIcon;
  /**
   * Variant for button shape
   */
  variant?: IButtonVariants | ButtonVariants;
  /**
   * Button color
   */
  color?: ButtonColor;
}
