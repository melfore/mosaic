import React from "react";
import { mount } from 'enzyme';
import Example from '.';

describe('Example', () => {
  it('Renders without crashing', () => {
    const example = mount(<Example onClick={jest.fn()} text='Just a Jest' />);
    expect(example.find('p').text()).toContain('Just a Jest');
  });
});