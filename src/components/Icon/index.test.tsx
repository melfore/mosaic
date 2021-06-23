import React from "react";
import renderer from "react-test-renderer";
import MUIStyleIcon from "@material-ui/icons/Style";

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

  it("custom icon", () => {
    const { element, wrapper } = getIconTestable({ domNode: "div", props: { children: <MUIStyleIcon /> } } as any);
    const svgPath = wrapper.find("path");
    expect(
      svgPath.matchesElement(
        <path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z" />
      )
    );

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

  it("render null", () => {
    const { element, wrapper } = getIconTestable({ props: { name: undefined } });
    expect(wrapper).toEqual({});

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

  it("styled", () => {
    const style = { backgroundColor: "red", color: "white" };
    const { element, wrapper } = getIconTestable({ props: { style } });
    expect(wrapper.prop("style")).toEqual(style);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
