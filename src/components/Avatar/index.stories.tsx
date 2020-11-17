import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";

import { AvatarVariant } from "../../types/Avatar";
import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { getDocumentationPage } from "../../utils/stories";

import Avatar, { AvatarWithProps, DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

export default {
  title: "Avatar",
  component: AvatarWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Avatar",
      component: "Avatar",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
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

export const CustomStyle = () => <Avatar icon={Icons.business} style={{ backgroundColor: "red", color: "white" }} />;

export const Icon = () => <Avatar icon={Icons.business} />;

export const Image = () => (
  <Avatar src="//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg" />
);

export const Loading = () => <Avatar loading />;

export const Text = () => <Avatar text="MO" />;
