import React, { FC, useMemo } from "react";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { useMosaicContext } from "../../hooks/useMosaicContext";
import { DateTimePickerType, viewType } from "../../types/DateTimePicker";

export const DATA_CY_DEFAULT = "timePicker";

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

  const views: viewType[] = useMemo(() => {
    if (timeView === "hrs") {
      return ["year", "month", "day", "hours"];
    }
    if (timeView === "sec") {
      return ["year", "month", "day", "hours", "minutes", "seconds"];
    }
    return ["year", "month", "day", "hours", "minutes"];
  }, [timeView]);

  const { timeZone } = useMosaicContext();
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MuiDateTimePicker
        timezone={timeZone}
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
