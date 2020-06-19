import React from "react";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs";
import {} from "../../types/AppBar";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import AppBar from ".";
import { Icons } from "../../types/Icon";

export default {
  title: "AppBar",
  component: AppBar,
  parameters: {
    ...getDocsPageStructure("AppBar", false),
  },
};

export const Canvas = () => (
  <AppBar
    actions={[{ icon: Icons.mail, onClick: action("On Mail Click") }]}
    menu={{ icon: Icons.home, onClick: action("On Menu Click") }}
    onTitleClick={action("On Title Click")}
    title={text("title", "AppBar Title")}
    userMenu={[{ label: "Logout", onClick: action("On Logout") }]}
  />
);
