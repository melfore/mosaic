import React, { Fragment } from "react";
import { Popper, PopperProps } from "@material-ui/core";
import { Autocomplete as MUIAutocomplete, Skeleton as MUISkeleton } from "@material-ui/lab";

import { InputSize, InputType, InputVariant } from "../../types/Input";
import { ISelect } from "../../types/Select";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Checkbox from "../Checkbox";
import Typography from "../Typography";

import { StyledMUIListSubheader, StyledMUITextField } from "./styled";

export const DATA_CY_DEFAULT = "select";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "label", type: "string" },
  { name: "placeholder", type: "string" },
];

const Select = <T extends any>({
  autoComplete = true,
  customOptionRendering = undefined,
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  getGroupLabel = undefined,
  getOptionLabel,
  getOptionSelected = undefined,
  groupBy = undefined,
  label = undefined,
  loading = false,
  multiple = false,
  onChange,
  options,
  placeholder = undefined,
  popperWidth = undefined,
  required = false,
  size = InputSize.default,
  type = InputType.default,
  value = null,
  variant = InputVariant.default,
}: ISelect<T>) => {
  const getLabel = (option: T): string => (getOptionLabel ? getOptionLabel(option) : `${option}`);

  const isSelected = (option: T, value: T): boolean => {
    if (getOptionSelected) {
      return getOptionSelected(option, value);
    }

    return !!value && option === value;
  };

  const isSelectable = (value: T | null): boolean => !!value && options.some((option) => isSelected(option, value));

  const validateValue = (value: T | T[] | null): T | T[] | null => {
    if (multiple) {
      const isValidMultipleValue = Array.isArray(value) && value.length > 0 && value.every(isSelectable);
      return isValidMultipleValue ? value : [];
    }

    const isValidValue = !Array.isArray(value) && isSelectable(value);
    return isValidValue ? value : null;
  };

  return (
    <MUIAutocomplete<T, boolean>
      autoComplete={autoComplete}
      data-cy={dataCy}
      disableCloseOnSelect={multiple}
      disabled={disabled}
      getOptionLabel={getLabel}
      getOptionSelected={isSelected}
      groupBy={groupBy}
      ListboxProps={{ style: { padding: 0, width: "100%" } }}
      loading={loading}
      multiple={multiple}
      onChange={(event, value: any) => {
        suppressEvent(event);
        onChange(value);
      }}
      options={options.sort((one: T, another: T) => {
        const oneLabel = getLabel(one);
        const anotherLabel = getLabel(another);
        const labelSorting = oneLabel.localeCompare(anotherLabel);
        if (!groupBy) {
          return labelSorting;
        }

        const oneGroup = groupBy(one);
        const anotherGroup = groupBy(another);
        return oneGroup.localeCompare(anotherGroup) || labelSorting;
      })}
      PopperComponent={(props: PopperProps) => {
        const { anchorEl } = props;
        const anchorElRef = anchorEl as any;
        const anchorElWidth = anchorElRef ? anchorElRef.clientWidth : null;
        const width = !!popperWidth && popperWidth > anchorElWidth ? popperWidth : anchorElWidth;
        return <Popper {...props} placement="bottom-start" style={{ width }} />;
      }}
      renderGroup={(groupProps) => {
        const { children, group, key } = groupProps;
        const groupLabel = getGroupLabel ? getGroupLabel(group) : group;
        return (
          <Fragment key={`group-${key}`}>
            <StyledMUIListSubheader data-cy={getComposedDataCy(dataCy, `option-group-${groupLabel}`)}>
              {groupLabel}
            </StyledMUIListSubheader>
            {children}
          </Fragment>
        );
      }}
      renderInput={(inputProps) => {
        const { inputProps: extInputProps } = inputProps;
        if (loading) {
          const forwardedInputProps = {
            ...inputProps,
            inputProps: { "data-cy": getComposedDataCy(dataCy, "loading") },
          };
          return (
            <MUISkeleton width="100%">
              <StyledMUITextField {...forwardedInputProps} margin="normal" size={size} variant={variant} />
            </MUISkeleton>
          );
        }

        const forwardedInputProps = { ...inputProps, inputProps: { ...extInputProps, "data-cy": `${dataCy}` } };
        return (
          <StyledMUITextField
            {...forwardedInputProps}
            label={label}
            margin="normal"
            placeholder={placeholder}
            required={required}
            size={size}
            type={type}
            variant={variant}
          />
        );
      }}
      renderOption={(option, { selected }) => {
        if (customOptionRendering) {
          return customOptionRendering(option, selected);
        }

        const optionLabel = getLabel(option);
        return (
          <Fragment key={`option-${optionLabel}`}>
            <Checkbox dataCy={getComposedDataCy(dataCy, `option-${optionLabel}-checkbox`)} disabled value={selected} />
            <Typography dataCy={getComposedDataCy(dataCy, `option-${optionLabel}-label`)}>{optionLabel}</Typography>
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
});
