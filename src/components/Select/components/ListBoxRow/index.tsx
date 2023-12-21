import React, { CSSProperties, ReactNode } from "react";

interface SelectListBoxRowProps {
  data: ReactNode[];
  index: number;
  style: CSSProperties;
}

const SelectListBoxRow = ({ data, index, style }: SelectListBoxRowProps) => {
  return <div style={style}>{data[index]}</div>;
};

export default SelectListBoxRow;
