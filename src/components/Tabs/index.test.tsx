import renderer from "react-test-renderer";

import { TabsType } from "../../types/Tabs";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Tabs, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<TabsType> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "tabs",
  localized: true,
  props: { labelList: [{ label: "PAGE" }] },
};

const getTabsTestable = (options?: IPartialTestOptions<TabsType>) =>
  getTestableComponent(Tabs, DEFAULT_TEST_OPTIONS, options);

describe("Tabs test suite:", () => {
  it("color", () => {
    getTabsTestable({ props: { color: "primary" } });
  });

  it("Page", () => {
    getTabsTestable({ props: { labelList: [{ label: "PAGE1" }, { label: "PAGE2" }] } });
  });

  it("Wrapped", () => {
    getTabsTestable({
      props: { labelList: [{ label: "PAGE1" }, { label: "PAGE2", wrapped: true }] },
    });
  });

  it("children", () => {
    getTabsTestable({
      props: { labelList: [{ label: "PAGE1", content: "Children" }] },
    });
  });

  it("orientation", () => {
    getTabsTestable({
      props: { labelList: [{ label: "PAGE1" }], orientation: "vertical" },
    });
  });
});
