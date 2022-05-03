import React, { Fragment, HTMLAttributes, ReactNode, useMemo } from "react";

import { IBase } from "../../../../types/Base";
import { getComposedDataCy, ISubpart } from "../../../../utils";
import Checkbox from "../../../Checkbox";
import Typography from "../../../Typography";

interface ISelectOption<T> extends IBase {
  customRenderer?: (option: T, selected: boolean) => ReactNode;
  forwarded: HTMLAttributes<HTMLLIElement>;
  getOptionLabel: (option: T) => string;
  multiple: boolean;
  option: T;
  selected: boolean;
}

export const SELECT_OPTION_SUBPART: ISubpart = {
  label: "Option (with label)",
  value: (label = "{label}") => `option-${label}`,
};

export const SELECT_OPTION_CHECKBOX_SUBPART: ISubpart = {
  label: "Option Checkbox (with label)",
  value: (label = "{label}") => `option-${label}-checkbox`,
};

export const SELECT_OPTION_LABEL_SUBPART: ISubpart = {
  label: "Option Label (with label)",
  value: (label = "{label}") => `option-${label}-label`,
};

const SelectOption = <T extends any>({
  customRenderer,
  dataCy = "select-option",
  forwarded,
  getOptionLabel,
  multiple,
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

  const optionDataCy = useMemo(
    () => getComposedDataCy(dataCy, SELECT_OPTION_SUBPART, optionLabel),
    [dataCy, optionLabel]
  );

  const customContent = useMemo(
    () => (customRenderer ? customRenderer(option, selected) : undefined),
    [customRenderer, option, selected]
  );

  const content = useMemo(() => {
    if (customContent) {
      return customContent;
    }

    return (
      <Fragment>
        {multiple && <Checkbox dataCy={checkboxDataCy} disabled labelPlacement="end" value={selected} />}
        <Typography dataCy={labelDataCy}>{optionLabel}</Typography>
      </Fragment>
    );
  }, [checkboxDataCy, customContent, labelDataCy, optionLabel, multiple, selected]);

  return (
    <li key={optionDataCy} data-cy={optionDataCy} {...forwarded}>
      {content}
    </li>
  );
};

export default SelectOption;
