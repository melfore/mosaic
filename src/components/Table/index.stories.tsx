import React from "react";
import MUIStyleIcon from "@material-ui/icons/Style";
import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";

import { Typography } from "../..";
import { Icons } from "../../types/Icon";
import { TableActionPosition } from "../../types/Table";
import { getAllComposedDataCy } from "../../utils";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

import Table, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP, TableWithProps } from ".";

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
      basedOn: "@material-ui/core/Table",
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
    hideHeader={boolean("hideHeader", false)}
    loading={boolean("loading", false)}
    onPageChange={action("On Page Change")}
    onPageSizeChange={action("On Page Size Change")}
    onRowClick={action("On Row Click")}
    onSelectionChange={action("On Selection Change")}
    onSortChange={action("On Sort Change")}
    page={number("page", 0)}
    pageSize={number("pageSize", 5)}
    pageSizeOptions={[5, 10, 25, 50]}
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
    ]}
    rowsTotal={number("rowsTotal", 10)}
    sticky={boolean("sticky", false)}
    title={text("title", "Table Title")}
  />
);

export const Basic = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
      { label: "Role", path: "info.role" },
    ]}
    rows={[
      { name: "John", age: 35, info: { role: "Developer" } },
      { name: "Nick", age: 45, info: { role: "Manager" } },
      { name: "Emma", age: 32, info: { role: "Designer" } },
      { name: "Joey", age: 29, info: { role: "Tester" } },
      { name: "Luis", age: 78, info: { role: "Developer" } },
    ]}
    title="Basic"
  />
);

export const CustomStyle = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
      { label: "Role", path: "info.role" },
    ]}
    rows={[
      { name: "John", age: 35, info: { role: "Developer" } },
      { name: "Nick", age: 45, info: { role: "Manager" } },
      { name: "Emma", age: 32, info: { role: "Designer" } },
      { name: "Joey", age: 29, info: { role: "Tester" } },
      { name: "Luis", age: 78, info: { role: "Developer" } },
    ]}
    style={{ backgroundColor: "red", color: "white" }}
    title="Basic"
  />
);

export const EmptyState = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    emptyState={<Typography>Custom Empty State</Typography>}
    rows={[]}
    title="Empty State"
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
    title="Loading"
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

export const NoData = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    rows={[]}
    title="No Data"
  />
);

export const Sticky = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    height="500px"
    onPageChange={(page: number) => {}}
    onPageSizeChange={(pageSize: number) => {}}
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
    ]}
    sticky
    title="Sticky"
  />
);

export const CustomColumnRender = () => (
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
);

export const CustomPageSize = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    onPageChange={action("onPageChange")}
    onPageSizeChange={action("onPageSizeChange")}
    pageSize={3}
    pageSizeOptions={[3, 6, 9]}
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
    ]}
    rowsTotal={27}
    title="Custom Page Size"
  />
);

export const Events = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    onPageChange={(page: number) => {}}
    onPageSizeChange={(pageSize: number) => {}}
    onRowClick={(row: any) => {}}
    onSelectionChange={(data: any[]) => {}}
    onSortChange={(path: string | null, criteria: "asc" | "desc" | null) => {}}
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

export const GlobalAction = () => (
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

export const Actions = () => (
  <StoriesWrapper>
    <Table
      actions={[
        {
          callback: action("On Add Callback"),
          icon: Icons.add,
          label: "Add",
        },
        {
          callback: action("On Custom Callback"),
          icon: <MUIStyleIcon />,
          label: "Custom",
        },
        {
          callback: action("On Send Callback"),
          icon: Icons.send,
          label: "Send",
        },
        {
          callback: action("On Filter Callback"),
          icon: Icons.filter,
          label: "Filter",
          position: TableActionPosition.icon,
        },
        {
          callback: action("On Custom Callback"),
          icon: <MUIStyleIcon />,
          label: "Custom",
          position: TableActionPosition.row,
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
      title="With Actions"
    />
  </StoriesWrapper>
);

export const SelectionActions = () => (
  <StoriesWrapper>
    <Table
      actions={[
        {
          callback: action("On Add Callback"),
          icon: Icons.add,
          label: "Add",
        },
        {
          callback: action("On Delete All Callback"),
          icon: Icons.delete,
          label: "Delete All",
          position: TableActionPosition.selection,
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
      onSelectionChange={(data: any[]) => {}}
      rows={[
        { name: "John", age: 35 },
        { name: "Nick", age: 45 },
        { name: "Emma", age: 32 },
        { name: "Joey", age: 29 },
        { name: "Luis", age: 78 },
      ]}
      title="Selection Actions"
    />
  </StoriesWrapper>
);

export const RowBackground = () => (
  <Table
    columns={[
      { label: "Name", path: "name" },
      { label: "Age", path: "age" },
    ]}
    getRowStyle={(row) => ({ backgroundColor: row.age > 40 ? "yellow" : "green" })}
    rows={[
      { name: "John", age: 35 },
      { name: "Nick", age: 45 },
      { name: "Emma", age: 32 },
      { name: "Joey", age: 29 },
      { name: "Luis", age: 78 },
    ]}
    title="No Data"
  />
);
