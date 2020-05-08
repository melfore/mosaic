import React, { FC } from "react";
import MUIAppBar from "@material-ui/core/AppBar";
import MUIToolbar from "@material-ui/core/Toolbar";
import IconButton from "../IconButton";
import Typography from "../Typography";
import Spacer from "../Spacer";
import { AppBarType } from "../../types/AppBar";
import { Icons } from "../../types/Icon";
import { TypographyVariants } from "../../types/Typography";
import { Color } from "../../types/Base";

/**
 * AppBar component made on top of `@material-ui/core/AppBar`
 */
const AppBar: FC<AppBarType> = ({ dataCy = "appbar", onNavigationMenuClick = undefined, title = undefined }) => {
  return (
    <MUIAppBar position="sticky">
      <MUIToolbar>
        {onNavigationMenuClick && (
          <IconButton
            color={Color.inherit}
            dataCy={`${dataCy}-navigation-menu`}
            icon={Icons.menu}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onNavigationMenuClick();
            }}
          />
        )}
        {onNavigationMenuClick && title && <Spacer />}
        {title && (
          <Typography
            bottomSpacing={false}
            dataCy={`${dataCy}-title`}
            label={title}
            variant={TypographyVariants.title}
          />
        )}
      </MUIToolbar>
    </MUIAppBar>
  );
};

export default AppBar;
