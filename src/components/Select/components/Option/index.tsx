import React, { Fragment, useMemo } from "react";

import { IBase } from "../../../../types/Base";
import { getComposedDataCy, ISubpart } from "../../../../utils";
import Checkbox from "../../../Checkbox";
import Typography from "../../../Typography";

interface ISelectOption<T> extends IBase {
  getOptionLabel: (option: T) => string;
  option: T;
  selected: boolean;
}

export const SELECT_OPTION_CHECKBOX_SUBPART: ISubpart = {
  label: "Option Checkbox (with label)",
  value: (label = "{label}") => `option-${label}-checkbox`,
};

export const SELECT_OPTION_LABEL_SUBPART: ISubpart = {
  label: "Option Label (with label)",
  value: (label = "{label}") => `option-${label}-label`,
};

const SelectOption = <T extends any>({
  dataCy = "select-option",
  getOptionLabel,
  option,
  selected,
}: ISelectOption<T>) => {
  const optionLabel = useMemo(() => getOptionLabel(option), [getOptionLabel, option]);

  const checkboxDataCy = useMemo(
    () => getComposedDataCy(dataCy, SELECT_OPTION_CHECKBOX_SUBPART, optionLabel),
    [dataCy, optionLabel]
  );

  const labelDataCy = useMemo(
    () => getComposedDataCy(dataCy, SELECT_OPTION_LABEL_SUBPART, optionLabel),
    [dataCy, optionLabel]
  );

  return (
    <Fragment key={`option-${optionLabel}`}>
      <Checkbox dataCy={checkboxDataCy} disabled labelPlacement="end" value={selected} />
      <Typography dataCy={labelDataCy}>{optionLabel}</Typography>
    </Fragment>
  );
};

export default SelectOption;
