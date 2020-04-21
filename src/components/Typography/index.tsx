import React, { FC } from "react";
import MUITypography from "@material-ui/core/Typography";
import { BaseIntlType } from "../../types/Base";
import { TypographyType, TypographyVariants } from "../../types/Typography";
import withIntl from "../../utils/hocs/withIntl";
import { getBottomSpacing, getTruncate, VARIANT_COMPONENT_MAP } from "./utils";

/**
 * Typography component made on top of `@material-ui/core/Typography`.
 */
const Typography: FC<TypographyType> = ({
  bottomSpacing = undefined,
  dataCy = "typography",
  label,
  truncated = undefined,
  variant = TypographyVariants.body,
}) => {
  return (
    <MUITypography
      className={`data-cy-${dataCy}`}
      gutterBottom={getBottomSpacing(variant, bottomSpacing)}
      noWrap={getTruncate(variant, truncated)}
      variant={variant}
      variantMapping={VARIANT_COMPONENT_MAP}
    >
      {label}
    </MUITypography>
  );
};

export const TypographyIntl: FC<TypographyType & BaseIntlType> = withIntl(Typography);

export default Typography;
