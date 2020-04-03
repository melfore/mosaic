import React from 'react';
import { mount } from 'enzyme';
import InputText from '.';

const defaultProps = {
  dataCy: 'input-text',
  label: 'Label',
};

const componentWrapper = (props = {}) => (
  <InputText
    {...defaultProps}
    {...props}
  />
);

describe('InputText test suite:', () => {
  it('default', () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    expect('something').toEqual('something');
  });
});
