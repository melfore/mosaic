import React from "react";
import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { Icons, IconSize } from "../../types/Icon";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import IconButton from ".";

export default {
  title: "IconButton",
  component: IconButton,
  parameters: {
    ...getDocsPageStructure("IconButton", false),
  },
};

export const Canvas = () => (
  <IconButton
    dataCy={text("data-cy", "icon-button-identifier")}
    icon={select("icon", Icons, Icons.add)}
    onClick={action("Click on IconButton")}
    size={select("size", IconSize, IconSize.default)}
  />
);

export const Size = () => (
  <StoriesWrapper>
    <IconButton icon={Icons.add} size={IconSize.small} onClick={() => {}} />
    <IconButton icon={Icons.add} onClick={() => {}} />
    <IconButton icon={Icons.add} size={IconSize.large} onClick={() => {}} />
  </StoriesWrapper>
);

export const Disabled = () => (
  <StoriesWrapper>
    <IconButton icon={Icons.add} onClick={() => {}} />
    <IconButton icon={Icons.add} onClick={() => {}} disabled />
  </StoriesWrapper>
);
