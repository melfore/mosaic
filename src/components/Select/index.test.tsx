import renderer from "react-test-renderer";
import { ISelect } from "../../types/Select";
import { getLocalizedTestable } from "../../utils/tests";
import Select, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT } from ".";

const defaultProps: ISelect<string> = {
  multiple: false,
  onChange: jest.fn(),
  options: ["A", "B", "C"],
};

const getSelectTestable = (props?: ISelect<string>, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(Select, { dataCy, domNode: "input", props: { ...defaultProps } });

// TODO: complete tests

describe("Select test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getSelectTestable();
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  xit("dataCy", () => {
    const { element, wrapper } = getSelectTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  xit("localized", () => {
    const props = { ...defaultProps, localized: true };
    const { element, wrapper } = getSelectTestable({ ...props }, props[DATA_CY_SHORTCUT]);
    // console.log(wrapper.debug());
    expect("localizable-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
