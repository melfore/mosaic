import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import IconButton, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

export default {
  title: "Inputs/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "@mui/material/IconButton",
          url: "",
        },
        component: "IconButton",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} dataCy={DATA_CY_DEFAULT} size="large" />
);

export const Primary = Template.bind({});
Primary.args = {
  icon: Icons.add,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: <MUIStyleIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Rotate = Template.bind({});
Rotate.args = {
  ...Primary.args,
  rotate: true,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  ...Primary.args,
  size: "large",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Primary.args,
  size: "small",
};

export const Styled = Template.bind({});
Styled.args = {
  ...Primary.args,
  style: {
    backgroundColor: "red",
    color: "white",
  },
};

// export const Size = () => (
//   <StoriesWrapper>
//     <IconButton icon={Icons.add} size={IconSize.small} onClick={() => {}} />
//     <IconButton icon={Icons.add} onClick={() => {}} />
//     <IconButton icon={Icons.add} size={IconSize.large} onClick={() => {}} />
//   </StoriesWrapper>
// );
