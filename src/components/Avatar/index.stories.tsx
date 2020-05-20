import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { AvatarVariant } from "../../types/Avatar";
import { Icons } from "../../types/Icon";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import Avatar from ".";

export default {
  title: "Avatar",
  component: Avatar,
  parameters: {
    ...getDocsPageStructure("Avatar"),
  },
};

export const Canvas = () => (
  <Avatar
    alt={text("alt", "Alt Text")}
    dataCy={text("dataCy", "avatar")}
    icon={select("icon", Icons, Icons.add)}
    text={text("text", "Avatar Text")}
    variant={select("variant", AvatarVariant, AvatarVariant.default)}
  />
);

export const Icon = () => (
  <StoriesWrapper>
    <Avatar icon={Icons.business} />
  </StoriesWrapper>
);

export const Image = () => (
  <StoriesWrapper>
    <Avatar src="//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg" />
  </StoriesWrapper>
);

export const Text = () => (
  <StoriesWrapper>
    <Avatar text="MO" />
  </StoriesWrapper>
);
