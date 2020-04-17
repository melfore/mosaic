import React from "react";
import {} from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";
import { TypographyVariants } from "../../types/Typography";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from "../../utils/stories";
import Typography, { TypographyIntl } from ".";

export default {
  title: "Typography",
  component: Typography,
  parameters: {
    ...DOCS_PAGE_STRUCTURE,
  },
};

export const Canvas = () => (
  <Typography
    bottomSpacing={boolean("bottomSpacing", false)}
    label={text("label", "Typography example")}
    truncated={boolean("truncated", false)}
    variant={select("variant", TypographyVariants, TypographyVariants.body)}
  />
);

const allVariantsKeys = Object.keys(TypographyVariants);
const allVariantsValues = Object.values(TypographyVariants);
const allVariants: { [key: string]: string } = {};
allVariantsKeys.forEach((key, index) => (allVariants[key] = allVariantsValues[index]));
const getVariant = (variantKey: string) => allVariantsValues.find((vv) => vv === allVariants[variantKey]);
const allVariantsJsx = allVariantsKeys.map((variantKey) => (
  <div className="typography-wrapper">
    <Typography label={`${variantKey}`} variant={TypographyVariants.overline} />
    <Typography
      dataCy={`typography-${variantKey}`}
      label={`This is an example text`}
      variant={getVariant(variantKey)}
    />
  </div>
));

export const AllVariants = () => <StoriesWrapper>{allVariantsJsx}</StoriesWrapper>;

export const Truncated = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <div style={{ width: "50%" }}>
        <Typography label="Trucates with respect to parent width (resize window to make it happen)" truncated />
      </div>
      <div style={{ width: "200px" }}>
        <Typography label="Truncated all chars after 200px" truncated />
      </div>
    </div>
  </StoriesWrapper>
);

export const WithBottomSpacing = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <Typography label="Some text without bottom spacing" />
      <Typography bottomSpacing label="Some text with bottom spacing" />
      <Typography label="Other text" />
    </div>
  </StoriesWrapper>
);

export const WithIntl = () => (
  // IntlProviderMock simulates external IntlProvider context
  // The `TypographyIntl` exported version of `Typography` uses `labelId` prop to get a localized label.
  // When using `TypographyIntl` the prop `dataCy` can be omitted as it defaults to `labelId` value.
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <TypographyIntl labelId={MessageMock.typography} />
    </IntlProviderMock>
  </StoriesWrapper>
);
