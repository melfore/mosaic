import renderer from "react-test-renderer";

import { ButtonIconPosition, ButtonVariants, IButton } from "../../types/Button";
import { Icons } from "../../types/Icon";
import { getComposedDataCy } from "../../utils";
import { LocaleMock, MessageMock, mockedMessages } from "../../utils/mocks/IntlProviderMock";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Button, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IButton> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "button",
  localized: true,
  props: {
    label: "Button",
    onClick: jest.fn(),
  },
};

const getButtonTestable = (options?: IPartialTestOptions<IButton>) =>
  getTestableComponent(Button, DEFAULT_TEST_OPTIONS, options);

describe("Button test suite:", () => {
  it("default", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getButtonTestable({ props: { onClick } });
    expect(wrapper).toHaveLength(1);

    expect(wrapper.hasClass("MuiButton-contained"));
    expect(wrapper.prop("disabled")).toBeFalsy();
    expect(wrapper.prop("elevated")).toBeFalsy();
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);

    const label = wrapper.find("span.MuiButton-label");
    expect(label.text()).toEqual(DEFAULT_TEST_OPTIONS.props.label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getButtonTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const label = MessageMock.button;
    const { element, wrapper } = getButtonTestable({ dataCy: label, props: { label, localized: true } });

    const labelElement = wrapper.find("span.MuiButton-label");
    expect(labelElement.text()).toEqual(mockedMessages[LocaleMock.en][label]);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getButtonTestable({ props: { disabled: true } });
    expect(wrapper.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("elevated", () => {
    const { element } = getButtonTestable({ props: { elevated: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getButtonTestable({ props: { icon: { name: Icons.account } } });

    const icon = wrapper.find(`Icon[dataCy='${getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon)}']`);
    expect(icon.prop("name")).toEqual(Icons.account);
    expect(icon.parent().hasClass("MuiButton-startIcon"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon - right", () => {
    const { element, wrapper } = getButtonTestable({
      props: { icon: { name: Icons.account, position: ButtonIconPosition.right } },
    });

    const icon = wrapper.find(`Icon[dataCy='${getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon)}']`);
    expect(icon.prop("name")).toEqual(Icons.account);
    expect(icon.parent().hasClass("MuiButton-endIcon"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("outlined", () => {
    const { element, wrapper } = getButtonTestable({ props: { variant: ButtonVariants.outlined } });
    expect(wrapper.hasClass("MuiButton-outlined"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
