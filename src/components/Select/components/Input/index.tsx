import React, { CSSProperties, FC, useMemo } from "react";
import { TextField as MUITextField } from "@material-ui/core";
import {
  AutocompleteRenderInputParams as MUIAutocompleteRenderInputParams,
  Skeleton as MUISkeleton,
} from "@material-ui/lab";

import { ILoadable } from "../../../../types/Base";
import { IInputField } from "../../../../types/Input";
import { getComposedDataCy, ISubpart } from "../../../../utils";

type ISelectInputField = Pick<IInputField, "dataCy" | "label" | "placeholder"> &
  Required<Pick<IInputField, "required" | "size" | "type" | "variant">>;

interface ISelectInput extends ISelectInputField, ILoadable {
  forwarded: MUIAutocompleteRenderInputParams;
}

export const SELECT_LOADING_SUBPART: ISubpart = {
  label: "Loading",
};

const SelectInput: FC<ISelectInput> = ({
  dataCy = "select-input",
  forwarded,
  label,
  loading,
  placeholder,
  required,
  size,
  style: externalStyle,
  type,
  variant,
}) => {
  const { inputProps: forwardedInputProps } = forwarded;

  const style = useMemo((): CSSProperties => ({ ...externalStyle, width: "100%" }), [externalStyle]);

  const inputDataCy = useMemo(
    () => (!loading ? dataCy : getComposedDataCy(dataCy, SELECT_LOADING_SUBPART)),
    [dataCy, loading]
  );

  const inputProps = useMemo(
    () => ({
      ...forwarded,
      inputProps: {
        ...forwardedInputProps,
        "data-cy": inputDataCy,
        style,
      },
    }),
    [forwarded, forwardedInputProps, inputDataCy, style]
  );

  if (loading) {
    return (
      <MUISkeleton width="100%">
        <MUITextField {...inputProps} margin="normal" size={size} variant={variant} style={style} />
      </MUISkeleton>
    );
  }

  return (
    <MUITextField
      {...inputProps}
      label={label}
      margin="normal"
      placeholder={placeholder}
      required={required}
      size={size}
      style={style}
      type={type}
      variant={variant}
    />
  );
};

export default SelectInput;
