import { BaseType } from './Base';

export enum Icons {
  add = 'add',
  delete = 'delete',
  edit = 'edit',
  playlistAddCheck = 'playlistAddCheck',
  send = 'send',
};

export enum IconSize {
  default = 'default',
  large = 'large',
  small = 'small',
}

export interface IconType extends BaseType {
  name: Icons,
  size?: IconSize,
};