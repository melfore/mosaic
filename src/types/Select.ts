import { ReactNode } from "react";

import { ILoadable, ILocalizable } from "./Base";
import { IInputField } from "./Input";

export interface SelectPopperProps {
  /**
   * Width of options list popup
   */
  popperWidth?: number;
}

interface SelectBaseProps<T> extends SelectPopperProps, ILocalizable, ILoadable, IInputField {
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
  customOptionRendering?: (option: T, selected: boolean) => ReactNode;
  /**
   * Method to determine group label from group name
   */
  getGroupLabel?: (groupName: string) => string;
  /**
   * Method to extract option label from option
   */
  getOptionLabel?: (option: T) => string;
  /**
   * Method to determine currently selected option
   */
  getOptionSelected?: (option: T, value: T) => boolean;
  /**
   * Method to group options using one option property
   */
  groupBy?: (option: T) => string;
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
  options: T[];
  /**
   * Number of options
   */
  optionsNumber?: number;
}

type SingleSelectDataType<T> = T | null;

interface SelectSingleProps<T> extends SelectBaseProps<T> {
  /**
   * Enables multiple mode
   */
  multiple: false;
  onChange: (value: SingleSelectDataType<T>) => void;
  value?: SingleSelectDataType<T>;
}

type MultipleSelectDataType<T> = T[] | null;

interface SelectMultipleProps<T> extends SelectBaseProps<T> {
  /**
   * Enables multiple mode
   */
  multiple: true;
  onChange: (value: MultipleSelectDataType<T>) => void;
  value?: MultipleSelectDataType<T>;
}

export type SelectProps<T> = SelectSingleProps<T> | SelectMultipleProps<T>;
