import React, { FC, Fragment, useCallback, useMemo, useState } from "react";
import { Menu as MUIMenu, MenuItem as MUIMenuItem, PopoverOrigin as MUIPopoverOrigin } from "@material-ui/core";

import { Icons } from "../../types/Icon";
import { IMenu, IMenuItemCallback } from "../../types/Menu";
import { suppressEvent } from "../../utils";
import { logWarn } from "../../utils/logger";
import Button from "../Button";
import IconButton from "../IconButton";

const MENU_ITEMS_ANCHORING: MUIPopoverOrigin = {
  vertical: "top",
  horizontal: "right",
};

const Menu: FC<IMenu> = ({ dataCy, icon: externalIcon, label, items, onItemClick, style }) => {
  const [anchor, setAnchor] = useState<Element | null>(null);

  const onClose = useCallback(() => setAnchor(null), []);

  const onItem = useCallback(
    (value: string, onClick?: IMenuItemCallback) => {
      if (onClick) {
        onClick(value);
        return;
      }

      if (onItemClick) {
        onItemClick(value);
        return;
      }

      return;
    },
    [onItemClick]
  );

  const onMenu = useCallback(() => setAnchor(document.querySelector(`button[data-cy='${dataCy}']`)), [dataCy]);

  const menuButton = useMemo(() => {
    let icon = externalIcon;
    if (!icon) {
      logWarn("Menu", "Icon is not set, fallback to Icons.menu");
      icon = Icons.menu;
    }

    if (!label) {
      return <IconButton dataCy={dataCy} icon={icon} onClick={onMenu} style={style} />;
    }

    return (
      <Button
        dataCy={dataCy}
        icon={typeof icon === "string" ? { name: icon } : { component: icon }}
        label={label}
        onClick={onMenu}
        style={style}
      />
    );
  }, [dataCy, externalIcon, label, onMenu, style]);

  return (
    <Fragment>
      {menuButton}
      <MUIMenu
        id={dataCy}
        anchorEl={anchor}
        anchorOrigin={MENU_ITEMS_ANCHORING}
        keepMounted
        transformOrigin={MENU_ITEMS_ANCHORING}
        open={!!anchor}
        onClose={onClose}
      >
        {items.map(({ label, onClick, value }, index) => (
          <MUIMenuItem
            key={`${dataCy}-item-${index}`}
            data-cy={`${dataCy}-item-${index}`}
            onClick={(event) => {
              suppressEvent(event);
              onClose();
              onItem(value, onClick);
            }}
          >
            {label}
          </MUIMenuItem>
        ))}
      </MUIMenu>
    </Fragment>
  );
};

export default Menu;
