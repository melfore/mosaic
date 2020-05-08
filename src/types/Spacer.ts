import { BaseType } from "./Base";

export enum SpacerDirection {
  horizontal = "horizontal",
  vertical = "vertical",
}

export interface SpacerType extends BaseType {
  direction?: SpacerDirection;
  level?: number;
}
