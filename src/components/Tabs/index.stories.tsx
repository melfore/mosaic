import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";
import Progress from "../Progress";

import Tabs, { DATA_CY_DEFAULT } from ".";

const COMPONENT_NAME = "Tabs";
Tabs.displayName = COMPONENT_NAME;

const meta = {
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
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    labelList: [
      { label: "PAGE1", content: "PAGE1" },
      { label: "PAGE2", content: "PAGE2" },
      { label: "PAGE3", content: <Progress type="circular" withLabel={false} /> },
    ],
  },
};

export const Color: Story = {
  args: { ...Primary.args, color: "secondary" },
};

export const Orientation: Story = {
  args: { ...Primary.args, orientation: "vertical" },
};
