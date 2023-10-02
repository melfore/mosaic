import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import TimePicker, { DATA_CY_DEFAULT } from ".";

const COMPONENT_NAME = "Tabs";
TimePicker.displayName = COMPONENT_NAME;

export default {
  title: "Navigation/TimePicker",
  component: TimePicker,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI TimePicker Component",
          url: "https://mui.com/material-ui/react-progress/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
    },
  },
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => <TimePicker {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {};
