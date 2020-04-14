import React from "react";
import { mount } from "enzyme";
import { ButtonIconPosition } from "../../types/Button";
import { Icons } from "../../types/Icon";
import Button, { ButtonIntl } from ".";
import IntlProviderMock, { LocaleMock, MessageMock, mockedMessages } from "../../utils/mocks/IntlProviderMock";

const defaultProps = {
  dataCy: "myButton",
  label: "Click Me",
  onClick: jest.fn(),
};

const componentWrapper = (props = {}) => <Button {...defaultProps} {...props} />;

const intlComponentWrapper = (locale?: LocaleMock) => (
  <IntlProviderMock locale={locale}>
    <ButtonIntl labelId={MessageMock.button} onClick={() => {}} />
  </IntlProviderMock>
);

describe("Button test suite:", () => {
  it("default", () => {
    const onClickHandler = jest.fn();
    const component = componentWrapper({
      onClick: onClickHandler,
    });
    const wrapper = mount(component);
    const button = wrapper.find("button");
    expect(button.prop("data-cy")).toEqual(defaultProps.dataCy);
    button.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    const buttonLabel = button.find("span.MuiButton-label");
    expect(buttonLabel.text()).toEqual(defaultProps.label);
  });

  it("with icon", () => {
    const component = componentWrapper({
      icon: { name: Icons.send },
    });
    const wrapper = mount(component);
    const button = wrapper.find("button");
    const icon = button.find("span.MuiButton-startIcon > Icon");
    expect(icon.prop("name")).toEqual(Icons.send);
  });

  it("with right icon", () => {
    const component = componentWrapper({
      icon: {
        name: Icons.send,
        position: ButtonIconPosition.right,
      },
    });
    const wrapper = mount(component);
    const button = wrapper.find("button");
    const icon = button.find("span.MuiButton-endIcon > Icon");
    expect(icon.prop("name")).toEqual(Icons.send);
  });

  it("with intl", () => {
    const wrapper = mount(intlComponentWrapper());
    const button = wrapper.find("button");
    expect(button.prop("data-cy")).toEqual(MessageMock.button);
    const buttonLabel = button.find("span.MuiButton-label");
    expect(buttonLabel.text()).toEqual(mockedMessages[LocaleMock.en][MessageMock.button]);
  });
});
