import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import getDocsPage from "../../utils/stories";

import Spacer, { DATA_CY_DEFAULT } from ".";

export default {
  title: "Display/Spacer",
  component: Spacer,
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
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => <Spacer {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  (Story, { args: { direction } }) => (
    <div id="flex-content" style={{ display: "flex", flexDirection: direction === "vertical" ? "column" : "row" }}>
      <div id="first-content">First Content</div>
      {Story()}
      <div id="second-content">Second Content</div>
    </div>
  ),
];
