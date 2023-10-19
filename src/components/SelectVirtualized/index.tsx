import React, { HTMLAttributes, useCallback, useMemo } from "react";
import { VariableSizeList } from "react-window";
import {
  Autocomplete as MUIAutocomplete,
  AutocompleteRenderGroupParams as MUIAutocompleteRenderGroupParams,
  AutocompleteRenderInputParams as MUIAutocompleteRenderInputParams,
  AutocompleteRenderOptionState as MUIAutocompleteRenderOptionState,
  PopperProps as MUIPopperProps,
} from "@mui/material";

import { ISelect } from "../../types/Select";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import SelectGroup, { SELECT_GROUP_SUBPART } from "../Select/components/Group";
import SelectInput, { SELECT_LOADING_SUBPART } from "../Select/components/Input";
import SelectOption, {
  SELECT_OPTION_CHECKBOX_SUBPART,
  SELECT_OPTION_LABEL_SUBPART,
  SELECT_OPTION_SUBPART,
} from "../Select/components/Option";
import SelectPopper from "../Select/components/Popper";

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

const SelectVirtualized = <T extends any>({
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
  optionsNumber,
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
    // TODO#lb: fix any type
    (event: any, value: any) => {
      suppressEvent(event);
      externalOnChange(value);
    },
    [externalOnChange]
  );

  const onClose = useCallback(
    // TODO#lb: fix any type
    (event: any) => {
      if (!externalOnClose) {
        return;
      }

      suppressEvent(event);
      externalOnClose();
    },
    [externalOnClose]
  );

  const onInputChange = useCallback(
    // TODO#lb: fix any type
    (event: any, value: string) => {
      if (!externalOnInputChange) {
        return;
      }

      suppressEvent(event);
      externalOnInputChange(value);
    },
    [externalOnInputChange]
  );

  /*const onScroll = useCallback(
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
  );*/

  const renderListBoxRow = ({ data, index, style }: any) => {
    return <div style={style}>{data[index]}</div>;
  };

  function useResetCache(data: any) {
    const ref = React.useRef<VariableSizeList>(null);
    React.useEffect(() => {
      if (ref.current != null) {
        ref.current.resetAfterIndex(0, true);
      }
    }, [data]);
    return ref;
  }

  // Adapter for react-window
  const listboxComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(
    function ListboxComponent(props, ref) {
      const { children, ...other } = props;
      const itemData: React.ReactChild[] = [];
      (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
      });

      const gridRef = useResetCache(options.length);

      const adaptedHeight = useMemo(() => {
        if (multiple) {
          return (
            55 * (optionsNumber ? (optionsNumber < 0 ? 1 : optionsNumber) : options.length < 5 ? options.length : 5)
          );
        }
        return 40 * (optionsNumber ? (optionsNumber < 0 ? 1 : optionsNumber) : options.length < 6 ? options.length : 6);
      }, []);

      const adaptedSize = useMemo(() => {
        if (multiple) {
          return 55;
        }
        return 40;
      }, []);

      return (
        <div ref={ref} {...other} style={{ width: "100%", maxHeight: "100%" }}>
          <VariableSizeList
            itemData={itemData}
            height={adaptedHeight}
            width="100%"
            ref={gridRef}
            innerElementType={(props) => <ul role="listbox" {...props} style={{ margin: 0, padding: 0 }} />}
            itemSize={() => adaptedSize}
            overscanCount={2}
            itemCount={options.length}
          >
            {renderListBoxRow}
          </VariableSizeList>
        </div>
      );
    }
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

  const renderCustomOption = useCallback(
    (option: T, selected: boolean) => (customOptionRendering ? customOptionRendering(option, selected) : undefined),
    [customOptionRendering]
  );

  const renderOption = useCallback(
    (props: HTMLAttributes<HTMLLIElement>, option: T, { selected }: MUIAutocompleteRenderOptionState) => {
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
      groupBy={groupBy}
      isOptionEqualToValue={isOptionSelected}
      ListboxComponent={listboxComponent}
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

export const SelectWithProps = SelectVirtualized;

export default localized(SelectVirtualized as any, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
}) as <T extends any>(props: ISelect<T>) => JSX.Element;
