import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ICheckbox, CheckboxSize } from "../../types/Checkbox";
import Checkbox, { DATA_CY_DEFAULT } from ".";

const defaultProps: ICheckbox = {};

const getElement = (props?: ICheckbox, dataCy = DATA_CY_DEFAULT): ReactWrapper => {
  const wrapper = mount(<Checkbox {...defaultProps} {...props} />);
  return wrapper.find("span[data-cy='" + dataCy + "']");
};

describe("Checkbox test suite:", () => {
  it("default", () => {
    const element = getElement();
    expect(element).toHaveLength(1);
    const input = element.find("input");
    expect(input.prop("checked")).toBeFalsy();
    expect(input.prop("data-indeterminate")).toBeFalsy();
    expect(input.prop("disabled")).toBeFalsy();
    expect(input.prop("required")).toBeFalsy();
  });

  it("dataCy", () => {
    const element = getElement({ dataCy: "custom" }, "custom");
    expect(element).toHaveLength(1);
  });

  it("checked", () => {
    const element = getElement({ value: true });
    const input = element.find("input");
    expect(input.prop("checked")).toBeTruthy();
  });

  it("disabled", () => {
    const element = getElement({ disabled: true });
    const input = element.find("input");
    expect(input.prop("disabled")).toBeTruthy();
  });

  it("intermediate", () => {
    const element = getElement({ intermediate: true });
    const input = element.find("input");
    expect(input.prop("data-indeterminate")).toBeTruthy();
  });

  it("onChange", () => {
    const onChangeHandler = jest.fn();
    const element = getElement({ onChange: onChangeHandler });
    const inputBefore = element.find("input");
    inputBefore.simulate("change", { target: { checked: true } });
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
    expect(onChangeHandler).toHaveBeenCalledWith(true);
  });

  it("onChange - not handled", () => {
    const element = getElement();
    const inputBefore = element.find("input");
    inputBefore.simulate("change", { target: { checked: true } });
  });

  it("required", () => {
    const element = getElement({ required: true });
    const input = element.find("input");
    expect(input.prop("required")).toBeTruthy();
  });

  it("size", () => {
    const element = getElement({ size: CheckboxSize.small });
  });
});
