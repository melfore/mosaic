import React from "react";
import { mount } from "enzyme";
import { Icons } from "../../types/Icon";
import Button from ".";
import { ButtonIconPosition } from "../../types/Button";

const defaultProps = {
  dataCy: "myButton",
  label: "Click Me",
  onClick: jest.fn(),
};

const componentWrapper = (props = {}) => <Button {...defaultProps} {...props} />;

describe("Button test suite:", () => {
  it("default", () => {
    const onClickHandler = jest.fn();
    const component = componentWrapper({
      onClick: onClickHandler,
    });
    const wrapper = mount(component);
    const button = wrapper.find("button");
    expect(button.prop("data-cy")).toEqual(defaultProps.dataCy);
    button.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    const buttonLabel = button.find("span.MuiButton-label");
    expect(buttonLabel.text()).toEqual(defaultProps.label);
  });

  it("with icon", () => {
    const component = componentWrapper({
      icon: { name: Icons.send },
    });
    const wrapper = mount(component);
    const button = wrapper.find("button");
    const icon = button.find("span.MuiButton-startIcon > Icon");
    expect(icon.prop("name")).toEqual(Icons.send);
  });

  it("with right icon", () => {
    const component = componentWrapper({
      icon: {
        name: Icons.send,
        position: ButtonIconPosition.right,
      },
    });
    const wrapper = mount(component);
    const button = wrapper.find("button");
    const icon = button.find("span.MuiButton-endIcon > Icon");
    expect(icon.prop("name")).toEqual(Icons.send);
  });
});
