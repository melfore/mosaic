import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Icons } from "../../types/Icon";
import { TypographyVariants } from "../../types/Typography";
import { StoriesWrapper } from "../../utils/stories";
import { getDocsPageStructure } from "../../utils/stories/DEPRECATED_index";
import ListItem from ".";

export default {
  title: "ListItem",
  component: ListItem,
  parameters: {
    ...getDocsPageStructure("ListItem", false),
  },
};

export const Canvas = () => (
  <ListItem
    dataCy="list-item"
    dense={boolean("dense", false)}
    icon={select("icon", Icons, undefined)}
    loading={boolean("loading", false)}
    onClick={action("On ListItem click")}
    selected={boolean("selected", false)}
    title={text("title", "ListItem Title")}
    titleVariant={select("titleVariant", TypographyVariants, undefined)}
  />
);

export const Basic = () => (
  <StoriesWrapper>
    <ListItem title="Basic List Item" />
  </StoriesWrapper>
);

export const Dense = () => (
  <StoriesWrapper>
    <ListItem title="Basic List Item" />
    <ListItem dense title="Basic List Item" />
  </StoriesWrapper>
);

export const Loading = () => (
  <StoriesWrapper>
    <ListItem loading title="Basic List Item" />
    <ListItem icon={Icons.add} loading title="Basic List Item" />
  </StoriesWrapper>
);

export const Selected = () => (
  <StoriesWrapper>
    <ListItem selected title="Basic List Item" />
  </StoriesWrapper>
);

export const WithIcon = () => (
  <StoriesWrapper>
    <ListItem icon={Icons.add} title="Basic List Item" />
  </StoriesWrapper>
);

export const WithTitleVariant = () => (
  <StoriesWrapper>
    <ListItem icon={Icons.add} title="Basic List Item" titleVariant={TypographyVariants.caption} />
  </StoriesWrapper>
);
