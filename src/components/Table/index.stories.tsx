import React from "react";
import MUIStyleIcon from "@material-ui/icons/Style";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import Table, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP, TableWithProps } from ".";

const COMPONENT_NAME = "Table";
Table.displayName = COMPONENT_NAME;
TableWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Display/Table",
  component: TableWithProps,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Table Component",
          url: "https://v4.mui.com/components/tables/",
        },
        component: "Table",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} as ComponentMeta<typeof TableWithProps>;

const Template: ComponentStory<typeof TableWithProps> = (args) => <Table {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  columns: [
    { label: "Name", path: "name" },
    { label: "Age", path: "age" },
  ],
  onPageChange: () => {},
  onPageSizeChange: () => {},
  onRowClick: () => {},
  onSelectionChange: () => {},
  onSortChange: () => {},
  rows: [
    { name: "John", age: 35 },
    { name: "Nick", age: 45 },
    { name: "Emma", age: 32 },
    { name: "Joey", age: 29 },
    { name: "Luis", age: 78 },
  ],
  title: "Table",
};

export const Actions = Template.bind({});
Actions.args = {
  ...Primary.args,
  actions: [
    {
      callback: () => {},
      icon: Icons.add,
      label: "Add",
    },
    {
      callback: () => {},
      icon: <MUIStyleIcon />,
      label: "Custom",
    },
    {
      callback: () => {},
      disabled: true,
      icon: Icons.block,
      label: "Send",
    },
    {
      callback: () => {},
      icon: Icons.filter,
      label: "Filter",
      position: "icon",
    },
    {
      callback: () => {},
      icon: <MUIStyleIcon />,
      label: "Custom",
      position: "row",
    },
    {
      callback: () => {},
      icon: Icons.edit,
      label: "Edit",
      position: "row",
    },
    {
      callback: () => {},
      disabled: (data) => data.age > 40,
      icon: Icons.notifications,
      label: "Notify",
      position: "row",
    },
    {
      callback: () => {},
      disabled: true,
      icon: Icons.delete,
      label: "Delete",
      position: "row",
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true,
};

export const NoData = Template.bind({});
NoData.args = {
  ...Primary.args,
  rows: [],
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  ...NoData.args,
  emptyState: "Custom Empty State",
};

export const PageSizeCustom = Template.bind({});
PageSizeCustom.args = {
  ...Primary.args,
  pageSize: 3,
  pageSizeOptions: [3, 6, 9],
  rows: [...Primary.args.rows!.slice(0, 3)],
};

export const Sticky = Template.bind({});
Sticky.args = {
  ...Primary.args,
  height: 400,
  rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],
  sticky: true,
};

export const Styled = Template.bind({});
Styled.args = {
  ...Primary.args,
  style: {
    backgroundColor: "cyan",
  },
};

export const StyledRow = Template.bind({});
StyledRow.args = {
  ...Primary.args,
  getRowStyle: (row) => ({
    backgroundColor: row.age > 40 ? "lightyellow" : "lightgreen",
  }),
};
