import { ChangeEvent, MouseEvent } from "react";

export const getDataCyForStatus = (dataCy: string, status: string) => `${dataCy}-${status}`;

export const getDataCyForSubComponent = (extDataCy: string, component: string): string => `${extDataCy}-${component}`;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export const suppressEvent = (event: ChangeEvent<any> | MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
