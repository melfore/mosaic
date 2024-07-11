import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import getDocsPage from "../../utils/stories";

import { DATA_CY_DEFAULT, MemoizedSpacer } from ".";

const COMPONENT_NAME = "Spacer";
MemoizedSpacer.displayName = COMPONENT_NAME;

const meta = {
  title: "Display/Spacer",
  component: MemoizedSpacer,
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
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
      description: {
        component: "The Spacer component is used to add spacing between elements.",
      },
    },
  },
} satisfies Meta<typeof MemoizedSpacer>;

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
