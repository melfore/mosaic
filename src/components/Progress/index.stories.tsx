import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import Progress, { DATA_CY_DEFAULT } from ".";

const COMPONENT_NAME = "Progress";
Progress.displayName = COMPONENT_NAME;
//ProgressWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Feedback/Progress",
  component: Progress,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Progress Component",
          url: "https://mui.com/material-ui/react-progress/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: "progress",
        },
      }),
    },
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} dataCy={DATA_CY_DEFAULT} />;

export const Circular = Template.bind({});
Circular.args = {};

export const CircularColor = Template.bind({});
CircularColor.args = { color: "error" };

export const CircularDeterminate = Template.bind({});
CircularDeterminate.args = { ...Circular.args, variant: "determinate", value: 50 };

export const CircularWithLabel = Template.bind({});
CircularWithLabel.args = { ...CircularDeterminate.args, withLabel: true };

export const Linear = Template.bind({});
Linear.args = { type: "Linear" };

export const LinearColor = Template.bind({});
LinearColor.args = { ...Linear.args, color: "error" };

export const LinearDeterminate = Template.bind({});
LinearDeterminate.args = { ...Linear.args, variant: "determinate", value: 50 };

export const LinearWithLabel = Template.bind({});
LinearWithLabel.args = { ...LinearDeterminate.args, withLabel: true };
