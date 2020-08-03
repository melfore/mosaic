import React, { cloneElement, FC, Fragment, useMemo, useState } from "react";
import { Collapse as MUICollapse, useTheme } from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { Avatar, IconButton, Icons, Typography, TypographyVariants } from "../..";
import { ICard } from "../../types/Card";
import { getComposedDataCy } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

import {
  ActionsWrapper,
  StyledMUICard,
  StyledMUICardActions,
  StyledMUICardContent,
  StyledMUICardHeader,
} from "./styled";

export const DATA_CY_DEFAULT = "card";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "title", type: "string" },
  { name: "subtitle", type: "string" },
];

const Card: FC<ICard> = ({
  actions = [],
  children,
  collapsible = undefined,
  dataCy = DATA_CY_DEFAULT,
  icon = undefined,
  loading = false,
  subtitle = undefined,
  title,
  unmountCollapsible = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const cardHeader = useMemo(
    () => (
      <StyledMUICardHeader
        avatar={icon && <Avatar dataCy={getComposedDataCy(dataCy, "avatar")} icon={icon} loading={loading} />}
        disableTypography
        title={
          <Typography
            bottomSpacing={false}
            dataCy={getComposedDataCy(dataCy, "title")}
            loading={loading}
            truncated
            variant={TypographyVariants.title}
          >
            {title}
          </Typography>
        }
        subheader={
          <Typography
            bottomSpacing={false}
            dataCy={getComposedDataCy(dataCy, "subtitle")}
            loading={loading}
            truncated
            variant={TypographyVariants.caption}
          >
            {subtitle}
          </Typography>
        }
      />
    ),
    [dataCy, icon, loading, subtitle, title]
  );

  return (
    <StyledMUICard data-cy={dataCy}>
      {cardHeader}
      <StyledMUICardContent data-cy={getComposedDataCy(dataCy, "content")}>
        {loading ? <MUISkeleton height={`${theme.spacing(16)}px`} /> : children}
      </StyledMUICardContent>
      {!loading && (
        <Fragment>
          <StyledMUICardActions disableSpacing>
            {actions.length > 0 && (
              <ActionsWrapper alignItems="center" display="flex">
                {actions.map((action, index) => cloneElement(action, { key: `card-action-${index}` }))}
              </ActionsWrapper>
            )}
            {collapsible && (
              <IconButton
                dataCy={getComposedDataCy(dataCy, "collapse")}
                icon={expanded ? Icons.up : Icons.down}
                onClick={() => setExpanded(!expanded)}
              />
            )}
          </StyledMUICardActions>
          {collapsible && (
            <MUICollapse in={expanded} timeout="auto" unmountOnExit={unmountCollapsible}>
              <StyledMUICardContent data-cy={getComposedDataCy(dataCy, "collapsible-content")}>
                {collapsible}
              </StyledMUICardContent>
            </MUICollapse>
          )}
        </Fragment>
      )}
    </StyledMUICard>
  );
};

export const CardWithProps = Card;

export default localized(Card, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
