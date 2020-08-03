import renderer from "react-test-renderer";
import { IModal } from "../../types/Modal";
import { getLocalizedTestable } from "../../utils/tests";
import Modal, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT } from ".";

const defaultProps: IModal = {
  open: true,
};

const getModalTestable = (props?: IModal, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(Modal, { dataCy, domNode: "div", props: { ...defaultProps, ...props } });

// TODO: complete tests

describe("Modal test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getModalTestable();
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();

    // const snapshotWrapper = renderer.create(element).toJSON();
    // expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getModalTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    // const snapshotWrapper = renderer.create(element).toJSON();
    // expect(snapshotWrapper).toMatchSnapshot();
  });

  xit("localized", () => {
    const props = { ...defaultProps, localized: true };
    const { element, wrapper } = getModalTestable({ ...props }, props[DATA_CY_SHORTCUT]);
    // console.log(wrapper.debug());
    expect("localizable-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
