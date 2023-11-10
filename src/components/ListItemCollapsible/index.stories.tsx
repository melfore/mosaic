import { Meta, StoryObj } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import ListItemCollapsible, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const meta = {
  title: "Display/ListItemCollapsible",
  component: ListItemCollapsible,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Collapse Component",
          url: "https://mui.com/components/transitions/#collapse",
        },
        component: "ListItemCollapsible",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
    },
  },
} satisfies Meta<typeof ListItemCollapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: "Collapsible Content",
    header: "Header",
  },
};

export const Children: Story = {
  args: {
    ...Primary.args,
    children: "Collapisble Children",
    content: undefined,
  },
};

export const Dense: Story = {
  args: {
    ...Primary.args,
    dense: true,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
};

export const Open: Story = {
  args: {
    ...Primary.args,
    open: true,
  },
};

export const Selected: Story = {
  args: {
    ...Primary.args,
    selected: true,
  },
};
