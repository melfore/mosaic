/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable storybook/default-exports */
import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import MUITextField from "@mui/material/TextField";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, fn, within } from "@storybook/test";

import { waitFor } from "../../../.storybook/utils";
import { Icons } from "../../types/Icon";
import { ITableColumn, ITableDataCallbackOptions } from "../../types/Table";
import { getAllComposedDataCy, getComposedDataCy } from "../../utils";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";
import {
  createLargeMockedData,
  TABLE_MOCKED_COLUMNS,
  TABLE_MOCKED_COLUMNS_FULL,
  TABLE_MOCKED_DATA,
} from "../Table/utils";
import {
  DATA_CY_DEFAULT,
  DATA_CY_SHORTCUT,
  LOCALIZABLE_PROPS,
  LocalizedTableVirtualized,
  SUBPARTS_MAP,
} from "../TableVirtualized";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "TableVirtualized";
LocalizedTableVirtualized.displayName = COMPONENT_NAME;

const meta = {
  title: "Display/TableVirtualized",
  component: LocalizedTableVirtualized,
  decorators: [LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Table Component",
          url: "https://mui.com/components/tables/",
        },
        component: "TableVirtualized",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
      description: {
        component:
          "The TableVirtualized component is used to display data in a table format virtualizing rows rendering",
      },
    },
  },
} satisfies Meta<typeof LocalizedTableVirtualized>;

export default meta;
type Story = StoryObj<typeof meta>;

const onPageMock = fn(() => logInfo(COMPONENT_NAME, "onPageChange handler"));
const onPageSizeMock = fn(() => logInfo(COMPONENT_NAME, "onPageSizeChange handler"));
const onRowMock = fn(() => logInfo(COMPONENT_NAME, "onRow handler"));
const onSelectMock = fn(() => logInfo(COMPONENT_NAME, "onSelect handler"));
const onSortMock = fn(() => logInfo(COMPONENT_NAME, "onSort handler"));

const waitForVirtuosoTable = async (canvas: any) => {
  // react-virtuoso doesn't render rows immediately because it need to do some DOM measurements...
  // waiting for table body children ensure consistency in test snapshots
  const tbody = canvas.getByTestId(getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.tableBody));
  await waitFor(() => tbody.childNodes.length > 0);
};

export const Primary: Story = {
  args: {
    columns: TABLE_MOCKED_COLUMNS,
    onPageChange: undefined,
    onPageSizeChange: undefined,
    onRowClick: undefined,
    onSelectionChange: undefined,
    onSortChange: undefined,
    rows: TABLE_MOCKED_DATA,
    dataCy: DATA_CY_DEFAULT,
    title: "TableVirtualized",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForVirtuosoTable(canvas);
  },
};

const addFilterToFirstColumn = ([first, ...others]: ITableColumn[]) => {
  const withFilter = {
    ...first,
    renderFilter: <MUITextField label="type to filter" type="text" variant="standard" />,
  };
  return [withFilter, ...others];
};

const onActionMock = fn(() => {});

const onDataAction = (actionName: string, data: any, options: ITableDataCallbackOptions) => {
  console.info({ data }, { options });
  logInfo(COMPONENT_NAME, `=> on '${actionName}' handler`);
  onActionMock();
};

export const DataActions: Story = {
  args: {
    ...Primary.args,
    actions: [
      {
        callback: (data: any, options: any) => onDataAction("Add", data, options),
        icon: Icons.add,
        label: "Add",
      },
      {
        callback: (data: any, options: any) => onDataAction("Custom", data, options),
        icon: <MUIStyleIcon />,
        label: "Custom",
      },
      {
        callback: (data: any, options: any) => onDataAction("Send", data, options),
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
        callback: (data: any, options: any) => onDataAction("Filter", data, options),
        icon: Icons.filter,
        label: "Filter",
        position: "icon",
        tooltip: "1 filter applied",
      },
      {
        callback: (data: any, options: any) => onDataAction("Close", data, options),
        icon: Icons.close,
        label: "Close",
        position: "icon",
      },
      {
        callback: (data: any, options: any) => onDataAction("Custom", data, options),
        icon: <MUIStyleIcon />,
        label: "Custom",
        position: "row",
      },
      {
        callback: (data: any, options: any) => onDataAction("Edit", data, options),
        icon: Icons.edit,
        label: "Edit",
        position: "primary",
      },
      {
        callback: (data: any, options: any) => onDataAction("Notify", data, options),
        disabled: (data: any) => data.age > 40,
        icon: Icons.notifications,
        label: "Notify",
        position: "row",
      },
      {
        callback: (data: any, options: any) => onDataAction("Delete", data, options),
        disabled: true,
        icon: Icons.delete,
        label: "Delete",
        position: "row",
      },
      {
        callback: (data: any, options: any) => onDataAction("Delete >= 3", data, options),
        disabled: (data: any[]) => data.length < 3,
        icon: Icons.delete,
        label: "Delete at least 3",
        position: "selection",
      },
    ],
  },
  play: Primary.play,
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
  play: Primary.play,
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    title: MessageMock.title,
  },
  play: Primary.play,
};

export const NoData: Story = {
  args: {
    ...Primary.args,
    rows: [],
  },
  play: Primary.play,
};

export const EmptyState: Story = {
  args: {
    ...NoData.args,
    emptyState: "Custom Empty State",
  },
  play: Primary.play,
};

export const PageSizeCustom: Story = {
  args: {
    ...Primary.args,
    onPageChange: onPageMock,
    onPageSizeChange: onPageSizeMock,
    pageSize: 3,
    pageSizeOptions: [3, 6, 9],
    rows: [...Primary.args.rows!.slice(0, 3)],
    rowsTotal: 30,
  },
  play: Primary.play,
};

export const Pagination: Story = {
  args: {
    ...Primary.args,
    onPageChange: onPageMock,
    rows: [...Primary.args.rows!.slice(0, 10)],
    rowsTotal: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForVirtuosoTable(canvas);
    const nextPageButton = canvas.getByTestId(getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.pagination, "next"));
    if (!nextPageButton) {
      return;
    }

    fireEvent.click(nextPageButton);
    expect(onPageMock).toHaveBeenCalledTimes(onPageMock.mock.calls.length);
  },
};

export const RowClickable: Story = {
  args: {
    ...Primary.args,
    onRowClick: onRowMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForVirtuosoTable(canvas);
    const secondRow = canvas.getAllByRole("cell").at(1);
    if (!secondRow) {
      return;
    }

    fireEvent.click(secondRow);
    expect(onRowMock).toHaveBeenCalledTimes(onRowMock.mock.calls.length);
  },
};

export const Selectable: Story = {
  args: {
    ...Primary.args,
    onSelectionChange: onSelectMock,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await waitForVirtuosoTable(canvas);
    const selectAll = canvas.getByTestId(getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.selectAll));
    if (!selectAll) {
      return;
    }

    await step("Select all", async () => {
      fireEvent.click(selectAll);
      await expect(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length);
    });

    await step("Deselect all", async () => {
      fireEvent.click(selectAll);
      await expect(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length);
    });

    const selectOne = canvas.getAllByTestId("checkbox-input").at(1);
    if (!selectOne) {
      return;
    }

    await step("Select one", async () => {
      fireEvent.click(selectOne);
      await expect(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length);
    });

    await step("Deselect one", async () => {
      fireEvent.click(selectOne);
      await expect(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length);
    });
  },
};

export const Sortable: Story = {
  args: {
    ...Primary.args,
    onSortChange: onSortMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForVirtuosoTable(canvas);
    const firstHeading = canvas.getAllByRole("columnheader").at(0);
    if (!firstHeading) {
      return;
    }

    fireEvent.click(firstHeading);
    expect(onSortMock).toHaveBeenCalledTimes(onSortMock.mock.calls.length);
  },
};

export const Sticky: Story = {
  args: {
    ...Primary.args,
    height: 400,
    onPageChange: undefined,
    onPageSizeChange: undefined,
    rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],
    sticky: true,
  },
  play: Primary.play,
};

export const StickyPagination: Story = {
  args: {
    ...Primary.args,
    height: 400,
    onPageChange: onPageMock,
    rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],
    sticky: true,
  },
  play: Primary.play,
};

export const Styled = {
  args: {
    ...Primary.args,
    style: {
      backgroundColor: "cyan",
    },
  },
  play: Primary.play,
};

export const StyledRow = {
  args: {
    ...Primary.args,
    actions: [
      {
        callback: (data: any, options: any) => onDataAction("Edit", data, options),
        icon: Icons.edit,
        label: "Edit",
        position: "primary",
      },
    ],
    getRowStyle: (row: any, options: any) => {
      const index = options?.indexes[0] || 0;
      return {
        backgroundColor: index % 2 === 0 ? "lightyellow" : "lightgreen",
      };
    },
  },
  play: Primary.play,
};

export const TableLayoutAuto: Story = {
  args: {
    ...Primary.args,
    actions: [
      {
        callback: (data: any, options: any) => onDataAction("Add", data, options),
        icon: Icons.add,
        label: "Add",
      },
      {
        callback: (data: any, options: any) => onDataAction("Edit", data, options),
        icon: Icons.edit,
        label: "Edit",
        position: "primary",
      },
      {
        callback: (data: any, options: any) => onDataAction("Delete", data, options),
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
  },
  play: Primary.play,
};

export const TableLayoutAutoSelectionSticky = {
  args: {
    ...TableLayoutAuto.args,
    onSelectionChange: onSelectMock,
    stickySelection: true,
  },
  play: Primary.play,
};

export const TableLayoutSticky = {
  args: {
    ...Primary.args,
    sticky: true,
    height: 400,
    actions: [
      {
        callback: (data: any, options: any) => onDataAction("Add", data, options),
        icon: Icons.add,
        label: "Add",
      },
    ],
    columns: TABLE_MOCKED_COLUMNS_FULL,
    rows: createLargeMockedData(50),
    rowsTotal: 500,
    tableLayout: "auto",
    title: "Try to scroll both ways",
  },
  play: Primary.play,
};

export const ColumnFilters: Story = {
  args: {
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
  },
  play: Primary.play,
};

export const ColumnFiltersSticky: Story = {
  args: {
    ...ColumnFilters.args,
    sticky: true,
    title: "Column Filters (sticky)",
  },
  play: Primary.play,
};

export const ColumnFiltersStickyWithActions: Story = {
  args: {
    ...ColumnFiltersSticky.args,
    actions: [
      {
        callback: (data: any, options: any) => onDataAction("Add", data, options),
        icon: Icons.add,
        label: "Add",
      },
      {
        callback: (data: any, options: any) => onDataAction("Close", data, options),
        icon: Icons.close,
        label: "Close",
        position: "icon",
      },
      {
        callback: (data: any, options: any) => onDataAction("Custom", data, options),
        icon: <MUIStyleIcon />,
        label: "Custom",
        position: "row",
      },
      {
        callback: (data: any, options: any) => onDataAction("Edit", data, options),
        icon: Icons.edit,
        label: "Edit",
        position: "primary",
      },
      {
        callback: (data: any, options: any) => onDataAction("Delete >= 3", data, options),
        disabled: (data: any[]) => data.length < 3,
        icon: Icons.delete,
        label: "Delete at least 3",
        position: "selection",
      },
    ],
    columns: addFilterToFirstColumn(TableLayoutSticky.args.columns),
    rows: TableLayoutSticky.args.rows,
    tableLayout: "auto",
  },
  play: Primary.play,
};

export const ColumnFiltersStickyWithActionsStickySelection: Story = {
  args: {
    ...ColumnFiltersStickyWithActions.args,
    onSelectionChange: onSelectMock,
    stickySelection: true,
  },
  play: Primary.play,
};
