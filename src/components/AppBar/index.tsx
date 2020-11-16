import React, { FC, Fragment, useMemo, useState } from "react";
import {
  AppBar as MUIAppBar,
  Box as MUIBox,
  Menu as MUIMenu,
  MenuItem as MUIMenuItem,
  PopoverOrigin as MUIPopoverOrigin,
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

import { StyledMUIToolbar, TitleWrapper } from "./styled";

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
  title,
  userMenu = [],
  username,
}) => {
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
      />
    );
  }, [dataCy, username]);

  return (
    <MUIAppBar data-cy={dataCy} position="sticky">
      <StyledMUIToolbar>
        <MUIBox alignItems="center" display="flex">
          {menu && (
            <IconButton
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.menuIcon)}
              icon={menu.icon}
              onClick={menu.onClick}
            />
          )}
          {title && (
            <TitleWrapper
              data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.titleClickable)}
              onClick={(event) => {
                suppressEvent(event);
                onTitleClick && onTitleClick();
              }}
            >
              <Typography dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.titleText)} variant={TypographyVariants.title}>
                {title}
              </Typography>
            </TitleWrapper>
          )}
        </MUIBox>
        <MUIBox alignItems="center" display="flex">
          {actions.map(({ icon, onClick }, index) => (
            <IconButton
              key={`action-${index}`}
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.actionIcon, index)}
              icon={icon}
              onClick={onClick}
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
      </StyledMUIToolbar>
    </MUIAppBar>
  );
};

export const AppBarWithProps = AppBar;

export default localized(AppBar, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
