import { ChangeEvent, MouseEvent } from "react";

export interface ISubpart {
  label: string;
  value?: Function;
}

export interface ISubpartSuffix {
  label: string;
  suffix: string;
}

export type ISubpartMap<T extends string = string> = {
  [key in T]: ISubpart;
};

export const DATA_CY_SUFFIX_SEPARATOR = "-";

/**
 * Gets composed dataCy for components with subparts
 * @param dataCy the dataCy prefix
 * @param subpart the subpart to consider
 * @param args optional arguments for subpart evaluation
 */
export const getComposedDataCy = (dataCy: string, subpart: ISubpart, args?: any): string => {
  const { label, value } = subpart;
  return `${dataCy}${DATA_CY_SUFFIX_SEPARATOR}${!value ? slugify(label) : value(args)}`;
};

/**
 * Gets all composed dataCy for all listed subparts
 * @param subpartMap the map of all subparts to consider
 */
export const getAllComposedDataCy = (subpartMap: ISubpartMap): ISubpartSuffix[] =>
  Object.values(subpartMap).map(({ label, value }) => ({
    label,
    suffix: !value ? slugify(label) : value(),
  }));

/**
 * Gets an object property by path, if path is nested is executed recursively
 * @param object the source object
 * @param path the desired path
 */
export const getObjectProperty = (object: any, path: string): any => {
  if (!object) {
    return undefined;
  }

  if (!path.includes(".")) {
    return object[path];
  }

  const pathParts = path.split(".");
  const basePath = pathParts[0];
  if (!object[basePath]) {
    return undefined;
  }

  const baseObject = object[basePath];
  return getObjectProperty(baseObject, path.replace(`${basePath}.`, ""));
};

/**
 * Creates slug or kebab-case string from value
 * @param value the value to slugify
 */
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

/**
 * Suppresses default behaviour and propagation of a given event
 * @param event the event to suppress
 */
export const suppressEvent = (event: ChangeEvent<any> | MouseEvent<any, MouseEvent> | null) => {
  if (!event) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
};
