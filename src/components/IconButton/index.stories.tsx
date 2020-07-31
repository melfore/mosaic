import React from "react";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs";
import { Icons, IconSize } from "../../types/Icon";
import { StoriesWrapper, getDocumentationPage } from "../../utils/stories";
import IconButton, { DATA_CY_DEFAULT } from ".";

export default {
  title: "IconButton",
  component: IconButton,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/IconButton",
      component: "IconButton",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
      },
    }),
  },
};

export const Canvas = () => (
  <IconButton
    dataCy={text("data-cy", DATA_CY_DEFAULT)}
    disabled={boolean("disabled", false)}
    icon={select("icon", Icons, Icons.add)}
    onClick={action("Click on IconButton")}
    size={select("size", IconSize, IconSize.default)}
  />
);

export const Disabled = () => (
  <StoriesWrapper>
    <IconButton icon={Icons.add} onClick={() => {}} />
    <IconButton icon={Icons.add} onClick={() => {}} disabled />
  </StoriesWrapper>
);

export const Size = () => (
  <StoriesWrapper>
    <IconButton icon={Icons.add} size={IconSize.small} onClick={() => {}} />
    <IconButton icon={Icons.add} onClick={() => {}} />
    <IconButton icon={Icons.add} size={IconSize.large} onClick={() => {}} />
  </StoriesWrapper>
);
