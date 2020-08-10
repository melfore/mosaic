import React, { FC, memo } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { AvatarVariant, IAvatar } from "../../types/Avatar";
import { getComposedDataCy } from "../../utils";
import Icon from "../Icon";
import Typography from "../Typography";

import { StyledMUIAvatar } from "./styled";

export const DATA_CY_DEFAULT = "avatar";

export const SUBPARTS_MAP = {
  loading: {
    label: "Loading",
  },
  icon: {
    label: "Icon",
  },
  text: {
    label: "Text",
  },
};

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
        <StyledMUIAvatar data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.loading)} />
      </MUISkeleton>
    );
  }

  return (
    <StyledMUIAvatar alt={text || alt} data-cy={dataCy} src={src} variant={variant}>
      {icon && <Icon dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.icon)} name={icon} />}
      {!icon && text && <Typography dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.text)}>{text}</Typography>}
    </StyledMUIAvatar>
  );
};

export const AvatarWithProps = Avatar;

export default memo(Avatar);
