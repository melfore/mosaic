import { IBase } from "./Base";

export type BreadCrumbsType = IBase & {
  link: { label: string; href: string }[];
  onClick: (href: string) => void;
};
