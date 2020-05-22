import React, { FC, Fragment, useState } from "react";
import {
  AppBar as MUIAppBar,
  Box as MUIBox,
  Menu as MUIMenu,
  MenuItem as MUIMenuItem,
  PopoverOrigin as MUIPopoverOrigin,
} from "@material-ui/core";
import { AppBarType } from "../../types/AppBar";
import { Icons } from "../../types/Icon";
import { TypographyVariants } from "../../types/Typography";
import { Color } from "../../types/Base";
import { suppressEvent } from "../../utils";
import IconButton from "../IconButton";
import Typography from "../Typography";
import Spacer from "../Spacer";
import { StyledMUIToolbar, TitleWrapper } from "./styled";

const MENU_ITEMS_ANCHORING: MUIPopoverOrigin = {
  vertical: "top",
  horizontal: "right",
};

/**
 * AppBar component made on top of `@material-ui/core/AppBar`
 */
const AppBar: FC<AppBarType> = ({
  actions = [],
  dataCy = "appbar",
  onNavigationMenuClick = undefined,
  onTitleClick = undefined,
  title = undefined,
  userMenu = [],
}) => {
  const [userMenuAnchor, setUserMenuAnchor] = useState<any>(null);

  return (
    <MUIAppBar position="sticky">
      <StyledMUIToolbar>
        <MUIBox alignItems="center" display="flex">
          {onNavigationMenuClick && (
            <IconButton
              color={Color.inherit}
              dataCy={`${dataCy}-navigation-menu`}
              icon={Icons.menu}
              onClick={(event) => {
                suppressEvent(event);
                onNavigationMenuClick();
              }}
            />
          )}
          {onNavigationMenuClick && title && <Spacer />}
          {title && (
            <TitleWrapper
              onClick={(event) => {
                suppressEvent(event);
                onTitleClick && onTitleClick();
              }}
            >
              <Typography
                bottomSpacing={false}
                dataCy={`${dataCy}-title`}
                label={title}
                variant={TypographyVariants.title}
              />
            </TitleWrapper>
          )}
        </MUIBox>
        <MUIBox alignItems="center" display="flex">
          {actions.map(({ icon, onClick }, index) => (
            <IconButton
              key={`action-button-${index}`}
              color={Color.inherit}
              dataCy={`${dataCy}-action-${index}`}
              icon={icon}
              onClick={(event) => {
                suppressEvent(event);
                onClick();
              }}
            />
          ))}
          {userMenu && userMenu.length > 0 && (
            <Fragment>
              <IconButton
                color={Color.inherit}
                dataCy={`${dataCy}-user-menu`}
                icon={Icons.account}
                onClick={(event) => {
                  suppressEvent(event);
                  setUserMenuAnchor(event.currentTarget);
                }}
              />
              <MUIMenu
                id={`${dataCy}-user-menu-items`}
                anchorEl={userMenuAnchor}
                anchorOrigin={MENU_ITEMS_ANCHORING}
                keepMounted
                transformOrigin={MENU_ITEMS_ANCHORING}
                open={!!userMenuAnchor}
                onClose={() => setUserMenuAnchor(null)}
              >
                {userMenu.map(({ label, onClick }) => (
                  <MUIMenuItem
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

export default AppBar;
