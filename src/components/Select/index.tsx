import React, { Fragment } from "react";
import { TextField as MUITextField, useTheme } from "@material-ui/core";
import { Autocomplete as MUIAutocomplete, Skeleton as MUISkeleton } from "@material-ui/lab";
import Icon from "../Icon";
import Spacer from "../Spacer";
import Typography from "../Typography";
import { Icons } from "../../types/Icon";
import { InputVariant } from "../../types/Input";
import { SelectType } from "../../types/Select";
import { suppressEvent } from "../../utils";
import { StyledMUIListSubheader } from "./styled";

/**
 * Select component made on top of `@material-ui/core/Autocomplete`
 */

const Select = <T extends object>({
  autoComplete = true,
  customOptionRendering = undefined,
  dataCy = "select",
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
  value = null,
}: SelectType<T>) => {
  return (
    <MUIAutocomplete<T, boolean>
      autoComplete={autoComplete}
      disableCloseOnSelect={false}
      disabled={disabled}
      getOptionLabel={getOptionLabel}
      getOptionSelected={(option, value) => {
        if (getOptionSelected) {
          return getOptionSelected(option, value);
        }

        return !!value && option === value;
      }}
      groupBy={groupBy}
      ListboxProps={{ style: { padding: 0 } }}
      loading={loading}
      multiple={multiple}
      onChange={(event, value) => {
        suppressEvent(event);
        onChange(value);
      }}
      options={options.sort((one: T, another: T) => {
        const oneLabel = getOptionLabel(one);
        const anotherLabel = getOptionLabel(another);
        const labelSorting = oneLabel.localeCompare(anotherLabel);
        if (!groupBy) {
          return labelSorting;
        }

        const oneGroup = groupBy(one);
        const anotherGroup = groupBy(another);
        return oneGroup.localeCompare(anotherGroup) || labelSorting;
      })}
      renderGroup={(groupProps) => {
        const { children, group, key } = groupProps;
        const groupLabel = getGroupLabel ? getGroupLabel(group) : group;
        return (
          <Fragment key={`group-${key}`}>
            <StyledMUIListSubheader>{groupLabel}</StyledMUIListSubheader>
            {children}
          </Fragment>
        );
      }}
      renderInput={(inputProps) => {
        const { inputProps: extInputProps } = inputProps;
        const forwardedInputProps = { ...inputProps, inputProps: { ...extInputProps, "data-cy": `${dataCy}-select` } };
        const inputComponent = <MUITextField {...forwardedInputProps} label={label} variant={InputVariant.default} />;
        if (loading) {
          return <MUISkeleton width="100%">{inputComponent}</MUISkeleton>;
        }

        return inputComponent;
      }}
      renderOption={(option, { selected }) => {
        if (customOptionRendering) {
          return customOptionRendering(option, selected);
        }

        const optionLabel = getOptionLabel(option);
        return (
          <Fragment key={`option-${optionLabel}`}>
            <Icon
              dataCy={`${dataCy}-option option-icon-${optionLabel}`}
              name={selected ? Icons.checkbox : Icons.checkbox_empty}
            />
            <Spacer level={2} />
            <Typography dataCy={`${dataCy}-option option-label-${optionLabel}`} label={optionLabel} />
          </Fragment>
        );
      }}
      value={options.some((opt) => opt === value) ? value : null}
    />
  );
};

export default Select;
