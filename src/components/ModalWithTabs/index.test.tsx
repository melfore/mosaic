import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import ModalWithTabs, { DATA_CY_DEFAULT, ModalWithTabsType } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ModalWithTabsType> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "ModalWithTabs",
  localized: true,
  props: { labelList: [{ label: "PAGE" }] },
};

const getModalWithTabsTestable = (options?: IPartialTestOptions<ModalWithTabsType>) =>
  getTestableComponent(ModalWithTabs, DEFAULT_TEST_OPTIONS, options);

describe("Tabs test suite:", () => {
  it("color", () => {
    getModalWithTabsTestable({ props: { color: "primary" } });
  });

  it("Page", () => {
    getModalWithTabsTestable({ props: { labelList: [{ label: "PAGE1" }, { label: "PAGE2" }] } });
  });

  it("Wrapped", () => {
    getModalWithTabsTestable({
      props: { labelList: [{ label: "PAGE1" }, { label: "PAGE2", wrapped: true }] },
    });
  });

  it("children", () => {
    getModalWithTabsTestable({
      props: { labelList: [{ label: "PAGE1", content: "Children" }] },
    });
  });

  it("orientation", () => {
    getModalWithTabsTestable({
      props: { labelList: [{ label: "PAGE1" }], orientation: "vertical" },
    });
  });
});
