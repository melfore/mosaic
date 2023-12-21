import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import getDocsPage from "../../utils/stories";

import Spacer, { DATA_CY_DEFAULT } from ".";

const meta = {
  title: "Display/Spacer",
  component: Spacer,
  decorators: [
    (Story, { args: { direction } }) => (
      <div id="flex-content" style={{ display: "flex", flexDirection: direction === "vertical" ? "column" : "row" }}>
        <div id="first-content">First Content</div>
        {Story()}
        <div id="second-content">Second Content</div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: { label: "HTML Div" },
        component: "Spacer",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const InvalidSpacing: Story = {
  args: {
    ...Primary.args,
    level: -999,
  },
};

export const HorizontalSpacing: Story = {
  args: {
    ...Primary.args,
    direction: "horizontal",
  },
};

export const VerticalSpacing: Story = {
  args: {
    ...Primary.args,
    direction: "vertical",
  },
};
