import renderer from "react-test-renderer";

import { AvatarVariant, IAvatar } from "../../types/Avatar";
import { Icons } from "../../types/Icon";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Avatar, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IAvatar> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "div",
  localized: true,
  props: {},
};

const getAvatarTestable = (options?: IPartialTestOptions<IAvatar>) =>
  getTestableComponent(Avatar, DEFAULT_TEST_OPTIONS, options);

describe("Avatar test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getAvatarTestable();
    expect(wrapper).toHaveLength(1);

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon).toHaveLength(0);

    const image = wrapper.find("img");
    expect(image).toHaveLength(0);

    const textDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.text);
    const text = wrapper.find(`Typography[dataCy='${textDataCy}']`);
    expect(text).toHaveLength(0);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getAvatarTestable({ dataCy: "custom", props: { dataCy: "custom" } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getAvatarTestable({ props: { icon: Icons.business } });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon).toHaveLength(1);
    expect(icon.prop("name")).toEqual(Icons.business);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("image", () => {
    const alt = "Mosaic Image";
    const src = "//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg";
    const { element, wrapper } = getAvatarTestable({ props: { alt, src } });

    const image = wrapper.find("img");
    expect(image).toHaveLength(1);
    expect(image.prop("alt")).toEqual(alt);
    expect(image.prop("src")).toEqual(src);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const loadingDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.loading);
    const { element, wrapper } = getAvatarTestable({ dataCy: loadingDataCy, props: { loading: true } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading - squared", () => {
    const loadingDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.loading);
    const { element, wrapper } = getAvatarTestable({
      dataCy: loadingDataCy,
      props: { loading: true, variant: "square" },
    });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("squared", () => {
    const { element, wrapper } = getAvatarTestable({ props: { variant: AvatarVariant.squared } });
    expect(wrapper.prop("className")).toContain("MuiAvatar-square");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("text", () => {
    const initials = "MO";
    const { element, wrapper } = getAvatarTestable({ props: { text: initials } });

    const textDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.text);
    const text = wrapper.find(`Typography[dataCy='${textDataCy}']`);
    expect(text).toHaveLength(1);
    expect(text.prop("children")).toEqual(initials);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
