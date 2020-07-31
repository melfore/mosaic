import React from "react";
import { mount } from "enzyme";
import { SpacerDirection } from "../../types/Spacer";
import Spacer from ".";

const defaultProps = {
  direction: SpacerDirection.horizontal,
};

const componentWrapper = (props = {}) => <Spacer {...defaultProps} {...props} />;

describe("Spacer test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const div = wrapper.find("div");
    expect(div.prop("direction")).toEqual(defaultProps.direction);
    expect(div.prop("level")).toEqual(1);
  });

  it("vertical", () => {
    const component = componentWrapper({ direction: SpacerDirection.vertical, level: 3 });
    const wrapper = mount(component);
    const div = wrapper.find("div");
    expect(div.prop("direction")).toEqual(SpacerDirection.vertical);
    expect(div.prop("level")).toEqual(3);
  });
});
