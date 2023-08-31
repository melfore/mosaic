import { IBase } from "./Base";

export type TabType = { label: string; wrapped?: boolean; content?: React.ReactNode };

export type TabsType = IBase & {
  labelList: TabType[];
  color?: "primary" | "secondary";
  orientation?: "horizontal" | "vertical";
};
