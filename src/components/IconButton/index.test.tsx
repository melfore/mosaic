import renderer from "react-test-renderer";
import { IIconButton } from "../../types/IconButton";
import { getTestable } from "../../utils/tests";
import IconButton, { DATA_CY_DEFAULT } from ".";
import { Icons, IconSize } from "../../types/Icon";

const defaultProps: IIconButton = {
  icon: Icons.account,
  onClick: jest.fn(),
};

const getIconButtonTestable = (props?: IIconButton, dataCy = DATA_CY_DEFAULT) =>
  getTestable(IconButton, { dataCy, domNode: "button", props: { ...defaultProps, ...props } });

describe("IconButton test suite:", () => {
  it("default", () => {
    const onClickHandler = jest.fn();
    const { element, wrapper } = getIconButtonTestable({ ...defaultProps, onClick: onClickHandler });
    expect(wrapper).toHaveLength(1);
    expect(wrapper.prop("disabled")).toBeFalsy();
    wrapper.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    const icon = wrapper.find(`Icon[dataCy='${DATA_CY_DEFAULT}-icon']`);
    expect(icon.prop("name")).toEqual(defaultProps.icon);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getIconButtonTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getIconButtonTestable({ ...defaultProps, disabled: true });
    expect(wrapper.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element, wrapper } = getIconButtonTestable({ ...defaultProps, size: IconSize.small });
    const icon = wrapper.find(`Icon[dataCy='${DATA_CY_DEFAULT}-icon']`);
    expect(icon.prop("size")).toEqual(IconSize.small);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
