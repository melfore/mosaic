import React from 'react';
import { mount } from 'enzyme';
import { ButtonType } from '../../types/Button';
import Button from '.';

const defaultProps = {
  dataCy: 'myButton',
  label: 'Click Me',
  onClick: jest.fn(),
};

const componentWrapper = (props = {}) => (
  <Button
    {...defaultProps}
    {...props}
  />
)

describe('Button test suite:', () => {
  it('default', () => {
    const onClickHandler = jest.fn();
    const component = componentWrapper({
      onClick: onClickHandler,
    });
    const wrapper = mount(component);
    const button = wrapper.find('button');
    expect(button.prop('data-cy')).toEqual(defaultProps.dataCy);
    button.simulate('click');
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    const buttonLabel = button.find('span.MuiButton-label');
    expect(buttonLabel.text()).toEqual(defaultProps.label);
  })

  it('failing test', () => {
    const onClickHandler = jest.fn();
    const component = componentWrapper({
      onClick: onClickHandler,
    });
    const wrapper = mount(component);
    const button = wrapper.find('button');
    const buttonLabel = button.find('span.MuiButton-label');
    expect(buttonLabel.text()).toEqual('Failing test');
  })
})