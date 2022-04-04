import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import getDocsPage from "../../utils/stories";

import Icon, { DATA_CY_DEFAULT } from ".";

export default {
  title: "Display/Icon",
  component: Icon,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Icon Component",
          url: "https://v4.mui.com/components/icons/",
        },
        component: "Icon",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  name: Icons.account,
};

export const IconCustom = Template.bind({});
IconCustom.args = {
  children: <MUIStyleIcon />,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true,
};

export const Rotate = Template.bind({});
Rotate.args = {
  ...Primary.args,
  rotate: true,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Primary.args,
  size: "small",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  ...Primary.args,
  size: "large",
};

export const Styled = Template.bind({});
Styled.args = {
  ...Primary.args,
  style: {
    backgroundColor: "red",
    borderRadius: "4px",
    color: "white",
    padding: "4px",
  },
};

// TODO: add this story using union type
// const allIcons = Object.values(Icons);
// const getIcon = (icon: string) => allIcons.find((i) => i === icon);
// const allIconsJsx = allIcons.map((icon, index) => (
//   <div key={index} className="icon-wrapper">
//     <Icon dataCy={`icon-${icon}`} name={getIcon(icon) || Icons.add} />
//     <span>{icon}</span>
//   </div>
// ));

// export const AllIcons = () => <StoriesWrapper>{allIconsJsx}</StoriesWrapper>;
