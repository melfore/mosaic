import { IModal, ModalSize } from "../../types/Modal";
import { getLocalizedTestable } from "../../utils/tests";

import Modal, { DATA_CY_DEFAULT } from ".";

const defaultProps: IModal = {
  open: true,
};

const getModalTestable = (props?: IModal, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(Modal, { dataCy, domNode: "div", props: { ...defaultProps, ...props } });

describe("Modal test suite:", () => {
  it("default", () => {
    const { wrapper } = getModalTestable();
    expect(wrapper).toHaveLength(1);
  });

  it("dataCy", () => {
    const { wrapper } = getModalTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);
  });

  xit("localized", () => {
    // const props = { ...defaultProps, localized: true };
    // const { element, wrapper } = getModalTestable({ ...props }, props[DATA_CY_SHORTCUT]);
    // console.log(wrapper.debug());
    // expect("localizable-props-check").toBeTruthy();
    // const snapshotWrapper = renderer.create(element).toJSON();
    // expect(snapshotWrapper).toMatchSnapshot();
  });

  it("cancel", () => {
    const action = jest.fn();
    const label = "Cancel";
    const { wrapper } = getModalTestable({ cancel: { action, label } });
    const cancel = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-action-cancel']`);
    cancel.simulate("click");
    expect(action).toHaveBeenCalledTimes(1);
    const cancelLabel = cancel.find("span.MuiButton-label");
    expect(cancelLabel.text()).toEqual(label);
  });

  // TODO: improve this
  it("closable", () => {
    getModalTestable({ closable: true });
  });

  it("confirm", () => {
    const action = jest.fn();
    const label = "Confirm";
    const { wrapper } = getModalTestable({ confirm: { action, label } });
    const confirm = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-action-confirm']`);
    confirm.simulate("click");
    expect(action).toHaveBeenCalledTimes(1);
    const confirmLabel = confirm.find("span.MuiButton-label");
    expect(confirmLabel.text()).toEqual(label);
  });

  it("onClose", () => {
    const onClose = jest.fn();
    const { wrapper } = getModalTestable({ onClose });
    const backdrop = wrapper.find("div.MuiBackdrop-root");
    backdrop.simulate("click");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // TODO: improve this
  it("size", () => {
    getModalTestable({ size: ModalSize.large });
  });

  it("title", () => {
    const title = "Modal";
    const { wrapper } = getModalTestable({ title });
    const titleWrapper = wrapper.find("h2.MuiTypography-root");
    expect(titleWrapper.text()).toEqual(title);
  });
});
