import React, { FC, useMemo } from "react";
import { Popper as MUIPopper, PopperProps as MUIPopperProps } from "@mui/material";

interface ISelectPopper {
  forwarded: MUIPopperProps;
  popperWidth: any;
}

const SelectPopper: FC<ISelectPopper> = ({ forwarded, popperWidth }) => {
  const { anchorEl } = forwarded;

  const width = useMemo(() => {
    const anchorElRef = anchorEl as any;
    const anchorElWidth = anchorElRef ? anchorElRef.clientWidth : null;
    return !!popperWidth && popperWidth > anchorElWidth ? popperWidth : anchorElWidth;
  }, [popperWidth, anchorEl]);

  return <MUIPopper {...forwarded} placement="bottom-start" style={{ width }} />;
};

export default SelectPopper;
