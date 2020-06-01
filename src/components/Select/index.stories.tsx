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

type DataType = {
  name: string;
  type: "CARS" | "TRUCKS";
};

const value = { name: "", type: "CARS" };

const options: DataType[] = [
  { name: "Fiat", type: "CARS" },
  { name: "Ford", type: "CARS" },
  { name: "Chevrolet", type: "CARS" },
  { name: "Opel", type: "CARS" },
  { name: "Peugeot", type: "CARS" },
  { name: "Abart", type: "CARS" },
  { name: "Ferrari", type: "CARS" },
  { name: "Honda", type: "CARS" },
  { name: "Suzuki", type: "CARS" },
  { name: "Mercedes", type: "CARS" },
  { name: "Iveco", type: "TRUCKS" },
  { name: "Scania", type: "TRUCKS" },
  { name: "Opel", type: "TRUCKS" },
  { name: "Mercedes", type: "TRUCKS" },
];

export const Canvas = () => (
  <Select
    autoComplete={boolean("autoComplete", true)}
    disabled={boolean("disabled", false)}
    getGroupLabel={(groupName) => groupName.toLowerCase()}
    getOptionLabel={(option) => option.name}
    groupBy={(option) => option.type}
    label={text("label", "Label")}
    loading={boolean("loading", false)}
    multiple={false}
    onChange={action("On Change")}
    options={options}
    value={value}
  />
);

// export const OtherStories = () => (
//   <StoriesWrapper>
//     <Select />
//   </StoriesWrapper>
// );
