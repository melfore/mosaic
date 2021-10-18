import { IBase } from "./Base";

/**
 * @deprecated Use "horizontal" | "vertical"
 */
export enum SpacerDirection {
  horizontal = "horizontal",
  vertical = "vertical",
}

type ISpacerDirection = "horizontal" | "vertical";

export interface ISpacer extends IBase {
  direction?: ISpacerDirection | SpacerDirection;
  level?: number;
}
