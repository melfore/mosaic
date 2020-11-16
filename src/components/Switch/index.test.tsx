import renderer from "react-test-renderer";

import { ISwitch, SwitchSize } from "../../types/Switch";
import { LocaleMock, MessageMock, mockedMessages } from "../../utils/mocks/IntlProviderMock";
import { getLocalizedTestable } from "../../utils/tests";

import Switch, { DATA_CY_DEFAULT } from ".";

const defaultProps: ISwitch = {};

const getSwitchTestable = (props?: ISwitch, dataCy = DATA_CY_DEFAULT, domNode = "label") =>
  getLocalizedTestable(Switch, { dataCy, domNode, props: { ...defaultProps, ...props } });

describe("Switch test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getSwitchTestable();
    expect(wrapper).toHaveLength(1);
    const input = wrapper.find("input");
    expect(input.prop("checked")).toBeFalsy();
    expect(input.prop("disabled")).toBeFalsy();
    expect(input.prop("required")).toBeFalsy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getSwitchTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const label = MessageMock.switch;
    const { element, wrapper } = getSwitchTestable({ ...defaultProps, label, localized: true }, MessageMock.switch);
    const labelElement = wrapper.find("span.MuiFormControlLabel-label");
    expect(labelElement.text()).toEqual(mockedMessages[LocaleMock.en][label]);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("checked", () => {
    const { element, wrapper } = getSwitchTestable({ value: true });
    const input = wrapper.find("input");
    expect(input.prop("checked")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getSwitchTestable({ disabled: true });
    const input = wrapper.find("input");
    expect(input.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onChange", () => {
    const onChange = jest.fn();
    const { element, wrapper } = getSwitchTestable({ onChange });
    const inputBefore = wrapper.find("input");
    inputBefore.simulate("change", { target: { checked: true } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onChange - not handled", () => {
    const { element, wrapper } = getSwitchTestable();
    const inputBefore = wrapper.find("input");
    inputBefore.simulate("change", { target: { checked: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("required", () => {
    const { element, wrapper } = getSwitchTestable({ required: true });
    const input = wrapper.find("input");
    expect(input.prop("required")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element } = getSwitchTestable({ size: SwitchSize.small });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
