import renderer from "react-test-renderer";

import { Icons } from "../../types/Icon";
import { ITable, TableActionPosition } from "../../types/Table";
import { getLocalizedTestable } from "../../utils/tests";

import Table, { DATA_CY_DEFAULT } from ".";

const defaultProps: ITable = {
  columns: [{ path: "name", label: "Name" }],
  rows: [
    { name: "Mosaic" },
    { name: "Murales" },
    { name: "Paintings" },
    { name: "Photography" },
    { name: "Sculpture" },
  ],
  title: "Table",
};

const getTableTestable = (props?: ITable, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(Table, { dataCy, domNode: "div", props: { ...defaultProps, ...props } });

// TODO: missing localized test

describe("Table test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getTableTestable();
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getTableTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  // TODO: improve this
  it("callbacks", () => {
    getTableTestable({
      ...defaultProps,
      onPageChange: jest.fn(),
      onPageSizeChange: jest.fn(),
      onRowClick: jest.fn(),
      onSelectionChange: jest.fn(),
      onSortChange: jest.fn(),
    });
  });

  it("global action", () => {
    const callback = jest.fn();
    const label = "Account";
    const { element, wrapper } = getTableTestable({
      ...defaultProps,
      actions: [{ callback, icon: Icons.account, label }],
    });
    const action = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-action-${label}']`);
    action.simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
    const actionLabel = action.find("span.MuiButton-label");
    expect(actionLabel.text()).toEqual(label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("hide header", () => {
    const { element } = getTableTestable({ ...defaultProps, hideHeader: true });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("immutable options", () => {
    const frozenRows = Object.freeze([
      { name: "Mosaic" },
      { name: "Murales" },
      { name: "Paintings" },
      { name: "Photography" },
      { name: "Sculpture" },
    ]) as { name: string }[];
    const { element } = getTableTestable({ ...defaultProps, rows: frozenRows });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const { element } = getTableTestable({ ...defaultProps, loading: true });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("pre-selection", () => {
    const { element } = getTableTestable({ ...defaultProps, selectionFilter: (d) => d.name.startsWith("P") });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("pre-sorting", () => {
    const { element } = getTableTestable({ ...defaultProps, sorting: { path: "name", ordering: "asc" } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("row action", () => {
    const callback = jest.fn();
    const label = "Account";
    const { element, wrapper } = getTableTestable({
      ...defaultProps,
      actions: [{ callback, icon: Icons.account, label, position: TableActionPosition.row }],
    });
    const action = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-action-${label}']`).first();
    action.simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("sticky header", () => {
    const { element } = getTableTestable({ ...defaultProps, stickyHeader: true });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
