import { ChangeEvent, MouseEvent } from "react";

interface ISubpart {
  label: string;
  value?: Function;
}

export interface ISubpartSuffix {
  label: string;
  suffix: string;
}

export interface ISubpartMap {
  [key: string]: ISubpart;
}

export const DATA_CY_SUFFIX_SEPARATOR = "-";

export const getComposedDataCy = (dataCy: string, subpart: ISubpart, args?: any): string => {
  const { label, value } = subpart;
  return !value ? slugify(label) : value(args);
};

export const getAllComposedDataCy = (subpartMap: ISubpartMap): ISubpartSuffix[] =>
  Object.values(subpartMap).map(({ label, value }) => ({
    label,
    suffix: !value ? slugify(label) : value(),
  }));

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export const suppressEvent = (event: ChangeEvent<any> | MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
