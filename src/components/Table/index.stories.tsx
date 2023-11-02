/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable storybook/default-exports */
import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import MUITextField from "@mui/material/TextField";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import { TABLE_MOCKED_COLUMNS, TABLE_MOCKED_COLUMNS_FULL, TABLE_MOCKED_DATA } from "./utils";
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
          url: "https://mui.com/components/tables/",
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
  columns: TABLE_MOCKED_COLUMNS,
  onPageChange: () => {},
  onPageSizeChange: () => {},
  onRowClick: (data, options) => console.log("=> onRowClick", { options }),
  onSelectionChange: (data, options) => console.log("=> onSelectionChange", { options }),
  onSortChange: () => {},
  rows: TABLE_MOCKED_DATA,
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
      badge: {
        color: "secondary",
        overlap: "circular",
        value: "1",
        variant: "standard",
      },
      callback: (data, options) => console.log("=> Filter", { options }),
      icon: Icons.filter,
      label: "Filter",
      position: "icon",
      tooltip: "1 filter applied",
    },
    {
      callback: (data, options) => console.log("=> Close", { options }),
      icon: Icons.close,
      label: "Close",
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
      position: "primary",
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

export const Localized = Template.bind({});
Localized.args = {
  ...Primary.args,
  localized: true,
  title: MessageMock.title,
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
  onPageChange: undefined,
  onPageSizeChange: undefined,
  rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],
  sticky: true,
};

export const StickyPagination = Template.bind({});
StickyPagination.args = {
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
  actions: [
    {
      callback: (data, options) => console.log("=> Edit", { options }),
      icon: Icons.edit,
      label: "Edit",
      position: "primary",
    },
  ],
  getRowStyle: (row, options) => {
    const index = options?.indexes[0] || 0;
    return {
      backgroundColor: index % 2 === 0 ? "lightyellow" : "lightgreen",
    };
  },
};

export const TableLayoutAuto = Template.bind({});
TableLayoutAuto.args = {
  ...Primary.args,
  actions: [
    {
      callback: (data, options) => console.log("=> Add", { options }),
      icon: Icons.add,
      label: "Add",
    },
    {
      callback: (data, options) => console.log("=> Edit", { options }),
      icon: Icons.edit,
      label: "Edit",
      position: "primary",
    },
    {
      callback: (data, options) => console.log("=> Edit", { options }),
      icon: Icons.close,
      label: "Delete",
      position: "primary",
    },
  ],
  columns: TABLE_MOCKED_COLUMNS_FULL,
  rows: TABLE_MOCKED_DATA,
  rowsTotal: 6,
  tableLayout: "auto",
  title: "Try to scroll horizontally",
};

export const TableLayoutAutoSelectionSticky = Template.bind({});
TableLayoutAutoSelectionSticky.args = {
  ...TableLayoutAuto.args,
  stickySelection: true,
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
  columns: TABLE_MOCKED_COLUMNS_FULL,
  rows: TABLE_MOCKED_DATA,
  rowsTotal: 6,
  tableLayout: "auto",
  title: "Try to scroll both ways",
};

export const ColumnFilters = Template.bind({});
ColumnFilters.args = {
  ...Primary.args,
  columns: [
    {
      label: "Name",
      path: "name",
      renderFilter: <MUITextField label="type to filter" type="text" variant="standard" />,
    },
    { label: "Age", path: "age" },
  ],
  height: 400,
  rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],
  showFilters: true,
  title: "Column Filters",
};

export const ColumnFiltersSticky = Template.bind({});
ColumnFiltersSticky.args = {
  ...ColumnFilters.args,
  sticky: true,
  title: "Column Filters (sticky)",
};

export const ColumnFiltersStickyWithActions = Template.bind({});
ColumnFiltersStickyWithActions.args = {
  ...ColumnFiltersSticky.args,
  actions: [
    {
      callback: (data, options) => console.log("=> Add", { options }),
      icon: Icons.add,
      label: "Add",
    },
    {
      callback: (data, options) => console.log("=> Close", { options }),
      icon: Icons.close,
      label: "Close",
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
      position: "primary",
    },
    {
      callback: (data, options) => console.log("=> Delete at least 3", { options }),
      disabled: (data: any[]) => data.length < 3,
      icon: Icons.delete,
      label: "Delete at least 3",
      position: "selection",
    },
  ],
  columns: TableLayoutSticky.args.columns,
  rows: TableLayoutSticky.args.rows,
  tableLayout: "auto",
};

export const ColumnFiltersStickyWithActionsStickySelection = Template.bind({});
ColumnFiltersStickyWithActionsStickySelection.args = {
  ...ColumnFiltersStickyWithActions.args,
  stickySelection: true,
};
