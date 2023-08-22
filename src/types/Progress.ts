import { IBase } from "./Base";

export type ProgressType = IBase & {
  type: "Circular" | "Linear";
  withLabel: boolean;
  color?: "primary" | "success" | "error";
  variant?: "determinate" | "indeterminate";
  value?: number;
};
