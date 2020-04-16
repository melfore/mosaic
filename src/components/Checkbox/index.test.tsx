import React from "react";
import { mount } from "enzyme";
import Checkbox, { CheckboxIntl } from ".";
import FormMock from "../../utils/mocks/FormMock";
import { CheckboxType } from "../../types/Checkbox";
import IntlProviderMock, { LocaleMock, MessageMock, mockedMessages } from "../../utils/mocks/IntlProviderMock";

const defaultProps: CheckboxType = {
  dataCy: "myCheckbox",
  onChange: () => {},
};

const componentWrapper = ({ onChange, value, ...props }: CheckboxType) => (
  <FormMock onInputChange={onChange!} inputValue={value!}>
    <Checkbox {...defaultProps} {...props} />
  </FormMock>
);

const intlComponentWrapper = (locale?: LocaleMock) => (
  <IntlProviderMock locale={locale}>
    <CheckboxIntl labelId={MessageMock.checkbox} onChange={() => {}} />
  </IntlProviderMock>
);

describe("Checkbox test suite:", () => {
  it("default", () => {
    const onChangeHandler = jest.fn();
    const component = componentWrapper({
      ...defaultProps,
      onChange: onChangeHandler,
    });
    const wrapper = mount(component); // render
    const wrapperSpan = wrapper.find("span[data-cy]");
    expect(wrapperSpan.prop("data-cy")).toEqual(defaultProps.dataCy);
    const inputCheckbox = wrapperSpan.find('input[type="checkbox"]');
    inputCheckbox.simulate("change");
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
    inputCheckbox.simulate("change", { target: { checked: true } });
    const inputCheckbox2 = wrapper.find('input[type="checkbox"]');
    expect(inputCheckbox2.prop("checked")).toBe(true);
  });

  it("create a checked Checkbox", () => {
    const onChangeHandler = jest.fn();
    const component = componentWrapper({
      ...defaultProps,
      onChange: onChangeHandler,
      value: true,
    });
    const wrapper = mount(component); // render
    const wrapperSpan = wrapper.find("span[data-cy]");
    expect(wrapperSpan.prop("data-cy")).toEqual(defaultProps.dataCy);
    const inputCheckbox = wrapperSpan.find('input[type="checkbox"]');
    inputCheckbox.simulate("change");
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
    inputCheckbox.simulate("change", { target: { checked: false } });
    const inputCheckbox2 = wrapper.find('input[type="checkbox"]');
    expect(inputCheckbox2.prop("checked")).toBe(false);
  });

  it("with intl", () => {
    const wrapper = mount(intlComponentWrapper());
    const wrapperSpan = wrapper.find("span[data-cy]");
    expect(wrapperSpan.prop("data-cy")).toEqual(MessageMock.checkbox);
  });
});
