import { IBase } from "./Base";

export enum SpacerDirection {
  horizontal = "horizontal",
  vertical = "vertical",
}

export interface ISpacer extends IBase {
  direction?: SpacerDirection;
  level?: number;
}
