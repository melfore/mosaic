import React, { FC, useMemo } from "react";
import {
  Skeleton as MUISkeleton,
  Typography as MUITypography,
  TypographyVariant as MUITypographyVariant,
} from "@mui/material";

import { ITypography, TypographyVariants } from "../../types/Typography";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

const VARIANT_COMPONENT_MAP: { [key in MUITypographyVariant]?: string } = {
  body1: "p",
  caption: "span",
  h5: "h1",
  h6: "h2",
  overline: "h4",
  subtitle1: "h3",
};

export const DATA_CY_DEFAULT = "typography";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "children", type: "string" },
  { name: "content", type: "string" },
];

const Typography: FC<ITypography> = ({
  bottomSpacing = false,
  children,
  content,
  dataCy = DATA_CY_DEFAULT,
  display = "initial",
  loading = false,
  style,
  truncated = false,
  variant = "body",
}) => {
  const muiVariant = useMemo((): MUITypographyVariant => {
    switch (variant) {
      case "body":
      case TypographyVariants.body:
        return "body1";
      case "caption":
      case TypographyVariants.caption:
        return "caption";
      case "label":
      case TypographyVariants.label:
        return "subtitle1";
      case "overline":
      case TypographyVariants.overline:
        return "overline";
      case "pagetitle":
      case TypographyVariants.pagetitle:
        return "h5";
      case "title":
      case TypographyVariants.title:
        return "h6";
      default:
        return "body1";
    }
  }, [variant]);

  return (
    <MUITypography
      data-cy={`${dataCy}${loading ? "-loading" : ""}`}
      display={display}
      gutterBottom={bottomSpacing}
      noWrap={truncated}
      style={style}
      variant={muiVariant}
      variantMapping={VARIANT_COMPONENT_MAP}
    >
      {loading ? <MUISkeleton /> : content || children}
    </MUITypography>
  );
};

export const TypographyWithProps = Typography;

export default localized(Typography, {
  dataCyShortcut: "dataCy",
  localizableProps: LOCALIZABLE_PROPS,
});
