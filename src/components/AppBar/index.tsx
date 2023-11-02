import React, { CSSProperties, FC, useMemo } from "react";
import { AppBar as MUIAppBar, Toolbar as MUIToolbar } from "@mui/material";

import { useMosaicContext } from "../../hooks/useMosaicContext";
import { AppBarProps } from "../../types/AppBar";
import { IMenu } from "../../types/Menu";
import { ISubpartMap } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import { logWarn } from "../../utils/logger";

import AppBarActions, { APPBAR_ACTIONS_SUBPARTS } from "./components/Actions";
import AppBarContent, { APPBAR_CONTENT_SUBPARTS } from "./components/Content";

export const DATA_CY_DEFAULT = "appbar";
export const DATA_CY_SHORTCUT = "title";

export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: DATA_CY_SHORTCUT, type: "string" },
  { name: "userMenu.label", type: "any[]" },
  // TODO: review for localized hoc, adding "user.items.label"
];

export const SUBPARTS_MAP: ISubpartMap = {
  ...APPBAR_CONTENT_SUBPARTS,
  ...APPBAR_ACTIONS_SUBPARTS,
};

const AppBar: FC<AppBarProps> = ({
  actions = [],
  children,
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
  const {
    view: { mobile },
  } = useMosaicContext();

  const toolbarStyle = useMemo(
    (): CSSProperties => ({
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
    }),
    []
  );

  // TODO: remove this when userMenu and username will be deprecated
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
      label: username || "User",
      type: mobile ? "icon" : "button",
    };
  }, [mobile, user, userMenu, username]);

  return (
    <MUIAppBar data-cy={dataCy} position="sticky" style={style}>
      <MUIToolbar style={toolbarStyle}>
        <AppBarContent dataCy={dataCy} menu={menu} onTitleClick={onTitleClick} title={title}>
          {children}
        </AppBarContent>
        <AppBarActions actions={actions} dataCy={dataCy} locale={locale} user={userProps} />
      </MUIToolbar>
    </MUIAppBar>
  );
};

export const AppBarWithProps = AppBar;

export default localized(AppBar, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
