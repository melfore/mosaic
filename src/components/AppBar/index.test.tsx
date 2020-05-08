import React from "react";
import { mount } from "enzyme";
import AppBar from ".";

const defaultProps = {};

const componentWrapper = (props = {}) => <AppBar {...defaultProps} {...props} />;

describe("AppBar test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const toolbar = wrapper.find(".MuiToolbar-root");
    expect(toolbar).toBeTruthy();
  });

  it("with menu", () => {
    const navigationMenuClickHandler = jest.fn();
    const component = componentWrapper({ onNavigationMenuClick: navigationMenuClickHandler });
    const wrapper = mount(component);
    const menuIcon = wrapper.find("IconButton");
    expect(menuIcon.prop("icon")).toEqual("menu");
    const menuIconButton = menuIcon.find("button");
    menuIconButton.simulate("click");
    expect(navigationMenuClickHandler).toHaveBeenCalledTimes(1);
  });

  it("with title", () => {
    const component = componentWrapper({ title: "App" });
    const wrapper = mount(component);
    const title = wrapper.find("Typography");
    expect(title.prop("label")).toEqual("App");
  });
});
