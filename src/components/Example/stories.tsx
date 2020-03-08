import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import Example, { Colors } from '.'

export default {
  title: 'Default',
  component: Example,
};

export const Default = () => (
  <Example
    color={select('color', Colors, Colors.black)}
    onClick={action('You clicked on Example')}
    text={text('text', 'Just a test')}
  />
);