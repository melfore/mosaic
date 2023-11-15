import React, { FC, useCallback, useMemo } from "react";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTime, Settings } from "luxon";

import { useMosaicContext } from "../../hooks/useMosaicContext";
import { DateTimePickerType, viewType } from "../../types/DateTimePicker";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import { logError } from "../../utils/logger";

export const DATA_CY_DEFAULT = "timePicker";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "label", type: "string" }];

const DateTimePicker: FC<DateTimePickerType> = ({
  dataCy = DATA_CY_DEFAULT,
  label,
  value,
  onAccept,
  ampm = false,
  mobileView,
  timeView = "min",
  format,
  timeZone,
}: DateTimePickerType) => {
  const { timeZone: contextTimeZone } = useMosaicContext();

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
    const settZone = timeZone ? timeZone : contextTimeZone;
    Settings.defaultZone = settZone ? settZone : "system";
    return settZone;
  }, [timeZone, contextTimeZone]);

  const desctopMode = useMemo(() => {
    return mobileView ? "Mobile" : undefined;
  }, [mobileView]);

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
        onAccept(value?.toJSDate());
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

export const LocalizedDateTimePicker = localized(DateTimePicker, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});

export default DateTimePicker;
