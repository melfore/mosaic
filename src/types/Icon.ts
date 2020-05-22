import { BaseType } from "./Base";

export enum Icons {
  account = "account",
  add = "add",
  apps = "apps",
  block = "block",
  business = "business",
  chart_timeline = "chart_timeline",
  check = "check",
  checkbox = "checkbox",
  checkbox_empty = "checkbox_empty",
  clock = "clock",
  close = "close",
  delete = "delete",
  down = "down",
  edit = "edit",
  error = "error",
  filter = "filter",
  first = "first",
  last = "last",
  left = "left",
  list = "list",
  list_check = "list_check",
  mail = "mail",
  mail_open = "mail_open",
  menu = "menu",
  open_new = "open_new",
  pause = "pause",
  play = "play",
  print = "print",
  refresh = "refresh",
  right = "right",
  save = "save",
  search = "search",
  send = "send",
  settings = "settings",
  up = "up",
  up_arrow = "up_arrow",
  warn = "warn",
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
