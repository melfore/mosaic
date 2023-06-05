import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import Avatar, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

export default {
  title: "Display/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Avatar Component",
          url: "https://mui.com/components/avatars/",
        },
        component: "Avatar",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: Icons.add,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: <MUIStyleIcon />,
};

export const Image = Template.bind({});
Image.args = {
  src: "//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Styled = Template.bind({});
Styled.args = {
  ...Primary.args,
  style: {
    backgroundColor: "red",
    color: "white",
  },
};

export const Text = Template.bind({});
Text.args = {
  text: "MO",
};

export const VariantRounded = Template.bind({});
VariantRounded.args = {
  ...Primary.args,
  variant: "rounded",
};

export const VariantSquare = Template.bind({});
VariantSquare.args = {
  ...Primary.args,
  variant: "square",
};
