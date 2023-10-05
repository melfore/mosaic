import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import DateTimePicker, { DATA_CY_DEFAULT } from ".";

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
          url: "https://mui.com/material-ui/react-progress/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
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
MobileView.args = { ...SecondsView.args, mobileView: true };

export const FormatAmPm = Template.bind({});
FormatAmPm.args = { ...Primary.args, ampm: true };

export const TimeZone = Template.bind({});
TimeZone.args = { ...Primary.args, timeZone: "UTC+8" };
