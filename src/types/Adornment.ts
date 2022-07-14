import { IBase } from "./Base";

export type IAdornmentBadgeSubpart = "badge";

export type IAdornmentTooltipSubpart = "tooltip";

export type IAdornmentSubpart = "adornment" | IAdornmentBadgeSubpart | IAdornmentTooltipSubpart;

type IBadgeColor = "default" | "error" | "primary" | "secondary";

type IBadgeVariant = "dot" | "standard";

export interface IAdornmentBadge {
  color?: IBadgeColor;
  value: string;
  variant?: IBadgeVariant;
}

export interface IAdornment extends IBase {
  /**
   * Badge properties: color, value, string
   */
  badge?: IAdornmentBadge;
  /**
   * Text of tooltip
   */
  tooltip?: string;
}
