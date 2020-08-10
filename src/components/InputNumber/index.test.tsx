import renderer from "react-test-renderer";

import { InputSize, InputVariant } from "../../types/Input";
import { IInputNumber } from "../../types/InputNumber";
import { MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getLocalizedTestable } from "../../utils/tests";

import InputNumber, { DATA_CY_DEFAULT } from ".";

const defaultProps: IInputNumber = {};

const getInputNumberTestable = (props?: IInputNumber, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(InputNumber, { dataCy, domNode: "input", props: { ...defaultProps, ...props } });

describe("InputNumber test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getInputNumberTestable();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.hasClass("MuiOutlinedInput-input"));
    expect(wrapper.prop("disabled")).toBeFalsy();
    expect(wrapper.prop("required")).toBeFalsy();
    expect(wrapper.prop("type")).toEqual("number");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getInputNumberTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  // TODO: improve this to check label
  it("localized", () => {
    const label = MessageMock.title;
    const props = { ...defaultProps, label, localized: true };
    const { element } = getInputNumberTestable({ ...props }, label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getInputNumberTestable({ disabled: true });
    expect(wrapper.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("float", () => {
    const onChange = jest.fn();
    const value = 10.1;
    const { element, wrapper } = getInputNumberTestable({ integer: false, onChange, value });
    expect(wrapper.prop("value")).toEqual(value);
    wrapper.simulate("change", { target: { value: 45.598 } });
    expect(onChange).toHaveBeenCalledWith(45.598);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("min/max", () => {
    const onChange = jest.fn();
    const maxValue = 9;
    const minValue = 5;
    const { element, wrapper } = getInputNumberTestable({ minValue, maxValue, onChange });
    wrapper.simulate("change", { target: { value: maxValue + 1 } });
    expect(onChange).toHaveBeenCalledWith(maxValue);
    wrapper.simulate("change", { target: { value: minValue - 1 } });
    expect(onChange).toHaveBeenCalledWith(minValue);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("numeric values only", () => {
    const onChange = jest.fn();
    const { element, wrapper } = getInputNumberTestable({ onChange });
    wrapper.simulate("change", { target: { value: "text value" } });
    expect(onChange).toHaveBeenCalledWith(null);
    wrapper.simulate("change", { target: { value: null } });
    expect(onChange).toHaveBeenCalledWith(null);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onChange", () => {
    const onChange = jest.fn();
    const { element, wrapper } = getInputNumberTestable({ onChange });
    wrapper.simulate("change", { target: { value: 1 } });
    expect(onChange).toHaveBeenCalledWith(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("placeholder", () => {
    const placeholder = "Placeholder";
    const { element, wrapper } = getInputNumberTestable({ placeholder });
    expect(wrapper.prop("placeholder")).toEqual(placeholder);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("required", () => {
    const { element, wrapper } = getInputNumberTestable({ required: true });
    expect(wrapper.prop("required")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("shrink", () => {
    const { element } = getInputNumberTestable({ shrink: false });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element, wrapper } = getInputNumberTestable({ size: InputSize.small });
    expect(wrapper.hasClass("MuiInputBase-inputMarginDense"));
    expect(wrapper.hasClass("MuiOutlinedInput-inputMarginDense"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("value", () => {
    const value = 10;
    const { element, wrapper } = getInputNumberTestable({ value });
    expect(wrapper.prop("value")).toEqual(value);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("variant", () => {
    const { element, wrapper } = getInputNumberTestable({ variant: InputVariant.filled });
    expect(wrapper.hasClass("MuiFilledInput-input"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
