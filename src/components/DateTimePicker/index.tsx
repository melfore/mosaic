import React, { FC, useCallback, useMemo } from "react";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTime } from "luxon";

import { useMosaicContext } from "../../hooks/useMosaicContext";
import { DateTimePickerType, viewType } from "../../types/DateTimePicker";
import { logError } from "../../utils/logger";

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
  timeZone,
}: DateTimePickerType) => {
  const { timeZone: contextTimeZone } = useMosaicContext();

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

  const zone = useMemo(() => {
    return timeZone ? timeZone : contextTimeZone;
  }, [timeZone, contextTimeZone]);

  const isDate = useCallback((date: Date) => {
    const valueDateTime = DateTime.fromJSDate(date);
    return valueDateTime.isValid;
  }, []);

  const dateTimeValue = useMemo(() => {
    if (value) {
      const valueDate = new Date(value);
      const validDate = isDate(valueDate);
      if (validDate) {
        return DateTime.fromJSDate(valueDate);
      }
      logError("DateTimePicker", "Invalid Date");
      return undefined;
    }
  }, [value, isDate]);

  const onAcceptIso = useCallback(
    (value: DateTime | undefined | null) => {
      if (onAccept) {
        onAccept(value?.toISO());
      }
    },
    [onAccept]
  );

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MuiDateTimePicker
        timezone={zone}
        desktopModeMediaQuery={desctopMode}
        value={dateTimeValue}
        onAccept={onAcceptIso}
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
