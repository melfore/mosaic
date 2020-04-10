import React from "react";
import { mount } from "enzyme";
import Switch from ".";
import FormMock from "../../utils/mocks/FormMock";
import { SwitchType } from "../../types/Switch";

const defaultProps: SwitchType = {
  dataCy: "mySwitch",
  onChange: () => {},
};

const componentWrapper = ({ onChange, value, ...props }: SwitchType) => (
  <FormMock onInputChange={onChange!} inputValue={value!}>
    <Switch {...defaultProps} {...props} />
  </FormMock>
);

describe("Switch test suite:", () => {
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

  it("create a checked Switch", () => {
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

  // see issue #57
  it("Switch without onChange", () => {
    const component = <Switch dataCy="mySwitch" onChange={undefined} />;
    const wrapper = mount(component);
    const wrapperSpan = wrapper.find("span[data-cy]");
    expect(wrapperSpan.prop("data-cy")).toEqual(defaultProps.dataCy);
  });
});
