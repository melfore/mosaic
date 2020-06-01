import React, { Fragment } from "react";
import { TextField as MUITextField } from "@material-ui/core";
import { Autocomplete as MUIAutocomplete, Skeleton as MUISkeleton } from "@material-ui/lab";
import Checkbox from "../Checkbox";
import Typography from "../Typography";
import { InputVariant } from "../../types/Input";
import { SelectType } from "../../types/Select";
import { suppressEvent } from "../../utils";
import { StyledMUIListSubheader } from "./styled";

/**
 * Select component made on top of `@material-ui/core/Autocomplete`
 */

const Select = <T extends any>({
  autoComplete = true,
  customOptionRendering = undefined,
  dataCy = "select",
  disabled = false,
  getGroupLabel = undefined,
  getOptionLabel,
  getOptionSelected = undefined,
  groupBy = undefined,
  initialValue = null,
  label = undefined,
  loading = false,
  multiple = false,
  onChange,
  options,
}: SelectType<T>) => {
  const defaultValue = options.some((option) => option === initialValue) ? initialValue : null;
  const getLabel = (option: T): string => (getOptionLabel ? getOptionLabel(option) : option.toString());

  return (
    <MUIAutocomplete<T, boolean>
      autoComplete={autoComplete}
      defaultValue={defaultValue}
      disableCloseOnSelect={false}
      disabled={disabled}
      getOptionLabel={getLabel}
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

        const optionLabel = getLabel(option);
        return (
          <Fragment key={`option-${optionLabel}`}>
            <Checkbox dataCy={`${dataCy}-option option-checkbox-${optionLabel}`} disabled value={selected} />
            <Typography
              bottomSpacing={false}
              dataCy={`${dataCy}-option option-label-${optionLabel}`}
              label={optionLabel}
            />
          </Fragment>
        );
      }}
    />
  );
};

export default Select;
