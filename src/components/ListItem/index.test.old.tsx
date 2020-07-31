import React from "react";
import { mount } from "enzyme";
import ListItem from ".";

const defaultProps = {
  title: "ListItem Title",
};

const componentWrapper = (props = {}) => <ListItem {...defaultProps} {...props} />;

describe("ListItem test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const listItemTitle = wrapper.find("div.MuiListItemText-root");
    const title = listItemTitle.find("p");
    expect(title.text()).toEqual(defaultProps.title);
  });
});
