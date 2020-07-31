import React from "react";
import { mount } from "enzyme";
import Typography from ".";
import { TypographyVariants, ITypography } from "../../types/Typography";
import IntlProviderMock, { MessageMock, LocaleMock, mockedMessages } from "../../utils/mocks/IntlProviderMock";

const defaultProps: ITypography = {};

const componentWrapper = (props?: ITypography) => <Typography {...defaultProps} {...props} />;

const localizedComponentWrapper = (props?: ITypography) => (
  <IntlProviderMock locale={LocaleMock.it}>
    <Typography {...defaultProps} {...props}>
      {MessageMock.typography}
    </Typography>
  </IntlProviderMock>
);

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
    expect(styledTypography.prop("gutterBottom")).toBeFalsy();
    expect(styledTypography.prop("noWrap")).toBeFalsy();
    const pageTitle = styledTypography.find("h1");
    expect(pageTitle.prop("className")).toContain("MuiTypography-h5");
  });

  it("bottom spacing", () => {
    const component = componentWrapper({ bottomSpacing: true });
    const wrapper = mount(component);
    const styledTypography = wrapper.find("Typography").childAt(0);
    expect(styledTypography.prop("gutterBottom")).toBeTruthy();
  });

  it("custom data-cy", () => {
    const component = componentWrapper({ dataCy: "custom" });
    const wrapper = mount(component);
    const paragraph = wrapper.find("p");
    expect(paragraph.prop("className")).toContain("data-cy-custom");
  });

  it("truncated", () => {
    const component = componentWrapper({ truncated: true });
    const wrapper = mount(component);
    const styledTypography = wrapper.find("Typography").childAt(0);
    expect(styledTypography.prop("noWrap")).toBeTruthy();
  });

  it("loading", () => {
    const component = componentWrapper({ loading: true });
    const wrapper = mount(component);
  });

  it("localized", () => {
    const base = localizedComponentWrapper({ localized: true });
    const baseWrapper = mount(base);
    const paragraph = baseWrapper.find("p.MuiTypography-root");
    expect(paragraph.text()).toEqual(mockedMessages[LocaleMock.it].typography);

    const baseWithDataCy = localizedComponentWrapper({ dataCy: "localized", localized: true });
    const dataCyWrapper = mount(baseWithDataCy);
    const typography = dataCyWrapper.find("Typography");
    expect(typography.prop("dataCy")).toEqual("localized");
  });
});
