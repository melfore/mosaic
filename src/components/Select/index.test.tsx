import React from "react";
import { mount } from "enzyme";
import Select from ".";

const defaultProps = {
  autocomplete: true,
  label: "Label",
  onChange: () => {},
  options: ["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"],
};

const componentWrapper = (props = {}) => <Select {...defaultProps} {...props} />;

describe("Select test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
  });

  it("disabled", () => {
    const component = componentWrapper({ disabled: true });
    const wrapper = mount(component);
  });

  it("grouped", () => {
    const component = componentWrapper({ groupBy: (option: string) => option.slice(0, 1) });
    const wrapper = mount(component);
  });

  it("loading", () => {
    const component = componentWrapper({ loading: true });
    const wrapper = mount(component);
  });

  it("multiple", () => {
    const component = componentWrapper({ multiple: true });
    const wrapper = mount(component);
  });

  it("multiple with initial", () => {
    const component = componentWrapper({ initialValue: ["Mosaic"], multiple: true });
    const wrapper = mount(component);
  });

  it("with custom group name", () => {
    const component = componentWrapper({
      groupBy: (option: string) => option.slice(0, 1),
      getGroupLabel: (groupName: string) => groupName.toUpperCase(),
    });
    const wrapper = mount(component);
  });

  it("with custom option label", () => {
    const component = componentWrapper({ getOptionLabel: (option: string) => option.toUpperCase() });
    const wrapper = mount(component);
  });

  it("with custom option rendering", () => {
    const component = componentWrapper({ customOptionRendering: (option: string) => <b>{option}</b> });
    const wrapper = mount(component);
  });

  it("with initial", () => {
    const component = componentWrapper({ initialValue: "Mosaic" });
    const wrapper = mount(component);
  });

  it("with invalid initial", () => {
    const component = componentWrapper({ initialValue: ["Mosaic"] });
    const wrapper = mount(component);
  });
});
