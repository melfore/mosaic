import React, { FC, memo } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { IAvatar, AvatarVariant } from "../../types/Avatar";
import Icon from "../Icon";
import Typography from "../Typography";
import { StyledMUIAvatar } from "./styled";

export const DATA_CY_DEFAULT = "avatar";

// TODO: remove undefined from defaults and WithProps export
const Avatar: FC<IAvatar> = ({
  alt = "avatar",
  dataCy = DATA_CY_DEFAULT,
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
    <StyledMUIAvatar alt={text || alt} className={`data-cy-${dataCy}`} src={src} variant={variant}>
      {icon && <Icon name={icon} />}
      {!icon && text && <Typography>{text}</Typography>}
    </StyledMUIAvatar>
  );
};

// TODO: remove undefined from defaults and WithProps export
export const AvatarWithProps = Avatar;

export default memo(Avatar);
