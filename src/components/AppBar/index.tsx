import React, { FC, Fragment, useMemo, useState } from "react";
import {
  AppBar as MUIAppBar,
  Box as MUIBox,
  Menu as MUIMenu,
  MenuItem as MUIMenuItem,
  PopoverOrigin as MUIPopoverOrigin,
  Toolbar as MUIToolbar,
  useTheme,
} from "@material-ui/core";

import { IAppBar } from "../../types/AppBar";
import { ButtonIconPosition } from "../../types/Button";
import { Icons } from "../../types/Icon";
import { TypographyVariants } from "../../types/Typography";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Button from "../Button";
import IconButton from "../IconButton";
import Typography from "../Typography";

const MENU_ITEMS_ANCHORING: MUIPopoverOrigin = {
  vertical: "top",
  horizontal: "right",
};

export const DATA_CY_DEFAULT = "appbar";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "title", type: "string" },
  { name: "userMenu.label", type: "any[]" },
];

export const SUBPARTS_MAP = {
  menuIcon: {
    label: "Menu",
  },
  titleClickable: {
    label: "Title Clickable",
  },
  titleText: {
    label: "Title Text",
  },
  actionIcon: {
    label: "Action (at index n)",
    value: (n = `{n}`) => `action-${n}`,
  },
  userMenuIcon: {
    label: "User Menu",
  },
  userMenuItem: {
    label: "User Menu Item (at index n)",
    value: (n = `{n}`) => `user-menu-item-${n}`,
  },
};

const AppBar: FC<IAppBar> = ({
  actions = [],
  dataCy = "appbar",
  menu,
  onTitleClick,
  style,
  title,
  userMenu = [],
  username,
}) => {
  const theme = useTheme();

  const [userMenuAnchor, setUserMenuAnchor] = useState<any>(null);

  const userMenuButton = useMemo(() => {
    const userMenuDataCy = getComposedDataCy(dataCy, SUBPARTS_MAP.userMenuIcon);
    const userMenuIcon: Icons = Icons.account;
    const userMenuOnClickCallback = () =>
      setUserMenuAnchor(document.querySelector(`button[data-cy='${userMenuDataCy}']`));

    return !username ? (
      <IconButton dataCy={userMenuDataCy} icon={userMenuIcon} onClick={userMenuOnClickCallback} />
    ) : (
      <Button
        dataCy={userMenuDataCy}
        icon={{ name: userMenuIcon, position: ButtonIconPosition.right }}
        label={username}
        onClick={userMenuOnClickCallback}
        style={{ textTransform: "lowercase" }}
      />
    );
  }, [dataCy, username]);

  return (
    <MUIAppBar data-cy={dataCy} position="sticky" style={style}>
      <MUIToolbar style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <MUIBox alignItems="center" display="flex">
          {menu && (
            <IconButton
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.menuIcon)}
              icon={menu.icon}
              onClick={menu.onClick}
            />
          )}
          {title && (
            <MUIBox
              data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.titleClickable)}
              onClick={(event) => {
                suppressEvent(event);
                onTitleClick && onTitleClick();
              }}
              style={{
                borderRadius: `${theme.shape.borderRadius}px`,
                cursor: onTitleClick ? "pointer" : "default",
                padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
                userSelect: "none",
              }}
            >
              <Typography dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.titleText)} variant={TypographyVariants.title}>
                {title}
              </Typography>
            </MUIBox>
          )}
        </MUIBox>
        <MUIBox alignItems="center" display="flex">
          {actions.map(({ icon, onClick, style }, index) => (
            <IconButton
              key={`action-${index}`}
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.actionIcon, index)}
              icon={icon}
              onClick={onClick}
              style={{ marginRight: `${theme.spacing(0.5)}px`, ...style }}
            />
          ))}
          {userMenu && userMenu.length > 0 && (
            <Fragment>
              {userMenuButton}
              <MUIMenu
                id={`${dataCy}-user-menu`}
                anchorEl={userMenuAnchor}
                anchorOrigin={MENU_ITEMS_ANCHORING}
                keepMounted
                transformOrigin={MENU_ITEMS_ANCHORING}
                open={!!userMenuAnchor}
                onClose={() => setUserMenuAnchor(null)}
              >
                {userMenu.map(({ label, onClick }, index) => (
                  <MUIMenuItem
                    key={`user-menu-${index}`}
                    data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.userMenuItem, index)}
                    onClick={(event) => {
                      suppressEvent(event);
                      setUserMenuAnchor(null);
                      onClick();
                    }}
                  >
                    {label}
                  </MUIMenuItem>
                ))}
              </MUIMenu>
            </Fragment>
          )}
        </MUIBox>
      </MUIToolbar>
    </MUIAppBar>
  );
};

export const AppBarWithProps = AppBar;

export default localized(AppBar, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
