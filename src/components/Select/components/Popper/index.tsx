import React, { CSSProperties, FC, useMemo } from "react";
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

  const style = useMemo(
    (): CSSProperties => ({
      width,
    }),
    [width]
  );

  return (
    <MUIPopper
      {...forwarded}
      placement="bottom-start"
      style={style}
      // React 17.x vs React 18.x mismatch
      // See: https://github.com/mui/material-ui/issues/35287
      // onResize={undefined}
      // onResizeCapture={undefined}
    />
  );
};

export default SelectPopper;
