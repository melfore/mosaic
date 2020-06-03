import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import Select from ".";

export default {
  title: "Select",
  component: Select,
  parameters: {
    ...getDocsPageStructure("Select"),
  },
};

export const Canvas = () => (
  <Select
    autoComplete={boolean("autoComplete", true)}
    disabled={boolean("disabled", false)}
    label={text("label", "Label")}
    loading={boolean("loading", false)}
    multiple={boolean("multiple", false)}
    onChange={action("On Change")}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);

export const Basic = () => (
  <Select
    label="Arts & Creativity"
    onChange={(value) => {}}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);

export const Disabled = () => (
  <Select
    disabled
    label="Arts & Creativity"
    onChange={(value) => {}}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);

export const Multiple = () => (
  <Select
    label="Arts & Creativity"
    multiple
    onChange={(value) => {}}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);

export const Grouped = () => (
  <Select
    groupBy={(option) => option.slice(0, 1)}
    label="Arts & Creativity"
    onChange={(value) => {}}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);

export const InitialValue = () => (
  <Select
    initialValue="Mosaic"
    label="Arts & Creativity"
    onChange={(value) => {}}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);

export const Loading = () => (
  <Select
    label="Arts & Creativity"
    loading
    onChange={(value) => {}}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);

export const WithCustomGroupLabel = () => (
  <Select
    getGroupLabel={(groupName) => `Letter: ${groupName}`}
    groupBy={(option) => option.slice(0, 1)}
    label="Arts & Creativity"
    onChange={(value) => {}}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);

export const WithCustomOptionRendering = () => (
  <Select
    customOptionRendering={(option) => <b>{option.slice(0, 3).toUpperCase()}</b>}
    label="Arts & Creativity"
    onChange={(value) => {}}
    options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
  />
);
