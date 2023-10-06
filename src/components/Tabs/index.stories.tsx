import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";
import Progress from "../Progress";

import Tabs, { DATA_CY_DEFAULT } from ".";

const COMPONENT_NAME = "Tabs";
Tabs.displayName = COMPONENT_NAME;

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Tabs Component",
          url: "https://mui.com/material-ui/react-tabs/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  labelList: [
    { label: "PAGE1", content: "PAGE1" },
    { label: "PAGE2", content: "PAGE2" },
    { label: "PAGE3", content: <Progress type="Circular" withLabel={false} /> },
  ],
};

export const Color = Template.bind({});
Color.args = { ...Primary.args, color: "secondary" };

export const Orientation = Template.bind({});
Orientation.args = { ...Primary.args, orientation: "vertical" };
