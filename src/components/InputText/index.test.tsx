import React from "react";
import { mount } from "enzyme";
import InputText from ".";

const defaultProps = {
  dataCy: "input-text",
  label: "Label",
};

const componentWrapper = (props = {}) => <InputText {...defaultProps} {...props} />;

describe("InputText test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const input = wrapper.find("input");
    expect(input.prop("data-cy")).toEqual(defaultProps.dataCy);
    input.simulate("change");
  });

  it("with multiline", () => {
    const component = componentWrapper({
      multiline: {
        rows: 3,
        rowsMax: 5,
      },
    });
    const wrapper = mount(component);
    const textarea = wrapper.find("textarea").at(0);
    expect(textarea.prop("rows")).toEqual(3);
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
});
