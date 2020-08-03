import renderer from "react-test-renderer";

import { AvatarVariant, IAvatar } from "../../types/Avatar";
import { Icons } from "../../types/Icon";
import { getTestable } from "../../utils/tests";

import Avatar, { DATA_CY_DEFAULT } from ".";

const defaultProps: IAvatar = {};

const getAvatarTestable = (props?: IAvatar, dataCy = DATA_CY_DEFAULT) =>
  getTestable(Avatar, { dataCy, domNode: "div", props: { ...defaultProps, ...props } });

describe("Avatar test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getAvatarTestable();
    expect(wrapper).toHaveLength(1);
    const icon = wrapper.find("Icon");
    expect(icon).toHaveLength(0);
    const image = wrapper.find("img");
    expect(image).toHaveLength(0);
    const text = wrapper.find("Typography");
    expect(text).toHaveLength(0);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getAvatarTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getAvatarTestable({ icon: Icons.business });
    const icon = wrapper.find("Icon");
    expect(icon).toHaveLength(1);
    expect(icon.prop("name")).toEqual(Icons.business);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("image", () => {
    const alt = "Mosaic Image";
    const src = "//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg";
    const { element, wrapper } = getAvatarTestable({ alt, src });
    const image = wrapper.find("img");
    expect(image).toHaveLength(1);
    expect(image.prop("alt")).toEqual(alt);
    expect(image.prop("src")).toEqual(src);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const { element, wrapper } = getAvatarTestable({ loading: true }, `${DATA_CY_DEFAULT}-loading`);
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("squared", () => {
    const { element, wrapper } = getAvatarTestable({ variant: AvatarVariant.squared });
    expect(wrapper.prop("className")).toContain("MuiAvatar-square");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("text", () => {
    const initials = "MO";
    const { element, wrapper } = getAvatarTestable({ text: initials });
    const text = wrapper.find("Typography");
    expect(text).toHaveLength(1);
    expect(text.prop("children")).toEqual(initials);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
