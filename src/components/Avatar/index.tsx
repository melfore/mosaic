import React, { FC, memo } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { AvatarType, AvatarVariant } from "../../types/Avatar";
import Icon from "../Icon";
import Typography from "../Typography";
import { StyledMUIAvatar } from "./styled";

/**
 * Avatar component made on top of `@material-ui/core/Avatar`
 */
const Avatar: FC<AvatarType> = ({
  alt = "avatar",
  dataCy = "avatar",
  icon = undefined,
  loading = false,
  src = undefined,
  text = undefined,
  variant = AvatarVariant.default,
}) => {
  if (loading) {
    return (
      <MUISkeleton variant="circle">
        <StyledMUIAvatar />
      </MUISkeleton>
    );
  }

  return (
    <StyledMUIAvatar alt={text || alt} className={`data-cy-${dataCy}`} src={src || undefined} variant={variant}>
      {icon && <Icon name={icon} />}
      {!icon && text && <Typography label={text} />}
    </StyledMUIAvatar>
  );
};

export default memo(Avatar);
