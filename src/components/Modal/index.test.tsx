// TODO: temp commenting out snapshots due to scrollTo missing
// import renderer from "react-test-renderer";

import { IModal } from "../../types/Modal";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Modal, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IModal> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "div",
  localized: true,
  props: { open: true },
};

const getModalTestable = (options?: IPartialTestOptions<IModal>) =>
  getTestableComponent(Modal, DEFAULT_TEST_OPTIONS, options);

// TODO: missing localized test
describe("Modal test suite:", () => {
  it("default", () => {
    const { wrapper } = getModalTestable();
    expect(wrapper).toHaveLength(1);
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { wrapper } = getModalTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);
  });

  it("cancel", () => {
    const action = jest.fn();
    const label = "Cancel";
    const { wrapper } = getModalTestable({ props: { cancel: { action, label } } });

    const cancelDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.actionCancel);
    const cancel = wrapper.find(`button[data-cy='${cancelDataCy}']`);
    expect(cancel.text()).toEqual(label);
    cancel.simulate("click");
    expect(action).toHaveBeenCalledTimes(1);
  });

  // TODO: improve this
  it("closable", () => {
    getModalTestable({ props: { closable: true } });
  });

  it("confirm", () => {
    const action = jest.fn();
    const label = "Confirm";
    const { wrapper } = getModalTestable({ props: { confirm: { action, label } } });

    const confirmDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.actionConfirm);
    const confirm = wrapper.find(`button[data-cy='${confirmDataCy}']`);
    expect(confirm.text()).toEqual(label);
    confirm.simulate("click");
    expect(action).toHaveBeenCalledTimes(1);
  });

  it("onClose", () => {
    const onClose = jest.fn();
    const { wrapper } = getModalTestable({ props: { onClose } });
    const backdrop = wrapper.find("div.MuiBackdrop-root");
    backdrop.simulate("click");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // TODO: improve this
  it("size - fullscreen", () => {
    getModalTestable({ props: { size: "xl" } });
  });

  // TODO: improve this
  it("size - large", () => {
    getModalTestable({ props: { size: "lg" } });
  });

  it("title", () => {
    const title = "Modal";
    const { wrapper } = getModalTestable({ props: { title } });

    const titleWrapper = wrapper.find("h2.MuiTypography-root");
    expect(titleWrapper.text()).toEqual(title);
  });
});
