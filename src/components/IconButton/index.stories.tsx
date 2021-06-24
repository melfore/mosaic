import React from "react";
import MUIStyleIcon from "@material-ui/icons/Style";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import { Icons, IconSize } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

import IconButton, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

export default {
  title: "IconButton",
  component: IconButton,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/IconButton",
      component: "IconButton",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
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

export const CustomStyle = () => (
  <IconButton icon={Icons.add} onClick={() => {}} style={{ backgroundColor: "red", color: "white" }} />
);

export const CustomIcon = () => <IconButton icon={<MUIStyleIcon />} onClick={() => {}} />;

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
