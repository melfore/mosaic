import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import { TypographyVariants } from "../../types/Typography";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import ListCollapsibleItem from ".";
import Typography from "../Typography";

export default {
  title: "ListCollapsibleItem",
  component: ListCollapsibleItem,
  parameters: {
    ...getDocsPageStructure("ListCollapsibleItem", false),
  },
};

export const Canvas = () => (
  <ListCollapsibleItem
    children={<span>Collapsible Content</span>}
    dataCy="list-item"
    dense={boolean("dense", false)}
    loading={boolean("loading", false)}
    onClick={action("On ListItem click")}
    open={boolean("open", false)}
    openTimeout={select("openTimeout", ["auto", 1000, 5000], "auto")}
    selected={boolean("selected", false)}
    title={text("title", "ListItem Title")}
    titleVariant={select("titleVariant", TypographyVariants, undefined)}
    unmountContent={boolean("unmountContent", false)}
  />
);

export const Basic = () => (
  <StoriesWrapper>
    <ListCollapsibleItem title="Basic List Item" />
  </StoriesWrapper>
);

export const Dense = () => (
  <StoriesWrapper>
    <ListCollapsibleItem title="Basic List Item" />
    <ListCollapsibleItem dense title="Basic List Item" />
  </StoriesWrapper>
);

export const Loading = () => (
  <StoriesWrapper>
    <ListCollapsibleItem loading title="Basic List Item" />
  </StoriesWrapper>
);

export const Selected = () => (
  <StoriesWrapper>
    <ListCollapsibleItem selected title="Basic List Item" />
  </StoriesWrapper>
);

export const Open = () => (
  <StoriesWrapper>
    <ListCollapsibleItem open selected title="Basic List Item">
      <div style={{ border: "1px solid #ccc", padding: "16px" }}>
        <Typography label="Collapsible content is now expanded" />
      </div>
    </ListCollapsibleItem>
  </StoriesWrapper>
);

export const WithTitleVariant = () => (
  <StoriesWrapper>
    <ListCollapsibleItem title="Basic List Item" titleVariant={TypographyVariants.caption} />
  </StoriesWrapper>
);
