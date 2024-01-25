import { IBase } from "./Base";

export type TabType = { label: string; wrapped?: boolean; content?: React.ReactNode; disabled?: boolean };

export type TabsType = IBase & {
  tabList: TabType[];
  color?: "primary" | "secondary";
  orientation?: "horizontal" | "vertical";
};
