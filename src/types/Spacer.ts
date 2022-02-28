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
  /**
   * Direction of spacing
   */
  direction?: ISpacerDirection | SpacerDirection;
  /**
   * Size of spacing
   */
  level?: number;
}
