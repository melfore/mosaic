import { BaseType } from "./Base";
import { ChangeEvent, ReactElement } from "react";
import { RenderInputParams } from "@material-ui/lab/Autocomplete";

export interface SelectType extends BaseType {
  disabled?: boolean;
  id?: string;
  isOptionSelected: (option: any, value: any) => boolean;
  loading?: boolean;
  multiple?: boolean;
  onChange: (event: ChangeEvent<{}>, value: any | any[] | null) => void;
  options: any[];
  renderLabel: (option: any) => string;
  value: any | any[];
}
