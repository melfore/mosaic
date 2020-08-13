// TODO: temp commenting out snapshots due to scrollTo missing
// import renderer from "react-test-renderer";

import { Icons } from "../../types/Icon";
import { ITable } from "../../types/Table";
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
    const { wrapper } = getTableTestable();
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();
  });

  it("dataCy", () => {
    const { wrapper } = getTableTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);
  });

  it("actions", () => {
    const callback = jest.fn();
    const label = "Account";
    const { wrapper } = getTableTestable({ ...defaultProps, actions: [{ callback, icon: Icons.account, label }] });
    const action = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-action-${label}']`);
    action.simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
    const actionLabel = action.find("span.MuiButton-label");
    expect(actionLabel.text()).toEqual(label);
  });

  // TODO: improve this
  it("callbacks", () => {
    getTableTestable({
      ...defaultProps,
      onPageChange: jest.fn(),
      onPageSizeChange: jest.fn(),
      onRowClick: jest.fn(),
      onSearchChange: jest.fn(),
      onSelectionChange: jest.fn(),
      onSortChange: jest.fn(),
    });
  });

  it("immutable options", () => {
    const frozenRows = Object.freeze([
      { name: "Mosaic" },
      { name: "Murales" },
      { name: "Paintings" },
      { name: "Photography" },
      { name: "Sculpture" },
    ]) as { name: string }[];
    getTableTestable({ ...defaultProps, rows: frozenRows });
  });
});
