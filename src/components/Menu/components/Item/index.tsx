import React, { MouseEvent, useCallback, useMemo } from "react";
import { MenuItem as MUIMenuItem } from "@mui/material";

import { IMenu, IMenuItem, IMenuItemCallback } from "../../../../types/Menu";
import { suppressEvent } from "../../../../utils";

type MenuItemProps = IMenuItem &
  Pick<IMenu, "onItemClick"> & {
    index: number;
    onClose: () => void;
  };

const MenuItem = ({
  dataCy,
  index,
  label,
  onClick,
  onClose,
  onItemClick: externalOnItemClick,
  value,
}: MenuItemProps) => {
  const itemDataCy = useMemo(() => `${dataCy}-item-${index}`, [dataCy, index]);

  const onItemClick = useCallback(
    (value: string, onClick?: IMenuItemCallback) => {
      if (onClick) {
        onClick(value);
        return;
      }

      if (externalOnItemClick) {
        externalOnItemClick(value);
        return;
      }

      return;
    },
    [externalOnItemClick]
  );

  const onItemClickWrapper = useCallback(
    (event: MouseEvent<HTMLLIElement>) => {
      suppressEvent(event);
      onClose();
      onItemClick(value, onClick);
    },
    [onClick, onClose, onItemClick, value]
  );

  return (
    <MUIMenuItem key={itemDataCy} data-cy={itemDataCy} onClick={onItemClickWrapper}>
      {label}
    </MUIMenuItem>
  );
};

export default MenuItem;
