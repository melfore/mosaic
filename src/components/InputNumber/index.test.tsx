import React from "react";
import { mount } from "enzyme";
import InputNumber from ".";

const defaultProps = {
  dataCy: "input-number",
  label: "Label",
};

const componentWrapper = (props = {}) => <InputNumber {...defaultProps} {...props} />;

describe("InputNumber test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const input = wrapper.find("input");
    expect(input.prop("data-cy")).toEqual(defaultProps.dataCy);
    input.simulate("change");
  });

  it("onChange handler", () => {
    const onChangeHandler = jest.fn();
    const component = componentWrapper({
      onChange: onChangeHandler,
    });
    const wrapper = mount(component);
    const input = wrapper.find("input");
    input.simulate("change");
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });

  it("with bounds", () => {
    const component = componentWrapper({
      initialValue: 5,
      minValue: 0,
      maxValue: 9,
    });
    const wrapper = mount(component);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "10" } });
    const upperBoundInput = wrapper.find("input");
    expect(upperBoundInput.prop("value")).toBe(9);
    input.simulate("change", { target: { value: "-1" } });
    const lowerBoundInput = wrapper.find("input");
    expect(lowerBoundInput.prop("value")).toBe(0);
  });

  it("with float", () => {
    const component = componentWrapper({
      initialValue: 5.5,
      integer: false,
      minValue: 0,
      maxValue: 9,
    });
    const wrapper = mount(component);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "6.5" } });
    const updatedInput = wrapper.find("input");
    expect(updatedInput.prop("value")).toBe(6.5);
  });
});
