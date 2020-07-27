import { ChangeEvent, MouseEvent } from "react";

export const suppressEvent = (event: ChangeEvent<any> | MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
