import React, { FC, useMemo } from "react";
import { Popper as MUIPopper, PopperProps as MUIPopperProps } from "@material-ui/core";

interface ISelectPopper extends MUIPopperProps {
  popperWidth: any;
}

const SelectPopper: FC<ISelectPopper> = ({ popperWidth, ...props }) => {
  const { anchorEl } = props;

  const width = useMemo(() => {
    const anchorElRef = anchorEl as any;
    const anchorElWidth = anchorElRef ? anchorElRef.clientWidth : null;
    return !!popperWidth && popperWidth > anchorElWidth ? popperWidth : anchorElWidth;
  }, [popperWidth, anchorEl]);

  return <MUIPopper {...props} placement="bottom-start" style={{ width }} />;
};

export default SelectPopper;
