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
    const { element } = getTabsTestable({ props: { color: "primary" } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("Page", () => {
    const { element } = getTabsTestable({ props: { labelList: [{ label: "PAGE1" }, { label: "PAGE2" }] } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
