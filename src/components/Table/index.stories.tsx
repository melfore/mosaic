import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";

import { Icons } from "../../types/Icon";
import { TableActionPosition } from "../../types/Table";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

import Table, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, TableWithProps } from ".";
import { getAllComposedDataCy } from "../../utils";
import { SUBPARTS_MAP } from "./utils";

// <Fragment>
// <p>
//   The <code>Table</code> component requires implementing callbacks for each event fired when interacting with
//   table features. Below you can find the properties responsible to handle table events:
// </p>
// <p>
//   <b>Pagination:</b>
//   <br />
//   <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>
//     {`page: number (default is 0)
//       pageSize: number (default is 10)
//       onPageChange={(page: number) => {}}
//       onPageSizeChange={(pageSize: number) => {}}
//     `}
//   </code>
// </p>
// <p>
//   <b>Row click:</b>
//   <br />
//   <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>{`onRowClick={(event: any, row: any) => {}}`}</code>
// </p>
// <p>
//   <b>Search:</b>
//   <br />
//   <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>{`onSearchChange={(query: string) => {}}`}</code>
// </p>
// <p>
//   <b>Selection:</b>
//   <br />
//   <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>{`onSelectionChange={(data: any[]) => {}}`}</code>
// </p>
// <p>
//   <b>Sorting:</b>
//   <br />
//   <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>
//     {`onSortChange={(path: string | null, criteria: "asc" | "desc") => {}}`}
//   </code>
// </p>
// </Fragment>

export default {
  title: "Table",
  component: TableWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "material-table",
      component: "Table",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        dataCyShortcut: DATA_CY_SHORTCUT,
        subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
      },
      localizableProps: LOCALIZABLE_PROPS,
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

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
    <Table
      columns={[
        { label: "Name", path: "name" },
        { label: "Age", path: "age" },
      ]}
      localized
      rows={[
        { name: "John", age: 35 },
        { name: "Nick", age: 45 },
        { name: "Emma", age: 32 },
        { name: "Joey", age: 29 },
        { name: "Luis", age: 78 },
      ]}
      title={MessageMock.title}
    />
  </IntlProviderMock>
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
              {/* <img src={`https://eu.ui-avatars.com/api/?name=${name}&rounded=true&size=24`} /> */}
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
