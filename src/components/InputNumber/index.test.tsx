import React from "react";
import { mount } from "enzyme";
import { InputNumberType } from "../../types/InputNumber";
import FormMock from "../../utils/mocks/FormMock";
import InputNumber, { InputNumberIntl } from ".";
import IntlProviderMock, { LocaleMock, MessageMock, mockedMessages } from "../../utils/mocks/IntlProviderMock";

const defaultProps: InputNumberType = {
  dataCy: "input-number",
  label: "Label",
  onChange: () => {},
  value: 0,
};

const componentWrapper = ({ onChange, value, ...props }: InputNumberType) => (
  <FormMock onInputChange={onChange!} inputValue={value!}>
    <InputNumber {...defaultProps} {...props} />
  </FormMock>
);

const intlComponentWrapper = (locale?: LocaleMock) => (
  <IntlProviderMock locale={locale}>
    <InputNumberIntl labelId={MessageMock.inputNumber} onChange={() => {}} />
  </IntlProviderMock>
);

describe("InputNumber test suite:", () => {
  it("default", () => {
    const component = componentWrapper(defaultProps);
    const wrapper = mount(component);
    const input = wrapper.find("input");
    expect(input.prop("data-cy")).toEqual(defaultProps.dataCy);
    input.simulate("change");
  });

  it("onChange handler", () => {
    const onChangeHandler = jest.fn();
    const component = componentWrapper({
      ...defaultProps,
      onChange: onChangeHandler,
    });
    const wrapper = mount(component);
    const input = wrapper.find("input");
    input.simulate("change");
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });

  it("with bounds", () => {
    const component = componentWrapper({
      ...defaultProps,
      minValue: 0,
      maxValue: 9,
      value: 5,
    });
    const wrapper = mount(component);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "10" } });
    const upperBoundInput = wrapper.find("input");
    expect(upperBoundInput.prop("value")).toBe(9);
    input.simulate("change", { target: { value: "-1" } });
    const lowerBoundInput = wrapper.find("input");
    expect(lowerBoundInput.prop("value")).toBe(0);
  });

  it("with float", () => {
    const component = componentWrapper({
      ...defaultProps,
      integer: false,
      minValue: 0,
      maxValue: 9,
      value: 5.5,
    });
    const wrapper = mount(component);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "6.5" } });
    const updatedInput = wrapper.find("input");
    expect(updatedInput.prop("value")).toBe(6.5);
  });

  it("with invalid value", () => {
    const component = componentWrapper({
      ...defaultProps,
      value: null,
    });
    const wrapper = mount(component);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "ajeje" } });
    const updatedInput = wrapper.find("input");
    expect(updatedInput.prop("value")).toBe("");
  });

  it("with intl", () => {
    const wrapper = mount(intlComponentWrapper());
    const input = wrapper.find("input");
    expect(input.prop("data-cy")).toEqual(MessageMock.inputNumber);
    // console.log(input.debug());
    // TODO: test label == mockedMessages[LocaleMock.en][MessageMock.inputNumber]
  });
});
