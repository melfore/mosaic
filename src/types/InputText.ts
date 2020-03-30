import { BaseType } from './Base';

export interface MultilineInputType {
  rows: number,
  rowsMax?: number,
}

export enum InputSize {
  default = 'medium',
  small = 'small',
}

export enum InputVariant {
  default = 'outlined',
  filled = 'filled',
}

export interface InputTextProps extends BaseType {
  disabled?: boolean,
  initialValue?: string,
  label: string,
  // TODO#lb: implement labelId
  // labelId: string,
  onChange?: Function,
  multiline?: MultilineInputType,
  required?: boolean,
  size?: InputSize,
  variant?: InputVariant,
}