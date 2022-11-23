/* eslint-disable storybook/default-exports */

import React from "react";
import MUITextField from "@material-ui/core/TextField";
import MUIStyleIcon from "@material-ui/icons/Style";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import Table, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP, TableWithProps } from ".";

const COMPONENT_NAME = "Table";
Table.displayName = COMPONENT_NAME;
TableWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Display/Table",
  component: TableWithProps,
  decorators: [localeDecorator],
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
  onRowClick: (data, options) => console.log("=> onRowClick", { options }),
  onSelectionChange: (data, options) => console.log("=> onSelectionChange", { options }),
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
      callback: (data, options) => console.log("=> Add", { options }),
      icon: Icons.add,
      label: "Add",
    },
    {
      callback: (data, options) => console.log("=> Custom", { options }),
      icon: <MUIStyleIcon />,
      label: "Custom",
    },
    {
      callback: (data, options) => console.log("=> Send", { options }),
      disabled: true,
      icon: Icons.block,
      label: "Send",
    },
    {
      callback: (data, options) => console.log("=> Filter", { options }),
      icon: Icons.filter,
      label: "Filter",
      position: "icon",
    },
    {
      callback: (data, options) => console.log("=> Custom", { options }),
      icon: <MUIStyleIcon />,
      label: "Custom",
      position: "row",
    },
    {
      callback: (data, options) => console.log("=> Edit", { options }),
      icon: Icons.edit,
      label: "Edit",
      position: "row",
    },
    {
      callback: (data, options) => console.log("=> Notify", { options }),
      disabled: (data: any) => data.age > 40,
      icon: Icons.notifications,
      label: "Notify",
      position: "row",
    },
    {
      callback: (data, options) => console.log("=> Delete", { options }),
      disabled: true,
      icon: Icons.delete,
      label: "Delete",
      position: "row",
    },
    {
      callback: (data, options) => console.log("=> Delete at least 3", { options }),
      disabled: (data: any[]) => data.length < 3,
      icon: Icons.delete,
      label: "Delete at least 3",
      position: "selection",
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
  getRowStyle: (row, options) => {
    const index = options?.indexes[0] || 0;
    return {
      backgroundColor: index % 2 === 0 ? "lightyellow" : "lightgreen",
    };
  },
};

export const TableLayout = Template.bind({});
TableLayout.args = {
  ...Primary.args,
  actions: [
    {
      callback: (data, options) => console.log("=> Add", { options }),
      icon: Icons.add,
      label: "Add",
    },
  ],
  columns: [
    { label: "Name", path: "name" },
    { label: "Last Name", path: "lastName" },
    { label: "Age", path: "age" },
    { label: "Email", path: "email" },
    { label: "City", path: "city" },
    { label: "Address", path: "address" },
    { label: "Department", path: "department" },
    { label: "School", path: "school" },
    { label: "Avatar", path: "avatar" },
  ],
  rows: [
    {
      id: 1,
      name: "Devin",
      lastName: "Yukhnin",
      email: "dyukhnin0@t.co",
      age: 29,
      city: "Tutem",
      address: "1424 Ridge Oak Drive",
      department: "Research and Development",
      school: "Aichi Gakusen University",
      avatar: "http://dummyimage.com/199x100.png/ff4444/ffffff",
    },
    {
      id: 2,
      name: "Kale",
      lastName: "Domican",
      email: "kdomican1@archive.org",
      age: 44,
      city: "Culacling",
      address: "378 Loftsgordon Drive",
      department: "Services",
      school: "Medical Academy in Lodz",
      avatar: "http://dummyimage.com/212x100.png/dddddd/000000",
    },
    {
      id: 3,
      name: "Harcourt",
      lastName: "Hackleton",
      email: "hhackleton2@mozilla.com",
      age: 19,
      city: "Klirou",
      address: "385 Prairie Rose Junction",
      department: "Support",
      school: "Universidad Autónoma de Fresnillo",
      avatar: "http://dummyimage.com/235x100.png/ff4444/ffffff",
    },
    {
      id: 4,
      name: "Keri",
      lastName: "Robard",
      email: "krobard3@unblog.fr",
      age: 21,
      city: "Van Nuys",
      address: "883 Straubel Way",
      department: "Business Development",
      school: "Fachhochschule Hamburg",
      avatar: "http://dummyimage.com/229x100.png/cc0000/ffffff",
    },
    {
      id: 5,
      name: "Trueman",
      lastName: "Jedrys",
      email: "tjedrys4@eventbrite.com",
      age: 36,
      city: "Sumberagung",
      address: "72 Independence Street",
      department: "Business Development",
      school: "Illinois School of Professional Psychology - Meadows Campus",
      avatar: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
    },
    {
      id: 6,
      name: "Nevsa",
      lastName: "Gelderd",
      email: "ngelderd5@wisc.edu",
      age: 22,
      city: "Qandala",
      address: "2 Lakewood Gardens Trail",
      department: "Accounting",
      school: "Universiti Malaysia Sabah",
      avatar: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
    },
  ],
  rowsTotal: 6,
  tableLayout: "auto",
  title: "Try to scroll horizontally",
};

export const TableLayoutSticky = Template.bind({});
TableLayoutSticky.args = {
  ...Primary.args,
  sticky: true,
  height: 400,
  actions: [
    {
      callback: (data, options) => console.log("=> Add", { options }),
      icon: Icons.add,
      label: "Add",
    },
  ],
  columns: [
    { label: "Name", path: "name" },
    { label: "Last Name", path: "lastName" },
    { label: "Age", path: "age" },
    { label: "Email", path: "email" },
    { label: "City", path: "city" },
    { label: "Address", path: "address" },
    { label: "Department", path: "department" },
    { label: "School", path: "school" },
    { label: "Avatar", path: "avatar" },
  ],
  rows: [
    {
      id: 1,
      name: "Devin",
      lastName: "Yukhnin",
      email: "dyukhnin0@t.co",
      age: 29,
      city: "Tutem",
      address: "1424 Ridge Oak Drive",
      department: "Research and Development",
      school: "Aichi Gakusen University",
      avatar: "http://dummyimage.com/199x100.png/ff4444/ffffff",
    },
    {
      id: 2,
      name: "Kale",
      lastName: "Domican",
      email: "kdomican1@archive.org",
      age: 44,
      city: "Culacling",
      address: "378 Loftsgordon Drive",
      department: "Services",
      school: "Medical Academy in Lodz",
      avatar: "http://dummyimage.com/212x100.png/dddddd/000000",
    },
    {
      id: 3,
      name: "Harcourt",
      lastName: "Hackleton",
      email: "hhackleton2@mozilla.com",
      age: 19,
      city: "Klirou",
      address: "385 Prairie Rose Junction",
      department: "Support",
      school: "Universidad Autónoma de Fresnillo",
      avatar: "http://dummyimage.com/235x100.png/ff4444/ffffff",
    },
    {
      id: 4,
      name: "Keri",
      lastName: "Robard",
      email: "krobard3@unblog.fr",
      age: 21,
      city: "Van Nuys",
      address: "883 Straubel Way",
      department: "Business Development",
      school: "Fachhochschule Hamburg",
      avatar: "http://dummyimage.com/229x100.png/cc0000/ffffff",
    },
    {
      id: 5,
      name: "Trueman",
      lastName: "Jedrys",
      email: "tjedrys4@eventbrite.com",
      age: 36,
      city: "Sumberagung",
      address: "72 Independence Street",
      department: "Business Development",
      school: "Illinois School of Professional Psychology - Meadows Campus",
      avatar: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
    },
    {
      id: 6,
      name: "Nevsa",
      lastName: "Gelderd",
      email: "ngelderd5@wisc.edu",
      age: 22,
      city: "Qandala",
      address: "2 Lakewood Gardens Trail",
      department: "Accounting",
      school: "Universiti Malaysia Sabah",
      avatar: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
    },
  ],
  rowsTotal: 6,
  tableLayout: "auto",
  title: "Try to scroll both ways",
};

export const ColumnFilter = Template.bind({});
ColumnFilter.args = {
  ...Primary.args,
  columns: [
    { label: "Name", path: "name", renderFilter: <MUITextField type="text" label="type to filter" /> },
    { label: "Age", path: "age" },
  ],
  height: 400,
  rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],
  showFilters: true,
  sticky: true,
  title: "Column Filters (sticky)",
};
