import React from "react";
import { select, text, boolean } from "@storybook/addon-knobs";
import { AvatarVariant } from "../../types/Avatar";
import { Icons } from "../../types/Icon";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";
import Avatar, { AvatarWithProps, DATA_CY_DEFAULT } from ".";

export default {
  title: "Avatar",
  component: AvatarWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Avatar",
      component: "Avatar",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        usesClass: true,
      },
    }),
  },
};

export const Canvas = () => (
  <Avatar
    alt={text("alt", "Alt Text")}
    dataCy={text("dataCy", "avatar")}
    icon={select("icon", Icons, Icons.add)}
    loading={boolean("loading", false)}
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

export const Loading = () => (
  <StoriesWrapper>
    <Avatar loading />
  </StoriesWrapper>
);

export const Text = () => (
  <StoriesWrapper>
    <Avatar text="MO" />
  </StoriesWrapper>
);
