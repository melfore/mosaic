import React from "react";
import renderer from "react-test-renderer";

import { Icons, IconSize, IIcon } from "../../types/Icon";
import { getTestable } from "../../utils/tests";

import Icon, { DATA_CY_DEFAULT } from ".";

const defaultProps: IIcon = {
  name: Icons.add,
};

const getIconTestable = (props?: IIcon, dataCy = DATA_CY_DEFAULT) =>
  getTestable(Icon, { dataCy, domNode: "svg", props: { ...defaultProps, ...props } });

// TODO: improve tests

describe("Icon test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getIconTestable();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.childAt(0).matchesElement(<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getIconTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const { element } = getIconTestable({ ...defaultProps, loading: true });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading large", () => {
    const { element } = getIconTestable({ ...defaultProps, loading: true, size: IconSize.large });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading small", () => {
    const { element } = getIconTestable({ ...defaultProps, loading: true, size: IconSize.small });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element, wrapper } = getIconTestable({ ...defaultProps, size: IconSize.large });
    expect(wrapper.hasClass("MuiSvgIcon-fontSizeLarge"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
