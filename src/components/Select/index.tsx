import React, { SyntheticEvent, useCallback, useMemo } from "react";
import { PopperProps as MUIPopperProps } from "@material-ui/core";
import {
  Autocomplete as MUIAutocomplete,
  AutocompleteRenderGroupParams as MUIAutocompleteRenderGroupParams,
  AutocompleteRenderInputParams as MUIAutocompleteRenderInputParams,
  AutocompleteRenderOptionState as MUIAutocompleteRenderOptionState,
} from "@material-ui/lab";

import { ISelect } from "../../types/Select";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

import SelectGroup, { SELECT_GROUP_SUBPART } from "./components/Group";
import SelectInput, { SELECT_LOADING_SUBPART } from "./components/Input";
import SelectOption, { SELECT_OPTION_CHECKBOX_SUBPART, SELECT_OPTION_LABEL_SUBPART } from "./components/Option";
import SelectPopper from "./components/Popper";

export const DATA_CY_DEFAULT = "select";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "label", type: "string" },
  { name: "placeholder", type: "string" },
];

export const SUBPARTS_MAP = {
  loading: SELECT_LOADING_SUBPART,
  optionCheckbox: SELECT_OPTION_CHECKBOX_SUBPART,
  optionLabel: SELECT_OPTION_LABEL_SUBPART,
  optionGroupLabel: SELECT_GROUP_SUBPART,
  outerWrapper: {
    label: "Outer Wrapper",
  },
};

const Select = <T extends any>({
  autoComplete = true,
  autoSort = false,
  customOptionRendering,
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  getGroupLabel,
  getOptionLabel: externalGetOptionLabel,
  getOptionSelected,
  groupBy,
  label,
  loading = false,
  multiple = false,
  onChange: externalOnChange,
  onClose: externalOnClose,
  onInputChange: externalOnInputChange,
  onScrollEnd,
  options: externalOptions,
  placeholder,
  popperWidth,
  required = false,
  size = "medium",
  style,
  type = "text",
  value = null,
  variant = "outlined",
}: ISelect<T>) => {
  const getOptionLabel = useCallback(
    (option: T): string => (externalGetOptionLabel ? externalGetOptionLabel(option) : `${option}`),
    [externalGetOptionLabel]
  );

  const isOptionSelected = useCallback(
    (option: T, value: T): boolean => {
      if (getOptionSelected) {
        return getOptionSelected(option, value);
      }

      return !!value && option === value;
    },
    [getOptionSelected]
  );

  const onChange = useCallback(
    (event, value: any) => {
      suppressEvent(event);
      externalOnChange(value);
    },
    [externalOnChange]
  );

  const onClose = useCallback(
    (event) => {
      if (!externalOnClose) {
        return;
      }

      suppressEvent(event);
      externalOnClose();
    },
    [externalOnClose]
  );

  const onInputChange = useCallback(
    (event, value: any) => {
      if (!externalOnInputChange) {
        return;
      }

      suppressEvent(event);
      externalOnInputChange!(value);
    },
    [externalOnInputChange]
  );

  const onScroll = useCallback(
    ({ currentTarget: listboxNode }: SyntheticEvent) => {
      if (!listboxNode || !onScrollEnd) {
        return;
      }

      const { clientHeight, scrollHeight, scrollTop } = listboxNode;
      const scrollEnded = clientHeight + scrollTop === scrollHeight;
      if (scrollEnded) {
        onScrollEnd();
      }
    },
    [onScrollEnd]
  );

  const listboxProps = useMemo(
    () => ({
      onScroll,
      style: {
        padding: 0,
        width: "100%",
      },
    }),
    [onScroll]
  );

  const options = useMemo(() => {
    let options = [...externalOptions];
    if (!autoSort && !groupBy) {
      return options;
    }

    if (groupBy) {
      options = options.sort((one: T, another: T) => {
        const oneGroup = groupBy(one);
        const anotherGroup = groupBy(another);
        return oneGroup.localeCompare(anotherGroup);
      });
    }

    if (autoSort) {
      options = options.sort((one: T, another: T) => {
        const oneLabel = getOptionLabel(one);
        const anotherLabel = getOptionLabel(another);
        return oneLabel.localeCompare(anotherLabel);
      });
    }

    return options;
  }, [autoSort, externalOptions, getOptionLabel, groupBy]);

  const outerWrapperDataCy = useMemo(() => getComposedDataCy(dataCy, SUBPARTS_MAP.outerWrapper), [dataCy]);

  const isOptionSelectable = useCallback(
    (value: T | null): boolean => !!value && options.some((option) => isOptionSelected(option, value)),
    [options, isOptionSelected]
  );

  const renderGroup = useCallback(
    (props: MUIAutocompleteRenderGroupParams) => {
      const { key } = props;
      return <SelectGroup key={key} dataCy={dataCy} forwarded={props} getGroupLabel={getGroupLabel} />;
    },
    [dataCy, getGroupLabel]
  );

  const renderInput = useCallback(
    (props: MUIAutocompleteRenderInputParams) => (
      <SelectInput
        dataCy={dataCy}
        forwarded={props}
        label={label}
        loading={loading}
        placeholder={placeholder}
        required={required}
        size={size}
        style={style}
        type={type}
        variant={variant}
      />
    ),
    [dataCy, label, loading, placeholder, required, size, style, type, variant]
  );

  const renderOption = useCallback(
    (option: T, { selected }: MUIAutocompleteRenderOptionState) => {
      if (customOptionRendering) {
        return customOptionRendering(option, selected);
      }

      return <SelectOption dataCy={dataCy} getOptionLabel={getOptionLabel} option={option} selected={selected} />;
    },
    [dataCy, customOptionRendering, getOptionLabel]
  );

  const renderPopper = useCallback(
    (props: MUIPopperProps) => <SelectPopper forwarded={props} popperWidth={popperWidth} />,
    [popperWidth]
  );

  const validateValue = useCallback(
    (value: T | T[] | null): T | T[] | null => {
      if (multiple) {
        const isValidMultipleValue = Array.isArray(value) && value.length > 0 && value.every(isOptionSelectable);
        return isValidMultipleValue ? value : [];
      }

      const isValidValue = !Array.isArray(value) && isOptionSelectable(value);
      return isValidValue ? value : null;
    },
    [isOptionSelectable, multiple]
  );

  const validatedValue = useMemo(() => validateValue(value), [validateValue, value]);

  return (
    <MUIAutocomplete<T, boolean>
      autoComplete={autoComplete}
      data-cy={outerWrapperDataCy}
      disableCloseOnSelect={multiple}
      disabled={disabled}
      getOptionLabel={getOptionLabel}
      getOptionSelected={isOptionSelected}
      groupBy={groupBy}
      ListboxProps={listboxProps}
      loading={loading}
      multiple={multiple}
      onChange={onChange}
      onClose={onClose}
      onInputChange={onInputChange}
      options={options}
      PopperComponent={renderPopper}
      renderGroup={renderGroup}
      renderInput={renderInput}
      renderOption={renderOption}
      value={validatedValue}
    />
  );
};

export const SelectWithProps = Select;

export default localized(Select as any, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
}) as <T extends any>(props: ISelect<T>) => JSX.Element;
