import React from "react";
import { mount } from "enzyme";
import Avatar from ".";
import { Icons } from "../../types/Icon";
import { AvatarVariant } from "../../types/Avatar";

const defaultProps = {};

const componentWrapper = (props = {}) => <Avatar {...defaultProps} {...props} />;

describe("Avatar test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const avatar = wrapper.find("div.MuiAvatar-root");
    expect(avatar.prop("className")).toContain("data-cy-avatar");
    const icon = avatar.find("Icon");
    expect(icon).toHaveLength(0);
    const image = avatar.find("img");
    expect(image).toHaveLength(0);
    const text = avatar.find("Typography");
    expect(text).toHaveLength(0);
  });

  it("icon", () => {
    const component = componentWrapper({ icon: Icons.business });
    const wrapper = mount(component);
    const avatar = wrapper.find("div.MuiAvatar-root");
    const icon = avatar.find("Icon");
    expect(icon).toHaveLength(1);
    expect(icon.prop("name")).toEqual(Icons.business);
  });

  it("image", () => {
    const imageSrc =
      "//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg";
    const component = componentWrapper({
      src: imageSrc,
    });
    const wrapper = mount(component);
    const avatar = wrapper.find("div.MuiAvatar-root");
    const image = avatar.find("img");
    expect(image).toHaveLength(1);
    expect(image.prop("src")).toEqual(imageSrc);
  });

  it("text", () => {
    const component = componentWrapper({ text: "MO" });
    const wrapper = mount(component);
    const avatar = wrapper.find("div.MuiAvatar-root");
    const text = avatar.find("Typography");
    expect(text).toHaveLength(1);
    expect(text.prop("label")).toEqual("MO");
  });

  it("with custom variant", () => {
    const component = componentWrapper({ variant: AvatarVariant.squared });
    const wrapper = mount(component);
    const avatar = wrapper.find("div.MuiAvatar-root");
    expect(avatar.prop("className")).toContain("MuiAvatar-square");
  });
});
