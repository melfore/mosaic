import React, { FC, memo } from "react";
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
  src = undefined,
  text = undefined,
  variant = AvatarVariant.default,
}) => {
  return (
    <StyledMUIAvatar alt={text || alt} className={`data-cy-${dataCy}`} src={src || undefined} variant={variant}>
      {icon && <Icon name={icon} />}
      {!icon && <Typography label={text} />}
    </StyledMUIAvatar>
  );
};

export default memo(Avatar);
