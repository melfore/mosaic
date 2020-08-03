import renderer from "react-test-renderer";
import { ITable } from "../../types/Table";
import { getLocalizedTestable } from "../../utils/tests";
import Table, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT } from ".";

const defaultProps: ITable = {
  columns: [],
  rows: [],
  title: "Table",
};

const getTableTestable = (props?: ITable, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(Table, { dataCy, domNode: "div", props: { ...defaultProps, ...props } });

// TODO: complete tests

describe("Table test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getTableTestable();
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();

    // const snapshotWrapper = renderer.create(element).toJSON();
    // expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getTableTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    // const snapshotWrapper = renderer.create(element).toJSON();
    // expect(snapshotWrapper).toMatchSnapshot();
  });

  xit("localized", () => {
    const props = { ...defaultProps, localized: true };
    const { element, wrapper } = getTableTestable({ ...props }, props[DATA_CY_SHORTCUT]);
    // console.log(wrapper.debug());
    expect("localizable-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
