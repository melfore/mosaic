import React, { FC } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { Typography as MUITypography } from "@material-ui/core";
import { BaseIntlType } from "../../types/Base";
import { TypographyType, TypographyVariants, TypographyDisplay } from "../../types/Typography";
import withIntl from "../../utils/hocs/withIntl";
import { getBottomSpacing, getTruncate, VARIANT_COMPONENT_MAP } from "./utils";

/**
 * Typography component made on top of `@material-ui/core/Typography`.
 */
const Typography: FC<TypographyType> = ({
  bottomSpacing = undefined,
  dataCy = "typography",
  label,
  loading = false,
  truncated = undefined,
  variant = TypographyVariants.body,
  display = TypographyDisplay.default,
}) => {
  return (
    <MUITypography
      className={`data-cy-${dataCy}`}
      gutterBottom={getBottomSpacing(variant, bottomSpacing)}
      noWrap={getTruncate(variant, truncated)}
      variant={variant}
      variantMapping={VARIANT_COMPONENT_MAP}
      display={display}
    >
      {loading ? <MUISkeleton /> : label}
    </MUITypography>
  );
};

export const TypographyIntl: FC<TypographyType & BaseIntlType> = withIntl(Typography);

export default Typography;
