import React from "react";
import { mount } from "enzyme";
import Table from ".";
import { Icons } from "../../types/Icon";
import { TableActionScope } from "../../types/Table";

const defaultProps = {
  columns: [
    { label: "Name", path: "name" },
    { label: "Age", path: "age" },
  ],
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
    const component = componentWrapper();
    const wrapper = mount(component);
    const tableTitle = wrapper.find("h6");
    expect(tableTitle.text()).toEqual(defaultProps.title);
    const tableHead = wrapper.find("thead");
    const tableHeadCells = tableHead.find("th");
    expect(tableHeadCells).toHaveLength(defaultProps.columns.length);
    const tableBody = wrapper.find("tbody");
    const tableBodyRows = tableBody.find("tr");
    expect(tableBodyRows).toHaveLength(defaultProps.rows.length);
  });

  it("with action global", () => {
    const actionCallback = jest.fn();
    const component = componentWrapper({
      actions: [
        {
          callback: actionCallback,
          icon: Icons.add,
          label: "Add",
        },
      ],
    });
    const wrapper = mount(component);
    const headerActions = wrapper.find("MTableActions");
    const addAction = headerActions.find("Button").first();
    addAction.simulate("click");
    expect(actionCallback).toHaveBeenCalledTimes(1);
  });

  it("with action row", () => {
    const actionCallback = jest.fn();
    const component = componentWrapper({
      actions: [
        {
          callback: actionCallback,
          icon: Icons.delete,
          label: "Delete",
          scope: TableActionScope.row,
        },
      ],
    });
    const wrapper = mount(component);
  });

  it("with loading", () => {
    const component = componentWrapper({ loading: false });
    const wrapper = mount(component);
  });

  it("with pagination", () => {
    const pageChangeCallback = jest.fn();
    const pageSizeChangeCallback = jest.fn();
    const component = componentWrapper({
      onPageChange: pageChangeCallback,
      onPageSizeChange: pageSizeChangeCallback,
      pageSize: 5,
      rows: [...defaultProps.rows, { name: "Tina", age: 44 }],
    });
    const wrapper = mount(component);
  });

  it("with row click", () => {
    const rowClickCallback = jest.fn();
    const component = componentWrapper({ onRowClick: rowClickCallback });
    const wrapper = mount(component);
  });

  it("with search", () => {
    const searchChangeCallback = jest.fn();
    const component = componentWrapper({ onSearchChange: searchChangeCallback });
    const wrapper = mount(component);
  });

  it("with selection", () => {
    const selectionChangeCallback = jest.fn();
    const component = componentWrapper({ onSelectionChange: selectionChangeCallback });
    const wrapper = mount(component);
  });

  it("with sorting", () => {
    const sortChangeCallback = jest.fn();
    const component = componentWrapper({ onSortChange: sortChangeCallback });
    const wrapper = mount(component);
  });
});
