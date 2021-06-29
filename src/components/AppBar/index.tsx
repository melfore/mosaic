import React, { FC } from "react";
import { useMemo } from "react";
import { AppBar as MUIAppBar, Toolbar as MUIToolbar, useTheme } from "@material-ui/core";

import { IAppBar } from "../../types/AppBar";
import { Icons } from "../../types/Icon";
import { IMenu } from "../../types/Menu";
import { TypographyVariants } from "../../types/Typography";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import { logWarn } from "../../utils/logger";
import IconButton from "../IconButton";
import Menu from "../Menu";
import Typography from "../Typography";

export const DATA_CY_DEFAULT = "appbar";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: DATA_CY_SHORTCUT, type: "string" },
  { name: "userMenu.label", type: "any[]" },
  // TODO: review for localized hoc, adding "user.items.label"
];

export const SUBPARTS_MAP = {
  action: {
    label: "Action (at index n)",
    value: (n = `{n}`) => `action-${n}`,
  },
  localesMenu: {
    label: "Locales Menu",
  },
  localesMenuItem: {
    label: "Locales Menu Item (at index n)",
    value: (n = `{n}`) => `locales-menu-item-${n}`,
  },
  menu: {
    label: "Menu",
  },
  userMenu: {
    label: "User Menu",
  },
  userMenuItem: {
    label: "User Menu Item (at index n)",
    value: (n = `{n}`) => `user-menu-item-${n}`,
  },
  titleClickable: {
    label: "Title Clickable",
  },
  titleText: {
    label: "Title Text",
  },
};

const AppBar: FC<IAppBar> = ({
  actions = [],
  dataCy = DATA_CY_DEFAULT,
  locale,
  menu,
  onTitleClick,
  style,
  title,
  user,
  userMenu = [],
  username,
}) => {
  const theme = useTheme();

  const userProps = useMemo((): IMenu | undefined => {
    if (user) {
      return { ...user };
    }

    if (!userMenu || !userMenu.length) {
      return;
    }

    logWarn(
      "AppBar",
      'Deprecation notice, "userMenu" and "username" will be deprecated in favour of "user". Please update your code.'
    );

    const userMenuItems = userMenu.map((menuItem) => ({ ...menuItem, value: menuItem.label }));
    return {
      items: userMenuItems,
      label: username,
    };
  }, [user, userMenu, username]);

  return (
    <MUIAppBar data-cy={dataCy} position="sticky" style={style}>
      <MUIToolbar style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <div style={{ alignItems: "center", display: "flex" }}>
          {menu && (
            <IconButton dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.menu)} icon={menu.icon} onClick={menu.onClick} />
          )}
          {title && (
            <div
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
            </div>
          )}
        </div>
        <div style={{ alignItems: "center", display: "flex" }}>
          {actions.map(({ icon, onClick, style }, index) => (
            <IconButton
              key={`action-${index}`}
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.action, index)}
              icon={icon}
              onClick={onClick}
              style={{ marginRight: `${theme.spacing(0.5)}px`, ...style }}
            />
          ))}
          {locale && (
            <Menu dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.localesMenu)} icon={Icons.language} {...locale} />
          )}
          {userProps && (
            <Menu
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.userMenu)}
              icon={Icons.account}
              style={{ textTransform: "lowercase" }}
              {...userProps}
            />
          )}
        </div>
      </MUIToolbar>
    </MUIAppBar>
  );
};

export const AppBarWithProps = AppBar;

export default localized(AppBar, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
