import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import DateTimePicker, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS } from ".";

const COMPONENT_NAME = "DateTimePicker";
DateTimePicker.displayName = COMPONENT_NAME;

export default {
  title: "Inputs/DateTimePicker",
  component: DateTimePicker,
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
} as ComponentMeta<typeof DateTimePicker>;

const Template: ComponentStory<typeof DateTimePicker> = (args) => <DateTimePicker {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {};

export const SecondsView = Template.bind({});
SecondsView.args = { ...Primary.args, timeView: "sec" };

export const MobileView = Template.bind({});
MobileView.args = { ...SecondsView.args, mobileView: true, timeZone: "utc+8", value: "2023-10-29T00:00:00.000+02:00" };

export const FormatAmPm = Template.bind({});
FormatAmPm.args = { ...Primary.args, ampm: true };

export const Localized = Template.bind({});
Localized.args = { ...Primary.args, localized: true, label: "locale.dateTime" };

export const Time = Template.bind({});
Time.args = { ...Primary.args, type: "time" };

export const Date = Template.bind({});
Date.args = { ...Primary.args, type: "date" };
