import renderer from "react-test-renderer";

import { BreadCrumbsType } from "../../types/BreadCrumbs";
import { Icons } from "../../types/Icon";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import BreadCrumbs, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<BreadCrumbsType> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "breadcrumbs",
  localized: true,
  props: { link: [{ label: "PAGE", href: "" }], onClick: jest.fn() },
};

const getBreadCrumbsTestable = (options?: IPartialTestOptions<BreadCrumbsType>) =>
  getTestableComponent(BreadCrumbs, DEFAULT_TEST_OPTIONS, options);

describe("BreadCrumbs test suite:", () => {
  it("primary", () => {
    const onClick = jest.fn();
    const { element } = getBreadCrumbsTestable({ props: { link: [{ label: "PAGE", href: "" }], onClick } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
  it("icon test", () => {
    const onClick = jest.fn();
    const { element } = getBreadCrumbsTestable({
      props: { link: [{ label: "PAGE", href: "", icon: Icons.add }], onClick },
    });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
