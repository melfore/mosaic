import { Meta, StoryObj } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import DateTimePicker, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedDateTimePicker } from ".";

const COMPONENT_NAME = "DateTimePicker";
DateTimePicker.displayName = COMPONENT_NAME;

const meta = {
  title: "Inputs/DateTimePicker",
  component: LocalizedDateTimePicker,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI DateTimePicker Component",
          url: "https://mui.com/x/react-date-pickers/date-time-picker/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} satisfies Meta<typeof LocalizedDateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Date Time",
  },
};

export const HoursView: Story = {
  args: {
    ...Primary.args,
    timeView: "hrs",
  },
};

export const SecondsView: Story = {
  args: {
    ...Primary.args,
    timeView: "sec",
  },
};

export const MobileView: Story = {
  args: {
    ...SecondsView.args,
    mobileView: true,
    timeZone: "utc+8",
    value: "2023-10-29T00:00:00.000+02:00",
  },
};

export const FormatAmPm: Story = {
  args: {
    ...Primary.args,
    ampm: true,
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    label: "locale.dateTime",
  },
};

export const Date = {
  args: {
    ...Primary.args,
    type: "date",
  },
};

export const Time: Story = {
  args: {
    ...Primary.args,
    type: "time",
  },
};
