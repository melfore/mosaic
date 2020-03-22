import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, object, select, text } from '@storybook/addon-knobs';
import { ButtonIconPosition, ButtonVariants } from '../../types/Button'
import { Icons } from '../../types/Icon';
import Button from '.'

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <Button
    dataCy={text('data-cy', 'button-identifier')}
    elevated={boolean('elevated', false)}
    icon={object('icon', { name: Icons.send, position: ButtonIconPosition.left})}
    label={text('label', 'Example')}
    onClick={action('Click on Button')}
    variant={select('variant', ButtonVariants, ButtonVariants.contained)}
  />
);