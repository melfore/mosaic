import React, { CSSProperties, Fragment, SyntheticEvent, useCallback, useMemo } from "react";
import {
  ListSubheader as MUIListSubheader,
  Popper as MUIPopper,
  PopperProps as MUIPopperProps,
  TextField as MUITextField,
  useTheme,
} from "@material-ui/core";
import { Autocomplete as MUIAutocomplete, Skeleton as MUISkeleton } from "@material-ui/lab";

import { InputSize, InputType, InputVariant } from "../../types/Input";
import { ISelect } from "../../types/Select";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Checkbox from "../Checkbox";
import Typography from "../Typography";

export const DATA_CY_DEFAULT = "select";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "label", type: "string" },
  { name: "placeholder", type: "string" },
];

export const SUBPARTS_MAP = {
  loading: {
    label: "Loading",
  },
  optionCheckbox: {
    label: "Option Checkbox (with label)",
    value: (label = "{label}") => `option-${label}-checkbox`,
  },
  optionLabel: {
    label: "Option Label (with label)",
    value: (label = "{label}") => `option-${label}-label`,
  },
  optionGroupLabel: {
    label: "Option Group (with label)",
    value: (label = "{label}") => `option-group-${label}`,
  },
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
  onInputChange: externalOnInputChange,
  onScrollEnd,
  options: externalOptions,
  placeholder,
  popperWidth,
  required = false,
  size = InputSize.default,
  style,
  type = InputType.default,
  value = null,
  variant = InputVariant.default,
}: ISelect<T>) => {
  const theme = useTheme();

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

  const isOptionSelectable = useCallback(
    (value: T | null): boolean => !!value && options.some((option) => isOptionSelected(option, value)),
    [options, isOptionSelected]
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

  return (
    <MUIAutocomplete<T, boolean>
      autoComplete={autoComplete}
      data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.outerWrapper)}
      disableCloseOnSelect={multiple}
      disabled={disabled}
      getOptionLabel={getOptionLabel}
      getOptionSelected={isOptionSelected}
      groupBy={groupBy}
      ListboxProps={{
        onScroll,
        style: {
          padding: 0,
          width: "100%",
        },
      }}
      loading={loading}
      multiple={multiple}
      onChange={onChange}
      onInputChange={onInputChange}
      options={options}
      PopperComponent={(props: MUIPopperProps) => {
        const { anchorEl } = props;
        const anchorElRef = anchorEl as any;
        const anchorElWidth = anchorElRef ? anchorElRef.clientWidth : null;
        const width = !!popperWidth && popperWidth > anchorElWidth ? popperWidth : anchorElWidth;
        return <MUIPopper {...props} placement="bottom-start" style={{ width }} />;
      }}
      renderGroup={(groupProps) => {
        const { children, group, key } = groupProps;
        const groupLabel = getGroupLabel ? getGroupLabel(group) : group;

        return (
          <Fragment key={`group-${key}`}>
            <MUIListSubheader
              data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.optionGroupLabel, groupLabel)}
              style={{ backgroundColor: theme.palette.background.default }}
            >
              {groupLabel}
            </MUIListSubheader>
            {children}
          </Fragment>
        );
      }}
      renderInput={(inputProps) => {
        const { inputProps: extInputProps } = inputProps;
        const baseStyle: CSSProperties = { width: "100%" };

        if (loading) {
          const forwardedInputProps = {
            ...inputProps,
            inputProps: {
              "data-cy": getComposedDataCy(dataCy, SUBPARTS_MAP.loading),
              style: { ...baseStyle, ...style },
            },
          };

          return (
            <MUISkeleton width="100%">
              <MUITextField
                {...forwardedInputProps}
                margin="normal"
                size={size}
                variant={variant}
                style={{ ...baseStyle }}
              />
            </MUISkeleton>
          );
        }

        const forwardedInputProps = {
          ...inputProps,
          inputProps: { ...extInputProps, "data-cy": dataCy, style: { ...baseStyle, ...style } },
        };

        return (
          <MUITextField
            {...forwardedInputProps}
            label={label}
            margin="normal"
            placeholder={placeholder}
            required={required}
            size={size}
            style={{ width: "100%", ...style }}
            type={type}
            variant={variant}
          />
        );
      }}
      renderOption={(option, { selected }) => {
        if (customOptionRendering) {
          return customOptionRendering(option, selected);
        }

        const optionLabel = getOptionLabel(option);

        return (
          <Fragment key={`option-${optionLabel}`}>
            <Checkbox
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.optionCheckbox, optionLabel)}
              disabled
              labelPlacement="end"
              value={selected}
            />
            <Typography dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.optionLabel, optionLabel)}>
              {optionLabel}
            </Typography>
          </Fragment>
        );
      }}
      value={validateValue(value)}
    />
  );
};

export const SelectWithProps = Select;

export default localized(Select, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
}) as <T extends any>(props: ISelect<T>) => JSX.Element;
