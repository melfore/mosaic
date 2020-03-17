import React from 'react';
import MUISendIcon from '@material-ui/icons/Send';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button, { ButtonIconPosition, ButtonVariants } from '.'

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <Button
    elevated={boolean('elevated', false)}
    icon={{ icon: <MUISendIcon />, position: ButtonIconPosition.left}}
    label={text('label', 'Example')}
    onClick={action('Click on Button')}
    variant={select('variant', ButtonVariants, ButtonVariants.contained)}
  />
);