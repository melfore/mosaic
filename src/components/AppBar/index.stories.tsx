import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import {} from "../../types/AppBar";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import AppBar from ".";

export default {
  title: "AppBar",
  component: AppBar,
  parameters: {
    ...getDocsPageStructure("AppBar", false),
  },
};

export const Canvas = () => (
  <AppBar onNavigationMenuClick={action("On Menu Click")} title={text("title", "AppBar Title")} />
);
