import React, { cloneElement, FC, Fragment, useState, useMemo } from "react";
import { Collapse as MUICollapse, useTheme } from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { CardType } from "../../types/Card";
import { Icons } from "../../types/Icon";
import { TypographyVariants } from "../../types/Typography";
import Avatar from "../Avatar";
import IconButton from "../IconButton";
import Typography from "../Typography";
import {
  ActionsWrapper,
  StyledMUICard,
  StyledMUICardActions,
  StyledMUICardContent,
  StyledMUICardHeader,
} from "./styled";

/**
 * Card component made on top of `@material-ui/core/Card`
 */
const Card: FC<CardType> = ({
  actions = [],
  children,
  collapsible = undefined,
  icon = undefined,
  loading = false,
  title,
  subtitle = undefined,
  unmountCollapsible = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const cardHeader = useMemo(
    () => (
      <StyledMUICardHeader
        avatar={icon && <Avatar icon={icon} loading={loading} />}
        disableTypography
        title={
          <Typography
            bottomSpacing={false}
            label={title}
            loading={loading}
            truncated
            variant={TypographyVariants.title}
          />
        }
        subheader={
          <Typography
            bottomSpacing={false}
            label={subtitle}
            loading={loading}
            truncated
            variant={TypographyVariants.caption}
          />
        }
      />
    ),
    [icon, loading, subtitle, title]
  );

  return (
    <StyledMUICard>
      {cardHeader}
      <StyledMUICardContent>
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
              <IconButton icon={expanded ? Icons.up : Icons.down} onClick={() => setExpanded(!expanded)} />
            )}
          </StyledMUICardActions>
          {collapsible && (
            <MUICollapse in={expanded} timeout="auto" unmountOnExit={unmountCollapsible}>
              <StyledMUICardContent>{collapsible}</StyledMUICardContent>
            </MUICollapse>
          )}
        </Fragment>
      )}
    </StyledMUICard>
  );
};

export default Card;
