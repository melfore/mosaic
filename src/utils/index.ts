import { ChangeEvent, MouseEvent } from "react";

export const getComposedDataCy = (extDataCy: string, component: string): string => `${extDataCy}-${component}`;

export const suppressEvent = (event: ChangeEvent<any> | MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
