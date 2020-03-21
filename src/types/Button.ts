import { MouseEvent, ReactElement } from 'react';
import { BaseType } from './Base';

export enum ButtonIconPosition {
  left = 'left',
  right ='right'
}

export interface ButtonIconType {
  icon: ReactElement,
  position: ButtonIconPosition,
}

export enum ButtonVariants {
  contained = 'contained',
  outlined = 'outlined'
}

export interface ButtonType extends BaseType {
  elevated?: boolean,
  icon?: ButtonIconType,
  label: string,
  onClick: (event: MouseEvent) => void,
  variant?: ButtonVariants
}