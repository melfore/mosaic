import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text, number } from "@storybook/addon-knobs";
import {} from "../../types/Table";
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from "../../utils/stories";
import Table from ".";

export default {
  title: "Table",
  component: Table,
  parameters: {
    ...DOCS_PAGE_STRUCTURE,
  },
};

export const Canvas = () => (
  <Table
    columns={[
      {
        label: "Name",
        path: "name",
        render: ({ name }) => <b>{name}</b>,
      },
      {
        label: "Age",
        path: "age",
      },
    ]}
    loading={boolean("loading", false)}
    onPageChange={action("On Page Change")}
    onPageSizeChange={action("On Page Size Change")}
    onRowClick={action("On Row Click")}
    onSearchChange={action("On Search Change")}
    onSortChange={action("On Sort Change")}
    page={number("page", 1)}
    pageSize={number("pageSize", 10)}
    rows={[
      { name: "Ajeje", age: 35 },
      { name: "Brazorf", age: 45 },
    ]}
    rowsTotal={number("rowsTotal", 100)}
  />
);

// export const OtherStories = () => (
//   <StoriesWrapper>
//     <Table />
//   </StoriesWrapper>
// );
