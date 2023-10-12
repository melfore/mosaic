import { DateTimePickerType } from "../../types/DateTimePicker";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import DateTimePicker, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<DateTimePickerType> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "DateTimePicker",
  localized: true,
  props: { label: "Date" },
};

const getDateTimePickerTestable = (options?: IPartialTestOptions<DateTimePickerType>) =>
  getTestableComponent(DateTimePicker, DEFAULT_TEST_OPTIONS, options);

describe("DateTimePicker test suite:", () => {
  it("ampm", () => {
    getDateTimePickerTestable({ props: { ampm: false } });
  });

  it("View", () => {
    getDateTimePickerTestable({ props: { timeView: "sec" } });
  });

  it("Time Zone", () => {
    getDateTimePickerTestable({ props: { timeZone: "utc+4" } });
  });
});
