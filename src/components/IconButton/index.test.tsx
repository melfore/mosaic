import renderer from "react-test-renderer";

import { Icons, IconSize } from "../../types/Icon";
import { IIconButton } from "../../types/IconButton";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import IconButton, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTION: ITestOptions<IIconButton> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "button",
  props: { icon: Icons.account, onClick: jest.fn() },
};

const getIconButtonTestable = (options?: IPartialTestOptions<IIconButton>) =>
  getTestableComponent(IconButton, DEFAULT_TEST_OPTION, options);

describe("IconButton test suite:", () => {
  it("default", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getIconButtonTestable({ props: { onClick } });
    expect(wrapper).toHaveLength(1);

    expect(wrapper.prop("disabled")).toBeFalsy();
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon.prop("name")).toEqual(DEFAULT_TEST_OPTION.props.icon);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getIconButtonTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getIconButtonTestable({ props: { disabled: true } });
    expect(wrapper.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("rotate", () => {
    const { element, wrapper } = getIconButtonTestable({ props: { rotate: true } });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`svg[data-cy='${iconDataCy}']`);
    expect(icon.hasClass("makeStyles-rotate-2")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element, wrapper } = getIconButtonTestable({ props: { size: IconSize.small } });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon.prop("size")).toEqual(IconSize.small);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
