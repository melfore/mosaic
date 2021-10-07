import React from "react";
import MUIStyleIcon from "@material-ui/icons/Style";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// import { AvatarVariant } from "../../types/Avatar";
import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { getDocsPage } from "../../utils/stories";

import Avatar, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
export default {
  title: "Basic/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: "@material-ui/core/Avatar",
        component: "Avatar",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
// export const Canvas = () => (
//   <Avatar
//     alt={text("alt", "Alt Text")}
//     dataCy={text("dataCy", "avatar")}
//     icon={select("icon", Icons, Icons.add)}
//     loading={boolean("loading", false)}
//     text={text("text", "Avatar Text")}
//     variant={select("variant", AvatarVariant, AvatarVariant.default)}
//   />
// );
export const Primary = Template.bind({});
Primary.args = {
  icon: Icons.add,
};

export const CustomStyle = () => <Avatar icon={Icons.business} style={{ backgroundColor: "red", color: "white" }} />;

export const Icon = () => <Avatar icon={Icons.business} />;

export const CustomIcon = () => <Avatar icon={<MUIStyleIcon />} />;

export const Image = () => (
  <Avatar src="//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg" />
);

export const Loading = () => <Avatar loading />;

export const Text = () => <Avatar text="MO" />;
