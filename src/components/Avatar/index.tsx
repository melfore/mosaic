import React, { CSSProperties, FC, memo } from "react";
import { Avatar as MUIAvatar, useTheme } from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { AvatarVariant, IAvatar } from "../../types/Avatar";
import { getComposedDataCy } from "../../utils";
import IconWrapper from "../IconWrapper";
import Typography from "../Typography";

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
  style,
  text,
  variant = AvatarVariant.default,
}) => {
  const theme = useTheme();
  const baseStyle: CSSProperties = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  };

  if (loading) {
    return (
      <MUISkeleton variant="circle">
        <MUIAvatar data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.loading)} />
      </MUISkeleton>
    );
  }

  return (
    <MUIAvatar alt={text || alt} data-cy={dataCy} src={src} style={{ ...baseStyle, ...style }} variant={variant}>
      {icon && <IconWrapper dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.icon)} icon={icon} />}
      {!icon && text && <Typography dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.text)}>{text}</Typography>}
    </MUIAvatar>
  );
};

export const AvatarWithProps = Avatar;

export default memo(Avatar);
