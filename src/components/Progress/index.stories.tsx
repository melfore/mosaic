import { Meta, StoryObj } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import Progress, { DATA_CY_DEFAULT } from ".";

const COMPONENT_NAME = "Progress";
Progress.displayName = COMPONENT_NAME;

const meta = {
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
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circular: Story = {
  args: {
    type: "circular",
  },
};

export const CircularColor: Story = {
  args: {
    ...Circular.args,
    color: "error",
  },
};

export const CircularDeterminate: Story = {
  args: {
    ...Circular.args,
    variant: "determinate",
    value: 50,
  },
};

export const CircularInvalidValue: Story = {
  args: {
    ...Circular.args,
    value: -999,
  },
};

export const CircularWithLabel: Story = {
  args: {
    ...CircularDeterminate.args,
    withLabel: true,
  },
};

export const Linear: Story = {
  args: {
    type: "linear",
  },
};

export const LinearColor: Story = {
  args: {
    ...Linear.args,
    color: "error",
  },
};

export const LinearDeterminate: Story = {
  args: {
    ...Linear.args,
    variant: "determinate",
    value: 50,
  },
};

export const LinearInvalidValue: Story = {
  args: {
    ...Linear.args,
    value: 999,
  },
};

export const LinearWithLabel: Story = {
  args: {
    ...LinearDeterminate.args,
    withLabel: true,
  },
};
