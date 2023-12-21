import { IBase } from "./Base";

type ProgressType = "circular" | "linear";

export type ProgressProps = IBase & {
  type: ProgressType;
  withLabel?: boolean;
  color?: "primary" | "success" | "error";
  variant?: "determinate" | "indeterminate";
  value?: number;
};
