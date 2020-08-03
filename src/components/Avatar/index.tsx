import React, { FC, memo } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { AvatarVariant, Icon, Typography } from "../..";
import { IAvatar } from "../../types/Avatar";
import { StyledMUIAvatar } from "./styled";
import { getComposedDataCy } from "../../utils";

export const DATA_CY_DEFAULT = "avatar";

const Avatar: FC<IAvatar> = ({
  alt = "avatar",
  dataCy = DATA_CY_DEFAULT,
  icon,
  loading = false,
  src,
  text,
  variant = AvatarVariant.default,
}) => {
  if (loading) {
    return (
      <MUISkeleton variant="circle">
        <StyledMUIAvatar data-cy={getComposedDataCy(dataCy, "loading")} />
      </MUISkeleton>
    );
  }

  return (
    <StyledMUIAvatar alt={text || alt} data-cy={dataCy} src={src} variant={variant}>
      {icon && <Icon dataCy={getComposedDataCy(dataCy, "icon")} name={icon} />}
      {!icon && text && <Typography dataCy={getComposedDataCy(dataCy, "text")}>{text}</Typography>}
    </StyledMUIAvatar>
  );
};

export const AvatarWithProps = Avatar;

export default memo(Avatar);
