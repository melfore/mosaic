import React, { cloneElement, FC, Fragment, PropsWithChildren, useMemo, useState } from "react";
import {
  Card as MUICard,
  CardActions as MUICardActions,
  CardContent as MUICardContent,
  CardHeader as MUICardHeader,
  Collapse as MUICollapse,
  Skeleton as MUISkeleton,
  useTheme,
} from "@mui/material";

import { ICard } from "../../types/Card";
import { Icons } from "../../types/Icon";
import { getComposedDataCy } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Avatar from "../Avatar";
import IconButton from "../IconButton";
import Typography from "../Typography";

export const DATA_CY_DEFAULT = "card";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "title", type: "string" },
  { name: "subtitle", type: "string" },
];

export const SUBPARTS_MAP = {
  avatar: {
    label: "Avatar",
  },
  title: {
    label: "Title",
  },
  subtitle: {
    label: "Subtitle",
  },
  content: {
    label: "Content",
  },
  collapse: {
    label: "Collapse",
  },
  collapsibleContent: {
    label: "Collapsible Content",
  },
};

const Card: FC<PropsWithChildren<ICard>> = ({
  actions = [],
  children,
  collapsible,
  dataCy = DATA_CY_DEFAULT,
  icon,
  loading = false,
  style,
  subtitle,
  title,
  unmountCollapsible = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const cardHeader = useMemo(
    () => (
      <MUICardHeader
        avatar={
          icon && <Avatar dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.avatar)} icon={icon} loading={loading} />
        }
        disableTypography
        title={
          <Typography
            bottomSpacing={false}
            dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.title)}
            display="block"
            loading={loading}
            truncated
            variant="title"
          >
            {title}
          </Typography>
        }
        subheader={
          <Typography
            bottomSpacing={false}
            dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.subtitle)}
            loading={loading}
            truncated
            variant="caption"
          >
            {subtitle}
          </Typography>
        }
      />
    ),
    [dataCy, icon, loading, subtitle, title]
  );

  return (
    <MUICard data-cy={dataCy} style={{ margin: theme.spacing(2), width: `calc(100% - ${theme.spacing(4)})`, ...style }}>
      {cardHeader}
      <MUICardContent
        data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.content)}
        style={{ padding: `${theme.spacing(1)} ${theme.spacing(2)}` }}
      >
        {loading ? <MUISkeleton height={theme.spacing(16)} /> : children}
      </MUICardContent>
      {!loading && (
        <Fragment>
          <MUICardActions
            disableSpacing
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
            }}
          >
            {actions.length > 0 && (
              <div style={{ alignItems: "center", display: "flex" }}>
                {actions.map((action, index) => (
                  <div key={`card-action-${index}`} style={{ marginRight: theme.spacing(2) }}>
                    {cloneElement(action)}{" "}
                  </div>
                ))}
              </div>
            )}
            {collapsible && (
              <IconButton
                dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.collapse)}
                icon={expanded ? Icons.up : Icons.down}
                onClick={() => setExpanded(!expanded)}
              />
            )}
          </MUICardActions>
          {collapsible && (
            <MUICollapse in={expanded} timeout="auto" unmountOnExit={unmountCollapsible}>
              <MUICardContent
                data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.collapsibleContent)}
                style={{ padding: `${theme.spacing(1)} ${theme.spacing(2)}` }}
              >
                {collapsible}
              </MUICardContent>
            </MUICollapse>
          )}
        </Fragment>
      )}
    </MUICard>
  );
};

export const LocalizedCard = localized(Card, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});

export default LocalizedCard;
