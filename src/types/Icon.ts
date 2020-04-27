import { BaseType } from "./Base";

export enum Icons {
  add = "add",
  arrowUp = "arrowUp",
  close = "close",
  delete = "delete",
  edit = "edit",
  filter = "filter",
  first = "first",
  last = "last",
  next = "next",
  openInNew = "openInNew",
  playlistAddCheck = "playlistAddCheck",
  prev = "prev",
  refresh = "refresh",
  search = "search",
  send = "send",
}

export enum IconSize {
  default = "default",
  large = "large",
  small = "small",
}

interface IconForwardedType {
  className?: string;
  color?: string;
  ref?: any;
}

export interface IconType extends BaseType {
  forwarded?: IconForwardedType;
  name: Icons;
  size?: IconSize;
}
