import React, { FC, Fragment, useState } from "react";
import {
  AppBar as MUIAppBar,
  Box as MUIBox,
  Menu as MUIMenu,
  MenuItem as MUIMenuItem,
  PopoverOrigin as MUIPopoverOrigin,
} from "@material-ui/core";

import { IAppBar } from "../../types/AppBar";
import { Color } from "../../types/Base";
import { Icons } from "../../types/Icon";
import { TypographyVariants } from "../../types/Typography";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
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

const AppBar: FC<IAppBar> = ({ actions = [], dataCy = "appbar", menu, onTitleClick, title, userMenu = [] }) => {
  const [userMenuAnchor, setUserMenuAnchor] = useState<any>(null);

  return (
    <MUIAppBar data-cy={dataCy} position="sticky">
      <StyledMUIToolbar>
        <MUIBox alignItems="center" display="flex">
          {menu && (
            <IconButton
              color={Color.inherit}
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
              color={Color.inherit}
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.actionIcon, index)}
              icon={icon}
              onClick={onClick}
            />
          ))}
          {userMenu && userMenu.length > 0 && (
            <Fragment>
              <IconButton
                color={Color.inherit}
                dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.userMenuIcon)}
                icon={Icons.account}
                onClick={() =>
                  setUserMenuAnchor(
                    document.querySelector(`button[data-cy='${getComposedDataCy(dataCy, SUBPARTS_MAP.userMenuIcon)}']`)
                  )
                }
              />
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
