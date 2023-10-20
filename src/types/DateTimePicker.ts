import { ILocalizable } from "./Base";

export type DateTimePickerType = ILocalizable & {
  label: string;
  value?: Date | string | number;
  onAccept?: (value: Date | undefined | null) => void;
  ampm?: boolean;
  mobileView?: boolean;
  timeZone?: string;
  format?: string;
  timeView?: "hrs" | "min" | "sec";
};

export type viewType = "year" | "month" | "day" | "hours" | "minutes" | "seconds";
