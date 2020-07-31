import React from "react";
import { mount } from "enzyme";
import ListCollapsibleItem from ".";

const defaultProps = {
  title: "ListCollapsibleItem Title",
};

const componentWrapper = (props = {}) => <ListCollapsibleItem {...defaultProps} {...props} />;

describe("ListCollapsibleItem test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const listItemTitle = wrapper.find("div.MuiListItemText-root");
    const title = listItemTitle.find("p");
    expect(title.text()).toEqual(defaultProps.title);
  });
});
