import React, { FC } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { Typography as MUITypography } from "@material-ui/core";
import { ITypography, TypographyVariants, TypographyDisplay } from "../../types/Typography";
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
export const DATA_CY_SHORTCUT = "children";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "children", type: "string" }];

/**
 * Typography component made on top of `@material-ui/core/Typography`.
 */
const Typography: FC<ITypography> = ({
  bottomSpacing = false,
  children,
  dataCy = DATA_CY_DEFAULT,
  loading = false,
  truncated = false,
  variant = TypographyVariants.body,
  display = TypographyDisplay.default,
}) => {
  return (
    <MUITypography
      className={`data-cy-${dataCy}${loading ? "-loading" : ""}`}
      display={display}
      gutterBottom={bottomSpacing}
      noWrap={truncated}
      variant={variant}
      variantMapping={VARIANT_COMPONENT_MAP}
    >
      {loading ? <MUISkeleton /> : children}
    </MUITypography>
  );
};

export const TypographyWithProps = Typography;

export default localized(Typography, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
