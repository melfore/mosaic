import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { IAvatar, AvatarVariant } from "../../types/Avatar";
import Avatar, { DATA_CY_DEFAULT } from ".";
import { Icons } from "../../types/Icon";

const defaultProps: IAvatar = {};

const getElement = (props?: IAvatar, dataCy = DATA_CY_DEFAULT): ReactWrapper => {
  const wrapper = mount(<Avatar {...defaultProps} {...props} />);
  return wrapper.find("div[data-cy='" + dataCy + "']");
};

describe("Avatar test suite:", () => {
  it("default", () => {
    const element = getElement();
    const icon = element.find("Icon");
    expect(icon).toHaveLength(0);
    const image = element.find("img");
    expect(image).toHaveLength(0);
    const text = element.find("Typography");
    expect(text).toHaveLength(0);
  });

  it("dataCy", () => {
    const element = getElement({ dataCy: "custom" }, "custom");
    expect(element).toHaveLength(1);
  });

  it("icon", () => {
    const element = getElement({ icon: Icons.business });
    const icon = element.find("Icon");
    expect(icon).toHaveLength(1);
    expect(icon.prop("name")).toEqual(Icons.business);
  });

  it("image", () => {
    const alt = "Mosaic Image";
    const src = "//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg";
    const element = getElement({ alt, src });
    const image = element.find("img");
    expect(image).toHaveLength(1);
    expect(image.prop("alt")).toEqual(alt);
    expect(image.prop("src")).toEqual(src);
  });

  it("loading", () => {
    const element = getElement({ loading: true }, `${DATA_CY_DEFAULT}-loading`);
    expect(element).toHaveLength(1);
  });

  it("squared", () => {
    const element = getElement({ variant: AvatarVariant.squared });
    expect(element.prop("className")).toContain("MuiAvatar-square");
  });

  it("text", () => {
    const initials = "MO";
    const element = getElement({ text: initials });
    const text = element.find("Typography");
    expect(text).toHaveLength(1);
    expect(text.prop("children")).toEqual(initials);
  });
});
