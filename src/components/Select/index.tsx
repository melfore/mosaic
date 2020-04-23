import React, { FC } from "react";
import MUITextField from "@material-ui/core/TextField";
import MUIAutocomplete, { RenderInputParams, RenderOptionState } from "@material-ui/lab/Autocomplete";
import { SelectType } from "../../types/Select";
import Typography from "../Typography";
import Icon from "../Icon";
import { Icons } from "../../types/Icon";

/**
 * Select component made on top of `@material-ui/lab/Autocomplete`
 */
const Select: FC<SelectType> = ({
  disabled = false,
  id = undefined,
  isOptionSelected,
  loading = false,
  multiple = false,
  onChange,
  options,
  renderLabel,
  value,
}) => {
  return (
    <MUIAutocomplete
      disabled={disabled}
      // TODO#lb: verify & implement
      // autoComplete={true}
      disableCloseOnSelect={multiple}
      multiple={multiple}
      id={id}
      loading={loading}
      options={options}
      value={value}
      onChange={onChange}
      getOptionSelected={isOptionSelected}
      // TODO#lb: verify & implement
      renderOption={(option: any, { selected }: RenderOptionState) => {
        const optionLabel = renderLabel(option);
        if (multiple) {
          return (
            <div>
              <Icon name={Icons.add} />
              <Typography label={optionLabel} />
            </div>
          );
        }

        return (
          <div>
            <Icon name={Icons.add} />
            <Typography label={optionLabel} />
          </div>
        );
      }}
      renderInput={(params: RenderInputParams) => <MUITextField {...params} />}
    />
  );
};

export default Select;
