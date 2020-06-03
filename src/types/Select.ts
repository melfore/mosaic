import { LoadableType } from "./Base";
import { ReactNode } from "react";

export interface SelectType<T> extends LoadableType {
  autoComplete?: boolean;
  customOptionRendering?: (option: T, selected: boolean) => ReactNode;
  disabled?: boolean;
  getGroupLabel?: (groupName: string) => string;
  getOptionLabel?: (option: T) => string;
  getOptionSelected?: (option: T, value: T) => boolean;
  groupBy?: (option: T) => string;
  initialValue?: T | T[] | null;
  label?: string;
  multiple?: boolean;
  onChange: (value: T | T[] | null) => void;
  options: T[];
}
