import React from "react";
import { mount } from "enzyme";
import { Icons, IconSize } from "../../types/Icon";
import IconButton from ".";

const defaultProps = {
  dataCy: "myIconButton",
  onClick: jest.fn(),
  icon: Icons.add,
};

const componentWrapper = (props = {}) => <IconButton {...defaultProps} {...props} />;

describe("IconButton test suite:", () => {
  it("default", () => {
    const onClickHandler = jest.fn();
    const component = componentWrapper({
      onClick: onClickHandler,
    });
    const wrapper = mount(component);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    const svg = button.find("svg");
    expect(svg.prop("data-cy")).toEqual(defaultProps.dataCy);
  });

  it("disabled", () => {
    const onClickHandler = jest.fn();
    const component = componentWrapper({
      onClick: onClickHandler,
      disabled: true,
      size: IconSize.small,
    });
    const wrapper = mount(component);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(0);
  });
});
