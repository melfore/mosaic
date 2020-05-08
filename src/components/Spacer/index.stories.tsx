import React from "react";
import {} from "@storybook/addon-actions";
import { select, number } from "@storybook/addon-knobs";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import Spacer from ".";
import { SpacerDirection } from "../../types/Spacer";

export default {
  title: "Spacer",
  component: Spacer,
  parameters: {
    ...getDocsPageStructure("Spacer", false),
  },
};

export const Canvas = () => (
  <Spacer direction={select("direction", SpacerDirection, SpacerDirection.horizontal)} level={number("level", 1)} />
);

export const Horizontal = () => (
  <StoriesWrapper>
    <div style={{ backgroundColor: "#ff000f0a", display: "flex" }}>
      <span>Example</span>
      <span>Without</span>
    </div>
    <div style={{ backgroundColor: "#0f00ff0a", display: "flex" }}>
      <span>Example</span>
      <Spacer />
      <span>With</span>
    </div>
  </StoriesWrapper>
);

export const Vertical = () => (
  <StoriesWrapper>
    <div style={{ backgroundColor: "#ff000f0a", display: "flex", flexDirection: "column" }}>
      <span>Example</span>
      <span>Without</span>
    </div>
    <div style={{ backgroundColor: "#0f00ff0a", display: "flex", flexDirection: "column" }}>
      <span>Example</span>
      <Spacer direction={SpacerDirection.vertical} />
      <span>With</span>
    </div>
  </StoriesWrapper>
);
