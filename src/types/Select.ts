import { ReactNode } from "react";
import { ILoadable } from "./Base";
import { IInput } from "./Input";

interface BaseSelectType<T> extends ILoadable, IInput {
  autoComplete?: boolean;
  customOptionRendering?: (option: T, selected: boolean) => ReactNode;
  getGroupLabel?: (groupName: string) => string;
  getOptionLabel?: (option: T) => string;
  getOptionSelected?: (option: T, value: T) => boolean;
  groupBy?: (option: T) => string;
  options: T[];
  popperWidth?: number;
}

type SingleSelectDataType<T> = T | null;

interface SingleSelectType<T> extends BaseSelectType<T> {
  multiple: false;
  onChange: (value: SingleSelectDataType<T>) => void;
  value?: SingleSelectDataType<T>;
}

type MultipleSelectDataType<T> = T[] | null;

interface MultipleSelectType<T> extends BaseSelectType<T> {
  multiple: true;
  onChange: (value: MultipleSelectDataType<T>) => void;
  value?: MultipleSelectDataType<T>;
}

export type SelectType<T> = SingleSelectType<T> | MultipleSelectType<T>;
