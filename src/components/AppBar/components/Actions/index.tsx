import React, { CSSProperties, FC, useMemo } from "react";
import { useTheme } from "@mui/material";

import { IAppBarActions } from "../../../../types/AppBar";
import { Icons } from "../../../../types/Icon";
import { getComposedDataCy, ISubpartMap } from "../../../../utils";
import IconButton from "../../../IconButton";
import Menu from "../../../Menu";

export const APPBAR_ACTIONS_SUBPARTS: ISubpartMap = {
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
  userMenu: {
    label: "User Menu",
  },
  userMenuItem: {
    label: "User Menu Item (at index n)",
    value: (n = `{n}`) => `user-menu-item-${n}`,
  },
};

const DATA_CY_DEFAULT = "appbar-actions";

const AppBarActions: FC<IAppBarActions> = ({ actions, dataCy = DATA_CY_DEFAULT, locale, user }) => {
  const theme = useTheme();

  const localeMenuDataCy = useMemo(() => getComposedDataCy(dataCy, APPBAR_ACTIONS_SUBPARTS.localesMenu), [dataCy]);

  const userMenuDataCy = useMemo(() => getComposedDataCy(dataCy, APPBAR_ACTIONS_SUBPARTS.userMenu), [dataCy]);

  const userMenuStyle = useMemo(
    (): CSSProperties => ({
      textTransform: "lowercase",
    }),
    []
  );

  const actionsButtons = useMemo(() => {
    if (!actions) {
      return null;
    }

    return actions.map(({ badge, icon, onClick, style, tooltip }, index) => (
      <IconButton
        key={`action-${index}`}
        badge={badge}
        dataCy={getComposedDataCy(dataCy, APPBAR_ACTIONS_SUBPARTS.action, index)}
        icon={icon}
        onClick={onClick}
        style={{ marginRight: `${theme.spacing(0.5)}`, ...style }}
        tooltip={tooltip}
      />
    ));
  }, [actions, dataCy, theme]);

  const localeMenu = useMemo(() => {
    if (!locale) {
      return null;
    }

    return <Menu dataCy={localeMenuDataCy} icon={Icons.language} {...locale} />;
  }, [locale, localeMenuDataCy]);

  const userMenu = useMemo(() => {
    if (!user) {
      return null;
    }

    return <Menu dataCy={userMenuDataCy} icon={Icons.account} style={userMenuStyle} {...user} />;
  }, [user, userMenuDataCy, userMenuStyle]);

  const empty = useMemo(() => !actionsButtons && !localeMenu && !userMenu, [actionsButtons, localeMenu, userMenu]);

  const style = useMemo((): CSSProperties => ({ alignItems: "center", display: "flex" }), []);

  if (empty) {
    return null;
  }

  return (
    <div style={style}>
      {actionsButtons}
      {localeMenu}
      {userMenu}
    </div>
  );
};

export default AppBarActions;
