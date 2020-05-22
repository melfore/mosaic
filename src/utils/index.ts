import { MouseEvent } from "react";

export const suppressEvent = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
