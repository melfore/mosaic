import { CSSProperties } from "react";

import { ILoadable } from "./Base";

export enum Icons {
  account = "account",
  add = "add",
  apps = "apps",
  block = "block",
  brightness = "brightness",
  business = "business",
  chart_timeline = "chart_timeline",
  check = "check",
  checkbox = "checkbox",
  checkbox_empty = "checkbox_empty",
  clock = "clock",
  close = "close",
  connection_slow = "connection_slow",
  crop = "crop",
  delete = "delete",
  details = "details",
  down = "down",
  edit = "edit",
  error = "error",
  filter = "filter",
  first = "first",
  group = "group",
  home = "home",
  language = "language",
  last = "last",
  left = "left",
  list = "list",
  list_check = "list_check",
  mail = "mail",
  mail_open = "mail_open",
  menu = "menu",
  notifications = "notifications",
  open_new = "open_new",
  pause = "pause",
  play = "play",
  power = "power",
  print = "print",
  refresh = "refresh",
  right = "right",
  save = "save",
  search = "search",
  send = "send",
  settings = "settings",
  up = "up",
  up_arrow = "up_arrow",
  visibility = "visibility",
  visibility_off = "visibility_off",
  warn = "warn",
  wifi_on = "wifi",
  wifi_off = "wifi_offline",
}

export enum IconSize {
  default = "default",
  large = "large",
  small = "small",
}

interface IForwardedIcon {
  className?: string;
  color?: string;
  ref?: any;
}

export interface IIcon extends ILoadable {
  forwarded?: IForwardedIcon;
  name?: Icons;
  rotate?: boolean;
  size?: IconSize;
}

export type IIconDimensions = {
  [key in IconSize]: number;
};

export interface IIconUtilizer {
  icon: Icons;
}

export type IPartialIconUtilizer = Partial<IIconUtilizer>;

export interface IRenderedIcon extends IForwardedIcon {
  "data-cy": string;
  fontSize: IconSize;
  style?: CSSProperties;
}
