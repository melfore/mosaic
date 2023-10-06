import { IBase } from "./Base";

export type DateTimePickerType = IBase & {
  label: string;
  value?: string;
  onAccept?: (value: string | null) => void;
  ampm?: boolean;
  mobileView?: boolean;
  format?: string;
  timeView?: "hrs" | "min" | "sec";
};

export type viewType = "year" | "month" | "day" | "hours" | "minutes" | "seconds";
