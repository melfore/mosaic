import renderer from "react-test-renderer";
import { IInput } from "../../types/Input";
import { getLocalizedTestable } from "../../utils/tests";
import InputText, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT } from ".";

const defaultProps: IInput = {};

const getInputTextTestable = (props?: IInput, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(InputText, { dataCy, domNode: "input", props: { ...defaultProps, ...props } });

// TODO: complete tests

describe("InputText test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getInputTextTestable();
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getInputTextTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  xit("localized", () => {
    const props = { ...defaultProps, localized: true };
    const { element, wrapper } = getInputTextTestable({ ...props }, props[DATA_CY_SHORTCUT]);
    // console.log(wrapper.debug());
    expect("localizable-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
