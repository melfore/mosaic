import React, { FC } from "react";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export const DATA_CY_DEFAULT = "timePicker";

const DateTimePicker: FC<any> = ({ dataCy = DATA_CY_DEFAULT }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MuiDateTimePicker
        data-cy={dataCy}
        label="Date Time"
        views={["year", "month", "day", "hours", "minutes", "seconds"]}
        format="dd/MM/yyyy HH:mm:ss"
        ampm={false}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
