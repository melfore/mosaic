import { IBase } from "./Base";
import { ButtonColor } from "./Button";

export type TabType = {
  label: string;
  wrapped?: boolean;
  content?: React.ReactNode;
  disabled?: boolean;
  textColor?: ButtonColor;
};

export type TabsType = IBase & {
  tabList: TabType[];
  color?: ButtonColor;
  orientation?: "horizontal" | "vertical";
};
