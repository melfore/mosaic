import React, { FC, useMemo } from "react";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { IBase } from "../../types/Base";

export const DATA_CY_DEFAULT = "timePicker";
export type DateTimePickerType = IBase & {
  label: string;
  value?: string;
  onAccept?: (value: string | null) => void;
  ampm?: boolean;
  mobileView?: boolean;
  format?: string;
  timeView?: "hrs" | "min" | "sec";
};

type viewType =
  | ["year", "month", "day", "hours"]
  | ["year", "month", "day", "hours", "minutes"]
  | ["year", "month", "day", "hours", "minutes", "seconds"];

const DateTimePicker: FC<DateTimePickerType> = ({
  dataCy = DATA_CY_DEFAULT,
  label = "Date Time",
  value,
  onAccept,
  ampm = false,
  mobileView,
  timeView = "min",
  format,
}: DateTimePickerType) => {
  const desctopMode = useMemo(() => {
    return mobileView ? "Mobile" : undefined;
  }, [mobileView]);

  const views: viewType = useMemo(() => {
    if (timeView === "hrs") {
      return ["year", "month", "day", "hours"];
    }
    if (timeView === "sec") {
      return ["year", "month", "day", "hours", "minutes", "seconds"];
    }
    return ["year", "month", "day", "hours", "minutes"];
  }, [timeView]);
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MuiDateTimePicker
        desktopModeMediaQuery={desctopMode}
        value={value}
        onAccept={onAccept}
        data-cy={dataCy}
        label={label}
        views={views}
        format={format}
        ampm={ampm}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
