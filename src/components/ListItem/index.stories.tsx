import React from "react";
import MUIStyleIcon from "@material-ui/icons/Style";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import ListItem, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

export default {
  title: "ListItem",
  component: ListItem,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI ListItem Component",
          url: "https://v4.mui.com/components/lists/",
        },
        component: "ListItem",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
    },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "John Doe",
};

export const Dense = Template.bind({});
Dense.args = {
  ...Primary.args,
  dense: true,
};

export const Icon = Template.bind({});
Icon.args = {
  ...Primary.args,
  icon: Icons.account,
};

export const IconCustom = Template.bind({});
IconCustom.args = {
  ...Primary.args,
  icon: <MUIStyleIcon />,
};

export const IconLoading = Template.bind({});
IconLoading.args = {
  ...Icon.args,
  loading: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Primary.args,
  selected: true,
};
