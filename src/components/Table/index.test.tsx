import React from "react";
import { mount } from "enzyme";
import Table from ".";
import { Icons } from "../../types/Icon";

const defaultProps = {
  columns: [
    { label: "Name", path: "name" },
    { label: "Age", path: "age" },
  ],
  onPageChange: jest.fn(),
  onPageSizeChange: jest.fn(),
  onRowClick: jest.fn(),
  onSearchChange: jest.fn(),
  onSortChange: jest.fn(),
  rows: [
    { name: "John", age: 35 },
    { name: "Nick", age: 45 },
    { name: "Emma", age: 32 },
    { name: "Joey", age: 29 },
    { name: "Luis", age: 78 },
  ],
  title: "Table Title",
};

const componentWrapper = (props = {}) => <Table {...defaultProps} {...props} />;

describe("Table test suite:", () => {
  it("default", () => {
    const sortCallback = jest.fn();
    const component = componentWrapper({ onSortChange: sortCallback });
    const wrapper = mount(component);
    const tableTitle = wrapper.find("h6");
    expect(tableTitle.text()).toEqual(defaultProps.title);
    const tableHead = wrapper.find("thead");
    const tableHeadCells = tableHead.find("th");
    expect(tableHeadCells).toHaveLength(defaultProps.columns.length);
    const firstTableHeadCell = tableHeadCells.first().find("span.MuiTableSortLabel-root");
    firstTableHeadCell.simulate("click");
    expect(sortCallback).toHaveBeenCalledTimes(1);
    const tableBody = wrapper.find("tbody");
    const tableBodyRows = tableBody.find("tr");
    expect(tableBodyRows).toHaveLength(defaultProps.rows.length);
  });

  it("with actions", () => {
    const actionCallback = jest.fn();
    const component = componentWrapper({
      actions: [
        {
          callback: actionCallback,
          icon: Icons.add,
          label: "Add",
        },
        {
          callback: actionCallback,
          disabled: true,
          icon: Icons.add,
          label: "Refresh",
        },
        {
          callback: actionCallback,
          hidden: true,
          icon: Icons.add,
          label: "Export",
        },
      ],
    });
    const wrapper = mount(component);
    const headerActions = wrapper.find("MTableActions");
    const addAction = headerActions.find("Button").first();
    addAction.simulate("click");
    expect(actionCallback).toHaveBeenCalledTimes(1);
  });

  it("without interaction events", () => {
    const component = componentWrapper({
      paginated: false,
      searchable: false,
      sortable: false,
    });
    const wrapper = mount(component);
    const tableHead = wrapper.find("thead");
    const tableHeadCells = tableHead.find("th");
    expect(tableHeadCells).toHaveLength(defaultProps.columns.length);
    const firstTableHeadCell = tableHeadCells.first().find("span.MuiTableSortLabel-root");
    expect(firstTableHeadCell).toEqual({});
  });
});
