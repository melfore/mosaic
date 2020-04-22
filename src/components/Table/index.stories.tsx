import React, { Fragment } from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text, number } from "@storybook/addon-knobs";
import { TableActionScope } from "../../types/Table";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import { CUSTOM_CODE_BLOCK_CLASS } from "../../utils/stories/utils";
import Table from ".";
import { Icons } from "../../types/Icon";

export default {
  title: "Table",
  component: Table,
  parameters: {
    ...getDocsPageStructure("Table", false, {
      title: "Interaction and events",
      subtitle: true,
      body: (
        <Fragment>
          <p>
            The <code>Table</code> component requires utilizing project to handle events fired when interacting with the
            table features.
          </p>
          <p>
            <b>Pagination</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>
              {`// Props
                page: number (default is 0)
                pageSize: number (default is 10)
                paginated: boolean (default is true)

                // Events (must be implemented to make pagination work)
                onPageChange={(page: number) => {}}
                onPageSizeChange={(pageSize: number) => {}}
              `}
            </code>
          </p>
          <p>
            <b>Row click</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>
              {`// Event (must be implemented to make row click work)
                onRowClick={(event: any, row: any) => {}}
              `}
            </code>
          </p>
          <p>
            <b>Search</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>
              {`// Props
                searchable: boolean (default is true)

                // Event (must be implemented to make search work)
                onSearchChange={(query: string) => {}}
              `}
            </code>
          </p>
          <p>
            <b>Sorting</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>
              {`// Props
                sortable: boolean (default is true)

                // Event (must be implemented to make sorting work)
                onSortChange={(path: string | null, criteria: "asc" | "desc") => {}}
              `}
            </code>
          </p>
        </Fragment>
      ),
    }),
  },
};

export const Canvas = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    filterable={boolean("filterable", false)}
    loading={boolean("loading", false)}
    onPageChange={action("On Page Change")}
    onPageSizeChange={action("On Page Size Change")}
    onRowClick={action("On Row Click")}
    onSearchChange={action("On Search Change")}
    onSortChange={action("On Sort Change")}
    page={number("page", 0)}
    pageSize={number("pageSize", 10)}
    paginated={boolean("paginated", true)}
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
    ]}
    rowsTotal={number("rowsTotal", 5)}
    searchable={boolean("searchable", true)}
    sortable={boolean("sortable", true)}
    title={text("title", "Table Title")}
  />
);

export const WithCustomRendering = () => (
  <StoriesWrapper>
    <Table
      actions={[
        {
          callback: action("On Add Callback"),
          icon: Icons.add,
          label: "Add",
        },
      ]}
      columns={[
        { label: "Name", path: "name", render: ({ name }) => <b>{name}</b> },
        { label: "Age", path: "age" },
      ]}
      onPageChange={(page: number) => {}}
      onPageSizeChange={(pageSize: number) => {}}
      onRowClick={(event: any, row: any) => {}}
      onSearchChange={(query: string) => {}}
      onSortChange={(path: string | null, criteria: "asc" | "desc") => {}}
      rows={[
        { name: "John", age: 35 },
        { name: "Nick", age: 45 },
        { name: "Emma", age: 32 },
        { name: "Joey", age: 29 },
        { name: "Luis", age: 78 },
      ]}
      rowsTotal={5}
      title="Custom Rendering"
    />
  </StoriesWrapper>
);

export const WithGlobalActions = () => (
  <StoriesWrapper>
    <Table
      actions={[
        {
          callback: action("On Add Callback"),
          icon: Icons.add,
          label: "Add",
        },
      ]}
      columns={[
        { label: "Name", path: "name" },
        { label: "Age", path: "age" },
      ]}
      onPageChange={(page: number) => {}}
      onPageSizeChange={(pageSize: number) => {}}
      onRowClick={(event: any, row: any) => {}}
      onSearchChange={(query: string) => {}}
      onSortChange={(path: string | null, criteria: "asc" | "desc") => {}}
      rows={[
        { name: "John", age: 35 },
        { name: "Nick", age: 45 },
        { name: "Emma", age: 32 },
        { name: "Joey", age: 29 },
        { name: "Luis", age: 78 },
      ]}
      rowsTotal={5}
      title="Global Actions"
    />
  </StoriesWrapper>
);

export const WithRowActions = () => (
  <StoriesWrapper>
    <Table
      actions={[
        {
          callback: action("On Edit Callback"),
          icon: Icons.edit,
          label: "Edit",
          scope: TableActionScope.row,
        },
        {
          callback: action("On Delete Callback"),
          icon: Icons.delete,
          label: "Delete",
          scope: TableActionScope.row,
        },
      ]}
      columns={[
        { label: "Name", path: "name" },
        { label: "Age", path: "age" },
      ]}
      onPageChange={(page: number) => {}}
      onPageSizeChange={(pageSize: number) => {}}
      onRowClick={(event: any, row: any) => {}}
      onSearchChange={(query: string) => {}}
      onSortChange={(path: string | null, criteria: "asc" | "desc") => {}}
      rows={[
        { name: "John", age: 35 },
        { name: "Nick", age: 45 },
        { name: "Emma", age: 32 },
        { name: "Joey", age: 29 },
        { name: "Luis", age: 78 },
      ]}
      rowsTotal={5}
      title="Row Actions"
    />
  </StoriesWrapper>
);
