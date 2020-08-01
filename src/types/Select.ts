import { ReactNode } from "react";
import { ILoadable, ILocalizable } from "./Base";
import { IInput } from "./Input";

interface IBaseSelect<T> extends ILocalizable, ILoadable, IInput {
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

interface ISelectSingle<T> extends IBaseSelect<T> {
  multiple: false;
  onChange: (value: SingleSelectDataType<T>) => void;
  value?: SingleSelectDataType<T>;
}

type MultipleSelectDataType<T> = T[] | null;

interface ISelectMultiple<T> extends IBaseSelect<T> {
  multiple: true;
  onChange: (value: MultipleSelectDataType<T>) => void;
  value?: MultipleSelectDataType<T>;
}

export type ISelect<T> = ISelectSingle<T> | ISelectMultiple<T>;
