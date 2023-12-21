import React, { useMemo } from "react";

import { Icons } from "../../../../types/Icon";
import { IMenuButton } from "../../../../types/Menu";
import { logWarn } from "../../../../utils/logger";
import Button from "../../../Button";
import IconButton from "../../../IconButton";

interface MenuButtonProps extends IMenuButton {
  onMenu: () => void;
}

const MenuButton = ({ dataCy, icon: externalIcon, label, onMenu, style, type = "button" }: MenuButtonProps) => {
  const icon = useMemo(() => {
    if (!externalIcon) {
      logWarn("Menu", "Icon is not set, fallback to Icons.menu");
      return Icons.menu;
    }

    return externalIcon;
  }, [externalIcon]);

  const buttonIcon = useMemo(() => (typeof icon === "string" ? { name: icon } : { component: icon }), [icon]);

  if (type === "icon") {
    return <IconButton dataCy={dataCy} icon={icon} onClick={onMenu} style={style} tooltip={label} />;
  }

  return <Button dataCy={dataCy} icon={buttonIcon} label={label} onClick={onMenu} style={style} />;
};

export default MenuButton;
