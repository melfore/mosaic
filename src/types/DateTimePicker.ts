import { ILocalizable } from "./Base";

export type DateTimePickerType = ILocalizable & {
  type?: "date" | "time" | "dateTime";
  label: string;
  value?: Date | string | number;
  onAccept?: (value: Date | undefined | null) => void;
  onChange?: (value: Date | undefined | null) => void;
  ampm?: boolean;
  mobileView?: boolean;
  timeZone?: string;
  format?: string;
  timeView?: "hrs" | "min" | "sec";
};

export type viewType = "year" | "month" | "day" | "hours" | "minutes" | "seconds";
