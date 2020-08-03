import renderer from "react-test-renderer";
import { IButton, ButtonVariants, ButtonIconPosition } from "../../types/Button";
import { MessageMock, mockedMessages, LocaleMock } from "../../utils/mocks/IntlProviderMock";
import { getLocalizedTestable } from "../../utils/tests";
import Button, { DATA_CY_DEFAULT } from ".";
import { Icons } from "../../types/Icon";

const defaultProps: IButton = {
  label: "Button",
  onClick: jest.fn(),
};

const getButtonTestable = (props?: IButton, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(Button, { dataCy, domNode: "button", props: { ...defaultProps, ...props } });

describe("Button test suite:", () => {
  it("default", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getButtonTestable({ ...defaultProps, onClick });
    expect(wrapper).toHaveLength(1);
    expect(wrapper.hasClass("MuiButton-contained"));
    expect(wrapper.prop("disabled")).toBeFalsy();
    expect(wrapper.prop("elevated")).toBeFalsy();
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
    const label = wrapper.find("span.MuiButton-label");
    expect(label.text()).toEqual(defaultProps.label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getButtonTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const label = MessageMock.button;
    const { element, wrapper } = getButtonTestable({ ...defaultProps, label, localized: true }, MessageMock.button);
    const labelElement = wrapper.find("span.MuiButton-label");
    expect(labelElement.text()).toEqual(mockedMessages[LocaleMock.en][label]);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getButtonTestable({ ...defaultProps, disabled: true });
    expect(wrapper.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("elevated", () => {
    const { element } = getButtonTestable({ ...defaultProps, elevated: true });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getButtonTestable({ ...defaultProps, icon: { name: Icons.account } });
    const icon = wrapper.find(`[dataCy='${DATA_CY_DEFAULT}-icon']`);
    expect(icon.prop("name")).toEqual(Icons.account);
    expect(icon.parent().hasClass("MuiButton-startIcon"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon right", () => {
    const { element, wrapper } = getButtonTestable({
      ...defaultProps,
      icon: { name: Icons.account, position: ButtonIconPosition.right },
    });
    const icon = wrapper.find(`[dataCy='${DATA_CY_DEFAULT}-icon']`);
    expect(icon.prop("name")).toEqual(Icons.account);
    expect(icon.parent().hasClass("MuiButton-endIcon"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("outlined", () => {
    const { element, wrapper } = getButtonTestable({ ...defaultProps, variant: ButtonVariants.outlined });
    expect(wrapper.hasClass("MuiButton-outlined"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
