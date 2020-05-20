import React, { cloneElement, FC, useState, useMemo } from "react";
import { Collapse as MUICollapse } from "@material-ui/core";
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
  collapsible = undefined,
  content,
  icon = undefined,
  title,
  subtitle = undefined,
  unmountCollapsible = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  const cardHeader = useMemo(
    () => (
      <StyledMUICardHeader
        avatar={icon && <Avatar icon={icon} />}
        disableTypography
        title={<Typography bottomSpacing={false} label={title} truncated variant={TypographyVariants.title} />}
        subheader={<Typography label={subtitle} truncated variant={TypographyVariants.caption} />}
      />
    ),
    [icon, subtitle, title]
  );

  return (
    <StyledMUICard>
      {cardHeader}
      <StyledMUICardContent>{content}</StyledMUICardContent>
      <StyledMUICardActions disableSpacing>
        {actions.length > 0 && (
          <ActionsWrapper alignItems="center" display="flex">
            {actions.map((action, index) => cloneElement(action, { key: `card-action-${index}` }))}
          </ActionsWrapper>
        )}
        {collapsible && <IconButton icon={expanded ? Icons.up : Icons.down} onClick={() => setExpanded(!expanded)} />}
      </StyledMUICardActions>
      {collapsible && (
        <MUICollapse in={expanded} timeout="auto" unmountOnExit={unmountCollapsible}>
          <StyledMUICardContent>{collapsible}</StyledMUICardContent>
        </MUICollapse>
      )}
    </StyledMUICard>
  );
};

export default Card;
