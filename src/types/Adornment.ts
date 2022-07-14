import { IBase } from "./Base";

type IBadgeColor = "default" | "error" | "primary" | "secondary";

type IBadgeVariant = "dot" | "standard";

export interface IBadgeAdornment {
  color?: IBadgeColor;
  value: string;
  variant?: IBadgeVariant;
}

export interface IAdornment extends IBase {
  /**
   * Badge properties
   */
  badge?: IBadgeAdornment;
  /**
   * Text of tooltip
   */
  tooltip?: string;
}
