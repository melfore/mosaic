/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, ReactElement } from "react";

import { IAdornment } from "./Adornment";
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
  wifi_off = "wifi_off",
  wifi_on = "wifi_on",
}

export type IIconsCatalog = {
  [key in Icons]: ReactElement;
};

/**
 * @deprecated Use "small" | "medium" | "large"
 */
export enum IconSize {
  default = "medium",
  large = "large",
  small = "small",
}

type IIconSize = "small" | "medium" | "large";

interface IForwardedIcon {
  /**
   * Classname to allow styling
   */
  className?: string;
  /**
   * Icon color
   */
  color?: string;
  /**
   * Reference
   */
  ref?: any;
}

export interface IIcon extends IAdornment, ILoadable {
  /**
   * Props forwarded to svg icon
   */
  forwarded?: IForwardedIcon;
  /**
   * Icon name
   */
  name?: Icons;
  /**
   * Adds rotating animation
   */
  rotate?: boolean;
  /**
   * Icon size
   */
  size?: IIconSize | IconSize;
}

export type IIconDimensions = {
  [key in IIconSize]: number;
};

export type IIconElement = Icons | ReactElement;

export interface IIconUtilizer {
  /**
   * Icon expressed as Mosaic.Icons or ReactElement
   */
  icon: IIconElement;
}

export type IPartialIconUtilizer = Partial<IIconUtilizer>;

export interface IRenderedIcon extends IForwardedIcon {
  /**
   * DataCy attribute
   */
  "data-cy": string;
  /**
   * Icon size in px
   */
  fontSize: IIconSize | IconSize;
  /**
   * Custom styling applied to root element
   */
  style?: CSSProperties;
}
