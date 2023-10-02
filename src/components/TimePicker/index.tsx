import React, { FC } from "react";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export const DATA_CY_DEFAULT = "timePicker";

const TimePicker: FC<any> = ({ dataCy = DATA_CY_DEFAULT }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DateTimePicker
        data-cy={dataCy}
        label="Date Time"
        views={["year", "month", "day", "hours", "minutes", "seconds"]}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
