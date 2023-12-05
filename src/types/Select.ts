import { ReactNode } from "react";

import { ILoadable, ILocalizable } from "./Base";
import { IInputField } from "./Input";

export type SelectDataAllowed = number | object | string;

export type SelectData<T extends SelectDataAllowed> = T;

export interface SelectPopperProps {
  /**
   * Width of options list popup
   */
  popperWidth?: number;
}

interface SelectBaseProps<T extends SelectDataAllowed> extends SelectPopperProps, ILocalizable, ILoadable, IInputField {
  /**
   * Enables autocomplete feature
   */
  autoComplete?: boolean;
  /**
   * Automatically sorts options in alphabetical order (localeCompare)
   */
  autoSort?: boolean;
  /**
   * Method to allow custom rendering of each option
   */
  customOptionRendering?: (option: SelectData<T>, selected: boolean) => ReactNode;
  /**
   * Method to determine group label from group name
   */
  getGroupLabel?: (groupName: string) => string;
  /**
   * Method to extract option label from option
   */
  getOptionLabel?: (option: SelectData<T>) => string;
  /**
   * Method to determine currently selected option
   */
  getOptionSelected?: (option: SelectData<T>, value: SelectData<T>) => boolean;
  /**
   * Method to group options using one option property
   */
  groupBy?: (option: SelectData<T>) => string;
  /**
   * Callback for close event
   */
  onClose?: () => void;
  /**
   * Callback for change event on input field
   */
  onInputChange?: (input: string) => void;
  /**
   * Callback for scrollEnd event on options list
   */
  onScrollEnd?: () => void;
  /**
   * List of available options
   */
  options: SelectData<T>[];
  /**
   * Number of options
   */
  optionsNumber?: number;
  /**
   * For internal use
   */
  virtualized?: boolean;
}

export type SelectSingleData<T extends SelectDataAllowed> = SelectData<T> | null;

interface SelectSingleProps<T extends SelectDataAllowed> extends SelectBaseProps<T> {
  /**
   * Enables multiple mode
   */
  multiple: false;
  onChange?: (value: SelectSingleData<T>) => void;
  value?: SelectSingleData<T>;
}

export type SelectMultipleData<T extends SelectDataAllowed> = SelectData<T>[] | null;

interface SelectMultipleProps<T extends SelectDataAllowed> extends SelectBaseProps<T> {
  /**
   * Enables multiple mode
   */
  multiple: true;
  onChange?: (value: SelectMultipleData<T>) => void;
  value?: SelectMultipleData<T>;
}

export type SelectProps<T extends SelectDataAllowed, Multiple = boolean> = Multiple extends true
  ? SelectMultipleProps<T>
  : SelectSingleProps<T>;
