import { IBase } from "./Base";

export type DateTimePickerType = IBase & {
  label: string;
  value?: Date | string | number;
  onAccept?: (value: string | undefined | null) => void;
  ampm?: boolean;
  mobileView?: boolean;
  timeZone?: string;
  format?: string;
  timeView?: "hrs" | "min" | "sec";
};

export type viewType = "year" | "month" | "day" | "hours" | "minutes" | "seconds";
