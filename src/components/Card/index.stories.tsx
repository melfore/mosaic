import React from "react";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs";
import { Icons } from "../../types/Icon";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import Button from "../Button";
import IconButton from "../IconButton";
import Typography from "../Typography";
import Card from ".";

export default {
  title: "Card",
  component: Card,
  parameters: {
    ...getDocsPageStructure("Card", false),
  },
};

export const Canvas = () => (
  <Card
    actions={[
      <Button label="Share" onClick={action("Share Button")} />,
      <IconButton icon={Icons.add} onClick={action("Add action")} />,
    ]}
    collapsible={
      <Typography label="Traditional mosaics are made of small, flat, roughly square pieces of stone or glass of different colors, known as tesserae. Some floor mosaics are made of small rounded pieces of stone and called pebble mosaics. Mosaic skinning (covering objects with mosaic glass) is done with thin enameled glass and opaque stained glass. Modern mosaic art is made from any material in any size ranging from carved stone, bottle caps, and found objects." />
    }
    content={
      <Typography label="A mosaic is an artistic picture or design made out of any materials assembled together. Mosaic are used as decoration. Architects use mosaic murals for kitchen backsplash, shower wall and entry floor art. Mosaic Craft items are used as home decor. Cities often decorate public places such as parks with mosaic murals and sculptures." />
    }
    icon={select("icon", Icons, Icons.add)}
    subtitle={text("subTitle", "Mosaic Card Subtitle")}
    title={text("title", "Mosaic Card")}
  />
);

export const Basic = () => (
  <StoriesWrapper>
    <Card
      content={
        <Typography label="A mosaic is an artistic picture or design made out of any materials assembled together." />
      }
      title="Mosaic"
    />
  </StoriesWrapper>
);

export const WithAvatar = () => (
  <StoriesWrapper>
    <Card
      content={<Typography label="Opening hours: 9AM - 6PM" />}
      icon={Icons.business}
      subtitle="The best in town for components"
      title="Mosaic Shop"
    />
  </StoriesWrapper>
);

export const WithActions = () => (
  <StoriesWrapper>
    <Card
      actions={[<Button icon={{ name: Icons.open_new }} label="Discover" onClick={action("Discover")} />]}
      content={<Typography label="Opening hours: 9AM - 6PM" />}
      icon={Icons.business}
      subtitle="The best in town for components"
      title="Mosaic Shop"
    />
  </StoriesWrapper>
);

export const WithCollapsible = () => (
  <StoriesWrapper>
    <Card
      actions={[<Button icon={{ name: Icons.open_new }} label="Discover" onClick={action("Discover")} />]}
      collapsible={<Typography label="Discover our catalog!" />}
      icon={Icons.business}
      content={<Typography label="Opening hours: 9AM - 6PM" />}
      subtitle="The best in town for components"
      title="Mosaic Shop"
    />
  </StoriesWrapper>
);
