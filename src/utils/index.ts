import { ChangeEvent, MouseEvent } from "react";

export const suppressEvent = (event: ChangeEvent<any> | MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
