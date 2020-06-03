import { ReactNode } from "react";
import { LoadableType } from "./Base";
import { InputType } from "./Input";

interface BaseSelectType<T> extends LoadableType, InputType {
  autoComplete?: boolean;
  customOptionRendering?: (option: T, selected: boolean) => ReactNode;
  getGroupLabel?: (groupName: string) => string;
  getOptionLabel?: (option: T) => string;
  getOptionSelected?: (option: T, value: T) => boolean;
  groupBy?: (option: T) => string;
  options: T[];
}

interface SingleSelectType<T> extends BaseSelectType<T> {
  multiple: false;
  onChange: (value: T | null) => void;
  value?: T | null;
}

interface MultipleSelectType<T> extends BaseSelectType<T> {
  multiple: true;
  onChange: (value: T[] | null) => void;
  value?: T[] | null;
}

export type SelectType<T> = SingleSelectType<T> | MultipleSelectType<T>;
