import React from "react";
import {} from "@storybook/addon-actions";
import {} from "@storybook/addon-knobs";
import {} from "../../types/Select";
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
    renderLabel={(option) => option.name}
    isOptionSelected={(option, value) => option.code === value}
    onChange={(event, value) => {
      console.log({ event });
      console.log(value);
    }}
    options={[
      { code: 1, name: "ajeje" },
      { code: 2, name: "bajeje" },
      { code: 3, name: "cajeje" },
    ]}
    value={undefined}
  />
);

// export const OtherStories = () => (
//   <StoriesWrapper>
//     <Select />
//   </StoriesWrapper>
// );
