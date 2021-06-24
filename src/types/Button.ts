import { ReactElement } from "react";

import { IClickable, ILocalizable } from "./Base";
import { Icons, IIcon } from "./Icon";

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

export type IButtonIcon = Pick<IIcon, "rotate"> & {
  component?: ReactElement;
  name?: Icons;
  position?: ButtonIconPosition;
};

export interface IButton extends IBaseButton, ILocalizable {
  disabled?: boolean;
  elevated?: boolean;
  icon?: IButtonIcon;
  variant?: ButtonVariants;
}
