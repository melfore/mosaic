import React, { FC } from "react";
import { Typography as MUITypography } from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { TypographyDisplay, TypographyVariants } from "../..";
import { ITypography } from "../../types/Typography";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

const VARIANT_COMPONENT_MAP = {
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
  loading = false,
  truncated = false,
  variant = TypographyVariants.body,
  display = TypographyDisplay.default,
}) => {
  return (
    <MUITypography
      data-cy={`${dataCy}${loading ? "-loading" : ""}`}
      display={display}
      gutterBottom={bottomSpacing}
      noWrap={truncated}
      variant={variant}
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
