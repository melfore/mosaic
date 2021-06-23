import React from "react";
import renderer from "react-test-renderer";

import { Icons, IconSize, IIcon } from "../../types/Icon";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Icon, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IIcon> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "svg",
  props: { name: Icons.add },
};

const getIconTestable = (options?: IPartialTestOptions<IIcon>) =>
  getTestableComponent(Icon, DEFAULT_TEST_OPTIONS, options);

describe("Icon test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getIconTestable();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.childAt(0).matchesElement(<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getIconTestable({ dataCy: "custom", props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("forwarded props", () => {
    const forwardedClassName = "forwarded-classname";
    const { element, wrapper } = getIconTestable({ props: { forwarded: { className: forwardedClassName } } });
    expect(wrapper.hasClass(forwardedClassName)).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const { element } = getIconTestable({ props: { loading: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading - size large", () => {
    const { element } = getIconTestable({ props: { loading: true, size: IconSize.large } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading - size small", () => {
    const { element } = getIconTestable({ props: { loading: true, size: IconSize.small } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("rotate", () => {
    const { element, wrapper } = getIconTestable({ props: { rotate: true } });
    expect(wrapper.hasClass("makeStyles-rotate-2")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element, wrapper } = getIconTestable({ props: { size: IconSize.large } });
    expect(wrapper.hasClass("MuiSvgIcon-fontSizeLarge"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
