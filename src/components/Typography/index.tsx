import React, { FC } from "react";
import MUITypography from "@material-ui/core/Typography";
import { BaseIntlType } from "../../types/Base";
import { TypographyType, TypographyVariants } from "../../types/Typography";
import withIntl from "../../utils/hocs/withIntl";
import { getBottomSpacing, getTruncate, VARIANT_COMPONENT_MAP } from "./utils";

/**
 * Typography component made on top of `@material-ui/core/Typography`.<br />
 * Usage: `import { Typography } from "@melfore/mosaic";`
 *
 * <b>Support for `react-intl`</b>
 * Supports usage inside `IntlProvider` context of `react-intl` using `TypographyIntl` exported version.<br />
 * Instead of passing `label` prop, provide `labelId` prop with the key-string to translate.<br />
 * Usage: `import { TypographyIntl } from "@melfore/mosaic";`
 *
 * <b>Testing with `cypress`</b>
 * The implementation offered by `@material-ui` doesn't support `dataCy` attribute.<br />
 * The value of the `dataCy` property is being used by `className` with the `data-cy-` prefix.<br />
 * Example: passing `dataCy="typography"` results in `className="data-cy-typography"`.
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
