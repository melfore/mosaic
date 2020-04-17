import React from "react";
import { mount } from "enzyme";
import Typography from ".";
import { TypographyVariants } from "../../types/Typography";

const defaultProps = {};

const componentWrapper = (props = {}) => <Typography {...defaultProps} {...props} />;

describe("Typography test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const styledTypography = wrapper.find("Typography").childAt(0);
    expect(styledTypography.prop("gutterBottom")).toBeFalsy();
    expect(styledTypography.prop("noWrap")).toBeFalsy();
    const paragraph = styledTypography.find("p");
    expect(paragraph.prop("className")).toContain("MuiTypography-body1");
    expect(paragraph.prop("className")).toContain("data-cy-typography");
  });

  it("pagetitle", () => {
    const component = componentWrapper({ variant: TypographyVariants.pagetitle });
    const wrapper = mount(component);
    const styledTypography = wrapper.find("Typography").childAt(0);
    expect(styledTypography.prop("gutterBottom")).toBeTruthy();
    expect(styledTypography.prop("noWrap")).toBeTruthy();
    const pageTitle = styledTypography.find("h1");
    expect(pageTitle.prop("className")).toContain("MuiTypography-h5");
  });

  it("with bottom spacing", () => {
    const component = componentWrapper({ bottomSpacing: true });
    const wrapper = mount(component);
    const styledTypography = wrapper.find("Typography").childAt(0);
    expect(styledTypography.prop("gutterBottom")).toBeTruthy();
  });

  it("with custom data-cy", () => {
    const component = componentWrapper({ dataCy: "custom" });
    const wrapper = mount(component);
    const paragraph = wrapper.find("p");
    expect(paragraph.prop("className")).toContain("data-cy-custom");
  });

  it("with truncated", () => {
    const component = componentWrapper({ truncated: true });
    const wrapper = mount(component);
    const styledTypography = wrapper.find("Typography").childAt(0);
    expect(styledTypography.prop("noWrap")).toBeTruthy();
  });
});
