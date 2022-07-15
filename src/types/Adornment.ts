import { IBase } from "./Base";

export type IAdornmentBadgeSubpart = "badge";

export type IAdornmentTooltipSubpart = "tooltip";

export type IAdornmentSubpart = "adornment" | IAdornmentBadgeSubpart | IAdornmentTooltipSubpart;

type IBadgeColor = "default" | "error" | "primary" | "secondary";

type IBadgeOverlap = "circular" | "rectangular";

type IBadgeVariant = "dot" | "standard";

export interface IAdornmentBadge {
  /**
   * Badge color
   */
  color?: IBadgeColor;
  /**
   * Badge overlap
   */
  overlap?: IBadgeOverlap;
  /**
   * Badge content
   */
  value: string;
  /**
   * Badge variant
   */
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
