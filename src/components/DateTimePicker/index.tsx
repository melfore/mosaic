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
  const { contextTimeZone } = useMosaicContext();

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

  const isIsoDate = useCallback((str: string) => {
    const d = DateTime.fromISO(str);
    return d.isValid;
  }, []);

  const verifValue = useMemo(() => {
    if (value) {
      const isoDate = isIsoDate(value);
      if (isoDate) {
        return DateTime.fromISO(value);
      }
      logError("DateTimePicker", "Invalid Date");
      return undefined;
    }
  }, [value, isIsoDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MuiDateTimePicker
        timezone={zone}
        desktopModeMediaQuery={desctopMode}
        value={verifValue}
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
