import renderer from "react-test-renderer";
import { IInputNumber } from "../../types/InputNumber";
import { getLocalizedTestable } from "../../utils/tests";
import InputNumber, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT } from ".";

const defaultProps: IInputNumber = {};

const getInputNumberTestable = (props?: IInputNumber, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(InputNumber, { dataCy, domNode: "input", props: { ...defaultProps, ...props } });

// TODO: complete tests

describe("InputNumber test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getInputNumberTestable();
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getInputNumberTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  xit("localized", () => {
    const props = { ...defaultProps, localized: true };
    const { element, wrapper } = getInputNumberTestable({ ...props }, props[DATA_CY_SHORTCUT]);
    // console.log(wrapper.debug());
    expect("localizable-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
