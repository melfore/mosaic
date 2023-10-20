import renderer from "react-test-renderer";

import { BreadCrumbsType } from "../../types/BreadCrumbs";
import { Icons } from "../../types/Icon";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import BreadCrumbs, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<BreadCrumbsType> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "nav",
  localized: true,
  props: {
    links: [{ label: "PAGE", href: "" }],
    onClick: jest.fn(),
  },
};

const getBreadCrumbsTestable = (options?: IPartialTestOptions<BreadCrumbsType>) =>
  getTestableComponent(BreadCrumbs, DEFAULT_TEST_OPTIONS, options);

describe("BreadCrumbs test suite:", () => {
  it("primary", () => {
    const { element } = getBreadCrumbsTestable();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getBreadCrumbsTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element } = getBreadCrumbsTestable({
      props: {
        links: [
          { label: "HOME", href: "", icon: Icons.home },
          { label: "PAGE", href: "", icon: Icons.business },
        ],
      },
    });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onClick", () => {
    const onClickHandler = jest.fn();
    const { element, wrapper } = getBreadCrumbsTestable({
      props: {
        links: [
          { label: "HOME", href: "" },
          { label: "PAGE", href: "" },
        ],
        onClick: onClickHandler,
      },
    });

    const clickableLink = wrapper.find("li.MuiBreadcrumbs-li a.MuiLink-root");
    clickableLink.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size - medium", () => {
    const { element } = getBreadCrumbsTestable({
      props: { size: "medium" },
    });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size - large", () => {
    const { element } = getBreadCrumbsTestable({
      props: { size: "large" },
    });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("separator", () => {
    const { element } = getBreadCrumbsTestable({
      props: { separator: "/" },
    });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
