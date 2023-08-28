import { IBase } from "./Base";

export type TabsType = IBase & {
  labelList: { label: string; wrapped?: boolean; children?: any }[];
  color: "primary" | "secondary";
};
