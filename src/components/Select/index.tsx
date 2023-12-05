/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import React, { HTMLAttributes, SyntheticEvent, useCallback, useMemo } from "react";
import {
  Autocomplete as MUIAutocomplete,
  AutocompleteRenderGroupParams as MUIAutocompleteRenderGroupParams,
  AutocompleteRenderInputParams as MUIAutocompleteRenderInputParams,
  AutocompleteRenderOptionState as MUIAutocompleteRenderOptionState,
  PopperProps as MUIPopperProps,
} from "@mui/material";

import { SelectData, SelectDataAllowed, SelectMultipleData, SelectProps, SelectSingleData } from "../../types/Select";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import { logInfo, logWarn } from "../../utils/logger";

import SelectGroup, { SELECT_GROUP_SUBPART } from "./components/Group";
import SelectInput, { SELECT_LOADING_SUBPART } from "./components/Input";
import SelectListBox from "./components/ListBox";
import SelectOption, {
  SELECT_OPTION_CHECKBOX_SUBPART,
  SELECT_OPTION_LABEL_SUBPART,
  SELECT_OPTION_SUBPART,
} from "./components/Option";
import SelectPopper from "./components/Popper";

export const DATA_CY_DEFAULT = "select";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "label", type: "string" },
  { name: "placeholder", type: "string" },
];

export const SUBPARTS_MAP = {
  loading: SELECT_LOADING_SUBPART,
  option: SELECT_OPTION_SUBPART,
  optionCheckbox: SELECT_OPTION_CHECKBOX_SUBPART,
  optionLabel: SELECT_OPTION_LABEL_SUBPART,
  optionGroupLabel: SELECT_GROUP_SUBPART,
  outerWrapper: {
    label: "Outer Wrapper",
  },
};

const Select = <T extends SelectDataAllowed>({
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
  multiple,
  onChange: externalOnChange,
  onClose: externalOnClose,
  onInputChange: externalOnInputChange,
  onScrollEnd,
  options: externalOptions,
  optionsNumber,
  placeholder,
  popperWidth,
  required = false,
  size = "medium",
  style,
  type = "text",
  value = null,
  variant = "outlined",
  virtualized = false,
}: SelectProps<T>) => {
  const outerWrapperDataCy = useMemo(() => getComposedDataCy(dataCy, SUBPARTS_MAP.outerWrapper), [dataCy]);

  const getOptionLabel = useCallback(
    (option: SelectData<T>): string => (externalGetOptionLabel ? externalGetOptionLabel(option) : `${option}`),
    [externalGetOptionLabel]
  );

  const isOptionSelected = useCallback(
    (option: SelectData<T>, value: SelectData<T>): boolean => {
      if (getOptionSelected) {
        return getOptionSelected(option, value);
      }

      return !!value && option === value;
    },
    [getOptionSelected]
  );

  const onClose = useCallback(
    (event: SyntheticEvent) => {
      if (!externalOnClose) {
        return;
      }

      suppressEvent(event);
      externalOnClose();
    },
    [externalOnClose]
  );

  const onInputChange = useCallback(
    (event: SyntheticEvent, value: string) => {
      if (!externalOnInputChange) {
        return;
      }

      suppressEvent(event);
      externalOnInputChange(value);
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
      logInfo("Select.onScroll  ", `ch ${clientHeight} / st ${scrollTop} / sh ${scrollHeight} / ${scrollEnded}`);
      if (scrollEnded) {
        onScrollEnd();
      }
    },
    [onScrollEnd]
  );

  const listboxProps = useMemo(() => {
    if (virtualized) {
      return undefined;
    }

    return {
      onScroll,
      style: {
        padding: 0,
        width: "100%",
      },
    };
  }, [onScroll, virtualized]);

  const options = useMemo(() => {
    let options = [...externalOptions];
    if (!autoSort && !groupBy) {
      return options;
    }

    if (groupBy) {
      options = options.sort((one: SelectData<T>, another: SelectData<T>) => {
        const oneGroup = groupBy(one);
        const anotherGroup = groupBy(another);
        return oneGroup.localeCompare(anotherGroup);
      });
    }

    if (autoSort) {
      options = options.sort((one: SelectData<T>, another: SelectData<T>) => {
        const oneLabel = getOptionLabel(one);
        const anotherLabel = getOptionLabel(another);
        return oneLabel.localeCompare(anotherLabel);
      });
    }

    return options;
  }, [autoSort, externalOptions, getOptionLabel, groupBy]);

  const listboxComponent = useMemo(() => {
    if (!virtualized) {
      return undefined;
    }

    return SelectListBox({ multiple, options, optionsNumber });
  }, [multiple, options, optionsNumber, virtualized]);

  const isOptionSelectable = useCallback(
    (value: SelectData<T> | null): boolean => !!value && options.some((option) => isOptionSelected(option, value)),
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

  const renderCustomOption = useCallback(
    (option: SelectData<T>, selected: boolean) =>
      customOptionRendering ? customOptionRendering(option, selected) : undefined,
    [customOptionRendering]
  );

  const renderOption = useCallback(
    (props: HTMLAttributes<HTMLLIElement>, option: SelectData<T>, { selected }: MUIAutocompleteRenderOptionState) => {
      const { id: key } = props;
      return (
        <SelectOption
          key={key}
          customRenderer={renderCustomOption}
          dataCy={dataCy}
          forwarded={props}
          getOptionLabel={getOptionLabel}
          multiple={multiple}
          option={option}
          selected={selected}
        />
      );
    },
    [dataCy, getOptionLabel, multiple, renderCustomOption]
  );

  const renderPopper = useCallback(
    (props: MUIPopperProps) => <SelectPopper forwarded={props} popperWidth={popperWidth} />,
    [popperWidth]
  );

  if (multiple === false) {
    const onChangeSingle = (event: SyntheticEvent, value: SelectSingleData<T>) => {
      suppressEvent(event);
      externalOnChange && externalOnChange(value);
    };

    let singleValue: SelectSingleData<T> = null;
    if (!Array.isArray(value) && isOptionSelectable(value)) {
      singleValue = value;
    } else {
      logWarn("Select", `Provided value is not valid '${value}'`);
    }

    return (
      <MUIAutocomplete<SelectData<T>, false>
        autoComplete={autoComplete}
        data-cy={outerWrapperDataCy}
        disableCloseOnSelect={multiple}
        disabled={disabled}
        getOptionLabel={getOptionLabel}
        groupBy={groupBy}
        isOptionEqualToValue={isOptionSelected}
        ListboxComponent={listboxComponent}
        ListboxProps={listboxProps}
        loading={loading}
        onChange={onChangeSingle}
        onClose={onClose}
        onInputChange={onInputChange}
        options={options}
        PopperComponent={renderPopper}
        renderGroup={renderGroup}
        renderInput={renderInput}
        renderOption={renderOption}
        value={singleValue}
      />
    );
  }

  const onChangeMultiple = (event: SyntheticEvent, value: SelectMultipleData<T>) => {
    suppressEvent(event);
    externalOnChange && externalOnChange(value);
  };

  let multipleValue: SelectMultipleData<T> = [];
  if (Array.isArray(value) && value.length > 0 && value.every(isOptionSelectable)) {
    multipleValue = value;
  } else {
    logWarn("Select", `Provided value is not valid '${value}'`);
  }

  return (
    <MUIAutocomplete<SelectData<T>, true>
      autoComplete={autoComplete}
      data-cy={outerWrapperDataCy}
      disableCloseOnSelect={multiple}
      disabled={disabled}
      getOptionLabel={getOptionLabel}
      groupBy={groupBy}
      isOptionEqualToValue={isOptionSelected}
      ListboxComponent={listboxComponent}
      ListboxProps={listboxProps}
      loading={loading}
      multiple
      onChange={onChangeMultiple}
      onClose={onClose}
      onInputChange={onInputChange}
      options={options}
      PopperComponent={renderPopper}
      renderGroup={renderGroup}
      renderInput={renderInput}
      renderOption={renderOption}
      value={multipleValue}
    />
  );
};

export const LocalizedSelect = localized(Select, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
}) as <T extends SelectDataAllowed>(props: SelectProps<T>) => JSX.Element;

/**
 * @deprecated Select offers built-in prop virtualized
 */
export const SelectVirtualized = <T extends SelectDataAllowed>(props: SelectProps<T>) => (
  <LocalizedSelect {...props} virtualized />
);

export default LocalizedSelect;
