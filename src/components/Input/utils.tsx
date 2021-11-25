import React from "react";
import { InputAdornment as MUIInputAdornment } from "@material-ui/core";

import { IInputAdornment } from "../../types/Input";
import IconButton from "../IconButton";

export const getAdornment = (adornment?: IInputAdornment) => {
  if (!adornment) {
    return;
  }

  const { icon, onClick } = adornment;
  return (
    <MUIInputAdornment position="end">
      <IconButton disabled={!onClick} icon={icon} onClick={onClick!} size="small" />
    </MUIInputAdornment>
  );
};
