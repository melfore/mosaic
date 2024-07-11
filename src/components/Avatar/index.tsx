import React, { CSSProperties, FC, memo, useMemo } from "react";
import { Avatar as MUIAvatar, Skeleton as MUISkeleton, useTheme } from "@mui/material";

import { IAvatar } from "../../types/Avatar";
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
  variant = "circular",
}) => {
  const { palette } = useTheme();

  const avatarStyle = useMemo(
    (): CSSProperties => ({
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      ...style,
    }),
    [palette, style]
  );

  if (loading) {
    return (
      <MUISkeleton variant={variant === "circular" ? "circular" : "rectangular"}>
        <MUIAvatar data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.loading)} />
      </MUISkeleton>
    );
  }

  if (icon) {
    return (
      <MUIAvatar data-cy={dataCy} style={avatarStyle} variant={variant}>
        <IconWrapper dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.icon)} icon={icon} />
      </MUIAvatar>
    );
  }

  if (text) {
    return (
      <MUIAvatar data-cy={dataCy} style={avatarStyle} variant={variant}>
        <Typography dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.text)}>{text}</Typography>
      </MUIAvatar>
    );
  }

  return <MUIAvatar alt={alt} data-cy={dataCy} src={src} style={avatarStyle} variant={variant} />;
};

export const MemoizedAvatar = memo(Avatar);

export default MemoizedAvatar;
