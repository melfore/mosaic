import React, { Fragment } from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text, number } from "@storybook/addon-knobs";
import { TableActionPosition } from "../../types/Table";
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
            The <code>Table</code> component requires implementing callbacks for each event fired when interacting with
            table features. Below you can find the properties responsible to handle table events:
          </p>
          <p>
            <b>Pagination:</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>
              {`page: number (default is 0)
                pageSize: number (default is 10)
                onPageChange={(page: number) => {}}
                onPageSizeChange={(pageSize: number) => {}}
              `}
            </code>
          </p>
          <p>
            <b>Row click:</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>{`onRowClick={(event: any, row: any) => {}}`}</code>
          </p>
          <p>
            <b>Search:</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>{`onSearchChange={(query: string) => {}}`}</code>
          </p>
          <p>
            <b>Selection:</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>{`onSelectionChange={(data: any[]) => {}}`}</code>
          </p>
          <p>
            <b>Sorting:</b>
            <br />
            <code className={CUSTOM_CODE_BLOCK_CLASS}>
              {`onSortChange={(path: string | null, criteria: "asc" | "desc") => {}}`}
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
    loading={boolean("loading", false)}
    onPageChange={action("On Page Change")}
    onPageSizeChange={action("On Page Size Change")}
    onRowClick={action("On Row Click")}
    onSearchChange={action("On Search Change")}
    onSelectionChange={action("On Selection Change")}
    onSortChange={action("On Sort Change")}
    page={number("page", 0)}
    pageSize={number("pageSize", 10)}
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
    ]}
    rowsTotal={number("rowsTotal", 5)}
    title={text("title", "Table Title")}
  />
);

export const Basic = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
    ]}
    title="Basic"
  />
);

export const Loading = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    loading
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
    ]}
    title="Without Events"
  />
);

export const WithCustomColumnRender = () => (
  <StoriesWrapper>
    <Table
      columns={[
        {
          label: "Name",
          path: "name",
          render: ({ name }) => (
            <div style={{ alignItems: "center", display: "flex" }}>
              <img src={`https://eu.ui-avatars.com/api/?name=${name}&rounded=true&size=24`} />
              <b style={{ marginLeft: "8px" }}>{name}</b>
            </div>
          ),
          width: "50%",
        },
        { label: "Age", path: "age" },
      ]}
      rows={[
        { name: "John", age: 35 },
        { name: "Nick", age: 45 },
        { name: "Emma", age: 32 },
        { name: "Joey", age: 29 },
        { name: "Luis", age: 78 },
      ]}
      title="Custom Rendering"
    />
  </StoriesWrapper>
);

export const WithEvents = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    onPageChange={(page: number) => {}}
    onPageSizeChange={(pageSize: number) => {}}
    onRowClick={(row: any) => {}}
    onSearchChange={(query: string) => {}}
    onSelectionChange={(data: any[]) => {}}
    onSortChange={(path: string | null, criteria: "asc" | "desc") => {}}
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
    ]}
    title="With Events"
  />
);

export const WithGlobalAction = () => (
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
      rows={[
        { name: "John", age: 35 },
        { name: "Nick", age: 45 },
        { name: "Emma", age: 32 },
        { name: "Joey", age: 29 },
        { name: "Luis", age: 78 },
      ]}
      title="Global Action"
    />
  </StoriesWrapper>
);

export const WithActions = () => (
  <StoriesWrapper>
    <Table
      actions={[
        {
          callback: action("On Add Callback"),
          icon: Icons.add,
          label: "Add",
        },
        {
          callback: action("On Edit Callback"),
          icon: Icons.edit,
          label: "Edit",
          position: TableActionPosition.row,
        },
        {
          callback: action("On Delete Callback"),
          disabled: true,
          icon: Icons.delete,
          label: "Delete",
          position: TableActionPosition.row,
        },
      ]}
      columns={[
        { label: "Name", path: "name" },
        { label: "Age", path: "age" },
      ]}
      rows={[
        { name: "John", age: 35 },
        { name: "Nick", age: 45 },
        { name: "Emma", age: 32 },
        { name: "Joey", age: 29 },
        { name: "Luis", age: 78 },
      ]}
      title="Row Actions"
    />
  </StoriesWrapper>
);
