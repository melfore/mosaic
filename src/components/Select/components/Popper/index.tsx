import React, { CSSProperties, FC, useMemo } from "react";
import { Popper as MUIPopper, PopperProps as MUIPopperProps } from "@mui/material";

import { SelectPopperProps } from "../../../../types/Select";

type SelectPopperEnhancedProps = SelectPopperProps & {
  forwarded: MUIPopperProps;
};

const SelectPopper: FC<SelectPopperEnhancedProps> = ({ forwarded, popperWidth }) => {
  const { anchorEl } = forwarded;

  const anchorElWidth = useMemo(() => {
    if (!anchorEl || typeof anchorEl === "function" || !("clientWidth" in anchorEl)) {
      return -1;
    }

    return anchorEl.clientWidth;
  }, [anchorEl]);

  const width = useMemo(
    () => (!!popperWidth && popperWidth > anchorElWidth ? popperWidth : anchorElWidth),
    [anchorElWidth, popperWidth]
  );

  const style = useMemo(
    (): CSSProperties => ({
      width,
    }),
    [width]
  );

  return <MUIPopper {...forwarded} placement="bottom-start" style={style} />;
};

export default SelectPopper;
